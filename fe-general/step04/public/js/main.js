$(function() {

   var data = [];
   var index = 0;
   $.get('/video', function(res) {
      if (res.code == 0) {
          data = res.data;
          refresh(index);
      } 
   });

   var current = [];
   var pageSize = 4;
   var template = $("#video-template");
   function refresh(page) {
       var start = page * pageSize;
       current = data.slice(start, start + pageSize);
       if (start + pageSize >= data.length) {
           index = -1;
       }

       $('.video-list li.video-item').remove();
       for (var i = 0; i < current.length; i++) {
           var ele = template.clone();
           ele.attr('id', 'video-' + i);
           ele.show();
           ele.addClass('video-item');
           $('.title a', ele).text(current[i].title);
           $('.desc', ele).text(current[i].desc);
           $('.image', ele).attr('src', current[i].image);
           $('.video-list').prepend(ele);
       }
   }

    $('.refresh a').click(function() {
        index += 1;
       refresh(index); 
    });
});