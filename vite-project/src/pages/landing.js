export function LandingPage() {
    const $landingPage = document.createElement("div")
    $landingPage.classList.add("flex", "justify-center", "items-center", "h-screen", "bg-gradient-to-b","to-purple-900", "from-gray-900")
    const $title = document.createElement("h1")
    $title.textContent = "Welcome to Vite"
    $landingPage.appendChild($title)

    const $contenido = document.createElement("div")
    
    $landingPage.appendChild($contenido)

    return $landingPage
}