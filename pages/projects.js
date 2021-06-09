import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import Layout from '../components/Layout';
import {SectionHeader} from '../components/SectionHeader'
import ProjectGallery from '../components/Sections/ProjectGallery';


const Projects = () => {
    return (
        <>
        <Layout title="Nos Projets">
            <Container>
                <SectionHeader>
                    <h2>Réalisations</h2>
                    <p>
                    Nous sommes fiers de vous montrer nos projets réalisés avec toutes nos compétences et notre professionnalisme.
                    </p>
                </SectionHeader>
                <ProjectGallery />
            </Container>
            
        </Layout>
        </>
    )
}

export default Projects;