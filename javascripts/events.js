import {loadClickedMovie, loadLocationsforMovie} from '../javascripts/components/movieComponent.js';
import { initialMovieView} from '../javascripts/components/movieComponent.js';
import {initialLocationView} from '../javascripts/components/locationComponent.js';
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

const bindEvents = ()=>{
    $('#movie').on('click', '.movie', (e)=> {
        const clickedMovie = $(e.target).closest('.movie').attr('id');
        $('.back-button').show();
        backButtonEvent();
        loadClickedMovie(clickedMovie);
        loadLocationsforMovie(clickedMovie);

    })
}

const backButtonEvent = () => {
    $('#back-button').click(()=>{
        $("#movie").empty();
        $(".nav-buttons").show();
        $("#locations").empty();
        initialMovieView();
        initialLocationView();
        $('.back-button').hide();
    })
}

export{searchBar, buttonElem, bindEvents};