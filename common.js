function handleNavBar() {
  const navHref = document.querySelectorAll(".topnav a");
  for (aTag of navHref) {
    if (window.location.href === aTag.href) {
      aTag.classList.add("active");
    }
  }
}

function onSignup(event) {
  //event.target.elements.email.value;
  const psw = event.target.elements.psw;
  const pswRepeat = event.target.elements["psw-repeat"];

  if (psw.value.length < 5) {
    alert("Password must have at least 5 characters");

    return false;
  }

  let pswValid = false;
  for (let i = 0; i < psw.value.length; i++) {
    if (psw.value[i] >= "A" && psw.value[i] <= "Z") {
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
