const filterEl = document.getElementById("filter");
const cards = document.querySelectorAll("li");

//add input event for the filter element filterEl
filterEl.addEventListener("input", () => {
  // if the filter is not empty
  if (filterEl.value !== "") {
    //for each card of card
    for (let card of cards) {
      //get card heading
      let title = card.querySelector("h2"); //cria uma variavel card para cada um dos 4 cards, vai rodar a quantidade de cartões que tiver
      // transform to lower case
      title = title.textContent.toLowerCase(); //pega o h2 de cada card
      //transform filter text to lower case
      let filterText = filterEl.value.toLowerCase(); //transforma o texto do input em minusculo

      //if card title does not include the filter text
      if (!title.includes(filterText)) {
        //-hide the card element
        card.style.display = "none"; //se o está sendo digitado não corresponde a algum cartão, esconde
      } else {
        //else
        //-unhide the card element
        card.style.display = "block";
        //se o que está sendo digitado corresponde a algum cartão, mostra
      }
    }
  } else {
    //for each card of card unhide the card element
    for (let card of cards) {
      //mostra todos os cartões, caso o input esteja vazio
      card.style.display = "block";
    }
  }
});

//filter function
// function filterCards() {

// }
