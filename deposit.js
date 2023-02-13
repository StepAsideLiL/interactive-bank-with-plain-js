(function() {
  // Selecting the necessary DOM.
  const totalDeposit = document.querySelector('#total-deposit');
  const totalWithdraw = document.querySelector('#total-withdraw');
  const totalBalance = document.querySelector('#total-balance');

  const depositInputField = document.querySelector('#deposit-field');
  const depositSubmitBtn = document.querySelector('#deposit-button');
  const withdrawInputField = document.querySelector('#withdraw-field');
  const withdrawSubmitBtn = document.querySelector('#withdraw-button');

  // Defining necessary global variable.
  let currentDeposit = parseInt(totalDeposit.innerText);
  let currentWithdraw = parseInt(totalWithdraw.innerText);
  let currentBalance = parseInt(totalBalance.innerText);
  let newDepositAmount;
  let newWithdrawAmount;
  
  // console.log(deposit + withdraw + balance);

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
    totalDeposit.innerText = parseInt(depositInputField.value) + currentDeposit;
    totalBalance.innerText = parseInt(depositInputField.value) + currentBalance;
  });

  /**
   * Adding event listener to withdraw money.
   */
  withdrawSubmitBtn.addEventListener('click', function() {
    totalWithdraw.innerText = currentDeposit - parseInt(withdrawInputField.value);
    totalBalance.innerText = currentBalance - parseInt(withdrawInputField.value);
  });

})()