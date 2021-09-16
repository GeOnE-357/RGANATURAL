function principal()
	{
		const db = [
				{"id":1, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":2, "taxonomico":351, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":true, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":3, "taxonomico":352, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":4, "taxonomico":352, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":false, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
				{"id":5, "taxonomico":353, "nombre":"Cauquén Común", "foto":"./img/01-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":true, "caracteristica1":"Migratoria", "caracteriscia2":"Macho"},
				{"id":6, "taxonomico":353, "nombre":"Cauquén Común", "foto":"./img/02-351.jpg", "autor":"Jan van de Kam", "puntaPopper":false, "lagunaPatos":true, "costaAtlantica":true, "principal":false, "caracteristica1":"Migratoria", "caracteriscia2":"Hembra"},
		];

		const botonPopper = document.querySelector("#Popper");
		botonPopper.addEventListener('click', buscarAves);
		const botonLaguna = document.querySelector("#Laguna");
		botonLaguna.addEventListener('click', buscarAves);
		const botonAtlantica = document.querySelector("#Atlantica");
		botonAtlantica.addEventListener('click', buscarAves);

		const botones = [botonPopper, botonLaguna, botonAtlantica];

		function buscarAves()
			{
				unClick(botones);
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

				crearSelecciones(nombre, elegidos);	
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

		function crearSelecciones(nombre,aves)
			{
				const titulo = document.querySelector("#titulo-slider");
				titulo.innerHTML=nombre;
				const contenido = document.querySelector("#contenido-slider");
				contenido.innerHTML="";
				for(ave of aves)
					{
						const slide = document.createElement("div");
						slide.classList.add("slide");
						slide.setAttribute("id", ave.taxonomico);
						slide.addEventListener("click",filtarTaxonomico);
						const img = document.createElement("img");
						img.setAttribute("src", ave.foto);
						slide.appendChild(img);
						contenido.appendChild(slide);
					}
			};

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
			};

		function unClick(vector)
			{
				for(elemento of vector)
					{
						elemento.classList.remove("select");
					}
			}
	};

principal();