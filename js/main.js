// FAQ accordion toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
// const trailContainer = document.getElementById('trail-container');

// document.addEventListener('mousemove', (e) => {
//   for (let i = 0; i < 3; i++) {
//     const dot = document.createElement('div');
//     dot.classList.add('trail-dot');

//     const offsetX = (Math.random() - 0.5) * 30;
//     const offsetY = (Math.random() - 0.5) * 30;

//     dot.style.left = `${e.clientX + offsetX}px`;
//     dot.style.top = `${e.clientY + offsetY}px`;

//     trailContainer.appendChild(dot);

//     setTimeout(() => dot.remove(), 800);
//   }
// });
const galaxyTrail = document.getElementById('galaxy-trail');

document.addEventListener('mousemove', (e) => {
  const streak = document.createElement('div');
  streak.classList.add('streak');

  const angle = Math.random() * 60 - 30; // rotation between -30° to +30°
  const hueShift = Math.floor(Math.random() * 20) + 20; // color vibe

  streak.style.left = `${e.clientX}px`;
  streak.style.top = `${e.clientY}px`;
  streak.style.transform = `rotate(${angle}deg)`;

  streak.style.background = `linear-gradient(90deg,
    hsl(39, 100%, 60%),
    hsl(${39 + hueShift}, 100%, 55%),
    hsl(39, 100%, 60%)
  )`;

  galaxyTrail.appendChild(streak);

  setTimeout(() => streak.remove(), 1000);
});
