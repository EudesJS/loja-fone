const $search = document.querySelector(".search");
const $searchIcon = document.querySelector(".search-icon");
const $closeIcon = document.querySelector(".close-icon");

$searchIcon.addEventListener("click", () => {$search.classList.add("-active");$searchIcon.classList.remove("-active");$closeIcon.classList.add("-active")});//arrow function 

$closeIcon.addEventListener("click", () => {$search.classList.remove("-active");
$closeIcon.classList.remove("-active");$searchIcon.classList.add("-active");})




