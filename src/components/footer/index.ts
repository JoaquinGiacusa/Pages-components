export function initFooterComp() {
  class FooterComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      style.textContent = `
        .footer {
          background-color: #FFA0EA;
          width: 100%;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        `;

      div.innerHTML = `
          <h3>COMPONENTE FOOTER</h3>`;

      shadow.appendChild(style);
      shadow.appendChild(div);
      div.classList.add("footer");
    }
  }
  customElements.define("footer-comp", FooterComp);
}
