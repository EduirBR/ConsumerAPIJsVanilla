const Fun1 = async () => {
  try {
    const reply = await fetch("http://localhost:8000/users/");
    if (reply.status == 200) {
      let innerthml = "";
      const datos = await reply.json();

      for (let dato of datos) {
        innerthml += `<tr>
                        <td>${dato.id}</td>
                        <td>${dato.name}</td>
                        <td>${dato.last_name}</td>
                        <td>${dato.country}</td>
                        <td>${dato.biomes}</td>
                        <td>${dato.companies}</td>
                        <td>${dato.traveling_frequency}</td>
                            </tr>`;
      }
      document.getElementById("results").innerHTML = `
      <table border="1" align="center">
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>last name</th>
            <th>Country</th>
            <th>Likes</th>
            <th>travels With</th>
            <th>how often</th>
          </tr>
          ${innerthml}
        </tbody> 
        </table><br>`;
    }
    return reply;
  } catch (error) {
    document.getElementById("results").innerHTML = `
    <h1> Error connecting with API<h1/>`;
    console.log(error);
  }
};

let info = Fun1();
