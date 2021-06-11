import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Sections/Services/ServiceBanner'
import Guarantee from '../components/Sections/Guarantee'
import WhatWeDo from '../components/Sections/Services/WhatWeDo'
import Gallery from '../components/Sections/Gallery'

import services from '../data/services'
import BulletPoints from '../components/Sections/BulletPoints'
import WhyChooseUs from '../components/About/whychooseus'
import { Container } from 'react-bootstrap'

export default function Home() {
  const points = [
    `Irrigation et drainage`,
    "Entrerien du lit de jardin",
    "Taille des arbres et arbustes",
    "Déneigement et déglaçage",
    "Nettoyage de printemps et d'automne",
    "Pierre et aménagement paysager"
  ]
  return (
    <Layout title="Jardinier">
      <Hero />
      <Services services={services.slice(0, 2)} />
      <Guarantee />
      <WhatWeDo />
      <Gallery />
      <BulletPoints title="PLUS DE SERVICES" description="Consultez la liste complète des services d'aménagement paysager que nous offrons." points={points} linkName="Telecharger notre brochure" path='/download' />
      <Container>
        <WhyChooseUs />

      </Container>
    </Layout>
  )
}
