import {movieBuilder} from "../components/movieComponent.js";
$.get('../db/movie.json')
    .done((data)=>{
        movieBuilder(data.movie);
    })
    .fail((error)=>{
        console.log(error);
    });
