const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");

const color = document.querySelector(".color");
btn.addEventListener("click", function(){



    const randoNumber = Math.floor(Math.random()*colors.length);
    console.log(randoNumber);
    document.body.style.backgroundColor = colors[randoNumber];
    color.textContent=colors[randoNumber];
});

