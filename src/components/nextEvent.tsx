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
  } /*
  function onChange(a, b, c) {
    console.log(a, b, c)
  }*/

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
  /*<Carousel {...settings}>{Sports}</Carousel>*/
  const Sports = nextEvent
    .filter((next) => selectedSport.includes(next.sportTitle))
    .map((next) => (
      <Col key={next.id} span={24}>
        <Card
          key={next.id}
          className="carouselCard"
          cover={<img src={next.pictureUrl} alt={next.sportTitle} />}
        >
          <Meta title={next.sportTitle} description={next.date} />
        </Card>
      </Col>
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
      <Row>
        <Col>
          <Title level={2}>{secondTitle}</Title>
        </Col>
      </Row>
      <div className="carousel-slide">
        <Row>
          <Carousel {...settings}>{Sports}</Carousel>
        </Row>
      </div>
    </>
  )
}

export default Next
