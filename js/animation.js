gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(".section-1 h1", {y:500},{y:0})
gsap.fromTo(".section-1 h3", {y:25, opacity:0.5},{y:0, opacity: 1})
gsap.fromTo(".section-2 img", {y:30, stagger:1},{y:0, stagger:0.1})
gsap.to(".section-2 .wheel-1, .section-2 .wheel-2", {rotation:"360", repeat:-1});
gsap.to(".pointy", {scaleX:1.2, scaleY:1.2, scrollTrigger: {
    trigger: ".sign",
    start: "middle center"
}})
gsap.fromTo(".sign, .insight", 
{
    x:-10
},
{
    scrollTrigger: {
        trigger: ".sign",
        start: "top center",
        toggleActions: "restart pause resume"
    },
    x:0,
    duration: 2,
    opacity: 5
}
)

gsap.fromTo(".about-insight", 
{
    y:-10
},
{
    scrollTrigger: {
        trigger: ".sign",
        start: "top center",
        toggleActions: "restart pause resume"
    },
    y:0,
    duration: 2,
    opacity: 5
}
)