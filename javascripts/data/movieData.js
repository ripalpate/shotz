import {movieBuilder} from "../components/movieComponent.js";

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


// $.get('../db/movie.json')
//     .done((data)=>{
//         movieBuilder(data.movies);
//     })
//     .fail((error)=>{
//         console.log(error);
//     });
// }

export{displayMovies};


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
