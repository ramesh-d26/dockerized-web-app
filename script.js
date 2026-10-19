document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-command');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  const command = 'docker run --rm -d -p 8080:80 --name cloudlaunch cloudlaunch';
  try {
    await navigator.clipboard.writeText(command);
    copyStatus.textContent = 'Command copied: ' + command;
  } catch (error) {
    copyStatus.textContent = 'Run this command in your terminal: ' + command;
  }
});
