import qrCode from "/qr.png"
import "./QrCodeOverlay.css"

function hideQrCode() {
  let qr_code_overlay = document.getElementById("qr-code-overlay");

  if (qr_code_overlay) {
    qr_code_overlay.classList.remove("overlay");
    qr_code_overlay.classList.add("hidden");
  }
}

export function QrCodeOverlay() {
  return (
    <div id="qr-code-overlay" className="hidden" onClick={() => hideQrCode()}>
      <img id="qr-code" src={qrCode} onClick={() => hideQrCode()} />
    </div>
  );
}
