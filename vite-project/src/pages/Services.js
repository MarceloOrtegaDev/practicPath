export function Services() {
    const $service = document.createElement("div")
    $service.classList.add("flex", "justify-center", "items-center", "h-screen", "bg-gradient-to-b","to-purple-900", "from-gray-900")
    
    const $title = document.createElement("h1")
    $title.textContent = "Welcome to Vite"
    $service.appendChild($title)

    return $service
}