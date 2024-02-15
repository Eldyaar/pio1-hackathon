import { Button, Form, Layout, Select, Space, Typography } from "antd"
import { withAntdConfigProvider } from "../providers/withAntdConfProvider"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { ReactNode, useState } from "react"
import { RightOutlined } from '@ant-design/icons'

const AppLayout = ({children}: {children: ReactNode}): JSX.Element => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  type FieldType = {
    organization: number,
    speaker: number
  }

  return (
    <Layout style={{
      minHeight: '100vh'
    }}>
    <Sider collapsed={collapsed} width={'250px'} style={{padding: '15px '}}>
      <Button 
        type="primary" 
        onClick={() => setCollapsed(!collapsed)}
        style={{width: '100%', height: '38px'}}>   
          {collapsed ? <RightOutlined/> : <Typography.Title level={5} style={{color: 'white'}}>Закрыть</Typography.Title>}
      </Button>
    </Sider>
    <Layout>
      <Header style={{padding: '15px 30px', background: '#fff'}}>
        <Form
          layout="inline"
          autoComplete="off"
          name="prompt"
          style={{width: '100%'}}>
            <Form.Item<FieldType> 
              label="Организация"
              name="organization"
              rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select defaultValue={1} style={{width: 130}} options={[
                {value: 1, label: 'ЦОН'},
                {value: 2, label: 'Больницы'},
                {value: 3, label: 'Налоговая'},
              ]}/>
            </Form.Item>
            <Form.Item<FieldType>
              label="Спикер"
              name="speaker"
              rules={[{ required: true, message: 'Please choose speaker' }]}>
              <Select defaultValue={1} style={{width: 130}} options={[
                {value: 1, label: 'Мужской'},
                {value: 2, label: 'Женский'},
              ]}/>
            </Form.Item>
        </Form>
      </Header>

      <Content style={{padding: '0 30px'}}>
        {children}
      </Content>
    </Layout>
  </Layout>
  )
}

export default withAntdConfigProvider(AppLayout)