const proyectos = [
  {
    src: "img/ecommerce.png",
    titulo: "E-Commerce",
    descripcion: "Plataforma de comercio electrónico con carrito de compras, pagos integrados y panel de administración."
  },
  {
    src: "img/gestortareas.png",
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación web para la gestión de tareas con creación, edición y eliminación de tareas."
  },
  {
    src: "img/portfolio.png",
    titulo: "Portfolio Website",
    descripcion: "Sitio web personal con blog integrado, sistema de comentarios y optimización SEO."
  },
  {
    src: "img/clima.png",
    titulo: "Dashboard del Clima",
    descripcion: "Dashboard con pronósticos detallados, mapas interactivos y alertas personalizadas."
  }
];

const galeriaMiniaturas = document.querySelector("#galeriaMiniaturas");
const proyectoPrincipal = document.querySelector("#proyectoPrincipal");

function renderGaleriaProyectos() {
  if (!galeriaMiniaturas || !proyectoPrincipal) return;
  galeriaMiniaturas.innerHTML = "";
  proyectos.forEach((p, i) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-3 text-center";

    const thumb = document.createElement("img");
    thumb.src = p.src;
    thumb.alt = p.titulo;
    thumb.className = "img-thumbnail";
    thumb.style.cursor = "pointer";

    thumb.onclick = () => mostrarProyectoPrincipal(p, i);

    col.appendChild(thumb);
    galeriaMiniaturas.appendChild(col);
  });
  mostrarProyectoPrincipal(proyectos[0], 0);
}

function mostrarProyectoPrincipal(proyecto, index) {
  proyectoPrincipal.innerHTML = `
    <div class="card mx-auto shadow-sm" style="max-width:500px;">
      <img src="${proyecto.src}" class="card-img-top" alt="${proyecto.titulo}">
      <div class="card-body text-center">
        <h5 class="card-title">${proyecto.titulo}</h5>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#desc${index}">
          Ver descripción
        </button>
        <div class="collapse mt-3" id="desc${index}">
          <p class="card-text">${proyecto.descripcion}</p>
        </div>
      </div>
    </div>
  `;
}

renderGaleriaProyectos();


