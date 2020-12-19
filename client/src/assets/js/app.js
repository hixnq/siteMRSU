$(document).ready(function(){
    $('.travels__left').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        initialSlide: 0,
        infinite: false,
        speed: 500,
        easing: 'linear',
        waitForAnimate: true,
        variableWidth: true,
        appendArrows: $('.travels__arrows'),
        // resposive
    }),

    $('.categories__slider').slick({
        infinite: true,
        centerMode: true,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 0,
        appendArrows: $('.categories__arrows-second'),
        speed: 500,
        easing: 'linear',
        waitForAnimate: true,
        variableWidth: true,
        //responsive
    })

    $('.experiences__slider').slick({
        infinite: false,
        centerMode: true,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 0,
        dots: true,
        speed: 500,
        easing: 'linear',
        waitForAnimate: true,
    })
})

const video1 = document.querySelector('.video-1')
const video2 = document.querySelector('.video-2')
const video3 = document.querySelector('.video-3')
const video4 = document.querySelector('.video-4')
const video5 = document.querySelector('.video-5')

const duration = document.querySelector('.description .video__duration')
const title = document.querySelector('.description .video__heading')
const player = document.querySelector('.player__video')
const videos = document.querySelectorAll('.video-list__video')

video1.addEventListener('click', () => {
    player.style.backgroundImage = 'url(assets/images/maldivesNorm.png)'
    title.innerHTML = 'When go to Maldives'
    duration.innerHTML = '03.55'
})

video2.addEventListener('click', () => { 
    player.style.backgroundImage = 'url(assets/images/tanzanieNorm.png)'
    title.innerHTML = 'Tanzania’s deadly pink lake'
    duration.innerHTML = '05.24'
})

video3.addEventListener('click', () => {
    player.style.backgroundImage = 'url(assets/images/kathmanduNorm.png)'
    title.innerHTML = 'Top things to do in Kathmandu'
    duration.innerHTML = '06.12'
})

video4.addEventListener('click', () => {
    player.style.backgroundImage = 'url(assets/images/chinaNorm.png)'
    title.innerHTML = 'Exploring China’s creative capital'
    duration.innerHTML = '04.33'
})

video5.addEventListener('click', () => {
    player.style.backgroundImage = 'url(assets/images/wynwoodNorm.png)'
    title.innerHTML = 'Wynwood walls'
    duration.innerHTML = '05.40'
})

videos.forEach(video => {
    video.addEventListener('click', () => {
        for(let i = 0; i < videos.length; i++){
            videos[i].classList.remove('active1')
        }
        video.classList.add('active1')
    })
})