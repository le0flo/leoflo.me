import './ShareMe.css'

export function ShareMe() {
  function disableScroll() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function() {
      window.scrollTo(x, y);
    };
  }

  function showQrCode() {
    let qr_code_overlay = document.getElementById('qr-code-overlay');

    console.log('test');

    if (qr_code_overlay) {
      qr_code_overlay.classList.remove('hidden');
      qr_code_overlay.classList.add('overlay');

      disableScroll();
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
