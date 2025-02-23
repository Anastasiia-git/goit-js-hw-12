import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loader = document.querySelector(".loader")
loader.classList.remove("loader")

const btnLoadMore = document.querySelector(".btnLoadMore")

export const getAxios = async (search, page) => {
  loader.classList.add("loader")
  btnLoadMore.classList.add("hidden")

  try {
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
          key: "47508443-dec4cffb8f44668b6640702d9",
          q: search,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          page: page,
          per_page: 40
      } 
  })

  const result = response.data.hits;
  const totalHits = response.data.totalHits;
  const perPage = response.config.params.per_page

     if(result.length === 0) {       
      iziToast.show({
          title: '❌',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          color: 'red',
          position: "topRight"
      })
      return [];
    }
    else {
      btnLoadMore.classList.remove("hidden");

      const totalPages = Math.ceil(totalHits / perPage);
      if (page >= totalPages) {
          btnLoadMore.classList.add("hidden");
          iziToast.info({
              title: '😢',
              message: `We're sorry, but you've reached the end of search results.`,
              position: "topRight"
          });
      }
      return result;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.remove("loader")
  }}