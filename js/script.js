
let swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: false,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        allowTouchMove: false
      });

const goBtn = document.getElementById('go-button');
goBtn.onclick = function() {
  swiper.slideNext();
}
//jquery will run this function when all the elements on the page have loaded
$(function () {
  // look for the element with the id of first-form
  // run the parsley function on our form
  // check if our fields are validated
  $('#first-form').parsley().on('field:validated', function() {
    // declare a variable called OK if the parsley error
    // array is equal to 0
    var ok = $('.parsley-error').length === 0;
    // check the alert info class of hidden and toggle it
    // hide the info if ok doesn't exist
    $('.alert-info').toggleClass('hidden', !ok);
    // do the oppisite for the alert warning
    $('.alert-warning').toggleClass('hidden', ok);
  })
  // if everything is ok, then run this function
  .on('form:submit', function() {
    // prevent the page from refreshing
    event.preventDefault();
    // alert("submitted succesfully");
      swiper.slideNext();
      tellHoroscope();
  });
});

const fullNameInput = document.getElementById("full-name");
const ageInput = document.getElementById("age");
const result = document.getElementById("result");

function tellHoroscope(){
  let name = fullNameInput.value;
  let age = ageInput.value;
  // use if statements to put in personalised horoscopes
  if(age <= 50){
    result.innerHTML = "You are pretty young";
  }else if (age > 50 && age <= 100){
    result.innerHTML = "You're getting old";
  }else if (age > 100 ){
    result.innerHTML = `You're getting old ${name}`;
  }else {
    result.innerHTML = `Whats up`;
  }
}
