import { locationsBuilder } from "../components/locationComponent.js";

const displayLocations = ()=>{
$.get('../db/locations.json')
 .done((data)=>{
     locationsBuilder(data.locations)
 })
 .fail((error)=>{
     console.error(error);
 });
}

export {displayLocations};