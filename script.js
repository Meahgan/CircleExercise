//
//
//
//
//
//
// for(let i = 1; i <= 300; i+=10){
//   let r = prompt(`Enter a radius to make a circle!`);
//   break;
// } if(input <= 50){
//
// }
//
// function calcArea(radius){
//   console.log(`Please give me a radius`);
//   return Math.PI*radius*radius;
// }
//
// calcArea(r);

class Circle {
  constructor(){
    this.radius = prompt("Enter a radius to make a circle!");
  }
  calcArea() {
    let area = this.radius * this.radius * Math.PI;
    return area;
  }
  outPutArea(){
    let el = document.getElementById('circle');
    let text = document.createTextNode('The circle has a radius of ${this.radius}');
    el.appendChild(text);
  }
  drawCircle(){ //<- method to draw the Circle
    //1) GRAB OUR TARGET ELEMENT (INSERT OUR NEW EL INTO HTML)
    let el = document.getElementById("outputCircle");
    //2) CREATE AN HTML OBJECT
    let cir = document.createElement("div");
    //3) ADD ON THE CIRCLE CLASS, PRESENT IN THE CSS
    cir.setAttribute("class", "circle");

    let height = this.radius;
    let width = this.radius;

    cir.style.width = '${width}px'; //<- STYLE TAGS - how you would set up  a property
    cir.style.height = '${height}px'; //<- STYLE TAGS - ticks are preferred for concatination

    el.appendChild(cir);
  }
}

let c = new Circle();
c.outPutArea(); //<- actually build the method out and call it
c.drawCircle();
