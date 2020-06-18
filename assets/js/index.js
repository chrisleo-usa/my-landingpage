//MENU TOGGLE
const slider = document.querySelector('#menuSlide');
const menuBtn = document.querySelector('.menuBtn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    slider.style.right = '0px';
    slider.style.top = '40vh';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    slider.style.right = '-40%';
    menuOpen = false;
  }
})  
//MENU TOGGLE


//NAVBAR COLOR SCROLL
window.onscroll = () => scrollFunction();
let navBar = document.querySelector('.nav');
let logo = document.querySelector('.logoHeader');

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBar.style.backgroundColor = '#f7faff';
    menuBtn.style.width = '35px';
    menuBtn.style.height = '35px';
    logo.style.width = '80%'
  } else {
    navBar.style.backgroundColor = 'transparent';
    logo.style.width = '90%'
    menuBtn.style.width = '40px';
    menuBtn.style.height = '40px';
  }
}
//NAVBAR COLOR SCROLL


//SKILLS

let frontEndBar = new ProgressBar.Line(frontEnd, {
  strokeWidth: 4,
  color: '#000',
  trailColor: '#fff',
  duration: 2000,
  trailWidth: 10,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  text: {
    style: {
      color: 'black',
      position: 'absolute',
      right: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, frontEndBar) => {
    frontEndBar.setText(Math.round(frontEndBar.value() * 100) + '%');
  }

});

let uiDesignBar = new ProgressBar.Line(uiDesign, {
  strokeWidth: 4,
  color: '#000',
  trailColor: '#fff',
  duration: 2000,
  trailWidth: 10,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  text: {
    style: {
      color: 'black',
      position: 'absolute',
      right: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, uiDesignBar) => {
    uiDesignBar.setText(Math.round(uiDesignBar.value() * 100) + '%');
  }

});

let csPlayerBar = new ProgressBar.Line(csPlayer, {
  strokeWidth: 4,
  color: '#000',
  trailColor: '#fff',
  duration: 2000,
  trailWidth: 10,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  text: {
    style: {
      color: 'black',
      position: 'absolute',
      right: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, csPlayerBar) => {
    csPlayerBar.setText(Math.round(csPlayerBar.value() * 100) + '%');
  }

});

let coffeeBar = new ProgressBar.Line(coffee, {
  strokeWidth: 4,
  color: '#000',
  trailColor: '#fff',
  duration: 2000,
  trailWidth: 10,
  svgStyle: {
    width: '100%',
    height: '100%'
  },
  text: {
    style: {
      color: 'black',
      position: 'absolute',
      right: '0',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, coffeeBar) => {
    coffeeBar.setText(Math.round(coffeeBar.value() * 100) + '%');
  }

});

frontEndBar.animate(0.6);
uiDesignBar.animate(0.3);
csPlayerBar.animate(0.75);
coffeeBar.animate(0.8);

//-------------------------
//HARD SKILLS

//HTML
let htmlCircle = new ProgressBar.Circle(html5, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//HTML


//CSS
let cssCircle = new ProgressBar.Circle(css3, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});

//CSS

// JAVASCRIPT
let jsCircle = new ProgressBar.Circle(javascript, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//JAVASCRIPT

//JQUERY
let jqueryCircle = new ProgressBar.Circle(jquery, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//JQUERY

//BOOSTRAP
let bootstrapCircle = new ProgressBar.Circle(bootstrap, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//BOOSTRAP

//REACT
let reactCircle = new ProgressBar.Circle(react, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//REACT

//SASS
let sassCircle = new ProgressBar.Circle(sass, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//SASS


//SEO
let seoCircle = new ProgressBar.Circle(seo, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//SEO

//SEMANTIC
let semanticCircle = new ProgressBar.Circle(semantic, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//SEMANTIC

//RESPONSIVE
let responsiveCircle = new ProgressBar.Circle(responsive, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//RESPONSIVE


htmlCircle.animate(0.8)
cssCircle.animate(0.7)
jsCircle.animate(0.5)
jqueryCircle.animate(0.6)
bootstrapCircle.animate(0.8)
reactCircle.animate(0.2)
sassCircle.animate(0.7)
seoCircle.animate(0.75)
semanticCircle.animate(0.9)
responsiveCircle.animate(0.8)

//------------------------
//DEDICATION
let dedicationCircle = new ProgressBar.Circle(dedication, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//DEDICATION

//COMMITMENT
let commitmentCircle = new ProgressBar.Circle(commitment, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//COMMITMENT

//COMMUNICATION
let communicationCircle = new ProgressBar.Circle(communication, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//COMMUNICATION

//PATIENCE
let patienceCircle = new ProgressBar.Circle(patience, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//PATIENCE

//ETHIC
let ethicCircle = new ProgressBar.Circle(ethic, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//ETHIC

//RESILIENCE
let resilienceCircle = new ProgressBar.Circle(resilience, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//RESILIENCE


//TEAMWORK
let teamCircle = new ProgressBar.Circle(team, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//TEAMWORK

//ANALYTICAL
let analyticalCircle = new ProgressBar.Circle(analytical, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//ANALYTICAL

//LEADERSHIP
let leadershipCircle = new ProgressBar.Circle(leadership, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//LEADERSHIP

//HUMILITY
var humilityCircle = new ProgressBar.Circle(humility, {
  color: '#aaa',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 2000,
  svgStyle: {
    width: '90%',
    height: '90%',
  },
  text: {
    style: {
      color: 'black'
    }
  },
  from: { color: '#000', width: 4 },
  to: { color: '#000', width: 4 },

  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value + '%');
    }

  }
});
//HUMILITY

dedicationCircle.animate(0.9)
commitmentCircle.animate(1)
communicationCircle.animate(1)
patienceCircle.animate(0.9)
ethicCircle.animate(1)
resilienceCircle.animate(0.85)
teamCircle.animate(0.9)
analyticalCircle.animate(0.70)
leadershipCircle.animate(0.6)
humilityCircle.animate(0.6)


//--------------------
//SCROLL TRIGGER
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const scrollAnimateBars = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  scrollAnimateBars.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })

}

animeScroll();

if(scrollAnimateBars.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 100));
  

}
