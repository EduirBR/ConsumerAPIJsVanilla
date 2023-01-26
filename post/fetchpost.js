var cont = 0;
const country = async () => {
  try {
    const countr = await fetch("http://localhost:8000/countries/HTML");
    if (countr.status == 200) {
      const Cresponse = await countr.json();
      var innHTML = "";

      for (item of Cresponse) {
        innHTML += `<option value="${item["uuid"]}">${item["name"]}</option>`;
      }
      document.getElementById("countryf").innerHTML = `
    <select id="country" name="country">
  ${innHTML}
</select>
    `;
    }
  } catch (error) {
    console.log(error);
    cont++;
  }
};
country();

const biome = async () => {
  try {
    const countr = await fetch("http://localhost:8000/biome/");
    if (countr.status == 200) {
      const Cresponse = await countr.json();
      var innHTML = "";

      for (item of Cresponse) {
        innHTML += `<option value="${item["name"]}">${item["name"]}</option>`;
      }
      document.getElementById("biome").innerHTML = `
                      <select name="biomes">
                        ${innHTML}
                      </select>`;
    }
  } catch (error) {
    console.log(error);
    cont++;
  }
};
biome();
if (cont > 0) {
  console.log(cont);
  document.getElementById("summit");
}
form = document.getElementById("form");
const fun2 = async () => {
  if (form.name.value == "" || form.lastname.value == "") {
    alert("El espacio no puede ir en blanco");
    console.log("entro");
    return;
  }

  let data = {
    name: form.name.value,
    last_name: form.lastname.value,
    country: form.country.value,
    biomes: form.biomes.value,
    companies: form.companies.value,
    traveling_frequency: form.traveling_frequency.value,
  };
  try {
    let response = await fetch("http://localhost:8000/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);
    if (response.ok) {
      alert("The Informacion has been saved succesfuly");
      form.reset();
    } else {
      alert("Hubo un error al guardar");
    }
  } catch (error) {
    alert("Hubo un error al guardar");
    console.log(error);
  }
};
