window.addEventListener('mousemove',(e => { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    gsap.to(".fruit",2,{x:e.clientX/200,y:e.clientY/200});
   // console.log(e.clientX);
   gsap.to(".apple",0.5,{x:e.clientX/80,y:e.clientY/80});
   gsap.to(".kiwi",0.7,{x:e.clientX/80,y:e.clientY/80});
   gsap.to(".mango",1.5,{x:e.clientX/150,y:e.clientY/150});
   gsap.to(".strawberry",2,{x:e.clientX/160,y:e.clientY/160});
}));