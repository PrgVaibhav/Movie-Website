const exploreBtn = document.querySelector('.explore-btn');

exploreBtn.addEventListener('mouseover', (e) => {
  const x = e.pageX - exploreBtn.offsetLeft;
  const y = e.pageY - exploreBtn.offsetTop;

  console.log(x, y);

  exploreBtn.style.setProperty('--xPos', x + 'px');
  exploreBtn.style.setProperty('--yPos', y + 'px');
});
