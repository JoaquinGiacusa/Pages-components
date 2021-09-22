export function initWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  style.innerHTML = `.welcome-container{
    padding: 50px 30px 100px 30px;
    display: grid;
    gap: 25px;
  }
  
  .title-label{
    margin-top: 60px;
    margin-bottom: 20px;
  }`;
  div.innerHTML = `
  <header-comp></header-comp>

  <div class="welcome-container">
    <custom-text variant="title">Te damos la bienvenida a esta página</custom-text>
  
    <custom-text variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
  
    <custom-text variant="sub-title" class="title-label">Para continuar ingresá tu nombre</custom-text>
  
    <text-field label="Nombre" placeh="  Ingresá tu nombre"></text-field>
  
    <custom-button class="buttonStartEl" button-variant="button-blue">Comenzar</custom-button>
 </div>

  <footer-comp></footer-comp>
   `;
  const button = div.querySelector(".buttonStartEl");

  button.addEventListener("click", () => {
    params.goTo("/step-1");
  });

  div.appendChild(style);
  return div;
}
