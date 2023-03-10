(function() {
  // Deposit Account From Database.
  let accounts = [
    {
      email: "rifat6633@gmail.com",
      password: "12345678",
      deposit: 1000
    }
  ];

  // Selecting the necessary DOM.
  const emailInputBox = document.querySelector('#login-email');
  const passwordInputBox = document.querySelector('#login-password');
  const loginSubmitBtn = document.querySelector('#login-submit');
  const loginErrorMsg = document.querySelector('#login-error');

  loginErrorMsg.style.display = 'none';

  // Defining necessary global variable.
  let inputEmail = '';
  let inputPassword = '';
  let isRealEmail = false;
  let isPassword = false;

  /**
   * Event Listener for Email input box.
   * Checking email and updating isRealEmail and inputEmail variable.
   */
  emailInputBox.addEventListener('keyup', function(e) {
    inputEmail = e.target.value;
    isRealEmail = inputEmail.includes('@') ? true : false;
    loginSubmitBtn.disabled = (isRealEmail && isPassword) ? false : true;
  });
  
  /**
   * Event Listener for Password input box.
   * Checking if password containes 8 character.
   */
  passwordInputBox.addEventListener('keyup', function(e) {
    inputPassword = e.target.value;
    isPassword = inputPassword.length >= 8 ? true : false;
    loginSubmitBtn.disabled = (isRealEmail && isPassword) ? false : true;
  });

  /**
   * Event Listener for Login button.
   * Rediract to deposit.html if email and password matches.
   */
  loginSubmitBtn.addEventListener('click', function() {
    if (matchAccount(inputEmail, inputPassword)) {
      console.log('hello');
      window.location.href = 'deposit.html';
    } else {
      loginErrorMsg.style.display = 'inline-block';
    }
  });

  /**
   * Match input email and password with database email and password.
   * @param {string} loginEmail
   * @param {string} loginPassword 
   * @returns bool
   */
  function matchAccount(loginEmail, loginPassword) {
    for (let i = 0; i < accounts.length; i++) {
      if ((loginEmail === accounts[i].email) && (loginPassword === accounts[i].password)) {
        return true;
      }
    }
  }

})()