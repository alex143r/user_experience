document.querySelector("button").addEventListener("click", function (e) {
  const form = document.querySelector("form");
  e.preventDefault();
  if (form.checkValidity()) {
    calculateTax();
  }
  form.reportValidity();
});

function calculateTax() {
  let amount = document.querySelector("#amount");
  let tax = document.querySelector("#tax");

  if (tax.value > 100) {
    tax.value = 100.0;
  }

  let amountValue = amount.value;
  let taxValue = tax.value / 100;
  let taxResult = amountValue * taxValue;
  let finalAmount = amountValue - taxResult;

  document.querySelector(".tax-amount").innerHTML = taxResult.toFixed(2);
  document.querySelector(".final-amount").innerHTML = finalAmount.toFixed(2);
}
