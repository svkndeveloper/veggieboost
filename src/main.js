const myButton = document.getElementById("myBtn");
myButton.addEventListener('click', onPageTop);

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }};

function onPageTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};