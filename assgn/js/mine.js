$('.cbutton').click(function(event){
        $('img').attr('src','images/'+ $(this)
          .attr('id')+'.jpg');
      });