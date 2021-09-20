function handleRoute(route) {
  const routes = [
    {
      path: /\/div1/,
      component: "hola",
    },
    {
      path: /\/inbox\/./,
      component: null,
    },
    {
      path: /\/sent/,
      component: null,
    },
  ];
  for (const r of routes) {
    if (r.path.test(route)) {
      console.log(r.component);
    }
  }
}

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

function findAndProccessLinks() {
  const div1 = document.querySelector(".div-1");
  div1.addEventListener("click", () => {
    goTo("/div1");
  });
}
/* findAndProccessLinks(); */

export function initRouter(container: Element) {
  handleRoute(location.pathname);
}
