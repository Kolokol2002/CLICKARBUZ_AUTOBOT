import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const valuesEl = document.querySelectorAll('.value');
const buttonStartEl = document.querySelector('[data-start]');

buttonStartEl.addEventListener('click', onStart);

const [days, hours, minutes, seconds] = valuesEl;

let selected = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();
    selected = selectedDates[0];

    if (selected.getTime() > currentDate.getTime()) {
      Notify.success('Correct');
      buttonStartEl.disabled = false;
    } else {
      Notify.failure('Not correct');
      buttonStartEl.disabled = true;
    }
  },
};

flatpickr(inputEl, options);

function onStart(e) {
  e.target.disabled = true;

  const timerId = setInterval(() => {
    const diferentTime = selected - Date.now();
    if (diferentTime <= 0) {
      e.target.disabled = false;
      clearInterval(timerId);
      return;
    }
    changeTimer(convertMs(diferentTime));
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeTimer(obj) {
  days.textContent = addLeadingZero(obj.days);
  hours.textContent = addLeadingZero(obj.hours);
  minutes.textContent = addLeadingZero(obj.minutes);
  seconds.textContent = addLeadingZero(obj.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
