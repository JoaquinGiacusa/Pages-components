export function initSelectField() {
  customElements.define(
    "select-field",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        var shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
            *{
            box-sizing: border-box;
          }
  
          .select-el{
            display: block;
            height: 55px;
            margin: 0 auto;
            width: 100%;
            border-radius: 4px;
            border: solid 3px;
            background-color: white;
            font-family: 'Roboto', sans-serif;
          }
          `;

        div.innerHTML = `
        <select class="select-el" name="select">
          <option value="value1" selected>Piedra</option>
          <option value="value2">Papel</option>
          <option value="value3">Tijera</option>
        </select>
        `;
        shadow.appendChild(style);
        shadow.appendChild(div);
      }
    }
  );
}
