import styled from 'styled-components'
import { Button } from 'antd'
import { colors } from './common/variables'

export const BtnGroup = styled.div`
  > .ant-btn:not(:last-child) {
    margin-right: 8px;
  }
`

export const Btn = styled(Button)`
  // color: ${colors.primary};

  // or
  // &.ant-btn {
  //   color: ${colors.primary};
  // }
`
