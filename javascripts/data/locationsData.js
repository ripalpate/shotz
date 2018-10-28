// function to get locations array of object
const displayLocations = ()=>{
    return new Promise ((resolve,reject)=>{
        $.get('../db/locations.json')
            .done((data)=>{
                resolve(data.locations);
            })
         .fail((error)=>{
             reject(error);
         })
    })
}

// function to match locatation id with array of locations from movie Json file
const loadLocations = (movieLocations) => {
    return new Promise((resolve, reject)=>{
        $.get('../db/locations.json')
            .done((data)=>{
                let locationsData = data.locations;
                let locationSubset = [];
                movieLocations.forEach((movieLocation)=> {
                    // returns the object of location
                    const locationFilter=locationsData.find(location=>location.id===movieLocation);
                    locationSubset.push(locationFilter);                  
                });
                resolve(locationSubset);
            })
            .fail((error)=>{
                reject(error);
            })
    })
}

// function to display number of movies being shoot at each locations.
const moviesArrayForLocations = ()=>{
        $.get('../db/locations.json')
            .done((data)=>{
                let locationData = data.locations;
                for(let i = 0; i < locationData.length; i++) {
                   let moviesArray= locationData[i].movies;
                    return moviesArray;
                    }
        })
}



export {displayLocations, loadLocations,moviesArrayForLocations};