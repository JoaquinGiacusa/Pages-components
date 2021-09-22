export function initThankYou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp></header-comp>
  <div style="padding:30px; height: 70vh;">
  <custom-text variant="title">Gracias</custom-text>
  <div style="margin: 40px 0px;">
      <custom-text variant="sub-title">Toda la información que nos brindaste es muy importante</custom-text>
    </div>
    <custom-button class="buttonBack" button-variant="button-blue">De nada</custom-button>
  </div>
  <footer-comp></footer-comp>`;

  div.querySelector(".buttonBack").addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
