window.onload = function () {

    getRandomSuperHero();
    const hero_btn = document.getElementById("hero_btn");
    hero_btn.addEventListener('click', getRandomSuperHero);

}

function getRandomSuperHero() {
    let randomNumber = Math.floor(Math.random() * 731) + 1;

    fetch(`https://www.superheroapi.com/api.php/3755224024532374/${randomNumber}`)
        .then(resp => resp.json())
        .catch(error => {
            console.log(error.response);
        })
        .then(data => {
            super_hero.innerHTML = `<img src="${data.image.url}" alt="${data.name}"/>`;
            super_hero_name.innerHTML = `${data.name}`;
            getPowerStats(data);
            getBiography(data);
        })
};

function getPowerStats(data) {
    powerstats.innerHTML = "";
    for (let prop in data.powerstats) {
        powerstats.innerHTML += `<p>${prop} ${data.powerstats[prop]}</p>`
    }
}
function getBiography(data) {
    biography.innerHTML = "";
    let names = ["Full Name:", "Alter egos:", "Aliases:", "Place of Birth:", "First Appearance:", "Publisher:","Alignment:"]
    let i = 0;
    for (let prop in data.biography) {
        biography.innerHTML += `<p>${names[i]}  ${data.biography[prop]}</p>`;
        i++;
    }
}