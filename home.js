for(i = 0; i <= 25; i++){
  switch(i){
    case 0:
      let a = document.getElementById("starting-with-a");
      a.addEventListener("mouseover", () => {
        a.innerText = "A";
      });
      a.addEventListener("mouseout", () => {
        a.innerText = "AGBO";
      });

    case 1:
      let b = document.getElementById("starting-with-b");
      b.addEventListener("mouseover", () => {
        b.innerText = "B";
      });
      b.addEventListener("mouseout", () => {
        b.innerText = "BEROM";
      });
  }
}



