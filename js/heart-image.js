/*
1 - Ter a janela(browser) na mão => OK
2 - Ter o HTML na mão => OK
3 - Pegar o coração => OK
4 - Pegar clique no coração => OK
5 - No momento que o usuário clicar nós queremos mostar um AE => OK
*/

/*const $heart = window.document.querySelector(".heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}*/

const $secondButton = window.document.querySelector(".button-store.-second");
const $buy = window.document.querySelector(".action.-buy");

$secondButton.addEventListener("click", handleClick);

function handleClick() {
  
  $buy.innerHTML = "ae";
  
}