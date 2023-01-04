class headerplus extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header id="main-header">
    <link rel="stylesheet" href="../reuse/reuse.css">
    <a id="logo-header" href="https://github.com/EduirBR">
    <span class="site-name">Eduir Brazon "Ruingin"</span>
    <span class="site-desc">Api Travels Likes</span>
</a> <!-- / #logo-header -->

<nav>
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="../get/get.html">GET</a></li>
        <li><a href="../post/post.html">POST</a></li>
        <li><a href="../reuse/contact.html">Contacto</a></li>
    </ul>
</nav>
</header>`;
  }
}
window.customElements.define("header-plus", headerplus);

class foot extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<footer id="main-footer">
    <p>&copy; 2022 <a href="https://franciscoamk.com/como-crear-una-fija-estatica-con-html-y-css/">Aqui tomé el
            css</a></p>
</footer>
    `;
  }
}
window.customElements.define("c-foot", foot);
