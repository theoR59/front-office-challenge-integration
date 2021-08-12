import moment from 'moment'
import {
  Card,
  Carousel,
  Col,
  Row,
  Select,
  Typography
  } from 'antd'
import { nextEvent } from '../data.json'
import { useState } from 'react'
import './NextEvent.css'
/*import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'*/

function Next() {
  moment.locale('fr')
  const { Option } = Select
  const { Title } = Typography
  const { Meta } = Card
  let size: number = 5
  const secondTitle = 'Prochaines épreuves'

  const [selectedSport, setSelectedSport] = useState<Array<String>>(
    nextEvent.map((next) => next.sportTitle)
  )

  const handleChange = (value: string[]) => {
    setSelectedSport(value)
    return (size = value.length)
  }

  const sportTitle = nextEvent.map((next) => (
    <Option key={next.id} value={next.sportTitle} label={next.sportTitle}>
      <div>{next.sportTitle}</div>
    </Option>
  ))

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  }
  const Sports = nextEvent
    .filter((next) => selectedSport.includes(next.sportTitle))
    .map((next) => (
      <div key={next.id}>
        <Col span={20}>
          <Card
            className="carouselCard"
            cover={<img src={next.pictureUrl} alt={next.sportTitle} />}
          >
            <Meta
              title={next.sportTitle}
              description={moment(parseInt(next.date + '000')).format('DD/MM/YYYY - HH:mm')}
            />
          </Card>
        </Col>
      </div>
    ))

  return (
    <>
      <Row justify={'center'}>
        <Col span={20}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Selection des sports"
            defaultValue={nextEvent.map((next) => next.sportTitle)}
            onChange={handleChange}
            optionLabelProp="label"
          >
            {sportTitle}
          </Select>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={20}>
          <Title level={2}>{secondTitle}</Title>
        </Col>
      </Row>
      <div className="carousel-slide">
        <Row justify={'center'}>
          {size !== 0 ? (
            <Carousel {...settings}>{Sports}</Carousel>
          ) : (
            <Col span={20}>
              <h2>Rien n'est selectionné</h2>
            </Col>
          )}
        </Row>
      </div>
    </>
  )
}

export default Next
