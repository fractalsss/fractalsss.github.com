var countDownDate = new Date("april 16, 2022 09:00:00").getTime();
  
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance / (1000 * 60));
  var seconds = Math.floor((distance / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Completed";
  }

}, 100);
