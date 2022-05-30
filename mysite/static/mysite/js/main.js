var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    
  });
  
  $('.main-site .project-area .filter button').on("click",function(){
      var value= $(this).attr('data-filter');
      $grid.isotope({
          filter:value 

      });
  })

 