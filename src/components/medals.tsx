import { Col, Row, Table } from 'antd'
import { medals } from '../data.json'
import { Typography } from 'antd'
import { useEffect, useState } from 'react'

const { Title } = Typography

const main: string = 'Médailles'

interface countryMedal {
  key: number
  id: String
  country: String
  gold: Number
  silver: Number
  bronze: Number
  total: Number
}

const columns = [
  {
    title: 'Pays',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Or',
    dataIndex: 'gold',
    key: 'gold',
    sorter: (a: any, b: any) => a.gold - b.gold,
  },
  {
    title: 'Argent',
    dataIndex: 'silver',
    key: 'silver',
    sorter: (a: any, b: any) => a.silver - b.silver,
  },
  {
    title: 'Bronze',
    dataIndex: 'bronze',
    key: 'bronze',
    sorter: (a: any, b: any) => a.bronze - b.bronze,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: '',
    sorter: (a: any, b: any) => a.total - b.total,
  },
]

function Medals() {
  const [data, setData] = useState<Array<countryMedal>>([])

  useEffect(() => {
    const data: Array<countryMedal> = []
    medals.map((medal, index) => {
      return data.push({
        key: index,
        id: medal.key,
        country: medal.country,
        gold: medal.medals.gold,
        silver: medal.medals.silver,
        bronze: medal.medals.bronze,
        total: medal.medals.gold + medal.medals.silver + medal.medals.bronze,
      })
    })
    setData(data)
  }, [])

  return (
    <>
      <Row justify={'center'}>
        <Col span={20}>
          <Title level={2}>{main}</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
      </Row>
    </>
  )
}

export default Medals
