const usrArgs = process.argv;
process.argv.slice(2);
process.argv.filter(timer => !NaN)
process.argv.filter(timer => timer >= 0)

usrArgs.forEach((timer) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 2000);
});
