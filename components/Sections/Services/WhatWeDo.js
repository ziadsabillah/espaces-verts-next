
import { SectionHeader } from '../../SectionHeader'
import AutoContainer from '../../AutoContainer'
import styled from 'styled-components'
import { Row } from '../../General';


const CustomContainer = styled(AutoContainer)`

    padding-top: 4em;

`;

const WhatWeDo = () => {

    const services = [
        {
            icon: 'fab fa-envira',
            title: 'TAILLE DES ARBRES ET ARBUSTES',
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        },{
            icon: 'fab fa-envira',
            title: 'TAILLE DES ARBRES ET ARBUSTES',
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        },{
            icon: 'fab fa-envira',
            title: 'TAILLE DES ARBRES ET ARBUSTES',
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        },{
            icon: 'fab fa-envira',
            title: 'TAILLE DES ARBRES ET ARBUSTES',
            href: '/',
            description: "Nous fournissons à nos clients toute la gamme de services. Nous réparerons tout dysfonctionnement en des termes record pour que vous n'ayez aucun souci!"
        }
    ]

    return (
        <>
            <CustomContainer>
                <SectionHeader>
                    <h2>QUE FAISONS NOUS?</h2>
                </SectionHeader>
                <Row>

                </Row>
            </CustomContainer>

        </>
    )
}

export default WhatWeDo;