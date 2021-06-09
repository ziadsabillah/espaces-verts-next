import Layout from '../components/Layout'
import Services from '../components/Sections/Services/ServiceBanner'
import services from '../data/services'

export default function ServicesPage() {
    return (
        <>
        <Layout title="Services">
            <Services services={services} />
        </Layout>
        </>
    )
}