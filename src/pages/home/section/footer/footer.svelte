<script lang="ts">
  import './footer.css';
  import { assetUrl } from '../../../../assets';
  export let pageAttributes: Record<string, string> = {};
  export let pageLinks: string[] = [];
  function configureRoot(node: HTMLElement, config: { attributes: Record<string, string>; links: string[] }) {
    const update = (value: typeof config) => {
      Object.entries(value.attributes).forEach(([name, content]) => node.setAttribute(name, content));
      node.querySelectorAll('a').forEach((link, index) => {
        if (value.links[index] !== undefined) link.setAttribute('href', value.links[index]);
      });
    };
    update(config);
    return { update };
  }
</script>
<footer use:configureRoot={{ attributes: pageAttributes, links: pageLinks }} class="sitio-footer" id="pie-de-pagina">
  <div class="contenedor-footer">
    <!-- Columna única central -->
    <div class="footer-col-center">
      <h3 class="footer-brand">Paneles Solares</h3>
      <p class="footer-desc">Diseño y desarrollo web moderno, accesible y enfocado en la experiencia del usuario.</p>
      <ul class="footer-links-inline">
          <li><a href="#heroe" class="footer-link">Inicio</a></li>
          <li><a href="#sobre-nosotros" class="footer-link">Sobre Nosotros</a></li>
          <li><a href="#catalogo" class="footer-link">Catálogo</a></li>
          <li><a href="#contacto" class="footer-link">Contacto</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="contenedor-footer">
      <p class="footer-copyright">© 2026 Paneles-solares-zip</p>
    </div>
  </div>
</footer>