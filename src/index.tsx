import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutTemplate from 'view/LayoutTemplate'
import { GlobalResetStyle, GlobalStyle } from 'component/common/GlobalStyles'
import reportWebVitals from './reportWebVitals'
import { ConfigProvider } from 'antd'
import { colors } from 'component/common/variables'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <GlobalResetStyle />
      <GlobalStyle />
      <LayoutTemplate />
    </ConfigProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
