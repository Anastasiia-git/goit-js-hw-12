import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getAxios } from "./pixabay-api";

export const createMarkup = async (search, page) => {
    const gallery = document.querySelector(".gallery");

    try {
        
        const hits = await getAxios(search, page); 

        hits.forEach(hit => {      
            const markup = `
                <li class="gallery-item">
                    <a class="gallery-link" href="${hit.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${hit.webformatURL}"
                            alt="${hit.tags}"
                        />
                    </a>
                    <div class="gal-div">
                    <p class="like">Likes<spam>${hit.likes}</spam></p>
                    <p class="like">Views<spam>${hit.views}</spam></p>
                    <p class="like">Comments<spam>${hit.comments}</spam></p>
                    <p class="like">Downloads<spam>${hit.downloads}</spam></p>
                    </div>
                </li>
            `;
            gallery.insertAdjacentHTML('beforeend', markup);
        })

        let newGallery = new SimpleLightbox('.gallery a');
        newGallery.on('show.simplelightbox', function () {
            newGallery.options.captionsData = 'alt'
            newGallery.options.captionDelay = 2500;
        });
        newGallery.refresh()
    
    } catch (error) {
        console.error("Error in createMarkup:", error);
    }}