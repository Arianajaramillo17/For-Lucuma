
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = 'live_XM09GpBXhw3vmRE2dT9uGKhQ5EgJZMPNu7hfKTuRIKjEY5pOs1G0N8xvfOJx8Vq3';
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   

   data = data.filter(img=> img.image?.url!=null)
   
  
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
  document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}