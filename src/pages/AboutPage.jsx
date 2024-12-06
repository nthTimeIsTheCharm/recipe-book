import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-us-container">
      <h1 className="title about-us-title">About Us</h1>

      <p className="paragraph description">
        &nbsp; Somos un IronTeam apasionados por la tecnología y la creatividad,
        formado por Airam, Eleni y Roxana. Y este es nuestro primer proyecto
        juntos, construido con mucho entusiasmo utilizando React. Nuestra página
        está diseñada para ser un espacio donde puedas explorar, crear y editar
        tus recetas favoritas. Queremos que disfrutes cada momento navegando por
        este recetario y encuentres inspiración para llevar nuevas ideas a tu
        cocina. ¡Gracias por acompañarnos en este emocionante inicio! Esperamos
        que esta experiencia sea tan especial para ti como lo es para nosotros
      </p>
      <div className="section-1">
        <div className="member">
          <h2 className="member-title">Airam Santos</h2>

          <p className="paragraph">
            &nbsp; Soy un chico de Tenerife, me gusta quedar con amigos, ir a la
            montana, viajar. Ademas del mundo de los videojuegos, Mi receta
            favorita es la tortilla de patatas, y tambien echo de menos un plato
            tipico de Tenerife que se llama papas arrugadas con mojo picon.
          </p>
        </div>
        <div className="member">
          <h2 className="member-title">Roxana Ferramola</h2>

          <p>
            &nbsp; Soy Venezolana, me encanta hacer senderismo, hacer yoga y
            conocer lugares nuevos, me apasiona la comida, de mi país me gustan
            mucho las arepas y las empanadas, pero también me gusta cocinar
            mucho recetas thailandesas.
          </p>
        </div>
        <div className="member">
          <h2 className="member-title">Eleni Kriezia</h2>

          <p className="paragraph">
            &nbsp; Soy una chica de Grecia, me gusta leer, quedar con amigos y viajar.
             Mi receta favorita son las lentejas a la griega.           
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
