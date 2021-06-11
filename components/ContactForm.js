import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components";
import { Form, FormGroup, Input, SubmitButton, TextArea } from './General'

import Logo from './Navbar/Logo';

const ContactSection = styled.section`
    position: relative;
    padding: 90px 0px 60px;
    background-color: #f8f8f8;
`;


const LeftColumn = styled.div`
    @media (min-width: 992px) {
        flex: 66.666667%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

`;

const RightColumn = styled.div`
    @media (min-width: 992px) {
        flex: 33.33333%;
    }

    @media (max-width: 500px) {
        margin-top: 1.4em;
        padding: 10px;
    }
    flex: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const InfoTitle = styled.h2`
    position: relative;
    color: #242424;
    font-size: 26px;
    font-weight: 600;
    padding-bottom: 12px;
    margin-bottom: 40px;

    &::after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 40px;
        height: 2px;
        background-color: #4E9918;
    }
`;

const InfoList = styled.ul`
    position: relative;

    li {
        position: relative;
        margin-bottom: 15px;
        color: #242424;
        font-weight: 500;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
`;

const SmallHeader = styled.h3`
    
    position: relative;
    color: #242424;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4em;
    margin-top: 50px;
`;

const Times = styled.div`
    position: relative;
    color: #797979;
    font-size: 15px;
    font-weight: 500;
    padding-left: 40px;
    margin-top: 8px;
    line-height: 2em;
    font-family: 'Poppins', sans-serif;
`;

const ContactForm = () => {
    return (
        <>
            <ContactSection>
                <Container>
                    <Row className="clearfix">
                        <Col sm={12} md={8}>
                            <Form>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm={12} md={6}>

                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Votre Nom" />
                                        </FormGroup>
                                    </Col>


                                    <Col sm={12} md={6}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="tel"
                                                placeholder="Telephone" />
                                        </FormGroup>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                name="subject"
                                                placeholder="Sujet" />
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <FormGroup>
                                    <TextArea
                                        name="message"
                                        placeholder="Ecrire votre message..."
                                    />
                                </FormGroup>
                                <SubmitButton>
                                    Envoyer
                                </SubmitButton>
                            </Form>
                        </Col>
                        <Col sm={12} md={4}>
                            <InfoList>
                                <li>Avenue Mohamed V</li>
                                <li>+212 6 13 04 93 93</li>
                                <li>exemple@exemple.com</li>
                            </InfoList>
                            <SmallHeader>Horaires de travail</SmallHeader>
                            <Times>
                                Lun-Merc : 10:00 au 18:00
                                <br />
                                Jeu-Vend : 10:00 au 14:00
                                <br />
                                Sam-Dim : 10:00 au 12:00

                            </Times>
                        </Col>
                    </Row>
                </Container>
            </ContactSection>

        </>
    )
}

export default ContactForm;