export function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("flex", "justify-center", "items-center", "h-16", "py-4", "text-gray-200", "bg-gray-900");
    $footer.textContent = "*-* 2023 Todos los derechos reservados. Marcelo Ortega";

    return $footer;

}