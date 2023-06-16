
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 6.5})).toEqual('195.66');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 9000, years: 3, rate: 6.2})).toEqual('274.61');
});

it("should handle interest rate of 0", function(){
  expect(calculateMonthlyPayment({amount: 10000, years: 5, rate: 0})).toEqual('166.67');
  expect(calculateMonthlyPayment({amount: 600, years: 1, rate: 0})).toEqual('50.00');
})

/// etc
