import { initRouter } from "./router";
import { initHeaderComp } from "./components/header";
import { initTextField } from "./components/text-field";
import { initFooterComp } from "./components/footer";
import { initTextComp } from "./components/text";
import { initButtonComp } from "./components/button";
import { initSelectField } from "./components/select-fild";

(function () {
  const root = document.querySelector(".root");
  initHeaderComp();
  initTextComp();
  initButtonComp();
  initTextField();
  initSelectField();
  initFooterComp();
  initRouter(root);
})();
