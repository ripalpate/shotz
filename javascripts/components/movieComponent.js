
const movieBuilder = (arrayOfMovie)=>{
    let domString = '';
    arrayOfMovie.forEach((movie) => {   
        domString += `<div class="card bg-light mb-3 w-75">
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

export {movieBuilder};