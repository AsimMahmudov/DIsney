const cards = document.querySelector(".cards");
const paginationButtons = document.querySelectorAll(".pagination button");
const rection = document.querySelector(".flags");
const searchInput = document.querySelector(".header input");
fetch(" https://api.disneyapi.dev/character")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    data.data.map((el) => {
      const card = document.createElement("div");
      card.className = "card";
      const cardImg = document.createElement("img");
      const cardTitle = document.createElement("h3");
      cardImg.src = el.imageUrl;
      cardTitle.textContent = el.name;
      card.append(cardImg);
      card.append(cardTitle);
      cards.append(card);
    });
  });
let page = 1;

paginationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.className === "next") {
      page++;
    } else {
      page--;
    }
    ///////////////////////////////

    fetch(`https://api.disneyapi.dev/character?page=${page}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        cards.innerHTML = "";
        data.data.map((el) => {
          const card = document.createElement("div");
          card.className = "card";
          const cardImg = document.createElement("img");
          const cardTitle = document.createElement("h3");
          cardImg.src = el.imageUrl;
          cardTitle.textContent = el.name;
          card.append(cardImg);
          card.append(cardTitle);
          cards.append(card);
        });
        window.scroll(1, 1);
      });
  });
});

//////////////////////////////////////////////////////////////////////////////////

searchInput.addEventListener("keyup", function (e) {
  cards.innerHTML = "";
  const value = e.target.value;

  const filteredCountries = data.filter((el) => {
    if (el.cardTitle.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (el.cardTitle.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (el.cardTitle.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }
  });

  filteredCountries.map((el) => {
    const card = document.createElement("div");
    card.className = "card";
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("h3");
    cardImg.src = el.imageUrl;
    cardTitle.textContent = el.name;
    card.append(cardImg);
    card.append(cardTitle);
    cards.append(card);
  });
});
