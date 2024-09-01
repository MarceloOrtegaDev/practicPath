export function Header() {

  //elementos
  const $header = document.createElement("header");
  const $nav = document.createElement("nav");
  const $contenedorLogo = document.createElement("div");
  const $contenedorNav = document.createElement("div");
  const $titulo = document.createElement("h1");
  const $logo = document.createElement("img");
  const $lista = document.createElement("ul");
  const $sesion = document.createElement("button")

  //estilos
  $header.classList.add("bg-gray-900", "h-26", "border", "border-b", "border-gray-700")
  $contenedorLogo.classList.add("flex", "items-center", "gap-4");
  $nav.classList.add("px-4", "flex", "p-3", "items-end");
  $titulo.classList.add(
    "font-bold",
    "text-xl",
    "text-pink-600"
  );
  $logo.classList.add("h-20", "rounded");
  $contenedorNav.classList.add("flex", "h-14", "w-2/3", "justify-center", "gap-8");
  $lista.classList.add("flex", "items-end", "w-2/3", "justify-evenly");
  $sesion.classList.add("mb-4", "ml-8", "text-1xl", "font-semibold", "p-2", "hover:bg-yellow-500", "rounded", "text-white", "hover:text-gray-800");

  //contenido
  $titulo.textContent = "ProyectoVite";
  $logo.src = "./src/img/logo.jpg";
  $logo.alt = "Logo del proyecto";
  $lista.innerHTML = `
    <li><a class="text-white text-1xl font-semibold hover:bg-gray-800 p-2 rounded hover:text-base" href="/">Landing</a></li>
    <li><a class="text-white text-1xl font-semibold hover:bg-gray-800 p-2 rounded hover:text-base" href="/about">About</a></li>
    <li><a class="text-white text-1xl font-semibold hover:bg-gray-800 p-2 rounded hover:text-base" href="/services">Services</a></li>
    `;
    $sesion.textContent = "Iniciar Sesión";

  //Appenchilds
  $contenedorLogo.appendChild($logo);
  $contenedorLogo.appendChild($titulo);
  $contenedorNav.appendChild($lista);

  $nav.appendChild($contenedorLogo);
  $nav.appendChild($contenedorNav);
  $nav.appendChild($sesion);

  $header.appendChild($nav);

  return $header;
}
