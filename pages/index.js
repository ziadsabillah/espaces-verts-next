import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Sections/Services/ServiceBanner'
import Guarantee from '../components/Sections/Guarantee'
import WhatWeDo from '../components/Sections/Services/WhatWeDo'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Guarantee />
      <WhatWeDo />
    </Layout>
  )
}
