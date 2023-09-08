import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'theme-demos';
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome ${title} 👋
          </h1>
        </div>

        <div id="middle-content">
          <div id="learning-materials" class="rounded shadow">
            <h2>Themes</h2>
            <a href="assets/Metronic_1/index.html" target="_blank" rel="noreferrer" class="list-item-link">
              <span>
              Metronic
              </span>
            </a>
            <a href="assets/aside/dashboard.html" target="_blank" rel="noreferrer" class="list-item-link">
              <span>
              Aside
              </span>
            </a>
            <a href="assets/oneUi/be_pages_dashboard.html" target="_blank" rel="noreferrer" class="list-item-link">
              <span>
              OneUi
              </span>
            </a>
            <a href="assets/ubold-default/index.html" target="_blank" rel="noreferrer" class="list-item-link">
              <span>
              UBold - default
              </span>
            </a>
            <a href="assets/ubold-material/index.html" target="_blank" rel="noreferrer" class="list-item-link">
              <span>
              UBold - material
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define('app-root', AppElement);
