// home time function
window.onload = function docReady() {

  if (document.body.classList.contains('home')) {
    setInterval(function() {
      document.getElementById('realTime').innerHTML = moment().add(39, 'minutes').add(35, 'seconds').format('HH:mm:ss');
    }, 500);
  }

  // distance in kms per sec function 
  if (document.body.classList.contains('distance')) {
    var kmCounter = document.getElementById('kmCounter');
    (function() {
      var counter = 200127567;
      window.kmCounterOptions = {
        duration: 1000,
        theme: "default"
      }

      kmCounter.innerHTML = counter;

      setInterval(function() {
        counter += 7900;
        kmCounter.innerHTML = counter;
      }, 1600);
    })();
  }

  // temperature function
  var thermoVal = document.getElementById('thermometerValue');
  var arrowUp = document.getElementById('arrowUp');
  var arrowDown = document.getElementById('arrowDown');

  if (arrowUp) {
    arrowUp.addEventListener('click', function(){
      thermoVal.innerHTML = parseInt(thermoVal.innerHTML, 10) + 1;
    })
  }
  if (arrowDown) {
    arrowDown.addEventListener('click', function(){
      thermoVal.innerHTML = parseInt(thermoVal.innerHTML, 10) - 1;
    })
  }
}



// donut charts
if (document.getElementById("food")) {
  var foodDonut = document.getElementById("food").getContext("2d");
  var food = new Chart(foodDonut).Doughnut(
    [
      {
        value: 300,
        color:"#fff",
        label: "Food"
      },
    ],
    {
      title: {
        display: true,
        text: 'Food',
      },
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 2,
      percentageInnerCutout : 80,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      animateScale : false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
    }
  );
}

if (document.getElementById("water")) {
  var waterDonut = document.getElementById("water").getContext("2d");
  var water = new Chart(waterDonut).Doughnut(
    // Datas
    [
      {
        value: 300,
        color:"#363636",
        label: "Water"
      },
    ],
    // Options
    {
      segmentShowStroke : true,
      segmentStrokeColor : "#363636",
      segmentStrokeWidth : 2,
      percentageInnerCutout : 80,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      animateScale : false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
    }
);
}


    // background particles js 

particlesJS('particles-js', 
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "bottom-left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 2,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true, 
  }

);


