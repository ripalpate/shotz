import {displayMovies, locationsArrayForMovies} from '../data/movieData.js';
// import {newMovies} from '../data/movieData.js';
import {loadLocations} from '../data/locationsData.js';
import{locationsBuilder} from '../components/locationComponent.js';


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

const bindEvents = ()=>{
    $('#movie').on('click', '.movie', (e)=> {
        const clickedMovie = $(e.target).closest('.movie').attr('id');
        loadClickedMovie(clickedMovie);
        loadLocationsforMovie(clickedMovie);
    })
}


const initialMovieView = () => {
    displayMovies().then((movies)=>{
        movieBuilder(movies);
        bindEvents();
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
        });
}

const loadLocationsforMovie = (movieID) => {
    
    locationsArrayForMovies(movieID)

        .then((movieLocations)=>{
           return loadLocations(movieLocations)
           

            .then((locationSubset)=>{
                $("#locations").empty();
                return locationsBuilder(locationSubset);

            //     displayMovies()

            //     .then((movies)=>{
            //         $("#movie").empty();
            //         const newClickedMovie = movies.filter(movie=>movie.id===movieID);
            //         movieBuilder(newClickedMovie);
                
            // });

        });


    })
}
export {movieBuilder, initialMovieView};
