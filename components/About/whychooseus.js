import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components'
import { IoIosCash, IoMdMedal, IoMdTime, } from 'react-icons/io'
import {AiOutlineStar} from 'react-icons/ai';
import { SectionHeader } from '../SectionHeader';
const Section = styled.section`

    position: relative;
    padding: 50px 0;
`;

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Icon = styled.div`
    margin: 1.4em 0;

`;

const Title = styled.h4`
    font-size: 20px;
    color: #242424;

`;
const Paragraph = styled.p`
    font-style: 14px;
    color: #79787f;
`;

const data = [
    {
        id: 0,
        title: 'Toujours Disponible',
        icon: <IoMdTime color="green" size={80} />,
        description: `We accept requests and phone calls 24/7 so you could resolve any problem whenever you need. Our emergency team will be at your place to fix the breakdown at short notice.`
    },
    {
        id: 1,
        title: 'Agents qualifiés',
        icon: <IoMdMedal color="green" size={80} />,
        description: `
        Tous les membres de notre équipe sont des agents hautement qualifiés, instruits et compétents. Tous sont formés selon les dernières technologies. Nos débutants travaillent avec des collègues expérimentés pour étudier tous les détails.
        `
    },
    {
        id: 2,
        title: 'Des prix équitables',
        icon: <IoIosCash color="green" size={80} />,
        description: `
        Nos prix sont à la fois justes et abordables pour tous. Nous offrons un système de remise flexible afin que vous puissiez utiliser n'importe quel service dont vous avez besoin.
        `
    },
    {
        id: 3,
        title: 'Meilleures offres',
        icon: <AiOutlineStar color="green" size={80} />,
        description: `
        Nous offrons des promos sur les services les plus populaires et sur les services saisonniers, vous pouvez donc certainement recevoir de l'aide sans délai.
        `
    }
]

const WhyChooseUs = () => {
    return (
        <>
            <Section>
                <SectionHeader>
                    <h2>Pourquoi nous?</h2>
                </SectionHeader>
                <Row>
                    {data?.map(item => (
                        <Col key={item.id} sm={12} md={3}>
                            <CardWrapper>
                                <Icon>
                                    {item.icon}
                                </Icon>
                                <Title>{item.title}</Title>
                                <Paragraph>
                                    {item.description}
                                </Paragraph>
                            </CardWrapper>
                        </Col>
                    ))}
                </Row>
            </Section>

        </>
    )
}

export default WhyChooseUs;