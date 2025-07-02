import './LinksPanel.css'

function showQrCode() {
  let qr_code_overlay = document.getElementById('qr-code-overlay');

  if (qr_code_overlay) {
    qr_code_overlay.classList.remove('hidden');
    qr_code_overlay.classList.add('overlay');
  }
}

export function LinksPanel() {
  return (
    <div className='links-panel'>
      <a href="https://www.linkedin.com/in/leoflo">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://github.com/le0flo">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://instagram.com/le0flo">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <button className="icon" onClick={() => showQrCode()}>
        <i class="fa-solid fa-qrcode"></i>
      </button>
    </div>
  );
};
