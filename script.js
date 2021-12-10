const clearSearchBtn = document.querySelector("#clearSearch");
const searchInput = document.querySelector(".searchInput input");
const virtualKeyboard = document.querySelector("#virtualKeyboard");
const form = document.querySelector("form");
const nextWrapper = document.querySelector(".nextWrapper");
const nextBtn = document.querySelector(".nextBtn");
const figureNextButton = document.querySelector(".nextBtn figure");
const tagList = document.querySelector(".tagList");

//tags

function borderAnimation() {
    figureNextButton.classList.add("borderNextBtn")
    setTimeout(()=> {
        figureNextButton.classList.remove("borderNextBtn")
    }, 1000)
}

function nextBtnFunc() {
    borderAnimation()

    tagList.style.transform = "translateX(-350px)"
    nextWrapper.classList.toggle("off");
}

nextBtn.addEventListener("dragend", ()=> {
   nextBtnFunc()
})

nextBtn.addEventListener("click", ()=> {
    nextBtnFunc()
})

// search

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

