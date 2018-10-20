
const locationsBuilder = (arrayOfLocations)=>{
    let domString = '';
    arrayOfLocations.forEach((location) => {   
        domString += `<div id="loc" class="card loc p-2 m-3" style="width: 18rem;">
                        <img class="card-img-top" src="${location.locationImage}" alt="Card image cap" width="250px" height="250px">
                        <div class="card-body card-content">
                            <h5 class="card-title"><strong>${location.name}</strong></h5>
                            <p class="card-text"><strong>Address:</strong> ${location.locationAddress}</p>
                        </div>
                        <div class="card-body shoot-time">
                            <h6><strong>Shoot Time:</strong> ${location.shootTime}</h6>
                        </div>
                    </div>`;
                });
    $('#locations').append(domString);
}

export {locationsBuilder};