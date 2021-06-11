import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";

export default function ContactPage() {
    return (
        <>
        <Layout title="Contact">
            <SectionHeader>
                <h2>Contactez-nous</h2>
            </SectionHeader>
            <ContactForm />
        </Layout>
        </>
    )
}
