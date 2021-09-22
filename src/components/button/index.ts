export function initButtonComp() {
  customElements.define(
    "custom-button",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const buttonVariant = this.getAttribute("button-variant");
        var shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        const style = document.createElement("style");
        style.innerHTML = `
         .button-blue{
           padding: 15px;
           background-color: #9CBBE9;
           width: 100%;
           font-family: 'Roboto', sans-serif;
           font-size: 22px;
           border: white;
           border-radius: 5px;
           margin-bottom: 20px;
         }

         .button-white{
          background-color: white;
          padding: 15px;
          width: 100%;
          font-family: 'Roboto', sans-serif;
          font-size: 22px;
          border: black 3px solid;
          border-radius: 5px;
          margin-bottom: 40px;
         }
        `;

        button.textContent = this.textContent;
        shadow.appendChild(style);
        button.className = buttonVariant;
        shadow.appendChild(button);
      }
    }
  );
}
