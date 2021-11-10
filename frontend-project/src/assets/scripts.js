   const loginText = document.getElementsByClassName(".title-text .login");
      const loginForm = document.getElementsByClassName("form-container");
      const loginBtn = document.getElementsByClassName("btn-layer");
      const signupBtn = document.getElementsByClassName("slide signup");
      const signupLink = document.getElementsByClassName("signup-link");
      
      
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      
      
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });

      
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
      