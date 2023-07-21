// Start Browser Detection & Mobile Formatting
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('Mobi') !== -1);
}

if (isMobileDevice()) {
  // This is a mobile device, so add a class to the <html> element to use in CSS later.
  document.documentElement.classList.add('mobile');
}
// End Browser Detection & Mobile Formatting
