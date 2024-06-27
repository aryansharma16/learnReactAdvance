import React, { useEffect, useRef, useState } from "react";

const LearnUseRef = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const inputElem = useRef(null);
  const prevNameRef = useRef(null);
  const timerRef = useRef(null);

  // Track the previous value of the name state
  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  const handleFocus = () => {
    inputElem.current.focus();
  };

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const submit = () => {
    console.log(inputElem.current);
    inputElem.current.style.backgroundColor = "red";
    handleFocus();
  };

  return (
    <div className="blog-post">
      <h1>Understanding useRef in React</h1>
      <p>
        The <code>useRef</code> hook in React allows you to persist values between renders
        without causing re-renders. Below are some common use cases and examples of how to use 
        <code>useRef</code>.
      </p>

      <section className="example-section">
        <h2>Accessing DOM Elements</h2>
        <p>
          One of the most common uses of <code>useRef</code> is to access and interact with DOM
          elements directly. In this example, we have an input field that we can focus and change
          its background color when the button is clicked.
        </p>
        <input
          ref={inputElem}
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={submit}>Submit Or Focus</button>
      </section>

      <section className="example-section">
        <h2>Storing Previous Values</h2>
        <p>
          You can use <code>useRef</code> to keep track of previous values without causing a re-render.
          Here, we track the previous value of the input field.
        </p>
        <div className="name-display">
          My name is {name} and it used to be {prevNameRef.current}
        </div>
      </section>

      <section className="example-section">
        <h2>Storing Mutable Values</h2>
        <p>
          <code>useRef</code> can be used to store any mutable value that you want to persist across renders.
          In this example, we store a timer ID and manage a simple timer.
        </p>
        <div className="timer">
          <h1>Seconds: {count}</h1>
          <button onClick={startTimer}>Start Timer</button>
          <button onClick={stopTimer}>Stop Timer</button>
        </div>
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
        }
        p {
          line-height: 1.6;
          color: #ccc;
        }
        .example-section {
          margin-bottom: 20px;
        }
        .input-field {
          display: block;
          margin-bottom: 10px;
          padding: 8px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #000;
        }
        .name-display {
          margin: 10px 0;
          padding: 10px;
          background-color: #444;
          border-radius: 4px;
        }
        .timer {
          margin-top: 20px;
        }
        button {
          padding: 10px 15px;
          margin-right: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default LearnUseRef;
