var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=be50dd36b67269580c4577af42f2870e';
$.get(url, function(results) {
  // The get request fires a callback function when the API request finishes
  console.log(results);
  // The data object contains all the information returned in the API
  var weather = results.weather[0];
  var weathertext = results.weather[0].main;
  var humidity = results.main.humidity;
  var temp = results.main.temp;

for(var counter=0; counter< 1; counter++){
  console.log('counter', counter);
  console.log('weathertext', weathertext);
          
          var video1 =document.getElementById("video1");
          var video2 =document.getElementById("video2");
          var video3 =document.getElementById("video3");

         if(weathertext == 'Rain'){
          $('body').append(video1);
                    
        } else if(weathertext == 'Clear'){
            $('body').append(video2);

        } else if(weathertext == 'Clouds'){
          $('body').append(video3);

        }
};

})
