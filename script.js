window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / maxScroll;

  let color;

  if (scrollPercent < 0.25) {
    // Top quarter — white
    color = 'white';
  } else if (scrollPercent < 0.5) {
    // Second quarter — black
    color = 'black';
  } else if (scrollPercent < 0.75) {
    // Third quarter — blue
    color = 'blue';
  } else {
    // Bottom quarter — red
    color = 'red';
  }

  document.body.style.backgroundColor = color;
});
