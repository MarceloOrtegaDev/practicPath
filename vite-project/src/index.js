import './style.css'
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { LandingPage } from './pages/landing.js';
import { About } from './pages/about.js';
import { Services } from './pages/Services.js';
const pathname = window.location.pathname;

const $app = document.querySelector("#app");

$app.appendChild(Header());

if (pathname === "/") $app.appendChild(LandingPage());
if (pathname === "/about") $app.appendChild(About());
if (pathname === "/services") $app.appendChild(Services());
$app.appendChild(Footer());