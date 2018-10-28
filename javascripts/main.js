import { searchBar, buttonElem, bindEvents, backButtonEvent } from "./events.js";
import { initialMovieView } from "./components/movieComponent.js";
import { initialLocationView } from "./components/locationComponent.js";

const initializeApp = ()=>{
    initialMovieView();
    bindEvents();
    initialLocationView();
    
    searchBar();
    buttonElem();
    backButtonEvent();
}
initializeApp();