import getPictures from "./js/pixabay-api";
import createMurkup from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", toSabmit);

function toSabmit(evt) {
    evt.preventDefault();
    
    const { picture } = evt.target.elements;
    const value = picture.value.trim();
     gallery.innerHTML = ""; 
    if(!value || value === ""){
        { iziToast.show({
      title:":(",         
      message: "Please add request!",
      position: "topRight",
      color: "red"
            });
            gallery.innerHTML = ":(";
            return
              
            }
    }
   
loader.classList.remove("hidden");
    getPictures(value)
            .then((data) => {
            if (!data.hits.length) { iziToast.show({
      title:"X",         
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
      color: "red"
            });
            }
            else {

                gallery.innerHTML = createMurkup(data.hits);
                lightbox.refresh(); 
                }           
            
         })
        .catch((error) => {
            iziToast.show({
                title: "X",
                message: `${error.message}`,
                position: "topRight",
                color: "red"
            })
        })
        .finally(() => {
            picture.value = "" 
            loader.classList.add("hidden");
            
        })
}