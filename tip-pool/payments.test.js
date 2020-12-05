describe('Payments test (with setup and tear-down)', () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 25;
  });

  it('should add a new payment', () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
  });

  it('should not add a new payment with empty input', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should update payment', function () {
    let currentPayment = createCurPayment();
    allPayments['payment1'] = currentPayment;

    appendPaymentTable(currentPayment);

    let currentList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(currentList.length).toEqual(3);
    expect(currentList[0].innerText).toEqual('$100');
    expect(currentList[1].innerText).toEqual('$25');
  });

  it('should create a new payment', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '25',
      tipPercent: 25,
    };
    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    summaryTds[0].innerHTML = '';
    paymentTbody.innerHTML = '';
    allPayments = {};
  });
});
