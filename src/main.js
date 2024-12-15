import getPictures from "./js/pixabay-api";
import createMurkup from "./js/render-functions";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const litebox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});
const form = document.querySelector(".form");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".more-btn");
const per_page = 15;

let page = 1;
let totalPage = 1;
let value

form.addEventListener("submit", toSabmit);
loadBtn.addEventListener("click", onLoadMore)

function toSabmit(evt) {
    evt.preventDefault();
    
    const { picture } = evt.target.elements;
    value = picture.value.trim();
    
     list.innerHTML = ""; 
    if(!value || value === " "){
        { iziToast.show({
      title:":(",         
      message: "Please add request!",
      position: "center",
      color: "red"
            });
            }
    }

    page = 1
    
    loader.classList.remove("hidden");
    loadBtn.classList.replace("more-btn", "hidden");

    getPictures(value,page, per_page)
    
        .then(({ data: { hits, totalHits
        } }) => {
            
       totalPage = Math.ceil(totalHits / per_page);
            
            if (!hits.length) { iziToast.show({
      title:"X",         
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "center",
      color: "red"
            });                
                
            }
            else {
                list.innerHTML = createMurkup(hits);
                litebox.refresh(); 
                if (page >= totalPage ) {
               
                    loadBtn.classList.replace("more-btn", "hidden")
                } else{loadBtn.classList.replace("hidden", "more-btn");}

                }           
            
         })
        .catch((error) => {
            console.log(error.message)
            iziToast.show({
                title: "X",
                message: `${error.message}`,
                position: "center",
                color: "red"
            })
        })
        .finally(() => {
            picture.value = "" 
            loader.classList.add("hidden");           
        })
}

async function onLoadMore() {
    page += 1;
    
    loadBtn.disabled = true;
    loader.classList.add("hidden");

    try { 
        const { data: { hits, totalHits
        } } = await getPictures(value,page,per_page);
      
        list.insertAdjacentHTML("beforeend", createMurkup(hits));
        totalPage = Math.ceil(totalHits / per_page);
       
        if (page === totalPage) {
          
            loadBtn.classList.replace("more-btn", "hidden");
              iziToast.show({
      title:"X",         
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "center",
      color: "red"
            });  
        }

        const item = document.querySelector(".list-item");
        const itemHeight = item.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: itemHeight * 2,
            behavior: "smooth",
        })
        litebox.refresh()
    }

    catch (error) {
        iziToast.show({
      title:"X",         
      message: `${error.message}`,
      position: "center",
      color: "red"
            });  
     }

    finally {
        loadBtn.disabled = false;
          loader.classList.add("hidden");
    }
}