function principal()
	{
		const db = database();
		
		const botonMapa = [document.querySelector("#Popper"), document.querySelector("#Laguna"), document.querySelector("#Atlantica")];
		
		for(boton of botonMapa)
			{
				if(boton!==null)
					{
						boton.addEventListener('click', buscarAves);		
					}
				
			}

		const botonSlider = document.querySelectorAll(".boton");
		for(boton of botonSlider)
			{
				if(boton!==null)
					{
						boton.addEventListener('click', moverSlider);		
					}
				
			}

		const slides = []

		const tituloAves = document.querySelector("#aves");

		if(tituloAves!==null)
			{
				const principales = filtarPrincipales();
				crearSlides(null, principales);
				activarElementos(".selecciones");
			}

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
						nombre="Reserva Costa Atlántica";
					}

				crearSlides(nombre, elegidos);
				activarElementos(".selecciones");
				desactivarElementos("#detalle");
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
				activarElementos("#detalle");
				crearDetalle(taxonomico);
			};

		function crearSlides(nombre,aves)
			{
				if(nombre!==null)
					{
						const titulo = document.querySelector("#titulo-slider");
						titulo.innerHTML=nombre;						
					}

				slides.length = 0
				for(ave of aves)
					{
						const slide = document.createElement("div");
						slide.classList.add("slide");
						slide.setAttribute("id", ave.taxonomico);
						slide.addEventListener("click",filtarTaxonomico);
						const img = document.createElement("img");
						img.setAttribute("src", ave.foto.replace('.jpg', '-thumb.png'));
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
				const detalles = [document.querySelector(".detalle-principal"),document.querySelector(".detalle-secundario"),document.querySelector(".descripcion")];
				const seccion = document.querySelector(".contenido-detalle")
				
				seccion.classList.remove("dos-fotos");
				seccion.classList.remove("tres-fotos");
				
				for(detalle of detalles)
					{
						detalle.innerHTML="";
					}

				if(datos.length===2)
					{
						seccion.classList.add("dos-fotos");
					}

				if(datos.length===3)
					{
						seccion.classList.add("tres-fotos");
					}

				for (dato of datos)
					{
						const contenedor = document.createElement("div");
						contenedor.classList.add("imagen");
						const img = document.createElement("img");
						img.setAttribute("src", dato.foto);
						contenedor.appendChild(img);
						const fotografo = document.createElement("p");
						fotografo.innerHTML="<b>foto: </b>"+dato.autor;
						contenedor.appendChild(fotografo);
						

						if(dato.principal===true)
							{		
								detalles[0].appendChild(contenedor);

								const cabecera = document.createElement("div");
								cabecera.classList.add("cabecera-slide")
								const titulo = document.createElement("h2");
								titulo.innerHTML=dato.nombre;
								cabecera.appendChild(titulo);
								
								const ubicacion = document.createElement("div");
								ubicacion.classList.add("ubicaciones");
								const texto = document.createElement("p");
								texto.innerHTML="Zonas:";
								ubicacion.appendChild(texto);

								if(dato.lagunaPatos===true)
									{
										const zona = document.createElement("p");
										zona.classList.add("zona");
										zona.innerHTML="RNU Laguna de los Patos";
										ubicacion.appendChild(zona);
									}

								if(dato.puntaPopper===true)
									{
										const zona = document.createElement("p");
										zona.classList.add("zona");
										zona.innerHTML="RNU Punta Popper";
										ubicacion.appendChild(zona);
									}
								
								if(dato.costaAtlantica===true)
									{
										const zona = document.createElement("p");
										zona.classList.add("zona");
										zona.innerHTML="Reserva Costa Atlántica";
										ubicacion.appendChild(zona);
									}

								const caracteristica = document.createElement("p");
								caracteristica.innerHTML="Caracteristica: "+dato.caracteristica1;

								detalles[2].appendChild(cabecera);
								detalles[2].appendChild(ubicacion);
								detalles[2].appendChild(caracteristica);
							}
						else
							{
								detalles[1].appendChild(contenedor);
							}
					}
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
						activar.scrollIntoView();
						if(tituloAves===null)
							{
								agregarSlides("#contenido-slider-2");
								desactivarElementos(".selecciones");
								unClick(botonMapa);								
							}

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