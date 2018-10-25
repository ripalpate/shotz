import {movieBuilder} from "../components/movieComponent.js";

let newMovies = [];

const displayMovies = () =>{
    return new Promise ((resolve,reject)=>{
        $.get('../db/movie.json')
            .done((data)=>{
                // data returns the whole json file
                // returns Array of movies object
                newMovies= data.movies
                resolve(data.movies);
                
            })
            .fail((error)=>{
                reject(error);
            })
    })
}



// const loadLocationsForMovies = () => {
//     return new Promise((resolve, reject)=>{
//         $.get((data)=>{
//             let y = data.movies;
//             let x = (movieID)=>{
//                 for (let index = 0; index < y.length; index++) {
//                     if(y[index].id===movieID){
//                         console.log(y[index]);
//                         resolve(y[index]);
//                     }
                    
//                 }

//             }

//         }).fail((error)=>{
//             reject(error);
//         })
//     })
// }

// $.get('../db/movie.json')
//     .done((data)=>{
//         movieBuilder(data.movies);
//     })
//     .fail((error)=>{
//         console.log(error);
//     });
// }

export{displayMovies, newMovies};


// return new Promise((resolve, reject)=>{
//     $.get('../db/boards.json')
//       .done((data)=>{
//         // returns array of boards object
//         // console.log(data.boards);
//           resolve(data.boards);
//       })
//       .fail((error)=>{
//           reject(error);
//       })
// });
