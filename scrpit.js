let leftside = document.querySelector(".left-side")
let sidbar = document.querySelector(".sidbar")
let container = document.querySelector(".container")



leftside.onclick = function(){
    sidbar.classList.toggle("sidbar-second")
  container.classList.toggle("large-container")
    
}
