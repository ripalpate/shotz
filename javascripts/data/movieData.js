import {movieBuilder} from "../components/movieComponent.js";

const displayMovie = () =>{
$.get('../db/movie.json')
    .done((data)=>{
        movieBuilder(data.movie);
    })
    .fail((error)=>{
        console.log(error);
    });
}

export{displayMovie};