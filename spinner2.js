const spinner = function() {
  let delay = 100;
  let displayChar = ['|', '/', '-', '\\'];
  for (let i = 0; i <= 2 * (displayChar.length); i++) {
    setTimeout(() => {
      process.stdout.write('\r' + displayChar[i % 4] + '  ');
    }, delay);
    delay += 200;
  }
};
  
spinner();