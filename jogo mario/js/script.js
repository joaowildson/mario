const hollow = document.querySelector('.person');
const cacto = document.querySelector('.cacto')

const jump = () =>{
    hollow.classList.add('jump');

    setTimeout(()=>{
        hollow.classList.remove('jump')
    }, 500);
}

const loop = setInterval(()=>{

    const cactoPosition = cacto.offsetLeft;
    const hollowPosition = +window.getComputedStyle(hollow).bottom.replace('px', '');
    

    if(cactoPosition <= 85 &&  cactoPosition > 0 && hollowPosition >= 68) {
            cacto.style.animation = 'none'
            cacto.style.left = `${cactoPosition}px`

            hollow.style.animation = 'none'
            hollow.style.left = `${hollowPosition}px`

            hollow.src = "../image/hollow.gif"
    }

}, 10)

document.addEventListener('keydown', jump);