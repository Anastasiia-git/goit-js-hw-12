export default getPictures;


function getPictures (tag) {
    const API_URL = `https://pixabay.com/api`
    const API_KEY = `47508443-dec4cffb8f44668b6640702d9`
    return fetch(`${API_URL}/?q=${tag}&image_type=photo&orientation=horizontal&safesearch=true&key=${API_KEY}`)
        .then((response) => {
       
        if (!response.ok) {
          throw new Error(response.statusText)
            }
            return response.json()
        })
         

}