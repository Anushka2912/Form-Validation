const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkInputs();
});

const checkInputs = () => {
   // Used trim to remove any white spaces
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const confirmValue = confirm.value.trim();
   
   if (usernameValue === '') {
      // add error state
      setError(username, "This field cannot be blank!");
   } else {
      // add success state
      setSuccess(username);
   }
   
   if (emailValue === '') {
      // add error state
      setError(email, "This field cannot be blank!");
   } else if (!isEmail(emailValue)) {
      setError(email, "Invalid email!");
   } else {
      // add success state
      setSuccess(email);
   }
   
   if (passwordValue === '') {
      // add error state
      setError(password, "This field cannot be blank!");
   } else if (passwordValue.length <= 4) {
      setError(password, "Password is too small!")
   } else {
      // add success state
      setSuccess(password);
   }
   
   if (confirmValue === '') {
      // add error state
      setError(confirm, "This field cannot be blank!");
   } else if (passwordValue !== confirmvalue) {
      setError(confirm, "Password and confirm password must be same.")
   } else {
      // add success state
      setSuccess(confirm);
   }
}

const setError = (input, msg) => {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");
   small.innerText = msg;
   
   // add error class
   formControl.className = "form-control error";
}

const setSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = "form-control success";
}

const isEmail = (email) => {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
