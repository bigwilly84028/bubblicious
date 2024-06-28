import logo from './assets/bub-logo.png';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [number, setNumber] = useState(null);

  useEffect(() => {

    function sieveOfEratosthenes(limit) {
      console.log("inside sieve");
      let isPrime = Array(limit + 1).fill(true);
      isPrime[0] = isPrime[1] = false;

      for (let start = 2; start * start <= limit; start++) {
        if (isPrime[start]) {
          for (let multiple = start * start; multiple <= limit; multiple += start) {
            isPrime[multiple] = false;
          }
        }
      }

      return isPrime;
    }

    function countBubbliciousNumbers(limit) {
      console.log("inside count bubbsz");
      let isPrime = sieveOfEratosthenes(limit);
      let bubbliciousCount = 0;

      for (let num = 2; num <= limit; num++) {
        if (isPrime[num]) {
          if (num.toString(16).slice(-1).toLowerCase() === 'b') {
            bubbliciousCount += 1;
          }
        }
      }

      return bubbliciousCount;
    }

    // Set the limit
    const limit = 100000;

    // Bind the count of Bubblicious Numbers to the UI
    setNumber(countBubbliciousNumbers(limit))

  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main class="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 class="txt-dark">The count of bubblicious numbers between one and one hundred thousand is: </h3>
        <div class="number-plate">{number}</div>
      </main>
      <footer class="App-footer">
        <small>
          <span class="txt-bold">WARNING:</span> Side effects may include intense nostalgia and a strong urge to share with friends. Keep away from hair at all times.
          Avoid swallowing. Everybody knows that chewing gum remains in the human stomach for up to seven years before it can be digested.
        </small>
      </footer>
    </div>
  );
}

export default App;
