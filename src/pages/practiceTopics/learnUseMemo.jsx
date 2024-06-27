import React, { useState, useMemo } from 'react';

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // A function to compute a value based on the items array
  const computeExpensiveValue = (items) => {
    console.log('Computing expensive value...');
    return items.reduce((acc, item) => acc + item, 0);
  };

  // Use useMemo to memoize the expensive computation
  const memoizedValue = useMemo(() => computeExpensiveValue(items), [items]);

  return (
    <div className="blog-post">
      <h1>Understanding useMemo in React</h1>
      <p>
        The <code>useMemo</code> hook in React allows you to memoize the result of a computation,
        preventing expensive calculations on every render. Below are some common use cases and
        examples of how to use <code>useMemo</code>.
      </p>

      <section className="example-section">
        <h2>Memoizing Expensive Calculations</h2>
        <p>
          One of the main uses of <code>useMemo</code> is to memoize expensive calculations
          so they are only recomputed when necessary. In this example, we compute the sum of
          an array of numbers.
        </p>
        <div className="calculation-display">
          <p>Sum of items: {memoizedValue}</p>
        </div>
      </section>

      <section className="example-section">
        <h2>Triggering Recalculation</h2>
        <p>
          The memoized value will only be recomputed when the dependency array changes.
          Here, we add a new item to the array and see the effect on the memoized value.
        </p>
        <button onClick={() => setItems([...items, items.length + 1])}>
          Add Item
        </button>
        <button onClick={() => setCount(count + 1)}>
          Increment Count (Unrelated)
        </button>
        <p>Count: {count}</p>
      </section>

      <style jsx>{`
        .blog-post {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: black;
          color: #fff;
          border-radius: 8px;
        }
        h1, h2 {
          color: #fff;
          margin-bottom:20px;
          margin-top:20px;
        }
        p {
          line-height: 1.6;
          color: #ccc;
        }
        .example-section {
          margin-bottom: 40px;
        }
        .calculation-display {
          margin: 10px 0;
          padding: 10px;
          background-color: black;
          border-radius: 4px;
        }
        button {
          padding: 10px 15px;
          margin-right: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default LearnUseMemo;
