

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
                    
                    const x=locationsData.find(location=>location.id===movieLocation);
                    locationSubset.push(x);
                                       
                });
                resolve(locationSubset);
            })
            .fail((error)=>{
                reject(error);
            })
    })
}
// loadLocations(movieLocations);
export {displayLocations, loadLocations};