setInterval(clock,1000);
function clock(){
 let time=new date();
  let hour=time.getHours();
  let min=time.getMinutes();
  let sec=time.getSeconds();
  am_pm="am";
  if(hour>12){
    hour-=12;
    am_pm="pm";
  }
  if(hour==0){
    hr=12;
    am_pm="am";
  }
  hour=hour<10?"0"+hour:hour;
  min=min<10?"0"+min:min;
  sec=sec<10?"0"+sec:sec;

  let currenttime=hour+":"+min+":"+sec+am_pm;
  document.getElementByID("clo").innerHTML=currenttime;

  var t=setimeout(function(){
  clock()},500);

}
clock();