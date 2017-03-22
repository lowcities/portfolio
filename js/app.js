
$(document).ready(function() {
  
  
  
  

  
  //Function to show or hide menu bar depending on screen size
  function checkSize() {
  if($(window).width() <= 898 ) {
    $('#menu').hide();
  } else {
    $('#menu').show();
    }
  }
  
  //Check size of screen on page load
  checkSize();

  //Check size of screen on resize of window
  $(window).resize(checkSize);


  //Jquery to load intro to webpage
  $('#container').load('intro.html');
  
  

//AJAX to load links to page
  $('#menu a, #heading').on('click', function(e) {
  e.preventDefault();
  var url = this.href;
  
  $('#container').remove();
  $("#content").load(url).hide().toggle("fold", 1000);
  checkSize();
  });
  

  //Jquery for toggling Nav menu
  jQuery(document).ready(function($){
  $('.nav_menu').on('click', function() {
    $('#menu').toggle("slow");
    });
  });

  $("#thumbnails a").on('click', function(event) {
    event.preventDefault();
    console.log('test');
    
});
  
  

  
});







//Function to input content to a div using innerHTML
document.getElementById("#press").onclick =
 function displayContent () {
    var first = document.getElementById("input").value;
    document.getElementById("output").innerHTML = "<p>" + first + "</p>";
}
    
function displayContent() {
  var info = documet.getElementById('info').value;
  var content = "<p>" + info + "</p>";
  document.getElementById('output').innerHTML = content;
   
}
/*var $dataClickState = $(this).attr('data-click-state');
        if($dataClickState === "closed" || $dataClickState === undefined) {
           $(this).attr('data-click-state', "open");
            $('#menu').animate({
                left:  "0px",
            }, 200);

            $('.wrapper').animate({
                left: "300px"
            }, 200);

      } else {
            $(this).attr('data-click-state', "closed");
            $('#menu').animate({
                left:  "-300px"
            }, 200);
            
            $('.wrapper').animate({
                left: "0px"
            }, 200);
            $('.biopic').effect('shake');
        }
    });*/
