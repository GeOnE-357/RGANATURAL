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
		botonPopper.addEventListener('click', buscarPuntaPopper);
		const botonLaguna = document.querySelector("#Laguna");
		botonLaguna.addEventListener('click', buscarLagunaPatos);
		const botonAtlantica = document.querySelector("#Atlantica");
		botonAtlantica.addEventListener('click', buscarCostaAtlantica);

		function buscarPuntaPopper()
			{
				const principales = filtarPrincipales();
				const puntaPopper = [] 
				for (dato of principales)
					{
						if(dato.puntaPopper===true)
							{
								puntaPopper.push(dato);
							}
					}
				console.log(puntaPopper);
			}

		function buscarLagunaPatos()
			{
				const principales = filtarPrincipales();
				const lagunaPatos = [] 
				for (dato of principales)
					{
						if(dato.lagunaPatos===true)
							{
								lagunaPatos.push(dato);
							}
					}
				console.log(lagunaPatos);
			}

		function buscarCostaAtlantica()
			{
				const principales = filtarPrincipales();
				const costaAtlantica = [] 
				for (dato of principales)
					{
						if(dato.costaAtlantica===true)
							{
								costaAtlantica.push(dato);
							}
					}
				console.log(costaAtlantica);
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
				return (principales);
			}

		function filtarTaxonomico()
			{
				const taxonomico = [];
				for (dato of db)
					{
						if(dato.taxonomico===Number(this.id))
								{
									taxonomico.push(dato);	
								}
					}
				return (taxonomico);
			}

		//img.setAttribute("src", db[this.id].foto);
		//document.querySelector('body').appendChild(img);
	};


principal();