let slide = document.querySelectorAll(".previews");
let card = document.querySelectorAll(".card");
let count = 0;

const navToggle = document.getElementById("bar");
const navList = document.getElementById("navList");
const closebtn = document.getElementById("closebtn");
let sliderInterval = null;

function isMobile() {
    return window.matchMedia("(max-width: 700px)").matches;
}

function setupSlider() {
    if (isMobile()) {
        slide.forEach(function(item){
            item.style.position = "static";
            item.style.left = "auto";
            item.style.transform = "none";
        });
        return;
    }

    slide.forEach(function(item,index){
        item.style.position = "absolute";
        item.style.left = `${index *100}%`;
    });
    myfun();
}

function myfun(){
    slide.forEach(function(curval){
        curval.style.transform = `translateX(-${count *100}%)`
    })
}

function startAutoSlide(){
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }
    if (isMobile()) {
        return;
    }
    sliderInterval = setInterval(function(){
        count++;
        if(count == slide.length){
            count = 0;
        }
        myfun();
    },2000);
}

setupSlider();
startAutoSlide();
window.addEventListener("resize", function(){
    setupSlider();
    startAutoSlide();
});

if (navToggle && navList) {
    navToggle.addEventListener("click", function(){
        navList.classList.toggle("open");
    });
    navList.querySelectorAll("a").forEach(function(link){
        link.addEventListener("click", function(){
            navList.classList.remove("open");
        });
    });
}

// CARDS

card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);
        document.querySelector(".detail").style.display = "block";
        document.querySelector(".content").innerHTML =`  <img src=${cards.firstElementChild.src}/>
                <div class="text">
                   <h1> </h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptate!vsvuvusdv udhvvsd uzhvzivs zvgivsv svugv izgvsivs.</p>
                
               
                </div>

                `

                closebtn.addEventListener("click",function(){
                    document.querySelector(".detail").style.display= "none";
                })
                
    })
})

