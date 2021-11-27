const switchTab = document.querySelectorAll('.switcher li');
let items =Array.from(document.querySelectorAll('.items .item'));
// console.log(items)
switchTab.forEach((li) => {
   li.addEventListener('click', removeActive);
   li.addEventListener('click', displayImg);

})
function removeActive(){
   switchTab.forEach((li) => {
      li.classList.remove('active');
      this.classList.add('active')
   })

}
function displayImg(){
   items.forEach((img) => {
      img.style.display='none'
   })
   document.querySelectorAll(this.dataset.cat).forEach((ele)=> {
      ele.style.display='block';
   })
}