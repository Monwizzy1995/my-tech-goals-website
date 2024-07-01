// Function to display current time in UTC
function displayCurrentTimeUTC() {
  const now = new Date();
  const timeString = now.toISOString().split("T")[1].split(".")[0]; // Extract time part from ISO string

  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  currentTimeElement.textContent = `Current Time in UTC: ${timeString}`;
}

// Function to display current day of the week
function displayCurrentDay() {
  const now = new Date();
  const options = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(now);

  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
}

// Update current time initially and every 60 seconds
displayCurrentTimeUTC();
setInterval(displayCurrentTimeUTC, 60000);

// Update current day initially and every day at midnight
displayCurrentDay();
setInterval(displayCurrentDay, 86400000); // 86400000 milliseconds = 24 hours
