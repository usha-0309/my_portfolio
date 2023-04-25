let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navber.classList.toggle('active');
});

// let menuIcon = document.querySelector('#menu-icon');
// let navber = document.querySelector('.navber');
// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navber.classList.toggle('active');
// };

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let targetLink = document.querySelector(`header nav a[href*='${id}']`);
        if (targetLink) {
          targetLink.classList.add('active');
        }
      });
    };
  });
  // sticky navbar

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
};


// slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" color-button", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " color-button";
}
