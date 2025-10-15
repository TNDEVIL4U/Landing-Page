window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / maxScroll;

  let color;

  if (scrollPercent < 0.15) {
    color = 'white';
  } else if (scrollPercent < 0.40) {
    color = 'black';
  } else if (scrollPercent < 0.65) {
    color = 'blue';
  } 
  else if (scrollPercent < 85)
  {
    color = 'green';
  }
  else {
    color = 'red';
  }

  document.body.style.backgroundColor = color;
});
