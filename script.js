
document.addEventListener("DOMContentLoaded", function() {
    var holidayDates = document.querySelectorAll(".holiday-date");
    holidayDates.forEach(function(date) {
        date.addEventListener("click", function() {
            // Remove the "holiday-date-clicked" class if it exists
            date.classList.remove("holiday-date-clicked");
            
            // Trigger a reflow by reading the offsetHeight property
            // This is a hack to ensure the class removal takes effect immediately
            date.offsetHeight;
            
            // Add the "holiday-date-clicked" class again
            date.classList.add("holiday-date-clicked");
        });
    });
});


function toggleStarEffect(element) {
  element.classList.add('star-effect');
  element.classList.add('active');
  setTimeout(function() {
    element.classList.remove('active');
    setTimeout(function() {
      element.classList.remove('star-effect');
    }, 200);
  }, 1000); // Adjust the delay (in milliseconds) for disappearance as needed
}