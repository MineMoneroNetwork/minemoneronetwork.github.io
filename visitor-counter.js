
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const VisitorCounter = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [onlineVisitors, setOnlineVisitors] = useState(0);

  useEffect(() => {
    // Initialize or retrieve visitor data from localStorage
    const storedTotal = localStorage.getItem('totalVisitors');
    const storedToday = localStorage.getItem('todayVisitors');
    const storedLastVisitDate = localStorage.getItem('lastVisitDate');

    const today = new Date().toDateString();

    let currentTotal = storedTotal ? parseInt(storedTotal, 10) : 37548; // Starting value from image
    let currentToday = storedToday ? parseInt(storedToday, 10) : 0;

    if (storedLastVisitDate !== today) {
      // New day, reset today's visitors
      currentToday = 0;
      localStorage.setItem('lastVisitDate', today);
    }

    // Increment total and today's visitors for this visit
    currentTotal += 1;
    currentToday += 1;

    localStorage.setItem('totalVisitors', currentTotal);
    localStorage.setItem('todayVisitors', currentToday);
    setTotalVisitors(currentTotal);
    setTodayVisitors(currentToday);

    // Simulate online visitors (can be more sophisticated with a backend)
    const currentOnline = Math.floor(Math.random() * 20) + 1; // Random number for demonstration
    setOnlineVisitors(currentOnline);

    // Update online visitors every 30 seconds
    const interval = setInterval(() => {
      setOnlineVisitors(Math.floor(Math.random() * 20) + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-counter-bar">
      <span className="visitor-counter-item">Gesamt: <strong>{totalVisitors}</strong></span>
      <span className="visitor-counter-item">Heute: <strong>{todayVisitors}</strong></span>
      <span className="visitor-counter-item">Online: <strong>{onlineVisitors}</strong></span>
    </div>
  );
};

// Render the component
const counterRoot = ReactDOM.createRoot(document.getElementById('visitor-counter-root'));
counterRoot.render(<VisitorCounter />);

