import dataCategoria from './datos/categorias'

const {categorias} = dataCategoria
const contenedorCategorias = document.getElementById('categorias')

categorias.forEach((categoria)=> {

    const nuevaCategoria = document.createElement('a')
    const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
						<div class="categoria__datos">
							<p class="categoria__nombre">${categoria.nombre}</p>
							<p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
						</div>`;
                    
    nuevaCategoria.innerHTML = plantilla
    nuevaCategoria.classList.add('categoria')
    nuevaCategoria.href = '#'
    nuevaCategoria.dataset.categoria = categoria.id


    contenedorCategorias.append(nuevaCategoria)

})
