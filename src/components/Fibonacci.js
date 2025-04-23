import React, { useState } from 'react';

function Fibonacci() {
  const [count, setCount] = useState('');
  const [sequence, setSequence] = useState([]);
  
  const generateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib.slice(0, n);
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    const n = parseInt(count);
    if (isNaN(n) || n <= 0) {
      setSequence([]);
      return;
    }
    setSequence(generateFibonacci(n));
  };

  return (
    <div>
      <h2>Fibonacci Generator</h2>
      <form onSubmit={handleGenerate}>
        <label>Enter number of terms: </label>
        <input type="number" value={count} onChange={handleChange} min="1" required />
        <button type="submit">Generate</button>
      </form>
      {sequence.length > 0 && (
        <div>
          <p>{sequence.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Fibonacci;
