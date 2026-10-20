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
        : 'Gracias por escribirnos. Recibimos tu consulta. Revisa tu correo y la carpeta de spam para ver la confirmación.';
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
        <div class="contacto-aviso" class:contacto-aviso-error={hasError} class:contacto-aviso-enviando={sending} class:contacto-aviso-visible={Boolean(statusMessage)} role="status" aria-live="polite" aria-atomic="true">
 {#if statusMessage}
 <span class="contacto-aviso-icono" aria-hidden="true">{sending ? '…' : hasError ? '!' : '✓'}</span>
 <div><strong>{sending ? 'Enviando tu mensaje' : hasError ? 'No se pudo enviar' : '¡Mensaje enviado!'}</strong><p>{statusMessage}</p></div>
 {/if}
 </div>
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


.contacto-aviso { display: none; }
.contacto-aviso-visible { display:flex; align-items:flex-start; gap:14px; padding:20px; border:1px solid #b8d8c8; border-radius:14px; background:#eff8f3; color:#184b37; text-align:left; }
.contacto-aviso-icono { display:flex; align-items:center; justify-content:center; width:32px; height:32px; flex:0 0 32px; border-radius:50%; background:#d5ecdf; font-size:20px; font-weight:700; }
.contacto-aviso strong { display:block; font-size:16px; line-height:1.5; }
.contacto-aviso p { margin:5px 0 0; font-size:14px; line-height:1.6; color:inherit; overflow-wrap:anywhere; }
.contacto-aviso-error { background:#fff3f1; color:#8b2922; border-color:#edc2bc; }
.contacto-aviso-error .contacto-aviso-icono { background:#f8dcd6; }
.contacto-aviso-enviando { background:#f4f5f7; color:#354052; border-color:#d6dce5; }
.contacto-aviso-enviando .contacto-aviso-icono { background:#e2e6ec; }
@media (max-width:480px) { .contacto-aviso-visible { padding:16px; gap:10px; } }
</style>
