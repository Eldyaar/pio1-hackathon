import { Button, Input, Space } from "antd"
import { IChat, MessageInfo, Sender } from "../../../entities/Chat/model/interfaces/Chat.intefaces"
import { SetStateAction, useState } from "react"

const MessageSender = ({currentChatId, setChats, chats}: {currentChatId: string, setChats: React.Dispatch<SetStateAction<IChat[]>>, chats: IChat[]}) => {

  const [messageInfo, setMessageInfo] = useState<MessageInfo>({
    sender: Sender.YOU,
    date: new Date(),
    message: ''
  })

  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input size='large' placeholder="Write down your message..." value={messageInfo.message} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageInfo({...messageInfo, message: event.target.value})}/>
      <Button size='large' type="primary" onClick={() => {
        const newChat = {...chats.filter(item => item.chatId === currentChatId)[0]}
        setChats([...chats.filter(item => item.chatId !== currentChatId), {...newChat, chatHistory: [...newChat.chatHistory, messageInfo]}])
        setMessageInfo({
          sender: Sender.YOU,
          date: new Date(),
          message: ''
        })
      }}>Send</Button>
    </Space.Compact>
  )
}

export default MessageSender