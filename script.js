// gsap.to("#box1",{
//     x:1000,
//     delay:1,
//     duration:2,
//     rotate:360,
//     backgroundColor:"red"
// })
// gsap.from("#box2",{
//     x:1000,
//     delay:1,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue"
// })
//timeline

// const { AlignVerticalDistributeStartIcon } = require("lucide-react");

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to("#box2",{
//     x:1500,
//     duration:1.5
// })

gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:360
})
gsap.from("#page2 #box",{
    scale:0,
    
    duration:2,
    rotation:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:'top 60%'

    }
})