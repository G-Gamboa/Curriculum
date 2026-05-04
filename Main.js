/* ═══════════════════════════════════════
   CV — Guillermo Gamboa
   main.js
═══════════════════════════════════════ */

/* ─── WhatsApp opener with greeting ─── */
function openWhatsApp() {
  var phone = '50239517765';
  var msg   = encodeURIComponent(
    '¡Hola Guillermo! Vi tu CV y me gustaría contactarte.'
  );
  window.open('https://wa.me/' + phone + '?text=' + msg, '_blank');
}

/* ─── Email opener ─── */
function openEmail() {
  window.location.href = 'mailto:gamboaguillermo12@gmail.com';
}

/* ─── Favicon: programmatically generated SVG monogram ─── */
(function injectFavicon() {
  var svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">',
    '<rect width="64" height="64" rx="12" fill="#0f1e35"/>',
    '<text x="32" y="46" font-family="Georgia,serif" font-size="34"',
    ' font-weight="bold" fill="#c8a96e" text-anchor="middle">GG</text>',
    '</svg>'
  ].join('');
  var encoded = 'data:image/svg+xml;base64,' + btoa(svg);
  var link = document.createElement('link');
  link.rel  = 'icon';
  link.type = 'image/svg+xml';
  link.href = encoded;
  document.head.appendChild(link);
})();