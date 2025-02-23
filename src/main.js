import { createMarkup } from "./js/render-functions";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form")
const btnLoadMore = document.querySelector(".btnLoadMore")

 let page = 1;
 let currentSearch = "";

form.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        const search = e.target.elements.picture.value.trim()
        
       if (!search) {
        return
       } else {

        currentSearch = search;
        page = 1;

        gallery.innerHTML = ''

        await createMarkup(currentSearch, page);
        let lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();
       }
       
       e.target.reset()
    }
    catch (error) {
      console.log(error);
    }
  })

  btnLoadMore.addEventListener("click", async (e) => {
    try {
      e.preventDefault(); 
      btnLoadMore.disabled = true
      page++; 
      await createMarkup(currentSearch, page);

      let lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();

      const cart = document.querySelector(".gallery-item")
      const cartHeight = cart.getBoundingClientRect().height     

      window.scrollBy({
        left: 0,
        top: cartHeight * 2 ,
        behavior: "smooth"
      })

      btnLoadMore.disabled = false
    }
    catch (error) {
      console.log(error);
    }
  })
