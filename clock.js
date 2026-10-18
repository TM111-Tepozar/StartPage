function updateClock() {
    const now = new Date();
    
    // 1. Live Time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockEl = document.getElementById('clock');
    if (clockEl) clockEl.textContent = `${hours}:${minutes}:${seconds}`;

    // 2. Dynamic Date (e.g., Sat, Oct 17, 2026)
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const dateEl = document.getElementById('date-display');
    if (dateEl) dateEl.textContent = now.toLocaleDateString('en-US', options);
}

// Run every second to keep the clock ticking
setInterval(updateClock, 1000);
updateClock();