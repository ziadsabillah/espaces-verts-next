import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import Layout from '../components/Layout';
import {SectionHeader} from '../components/SectionHeader'


const Projects = () => {
    return (
        <>
        <Layout title="Nos Projets">
            <Container>
                <SectionHeader>
                    <h2>Réalisations</h2>
                    <p>lorem ipsum</p>
                </SectionHeader>
            </Container>
        </Layout>
        </>
    )
}

export default Projects;