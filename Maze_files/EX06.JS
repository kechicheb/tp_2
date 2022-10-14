window.onload = () => {
  const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector} `);
  };
  let status = true;
  let h2Status = selectElement("#status");
  let youWin = document.createTextNode("   You win !");
  let youLost = document.createTextNode("   You Lost");
  let myStrong = document.createElement("strong");

  function lost() {
    let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
    for (let i = 0; i < allBoundary.length; i++) {
      allBoundary[i].addEventListener("mouseover", () => {
        for (let j = 0; j < allBoundary.length; j++) {
          allBoundary[j].style.backgroundColor = "red";
        }
        myStrong.appendChild(youLost);
        myStrong.style.color = "red";
        h2Status.appendChild(myStrong);
        h2Status.appendChild(myStrong);
        status = false;
      });
    }
  }
  lost();
  let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
  let start = selectElement("#start");
  start.addEventListener("click", () => {
    allBoundary.forEach((e) => {
      e.style.backgroundColor = "#eeeeee";
    });
    status = true;
  });
  selectElement("#end").onmouseover = () => {
    if (status == true) {
      myStrong.appendChild(youWin);
      myStrong.style.color = "green";
      h2Status.appendChild(myStrong);
    }
  };
  start.addEventListener("click", () => {
    selectElement("#status strong").remove();
  });
};
