import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import styles from './routes.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<div>about</div>} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}
