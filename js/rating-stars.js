const $stars = document.querySelectorAll(".star");
const $starsRemove = document.querySelectorAll(".star");
const lastIndex = $stars.length-1;

$stars[0].addEventListener("click", lastStar);
$stars[1].addEventListener("click", fourthStar);
$stars[2].addEventListener("click", thirdStar)
$stars[3].addEventListener("click", secondStar);
$stars[lastIndex].addEventListener("click", firstStar);

function lastStar() {
  $stars.forEach(function($star, key){
    console.log($star, key);
    $star.classList.add("-active");
  });
}

function fourthStar() {
  $stars.forEach(function($star, key){
    console.log($star, key);
    if(key>0){
      $star.classList.add("-active");
    }
    $starsRemove[0].classList.remove("-active");
  });
}

function thirdStar() {
  $stars.forEach(function($star, key){
    console.log($star, key);
    if(key>1){
      $star.classList.add("-active");
    }
    $starsRemove[1].classList.remove("-active");
    $starsRemove[0].classList.remove("-active");
  });
}

function secondStar() {
  $stars.forEach(function($star, key){
    console.log($star, key);
    if(key>2){
      $star.classList.add("-active");
    }
    $starsRemove[2].classList.remove("-active");
    $starsRemove[1].classList.remove("-active");
    $starsRemove[0].classList.remove("-active");
  });
}

function firstStar() {
  $stars.forEach(function($star, key){
    console.log($star, key);
    if(key>3){
      $star.classList.add("-active");
    }
    $starsRemove[3].classList.remove("-active");
    $starsRemove[2].classList.remove("-active");
    $starsRemove[1].classList.remove("-active");
    $starsRemove[0].classList.remove("-active");
  });
}


