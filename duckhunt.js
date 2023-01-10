window.onload = function () {
  const body = document.body;

  console.log(body);

  setInterval(() => {
    daffy.classList.toggle("flap")
    }, 250)
}

let moveDuck = (daffy) => {
  daffy.style.top = `${Math.random() * window.innerHeight}px`;
  daffy.style.left = `${Math.random() * window.innerWidth}px`;
};

let timeClock = (daffy) => { setInterval(moveDuck, 240, daffy); }

function createDuck() {
  let daffy = document.createElement("div")
  daffy.classList.add("duck")
  document.body.append(daffy)
  setInterval(() => {
    daffy.classList.toggle("flap")
  }, 250)
  setInterval(() => {
    moveDuck(daffy)
  }, 1000)
  daffy.addEventListener("click", () => {
    daffy.classList.add("shot")
    setTimeout(() => daffy.remove(), 1000)
    setTimeout(() => checkForWinner(), 1000)
  })
  return daffy
}