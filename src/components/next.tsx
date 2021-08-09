import { nextEvent } from '../data.json'
import { Select } from 'antd'

const { Option } = Select

function handleChange(value: Array<string>) {
  console.log(`selected ${value}`)
}

const sportTitle = nextEvent.map((next) => (
  <Option value={next.sportTitle} label={next.sportTitle}>
    <div>{next.sportTitle}</div>
  </Option>
))

function NextEvent() {
  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="select one country"
      defaultValue={[]}
      onChange={handleChange}
      optionLabelProp="label"
    >
      {sportTitle}
    </Select>
  )
}

export default NextEvent
