export default getPictures;
import axios from 'axios';  


async function getPictures(tag, page, per_page) {

  const API_URL = `https://pixabay.com/api`
  const API_KEY = `47508443-dec4cffb8f44668b6640702d9`

  return await axios.get(`${API_URL}/?q=${tag}&image_type=photo&orientation=horizontal&safesearch=true&key=${API_KEY}`, {
    params: {
      page,
      per_page,
    }

   });
      
}