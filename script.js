window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / maxScroll;

  let color;

  if (scrollPercent < 0.25) {
    color = 'white';
  } else if (scrollPercent < 0.5) {
    color = 'black';
  } else if (scrollPercent < 0.75) {
    color = 'blue';
  } else {
    color = 'red';
  }

  document.body.style.backgroundColor = color;
});
