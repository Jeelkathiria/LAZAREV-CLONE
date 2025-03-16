

const nav = document.querySelector("nav");
function animation(){
nav.addEventListener("mouseenter", function (){   
    let tl = gsap.timeline();         
  tl.to(".nav-bottom",{
    height:"23vh"
  })
  tl.to(".navpart-2 h5 ",{
    display:"block"
  })

  tl.to(".navpart-2 h5 span",{
    y:0,
    stagger:{
        amount:0.6,
    }
  })
});

nav.addEventListener("mouseleave", function (){   
  console.log("mouse leave");
    let tl = gsap.timeline(); 
    
    tl.to(".navpart-2 h5 span",{
    y:-4,
    stagger:{
        amount:0.2,
    }
  })
  tl.to(".navpart-2 h5 ",{
    display:"none",
    duration:0.1
  })
  tl.to(".nav-bottom",{
    height:"0vh"
  })

  
});
}

function page2animation(){
  let rightElems = document.querySelectorAll(".right-elem");
let rightElemsImg = document.querySelectorAll(".right-elem");
rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    gsap.to(elem.childNodes[3],{
      opacity: 1,
      scale: 1,
    })
  })

  elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[3],{
      opacity : 0,
      scale: 0
    })
  })

  elem.addEventListener("mouseover",function(dets){
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-50,
      y:dets.y - elem.getBoundingClientRect().y-150,
    })
  })

})
}

function page3Videoanimation(){
  let page3Centre = document.querySelector(".page-3-center");
  let video = document.querySelector(".page-3 video");
  page3Centre.addEventListener("click",function(){
    page3Centre.style.zIndex = "-1";
    video.play();
    gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
    })
  })
  
  video.addEventListener("click",function(){
    video.pause();
    page3Centre.style.zIndex = "1";
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px",
    })
  })
}


function page4video(){
let sections = document.querySelectorAll(".page-4-right");

sections.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1;
    elem.childNodes[3].play();
    
  })
})

sections.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0;
    elem.childNodes[3].load();
  })
})
}

function page6Animations() {
  gsap.from("#btm6-part2 h4", {
      x: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#btm6-part2",
          scroller: "body",
          // markers:true,
          start: "top 80%",
          end: "top 5%",
          scrub: true
      }
  })
  
}






animation();
page2animation();
page3Videoanimation();
page4video()
page6Animations()