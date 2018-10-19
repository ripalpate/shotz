import {movieBuilder} from "../components/movieComponent.js";
$.get('../db/movie.json')
    .done((data)=>{
        console.log(data);
        movieBuilder(data.movie);
    })
    .fail((error)=>{
        console.log(error);
    });
