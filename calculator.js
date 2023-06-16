window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years: 5, rate: 6.5};
  const amountUI = document.querySelector('#loan-amount');
  amountUI.value = values.amount;
  const yearsUI = document.querySelector('#loan-years');
  yearsUI.value = values.years;
  const rateUI = document.querySelector('#loan-rate');
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = 0;
  const P = values.amount;
  const i = ((values.rate / 100) / 12);
  const n = (values.years * 12);
  if(i === 0){
    monthlyPayment = P / n;
  }
  else{
    monthlyPayment = P * i / (1 - (1 + i) ** -n);
  }  
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentContainer = document.querySelector('#monthly-payment');
  monthlyPaymentContainer.innerText = '$' + monthly;
}
