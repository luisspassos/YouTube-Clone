const clearSearchBtn = document.querySelector("#clearSearch");
const searchInput = document.querySelector(".searchInput input");
const virtualKeyboard = document.querySelector("#virtualKeyboard");
const form = document.querySelector("form");
const nextWrapper = document.querySelector(".nextWrapper");
const prevWrapper = document.querySelector(".prevWrapper");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const figureNextButton = document.querySelector(".nextBtn figure");
const figurePrevButton = document.querySelector(".prevBtn figure")
const tagList = document.querySelector(".tagList");
const menu = document.querySelector("#menu");
const secondAside = document.querySelector(".secondAside");
const body = document.querySelector("body");
const menuAndLogo = document.querySelector(".menuAndLogo");
const firstAside = document.querySelector(".firstAside");
const options = document.querySelectorAll(".options");
const videos = document.querySelectorAll(".videos li");
const videoImg = document.querySelectorAll(".videoImg"); 

function borderAnimation(el) {
    el.classList.remove("animatedBorder")

    el.classList.add("animatedBorder")
    setTimeout(()=> {
        el.classList.remove("animatedBorder")
    }, 1000)

}

//tags

function tagBtnsFunc(translate, el) {
    borderAnimation(el)

    tagList.style.transform = `translateX(${translate})`
    nextWrapper.classList.toggle("off");
    prevWrapper.classList.toggle("off");
}

prevBtn.addEventListener("dragend", ()=> {
    tagBtnsFunc("0px", figurePrevButton)
})

prevBtn.addEventListener("click", ()=> {
    tagBtnsFunc("0px", figurePrevButton)
})

nextBtn.addEventListener("dragend", ()=> {
   tagBtnsFunc("-550px", figureNextButton)
})

nextBtn.addEventListener("click", ()=> {
    tagBtnsFunc("-550px", figureNextButton)
})

// search

form.addEventListener("submit", (e)=> {
    e.preventDefault();
})

searchInput.addEventListener("input", ()=> {
    if(searchInput.value !== "") {
        clearSearchBtn.style.display = "block"
        virtualKeyboard.style.right = "40px";
        searchInput.classList.add("xPadding");
    } else {
        clearSearchBtn.style.display = "none"
        virtualKeyboard.style.right = "10px";
        searchInput.classList.remove("xPadding");
    }
})

clearSearchBtn.addEventListener("click", ()=> {
    searchInput.value = '';
    clearSearchBtn.style.display = "none";
    virtualKeyboard.style.right = "10px";
    searchInput.focus();
})

// aside

menu.addEventListener("click", ()=> {
    if(window.innerWidth > 1270) {
        
        borderAnimation(menu)

        menuAndLogo.classList.toggle("filledMenu");
        secondAside.classList.toggle("off");
        firstAside.classList.toggle("off");
        body.classList.toggle("firstAsideGrid");
    
        videos.forEach(video => {
            video.classList.toggle("firstAsideVideos")
        })
    
        videoImg.forEach(img => {
            img.classList.toggle("firstAsideVideoImgs")
        })
    } 
})

// video 

options.forEach(opt => {
    opt.addEventListener("click", ()=> {
        borderAnimation(opt);
    })
})
