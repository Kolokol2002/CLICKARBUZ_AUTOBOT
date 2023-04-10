import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker');
const valuesEl = document.querySelectorAll('.value');

const [days, hours, minutes, seconds] = valuesEl;

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
      days.textContent = selected.getDate();
      hours.textContent = selected.getHours();
      minutes.textContent = selected.getMinutes();
      seconds.textContent = selected.getSeconds();
    } else {
      Notify.failure('Not correct');
    }
  },
};

flatpickr(inputEl, options);
