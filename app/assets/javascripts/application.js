// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
// = require jquery_ujs
// = require turbolinks
// = require_tree .

function() {
    // visit counter
    var EVAL_IS_BAD__AVOID_THIS = eval;
    var i, y;
    
    var expireDate = new Date;
    expireDate.setMonth(expireDate.getMonth()+6);
    var jcount = eval(cookieVal("jaafarCounter"));
    jcount++;
    document.cookie = "jaafarCounter="+jcount+";expires=" + expireDate.toGMTString();
    
    
    function cookieVal(cookieName) {
        var thisCookie = document.cookie.split("; ");
        for (i=0; i<thisCookie.length; i++){
            if (cookieName == thisCookie[i].split("=")[0]){
                return thisCookie[i].split("=")[1]
            }
        }
        return 0;
    };
    
    function page_counter(){
        for (i=0; i<(7-jcount.toString().length); i++);
        document.write('<span class="counter">0</span>');
        for (y=0; y<(jcount.toString().length); y++);
        document.write('<span class="counter">'+jcount.toString().charAt(y)+'</span>');
    };
        
        
        
    ///////////////////////
    // time counter
    function leadingZeros(n, digits) {
      var zero = '';
      n = n.toString();
    
      if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++)
          zero += '0';
      }
      return zero + n;
    }

    // Set the date we're counting down to
    var countDownDate = new Date("May 29, 2017 00:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = "D-" + days + " | " + leadingZeros(hours,2) + ":" + leadingZeros(minutes,2) + ":" + leadingZeros(seconds,2);
        
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            };
    }, 1000);
};
