<script lang="ts">
  import './contacto.css';
  import { assetUrl } from '../../../../assets';

  let sending = false;
  let statusMessage = '';
  let hasError = false;
  let startedAt = Date.now();

  async function enviarContacto(event: SubmitEvent) {
    if (sending) return;
    const form = event.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    sending = true;
    statusMessage = 'Enviando tu mensaje…';
    hasError = false;
    const data = new FormData(form);
    try {
      const response = await fetch(import.meta.env.BASE_URL + 'api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: data.get('nombre'), email: data.get('email'),
          telefono: data.get('telefono') || '', mensaje: data.get('mensaje'),
          website: data.get('website') || '', startedAt,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || 'No pudimos enviar el mensaje. Inténtalo más tarde.');
      statusMessage = result.confirmationSent === false
        ? 'Recibimos tu mensaje. Te responderemos al correo que indicaste; no necesitas enviarlo otra vez.'
        : '¡Mensaje enviado! Revisa tu correo y la carpeta de spam para ver la confirmación.';
      form.reset();
      startedAt = Date.now();
    } catch (error) {
      hasError = true;
      statusMessage = error instanceof Error ? error.message : 'No pudimos enviar el mensaje. Revisa tu conexión.';
    } finally {
      sending = false;
    }
  }

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
      <form class="formulario-contacto" on:submit|preventDefault={enviarContacto} aria-busy={sending}>
        <div class="contacto-antispam" aria-hidden="true">
          <label for="contacto-website">Deja este campo vacío</label>
          <input id="contacto-website" type="text" name="website" tabindex="-1" autocomplete="off">
        </div>
        <div class="fila-formulario">
          <div class="campo-grupo">
            <label for="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" maxlength="80" autocomplete="name" placeholder="Ej. Alex Martínez" required>
          </div>
          <div class="campo-grupo">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" maxlength="254" autocomplete="email" placeholder="alex@ejemplo.com" required>
          </div>
        </div>

        <div class="campo-grupo">
          <label for="mensaje">¿Cómo podemos ayudarte?</label>
          <textarea id="mensaje" name="mensaje" maxlength="4000" rows="4" placeholder="Escribe aquí tu mensaje..." required></textarea>
        </div>

        <button type="submit" class="boton-enviar-contacto" disabled={sending}>
          <span>{sending ? 'Enviando…' : 'Enviar Mensaje'}</span>
        </button>
        <p class="contacto-estado" class:contacto-error={hasError} role="status" aria-live="polite" aria-atomic="true">{statusMessage}</p>
      </form>
    </div>
      </div>
    </div>
  </div>
</section>
<style>
  .contacto-antispam { position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden; }
  .contacto-estado { margin: 16px 0 0; font-size: 14px; line-height: 1.6; color: inherit; }
  .contacto-estado:empty { display: none; }
  .contacto-error { font-weight: 600; }
  .boton-enviar-contacto:disabled { opacity: 0.65; cursor: wait; }
</style>
