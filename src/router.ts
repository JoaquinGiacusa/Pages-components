import { initWelcome } from "./pages/welcome";
import { initStep1 } from "./pages/step-1";
import { initThankYou } from "./pages/thankyou";

const routes = [
  {
    path: /\// || /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStep1,
  },
  {
    path: /\/thankyou/,
    component: initThankYou,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  handleRoute(location.pathname);

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
