import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const valuesEl = document.querySelectorAll('.value');
const buttonStartEl = document.querySelector('[data-start]');

buttonStartEl.addEventListener('click', onStart);

const [days, hours, minutes, seconds] = valuesEl;

let diferentTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();
    const selected = selectedDates[0];

    if (selected.getTime() > currentDate.getTime()) {
      Notify.success('Correct');

      buttonStartEl.disabled = false;
      diferentTime = selected - currentDate;
      days.textContent = convertMs(diferentTime).days;
      hours.textContent = convertMs(diferentTime).hours;
      minutes.textContent = convertMs(diferentTime).minutes;
      seconds.textContent = convertMs(diferentTime).seconds;
    } else {
      Notify.failure('Not correct');
      buttonStartEl.disabled = true;
    }
  },
};

flatpickr(inputEl, options);

function onStart(e) {
  if (e.target.textContent === 'Start') {
    e.target.textContent = 'Stop';
    timerId = setInterval(() => {
      diferentTime -= 1000;
      days.textContent = convertMs(diferentTime).days;
      hours.textContent = convertMs(diferentTime).hours;
      minutes.textContent = convertMs(diferentTime).minutes;
      seconds.textContent = convertMs(diferentTime).seconds;
    }, 1000);
  } else {
    e.target.textContent = 'Start';
    clearInterval(timerId);
  }
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
