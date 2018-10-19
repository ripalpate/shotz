import { locationsBuilder } from "../components/locationComponent.js";

$.get('../db/locations.json')
 .done((data)=>{
     locationsBuilder(data.locations)
 })
 .fail((error)=>{
     console.error(error);
 });