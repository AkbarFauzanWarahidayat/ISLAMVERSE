class NavBar extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.innerHTML = `
            <style>
                html {
                    scroll-behavior: smooth;
                }
                
                body {
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
                
                * {
                    margin: 0;
                    padding: 0;
                }
                
                header {
                    display: inline;
                }

                nav {
                    position: sticky;
                    top: 0;
                    z-index: 9999;
                    background-color: white;
                    transition: backdrop-filter 0.3s ease, background-color 0.3s ease; /* Smooth transition */
                }

                .container-nav {
                    padding: 10px;
                    margin-left: 20px;
                }

                .logo-nav {
                    display: flex;
                    align-items: center;
                }

                .logo-nav img {
                    max-width: 50px;
                    height: auto;
                }

                .logo-nav h1 {
                    display: inline;
                    font-family: "Cinzel Decorative", serif;
                    margin-left: 5px;
                }
            </style>
            
            <nav class="container-nav">
                <div class="logo-nav">
                    <img src="../image/ISLAMVERSE (2).png" alt="Logo ISLAMVERSE">
                    <h1>ISLAMVERSE</h1>
                </div>
            </nav>
        `;

        const containerNav = this._shadowRoot.querySelector('nav');

        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                containerNav.style.backgroundColor = '#white';
            } else {
                containerNav.style.backgroundColor = 'rgba(255, 255, 255, 0.911)';
            }
        });
    }
}

customElements.define('nav-bar', NavBar);
