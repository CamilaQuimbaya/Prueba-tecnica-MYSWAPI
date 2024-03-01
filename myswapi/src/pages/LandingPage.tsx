import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import darthBanner from '../assets/darthbanner.png';
import '../styles/pages/landing.css';


const LandingPage: React.FC = () => {
    return (
        <div>

            <Container>
            <Row>
                
                <Col md={6}>
                <div className="left-section landingImgDiv">
                    <div className="package">
                        <span className="package2">
                        <img src={darthBanner} alt="Descripción de la imagen" className="imgBanner img-fluid" />
                        </span>
                    </div>
                </div>
                </Col>
                <Col md={6}>
                <div className="right-section myWrapper ">
                    <div className="landingtextDiv">
                        <h2 className="tittleLanding">STAR WARS API</h2>
                        <p>Domino el Arte del Desarrollo: Frontend con React y Backend con Actitud</p>
                        <p>Como desarrolladora Frontend, me considero una fanática de React. ¿Qué puedo decir? ¡Me encanta construir interfaces de usuario que sean fluidas, interactivas y estéticamente atractivas! Mi experiencia con React me ha convertido en una experta en la creación de componentes reutilizables y en la gestión eficiente del estado de la aplicación. ¿Redux? ¡Lo manejo como un jefe! Y no puedo olvidar mencionar mi obsesión por hacer que todo sea responsive. No hay nada mejor que ver cómo se ajusta perfectamente en todos los dispositivos.</p>
                        <p>Pero no me limito al frontend. ¡También me lanzo al mundo del backend con Node.js y Express! Me encanta construir APIs sólidas y escalables que alimenten mis aplicaciones frontend. Ya sea una base de datos relacional o NoSQL, estoy lista para modelar y administrar datos como una profesional. Y, por supuesto, la seguridad y el rendimiento son mis prioridades número uno. ¿Quién dice que no puedes ser genial en ambos lados del desarrollo?</p>
                        <p>Una de las cosas que más disfruto es trabajar en equipo. Me encanta colaborar con diseñadores, otros desarrolladores y cualquier otra persona que se interese en el proyecto. Creo que la comunicación clara y la buena onda son la clave para un trabajo exitoso. Además, siempre estoy buscando formas de mejorar y aprender cosas nuevas. ¡Porque nunca se sabe cuándo una nueva herramienta o técnica podría hacer que mi vida como desarrolladora sea aún más emocionante!</p>
                        <p> soy una entusiasta del desarrollo frontend con React y una guerrera del backend con Node.js y Express. Pero lo más importante, soy una apasionada del aprendizaje y la colaboración. Así que, si estás buscando a alguien que pueda llevar tu proyecto al siguiente nivel, ¡aquí estoy!</p>
                        
                    </div>
                </div>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default LandingPage;