//display date at top of page
let date = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').append(date);
let currentHour = moment().hour();
console.log(date);
console.log(currentHour);
//save button saves users text input in localStorage
$(document).ready(function () {
  $('.saveButton');
  for (let i = 1; i < 10; i++) {
    $("#scheduleItem" + i).val(localStorage.getItem("scheduleItem" + i));
  }
//Save scheduleItem input to local storage
  function saveScheduleItem() {      
    for (let i = 1; i < 10; i++) {
      localStorage.setItem("scheduleItem" + i, $("#scheduleItem" + i).val());
    }
  };
  $('.saveButton').on("click", saveScheduleItem);
});

