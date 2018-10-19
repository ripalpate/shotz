$.get('../db/locations.json')
 .done((data)=>{
     console.log(data);
 })
 .fail((error)=>{
     console.error(error);
 });