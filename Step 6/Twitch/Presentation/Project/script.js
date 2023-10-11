let cherectors = [];

const mainSection = document.querySelector(".main-section");

axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    console.log(response.data.results);

    cherectors = response.data.results;

    console.log(cherectors[0].name);

    cherectors.map((cherector) => {
        mainSection.innerHTML += `
        <div class="char">
            <img src="${cherector.image}">
            <a href="${cherector.url}"><h2>${cherector.name}</h2></a>
            <div>species: ${cherector.species}</div>
            <div class="char-gender ${
                cherector.gender === "Male" ? "char-male" : "char-female"
            }"></div>
        </div>
        `;
    });
});
