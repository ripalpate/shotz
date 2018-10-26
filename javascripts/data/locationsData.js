

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

const loadLocations = (movieLocations) => {
    return new Promise((resolve, reject)=>{
        $.get('../db/locations.json')
            .done((data)=>{
                let locationsData = data.locations;
                let locationSubset = [];
                movieLocations.forEach(function(movieLocation) {
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
export {displayLocations, loadLocations};