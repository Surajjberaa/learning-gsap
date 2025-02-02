var timeline = gsap.timeline();

timeline.from("h1",{
    duration: 1,
    y: -30,
    opacity: 0,
})

timeline.from("h2",{
    duration: 1,
    y: -30,
    opacity: 0,
    stagger: 0.3,
})

timeline.from("p",{
    duration: 1,
    y: 30,
    opacity: 0,
})
