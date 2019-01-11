const $star = document.querySelector("label.star.star-1");
const $star2 = document.querySelector("label.star.star-2");
const $star3 = document.querySelector("label.star.star-3");
const $star4 = document.querySelector("label.star.star-4");
const $star5 = document.querySelector("label.star.star-5");

$star.addEventListener("click", handleClick);
$star2.addEventListener("click", handleClick2);
$star3.addEventListener("click", handleClick3);
$star4.addEventListener("click", handleClick4);
$star5.addEventListener("click", handleClick5);

function handleClick() {
    $star.classList.toggle("-active");
  } 

  function handleClick2(){
    $star2.classList.toggle("-active2");
  }

  function handleClick3(){
    $star3.classList.toggle("-active3");
  }

  function handleClick4(){
    $star4.classList.toggle("-active4");
  }

  function handleClick5(){
    $star5.classList.toggle("-active5");
  }











