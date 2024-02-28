import { useLocation, useOutlet, } from 'react-router-dom';
import { routes } from './routes.jsx'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

//styling
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './styles.css'
// this was provided in react-community transition group URL provided in the README, integrated into code for animated pages
function App() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <Header />
      <main>
      <Navbar />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </>
  )
}

export default App;