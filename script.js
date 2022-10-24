function getInput() {
  const input = document.getElementById("number_choice").value;
  if (input < 1 || input > 905 || isNaN(input)) {
    document.getElementById("error").innerHTML = "Please respect the syntax";
  } else {
    document.getElementById("error").innerHTML = "";

    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((reponseHTTP) => reponseHTTP.json())
      .then((data) => {
        document.title = data.species.name.toUpperCase();
        document.getElementById("card__name").innerHTML =
          data.species.name.toUpperCase();
        document.getElementById("card__image").src = data.sprites.front_default;
        document.getElementById("card").className =
          "card card--" + data.types[0].type.name;
        if (data.types.hasOwnProperty("1") === true) {
          document.getElementById("typeCard").innerHTML =
            data.types[0].type.name + " - " + data.types[1].type.name;
        } else {
          document.getElementById("typeCard").innerHTML =
            data.types[0].type.name;
        }
        document.getElementById("hp").innerHTML =
          data.stats[0].stat.name.toUpperCase();
        document.getElementById("hpValue").innerHTML = data.stats[0].base_stat;
        document.getElementById("attack").innerHTML =
          data.stats[1].stat.name.toUpperCase();
        document.getElementById("attackValue").innerHTML =
          data.stats[1].base_stat;
        document.getElementById("defense").innerHTML =
          data.stats[2].stat.name.toUpperCase();
        document.getElementById("defenseValue").innerHTML =
          data.stats[2].base_stat;
        document.getElementById("specialAttack").innerHTML =
          data.stats[3].stat.name.toUpperCase();
        document.getElementById("specialAttackValue").innerHTML =
          data.stats[3].base_stat;
        document.getElementById("specialDefense").innerHTML =
          data.stats[4].stat.name.toUpperCase();
        document.getElementById("specialDefenseValue").innerHTML =
          data.stats[4].base_stat;
        document.getElementById("speed").innerHTML =
          data.stats[5].stat.name.toUpperCase();
        document.getElementById("speedValue").innerHTML =
          data.stats[5].base_stat;
        document.getElementById("ability").innerHTML =
          data.abilities[0].ability.name.toUpperCase();
        if (data.abilities.hasOwnProperty("2") === true) {
          document.getElementById("hiddenAbility").innerHTML =
            data.abilities[2].ability.name.toUpperCase();
        } else {
          document.getElementById("hiddenAbility").innerHTML =
            data.abilities[1].ability.name.toUpperCase();
        }
        console.log(data);
      });
  }
}

getInput();


