const refs={
  days:document.querySelector('.value[ data-value="days"]'),
  hours:document.querySelector('.value[ data-value="hours"]'),
  mins:document.querySelector('.value[ data-value="mins"]'),
 secs:document.querySelector('.value[ data-value="secs"]'),
  timer:document.querySelector('timer-1'),
  
}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
function CountdownTimer(e){
  setInterval(()=>{
  const time = e.targetDate - new Date();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
  
  },1000);
};
function pad(value){
  return String(value).padStart(2, '0');
}
















