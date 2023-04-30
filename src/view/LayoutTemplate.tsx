// import { HashRouter, Route, Routes } from 'react-router-dom'
import { BtnGroup, Btn } from 'component/Button'

const LayoutTemplate = (): JSX.Element => {
  return (
    <article className="article">
      test
      <BtnGroup>
        <Btn type="primary">Primary Btn</Btn>
        <Btn>Default Btn</Btn>
        <Btn type="dashed">Dashed Btn</Btn>
        <Btn type="text">Text Btn</Btn>
        <Btn type="link">Link Btn</Btn>
      </BtnGroup>
      {/* <HashRouter>
        <Routes><Route element={<Home />} path="/" /> </Routes>
      </HashRouter>*/}
    </article>
  )
}

export default LayoutTemplate
