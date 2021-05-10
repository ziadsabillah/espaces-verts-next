
import { SectionHeader } from '../../SectionHeader'
import AutoContainer from '../../AutoContainer'
import styled from 'styled-components'
import { Column3, Row } from '../../General';


const Section = styled.section`
    margin: 4em 0 0 0;
    background-color: #f6f6f6;

`;

const CustomContainer = styled(AutoContainer)`
    padding: 4em 0;
    background-color: #f6f6f6;
`;

const CardContainer = styled.div`
    padding: 53px 30px 36px 30px;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 2px 2px 2px 2px;
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 10%);
    height: 100%;

    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    }
`;

const IconBoxWrapper = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

const CardIcon = styled.div`
    margin-bottom: 26px;

    a {
        background-color: #62be1e;
        font-size: 39px;
        border-radius: 50%;
        padding: .5em;
        color: #fff;
        fill: #fff;
        text-decoration: none;
        box-shadow: none;
        display: inline-block;
        line-height: 1;
        transition: all .3s;
        text-align: center;

        i {
            transform: rotate(0deg);
            width: 1em;
            height: 1em;
            position: relative;
            display: block;
        }
    }

`;

const CardContent = styled.div`
    flex-grow: 1;

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 1.44em;
        color: #1e1d24;
    }
    p {
        color: #79787f;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.643em;
    }
`;
const WhatWeDo = () => {

    const services = [
        {
            icon: 'fab fa-envira',
            title: 'TAILLE DES ARBRES ET ARBUSTES',
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        }, {
            icon: 'fab fa-envira',
            title: "ENTRETIEN DU LIT DE JARDIN",
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        }, {
            icon: 'fab fa-envira',
            title: "IRRIGATION ET DRAINAGE",
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        }
    ]

    return (
        <>
            <Section>
                <CustomContainer>
                    <SectionHeader>
                        <h2>QUE FAISONS NOUS?</h2>
                    </SectionHeader>
                    <Row>
                        {services.map((service, index) => (
                            <Column3 key={index}>
                                <CardContainer>
                                    <IconBoxWrapper>
                                        <CardIcon>
                                            <a href='/'>
                                                <i className="fab fa-envira"></i>
                                            </a>
                                        </CardIcon>
                                        <CardContent>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </CardContent>
                                    </IconBoxWrapper>
                                </CardContainer>
                            </Column3>
                        ))}
                    </Row>
                </CustomContainer>
            </Section>
        </>
    )
}

export default WhatWeDo;