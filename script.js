window.onload = function () {
    
    const super_hero = document.getElementById("super_hero");
    const hero_btn = document.getElementById("hero_btn");

    hero_btn.addEventListener('click', getRandomSuperHero);
    
}

function getRandomSuperHero() {
    const url = "https://superheroapi.com/api/3755224024532374/"
    let randomNumber = Math.floor(Math.random()*30)+1;

    fetch(`https://www.superheroapi.com/api.php/3755224024532374/${randomNumber}/image`)
        .then(resp => resp.json())
        .catch(error => {
            console.log(error.response);
        })
        .then(data => {
            super_hero.innerHTML = `<img src="${data.url}" alt="${data.name}"/>`
        })
        console.log(randomNumber);
};