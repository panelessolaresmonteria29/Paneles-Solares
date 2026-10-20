import './styles/fonts.css';
import App from './App.svelte';
import './styles/variables.css';
import './pages/catalogo/catalogo.css';
import './pages/home/section/sobrenosotros/sobrenosotros.css';
import './styles/app.css';
import './pages/home/section/catalogo/catalogo.css';
import './pages/home/section/contacto/contacto.css';
import './pages/detalle/detalle.css';
import './pages/home/section/footer/footer.css';
import './pages/home/section/heroe/heroe.css';
import './pages/home/section/navbar/navbar.css';
import './styles/texto.css';
import './styles/catalogo-inline.css';

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
