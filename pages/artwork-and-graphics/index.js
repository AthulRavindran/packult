import Contact from "../../components/contact"
import ContentLayout1 from "../../components/contentLayout1"
import ContentLayout3 from "../../components/contentLayout3"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/valueImprovement.module.scss"

function index() {
    const layout1 = {
        heading: "Artwork & Graphics Management",
        content1: "We understand the importance of visual appeal in packaging and offer top-notch graphic designing service. We have a strong team of creative and graphic designers who work closely with our customers to understand the brief and create visually stunning designs that not only retains the brand essence but also makes them stand out on the shelves. Our creative team is equipped with high-end software to generate CGI and Hero images for your pack and adapt them to various SKUs & Pack formats. Whether you're looking for a minimalist design or something bold and colourful, our team can deliver.",
        imagePath: "/assets/images/artwork-and-graphics/1.png",
        imageName: "Artwork and Graphic Management",
    }

    return (
        <Layout>
            <div style={{
                minHeight: "85vh",
            }} >
                <section className={styles.content1} >
                    <ContentLayout1 data={layout1} />
                </section>
            </div>


            <WorkNumbers />
            <Contact />
        </Layout>
    )
}

export default index