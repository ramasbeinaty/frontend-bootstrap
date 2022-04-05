//to add functionality to the pause and play buttons
     $(document).ready(function(){
         $('#mycarousel').carousel({ interval: 2000 }); //setting the sliding action of the carousel to 2 seconds.
         $('#carouselButton').click(function() //if a click action is executed then pause
         {
             if ($('#carouselButton').children('span').hasClass('fa-pause')) //if this span tag inside the id carouselButton has the class fa-pause
             {
                 $('#mycarousel').carousel('pause'); //perform the pause action
                 $('#carouselButton').children('span').removeClass('fa-pause'); //replace the fa-pause class with fa-play to show the status
                 $('#carouselButton').children('span').addClass('fa-play');
             }
             else if ($('#carouselButton').children('span').hasClass('fa-play')) //not needed, but just to double-check
             {
                 $('#mycarousel').carousel('cycle'); 
                 $('#carouselButton').children('span').removeClass('fa-play'); 
                 $('#carouselButton').children('span').addClass('fa-pause');
             }
            });
        $('#loginButton').click(function(){
            $('#loginModal').modal('toggle');
        });
        $('#reserveTableButton').click(function(){
            $('#reserveTableModal').modal('toggle');
        });
        });