import { searchBar, buttonElem } from "./events.js";
import { initialMovieView } from "./components/movieComponent.js";
import { initialLocationView } from "./components/locationComponent.js";

const initializeApp = ()=>{
    initialMovieView();
    initialLocationView();
     searchBar();
     buttonElem();
}
initializeApp();