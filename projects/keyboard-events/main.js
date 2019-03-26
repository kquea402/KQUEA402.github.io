$(function() {
  // Your interactions go here
  var letters = "abcdefghijklmnopqrstuvwxyz";
  letters = letters.split("");
  
  $(window).keydown(function(event){
      key = event.which - 65; //makes a-z = 0-27
      key = letters[key];
      console.log(key);
      $('.' + key ).show();
      // $('.typewriter').append(key);
  });
});

