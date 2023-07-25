
let containerA = new ProgressBar.Circle(circleA, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 300);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerB = new ProgressBar.Circle(circleB, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 75);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerC = new ProgressBar.Circle(circleC, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 313);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

let containerD = new ProgressBar.Circle(circleD, {
  color: '#f2f3f4',

  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#0c0c0c', width: 1 },
  to: { color: '#0b7b9e', width: 4 },

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 768);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});

containerA.text.style.fontFamily = 'Helvetica, sans-serif';
containerA.text.style.fontSize = '2rem';

containerB.text.style.fontFamily = 'Helvetica, sans-serif';
containerB.text.style.fontSize = '2rem';

containerC.text.style.fontFamily = 'Helvetica, sans-serif';
containerC.text.style.fontSize = '2rem';

containerD.text.style.fontFamily = 'Helvetica, sans-serif';
containerD.text.style.fontSize = '2rem';


// containerA.animate(1.0); 
// containerB.animate(1.0);
// containerC.animate(1.0); 
// containerD.animate(1.0);  

let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0){

          containerA.animate(1.0); 
          containerB.animate(1.0);
          containerC.animate(1.0); 
          containerD.animate(1.0);  

            stop = 1;

        }

    });



// // Parallax
// $( "#data-area" ).parallax({imageSrc: 'img/cidadeparallax.png'})
// $( "#apply-content" ).parallax({imageSrc: 'img/pattern.png'})





// Filtros botoes


$('.filter-btn').on('click', function() {

  let type = $(this).attr('id');
  let boxes = $('.project-box');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes)
  } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
  } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
  } else {
      eachBoxes('all', boxes);
  }

});

function eachBoxes(type, boxes) {

  if(type == 'all') {
      $(boxes).fadeIn();
  } else {
      $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
              $(this).fadeOut('slow');
          } else {
              $(this).fadeIn();
          }
      });
  }
}

//Scroll para seções
let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let teamSection = $('#team-area');
let portfolioSection = $('#portfolio-area');
let contactSection = $('#contact-area');

let scrollTo = '';

$(navBtn).click(function(){

  let btnId = $(this).attr('id');

  console.log(btnId);

  if(btnId == 'about-menu'){
      scrollTo = aboutSection;
  } else if(btnId == 'services-menu'){
      scrollTo = servicesSection;
  } else if(btnId == 'team-menu'){
      scrollTo = teamSection;
  } else if(btnId == 'portfolio-menu'){
      scrollTo = portfolioSection;
  } else if(btnId == 'contact-menu'){
      scrollTo = contactSection;
  } else {
      scrollTo = bannerSection;
  }

  $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
  }, 1500);

});

