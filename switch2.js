const button = document.getElementById('myBut');

function leap() {
    const year = new Date().getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDayCount(month) {
    let dayCount;


    switch (month) {
      case 1:
        dayCount = 31;
        break;
      case 3:
        dayCount = 31;
        break;
      case 5:
        dayCount = 31;
        break;
      case 7:
        dayCount = 31;
        break;
      case 8:
        dayCount = 31;
        break;
      case 10:
        dayCount = 31;
        break;
      case 12:
        dayCount = 31;
        break;
      case 4:
        dayCount = 30;
        break;
      case 6:
        dayCount = 30;
        break;
      case 9:
        dayCount = 30;
        break;
      case 11:
        dayCount = 30;
        break;
      case 2:
        if (leap()) {
          dayCount = 29;
        } else {
          dayCount = 28;
        }
        break;
      default:
        dayCount = -1;
    }
  
    return dayCount;
  }
  
function test(){
    const monthDropdown = document.getElementById('month');

    const month = monthDropdown.value;


    const dayCount = getDayCount(Number(month));

    alert(`The day count of ${month} is ${dayCount}`);
}

if (button && monthDropdown) {
    button.addEventListener("click", test);
}

