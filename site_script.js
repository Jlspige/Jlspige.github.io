$(document).ready(function(){
   //animated scrolling
   $("#navbar a").click(function(event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
   });
});
