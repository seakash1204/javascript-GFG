let button = document.querySelectorAll(".button");

button[0].addEventListener("click", ()=> {console.log("start button clicked")})

const toggleButton = () => {
    if(button[1].innerHTML === "Stop"){
        button[1].innerHTML = "Start";
        button[1].style.backgroundColor = "green";
        button[1].style.color = "white";
    }else{
        button[1].innerHTML = "Stop";
        button[1].style.backgroundColor = "red";
        button[1].style.color = "white";
    }
}
button[1].addEventListener("click", toggleButton)