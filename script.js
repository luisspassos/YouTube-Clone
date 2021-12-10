const clearSearchBtn = document.querySelector("#clearSearch");
const searchInput = document.querySelector(".searchInput input");
const virtualKeyboard = document.querySelector("#virtualKeyboard");
const form = document.querySelector("form");
const nextBtn = document.querySelector(".nextBtn");
const figureNextButton = document.querySelector(".nextBtn figure");

function borderAnimation() {
    figureNextButton.classList.add("borderNextBtn")
    setTimeout(()=> {
        figureNextButton.classList.remove("borderNextBtn")
    }, 1000)
}

nextBtn.addEventListener("dragend", ()=> {
    borderAnimation()
})

nextBtn.addEventListener("click", ()=> {
    borderAnimation()
})

form.addEventListener("submit", (e)=> {
    e.preventDefault();
})

searchInput.addEventListener("input", ()=> {
    if(searchInput.value !== "") {
        clearSearchBtn.style.display = "block"
        virtualKeyboard.style.right = "40px";
    } else {
        clearSearchBtn.style.display = "none"
        virtualKeyboard.style.right = "10px";
    }
})

clearSearchBtn.addEventListener("click", ()=> {
    searchInput.value = '';
    clearSearchBtn.style.display = "none";
    virtualKeyboard.style.right = "10px";
    searchInput.focus();
})

