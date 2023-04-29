import { HashRouter, Route, Routes } from 'react-router-dom'

// import Nav from './layout/Nav'
// import Home from './Home'

const LayoutTemplate = (): JSX.Element => {
  return (
    <article className="aha-article">
      {/* <Nav /> */}
      <HashRouter>
        <Routes>{/* <Route element={<Home />} path="/" /> */}</Routes>
      </HashRouter>
    </article>
  )
}

export default LayoutTemplate
