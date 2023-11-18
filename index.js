// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

/*==================== CONTACT FORM VALIDATIONS ====================*/ 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Full name is required!';
        return false;
    }
    if( !name.match(/[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ){
        nameError.innerHTML = 'Enter full name!';
        return false;
    }
    nameError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'A valid email address is required!';
        return false;
    }
    // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        emailError.innerHTML = 'Invalid email!';
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0){
        messageError.innerHTML = left + ' more characters are required!';
        return false;
    }
    messageError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

/*==================== EMAIL SERVICE ====================*/ 
function SendMail(){

  if(!validateName() || !validateEmail() || !validateMessage() ){
      // alert("Please fix the errors to send a message!");
      swal("Sorry!", "Please fix the errors to send a message!", "warning");
      return false;
  }

  var params = {
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email").value,
      message : document.getElementById("message").value
  }
  emailjs.send("service_4ajtfo5", "template_ryff15a", params).then(function (res){
      // alert("Success! " + res.status);
      // alert("Your message has been sent successfully!");
      swal("Success!", "Your message has been sent!", "success");
  })
}
