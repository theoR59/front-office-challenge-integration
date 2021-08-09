import { Card } from 'antd'
import { Carousel } from 'antd'
import { nextEvent } from '../data.json'
import { Typography } from 'antd'

const { Title } = Typography

const secondTitle = 'Prochaines épreuves'

const Sports = nextEvent.map((next) => (
  <Card key={next.id} bordered={false} style={{ width: 300 }}>
    <img src={next.pictureUrl} alt={next.sportTitle}></img>
    <p> {next.sportTitle} </p>
    <p> {next.date} </p>
  </Card>
))

function CarouselComponent() {
  return (
    <>
      <Title level={2}>{secondTitle}</Title>
      {Sports}
    </>
  )
}

export default CarouselComponent
