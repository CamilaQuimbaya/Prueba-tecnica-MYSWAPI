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
                        <p>Este es un párrafo de ejemplo.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corporis! Velit, sequi aliquam. Nobis aperiam hic inventore delectus molestias, impedit aut commodi possimus, neque et corporis. Deserunt numquam voluptas facilis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium voluptatem fugit nostrum placeat, ex maiores voluptates blanditiis ipsa ut voluptate, numquam obcaecati debitis illo neque! Reprehenderit error molestias libero.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus officia dolorum minus est quo, quibusdam velit laboriosam labore repellat iure. Libero velit odio sint animi, tempore ab corrupti a.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio totam mollitia sit, alias quo doloribus ea! Doloribus, repellat similique? Officia, sint. Alias minima ad quibusdam minus distinctio quas dolorum?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti at dolor beatae, ea perspiciatis recusandae fuga officia consequuntur facilis optio provident non eius suscipit sed incidunt molestiae ab quaerat.</p>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default LandingPage;