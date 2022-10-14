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

  lost();

  //  Exo 03 *************************************

  selectElement("#end").onmouseover = () => {
    if (status == true) {
      alert("You Win !");
    } else {
      alert("You Lost !");
    }
  };

  //***************************************** */
  // Exo 04

  status = true;
  let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
  let start = selectElement("#start");
  start.addEventListener("click", () => {
    allBoundary.forEach((e) => {
      e.style.backgroundColor = "#eeeeee";
    });
    status = true;
  });

  //   ********************************

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
