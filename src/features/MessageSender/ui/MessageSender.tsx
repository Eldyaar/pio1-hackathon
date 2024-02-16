import { Button, Input, Space } from "antd"
import { IChat, MessageInfo, Sender } from "../../../entities/Chat/model/interfaces/Chat.intefaces"
import { SetStateAction, useState } from "react"
import axios from 'axios'

const MessageSender = ({currentChatId, setChats, chats}: {currentChatId: string, setChats: React.Dispatch<SetStateAction<IChat[]>>, chats: IChat[]}) => {

  const [messageInfo, setMessageInfo] = useState<MessageInfo>({
    sender: Sender.YOU,
    date: new Date(),
    message: ''
  })

  const onSubmit = async (currentChatId: string) => {
          
    const url = 'http://localhost:3001/data';
    const data: {  
      tag: string,
      message: string
    } = { 
      tag: currentChatId,
      message: messageInfo.message, 
    };

    try {
      const response = await axios.post(url, data);

      console.log('POST request successful', response.data);
      console.log('posted new message: ', data);
    
    } catch (error) {
      console.error('Error during POST request', error);
    }
  }


  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input size='large' placeholder="Write down your message..." value={messageInfo.message} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageInfo({...messageInfo, message: event.target.value})}/>
      <Button 
        size='large' 
        type="primary" 
        onClick={() => {
          const newChat = {...chats.filter(item => item.chatId === currentChatId)[0]}
          setChats([...chats.filter(item => item.chatId !== currentChatId), {...newChat, chatHistory: [...newChat.chatHistory, messageInfo]}])
          setMessageInfo({
            sender: Sender.YOU,
            date: new Date(),
            message: ''
          })

          let typeOrganization: string = ''
          switch (newChat.chatOptions.organization) {
            case 1: 
              typeOrganization = 'tson'
              break
            case 2: 
              typeOrganization = 'med'
              break
            case 3: 
              typeOrganization = 'tax'
              break
          }

          
          onSubmit(typeOrganization)
      }}>Send</Button>
    </Space.Compact>
  )
}

export default MessageSender