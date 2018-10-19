
const locationsBuilder = (arrayOfLocations)=>{
    let domString = '';
    arrayOfLocations.forEach((location) => {   
        domString += `<div class="card p-2 m-3" style="width: 18rem;">
                        <img class="card-img-top" src="${location.locationImage}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${location.name}</h5>
                            <p class="card-text">Address: ${location.locationAddress}</p>
                            <h6>Shoot Time: ${location.shootTime}</h6>
                        </div>
                    </div>`;
                });
    $('#locations').append(domString);
}

export {locationsBuilder};