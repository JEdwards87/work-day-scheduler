//display date and time at top of page
let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
$('#currentDay').append(dateAndTime);
let currentHour = moment().hour();
console.log(dateAndTime);
console.log(currentHour);
//save button saves users text input in localStorage
$(document).ready(function () {
  const saveButton = $('.saveButton');
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

