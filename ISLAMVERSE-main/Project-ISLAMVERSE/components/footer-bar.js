class FooterBar extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this._shadowRoot.innerHTML = `
            <style>
                footer{
                    position: fixed;
                    z-index: 9999;
                    bottom: 0;
                    width: 100%;
                    height: auto;
                }
                
                .container-menu{
                    background: linear-gradient(#0A4D45 100%, #17B3A033 20%);
                    max-width: 100%;
                    height: 80px;
                    margin: 0;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }
                
                .logo-alquran img{
                    max-width: 50px;
                    height: auto;
                }
                
                .logo-zikir img{
                    max-width: 50px;
                    height: auto;
                }
                
                .logo-quiz img{
                    max-width: 50px;
                    height: auto;
                }
                
                .logo-artikel img{
                    max-width: 50px;
                    height: auto;
                }
                
                .logo-kalkulator-zakat img{
                    max-width: 50px;
                    height: auto;
                }
                
            </style>
            
            <footer>
                <div class="container-footer">
                    <div class="container-menu">
                        <div class="logo-alquran">
                            <a href="../index.html"><img src="../image/quran 3.png" alt=""></a>
                        </div>

                        <div class="logo-zikir">
                            <a href="../fitur-assets/zikir.html"><img src="../image/zikir 2.png" alt=""></a>
                        </div>

                        <div class="logo-quiz">
                            <a href="../fitur-assets/quiz.html"><img src="../image/kuis 3.png" alt=""></a>
                        </div>

                        <div class="logo-artikel">
                            <a href="../fitur-assets/article-template.html"><img src="../image/artikel 1.png" alt=""></a>
                        </div>

                        <div class="logo-kalkulator-zakat">
                            <a href="../fitur-assets/zakat.html"><img src="../image/kalkulator.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
