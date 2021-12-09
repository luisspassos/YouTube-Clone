const clearSearchBtn = document.querySelector("#clearSearch");
const searchInput = document.querySelector(".searchInput input");
const virtualKeyboard = document.querySelector("#virtualKeyboard");
const form = document.querySelector("form");

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

