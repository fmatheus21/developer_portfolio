const screenContentSection = document.querySelector('.screen-content-section');
let scrollSpeedSection = 1;

function scrollContent() {
  screenContentSection.scrollTop += scrollSpeedSection;

  // Verifica se o scroll chegou ao fim, se sim, volta ao início
  if (screenContentSection.scrollTop + screenContentSection.clientHeight >= screenContentSection.scrollHeight) {
    screenContentSection.scrollTop = 0;
  }

  requestAnimationFrame(scrollContent);
}

scrollContent();
