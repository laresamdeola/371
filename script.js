const tribe = document.querySelectorAll(".tribes");
const speed = 200;

tribe.forEach((ethnic) => {
  const allTribes = () => {
    const target = parseInt(ethnic.getAttribute("data-target"));
    const count = parseInt(ethnic.innerText);
    const times = Math.round(target / speed);
    
    if(count < target){
      ethnic.innerText = count + times;
      setTimeout(allTribes, 25);
    } else{
      ethnic.innerText = target;
    }
  }
  allTribes();
});