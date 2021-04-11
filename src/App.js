import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React from "react";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, text: "Task1" },
    { id: 2, value: 2, text: "Task2" },
    { id: 3, value: 0, text: "Task3" },
    { id: 4, value: 0, text: "Task4" },
  ]);

  const handleIncrement = (counter) => {
    //here we dont have aceess to this or this.state properlty

    setCounters(
      counters.map((c) => {
        c.id === counter.id ? (c.value += 1) : (c.value = c.value);
        return c;
      })
    );
    console.log("Increment Clicked", counter);
  };

  const handleDecrement = (counter) => {
    //here we dont have aceess to this or this.state properlty

    setCounters(
      counters.map((c) => {
        c.id === counter.id && c.value >= 1
          ? (c.value -= 1)
          : (c.value = c.value);
        return c;
      })
    );
    console.log("Decrement Clicked", counter);
  };

  const handleReset = () => {
    setCounters(
      counters.map((c) => {
        c.value = 0;
        return c;
      })
    );
  };
  const handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);

    setCounters(counters.filter((c) => c.id !== counterId));
  };

  return (
    <div className="container">
      <NavBar
        class="header"
        totalCounters={counters.filter((counter) => counter.value > 0).length}
      />
      ,
      <main className="flex">
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        ></Counters>
      </main>
    </div>
  );
};


export default App;
