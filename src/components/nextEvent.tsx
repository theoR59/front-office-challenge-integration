import moment from 'moment'
import {
  Card,
  Carousel,
  Col,
  Row,
  Select,
  Typography
  } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { nextEvent } from '../data.json'
import { useState } from 'react'
import './NextEvent.css'

function Next() {
  moment.locale('fr')
  const { Option } = Select
  const { Title } = Typography
  const { Meta } = Card

  const secondTitle = 'Prochaines épreuves'

  const [selectedSport, setSelectedSport] = useState<Array<String>>(
    nextEvent.map((next) => next.sportTitle)
  )

  const handleChange = (value: string[]) => {
    setSelectedSport(value)
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
      <div>
        <Card
          key={next.id}
          className="carouselCard"
          cover={<img src={next.pictureUrl} alt={next.sportTitle} />}
        >
          <Meta title={next.sportTitle} description={next.date} />
        </Card>
      </div>
    ))

  return (
    /*{ > 0 ? (*/
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
      <Row>
        <Col span={20}>
          <Title level={2}>{secondTitle}</Title>
        </Col>
      </Row>
      <div className="carousel-slide">
        <Row justify={'center'}>
          <Carousel {...settings}>{Sports}</Carousel>
        </Row>
      </div>
    </> /*): (
      <>
      <Row justify={'center'}>
        <Col span={20}><h2>Rien n'est selectionné</h2></Col>
      </Row>
    )}*/
  )
}

export default Next
