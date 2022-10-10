let loginButton = document.getElementById("login");

loginButton.addEventListener("click",function(){
    let request = new XMLHttpRequest;
    request.open("get","/login");
    request.send();
})