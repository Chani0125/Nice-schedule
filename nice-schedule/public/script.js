// Logout button
const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener("click", () => {
  alert("로그아웃 되었습니다.");
});

// Calendar
const monthName = document.querySelector(".month-name");
const prevMonthBtn = document.querySelector(".prev-month");
const nextMonthBtn = document.querySelector(".next-month");
const daysElt = document.querySelector(".days");

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
const months = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월"
];

let selectedDate = new Date();

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function firstDayFor(month, year) {
  return new Date(year, month).getDay();
}

function renderCalendar() {
  daysElt.innerHTML = " ";

  let firstDay = firstDayFor(selectedDate.getMonth(), selectedDate.getFullYear());
  let days = daysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
  
  let index = 0;
  for (; index < firstDay; index++) {
    daysElt.innerHTML += `<div class="empty"></div>`;
  }

  for (let day = 1; day <= days; day++) {
    if ((day + index) % 7 == 1) {
        daysElt.innerHTML += `<div class="day" id="sunday">${day}</div>`;
    } else if ((day + index) % 7 == 0) {
        daysElt.innerHTML += `<div class="day" id="saturday">${day}</div>`;
    } else {
        daysElt.innerHTML += `<div class="day">${day}</div>`;
    }
  }
}

monthName.textContent = months[selectedDate.getMonth()] + ` ` + selectedDate.getFullYear();

prevMonthBtn.addEventListener("click", () => {
  if (selectedDate.getMonth() === 0) {
    selectedDate.setMonth(11);
    selectedDate.setFullYear(selectedDate.getFullYear() - 1);
  } else {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
  }
  
  renderCalendar();
  monthName.textContent = months[selectedDate.getMonth()] + ` ` + selectedDate.getFullYear();
});

nextMonthBtn.addEventListener("click", () => {
  if (selectedDate.getMonth() === 11) {
    selectedDate.setMonth(0);
    selectedDate.setFullYear(selectedDate.getFullYear() + 1);
  } else {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
  }

  renderCalendar();
  monthName.textContent = months[selectedDate.getMonth()] + ` ` + selectedDate.getFullYear();
});

renderCalendar();

// Memo buttons
const addBtn = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");

addBtn.addEventListener("click", () => {
  const memo = prompt("Enter your memo.");
  if (memo) {
    const memoDiv = document.createElement("div");
    memoDiv.innerText = memo;
    document.querySelector(".sidebar").appendChild(memoDiv);
  }
});

deleteBtn.addEventListener("click", () => {
  const memoDivs = document.querySelectorAll(".sidebar div");
  if (memoDivs.length > 1) {
    memoDivs[memoDivs.length - 1].remove();
  } else {
    alert("No memo to delete.");
  }
});

// Weather API
const apiKey = "38a746ee1e7b065cf5410159dd9a7be9";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=SEOUL&appid=${apiKey}&units=metric&`;

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    document.querySelector(".weather").innerText = `서울의 현재 기온: ${Math.round(data.main.temp)}℃, 풍속: ${Math.round(data.wind.speed)}m/s`;
  })
  .catch(error => {
    console.error("Weather API error:", error);
    document.querySelector(".weather").innerText = "날씨 정보를 불러올 수 없습니다.";
  });

