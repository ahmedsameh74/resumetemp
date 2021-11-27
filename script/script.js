const upBtn = document.getElementById('up');

window.onscroll = function () {
    if(window.pageYOffset>=400){
        upBtn.style.display = 'block';
    }else{
        upBtn.style.display = 'none';
    }
}
upBtn.onclick = function(){
    window.scrollTo(0,0);
}
const navLi = document.querySelectorAll('nav a');
navLi.forEach((li)=> {
    li.addEventListener('click', addActive);
})
function addActive(){
    navLi.forEach((li) => {
        li.classList.remove('activee')
        this.classList.add('activee')
    })
}
// function change(e){
//     console.log()
//     document.getElementById('img').classList.toggle("resize");
//     document.getElementById('img').classList.toggle("hover");    
// }
const img = Array.from(document.querySelectorAll(".items img"));
console.log(img)
img.forEach((ele) => {
    ele.addEventListener("click", fullScreen);
    ele.addEventListener("click", exitFS)
})
function fullScreen(){
    // console.log(this)
    // this.classList.toggle("resize");
    // this.classList.toggle("hover");
    if(this.requestFullscreen){
        this.requestFullscreen();
    }
}
function exitFS (){
    if(document.exitFullscreen){
    document.exitFullscreen();
}}


const hamIcon = document.querySelector(".ham")
const mobNav = document.querySelector(".nav");
const close = document.querySelector(".close");

hamIcon.addEventListener('click', openMenu);
function openMenu(){
    mobNav.classList.add('open')
}
close.addEventListener('click', closeMenu);
function closeMenu(){
    this.parentElement.classList.remove('open')
}
