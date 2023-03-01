// components
import { TopNavigation } from '../components/header/TopNavigation'

import { useNavigate } from 'react-router'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <TopNavigation />
      <div className="App">
        {/* <Head /> */}
        <div className="template">
          <div className="form">
            <h2>HOMEPAGE</h2>
          </div>
        </div>
      </div>
    </>
  )
}