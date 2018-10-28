// promise to set array of movies object
const displayMovies = () =>{
    return new Promise ((resolve,reject)=>{
        $.get('../db/movie.json')
            .done((data)=>{
                // data returns the whole json file
                // returns Array of movies object
                resolve(data.movies); 
            })
            .fail((error)=>{
                reject(error);
            })
    })
}

// function to grab locations array from movie object.
const locationsArrayForMovies = (movieID) => {
    return new Promise((resolve, reject)=>{
        $.get('../db/movie.json')
          .done((data)=>{
            let movieData = data.movies;
                for (let i = 0; i < movieData.length; i++) {
                    if(movieData[i].id===movieID){
                      let movieLocations = movieData[i].locations;
                        resolve(movieLocations);
                    } 
                }
        }).fail((error)=>{
            reject(error);
        })
    })
}

export{displayMovies, locationsArrayForMovies};

