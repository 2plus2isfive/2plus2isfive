window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  const aspectRatio = window.innerWidth / window.innerHeight;

  if (aspectRatio < 16 / 9) {
    popup.style.display = 'block';
  }

  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
