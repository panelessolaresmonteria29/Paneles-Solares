<script lang="ts">
  import './contacto.css';
  import { assetUrl } from '../../../../assets';
</script>
<section id="contacto" class="seccion-contacto fondo-principal">
  <div class="contenedor-seccion">
    <div class="contacto-cabecera">
      <span class="contacto-insignia">Hablemos pls</span>
      <h2 class="contacto-titulo">Ponte en Contacto :)</h2>
      <p class="contacto-bajada">Déjanos tu consulta o mensaje y nos pondremos en contacto contigo.</p>
    </div>
          <div class="cuadricula-contacto-2col">
      <!-- Columna de Información -->
      <div class="columna-informacion">
        <div class="lista-tarjetas-info">
          <a href="https://maps.google.com/?q=Calle%2027%20%23%203-45%2C%20Monter%C3%ADa" target="_blank" rel="noopener noreferrer" class="tarjeta-info-item item-lugar">
            <div class="icono-info">📍</div>
            <div class="contenido-info">
              <span class="etiqueta-info">Lugar</span>
              <strong class="valor-info">Calle 27 # 3-45, Montería</strong>
            </div>
          </a>
        </div>
      </div>

      <!-- Columna del Formulario -->
      <div class="columna-formulario">
        <div class="tarjeta-formulario-contacto">
      <form class="formulario-contacto">
        <div class="fila-formulario">
          <div class="campo-grupo">
            <label for="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej. Alex Martínez" required="">
          </div>
          <div class="campo-grupo">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="alex@ejemplo.com" required="">
          </div>
        </div>

        <div class="campo-grupo">
          <label for="mensaje">¿Cómo podemos ayudarte?</label>
          <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe aquí tu mensaje..." required=""></textarea>
        </div>

        <button type="submit" class="boton-enviar-contacto">
          <span>Enviar Mensaje</span>
        </button>
      </form>
    </div>
      </div>
    </div>
  </div>
</section>