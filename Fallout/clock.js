function updateDateTime() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString();
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const time = hours + minutes;
  document.getElementById("day").textContent = day;
  document.getElementById("month").textContent = month;
  document.getElementById("year").textContent = year;
  document.querySelector('.time').textContent = time;
  setTimeout(updateDateTime, 60000); // update every 60 seconds
}
updateDateTime();
