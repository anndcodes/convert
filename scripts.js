const USD = 5.50;
const EUR = 6.03;
const GBP = 7.19;
const JPY = 0.037;
const CNY = 0.78;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
})


form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    case "JPY":
      convertCurrency(amount.value, JPY, "¥");
      break;
    case "CNY":
      convertCurrency(amount.value, CNY, "¥");
      break;
  }
}

function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `1${symbol}  = ${formartCurrencyBRL(price)}`;

    let total = amount * price;
    // console.log(isNaN(total));

    if(isNaN(total)) {
      return alert("Digite o valor corretamente");
    }

    result.textContent = formartCurrencyBRL(total);
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result")
    alert("Não foi possível converter, tente novamente.")
  }
}

function formartCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}