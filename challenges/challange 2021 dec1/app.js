//challange Carolyn & Miki
let datePicker = document.querySelectorAll("input");

datePicker.forEach((picker) => {
  picker.addEventListener("change", onDateSelect);
});

function counterHTML(days) {
  let counterElement = document.querySelector(".date span");
  counterElement.innerHTML = days;
}

function onDateSelect() {
  let dateValue = [
    document.querySelector(".from").value,
    document.querySelector(".to").value,
  ];

  let date1 = new Date(dateValue[0]);
  let date2 = new Date(dateValue[1]);

  let timeDiff = Math.abs(date2 - date1);
  let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  counterHTML(daysDiff);
  
}

counterHTML(0);
