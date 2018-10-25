let newMovies = [];

const displayMovies = () =>{
    return new Promise ((resolve,reject)=>{
        $.get('../db/movie.json')
            .done((data)=>{
                // data returns the whole json file
                // returns Array of movies object
                // newMovies= data.movies;
                resolve(data.movies); 
            })
            .fail((error)=>{
                reject(error);
            })
    })
}



const locationsArrayForMovies = (movieID) => {
    return new Promise((resolve, reject)=>{
        $.get('../db/movie.json')
          .done((data)=>{
            let movieData = data.movies;
                for (let i = 0; i < movieData.length; i++) {
                    if(movieData[i].id===movieID){
                      let movieLocations = movieData[i].locations;
                        console.log(movieLocations);
                        resolve(movieLocations);
                    } 
                }
        }).fail((error)=>{
            reject(error);
        })
    })
}

export{displayMovies, locationsArrayForMovies};

