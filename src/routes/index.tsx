import MydSearch from './mydSearch'
import styles from './routes.module.scss'
import { isMobileSafari } from 'react-device-detect'

export default function App() {
  return <div className={styles.app}>{isMobileSafari && <MydSearch />}</div>
}
