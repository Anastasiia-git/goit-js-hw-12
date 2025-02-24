import axios from "axios";

export const getAxios = async (search, page) => {

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

  return response

  } catch (error) {
    console.log(error);
  } 
}