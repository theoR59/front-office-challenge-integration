import { Typography } from 'antd'
import './mainTitle.css'

const { Title } = Typography

const main: string = 'JO 2020'

function MainTitle() {
  return (
    <>
      <Title className="mainTitle">{main}</Title>
    </>
  )
}

export default MainTitle
