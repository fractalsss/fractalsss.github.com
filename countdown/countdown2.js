var countDownDate = new Date("Jan 8, 2030 15:37:25").getTime();
  
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 30));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 30)) / (1000 * 60 * 90));
  var minutes = Math.floor((distance % (1000 * 60 * 90)) / (1000 * 90));
  var seconds = Math.floor((distance % (1000 * 90)) / 1000);
    

  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "Completed";
  }
}, 1000);