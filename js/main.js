//Animation at home 
var typed = new Typed('#element', {
  strings: ['Tech Enthusiast', 'Programmer', 'Web Developer'],
  typeSpeed: 70,
});


function bucket() {
  const contactSection = document.getElementById('contactme');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Skills and Education effect
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Google sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxBudlL0oggYBoVAL_TvC44jESBS6l89ZFKw2HqRJG8PNCLZg7bqiw5x5B8kq0AXD0W/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent succesfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



