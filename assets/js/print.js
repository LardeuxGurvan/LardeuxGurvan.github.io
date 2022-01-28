// Event listener to print
document.addEventListener('DOMContentLoaded', () => {
  const printElement = document.getElementById('print');
  printElement.addEventListener('click', () => {
    window.print();
  });
});
