import BtnDownload from '../components/btn/btn';
import Footer from '../components/footer/footer';
import styles from './download.module.css';
import Image from 'next/image';
import like from '../img/svg/like.svg';
import comments from '../img/svg/comments.svg';
import share from '../img/svg/share.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

// The API will return a single video object, not an array
type videoProp = {
    Username: string;
    Likes: string;
    Comments: string;
    Shares: string;
    Description: string;
    Hashtags: string;
    // Add any other properties your API returns, like an avatar URL
};

export default function Download() {
    const downloadOptions = [
        { title: "Sem marca d'agua HD" },
        { title: "Sem marca d'agua" },
        { title: 'Download MP4' }
    ];

    const router = useRouter();
    // Initialize state with `null` instead of `undefined` to be more explicit
    const [video, setVideo] = useState<videoProp | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Ensure router is ready and query.url exists
        if (!router.isReady) return;

        const { url } = router.query;

        async function fetchVideoData() {
            if (url) {
                try {
                    setLoading(true);
                    setError(null);
                    // The API call happens here, on the client-side, after the page loads
                    const response = await axios.post('https://myapitiktok-production.up.railway.app', { url });
                    console.log(response)
                    
                    if (response.data && response.data.success) {
                        setVideo(response.data.data);
                    } else {
                        throw new Error(response.data.message || 'Failed to fetch video data.');
                    }

                } catch (err: any) {
                    console.error('API Error:', err);
                    setError(err.message || 'An unexpected error occurred.');
                } finally {
                    setLoading(false);
                }
            } else {
                // Handle case where URL is missing
                setLoading(false);
                setError("No video URL provided.");
            }
        }

        fetchVideoData();
    }, [router.isReady, router.query]); // Depend on router.isReady and router.query

    if (loading) {
        return <div className={styles.Container}><p>Carregando informações do vídeo...</p></div>;
    }

    if (error) {
        return <div className={styles.Container}><p>Erro: {error}</p></div>;
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                {/* Conditionally render only when the 'video' object exists */}
                {video && (
                    <div className={styles.ContentUser}>
                        {/* Assuming your API provides an Avatar URL. If not, use a placeholder */}
                        <div className={styles.LogoUser}>
                           {/* <Image src={video.Avatar} alt={video.Username} width={50} height={50} /> */}
                        </div>
                        <p>{video.Description}</p>
                        <span>{video.Hashtags}</span>

                        <div className={styles.ContentDetailsUser}>
                           {/* You can now dynamically show stats from the API */}
                           <span><Image src={like} alt="likes" /> {video.Likes}</span>
                           <span><Image src={comments} alt="comments" /> {video.Comments}</span>
                           <span><Image src={share} alt="shares" /> {video.Shares}</span>
                        </div>
                    </div>
                )}

                <div className={styles.download}>
                    <form className={styles.form}>
                        {downloadOptions.map((item, index) => (
                            <BtnDownload key={index}>{item.title}</BtnDownload>
                        ))}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}