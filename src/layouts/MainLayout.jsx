import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <p>This is the footer page</p>
    </footer>
      
    </>
  )
}

export default MainLayout
