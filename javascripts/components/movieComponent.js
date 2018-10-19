
const movieBuilder = (arrayOfMovie)=>{
    let domString = '';
    arrayOfMovie.forEach((movie) => {   
        domString += `<div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">${movie.name}</div>
                        <div class="card-body">
                            <p class="card-text">${movie.description}</p>
                            <h5 class="card-title">${movie.genre}</h5>
                            <h6 class="card-title">${movie.releaseDate}</h6>
                        </div>
                    </div>`;
                });
    $('#movie').append(domString);
}

export {movieBuilder};