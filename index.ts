// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Almost Increasing Sequence</h1>`;

function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    const currVal = sequence[i];
    const prevVal = sequence[i - 1];
    if (currVal <= prevVal) {
      count++;
      if (currVal <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
        return false;
      }
    }
  }
  return count <= 1;

}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2])) 