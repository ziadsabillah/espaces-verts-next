import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Sections/Services/ServiceBanner'
import Guarantee from '../components/Sections/Guarantee'
import WhatWeDo from '../components/Sections/Services/WhatWeDo'
import Gallery from '../components/Sections/Gallery'

import services from '../data/services'

export default function Home() {
  return (
    <Layout title="Jardinier">
      <Hero />
      <Services services={services.slice(0, 2)} onHome />
      <Guarantee />
      <WhatWeDo />
      <Gallery />
    </Layout>
  )
}
