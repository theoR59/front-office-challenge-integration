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
    nextArrow: <RightCircleOutlined />,
    prevArrow: <LeftCircleOutlined />,
  }
  const Sports = nextEvent
    .filter((next) => selectedSport.includes(next.sportTitle))
    .map((next) => (
      <Card
        key={next.id}
        className="carouselCard"
        cover={<img src={next.pictureUrl} alt={next.sportTitle} />}
      >
        <Meta
          title={next.sportTitle}
          description={moment(parseInt(next.date + '000')).format('DD/MM/YYYY - HH:mm')}
        />
      </Card>
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
      <Row justify={'center'}>
        {selectedSport.length === 0 ? (
          <Col>
            <h2>Aucune épreuve de prévue</h2>
          </Col>
        ) : (
          <div className="slider">
            <Carousel {...settings}>{Sports}</Carousel>
          </div>
        )}
      </Row>
    </>
  )
}

export default Next
