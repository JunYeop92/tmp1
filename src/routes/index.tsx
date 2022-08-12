import MydSearch from './mydSearch'
import styles from './routes.module.scss'
// import { isMobileSafari } from 'react-device-detect'
import Tmp from './Tmp'

export default function App() {
  return (
    <div className={styles.app}>
      <MydSearch />
      <Tmp />
    </div>
  )
}
