import {displayMovies, locationsArrayForMovies} from '../data/movieData.js';
import {loadLocations} from '../data/locationsData.js';
import{locationsBuilder} from '../components/locationComponent.js';
import { bindEvents } from '../events.js';


const movieBuilder = (arrayOfMovies)=>{
    let domString = '';
    arrayOfMovies.forEach((movie) => {   
        domString += `<div id='${movie.id}' class="movie card bg-light mb-3 w-75">
                        <div class="card-header text-center movie-heading">${movie.name}</div>
                        <div class="card-body">
                            <p class="card-text"><strong>Summary:</strong> ${movie.description}</p>
                            <h6 class="card-title"><strong>Genre:</strong> ${movie.genre}</h6>
                            <h6 class="card-title"><strong>Release Date:</strong> ${movie.releaseDate}</h6>
                        </div>
                    </div>`;
                });
    $('#movie').append(domString);
}


const initialMovieView = () => {
    displayMovies().then((movies)=>{
        movieBuilder(movies);
        // bindEvents();
    }).catch((error)=>{
        console.error(error);
    });
}

const loadClickedMovie = (movieID) => {
    $(".nav-buttons").hide();
    displayMovies().then((movies)=>{
        $("#movie").empty();
        const newClickedMovie = movies.filter(movie=>movie.id===movieID);
        movieBuilder(newClickedMovie);      
        }).catch((error)=>{
            console.error(error);
        });
}

const loadLocationsforMovie = (movieID) => {
    locationsArrayForMovies(movieID)
        .then((movieLocations)=>{
           return loadLocations(movieLocations)
            .then((locationSubset)=>{
                $("#locations").empty();
                return locationsBuilder(locationSubset);
        }).catch((error)=>{
            console.error(error);
        });
    })
}
export {movieBuilder, initialMovieView, loadClickedMovie, loadLocationsforMovie};
