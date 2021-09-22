export function initHeaderComp() {
  class HeaderComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      style.textContent = `
      .header {
        background-color: #ff8282;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      `;

      div.innerHTML = `
        <h3>COMPONENTE HEADER</h3>`;

      shadow.appendChild(style);
      shadow.appendChild(div);
      div.classList.add("header");
    }
  }
  customElements.define("header-comp", HeaderComp);
}
