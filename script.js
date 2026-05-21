// PROGRESS BAR

window.onscroll = function () {

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.getElementById("progress-bar").style.width =
scrolled + "%";

};

// MOBILE FLIP FUNCTIONALITY

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {

card.addEventListener('click', (e) => {

if (!e.target.closest('a')) {

const inner = card.querySelector('.flip-card-inner');

inner.classList.toggle('flipped');

}

});

});