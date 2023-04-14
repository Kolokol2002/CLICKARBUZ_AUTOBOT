import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let [delay, step, amount] = e.target;

  amount = Number(amount.value);
  delay = Number(delay.value);
  step = Number(step.value);

  for (let i = 0; i < amount; i++) {
    const resDelay = delay + step * i;
    createPromise(i + 1, resDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.3) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
