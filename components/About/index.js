import styled from 'styled-components';
import { Container, Row, Col, Image } from "react-bootstrap";
import { SectionHeader } from "../SectionHeader";
import WhyChooseUs from './whychooseus';


const AboutSection = styled.section`

    padding-bottom: 150px;
    padding-top: 40px;

`;


const List = styled.ul`
    position: relative;

    li {
        position: relative;
        color: #242424;
        font-size: 20px;
        padding-left: 40px;
        margin-bottom: 15px;
    }

    li::before {
        position: absolute;
        content: ' ';
        background: url('/icons/check.png') center top;
        background-repeat: no-repeat;
        background-size: contain;
        left: 0px;
        top: 0px;
        height: 20px;
        width: 20px;
        line-height: 1em;
        font-size: 18px;

    }
`;

const AboutImage = styled(Image)`
        max-width: 100%;
    
`;

export default function About() {
    return (
        <Container>
            <AboutSection>

                <SectionHeader>
                    <h2>Qui sommes nous?</h2>
                </SectionHeader>
                <Row>
                    <Col sm={12} md={6}>
                        <h2>Nous sommes Jardinier SARL.</h2>
                        <p>
                            Nous sommes une équipe d'experts professionnels
                            et qualifiés dans toutes les sphères domestiques.
                            Nous offrons une large gamme de services et en même
                            temps, nous sommes toujours heureux de vous aider
                            pour tous les besoins domestiques non conventionnels :
                        </p>
                        <List>
                            <li>
                                Élagage d'arbres et d'arbustes
                            </li>
                            <li>
                                Entretien du lit de jardin
                            </li>
                            <li>
                                Irrigation & Drainage
                            </li>
                            <li>
                                Entretien de la pelouse et du jardin
                            </li>
                            <li>
                                Planting & Removal
                            </li>
                            <li>
                                Déneigement et déglaçage
                            </li>
                        </List>
                    </Col>
                    <Col sm={12} md={6}>
                        <AboutImage src="/img/about.png" alt="Qui sommes Nous Image" />
                    </Col>
                </Row>
            </AboutSection>
            <Container>
                <WhyChooseUs />

            </Container>
        </Container>
    )
}