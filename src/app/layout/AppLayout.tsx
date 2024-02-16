import { Button, Empty, Layout, Typography } from "antd"
import { withAntdConfigProvider } from "../providers/withAntdConfProvider"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { useEffect, useState } from "react"
import { RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons'
import MessageSender from "../../features/MessageSender/ui/MessageSender"
import CreateNewChat from "../../features/CreateNewChat/ui/CreateNewChat"
import ChatMenu from "../../entities/Chat/ui/ChatMenu/ChatMenu"
import Chat from "../../entities/Chat/ui/Chat/Chat"
import { IChat } from "../../entities/Chat/model/interfaces/Chat.intefaces"

const AppLayout = (): JSX.Element => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const [chats, setChats] = useState<IChat[]>([])

  const [currentChatId, setCurrentChatId] = useState<string>('')

  return (
    <Layout style={{
      height: '100vh'
    }}>
    <Sider collapsedWidth={0} collapsed={collapsed} width={'250px'} style={{padding: '15px ', position: 'relative'}}>
      <CreateNewChat chats={chats} setChats={setChats}/>
      <ChatMenu chats={chats} setCurrentChatId={setCurrentChatId}/>
    </Sider>
    <div style={{height: '100vh', width: 'auto', display: 'flex', alignItems: 'center'}}>
      <Button
        type="text" 
        onClick={() => setCollapsed(!collapsed)}
        style={{}}>   
          {collapsed ? <RightCircleTwoTone style={{fontSize: '20px'}}/> : <LeftCircleTwoTone style={{fontSize: '20px'}}/>}
      </Button>
    </div>
    <Layout style={{paddingRight: '52px', position: 'relative'}}>
      <Header style={{padding: '15px 30px', background: '#fff'}}>
        <Typography.Title level={3}>{'Chat'}</Typography.Title>
      </Header>

      <Content style={{padding: '0 30px', overflowY: 'scroll', height: '60vh', background: '#eaeaea'}}>
        {currentChatId ? <Chat chat={chats.filter(item => item.chatId === currentChatId)[0]}/> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </Content>

      <Footer style={{ width: '100%', margin: '20px 0'}}>
        <MessageSender currentChatId={currentChatId} setChats={setChats} chats={chats}/>
      </Footer>
    </Layout>
  </Layout>
  )
}

export default withAntdConfigProvider(AppLayout)