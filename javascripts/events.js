$("#search").keyup(()=>{
    $(".card-content").each(function(){
        let val = $("#search").val().toLowerCase();
          if($(this).text().toLowerCase().includes(val) == true) {
          $(this.closest('.loc')).show();
          }else {
            $(this.closest('.loc')).hide();
          }
      });
  });
