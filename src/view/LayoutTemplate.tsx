import { HashRouter, Route, Routes } from 'react-router-dom'

import Demo from 'view/Demo'
import { Header } from 'component/Header'

const LayoutTemplate = (): JSX.Element => {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route element={<Demo />} path="/demo" />
        </Routes>
      </HashRouter>
    </>
  )
}

export default LayoutTemplate
