const searchBar = ()=>{
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
}

const buttonElem = ()=>{
$(".time").on('click', (e)=>{
    const element= $(event.target).text().toLowerCase();
    $(".shoot-time").each(function(){
          if($(this).text().toLowerCase().includes(element) == true) {
          $(this.closest('.loc')).show();
          }else {
            $(this.closest('.loc')).hide();
          }
      });
    })
}

$("#all").on('click', (e)=>{
    $('.loc').show();
})

export{searchBar, buttonElem};