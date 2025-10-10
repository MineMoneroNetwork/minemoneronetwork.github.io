
(function() {
  function getVisitorData() {
    const today = new Date().toDateString();

    let totalVisitors = parseInt(localStorage.getItem("totalVisitors") || "37548", 10);
    let todayVisitors = parseInt(localStorage.getItem("todayVisitors") || "0", 10);
    let lastVisitDate = localStorage.getItem("lastVisitDate");

    if (lastVisitDate !== today) {
      todayVisitors = 0;
      localStorage.setItem("lastVisitDate", today);
    }

    totalVisitors++;
    todayVisitors++;

    localStorage.setItem("totalVisitors", totalVisitors);
    localStorage.setItem("todayVisitors", todayVisitors);

    return { totalVisitors, todayVisitors };
  }

  function renderVisitorCounter() {
    const { totalVisitors, todayVisitors } = getVisitorData();
    const onlineVisitors = Math.floor(Math.random() * 20) + 1; // Simulate online visitors

    let counterBar = document.getElementById("visitor-counter-bar");
    if (!counterBar) {
      counterBar = document.createElement("div");
      counterBar.id = "visitor-counter-bar";
      counterBar.className = "visitor-counter-bar";
      document.body.appendChild(counterBar);
    }

    counterBar.innerHTML = `
      <span class="visitor-counter-item">Gesamt: <strong>${totalVisitors}</strong></span>
      <span class="visitor-counter-item">Heute: <strong>${todayVisitors}</strong></span>
      <span class="visitor-counter-item">Online: <strong>${onlineVisitors}</strong></span>
    `;

    // Update online visitors every 30 seconds
    setInterval(() => {
      const currentOnline = Math.floor(Math.random() * 20) + 1;
      const onlineSpan = counterBar.querySelector(".visitor-counter-item:nth-child(3) strong");
      if (onlineSpan) {
        onlineSpan.textContent = currentOnline;
      }
    }, 30000);
  }

  // Run when the DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderVisitorCounter);
  } else {
    renderVisitorCounter();
  }
})();

