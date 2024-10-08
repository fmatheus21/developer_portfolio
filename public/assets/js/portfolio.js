const screenContent = document.querySelector('.screen-content');
let scrollSpeed = 1;

function scrollContent() {
  screenContent.scrollTop += scrollSpeed;

  // Verifica se o scroll chegou ao fim, se sim, volta ao início
  if (screenContent.scrollTop + screenContent.clientHeight >= screenContent.scrollHeight) {
    screenContent.scrollTop = 0;
  }

  requestAnimationFrame(scrollContent);
}

scrollContent();
