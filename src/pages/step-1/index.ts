export function initStep1(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `
  .step-1__container{
    padding: 50px 30px 100px 30px;
    display: grid;
    gap: 45px
  }
  `;

  div.innerHTML = `
  <header-comp></header-comp>
  <div class="step-1__container">
    <custom-text variant="title">Necesitamos algunos datos más</custom-text>
    <text-field label="Email" placeh=""></text-field>
    <text-field label="Comida Favorita" placeh=""></text-field>
    <select-field></select-field>
    <custom-button button-variant="button-blue" class="button-continue">Continuar</custom-button>
    <custom-button button-variant="button-white" class="button-back">Volver</custom-button>
  </div>

  <footer-comp></footer-comp>
  `;
  div.appendChild(style);

  div.querySelector(".button-continue").addEventListener("click", function () {
    params.goTo("/thankyou");
  });

  div.querySelector(".button-back").addEventListener("click", function () {
    params.goTo("/welcome");
  });

  return div;
}
