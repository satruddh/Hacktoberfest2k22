var questionDescriptionNode = document.getElementById("question");
var submitQuestionNode = document.getElementById("submitBtn");
var allQuestionsNode = document.getElementById("dataList");
var questionTitleNode = document.getElementById("subject");
var rightContainerNode = document.getElementById("rightContainer");
var createQuestionNode = document.getElementById("toggleDisplay");
var questionDetailContainerNode = document.getElementById("respondQue");
var resolveQuestionContainerNode = document.getElementById("resolveHolder");
var resolveQuestionNode = document.getElementById("resolveQuestion");
var respondContainerNode = document.getElementById("respondAns");
var commentContainerNode = document.getElementById("commentHolder");
var submitCommentNode = document.getElementById("commentBtn");
var commentatorNameNode = document.getElementById("pickName");
var commentNode = document.getElementById("pickComment");
var questionSearchNode = document.getElementById("questionSearch");
var upvote = document.getElementById("upvote");
var downvote = document.getElementById("downvote");



//event listener for searching question
questionSearchNode.addEventListener("keyup",function(event){
  // filtering questions
  filteredResult(event.target.value);
});

// function for filtering questions 

function filteredResult(query){
  getAllQuestions(function(allQuestions){
    if(query){
    
    //clearing left question pane
    clearQuestionPane();
    
    allQuestions.forEach(function(question){
      if(question.title.includes(query) ){
        addQuestionToPane(question);
      }
    });
  }
  else{
    clearQuestionPane();
    allQuestions.forEach(function(question){
      addQuestionToPane(question);
    })
  }
  });


}

//function for clearing question pane
function clearQuestionPane(){
  allQuestionsNode.innerHTML = "";
}
// on loading the page previous questions should appear on left panel
function onLoad(){
  getAllQuestions(function(allQuestions){
    allQuestions = allQuestions.sort(function(first, second){
    if(first.favourite){
      return -1;
    }
    return 1;
  })
  allQuestions.forEach(function(question){
    addQuestionToPane(question);
  })
  })
  
}

onLoad();

// Event listener for click on submit Button
submitQuestionNode.addEventListener("click",onQuestionSubmit);



//on submitting the question
function onQuestionSubmit(){
  var question = {
    title:questionTitleNode.value,
    description:questionDescriptionNode.value,
    responses:[],
    upvotes: 0,
    downvotes: 0,
    postedAt: Date.now(),
    favourite: false
  }

  // saving question 
  saveQuestion(question,function(){

  // adding question to left pane
  addQuestionToPane(question);

  });

  

 
}

//saving question to local Storage

function saveQuestion(question, onSave){

  getAllQuestions(function(allQuestions){
  allQuestions.push(question);
  
  var info = {
    data: JSON.stringify(allQuestions)
  }
  var request = new XMLHttpRequest();
  request.open("post", "https://storage.codequotient.com/data/save");
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(info));
  request.addEventListener("load",function(){
    onSave();
  })
  });
  

  
}

// getting all questions
function getAllQuestions(onResponse){
  var request = new XMLHttpRequest();
  request.open("get", "https://storage.codequotient.com/data/get");
  request.send();
  request.addEventListener("load",function(){

    var data = JSON.parse(request.responseText);
    var response = data.data?JSON.parse(data.data):[];
    onResponse(response);
  })

  
}

//adding question to left pane

function addQuestionToPane(question){
  //creating a div for question
  var questionContainerNode = document.createElement("div");
  questionContainerNode.setAttribute("id",question.title);
  questionContainerNode.style.background  = "grey";

  // node for question title
  var questionTitle = document.createElement("h4");
  questionTitle.innerHTML = question.title;
  questionContainerNode.appendChild(questionTitle);

  //node for question description
  var questionDescription = document.createElement("p");
  questionDescription.innerHTML = question.description;
  questionContainerNode.appendChild(questionDescription);

  //node for question upvote
  var upvoteTextNode = document.createElement("p");
  upvoteTextNode.innerHTML = "upvotes =" + question.upvotes;
  questionContainerNode.appendChild(upvoteTextNode);

  //node fror question downvote
  var downvoteTextNode = document.createElement("p");
  downvoteTextNode.innerHTML = "downvotes =" + question.downvotes;
  questionContainerNode.appendChild(downvoteTextNode);

  // node for time at which question had been posted
  var postedTime = document.createElement("h4");
  postedTime.innerHTML = "Posted : " + changeTimeFormat(question.postedAt) + " ago";
  questionContainerNode.appendChild(postedTime);

  var favouriteNode = document.createElement("button");
  if(question.favourite){
    favouriteNode.innerHTML = "Remove Fav";  
  }
  else{
    favouriteNode.innerHTML = "Add Fav";
  }
  
  
  questionContainerNode.appendChild(favouriteNode);
  favouriteNode.addEventListener("click", updateFavButton(question));

  //appending container of question to leftpane
  allQuestionsNode.appendChild(questionContainerNode);

  //Event listener for clicking on question container
  questionContainerNode.addEventListener("click", onContainerClick(question));
}

//updating favourite button
function updateFavButton(question){
  return function(event){
    //stop event bubbling
    event.stopPropagation();

    question.favourite = !question.favourite;
    updateQuestion(question);
    if(question.favourite){
      event.target.innerHTML = "Remove Fav";
    } 
    else{
      event.target.innerHTML = "Add Fav";
    }
  }
}

// on clicking on question container

function onContainerClick(question){
  return function(){
  // hiding right pane
  hideRightPane();

  //clear last question details
  clearQuestionDetails();
  clearResponseDetails();

  //showing question details
  showDetails();

 

  //showing clicked question details
  showQuestionOnRightPane(question);
  
  //show  all previous responses
  question.responses.forEach(function(response){
    addResponseToPanel(response);
  })

  //event listener for click on comment button
  submitCommentNode.onclick = onResponseSubmit(question);
  
  // removing question from left pane on clicking resolve button
  resolveQuestionNode.onclick = removeQuestionContainerNode(question);
  upvote.onclick = upvoteQuestion(question);
  downvote.onclick = downvoteQuestion(question);
 }
}

//function for removing question container node
function removeQuestionContainerNode(removedQuestion){
  return function(){
    var temp = removedQuestion;
  var removedQuestionNode = document.getElementById(removedQuestion.title);
  removedQuestionNode.innerHTML = "";

  updateQuestionAfterRemoval(temp);

  hideDetails();

  showRightPane();
}
}

// hiding rightpane function
function hideRightPane(){
  createQuestionNode.style.display = "none";
}
//show right pane
function showRightPane(){
  createQuestionNode.style.display = "block";
}

//function for clearing question details
function clearQuestionDetails(){
  questionDetailContainerNode.innerHTML = "";
}
//display question details
function showDetails(){
  questionDetailContainerNode.style.display = "block";
  resolveQuestionContainerNode.style.display = "block";
  respondContainerNode.style.display = "block";
  commentContainerNode.style.display = "block";
}

function hideDetails(){
  questionDetailContainerNode.style.display = "none";
  resolveQuestionContainerNode.style.display = "none";
  respondContainerNode.style.display = "none";
  commentContainerNode.style.display = "none";
}

//clearing response container
function clearResponseDetails(){
  respondContainerNode.innerHTML = "";
  
}

//showing question on right pane
function showQuestionOnRightPane(question){
  var titleNode = document.createElement("h3");
  titleNode.innerHTML = question.title;

  var descriptionNode = document.createElement("p");
  descriptionNode.innerHTML = question.description;

  questionDetailContainerNode.appendChild(titleNode);
  questionDetailContainerNode.appendChild(descriptionNode);
}

// on response submit
function onResponseSubmit(question){
  return function(){
    var response = {
      name:commentatorNameNode.value,
      description:commentNode.value
    };
    saveResponse(question,response);

    // adding response to right panel
    addResponseToPanel(response);
  }
}
//adding response to panel
function addResponseToPanel(response){
  
    var container = document.createElement("div");

    var commentatorName = document.createElement("h3");
    commentatorName.innerHTML = response.name;

    container.appendChild(commentatorName);

    var comment = document.createElement("p");
    comment.innerHTML = response.description;

    container.appendChild(comment);

    respondContainerNode.appendChild(container);
  
}

//save responses

function saveResponse(updatedQuestion,response){
  
  getAllQuestions(function(allQuestions){
    var revisedQuestions = allQuestions.map(function(question){
    if(updatedQuestion.title === question.title){
      //console.log(question);
      question.responses.push(response);
    }
    return question;
  });
  var request = new XMLHttpRequest();
  request.open("post", "https://storage.codequotient.com/data/save");
  request.setRequestHeader("Content-type", "application/json");
   var info = {data: JSON.stringify(revisedQuestions)};
   request.send(JSON.stringify(info));
  });
  
  
}

//upvote question
function upvoteQuestion(question){
  return function(){
    question.upvotes++;
    updateQuestion(question);
    updateQuestionUI(question);
  }
}

//downvote question 
function downvoteQuestion(question){
  return function(){
    question.downvotes++;
    updateQuestion(question);
    updateQuestionUI(question);
  }
}

//update question
function updateQuestion(updatedQuestion){
  getAllQuestions(function(allQuestions){
    var revisedQuestions = allQuestions.map(function(question){
    if(updatedQuestion.title === question.title){
      return updatedQuestion;
    }
    return question;
  });
  var info = { data: JSON.stringify(revisedQuestions)};
  var request = new XMLHttpRequest();
  request.open("POST","https://storage.codequotient.com/data/save");
  request.setRequestHeader("Content-type","application/json");
  request.send(JSON.stringify(info));
  });
  
  
}

//update local storage
function updateQuestionAfterRemoval(updatedQuestion){
  getAllQuestions(function(allQuestions){
    var revisedQuestions = allQuestions.filter(function(question){
      return updatedQuestion.title !== question.title;
  })
  var info = {data: JSON.stringify(revisedQuestions)}
  var request = new XMLHttpRequest();
  request.open("POST", "https://storage.codequotient.com/data/save");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(info));
  });
  
  
}

//update the question container during upvotind and downvoting

function updateQuestionUI(question){
  var questionContainerNode = document.getElementById(question.title);

  questionContainerNode.childNodes[2].innerHTML = "upvotes =" + question.upvotes;
  questionContainerNode.childNodes[3].innerHTML = "downvotes ="  + question.downvotes;

}

//changing time format
function changeTimeFormat(time){
  var currentTime = Date.now();
  var timeDifference = currentTime - time;
  var temp;
  var seconds = Math.round(timeDifference/1000);
  var minutes = Math.round(seconds/60);
  var hours = Math.round(minutes/60);
  var days = Math.round(hours/24);

  if(seconds){
    if(minutes){
      if(hours){
        if(days){
          temp = days + " days";
          return temp;
        }
        else{
          temp = hours + " hours";
          return temp;
        }
         
      }
      temp = minutes + " minutes";
      return temp;
    }
    temp = "Few Seconds";
    return temp;
  }
  else{
    return "Just Now";
  }
  
}