export default {
  global: {
    componenteFormativo:
      '<em>Marketing</em> digital para comunidades virtuales',
    descripcionCurso:
      'El componente formativo busca desarrollar conocimientos respecto a el contenido digital, los canales digitales y los planes de comunicación digital, como estrategias del <em>marketing</em> digital; aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través del <em>marketing</em> digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.gif'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contenido digital para el <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación del contenido digital',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de contenidos digitales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Canales digitales para el <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de canales digitales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Acciones de <em>marketing</em> de contenidos digitales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tendencias en contenidos digitales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Marketing</em> digital y de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Storytelling</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'SEO y SEM',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Email marketing</em>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<em>Social media marketing</em>',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Comunicación digital',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Plan de comunicación digital',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Plataformas para la comunicación digital',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'UNIVA (2018, 6 febrero). <em>Redes Sociales, La comunidad Virtual</em> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zM_p8MvLOyM',
    },
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'SENA. (2020, 12 mayo). <em>Conceptos Básicos Sobre Marketing Digital - SENA</em> [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LnUX087fcsk',
    },
    {
      tema: '3. <em>Marketing</em> digital y de contenidos',
      referencia:
        'Sanz-Marcos, P., Jiménez-Marín, G., & Elías-Zambrano, R. (2019). <em>La incorporación de la figura del influencer en las campañas publicitarias: Consecuencias para las agencias de publicidad españolas</em>. AdComunica, 63-86.',
      tipo: 'Libro',
      link: 'https://doi.org/10.6035/2174-0992.2019.18.5',
    },
    {
      tema: '3.1. <em>Storytelling</em>',
      referencia:
        'Coca Cola (2020, 7 de septiembre) <em>Juntos Sabe Mejor</em>. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QQUS8AO9Dws',
    },
  ],
  glosario: [
    {
      termino: 'Campañas publicitaria digital',
      significado:
        'Estrategia de <em>marketing</em> digital, que busca dar a conocer un producto, servicio o marca, en medios digitales.',
    },
    {
      termino: '<em>KPI</em>',
      significado:
        'Son las siglas de <em>key performance indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de <em>social media marketing</em>.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'Son estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del social media <em>marketing</em>.',
    },
    {
      termino: 'Medios digitales',
      significado:
        'Son las plataformas digitales que permiten la disfunción de información y comunicación.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'La publicidad digital es una estrategia de <em>marketing</em> implementada en medios digitales, con el fin de dar a conocer un producto, servicio o marca.',
    },
    {
      termino: 'Redes Sociales',
      significado: 'Comunidad de personas que se forman en internet.',
    },
    {
      termino: '<em>Search Engine Marketing</em> (SEM)',
      significado:
        'Es el conjunto de estrategia para implementar publicidad en motores de búsqueda.',
    },
    {
      termino: 'Sitio <em>Web</em>',
      significado: 'Conjunto de páginas en línea.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica de <em><b>marketing</b></em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'También llamados <em><b>webinars</b></em>, son eventos o conferencias que tienen lugar en el medio online. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<em>Youtubers</em>',
      significado:
        'Son las personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <em>Youtuber</em> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carús, L. F., Argüelles, I. (s.f.). <em>El comportamiento del consumidor online factores que aumentan la actividad de búsqueda de EWOM en el sector turístico</em>. Uniovi.es. ',
      link:
        'https://digibuo.uniovi.es/dspace/bitstream/handle/10651/29594/TFM_FdezCarus,Leticia.pdf;jsessionid=DBC988DD19773D40B92C3AE8CD6D8EC3?sequence=6',
    },
    {
      referencia:
        'Del Carmen, M., et al (s.f.). <em>El consumidor digital: motivaciones y factores que influencian su comportamiento</em>. Idus.us.es. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/93839/El_consumidor_digital.pdf?sequence=3',
    },
    {
      referencia:
        'Moschini, S., (s.f.). <em>Claves del marketing digital</em>. Edu.mx. ',
      link:
        'https://www.ceut.edu.mx/Biblioteca/books/Administraci%C3%B3n-2/Claves-del-Marketing-Digital.pdf',
    },
    {
      referencia:
        'Núñez, P., Ruiz, S. (2021). <em>Presencia de influencers en campañas publicitarias digitales. Estudio de su capacidad persuasiva y efectividad en jóvenes</em>. Universidad Complutense de Madrid. ',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Alejandra Tovar Bernal',
        cargo: 'Experto temático',
        centro: 'Centro de industrias y la construcción - Regional Tolima',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlevda',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
