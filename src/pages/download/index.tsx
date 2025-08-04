import  BtnDownload  from '../components/btn/btn'
import  Footer  from '../components/footer/footer'
import styles from './download.module.css'
import Image from 'next/image'

import like from '../img/svg/like.svg'
import comments from '../img/svg/comments.svg'
import share from '../img/svg/share.svg'


export default function Download(){
    const donwload = [
        {
            title: "Sem marca d'agua HD"
        },
        {
            title: "Sem marca d'agua"
        },
        {
            title: 'Download MP4'
        }
    ]
    const detailsReels = [
  {
    svg: like,
    title: '3.4K',
  },
  {
    svg: comments,
    title: "61",
  },
  {
    svg: share,
    title: '371',
  }
]


    return(
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.LogoUser}></div>
                <div className={styles.ContentUser}>
                    <h2>Name user</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has </p>
                    <span>#algo #arromba #gay #algo #arromba #gay #algo #arromba #gay #algo #arromba #gay #algo #arromba #gay #algo</span>
                    <div className={styles.ContentDetailsUser}>
                        {
                            detailsReels.map((item, index) => (
                                <section key={index} className={styles.detailsUser}>
                                    <Image
                                        src={item.svg}
                                        alt={item.title}
                                    />  
                                    <span>{item.title}</span>
                                </section>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.download}>
                    <form className={styles.form}>
                        {
                            donwload.map((item,index) => (
                                <BtnDownload key={index}>{item.title}</BtnDownload>
                            ))
                        }
                        
                    </form>
                </div>
            </div>
                <div className={styles.blockAds}>
                    <ins
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-2589071339817154"
                        data-ad-slot="auto" // Pode deixar "auto" ou usar um slot específico
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    ></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
            <Footer />
        </div>
    )
}