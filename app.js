function startApp(){
    let name = document.getElementById("username").value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("learnloopUser", name);
    window.location.href = "dashboard.html";
}
