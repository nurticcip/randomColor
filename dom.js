// setTimeout(() => {
//     console.log('motion');
// },1000)

// setInterval(() => {
//     console.log('motion')
// }, 1000)




const text = document.querySelectorAll('h1')
text.forEach((el) => {
    el.style.color = 'red'
})

setInterval(() => {
        text.forEach((el) => {
        el.style.display = 'blcok'
    })
}, 1000)

const box = document.querySelectorAll(".box");
const active = document.querySelector(".active");
const clear = document.querySelector(".clear");

setInterval(() => {
  box.forEach((el) => {
    el.style.background = randomColor();
    el.style.boxShadow = `0 0 10px ${randomColor()}`;
  });
}, 1000);

box.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.background = randomColor();
    el.style.boxShadow = `0 0 10px ${randomColor()}`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.background = "";
    el.style.boxShadow = "";
  });
});
console.log(box);
active.addEventListener("click", () => {
  box.forEach((el) => {
    el.style.background = randomColor();
    el.style.boxShadow = `0 0 10px ${randomColor()}`;
  });
});
clear.addEventListener("click", () => {
  box.forEach((el) => {
    el.style.background = "";
    el.style.boxShadow = "";
  });
});

// // #598674
// // #456984

function randomColor() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    console.log((color += Math.floor(Math.random() * 10)));
  }
  return color;
}
randomColor();



