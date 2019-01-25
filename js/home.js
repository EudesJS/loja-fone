let valorInicial = 10;
const $secondButton = document.querySelector(".button-store.-second");
const $cart = document.querySelector(".item.-buy");

$secondButton.addEventListener("click", handleClick);

function handleClick() {

  //valorInicial = valorInicial + 1;
  //valorInicial += 1;
  //valorInicial = valorInicial++;
  //valorInicial++;

  //$cart.textContent = "Carrinho (" + ++valorInicial + ")";

  $cart.textContent = `Carrinho (${++valorInicial})`;
  
}