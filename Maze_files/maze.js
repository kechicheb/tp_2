// Exo 01
// window.onload = () => {
//   document.querySelectorAll("#maze .boundary").forEach((boundary) => {
//     boundary.onmouseover = () => {
//       boundary.style.backgroundColor = "red";
//     };
//   });
// };

//Exo 02

// window.onload = () => {
//     let allBoundary  = Array.from(document.querySelectorAll("#maze .boundary"));
//    for(let i =0;i<allBoundary.length;i++) {
//     allBoundary[i].addEventListener("mouseover",()=> {
//         for(let j  =0;j<allBoundary.length;j++) {
//             allBoundary[j].style.backgroundColor = "red"
//         }
//     })
//    }
// };

//  Exo 03
window.onload = () => {
  document.getElementById("end").onmouseover = () => {
    alert("You win!");
  };
};
