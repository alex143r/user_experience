$("button").click(function (e) {
  const form = $("form")[0];
  e.preventDefault();

  if (form.checkValidity()) {
    calculateTax();
  }
  form.reportValidity();
});

function calculateTax() {
  let amount = $("#amount");
  let tax = $("#tax");

  if (tax.value > 100) {
    tax.value = 100.0;
  }

  let amountValue = amount.val();
  let taxValue = tax.val() / 100;
  let taxResult = amountValue * taxValue;
  let finalAmount = amountValue - taxResult;

  $(".tax-amount").html(taxResult.toFixed(2));
  $(".final-amount").html(finalAmount.toFixed(2));
}
