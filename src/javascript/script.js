document.querySelector('#search').addEventListener('submit', (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').ariaValueMax;

    if (!cityName) {
        return alert('Você precisa digitar uma cidade...');
    }
})