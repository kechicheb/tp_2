window.onload = () => {
  const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector} `);
  };
  let status = true;
  // Exo 01

  //   document.querySelectorAll("#maze .boundary").forEach((boundary) => {
  //     boundary.onmouseover = () => {
  //       boundary.style.backgroundColor = "red";
  //     };
  //   });

  //Exo 02 ***************************
  //   lost();

  //  Exo 03 *************************************
  //   lost();
  //   selectElement("#end").onmouseover = () => {
  //     if (status == true) {
  //       alert("You Win !");
  //     } else {
  //       alert("You Lost !");
  //     }
  //   };

  //***************************************** */
  // Exo 04
  lost();
  status = true;
  let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
  let start = selectElement("#start");
  start.addEventListener("click", () => {
    allBoundary.forEach((e) => {
      e.style.backgroundColor = "#eeeeee";
    });
    status = true;
  });

  //***************************************** */
  //   Exo 05
  // Pushing existing code to github repo
  //   ********************************

  //***************************************** */
  // Exo 06
  lost();
  let h2Status = document.getElementById("status");
  let youWin = document.createTextNode("   You win !");
  let youLost = document.createTextNode("   You Lost");
  let myP = document.createElement("strong");

  selectElement("#end").onmouseover = () => {
    if (status == true) {
      myP.appendChild(youWin);
      myP.style.color = "green";
      h2Status.appendChild(myP);
    } else {
      myP.appendChild(youLost);
      myP.style.color = "red";
      h2Status.appendChild(myP);
      h2Status.appendChild(myP);
    }
  };
  start.addEventListener("click", () => {
    document.querySelector("#status strong").remove();
  });


  //   ************************************
  function lost() {
    let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
    for (let i = 0; i < allBoundary.length; i++) {
      allBoundary[i].addEventListener("mouseover", () => {
        for (let j = 0; j < allBoundary.length; j++) {
          allBoundary[j].style.backgroundColor = "red";
        }
        status = false;
      });
    }
  }
};
