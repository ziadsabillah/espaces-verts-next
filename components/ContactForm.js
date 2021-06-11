import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components";
import { Form, FormGroup, Input, SubmitButton, TextArea } from './General'

const ContactSection = styled.section`
    position: relative;
    padding: 90px 0px 60px;
    background-color: #f8f8f8;
`;

const ColCentered = styled(Col)`
    @media (max-width: 767px) {
        text-align: center;
        margin: 2em auto;
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
                        <ColCentered sm={12} md={4}>
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
                        </ColCentered>
                    </Row>
                </Container>
            </ContactSection>

        </>
    )
}

export default ContactForm;