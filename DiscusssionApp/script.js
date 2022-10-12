let questionSubject = document.querySelector('#questionSubject')
let questionDescription = document.querySelector('#questionDescription')
let submit = document.querySelector('#submit')
let allQuestions = document.querySelector('.allQuestions')
let submitResponse = document.querySelector('#submitResponse')
let newQuestionFormBtn = document.querySelector('#newQuestionFormBtn')
let searchQ = document.querySelector('#srchQuestion')
const LOCAL_QUES_KEY = 'ques'
const LOCAL_ANS_KEY = 'ans'


let allQuestionsMap = initStorage(LOCAL_QUES_KEY)
let allAnswerMap = initStorage(LOCAL_ANS_KEY)

function loadQuestionsOnLoad()
{
    let noQSpan = document.getElementById('noquestions')

    if (allQuestionsMap.size == 0 && allQuestions.childElementCount == 1) {
        noQSpan.style.display = "block"
        allQuestions.style['justify-content'] = 'space-around'
        return;
    }
    else{
        noQSpan.style.display = "none"
    }
    allQuestionsMap.forEach(e => {
        addToLeftPane(e)
    })
    document.querySelector('.showQuestionContainer').style['display'] = "none"

}

window.addEventListener('load', loadQuestionsOnLoad)

newQuestionFormBtn.addEventListener('click', function () {
    document.querySelector('.showQuestionContainer').style["display"] = "none"
    document.querySelector('.createQuestionContainer').style["display"] = "block"
    document.currId = ""
})

submit.addEventListener('click', postQuestion)
submitResponse.addEventListener('click', addResponse)
searchQ.addEventListener('input', handleSearch)

function initStorage(key) {
    let store = localStorage.getItem(key)
    if (store == null)
        store = new Map()
    else{
        if(key===LOCAL_QUES_KEY)
            store = new Map(JSON.parse(store))
        else{
            store = convertToMap(JSON.parse(store))
            store = sortByVotes(store)
        }
    }
    return store
}

function postQuestion() {
    let subject = questionSubject.value
    let que = questionDescription.value
    if (isValid(subject) && isValid(que)) {
        storeQuestion(parseInput(subject, que))
    }
    else {
        alert("Empty fields!!")
    }
    questionSubject.value = ""
    questionDescription.value = ""
    return;
}

function isValid(subject) {
    subject = subject.replace(/^\s+|\s+$/g, '')
    if (subject == '')
        return false;
    return true;
}

function parseInput(subject, que) {
    //input : -subject
    //        -que
    //output : object=> -title
    //                  -description
    //                  -isResolved
    //                  -createdAt
    let ques = {
        title: subject,
        description: que,
        // ans: [],
        isResolved: false,
        createdAt: Date.now(),
    }
    return ques
}

function updateLocalStorage(key,targetArray){
    let x = JSON.stringify(targetArray)
    localStorage.setItem(key,x)
}

function storeQuestion(inp) {
    //input : object=> -title
    //                 -description
    //                 -isResolved
    //                 -createdAt
    allQuestionsMap.set(inp.createdAt,inp)
    allAnswerMap.set(inp.createdAt,new Map())
    let temp = convertToArray(allAnswerMap)
    let t1 = [...allQuestionsMap]
    updateLocalStorage(LOCAL_QUES_KEY,t1)
    updateLocalStorage(LOCAL_ANS_KEY,temp)
    document.querySelector('#noquestions').style["display"] = "none"
    addToLeftPane(inp)
}

function addToLeftPane(inp) {
    //input : inp object with properties
    //          -title
    //          -description
    //          -isResolved
    //          -createdAt
    if(inp.isResolved) return;
    allQuestions.style['justify-content'] = "unset"
    let innerdiv = document.createElement('div')
    innerdiv.id = inp.createdAt
    innerdiv.classList.add('questionBanner')
    let qTitle = document.createElement('div')
    let qContent = document.createElement('div')
    qTitle.classList.add('qTitle')
    qContent.classList.add('qContent')
    qTitle.innerHTML = inp.title
    qContent.innerHTML = inp.description
    innerdiv.append(qTitle, qContent)
    innerdiv.addEventListener('click', function (e) {
        showQuestion(inp.createdAt)
    })
    allQuestions.prepend(innerdiv)
}

function showQuestion(elem) {
    allAnswerMap = sortByVotes(allAnswerMap)
    let allResponses = new Map(allAnswerMap.get(Number(elem)))

    elem = allQuestionsMap.get(Number(elem))
    document.querySelector('.createQuestionContainer').style['display'] = "none";
    document.querySelector('.showQuestionContainer').style['display'] = "block"
    let selectedQuesTitle = document.querySelector('#selectedQuesTitle')
    let selectedQuesDescription = document.querySelector('#selectedQuesDescription')
    let responses = document.querySelector('.responses')
    let resolve = document.querySelector('#resolve')
    if (elem.isResolved)
        resolve.disabled = true;
    else
        resolve.disabled = false
    resolve.addEventListener('click', function () {
        resolved(elem.createdAt)
        resolve.disabled = true;
        allQuestions.innerHTML = "<span class='noresponse' id='noquestions'>No Questions</span>"
        loadQuestionsOnLoad();
    })
    responses.innerHTML = "<h3>Response</h3>"
    selectedQuesTitle.innerHTML = elem.title
    selectedQuesDescription.innerHTML = elem.description
    if (allResponses.size) {
        allResponses.forEach(element => {
            addToResponseDOM(element)
        })
    }
    else {
        let span = document.createElement('span')
        span.classList.add('noresponse')
        span.innerHTML = "No Responses Yet"
        responses.appendChild(span)
    }
    document.currId = elem.createdAt

}

function resolved(key) {
    let elem = allQuestionsMap.get(Number(key))
    elem.isResolved = true
    allQuestionsMap.set(Number(key), elem)
    localStorage.setItem(LOCAL_QUES_KEY, JSON.stringify([...allQuestionsMap]))
    document.querySelector('.createQuestionContainer').style['display'] = "block";
    document.querySelector('.showQuestionContainer').style['display'] = "none";
}

function addResponse() {
    let nameOfResponder = document.querySelector('#nameOfResponder')
    let userResponse = document.querySelector('#userResponse')
    if (!(isValid(nameOfResponder.value) && isValid(userResponse.value))) {
        alert("Empty Fields!")
        nameOfResponder.value = ""
        userResponse.value = ""
        return;
    }

    let answer = parseResponse(nameOfResponder.value, userResponse.value)
    let currQuesAns = new Map(allAnswerMap.get(Number(document.currId)))
    currQuesAns.set(answer.time,answer)
    allAnswerMap.set(document.currId,currQuesAns)

    updateLocalStorage(LOCAL_ANS_KEY,convertToArray(allAnswerMap))

    document.querySelector('.noresponse').style['display'] = "none"
    addToResponseDOM(answer)
    nameOfResponder.value = ""
    userResponse.value = ""
}

function parseResponse(nameOfResponder, userResponse) {
    let answer = {
        responder: nameOfResponder,
        response: userResponse,
        time: Date.now(),
        upvotes: 0,
        downvotes: 0,
    }
    return answer;
}

function addToResponseDOM(answer) {
    let responses = document.querySelector('.responses')
    let banner = document.createElement('div')
    let upvoteBtn = document.createElement('button')
    let downvoteBtn = document.createElement('button')
    banner.classList.add('banner')
    let h4 = document.createElement('h4')
    h4.innerHTML = answer.responder
    h4.classList.add('uname')
    let p = document.createElement('p')
    p.innerHTML = answer.response
    p.classList.add('answer')
    let div = document.createElement('div')
    div.classList.add('voteControls')
    upvoteBtn.classList.add(`${answer.time}`)
    downvoteBtn.classList.add(`${answer.time}`)
    upvoteBtn.innerHTML = `${answer.upvotes} Upvote`
    downvoteBtn.innerHTML = `${Math.abs(answer.downvotes)} Downvote`
    upvoteBtn.addEventListener('click',function(e){
        answer.upvotes+=1
        let currQuesAns = new Map(allAnswerMap.get(Number(document.currId)))
        currQuesAns.set(answer.time,answer)
        allAnswerMap.set(Number(document.currId),currQuesAns)
        updateLocalStorage(LOCAL_ANS_KEY,convertToArray(allAnswerMap))
        upvoteBtn.innerText =`${answer.upvotes} upvotes`
        upvoteBtn.disabled = true
        downvoteBtn.disabled = true
    })
    downvoteBtn.addEventListener('click',function(e){

        answer.downvotes-=1
        let currQuesAns = new Map(allAnswerMap.get(Number(document.currId)))
        currQuesAns.set(answer.time,answer)
        allAnswerMap.set(Number(document.currId),currQuesAns)
        updateLocalStorage(LOCAL_ANS_KEY,convertToArray(allAnswerMap))
        downvoteBtn.innerText=`${Math.abs(answer.downvotes)} downvotes`
        downvoteBtn.disabled=true
        upvoteBtn.disabled = true
    })
    div.append(upvoteBtn, downvoteBtn)
    banner.append(h4, p, div)
    responses.appendChild(banner)
}

function handleSearch() {

    let inpStr = searchQ.value
    allQuestions.innerHTML = "<span class='noquestion' id='noquestions'>No Questions</span>"
    noQSpan = document.getElementById('noquestions')
    if (!isValid(inpStr)) {

        allQuestions.style["justify-content"] = "space-around"
        if (allQuestionsMap.size ===0 && allQuestions.childElementCount == 1)
            noQSpan.style.display = "block"
        else
            noQSpan.style.display = "none"
        allQuestionsMap.forEach(e => {
            addToLeftPane(e)
        })
    }
    else {
        let foundObjects = filterResult(allQuestionsMap, inpStr)

        if (foundObjects.length == 0) {
            allQuestions.style["justify-content"] = "space-evenly"
        }
        else
            noQSpan.style["display"] = "none"
        foundObjects.forEach(e => {
            addToLeftPane(e)
        })
    }

}

function filterResult(arr, inpStr) {
    //input : arr is a map of all questions
    //          - key : 'createdAt' property of the object
    //          - value : object with following properties
    //                      -title
    //                      -description
    //                      -isResolved
    //                      -createdAt
    //output : array of object. Each object in array has following properties
    //                      -title
    //                      -description
    //                      -isResolved
    //                      -createdAt
    inpStr = inpStr.toLowerCase()
    arr = [...arr]
    arr = arr.filter(([k, v]) => {
        const t = v.title.toLowerCase().includes(inpStr)
        const d = v.description.toLowerCase().includes(inpStr)
        return t || d
    })

    let tempArr = []

    arr.forEach(elem => {
        tempArr.push(elem[1])
    })

    return tempArr
}

function sortByVotes(allAnswerMap) {
    allAnswerMap.forEach((value,key,allAnswerMap) =>{
        let t = [...value]
        t.sort((a,b) => b[1].upvotes - a[1].upvotes || Math.abs(a[1].downvotes) - Math.abs(b[1].downvotes))
        value = new Map(t)
        allAnswerMap.set(key,value)
    })
    return allAnswerMap
}

console.log(allAnswerMap)
console.log(sortByVotes(allAnswerMap))

function convertToArray(sourceMap)
{
    //convert Map of Map to Array of Array
    sourceMap=[...sourceMap]
    sourceMap.forEach(elem=>{
        elem[1]=[...elem[1]]
    })
    return sourceMap
}

function convertToMap(sourceArray)
{
    //convert Array of Array representation of map to Map of Map
    sourceArray = new Map(sourceArray)
    sourceArray.forEach((elem,key,sourceArray) =>{
        elem = new Map(elem)
        sourceArray.set(key,elem)
    })
    return sourceArray
}