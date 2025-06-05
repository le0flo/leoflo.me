import './ShareMe.css'

export function ShareMe() {
  function showQrCode() {
    let qr_code_overlay = document.getElementById('qr-code-overlay');

    if (qr_code_overlay) {
      qr_code_overlay.classList.remove('hidden');
      qr_code_overlay.classList.add('overlay');
    }
  }

  return (
    <div className='card' id='share-me'>
      <h1>Condividimi</h1>
      <p>Spargi la voce .-.</p>
      <button onClick={() => showQrCode()}>Codice QR</button>
    </div>
  );
}
