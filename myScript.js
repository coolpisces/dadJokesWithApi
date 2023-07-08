const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;
const apiKey = 'b0iaf+IZf0Ado6gpUW5FNw==Y8bhcbQA9iDnawM1';
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey }
}

async function getJoke() {
    try {
        joke.textContent = 'Updating...';
        btn.textContent = 'Looding...';
        btn.disabled = true;
        const response = await fetch(url, options);
        const data = await response.json();
        joke.textContent = data[0].joke;

        btn.textContent = 'Tell me a Joke'
        btn.disabled = false;
        console.log(data)
    } catch {
        joke.textContent = 'Try again later!';
        btn.textContent = 'Tell me a Joke'
        btn.disabled = false;
    }


}


btn.addEventListener('click', getJoke);