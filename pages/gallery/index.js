import Image from 'next/image'
import { useEffect, useState } from 'react'
import Contact from '../../components/contact'
import Layout from '../../components/layout'
import WorkNumbers from '../../components/workNumbers'
import styles from '../../styles/gallery.module.scss'
import { useRouter } from 'next/router'
import { ROUTES } from '../../common/routes'

function Index() {

    const [loading, setloading] = useState(true)
    const [images, setimages] = useState([])

    const router = useRouter()

    useEffect(() => {

        fetch('api/our-work/get')
            .then(res => res.json())
            .then(data => {
                setimages(data)
                setloading(false)
            })
            .catch(err => console.log(err))


    }, [])

    return (
        <Layout>
            <div className={styles.ourWork} >

                {/* header */}
                <div className={styles.header}>
                    <div className={styles.text} >
                        <h1>Our</h1>
                        <h1>Work</h1>
                        <p>We pride ourselves over our quality and skill. These are a few samples of our best works which not only satisfies the demands of the client but exceeds their expectations.</p>
                    </div>
                    <Image src="/assets/images/gallery/1.png" alt="Gallery" width={1000} height={1000} />
                </div>
                {/* gallery */}
                {
                    loading ? <h2>Loading...</h2> :
                        <div className={styles.gallerys}>
                            {
                                images.length ? images.map((image, index) => (
                                    <div key={index} className={styles.image} onClick={() => {
                                        router.push(ROUTES.OUR_WORKS + image.id)
                                    }} >
                                        <Image src={image.image2} alt={image.title} width={1000} height={1000} />
                                        <div className={styles.overlay}>
                                            <h2>{image.title}</h2>
                                        </div>
                                    </div>
                                )) : null
                            }
                        </div>
                }

                <WorkNumbers />
                <Contact />
            </div>

        </Layout>
    )
}

export default Index
