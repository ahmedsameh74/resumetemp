const firstBar = document.getElementsByClassName('bar')[0];
const secondBar = document.getElementsByClassName('barTwo')[0];
const threeBar = document.getElementsByClassName('barThree')[0];
const fourBar = document.getElementsByClassName('barFour')[0];
const fiveBar = document.getElementsByClassName('barFive')[0];
const sixBar = document.getElementsByClassName('barSix')[0];
setInterval(()=>{
   const computedStyle = getComputedStyle(firstBar);
   const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
   firstBar.style.setProperty('--width',width +.1);
},5)
setInterval(()=>{
    const computedStyle = getComputedStyle(secondBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    secondBar.style.setProperty('--width',width +.1);
 },5)
 setInterval(()=>{
    const computedStyle = getComputedStyle(threeBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    threeBar.style.setProperty('--width',width +.1);
 },5)
 setInterval(()=>{
    const computedStyle = getComputedStyle(fourBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    fourBar.style.setProperty('--width',width +.1);
 },5)
 setInterval(()=>{
    const computedStyle = getComputedStyle(fiveBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    fiveBar.style.setProperty('--width',width +.1);
 },5)
 setInterval(()=>{
    const computedStyle = getComputedStyle(sixBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    sixBar.style.setProperty('--width',width +.1);
 },5)




 