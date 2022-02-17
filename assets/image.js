const parent = document.querySelector(".parent");

// const hoverIn = function () {
//     const img = this.querySelectorAll("img");
//     console.log(img);
//     const svg = this.querySelectorAll("svg");
//     for (let i = 0; i < img.length; i++) {
//         img[i].classList.remove("grayscale");
//         img[i].classList.add("grayscaleRestore");
//     }
//     for (let i = 0; i < svg.length; i++) {
//         svg[i].classList.remove("fadeOut");
//         svg[i].classList.add("fadeIn");
//     }
//     this.querySelector(".yellow").classList.remove("animateOut");
//     this.querySelector(".yellow").classList.add("animateIn");
//     this.querySelector(".tram").classList.remove('fadeOut');
//     this.querySelector(".tram").setAttribute('style', 'transition: all 15s ease;');
//     this.querySelector(".tram").setAttribute('style', 'top:25%; left:-80%')
// };

// const hoverOut = function () {
//     const img = this.querySelectorAll("img");
//     console.log(img);
//     const svg = this.querySelectorAll("svg");
//     for (let i = 0; i < img.length; i++) {
//         img[i].classList.remove("grayscaleRestore");
//         img[i].classList.add("grayscale");
//     }
//     for (let i = 0; i < svg.length; i++) {
//         svg[i].classList.remove("fadeIn");
//         svg[i].classList.add("fadeOut");
//     }
//     this.querySelector(".tram").classList.add('fadeOut');
//     this.querySelector(".tram").setAttribute('style', 'transition: all none; top:10%; left:30%');
//     this.querySelector(".yellow").classList.remove("animateIn");
//     this.querySelector(".yellow").classList.add("animateOut");
// };

// parent.addEventListener("mouseenter", hoverIn);
// parent.addEventListener("mouseout", hoverOut);

//hover
const blogCard = document.querySelector('.blogCard');
const cardInteraction = function () {
    // this.querySelector('img').classList.remove('decolorize');
    const img = this.querySelectorAll("img");
    console.log(img);
    const svg = document.querySelectorAll("svg");
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("grayscale");
        img[i].classList.add("grayscaleRestore");
    }
    for (let i = 0; i < svg.length; i++) {
        svg[i].classList.remove("fadeOut");
        svg[i].classList.add("fadeIn");
    }
    this.querySelector(".yellow").classList.remove("animateOut");
    this.querySelector(".yellow").classList.add("animateIn");
    this.querySelector(".tram").classList.remove('fadeOut');
    this.querySelector(".tram").setAttribute('style', 'transition: all 15s ease;');
    this.querySelector(".tram").setAttribute('style', 'top:25%; left:-80%')
    this.setAttribute('style', 'transform:scale(1.05)');
}
const reverseCardInteraction = function () {
    // this.querySelector('img').classList.remove('colorize');
    // this.querySelector('img').classList.add('decolorize');
    const img = document.querySelectorAll("img");
    console.log(img);
    const svg = document.querySelectorAll("svg");
    for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("grayscaleRestore");
        img[i].classList.add("grayscale");
    }
    for (let i = 0; i < svg.length; i++) {
        svg[i].classList.remove("fadeIn");
        svg[i].classList.add("fadeOut");
    }
    this.querySelector(".tram").classList.add('fadeOut');
    this.querySelector(".tram").setAttribute('style', 'transition: all none; top:10%; left:30%');
    this.querySelector(".yellow").classList.remove("animateIn");
    this.querySelector(".yellow").classList.add("animateOut");
    this.setAttribute('style', 'transform:scale(1)');
}
blogCard.addEventListener('mouseenter', cardInteraction)
blogCard.addEventListener('mouseleave', reverseCardInteraction);

dateMap = {
    "Jan":"january",
    "Feb":"february",
    "Mar":"march",
    "Apr":"april",
    "May":"may",
    "Jun":"june",
    "Jul":"july",
    "Aug":"august",
    "Sep":"september",
    "Nov":"november",
    "Dec":"december",
}
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const monthRaw = today.toDateString().substring(4,7);
const month = dateMap[monthRaw]
const date = today.toDateString().substring(8,10);

const dateDom = document.querySelector('.numberDay');
const monthDom = document.querySelector('.month');
dateDom.innerHTML = date;
monthDom.innerHTML = month;

// "Sun Jun 14 2020"