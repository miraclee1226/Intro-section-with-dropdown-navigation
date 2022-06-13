const featuresShowList = document.querySelector(".featuresShowList");

const arrowDown = document.getElementById("icon_arrow_down");

function arrowUp() {
    arrowDown.classList.toggle("src", "./assets/icon-arrow-up.svg")
}

featuresShowList.addEventListener("mouseenter", arrowUp);
// icon-arrow-up 해결못함
