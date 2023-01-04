function language(form) {
  console.log(form);
  if (form === "english") {
    document.getElementById("home").innerHTML = `<h1>Welcome </h1>
            <p>&emsp;You are in a space created as a sample front for Testing
            This API that consists of saving people, their country, where they like to travel
            If you travel accompanied and how often you travel. <br>
            I am a Backend Developer so on this site I highlight more
            the <b>HTML</b> and the <b>JavaScript</b>, the back-end is done with <b>Python-Django</b>. <br>
            <b>Simple, but worth to the test.</b>
    `;
  }
  if (form === "spanish") {
    document.getElementById("home").innerHTML = `<h1>Bienvenid@</h1>
    <p>&emsp;Estas en un espacio creado como front de muestra para Probar
    esta API que consiste en guardar personas, su pais, a donde le gusta viajar
    si viaja acompañado y con que frecuencia viaja. <br>
    Soy Desarrollador Backend asi que en este sitio descata mas
    el <b>HTML</b> y el <b>JavaScript</b>, el back-end esta hecho con <b>Python-Django</b>. <br>
    <b>Sencillo, pero cumple para probar.</b>
    `;
  }
}
