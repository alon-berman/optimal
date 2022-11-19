function handleNavBar() {
  const navHref = document.querySelectorAll(".topnav a");
  for (aTag of navHref) {
    if (window.location.href === aTag.href) {
      aTag.classList.add("active");
    }
  }
}

function passwordValidation(event) {
  //event.target.elements.email.value;
  const password = event.target.elements.password;
  const pswRepeat = event.target.elements["psw-repeat"];

  if (password.value.length < 5) {
    alert("Password must have at least 5 characters");

    return false;
  }

  let pswValid = false;
  for (let i = 0; i < password.value.length; i++) {
    if (password.value[i] >= "A" && password.value[i] <= "Z") {
      pswValid = true;
    }
  }

  if (pswValid === false) {
    alert("Password must have at least one upercase character");
    return false;
  }

  if (psw.value !== pswRepeat.value) {
    alert("Passwords do not match");

    return false;
  }

  return true;
}

handleNavBar();
