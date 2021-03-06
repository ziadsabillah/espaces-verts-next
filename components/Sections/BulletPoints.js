import { Button, Col, Row, Image, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const Section = styled.section`

    padding: 40px 20px 150px 20px;
`;

const List = styled.ul`
    position: relative;
    padding: .8em;
    padding-left: .3em;
    margin-bottom: 0;

    li {
        position: relative;
        color: #242424;
        font-size: 18px;
        padding-left: 2em;
        margin-bottom: 1em;
        font-weight: 600;
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
        max-height: 280px;
`;

const ButtonCustom = styled(Button)`
    background-color: #FE8A01;
    padding: 10px 18px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;

    &:hover {
        background-color: #4e9918;

    }

`;

const BulletPoints = ({ title, description, points, linkName, path }) => {
    return (
        <>
            <Container>
                <Section>
                    <Row>
                        <Col sm={12} md={6}>
                            <h2>{title}</h2>
                            <p>
                                {description}
                            </p>
                            <List>
                                <InView threshold="0.3">
                                    {({ ref, inView }) => (
                                        <motion.div ref={ref}
                                            initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 0.8 }}>
                                            <Row>
                                                {points.map(point => (
                                                    <Col sm={12} md={6}>
                                                        <InView threshold="0.1">
                                                        {({ref, inView}) => (
                                                            <motion.div ref={ref}
                                                                initial={{ opacity: 0, scale: 0.3 }}
                                                                animate={inView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.3}}
                                                                transition={{ duration: 0.8 }}>
                                                                    <li>{point}</li>
                                                                </motion.div>
                                                        )}
                                                        </InView>
                                                    </Col>
                                                ))}

                                            </Row>
                                        </motion.div>
                                    )}
                                </InView>
                                <Row>


                                </Row>
                            </List>
                        </Col>
                        <Col sm={12} md={6}>
                            <AboutImage src="/img/about.png" alt="Qui sommes Nous Image" />
                        </Col>
                        <Col sm={12} md={12}>
                            <ButtonCustom href={path}>{linkName}</ButtonCustom>
                        </Col>
                    </Row>
                </Section>
            </Container>
        </>
    )
}

export default BulletPoints;