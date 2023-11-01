const button = document.getElementById('myBut');

function getDay() {
    const dayNumber = new Date().getDay();
  
    let dayName = "";
  
    switch (dayNumber) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 0:
        dayName = "Sunday";
        break;
      default:
        dayName = "Invalid day number";
    }
    //alert(`${dayName}`);

    return `The day of the week is ${dayName}.`;
}

if (button) {
    button.addEventListener("click", getDay);
}