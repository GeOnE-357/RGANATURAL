function principal()
	{
		const db = [
				{"id":1, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/data/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":2, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/data/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":4, "taxonomico":356, "nombre":"Caranca", "foto":"./img/data/04-356.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":5, "taxonomico":356, "nombre":"Caranca", "foto":"./img/data/05-356.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":6, "taxonomico":384, "nombre":"Pato Crestón", "foto":"./img/data/06-384.jpg", "autor":"Juan Carlos Castillo", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":7, "taxonomico":384, "nombre":"Pato Crestón", "foto":"./img/data/07-384.jpg", "autor":"Juan Carlos Castillo", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":8, "taxonomico":384, "nombre":"Pato Crestón", "foto":"./img/data/08-384.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":9, "taxonomico":1783, "nombre":"Macá Plateado", "foto":"./img/data/09-1783.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":10, "taxonomico":1783, "nombre":"Macá Plateado", "foto":"./img/data/10-1783.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":11, "taxonomico":1783, "nombre":"Macá Plateado", "foto":"./img/data/11-1783.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":12, "taxonomico":1813, "nombre":"Paloma Doméstica", "foto":"./img/data/12-1813.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":13, "taxonomico":1813, "nombre":"Paloma Doméstica", "foto":"./img/data/13-1813.jpg", "autor":"Tabaré Barreto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":14, "taxonomico":5536, "nombre":"Paloma Antártica", "foto":"./img/data/14-5536.jpg", "autor":"Diego Janches", "puntaPopper":false, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":15, "taxonomico":5536, "nombre":"Paloma Antártica", "foto":"./img/data/15-5536.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":16, "taxonomico":5610, "nombre":"Ostrero Austral", "foto":"./img/data/16-5610.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":17, "taxonomico":5610, "nombre":"Ostrero Austral", "foto":"./img/data/17-5610.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":18, "taxonomico":5667, "nombre":"Tero", "foto":"./img/data/18-5667.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":19, "taxonomico":5667, "nombre":"Tero", "foto":"./img/data/19-5667.jpg", "autor":"Juan Carlos Castillo", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":21, "taxonomico":5694, "nombre":"Chorlito Doble Collar", "foto":"./img/data/21-5694.jpg", "autor":"Diego Janches", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":22, "taxonomico":5694, "nombre":"Chorlito Doble Collar", "foto":"./img/data/22-5694.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":23, "taxonomico":5694, "nombre":"Chorlito Doble Collar", "foto":"./img/data/23-5694.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":24, "taxonomico":5803, "nombre":"Playero Trinador", "foto":"./img/data/24-5803.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":25, "taxonomico":5803, "nombre":"Playero Trinador", "foto":"./img/data/25-5803.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":26, "taxonomico":5831, "nombre":"Becasa de Mar", "foto":"./img/data/26-5831.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":27, "taxonomico":5831, "nombre":"Becasa de Mar", "foto":"./img/data/27-5831.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":28, "taxonomico":5831, "nombre":"Becasa de Mar", "foto":"./img/data/28-5831.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":29, "taxonomico":5845, "nombre":"Playero Rojizo", "foto":"./img/data/29-5845.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":30, "taxonomico":5845, "nombre":"Playero Rojizo", "foto":"./img/data/30-5845.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":31, "taxonomico":5893, "nombre":"Playerito Rabadilla Blanca", "foto":"./img/data/31-5893.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":32, "taxonomico":5893, "nombre":"Playerito Rabadilla Blanca", "foto":"./img/data/32-5893.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":33, "taxonomico":6233, "nombre":"Gaviota Gris", "foto":"./img/data/33-6233.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":34, "taxonomico":6233, "nombre":"Gaviota Gris", "foto":"./img/data/34-6233.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":35, "taxonomico":6333, "nombre":"Gaviota Cocinera", "foto":"./img/data/35-6333.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":36, "taxonomico":6333, "nombre":"Gaviota Cocinera", "foto":"./img/data/36-6333.jpg", "autor":"Juan Carlos Castillo", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":37, "taxonomico":6683, "nombre":"Petrel Gigante", "foto":"./img/data/37-6683.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":39, "taxonomico":6683, "nombre":"Petrel Gigante", "foto":"./img/data/39-6683.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":40, "taxonomico":7018, "nombre":"Cormorán Imperial", "foto":"./img/data/40-7018.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":41, "taxonomico":7018, "nombre":"Cormorán Imperial", "foto":"./img/data/41-7018.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":42, "taxonomico":7018, "nombre":"Cormorán Imperial", "foto":"./img/data/42-7018.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":43, "taxonomico":7227, "nombre":"Garza Bruja", "foto":"./img/data/43-7227.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":44, "taxonomico":7227, "nombre":"Garza Bruja", "foto":"./img/data/44-7227.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":45, "taxonomico":7287, "nombre":"Bandurria austral", "foto":"./img/data/45-7287.jpg", "autor":"Ana Stasyszyn", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":46, "taxonomico":7287, "nombre":"Bandurria austral", "foto":"./img/data/46-7287.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":47, "taxonomico":7287, "nombre":"Bandurria austral", "foto":"./img/data/47-7287.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":false, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":48, "taxonomico":11347, "nombre":"Carancho", "foto":"./img/data/48-11347.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":49, "taxonomico":11347, "nombre":"Carancho", "foto":"./img/data/49-11347.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":50, "taxonomico":16268, "nombre":"Sobrepuesto", "foto":"./img/data/50-16268.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":51, "taxonomico":16268, "nombre":"Sobrepuesto", "foto":"./img/data/51-16268.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":52, "taxonomico":27476, "nombre":"Zorzal Patagónico", "foto":"./img/data/52-27476.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":53, "taxonomico":27476, "nombre":"Zorzal Patagónico", "foto":"./img/data/53-27476.jpg", "autor":"Alejandro Nieto", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":54, "taxonomico":30329, "nombre":"Gorrión", "foto":"./img/data/54-30329.jpg", "autor":"Esteban Daniels", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":55, "taxonomico":30329, "nombre":"Gorrión", "foto":"./img/data/55-30329.jpg", "autor":"Esteban Daniels", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":56, "taxonomico":31901, "nombre":"Chingolo", "foto":"./img/data/56-31901.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":57, "taxonomico":31901, "nombre":"Chingolo", "foto":"./img/data/57-31901.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Residente", "caracteriscia2":""},
				{"id":58, "taxonomico":32329, "nombre":"Loica", "foto":"./img/data/58-32329.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":59, "taxonomico":32329, "nombre":"Loica", "foto":"./img/data/59-32329.jpg", "autor":"Ana Stasyszyn", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
				{"id":60, "taxonomico":32329, "nombre":"Loica", "foto":"./img/data/60-32329.jpg", "autor":"Alejandro Nieto", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":""},
		];

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
				console.log(principales);
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