var initalPath = `M 10 300 Q 250 300 1900 300`

var finalPath = `M 10 300 Q 250 300 1900 300`

var string = document.querySelector('#string')

string.addEventListener('mousemove', function(dets){
    initalPath = `M 10 300 Q ${dets.x} ${dets.y} 1900 300`

    gsap.to('svg path', {
        attr: { d: initalPath},
        duration: 0.5,
        ease: 'power3.out'
    })
})

string.addEventListener('mouseleave', function(dets){

    gsap.to('svg path', {
        attr: { d: finalPath},
        duration: 1.5, 
        ease: 'elastic.out(1, 0.3)'
    })
})