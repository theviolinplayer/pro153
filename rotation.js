document.addEventListener('DOMContentLoaded', function () {
  const diver = document.querySelector('#scubaDiver');

  document.addEventListener('keydown', function (event) {
    let position = diver.getAttribute('position');
    let rotation = diver.getAttribute('rotation');

    switch (event.key) {
      case 'ArrowUp':
        position.z -= 0.1;
        break;
      case 'ArrowDown':
        position.z += 0.1;
        break;
      case 'ArrowLeft':
        rotation.y += 5;
        break;
      case 'ArrowRight':
        rotation.y -= 5;
        break;
    }

    diver.setAttribute('position', position);
    diver.setAttribute('rotation', rotation);
  });
});
