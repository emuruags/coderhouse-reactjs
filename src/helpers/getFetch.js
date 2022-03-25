
const productos = [
        { id: 1, idCategoria: 1, categoriaDescripcion: 'Barras', nameProducto: "Ohio Power Bar - Black Zinc", descriptionProducto:'Peso: 20kg\nLongitud: 2,18 mts\nCromada Revestido manga: Cromado\nRodamiento: Buje', price: 200   ,foto:'../img/barras/barra-20.jpg', stock:10 },
        { id: 2, idCategoria: 1, categoriaDescripcion: 'Barras', nameProducto: "Ohio Power Bar - Cerakote", descriptionProducto:'Peso: 20kg\nLongitud: 2,18 mts\nCromada Revestido manga: Red\nRodamiento: Buje', price: 300   ,foto:'../img/barras/barra-ohio.jpg', stock:10 },
        // DISCOS
        { id: 3, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 25 KG Competition Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 250   ,foto:'../img/discos/competition-plate-25kg.jpg', stock:10 },
        { id: 4, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 20 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 200   ,foto:'../img/discos/competition-plate-20kg.jpg', stock:10 },
        { id: 5, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 15 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 150   ,foto:'../img/discos/competition-plate-15kg.jpg', stock:10 },
        { id: 6, idCategoria: 2, categoriaDescripcion: 'Discos', nameProducto: "ROGUE 10 KG COMPETITION Plates", descriptionProducto:'Los disos de competición de Rogue están aprobadas para uso competitivo por la Federación Internacional de Halterofilia y ahora cuentan con un acabado de color brillante-mate-brillante con letras en relieve y la marca oficial de la IWF', price: 100   ,foto:'../img/discos/competition-plate-10kg.jpg', stock:10 },
        // RACKS
        { id: 7, idCategoria: 3, categoriaDescripcion: 'Racks', nameProducto: "ROGUE RML-3WC FOLD BACK WALL MOUNT RACK", descriptionProducto:'El RML-3WC Fold-Back Rack se fabrica en Columbus, Ohio, e incluye dos montantes de acero de calibre 11 de 3x3" cortados con láser, con un espacio entre los orificios del lado oeste a través del banco/área de extracción y un espacio de 2" en el centro por encima y por debajo . Todo el acero está recubierto de polvo en la fábrica de Rogue para lograr un acabado duradero, con 11 opciones de colores personalizados para elegir.', price: 710   ,foto:'../img/racks/Rogue-Back-Wall-Mount.jpg' , stock:10},
        { id: 8, idCategoria: 3, categoriaDescripcion: 'Racks', nameProducto: "MONSTER COLLEGIATE HALF RACKS", descriptionProducto:'Construido con montantes de 90" en la parte trasera de la unidad y montantes de 100" en la parte delantera, el Rogue Monster Collegiate Half Rack utiliza nuevos travesaños en ángulo para producir una apariencia acabada en la parte superior del rack con altura adicional en el frente para dominadas. También hemos incluido patas delanteras de 30" más largas, que brindan estabilización adicional y permiten a los atletas realizar trabajos de banda sin tener que estar dentro del estante. El Monster Half Rack presenta la misma construcción de acero de calibre 11 de 3x3" y el mismo hardware de 1" que nuestros racks eléctricos Monster estándar, y está disponible aquí en dos formatos, cada uno diseñado teniendo en cuenta las necesidades de eficiencia de espacio de una escuela secundaria o centro de formación universitaria.', price: 1450   ,foto:'../img/racks/Rogue-Monster-Collegiate.jpg', stock:10 },
        { id: 9, idCategoria: 3, categoriaDescripcion: 'Racks', nameProducto: 'ROGUE RML-490C POWER RACK 3.0', descriptionProducto:'Originalmente desarrollado para combinar la construcción de acero de calibre 11 de 3x3" del Monster Rack RM-4 con el hardware de 5/8" del Infinity R-4, nuestro último RML-490C Monster Lite Rack versátil ahora también incluye: una amplia gama de opciones de acabado de color personalizadas, una nueva placa de identificación trasera estabilizadora, travesaños compatibles con Slinger y su elección de montantes numerados o no numerados.', price: 1215   ,foto:'../img/racks/Rogue-Power-Raxk-30.jpg' , stock:10},
        { id: 10, idCategoria: 3, categoriaDescripcion: 'Racks', nameProducto: 'SML-1 ROGUE 70" MONSTER LITE SQUAT STAND', descriptionProducto:'El Rogue SML-1 Monster Lite Squat Stand combina elementos de los soportes de 70” de nuestra línea S-Series y Monster estándar para crear una unidad híbrida versátil. Los montantes están construidos con los mismos tubos de acero de calibre 11 de 3x3" que el Monster SM-1, pero con el hardware de 5/8" y el espaciado de orificios del lado oeste del S-1.', price: 415   ,foto:'../img/racks/Rogue-SML-1.jpg' , stock:10},
        { id: 11, idCategoria: 3, categoriaDescripcion: 'Racks', nameProducto: 'ROGUE SM-2.5 MONSTER 100" SQUAT STAND 2.0', descriptionProducto:'El Rogue Monster Squat Stand 2.0, totalmente rediseñado, cierra la brecha entre los soportes para sentadillas tradicionales y los racks eléctricos y cuenta con montantes de acero de calibre 11 de gran tamaño de 3x3", herrajes de 1" y una base atornillada con placas triangulares para una máxima estabilidad. Cada montante de 103" de nuestro versátil modelo SM-2.5 ahora también incluye un diseño de ojo de cerradura en el costado (para una mayor flexibilidad con una gama más amplia de accesorios nuevos), junto con un nuevo acabado de recubrimiento en polvo negro satinado y una etiqueta de cúpula para una apariencia más audaz La base de la unidad, las placas triangulares y los travesaños también cuentan con el acabado de pintura en polvo Satin Black.', price: 820   ,foto:'../img/racks/Rogue-SML-2.jpg' , stock:10}
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

export const getFetchCategorias = new Promise ( (resolve, reject) => {



    let cond = true;
    if (cond) {
        setTimeout(
            () => {
                
                const ids = productos.map(o => o.idCategoria)
                console.log(ids);
                const filtered = productos.filter(({idCategoria}, index) => !ids.includes(idCategoria, index + 1))
                    resolve(filtered)
                }, 0 );
    } else {
        reject('404 no funco nada!')
    }

} 

);
