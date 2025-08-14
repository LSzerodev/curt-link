import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { TbClipboard } from "react-icons/tb";
import   Footer  from "./components/footer/footer";
import infinity from './img/svg/infinity.svg'
import eye from './img/svg/eye.svg'
import mp4 from './img/svg/music.svg'
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
const cards = [
  {
    svg: infinity,
    title: 'Ilimitado',
    desc: 'Salve quantos vídeos precisar, sem limites ou outras restrições.'
  },
  {
    svg: eye,
    title: "Sem Marca d'água",
    desc: 'Baixe vídeos limpos, sem a marca do TikTok (watermark).'
  },
  {
    svg: mp4,
    title: 'MP4 e MP3',
    desc: 'Escolha se quer baixar o vídeo ou apenas o áudio em alta qualidade.'
  }
]

  const [url, setUrl] = useState('')
  const router = useRouter()
  async function handleEnviarReq(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if(!url){
    alert('preencha o campo!')
    return
  }
  try{
    router.push(`/download?url=${encodeURIComponent(url)}`)
  }catch(err){
    console.error(err)
  }
    

}

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.Container}>
        <div className={styles.Content}>

        <h2>Baixar video tiktok</h2>
        <form className={styles.InputGroup} onSubmit={handleEnviarReq}>
          
            <input 
              type="text"
              className={styles.input}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Cole o link"
            />
            <button type="button" className={styles.pasteButton} >Colar
               <span className={styles.clipboard}><TbClipboard color="#CF4571" size={18}/></span>
            </button>
            <button type="submit" className={styles.downloadButton}>Baixar</button>

        </form>
        </div>

        <div className={styles.blockAds}>

        </div>

        <div className={styles.cards}>
          {
            cards.map((item, index) => (
            <section className={styles.card} key={index}>
              <Image
                src={item.svg}
                alt={item.title}
                className={styles.svg}
              />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </section>
            ))
          }
           </div>
          
          <div>
            <div className={styles.desc}>
              <div className={styles.content}>
                <h1>Baixar video, audio de <span className={styles.gratis}>graca</span></h1>
                <h3>Você salva vídeos do TikTok sem marca d'água (watermark), em MP4 com qualidade HD, em apenas três passos simples.</h3>
              </div>
            </div>

        </div>
          <div className={styles.DescContent}> 
          <div className={styles.contentText}>
            <h2>Como funciona três etapas fáceis</h2>
            <div className={styles.contentDesck}>
              <ol>
                <li><strong>1.</strong> Copie o link do vídeo TikTok (use "Compartilhar" → "Copiar link")</li>
                <li><strong>2.</strong> Cole o link na nossa caixa de entrada</li>
                <li><strong>3.</strong> Clique em "Baixar": o vídeo ou o áudio será gerado e baixado para seu dispositivo automaticamente</li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
