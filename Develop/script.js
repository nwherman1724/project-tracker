// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  let timeSlot = document.querySelectorAll('.time-block');
  let timeSlotArr = [timeSlot];
  let currentTime = dayjs().format('H');
  console.log(currentTime)
  console.log(timeSlotArr)

  function changeColor() {
  var nine = document.getElementById('hour-9');
  var ten = document.getElementById('hour-10');
  var eleven = document.getElementById('hour-11');
  var twelve = document.getElementById('hour-12');
  var thirteen = document.getElementById('hour-13');
  var fourteen = document.getElementById('hour-14');
  var fifteen = document.getElementById('hour-15');
  var sixteen = document.getElementById('hour-16');
  var seventeen = document.getElementById('hour-17');
  console.log(nine);

  if(currentTime > 9) {
    nine.classList.remove('present')
    nine.classList.add('past')
  } else if (currentTime < 9){
    nine.classList.remove('present')
    nine.classList.add('future')
  }
  if(currentTime > 10) {
    ten.classList.remove('present')
    ten.classList.add('past')
  } else if (currentTime < 10){
    ten.classList.remove('present')
    ten.classList.add('future')
  }
  if(currentTime > 11) {
    eleven.classList.remove('present')
    eleven.classList.add('past')
  } else if (currentTime < 11){
    eleven.classList.remove('present')
    eleven.classList.add('future')
  }
  if(currentTime > 12) {
    twelve.classList.remove('present')
    twelve.classList.add('past')
  } else if (currentTime < 12){
    twelve.classList.remove('present')
    twelve.classList.add('future')
  }
  if(currentTime > 13) {
    thirteen.classList.remove('present')
    thirteen.classList.add('past')
  } else if (currentTime < 13){
    thirteen.classList.remove('present')
    thirteen.classList.add('future')
  }
  if(currentTime > 14) {
    fourteen.classList.remove('present')
    fourteen.classList.add('past')
  } else if (currentTime < 14){
    fourteen.classList.remove('present')
    fourteen.classList.add('future')
  }
  if(currentTime > 15) {
    fifteen.classList.remove('present')
    fifteen.classList.add('past')
  } else if (currentTime < 15){
    fifteen.classList.remove('present')
    fifteen.classList.add('future')
  }
  if(currentTime > 16) {
    sixteen.classList.remove('present')
    sixteen.classList.add('past')
  } else if (currentTime < 16){
    sixteen.classList.remove('present')
    sixteen.classList.add('future')
  }
  if(currentTime > 17) {
    seventeen.classList.remove('present')
    seventeen.classList.add('past')
  } else if (currentTime < 17){
    seventeen.classList.remove('present')
    seventeen.classList.add('future')
  }
  }
  changeColor();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
