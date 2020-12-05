describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if the input is empty', () => {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the serverTable', () => {
    submitServerInfo();
    updateServerTable();

    let currentTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTable[0].innerText).toEqual('Alice');
    expect(currentTable[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
