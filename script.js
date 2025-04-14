
 const birthday = new Date("2025-04-30T00:00:00").getTime();

 const updateCountdown = () => {
   const now = new Date().getTime();
   const gap = birthday - now;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const d = Math.floor(gap / day);
   const h = Math.floor((gap % day) / hour);
   const m = Math.floor((gap % hour) / minute);
   const s = Math.floor((gap % minute) / second);

   document.getElementById("days").innerText = d;
   document.getElementById("hours").innerText = h;
   document.getElementById("minutes").innerText = m;
   document.getElementById("seconds").innerText = s;
 };

 updateCountdown();
 setInterval(updateCountdown, 1000);