export function initTextComp() {
  class TextComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      //obtiene la clase "variant" del custom element declarado, (title o body), para dsp usarlo
      const variant = this.getAttribute("variant") || "body";

      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      style.innerHTML = `
        .title{
            font-size: 52px;
            font-weight: bold;
      }

      .body{
        font-size: 18px;
  }

    .sub-title{
      font-size: 22px;
      font-weight: bold;
    }
      `;

      div.className = variant;

      div.textContent = this.textContent;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("custom-text", TextComp);
}
