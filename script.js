document.getElementById("menu_bar").addEventListener("click",function(){
    document.querySelector(".menu_box").style.display = "flex";
    document.querySelector(".menu_box").style.right = "0%"
})

document.getElementById("close_menu").addEventListener('click',function(){
    document.querySelector(".menu_box").style.display = "none";  //incomplete
    document.querySelector(".menu_box").style.right = "-250px";
    
})
// ---------------------service_bar--------------------------
document.getElementById("n_img").addEventListener('click',function(){
    document.querySelector(".service_bar").style.top = "0%";
})
document.getElementById("close_service").addEventListener('click',function(){
    document.querySelector(".service_bar").style.top = "-50%";
})
// ---------------page3-------------
document.querySelector("#page3 .layer").addEventListener('mouseover',function(){
    document.querySelector("#page3 .layer").style.backgroundColor = "#25544eb0";
    document.querySelector("#page3 .img").style.scale = "1.1";
})
document.querySelector("#page3 .layer").addEventListener('mouseleave',function(){
    document.querySelector("#page3 .layer").style.backgroundColor = "#25544e";
    document.querySelector("#page3 .img").style.scale = "1";
})
// -------------box_two------
document.querySelector("#page3 .layer.two").addEventListener('mouseover',function(){
    document.querySelector("#page3 .layer.two").style.backgroundColor = "#cbd46aa3";
    document.querySelector("#page3 .img.two").style.scale = "1.1";
})
document.querySelector("#page3 .layer.two").addEventListener('mouseleave',function(){
    document.querySelector("#page3 .layer.two").style.backgroundColor = "#cbd46a";
    document.querySelector("#page3 .img.two").style.scale = "1";
})
//----------------box_three------------------
document.querySelector("#page3 .layer.three").addEventListener('mouseover',function(){
    document.querySelector("#page3 .layer.three").style.backgroundColor = "#74b7b792";
    document.querySelector("#page3 .img.three").style.scale = "1.1";
})
document.querySelector("#page3 .layer.three").addEventListener('mouseleave',function(){
    document.querySelector("#page3 .layer.three").style.backgroundColor = "#74b7b7";  
    document.querySelector("#page3 .img.three").style.scale = "1";
})
// -----------------animation--------------------------------------
gsap.to(".butterfly",{
    left: "50%",
    top: "30%",
    duration: 10,
    repeat: -1,
    ease: Power1,
})

// --------snail----------------
gsap.to(".snail",{
    x: "110%",
    ease: Power1,
    duration: 3,
    scrollTrigger: {
        trigger: "#page4",
        start: "top -20%",
        end: "top -30%",
        scrub: 1,
        // markers: true,
    }
})