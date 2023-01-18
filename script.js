function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const homebtn = document.getElementById("homebtn");
const projbtn = document.getElementById("projbtn");
const contbtn = document.getElementById("contbtn");

homebtn.addEventListener("click", myFunction1);
projbtn.addEventListener("click", myFunction2);
contbtn.addEventListener("click", myFunction3);

function myFunction1() {
    document.getElementById("projbtn").style.backgroundColor = '#333';
    document.getElementById("homebtn").style.backgroundColor = '#04AA6D';
    document.getElementById("contbtn").style.backgroundColor = '#333';
}

function myFunction2() {
    document.getElementById("projbtn").style.backgroundColor = '#04AA6D';
    document.getElementById("homebtn").style.backgroundColor = '#333';
    document.getElementById("contbtn").style.backgroundColor = '#333';
}

function myFunction3() {
 	document.getElementById("projbtn").style.backgroundColor = '#333';
    document.getElementById("homebtn").style.backgroundColor = '#333';
    document.getElementById("contbtn").style.backgroundColor = '#04AA6D';
}
