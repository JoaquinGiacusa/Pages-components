export function initTextField() {
  customElements.define(
    "text-field",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const label = this.getAttribute("label");
        const placeh = this.getAttribute("placeh");

        var shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
          *{
          box-sizing: border-box;
        }

          .label{
              font-size: 18px;
              display: block;
              
        }
  
          .input{
            display: block;
            height: 55px;
            margin: 0 auto;
            width: 100%;
            border-radius: 4px;
            border: solid 3px
        }
        `;

        div.innerHTML = `
      <label class="label">${label}</label>
      <input class="input" type="text" placeholder="${placeh}"/>
      `;
        shadow.appendChild(style);
        shadow.appendChild(div);
      }
    }
  );
}
