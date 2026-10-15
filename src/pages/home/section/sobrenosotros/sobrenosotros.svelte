<script lang="ts">
  import './sobrenosotros.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section id="sobre-nosotros" class="fondo-secundario">

  <div class="cuadricula contenedor-seccion">
    <!-- Aquí va la imagen y debes usar la clase col-span-5 -->
    <div class="col-span-5">
      <!-- Aquí va la imagen solicitada -->
      <div class="contenedor-imagen">
        <img src={assetUrl("imagenes/sobrenosotros-imagen.png")} alt="Sobre nosotros" class="imagen-estudio">
      </div>
    </div>

    <div class="col-span-7">
      <div class="sobre-nosotros-textos">
      <h2>Sobre nosotros</h2>
      <p>tenemos la mejor cobertura en cuanto a paneles se trata, ¡llamenos ya!</p>
      <p>Vengan ya, es enserio vengan. necesitamos clientes porfavor :c</p>
      </div>
    </div>
  </div>
</section>
