//import imgBarra from '../../img/barras/barra-20.jpg' 
const productos = [
        { id: 1, idCategoria: 1, categoriaDescripcion: 'Barras', nameProducto: "Ohio Power Bar - Black Zinc", descriptionProducto:'Peso: 20kg\nLongitud: 2,18 mts\nCromada Revestido manga: Cromado\nRodamiento: Buje', price: 200   ,foto:'../img/barras/barra-20.jpg' },
        { id: 2, idCategoria: 1, categoriaDescripcion: 'Barras', nameProducto: "Ohio Power Bar - Cerakote", descriptionProducto:'Peso: 20kg\nLongitud: 2,18 mts\nCromada Revestido manga: Red\nRodamiento: Buje', price: 300   ,foto:'../img/barras/barra-ohio.jpg' },
        { id: 3, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 25 KG Competition Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 250   ,foto:'../img/discos/competition-plate-25kg.jpg' },
        { id: 4, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 20 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 200   ,foto:'../img/discos/competition-plate-20kg.jpg' },
        { id: 5, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 15 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 150   ,foto:'../img/discos/competition-plate-15kg.jpg' },
        { id: 6, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 10 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 100   ,foto:'../img/discos/competition-plate-10kg.jpg' }
        // { id: 7, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE KG COMPETITION Plates", descriptionProducto:'', price: 200   ,foto:'../../img/barras/barra-20.jpg' },
        // { id: 8, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE KG COMPETITION Plates", descriptionProducto:'', price: 200   ,foto:'../../img/barras/barra-20.jpg' },

    ]

export const getFetch = new Promise ( (resolve, reject) => {

    let cond = true;
    if (cond) {
        setTimeout(
            () => {
                    resolve(productos)
                }, 2000 );
    } else {
        reject('404 no funco nada!')
    }

} 

);

