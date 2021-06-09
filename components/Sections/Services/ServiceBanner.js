import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components'
import AutoContainer from '../../AutoContainer';



const ServiceSection = styled.section`
    padding: 81px 0px;
    position: relative;
    box-sizing: border-box;
`;

const CustomRow = styled(Row)`
    width: 100%;
`;



const Col50 = styled.div`
    width: 100%;
    position: relative;
    min-height: 1px;
    display: flex;
    @media (min-width: 768px ) {
        width: 50%;
    }
`;

const ServiceBannerBG = styled.div`
    max-height: 700px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    background-image: url("https://ld-wp73.template-help.com/wordpress/prod_11363/v2/wp-content/uploads/2019/08/home-1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: space-evenly;

    @media only screen and (max-width: 767px) {
        padding: 1em;
        margin: 1em;
    }

    border-radius: 2px 2px 2px 2px;
    width: 100%;

    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin: 0px 20px 0px 9px;
    padding: 38px 173px 42px 40px;
`;


const ServiceBannerTextFirst = styled.div`
    width: 100%;
    position: relative;

    margin-bottom: .7em;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44em;
`;

const ServiceBannerTextSecond = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: .7em;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.3em;
`;

const ServiceBannerParagraph = styled.div`
    margin-bottom: .7em;
    position: relative;

    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65em;
    width: 74%;
`;

const CtaBtnContainer = styled.div`
    width: 100%;
    position: relative;
    text-align: left;
    box-sizing: border-box;
`;

const Button = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: .48px;
    fill: #4e9918;
    color: #4e9918;
    background-color: #ffffff;
    border-radius: 2px 2px 2px 2px;
    padding: 13px 30px;
    width: 60%;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #FEAB48;
        transition: background 0.5s ease-in-out, color 0.4s ease-in-out;

    }
`;

const ButtonContentWrapper = styled.span`
    text-decoration: inherit;
    display: flex;
    justify-content: center;
`;

const ButtonText = styled.span`
    text-decoration: inherit;
    flex-grow: 1;
    order: 10;
    display: inline-block;
     
    a {
        text-decoration: none;
        color: #4e9918;
        &:hover {
            color: #fff;
            text-decoration: none;
        }
    }
`;

const ColumnGap = styled.div`
    padding: 0px 20px 0px 20px;
`;

const ColumnWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnContent = styled.div`
    margin-bottom: 20px;
    width: 100%;
    position: relative;
`;

const ImageFigure = styled.div`
    margin: 0;
    display: inline-block;

    img {
        height: auto;
        max-width: 100%;
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
`;

const TextContent = styled.div`
    width: 100%;
    text-align: left;
    h3 {
        margin: 15px 0;
        color: #232323;

        @media (min-width: 1200px) {
            font-size: 22px;
        }
    }
    p {
        color: #79787F;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.64em;
        margin: 0;

    }
`;

const ServiceDetailBtnWrapper = styled.div`
    width: 100%;
    position: relative;

`;

const BtnContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

const Btn = styled.a`
    text-decoration: none;
    box-shadow: none;
    background-color: #02010100;
    opacity: 1;
    color: #FE8A01;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 0.48px;
    text-align: left;
    order: 1;

    &:hover {
        cursor: pointer;
    }
`;






const Services = ({ services }) => {
    return (
        <>
            <ServiceSection>
                <AutoContainer>
                    <Row>
                        <Col50>
                            <ServiceBannerBG>
                                <ServiceBannerTextFirst className="clearfix">
                                    ON VOUS OFFRE
                            </ServiceBannerTextFirst>
                                <ServiceBannerTextSecond className="clearfix">
                                    DES SERVICES EXPETIONNEL
                            </ServiceBannerTextSecond>
                                <ServiceBannerParagraph>
                                    Nous offrons une large gamme de services d'aménagement paysager pour créer une atmosphère
                                    belle et confortable dans votre jardin.
                                    Nos experts travaillent avec les plantes avec soin et attention.
                            </ServiceBannerParagraph>
                                <CtaBtnContainer>
                                    <Button>
                                        <ButtonContentWrapper>
                                            <ButtonText>
                                                <a href="/projects"> nos réalisations</a>
                                            </ButtonText>
                                        </ButtonContentWrapper>
                                    </Button>
                                </CtaBtnContainer>
                            </ServiceBannerBG>
                        </Col50>
                        <Col50>
                            <CustomRow>
                                {services?.slice(0, 4).map(service => (
                                    <Col sm={12} md={6}>
                                        <ColumnWrap>
                                            <ColumnContent>
                                                <ImageFigure>
                                                    <img src='/img/service-1.jpeg' alt="Plant Removal" />
                                                </ImageFigure>
                                                <TextContent>
                                                    <h3>{service.title}</h3>
                                                    <p>
                                                        {service.description}
                                                    </p>
                                                </TextContent>
                                            </ColumnContent>
                                        </ColumnWrap>
                                    </Col>
        
                                ))}
                            </CustomRow>
                        </Col50>
                    </Row>
                    <CustomRow>
                        {services?.slice(4, services.length).map(service => (
                            <Col sm={12} md={4}>
                            <ColumnWrap>
                                <ColumnContent>
                                    <ImageFigure>
                                        <img src='/img/service-1.jpeg' alt="Plant Removal" />
                                    </ImageFigure>
                                    <TextContent>
                                        <h3>{service.title}</h3>
                                        <p>
                                            {service.description}
                                        </p>
                                    </TextContent>
                                </ColumnContent>
                            </ColumnWrap>
                        </Col>
                        ))}
                    </CustomRow>
                </AutoContainer>
        </ServiceSection>
        </>
    )
}


export default Services