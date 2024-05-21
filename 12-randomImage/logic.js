const baseURL = 'https://source.unsplash.com/all/300x300';

// this url gives an image. Use this and NO API calls
let container = document.querySelector('.content');

document.querySelector('button').addEventListener('click',()=>{
    let a = Math.floor(Math.random()*100)
    container.innerHTML = `<img src='${baseURL}?${a}'></img>`
})