fetch('https://github.com/2plus2isfive/2plus2isfive/raw/db5044d8e4f7872e6430bc97af96382ad6554114/scripts/randomText/randomText.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n').filter(line => line.trim() && !line.trim().startsWith('//'));
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('randomText').innerText = randomLine;
  });
