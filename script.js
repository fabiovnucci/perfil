window.onload = function() {
  var contador = document.getElementById('contador');
  var visitas = localStorage.getItem('visitas');

  if (visitas) {
    visitas = parseInt(visitas) + 1;
  } else {
    visitas = 1;
  }

  localStorage.setItem('visitas', visitas);
  contador.innerHTML = visitas;
};
