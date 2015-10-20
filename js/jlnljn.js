$(document).ready(function(){  
 
  $('.scroll-animation').each(function(i){ 
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
      $(this).removeClass('scroll-animation').addClass('scroll-animation-in');       
    }   
  }); 

  // ---------------------------------------------
  // SMOOTH SCROLL VERS UN ELEMENT 
  // ---------------------------------------------

  $('.scroll-to').click( function() { // Au clic sur un élément

    var page = $(this).attr('href'); // Page cible
    var speed = 500; // Durée de l'animation (en ms)

    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });

  // ---------------------------------------------
  // SMOOTH SCROLL VERS UN ELEMENT - AVEC DELAY
  // ---------------------------------------------

  $('.scroll-to-delay').click( function() { // Au clic sur un élément
 
    var page = $(this).attr('href'); // Page cible
    var speed = 500; // Durée de l'animation (en ms)

    $('html, body').delay(500).animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });

  // ---------------------------------------------
  // LIENS & ANIMATIONS DE MENUS 
  // ---------------------------------------------

  $('#leftLink').click(function(e){  
    e.preventDefault();  
    $('body').removeClass('menuRightOpen')
             .addClass('menuLeftOpen'); // Ouvre le menu de gauche - Ferme le menu de droite 
  });  

  $('#rightLink').click(function(e){ 
    e.preventDefault();    
    $('body').removeClass('menuLeftOpen')
             .addClass('menuRightOpen'); // Ouvre le menu de droite - Ferme le menu de gauche  
  });   

  $('#site').click(function(){   
    $('body').removeClass('menuLeftOpen')
             .removeClass('menuRightOpen'); // Ferme les deux menus au clic sur le #site
  }); 

  $('#home').click(function(){   
    $('body').removeClass('menuLeftOpen')
             .removeClass('menuRightOpen'); // Ferme les deux menus au clic sur le #home
  }); 

  $('#menu a').click(function(){   
    $('body').removeClass('menuLeftOpen')
             .removeClass('menuRightOpen'); // Ferme les deux menus au clic sur le #home
  }); 

  // ---------------------------------------------
  // REACTIONS AU SCROLL 
  // ---------------------------------------------

  var lastScrollTop = 0;

  $(window).scroll(function() {

      var st = $(this).scrollTop();
      if (st < lastScrollTop){
        $('body').addClass('scrollUp'); // Ajoute la classe "scrollUp" au body quand on monte 
      } else {
        $('body').removeClass('scrollUp'); // Retire la classe "scrollUp" au body quand on descend 
      }
      lastScrollTop = st; 

      $('.scroll-animation').each(function(i){  
        if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
          $(this).removeClass('scroll-animation').addClass('scroll-animation-in');       
        }   
      }); 

      $('.scroll-animation-in').each(function(i){ 
        if($(window).scrollTop() + $(window).height() < $(this).offset().top + $(this).outerHeight() ){ 
          $(this).removeClass('scroll-animation-in').addClass('scroll-animation');       
        }  
      });  
  
  });
  
});   

  