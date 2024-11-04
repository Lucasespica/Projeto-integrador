document.getElementById('menu-toggle').addEventListener('click', function() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '-250px') {
      sidebar.style.left = '0';
  } else {
      sidebar.style.left = '-250px';
  }
});

// Alternar visibilidade da barra lateral direita
document.getElementById("toggle-sidebar-right").addEventListener("click", function() {
  var sidebarRight = document.getElementById("sidebar-right");
  sidebarRight.classList.toggle("active");
});

// Fechar barra lateral direita
document.getElementById("sidebar-right-close").addEventListener("click", function() {
  var sidebarRight = document.getElementById("sidebar-right");
  sidebarRight.classList.remove("active");
});
