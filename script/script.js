/* Show nav on scroll */
let navigation = document.querySelector("nav");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    navigation.style.display = "block";
  } else {
    navigation.style.display = "none";
  }
}

/* Image modal */
var modal = document.getElementById("modalContainer");

var modalImg = document.getElementById("modalImg");
var imgPreview = document.getElementById("imgPreview");
modalImg.onclick = function () {
  modal.style.display = "block";
  imgPreview.src = this.src;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

/* Form Validation */
function validateForm() {
  let fullName = document.forms["contactForm"]["fullname"].value;
  let mail = document.forms["contactForm"]["mail"].value;
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let subject = document.forms["contactForm"]["subject"].value;
  let message = document.forms["contactForm"]["message"].value;
  if (fullName < 5) {
    alert("Name must contain more than 5 symbols");
    return false;
  }
  if (mail.indexOf("@") == -1 || mail.length < 5) {
    alert("Please fill in a valid email address");
    return false;
  }
  if (subject < 15) {
    alert("Subject must contain more than 15 symbols");
    return false;
  }
  if (message < 20) {
    alert("Message must contain more than 20 symbols");
    return false;
  } else {
    return true;
  }
}
