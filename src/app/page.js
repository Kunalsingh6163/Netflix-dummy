import Image from 'next/image'
import styles from './page.module.css'
import Herosection from './component/Herosection'
import sticker from '../../public/sticker.png'
import Sideimg from '../../public/Sideimg.jpg'

export default function Home() {
  return (
    <>
      <div className={styles.mainimg}>
        {/* <h1>Welcome to Homepage</h1> */}
        <Herosection title={'Welcome to Home'} imgUrl={Sideimg} />
      </div>
    </>
  )
}
