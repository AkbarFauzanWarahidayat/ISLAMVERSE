class NavBar extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <div class="container-nav">
                <div class="logo-nav">
                    <img src="../image/ISLAMVERSE (2).png" alt="Logo ISLAMVERSE">
                    <h1>ISLAMVERSE</h1>
                </div>
                <div class="profile-nav">
                    <a href="../fitur-assets/about-us.html" class="profile-anchor"><i class="fa-solid fa-user"></i></a>
                </div>
            </div>
        </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);
