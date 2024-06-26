function cambiarIdiomaEspañol() {
    console.log("Cambiar idioma a español");
    document.getElementById("proyectosLink").textContent = "Proyectos";
    // document.getElementById("experienciaLink").textContent = "Experiencia";
    document.getElementById("certificacionesLink").textContent = "Certificaciones";
    document.getElementById("contactoLink").textContent = "Contacto";

    document.getElementById("titulo").textContent = "Desarrollador Web";
    document.getElementById("leng").textContent = "HTML CSS JavaScript React// SCSS";

    document.getElementById("parrafo1").innerHTML = `Originalmente de <b>Argentina</b>, mi trayectoria comenzó en el mundo de la música, donde desarrollé
    una profunda apreciación por la expresión artística y la colaboración creativa. Para la misma época y durante varias
    temporadas, tuve el privilegio de trabajar en hoteles de renombre en los <b>Estados Unidos</b>, donde no solo adquirí una valiosa experiencia laboral, sino que también tuve la oportunidad de aprender y
    perfeccionar el idioma inglés.`;
    document.getElementById("parrafo2").innerHTML = `Sin embargo, mi verdadero viaje hacia la realización personal comenzó cuando decidí adentrarme
    en el mundo de la programación. Desde entonces he estado
    comprometido a dedicarle todo mi tiempo para mejorar mis habilidades. Actualmente estoy inscrito en
    el Curso de <b>Desarrollo Web Full Stack</b> en <a class="l" target="_blank" href="https://www.coderhouse.com/ar/"><i>CoderHouse</i></a>, destacándome en áreas como
    <b>HTML, CSS, React y JavaScript</b> con resultados sobresalientes.`;
    document.getElementById("parrafo3").innerHTML = `Mis proyectos, presentados a continuación,
    son un testimonio de mi dedicación y creatividad en este campo de constante evolución.`;
    document.getElementById("parrafo4").innerHTML = `Mi visión para el futuro pasa por seguir creciendo profesionalmente como programador, con especial
    interés en el <b>Diseño UX/UI</b>. Creo firmemente que
    la combinación de mis habilidades técnicas y mi pasión por el diseño me posiciona como un
    candidato único y altamente calificado para abordar los desafíos del mundo digital actual.`;

    document.getElementById("proyectos").textContent = "Proyectos";

    document.getElementById("t1").innerHTML = `Mi primera zambullida al universo del HTML y CSS (brindado por 
     <a class="l" target="_blank" href="https://www.linkedin.com/in/johanna-palo-bael-frontend/">Johanna Palo Bael</a>). 
    Margin, padding, display: flex y conocer la maravilla del hover. Aprobado con nota sobresaliente, 
    de yapa aproveché el sitio para subir cuentos que había escrito en otro tiempo.<span style="font-size:medium;"> 
    Puedes ver la valoración haciendo click <a class="l" target="_blank" href="./certificados/valoración.png"><i>aquí</i></a>.</span>`;
    document.getElementById("l1").textContent = "Visitar";


    document.getElementById("t2").textContent = "Decidí practicar por mi cuenta, y la temática elegida fue la de videojuegos.Me entretuve ideando el carrousel infinito, grid, un input de busqueda... y mas hover.";
    document.getElementById("l3").textContent = "Visitar";


    document.getElementById("t3").textContent = "Al igual que el anterior, quise seguir practicando, esta vez el tema elegido fue historia, del que pensé que podría hacer algo interesante. El gran desafío fue crear un menú desplegable que salga desde detrás del slider de imágenes sin que se rompa todo lo que había hecho.";
    document.getElementById("l5").textContent = "Visitar";


    // document.getElementById("t4").textContent = "Este sitio (aún en desarrollo) es el proyecto final del curso de Javascript. Se implementan ciclos iterativos, condicionales, y salidas y entradas por prompt, además de tener un carro de compras completamente funcional.";
    document.getElementById("t4").innerHTML = `
    Este sitio es el proyecto final del curso de Javascript (brindado por 
    <a class="l" target="_blank" href="https://www.linkedin.com/in/lucasgabrielruiz/">Lucas Gabriel Ruiz</a>).
    Se implementan ciclos iterativos, condicionales, modificaciones del DOM, además de tener un carro de compras completamente funcional.
    <span style="font-size:medium;"> 
    Puedes ver la valoración haciendo click <a class="l" target="_blank" href="./certificados/valoraciónJS.png"><i>aquí</i></a>.</span>`;

    document.getElementById("l7").textContent = "Visitar";


    document.getElementById("t5").textContent = "Por mi cuenta quise emular un E-commerce de ropa, para poder practicar la disposicion de las grillas, presentación de productos, y funcionalidades como filtros y eventos onclick.";
    document.getElementById("l9").textContent = "Visitar";


    document.getElementById("t6").textContent = "Se me ocurrió hacer un portfolio fotográfico en el que podía seguir practicando y perfeccionando las habilidades que venia aprendiendo en los diferentes cursos.";
    document.getElementById("l11").textContent = "Visitar";


    document.getElementById("t7").textContent = "Este mismo sitio, que funciona como un curriculum digital, fue un desafío entretenido de idear. Abarca todo lo aprendido hasta la fecha. Lo creé con la intención de que sea mantenible en el tiempo, para ello uso extends, mixins, variables, SASS e importación de archivos JS para una mejor organización. Además cuenta con dos themes, uno dark y otro light, cada uno con sus respectivas animaciones.";
    document.getElementById("l13").textContent = "Visitar";

    document.getElementById("t8").textContent = "E-commerce de instrumentos musicales con carrito de compras, que se visualiza con un modal. Utilicé fetch para obtener los datos de los productos desde un archivo JSON y mostrarlos en el DOM mediante una función asíncrona. Los productos se pueden visualizar al seleccionar la categoría correspondiente en la barra de navegación. Los estilos están definidos en SCSS para una presentación atractiva y responsiva de la tienda."
    document.getElementById("l15").textContent = "Visitar"

    document.getElementById("t9").textContent = `  En esta oportunidad diseñé un sitio con arquitectura moderna basada en React, integrando una
                        variedad de componentes interactivos y funcionales. Utilizando técnicas avanzadas de estado y
                        efectos, cada componente está diseñado para gestionar
                        estados locales y globales de manera eficiente. La aplicación también incluye características
                        sofisticadas como utilizacion de APIs,  generación dinámica de citas literarias, juegos de trivia, y gestión de listas de tareas.
                        Además, se implementa un seguimiento detallado de interacciones a través de gráficos
                        interactivos, permitiendo análisis del comportamiento del usuario. Este enfoque
                        garantiza un rendimiento óptimo y una experiencia de usuario fluida, fundamentales en
                        aplicaciones web modernas y escalables.`;
    document.getElementById("l16").textContent = "Visitar";


    // document.getElementById("el").textContent = "Experiencia Laboral";

    document.getElementById("cer").textContent = "Certificaciones";
    document.getElementById("slide1").innerHTML = `<img src="./certificados/DesarrolladorWeb.png">`;
    document.getElementById("slide2").innerHTML = `<img src="./certificados/CertificadoJS.png">`;

    document.getElementById("tc").textContent = "Contacto";
}

// Función para cambiar el idioma a inglés
function cambiarIdiomaInglés() {
    console.log("Cambiar idioma a inglés");
    document.getElementById("proyectosLink").textContent = "Projects";
    // document.getElementById("experienciaLink").textContent = "Experience";
    document.getElementById("certificacionesLink").textContent = "Certifications";
    document.getElementById("contactoLink").textContent = "Contact";

    document.getElementById("titulo").textContent = "Web Developer";
    document.getElementById("leng").textContent = "HTML CSS JavaScript React// SCSS";

    document.getElementById("parrafo1").innerHTML = `Originally from <b>Argentina</b>, my journey began in the world of music, where I developed
    a deep appreciation for artistic expression and creative collaboration. Around the same time and for several
    seasons, I had the privilege of working in renowned hotels in the <b>United States</b>, where I not only gained valuable work experience, but also had the opportunity to learn and
    perfect the English language.`;
    document.getElementById("parrafo2").innerHTML = `However, my true journey to personal fulfillment began when I decided to delve into
    the world of programming. Since then, I have been
    committed to dedicating all my time to improving my skills. I am currently enrolled in
    the <b>Full Stack Web Development</b> Course at <a class="l" target="_blank" href="https://www.coderhouse.com/ar/"><i>CoderHouse</i></a>, excelling in areas such as
    <b>HTML, CSS, React, and JavaScript</b> with outstanding results.`;
    document.getElementById("parrafo3").innerHTML = `My projects, presented below,
    are a testament to my dedication and creativity in this constantly evolving field.`;
    document.getElementById("parrafo4").innerHTML = `My vision for the future involves continuing to grow professionally as a programmer, with a special
    interest in <b>UX/UI Design</b>. I firmly believe that
    the combination of my technical skills and my passion for design positions me as a
    unique and highly qualified candidate to tackle the challenges of the current <b>digital world</b>. <br><br>`;

    document.getElementById("proyectos").textContent = "Projects";
    document.getElementById("t1").innerHTML = `
    My first dive into the universe of HTML and CSS (taught by 
    <a class="l" target="_blank" href="https://www.linkedin.com/in/johanna-palo-bael-frontend/">Johanna Palo Bael</a>).
    Margin, padding, display: flex, and discovering the wonder of hover. Passed with outstanding marks,
    and as a bonus, I used the site to upload stories I had written in the past.
    <span style="font-size:medium;"> You can see the calification by clicking <a class="l" target="_blank" href="./certificados/valoración.png"><i>here</i></a>.</span>
  `;
    document.getElementById("l1").textContent = "Visit";


    document.getElementById("t2").textContent = "I decided to practice on my own, and the chosen theme was video games. I had fun coming up with the infinite carousel, grid, a search input... and more hover effects.";
    document.getElementById("l3").textContent = "Visit";


    document.getElementById("t3").textContent = "Like the previous one, I wanted to continue practicing, this time the subject was history, which I thought could make something interesting. The big challenge was to create a dropdown menu that comes out from behind the image slider without breaking everything I had done.";
    document.getElementById("l5").textContent = "Visit";


    // document.getElementById("t4").textContent = "This site (still in development) is the final project of the JavaScript course. It implements iterative loops, conditionals, input and output through prompts, as well as having a fully functional shopping cart.";
    document.getElementById("t4").innerHTML = `
  This site is the final project of the Javascript course (taught by  
  <a class="l" target="_blank" href="https://www.linkedin.com/in/lucasgabrielruiz/">Lucas Gabriel Ruiz</a>).
  It implements iterative loops, conditionals, DOM modifications, and also features a fully functional shopping cart.
  <span style="font-size:medium;"> You can see the calification by clicking <a class="l" target="_blank" href="./certificados/valoraciónjs.png"><i>here</i></a>.</span>
`;
    document.getElementById("l7").textContent = "Visit";


    document.getElementById("t5").textContent = "On my own, I wanted to emulate a clothing E-commerce website, in order to practice grid layout, product presentation, and functionalities like filters and onclick events.";
    document.getElementById("l9").textContent = "Visit";


    document.getElementById("t6").textContent = "I came up with the idea of ​​creating a photographic portfolio where I could continue practicing and refining the skills I had been learning in various courses.";
    document.getElementById("l11").textContent = "Visit";



    document.getElementById("t7").textContent = "This very site, functioning as a digital resume, was an enjoyable challenge to conceive. It encompasses all that I had learned up to that point. I created it with the intention of it being sustainable over time, using extends, mixins, variables, SASS, and JS file imports for better organization. Additionally, it features two themes, one dark and one light, each with their respective animations.";
    document.getElementById("l13").textContent = "Visit";

    document.getElementById("t8").textContent = "Online store for musical instruments with a shopping cart feature. I used fetch to retrieve product data from a JSON file and display it on the DOM through an asynchronous function. Products can be viewed by selecting the corresponding category on the navigation bar. Styles are defined in SCSS for an attractive and responsive presentation of the store."
    document.getElementById("l15").textContent = "Visit"

    document.getElementById("t9").textContent = `In this project, I designed a site with a modern architecture based on React, integrating a variety of interactive and functional components. Using advanced state and effect techniques, each component is designed to efficiently manage local and global states. The application also features sophisticated elements such as APIs, dynamic generation of literary quotes, trivia games, and task list management. Additionally, it implements detailed user interaction tracking through interactive charts, enabling analysis of user behavior. This approach ensures optimal performance and a smooth user experience, essential in modern, scalable web applications.`;
    document.getElementById("l16").textContent = `Visit`;


    // document.getElementById("el").textContent = "Work Experience";

    document.getElementById("cer").textContent = "Certifications";
    document.getElementById("slide1").innerHTML = `<img src="./certificados/htmlenglish.png">`;
    document.getElementById("slide2").innerHTML = `<img src="./certificados/jsEnglish.png">`;

    document.getElementById("tc").textContent = "Contact";
}


document.getElementById("spanishButton").addEventListener("click", function () {
    console.log("Clic en botón de español");
    cambiarIdiomaEspañol();
});

// Evento de click para cambiar a inglés
document.getElementById("englishButton").addEventListener("click", function () {
    console.log("Clic en botón de inglés");
    cambiarIdiomaInglés();
});


//----------