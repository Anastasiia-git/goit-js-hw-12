import { createMarkup } from "./js/render-functions";

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

        createMarkup(currentSearch, page);
       }
       e.target.reset()
       gallery.innerHTML = ''
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
