const url = 'https://api.thecatapi.com/v1/images/search';

let btn = document.querySelector('.btn')
let container = document.querySelector('.container')

btn.addEventListener('click' , ()=>{
    getImage()
})

function getImage() {
    fetch(url)
    .then(r => r.json())
    .then(e => {
        console.log(e[0].url);
        container.innerHTML =   `<div class="cats">
                                      <img src="${e[0].url}" alt="Random Cat" class="random_cats">
                                    </div>`;
    })
    .catch(error => console.log(error))
}

// document.addEventListener('DOMContentLoaded', () => {
//     const catContainer = document.querySelector('.container');
//     const getCatButton = document.querySelector('.btn');
  
//     getCatButton.addEventListener('click', () => {
//       // Fetch random cat image from the API
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to fetch cat image.');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Extract the image URL from the response
//           const imageUrl = data[0].url;
  
//           // Display the cat image in the container
//           catContainer.innerHTML = `<div class="cats">
//                                       <img src="${imageUrl}" alt="Random Cat" class="random_cats">
//                                     </div>`;
//         })
//         .catch(error => {
//           console.error('Error:', error.message);
//         });
//     });
//   });
  