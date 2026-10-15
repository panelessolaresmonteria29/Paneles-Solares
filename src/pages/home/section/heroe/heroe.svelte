<script lang="ts">
  import './heroe.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section class="fondo-principal seccion-heroe" id="heroe">
    <div class="contenedor-seccion contenedor-heroe">
     <div class="col-span-5 contenedor-texto">

        <span class="heroe-etiqueta">Energía solar para tu hogar</span>
        <h1>Paneles <span>Solares</span></h1>
        <p>
          Transforma la luz del sol en energía para tu hogar. Diseñamos e
          instalamos sistemas solares eficientes y duraderos para ayudarte
          a reducir tu consumo y dar el siguiente paso hacia la autosuficiencia.
        </p>
        <div class="contenedor-boton">
          <a class="boton boton-secundario" href="#catalogo">Explorar catálogo <span aria-hidden="true">↗</span></a>
          <a class="boton boton-blanco" href="#contacto">Contáctanos</a>
        </div>
      </div>
   <div class="col-span-7 heroe-imagen-contenedor">
      <img src={assetUrl("imagenes/heroe-imagen.png")} class="heroe-imagen" alt="Instalación de paneles solares residenciales">
      </div>
    </div>
  </section>
