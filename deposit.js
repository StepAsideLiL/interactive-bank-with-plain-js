(function() {
  // Selecting the necessary DOM.
  const totalDeposit = document.querySelector('#total-deposit');
  const totalWithdraw = document.querySelector('#total-withdraw');
  const totalBalance = document.querySelector('#total-balance');

  const depositInputField = document.querySelector('#deposit-field');
  const depositSubmitBtn = document.querySelector('#deposit-button');
  const withdrawInputField = document.querySelector('#withdraw-field');
  const withdrawSubmitBtn = document.querySelector('#withdraw-button');
  const withdrawErrorMsg = document.querySelector('#withdraw-error');

  // Defining necessary global variable.
  let currentDeposit = parseInt(totalDeposit.innerText);
  let currentWithdraw = parseInt(totalWithdraw.innerText);
  let currentBalance = parseInt(totalBalance.innerText);

  /**
   * Adding event listener to enable the deposit button.
   */
  depositInputField.addEventListener('keyup', function(e) {
    depositSubmitBtn.disabled = e.target.value.length >= 1 ? false : true;
  });

  /**
   * Adding event listener to enable the withdraw button.
   */
  withdrawInputField.addEventListener('keyup', function(e) {
    withdrawSubmitBtn.disabled = e.target.value.length >= 1 ? false : true;
  });

  /**
   * Adding event listener to deposit money.
   */
  depositSubmitBtn.addEventListener('click', function() {
    currentDeposit = parseInt(depositInputField.value) + currentDeposit;
    currentBalance = parseInt(depositInputField.value) + currentBalance;
    totalDeposit.innerText = currentDeposit;
    totalBalance.innerText = currentBalance;
    withdrawErrorMsg.style.display = 'none';
  });

  /**
   * Adding event listener to withdraw money.
   */
  withdrawSubmitBtn.addEventListener('click', function() {
    if (withdrawInputField.value <= currentBalance) {
      currentWithdraw = Math.abs(currentWithdraw + parseInt(withdrawInputField.value));
      currentBalance = Math.abs(parseInt(withdrawInputField.value) - currentBalance);
      withdrawErrorMsg.style.display = 'none';
      totalWithdraw.innerText = currentWithdraw;
      totalBalance.innerText = currentBalance;
    } else {
      console.log('hello')
      withdrawErrorMsg.style.display = 'block';
    }
  });

})()