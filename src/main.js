import { createMarkup } from "./js/render-functions";
import { getAxios } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector(".loader")
loader.classList.remove("loader")
const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form")
const btnLoadMore = document.querySelector(".btnLoadMore")

let lightbox = new SimpleLightbox('.gallery a');
let page = 1;
let currentSearch = "";

async function searchImages(search, page) {
  loader.classList.add("loader");
  try {
    const response = await getAxios(search, page);
    const result = response.data.hits;
    const totalHits = response.data.totalHits;
    const perPage = response.config.params.per_page    
    
    if (result.length === 0) {
      iziToast.show({
        title: '❌',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        color: 'red',
        position: "topRight"
      });
      btnLoadMore.classList.add("hidden");
    } 
    else {
      btnLoadMore.classList.remove("hidden");
      const totalPages = Math.ceil(totalHits / perPage);
        if (page >= totalPages) {
          btnLoadMore.classList.add("hidden");
          iziToast.info({
            title: '😢',
            message: `We're sorry, but you've reathe end of search results.`,
            position: "topRight"
          });
        } else {
          btnLoadMore.classList.remove("hidden");
        }
      }
      
      await createMarkup(search, page);
      lightbox.refresh();

  } catch (error) {
      console.error("Error in searchImages:", error);
  } finally {
      loader.classList.remove("loader");
  }
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const search = e.target.elements.picture.value.trim();

  if (!search) {
      return;
  } else {
    
    currentSearch = search;
    page = 1;
    
    gallery.innerHTML = ''
    
    const searchSuccessful = await searchImages(currentSearch, page);

    if (searchSuccessful) {
    e.target.reset();
  }
}
});


btnLoadMore.addEventListener("click", async (e) => {
  e.preventDefault();
  btnLoadMore.disabled = true;
  page++;

  const searchSuccessful = await searchImages(currentSearch, page);

  searchSuccessful

  const cart = document.querySelector(".gallery-item")
  const cartHeight = cart.getBoundingClientRect().height    
  
  window.scrollBy({
  left: 0,
  top: cartHeight * 2 ,
  behavior: "smooth"
})

  btnLoadMore.disabled = false
});