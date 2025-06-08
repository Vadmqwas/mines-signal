const grid = document.getElementById("grid");
const signalBtn = document.getElementById("signalBtn");
const starCountSelect = document.getElementById("starCount");

function createGrid() {
  grid.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
  }
}

function generateSignal() {
  const starCount = parseInt(starCountSelect.value);
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.innerHTML = ""); // очистить

  const indices = [];
  while (indices.length < starCount) {
    const index = Math.floor(Math.random() * 25);
    if (!indices.includes(index)) {
      indices.push(index);
      const img = document.createElement("img");
      img.src = "star1.png"; // другая звезда
      cells[index].appendChild(img);
    }
  }
}

signalBtn.addEventListener("click", generateSignal);
createGrid();