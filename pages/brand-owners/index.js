import Layout from "../../components/layout";
import styles from "../../styles/brand-owners.module.scss";
import { data } from "../../data/brand-owners.js";
import CardContent from "../../components/cardContent";
import WorkNumbers from "../../components/workNumbers";
import Contact from "../../components/contact";
import Image from "next/image";
import Particles from "../../components/particles";
export default function index() {
    return (
        <Layout>
            
            <div className={styles.lap_particles}>
            <Image src="/assets/images/vectors/3.png" alt="Brand Owners" width={1000} height={1000}
                style={{ position: "absolute", top: "0", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
            />
                <Particles color={"#F1C644"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="10vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="60vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.tablet_particles}>
            <Image src="/assets/images/vectors/3.png" alt="Brand Owners" width={1000} height={1000}
                style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
            />
                <Particles color={"#F1C644"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="70vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.mobile_particles}>
            <Image src="/assets/images/vectors/3.png" alt="Brand Owners" width={1000} height={1000}
                style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
            />
                <Particles color={"#F1C644"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="150vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="240vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.brandowners} >


                <h1>Brand Owners</h1>
                <p>
                Packult has been providing innovative Packaging solutions to reputed FMCG, Cosmetics, Pharmaceuticals, Consumer Durables, Automotives, Chemicals, Agro-Chemicals and other industries.
                </p>

                <div className={styles.brandowners__content} >
                    {
                        data.map((item, index) => {
                            return <CardContent key={index} data={item} />
                        })

                    }
                </div>

            </div>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}
