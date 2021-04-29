import Hero from '../components/Hero'
import Layout from '../components/Layout'
import CallToActionSection from '../components/Sections/CallToActionSection'
import ProjectSection from '../components/Sections/ProjectsSection'
import Testimonials from '../components/Sections/Testimonials'
import VideoSection from '../components/Sections/VideoSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <ProjectSection />
      <CallToActionSection />
      <Testimonials />
    </Layout>
  )
}
