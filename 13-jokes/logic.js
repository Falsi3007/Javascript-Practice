const url = 'https://api.chucknorris.io/jokes/random';

let getJoke = () => {

    fetch(url)
    .then(r => r.json())
    .then(e => {
        document.querySelector('#display-joke').textContent = e.value
    })
    .catch(e => console.log(e))
} 