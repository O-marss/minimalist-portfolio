import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
   <>
   <footer>
    <div className="container">
            <div className="">
                <div className={styles.footer_brand}>
                    OM
                </div>
            </div>
            <div className="">
                <div className={`${styles.copyright_text}`}>
                © 2024 <span>Omar Mohamed</span> - All Rights Reserved
                </div>
            </div>
    </div>
   </footer>
   
   </>
  )
}
