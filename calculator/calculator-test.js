const values = {
  amount: 10000,
  years: 5,
  rate: 3,
};

const secondValues = {
  amount: 1000,
  years: 1,
  rate: 2,
};

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual('179.69');
});

it('should return a result with 2 decimal places', function () {
  expect(calculateMonthlyPayment(secondValues)).toEqual('84.24');

  // ..
});

/// etc
