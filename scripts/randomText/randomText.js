const images = ["img/COMLAG.jpg"];
const randomImage = images[Math.floor(Math.random() * images.length)];
document.querySelector(".background").style.backgroundImage = `url(${randomImage})`;

fetch('scripts/randomText/randomText.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n').filter(line => line.trim() && !line.trim().startsWith('//'));
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('randomText').innerText = randomLine;
  });
