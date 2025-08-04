import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

type downloadButtonProp = {
    children: ReactNode;
    prop?: ButtonHTMLAttributes<HTMLButtonElement>
}

export function BtnDownload({children, prop } : downloadButtonProp){
    return(
        <>
            <button type="submit" {...prop} className={styles.downloadButton}>{children}</button>
        </>
    ) 
}