export default () => {
  const loginContainer = document.createElement('section');
  loginContainer.classList.add('login-section');

  const loginTemplate = `
<form class="form-login" action="">
  <div class="card-login">
    <div class="card-top">
      <img class="logo-login" src="img/logo-s2s-transparent.png" alt="">
      <h1>LOGIN</h1>
    </div>
    <div class="input-group">
      <label>Email:</label>
      <input type="text" id="email" name="email" placeholder="Type your email">
    </div>
    <div class="input-group">
      <label>Password:</label>
      <input type="password" id="password" name="password" placeholder="Type your password">
    </div>
    <div class="login-links">
      <a href="">Click here if you forgot your password.</a>
    </div>
    <div id="button-login">  
      <button id="login-btn">LET'S GO!</button>
    </div>
    <div class="login-links">
      <a href="/#signup">Click here if you still don't have an account.</a>
    </div>
    <div class="separation-or">
      <hr>
      <h2>OR</h2>
      <hr>
    </div>
    <div class="btn-group">
      <button class="login-google">
        <span>
          <img id="logo-google" src="./img/google-37.png" alt="google">
          Sign in with Google
        </span>
      </button>
    </div>
  </div>
</form>  
  `;

  loginContainer.innerHTML = loginTemplate;

  return loginContainer;
};
