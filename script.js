const container = document.querySelector("#container");
const gridBtn = document.querySelector("#gridBtn");

let rainbowColorClick = false;

function gridBuild(numCells) {
  numCells = numCells || 16;
  console.log(rainbowColorClick);
  let cellWidth = 600 / numCells + "px";
  let cellHeight = 600 / numCells + "px";
  for (let j = 0; j < numCells; j++) {
    for (let i = 0; i < numCells; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.cssText = `width: ${cellWidth}; height: ${cellHeight}; `;
      container.appendChild(square);
      if (rainbowColorClick) {
        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = `hsl(${
            Math.random() * 360
          }, 100%, 50%)`;
        });
      } else {
        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "#000814";
        });
      }
    }
  }
}

function removeGrid() {
  let selectCells = document.querySelectorAll(".square").forEach((cell) => {
    container.removeChild(cell);
  });
}

gridBtn.addEventListener("click", () => {
  removeGrid();
  const promptNumCells = prompt("Enter a Grid Size. (Maximum: 100)");
  let numberCells = parseInt(promptNumCells, 10);
  if (isNaN(numberCells) || numberCells <= 0 || numberCells > 100) {
    window.alert("You must enter a positive integer. (Maximum: 100)");
    return;
  }

  gridBuild(numberCells);
});

rainbowColor.addEventListener("click", (e) => {
  rainbowColorClick = true;
  removeGrid();
  gridBuild();
});

window.addEventListener("DOMContentLoaded", () => {
  gridBuild();
});
