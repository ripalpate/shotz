import {displayMovies, locationsArrayForMovies} from '../data/movieData.js';
// import {newMovies} from '../data/movieData.js';

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
        // console.log(clickedMovie);
        // z(clickedMovie);
        loadLocationsforMovie(clickedMovie);
    })
}



// const z=(movieID)=>{
//         for (let i = 0; i < newMovies.length; i++) {
//             if(newMovies[i].id===movieID){
//                 console.log(newMovies[i].locations);
//             }  
//                 }}

const initialMovieView = () => {
    displayMovies().then((movies)=>{
        movieBuilder(movies);
        bindEvents();
    }).catch((error)=>{
        console.error(error);
    });
}

const loadLocationsforMovie = (movieID) => {
    console.log('moviePage', movieID);
    locationsArrayForMovies(movieID)
}
export {movieBuilder, initialMovieView};
