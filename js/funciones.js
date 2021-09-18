function principal()
	{
		const db = [
				{"id":1, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":2, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":3, "taxonomico":352, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":4, "taxonomico":352, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":5, "taxonomico":353, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":6, "taxonomico":353, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":7, "taxonomico":354, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":8, "taxonomico":354, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":9, "taxonomico":355, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":10, "taxonomico":355, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":11, "taxonomico":356, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":12, "taxonomico":356, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
		];

		const botonMapa = [document.querySelector("#Popper"), document.querySelector("#Laguna"), document.querySelector("#Atlantica")];
		
		for(boton of botonMapa)
			{
				boton.addEventListener('click', buscarAves);
			}

		const botonSlider = document.querySelectorAll(".boton");
		for(boton of botonSlider)
			{
				boton.addEventListener('click', moverSlider);
			}

		const slides = []

		function buscarAves()
			{
				unClick(botonMapa);
				this.classList.add("select")
				const principales = filtarPrincipales();
				const elegidos = [];
				let nombre ="";

				if(this.id==="Popper")
					{
						for (dato of principales)
							{
								if(dato.puntaPopper===true)
									{
										elegidos.push(dato);
									}
							}
						nombre="RNU Punta Popper";
					}

				if(this.id==="Laguna")
					{
						for (dato of principales)
							{
								if(dato.lagunaPatos===true)
									{
										elegidos.push(dato);
									}
							}
						nombre="RNU Laguna de los Patos";
					}
				 
				if(this.id==="Atlantica")
					{
						for (dato of principales)
							{
								if(dato.costaAtlantica===true)
									{
										elegidos.push(dato);
									}
							}
						nombre="Costa Atlantica";
					}

				crearSlides(nombre, elegidos);
				activarElementos(".selecciones");
				desactivarElementos("#detalle")	
			}

		function filtarPrincipales()
			{
				const principales = [];
				for (dato of db)
					{
						if(dato.principal===true)
							{
								principales.push(dato);	
							}
					}
				return principales;
			}

		function filtarTaxonomico()
			{
				const contenido = document.querySelectorAll(".slide");
				unClick(contenido);
				this.classList.add("select");
				const taxonomico = [];
				for (dato of db)
					{
						if(dato.taxonomico===Number(this.id))
							{
								taxonomico.push(dato);	
							}
					}

				crearDetalle(taxonomico);
				activarElementos("#detalle");
			};

		function crearSlides(nombre,aves)
			{
				const titulo = document.querySelector("#titulo-slider");
				titulo.innerHTML=nombre;
				slides.length = 0
				for(ave of aves)
					{
						const slide = document.createElement("div");
						slide.classList.add("slide");
						slide.setAttribute("id", ave.taxonomico);
						slide.addEventListener("click",filtarTaxonomico);
						const img = document.createElement("img");
						img.setAttribute("src", ave.foto);
						slide.appendChild(img);
						slides.push(slide);
					}
				agregarSlides("#contenido-slider");
			};

		function agregarSlides(slider)
			{
				const contenido = document.querySelector(slider);
				contenido.innerHTML="";
				for(slide of slides)
					{
						contenido.appendChild(slide);
					}
			}


		function crearDetalle(datos)
			{
				console.log(datos);
			};

		function unClick(vector)
			{
				for(elemento of vector)
					{
						elemento.classList.remove("select");
					}
			}

		function activarElementos(nombre)
			{
				const activar = document.querySelector(nombre);
				activar.classList.add("activo");
				if(nombre === "#detalle")
					{	
						const activar = document.querySelector(nombre);
						agregarSlides("#contenido-slider-2");
						activar.scrollIntoView();
						desactivarElementos(".selecciones");
						unClick(botonMapa);
					}
			}

		function desactivarElementos(nombre)
			{
				const desactivar = document.querySelector(nombre);
				desactivar.classList.remove("activo");
			}

		function moverSlider()
			{
				const scroll = [document.querySelector("#contenido-slider"),document.querySelector("#contenido-slider-2")]
				const cant = 93;
				if(this.classList.contains("atras"))
					{
						scroll[0].scrollBy({top:0, left:-cant, behavior:"smooth"});
						scroll[1].scrollBy({top:0, left:-cant, behavior:"smooth"});
					}
				else
					{
						scroll[0].scrollBy({top:0, left:+cant, behavior:"smooth"});
						scroll[1].scrollBy({top:0, left:+cant, behavior:"smooth"});
					}
			}
	};

principal();