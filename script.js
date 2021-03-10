window.onload = function () {

    getRandomSuperHero();

    const hero_btn = document.getElementById("hero_btn");
    const search_hero = document.getElementById("search_hero");
    hero_btn.addEventListener('click', getRandomSuperHero);
    search_hero.addEventListener('click', getSearchedHero);

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
            getAppearance(data);
            getWork(data);
        })
};

function getSearchedHero() {
    let value = document.getElementById("input_hero").value;

    fetch(`https://www.superheroapi.com/api.php/3755224024532374/search/${value}`)
        .then(resp => resp.json())
        .catch(error => {
            console.log(error.response);
        })
        .then(data => {
            console.log(data);
            super_hero.innerHTML = `<img src="${data.results[0].image.url}" alt="${data.results[0].name}"/>`;
            super_hero_name.innerHTML = `${data.results[0].name}`;
    
        })
    console.log(value);
};

function getPowerStats(data) {
    powerstats.innerHTML = "";
    let properties = ["Intelligence:", "Strength:", "Speed:", "Durability:", "Power:", "Combat:"];
    let i = 0;
    for (let prop in data.powerstats) {
        if (data.powerstats[prop] === "null") {
            powerstats.innerHTML += `<p><span class="holders">${properties[i]}</span> No information found.</p>`;
        } else {
            powerstats.innerHTML += `<p><span class="holders">${properties[i]}</span> ${data.powerstats[prop]}</p>`;
        }

        i++;
    }
}

function getBiography(data) {
    biography.innerHTML = "";
    let properties = ["Full Name:", "Alter egos:", "Aliases:", "Place of Birth:", "First Appearance:", "Publisher:", "Alignment:"];
    let i = 0;
    for (let prop in data.biography) {
        if (data.biography[prop] === "null" || data.biography[prop] === "-") {
            biography.innerHTML += `<p><span class="holders">${properties[i]}</span> No information found.</p>`;
        } else {
            biography.innerHTML += `<p><span class="holders">${properties[i]}</span>  ${data.biography[prop]}</p>`;
        }
        i++;
    }
}

function getAppearance(data) {
    appearance.innerHTML = "";
    let properties = ["Gender:", "Race:", "Height:", "Weight:", "Eye color:", "Hair color:"];
    let i = 0;
    for (let prop in data.appearance) {
        if (data.appearance[prop] === "null" || data.appearance[prop] === "-") {
            appearance.innerHTML += `<p><span class="holders">${properties[i]}</span> No information found.</p>`;
        } else {
            appearance.innerHTML += `<p><span class="holders">${properties[i]}</span> ${data.appearance[prop]}</p>`;
        }
        i++;
    }
}

function getWork(data) {
    work.innerHTML = "";
    let properties = ["Occupation:", "Base:"];
    let i = 0;
    for (let prop in data.work) {
        if (data.work[prop] === "null" || data.work[prop] === "-") {
            work.innerHTML += `<p><span class="holders">${properties[i]}</span> No information found.</p>`;
        } else {
            work.innerHTML += `<p><span class="holders">${properties[i]}</span> ${data.work[prop]}</p>`;
        }
        i++;
    }
}