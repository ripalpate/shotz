import {displayMovies, locationsArrayForMovies} from '../data/movieData.js';
import {loadLocations} from '../data/locationsData.js';
import{locationsBuilder} from '../components/locationComponent.js';

// function to dynamically display movies
const movieBuilder = (arrayOfMovies)=>{
    let domString = '';
    arrayOfMovies.forEach((movie) => {   
        domString += `<div id='${movie.id}' class="movie card bg-light ml-2 mr-2 mb-3 w-75">
                        <div class="card-header text-center movie-heading">${movie.name}</div>
                        <div class="card-body">
                            <p class="card-text"><strong>Summary:</strong> ${movie.description}</p>
                            <h6 class="card-title"><strong>Genre:</strong> ${movie.genre}</h6>
                            <h6 class="card-title"><strong>Release Date:</strong> ${movie.releaseDate}</h6>
                            <p class="card-text"><strong>Shoots Locations: </strong>${movie.locations.length}</p>
                        </div>
                    </div>`;
                });
    $('#movie').append(domString);
}

// function to display all 4 movies on initial page load
const initialMovieView = () => {
    displayMovies().then((movies)=>{
        movieBuilder(movies);
    }).catch((error)=>{
        console.error(error);
    });
}

// function to display clicked movie on click
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

// function to load locations associated with the clicked movie
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
