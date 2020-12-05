describe('Helpers test (with setup and tear-down)', () => {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 25;
    submitPaymentInfo();
  });

  it('should sum total tip amount of all payments', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(25);

    billAmtInput.value = 200;
    tipAmtInput.value = 50;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(75);
  });

  it('should sum total bill amount of all payments', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 50;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should sum total tip percent', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(25);

    billAmtInput.value = 100;
    tipAmtInput.value = 25;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(50);
  });

  it('should sum tip percent of a single tip', function () {
    expect(calculateTipPercent(100, 13)).toEqual(13);
    expect(calculateTipPercent(100, 25)).toEqual(25);
  });

  it('should generate new td and append to tr', function () {
    let newRow = document.createElement('tr');

    appendTd(newRow, 'test');

    expect(newRow.children.length).toEqual(1);
    expect(newRow.firstChild.innerHTML).toEqual('test');
  });

  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
  });
});
