import { Card } from 'antd'
import { Carousel } from 'antd'
import { nextEvent } from '../data.json'
import { Typography } from 'antd'

const { Title } = Typography

const secondTitle = 'JO 2020'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const Sports = nextEvent.map((next) => (
  <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <img src={next.pictureUrl} alt={next.sportTitle}></img>
      <p> {next.sportTitle} </p>
      <p> {next.date} </p>
    </Card>
  </div>
))

function CarouselComponent() {
  return (
    <>
      <Title>{secondTitle}</Title>
      <Carousel>{Sports}</Carousel>
    </>
  )
}

export default CarouselComponent
