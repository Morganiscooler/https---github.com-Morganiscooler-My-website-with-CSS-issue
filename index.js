// ERROR: These logs are not showing up in the console on the HTML page!!
//*Fix the console issue ASAP

//mouse movement tracker

// var markerDiv = document.createElement("div");
// markerDiv.innerHTML = "<div id='dot'></div>";
// document.getElementById("dot").appendChild(markerDiv.dot)
// // const dot = document.getElementById("dot");
// dot.className = "dot";


// // document.onmousemove = ('mousemove',(event) => {
// //     const {
// //       mouseX,
// //       mouseY
// //     } = event
// //     console.log(mouseX, mouseY)
// //   })
// window.onmousemove = e => 
// {
//     // const x = e.ClientX - dot.offsetWidth / 2,
//     //       y = e.ClientY - dot.offsetHeight / 2;
//     // console.log(`${mouseX}px`);
//     // console.log(`${mouseY}px`); // debugging test
    

//     dot.style.left = `${e.mouseX}px`;
//     dot.style.top = `${e.mouseY}px`;
    
    
//     console.log(document.body.children);
//     document.body.appendChild(dot);
//         dot = document.body.getElementsByClassName("dot")
//         setTimeout(() => document.body.removeChild(dot), 5 * 1000); // error line
// }
//
// Change DOMContentLoaded to another event, when mouse MOVES event, not idle!
const colors = ["rgb(255,124,92)","rgb(255,184,92)","rgb(168,255,92)","rgb(92,255,231)","rgb(144,92,255)","rgb(255,92,179)","rgb(102,255,171)"];
const symbols = ["✦", "✖"]; // work on randomizing varieties of cursor symbols & mess with their sizes individually
// const last = {
//   x: 568,
//   y: 392
// }
// const current = {
//   x: 610,
//   y: 436
// }

document.addEventListener("DOMContentLoaded", function () { 
    const trailContainer = document.createElement("div");
    trailContainer.className = "trail-container";
    document.body.appendChild(trailContainer);

    document.addEventListener("mousemove", function (event) {
      const trailDot = document.createElement("div");
      trailDot.innerHTML = "✦";
      trailDot.className = "trail";
      trailDot.style.left = event.pageX + "px";
      trailDot.style.top = event.pageY + "px";

      // distance between the particles

      // if(calcDistance(last, current) >= 100) {
      //   // create star 
      // }
      
      // colors for the trail
      
      //trying to make a random symbol generator from array DO THIS LATER!!!**
      // var randomlyGeneratedSymbol = Math.floor(Math.random() * symbols.length);
      //  console.log("randomlyGeneratedSymbol: " + randomlyGeneratedSymbol);
      var randomlyGeneratedNumber = Math.floor(Math.random() * colors.length);
        //  console.log("randomlyGeneratedNumber:" + randomlyGeneratedNumber);
        //  console.log("randomlyGeneratedColor:" + colors[randomlyGeneratedNumber]);
      
      // var animations = ["fall-1","fall-2","fall-3"];
      // var selectRandom(animations);

     // retrieving the x & y positions of the cursor
      // var bodyRect = document.body.getBoundingClientRect(),
      // elemRect = element.getBoundingClientRect(),
      // offset   = elemRect.top - bodyRect.top;

      // alert('Element is ' + offset + ' vertical pixels from <body>');

      trailDot.style.color = colors[randomlyGeneratedNumber]; // work on Random color generator 
      console.log(trailDot.style.color);
      // console.log(Math.floor(Math.random() * colors.length)); // generator works
      trailContainer.appendChild(trailDot);

      // Remove the oldest dot after a certain number of dots
      const dots = document.querySelectorAll(".trail");
      if (dots.length > 8) {
        trailContainer.removeChild(dots[0]);
      }
      else
      {
         // remove the trail when mouse movement is NOT detected*
      }
    });
  });
  
function selectRandom(colors) // function to grab random colors from the array "colors"
{
  return Math.floor(Math.random() * colors.length);
}
function calcDistance()
{
  // define calculating distance between the 2 cursor positions
  // figure out how to calculate the distance HERE
  trailDot.x - trailDot.x
  trailDot.y - trailDot
}
function click()
{
    
}
