import { Avatar, List, Typography } from 'antd';
import { IChat, Sender } from '../../model/interfaces/Chat.intefaces';

const Chat = ({chat}: {chat: IChat}): JSX.Element => {


  return (
    <List
      itemLayout="horizontal"
      dataSource={chat.chatHistory}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size='large' src={ item.sender === Sender.AI ? 'https://dataconomy.com/wp-content/uploads/2023/10/zalo-AI-avatar_05.jpg' : 'https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png'} />}
            title={<Typography.Paragraph style={item.sender === Sender.AI ? {color: '#1677ff', fontSize: 18 , lineHeight: '16px'} : {color: 'gray', fontSize: 18 , lineHeight: '16px'}}>{item.sender}</Typography.Paragraph>}
            description={<div style={{display: 'flex', justifyContent: 'space-between'}}><Typography.Paragraph style={{fontWeight: 400, width: '90%'}} >{item.message}</Typography.Paragraph> <Typography.Paragraph style={{fontWeight: 300, width: '5%'}} >{Intl.DateTimeFormat('ru-RU', {hour: 'numeric', minute: '2-digit', 'hour12': true}).format(item.date)}</Typography.Paragraph></div>}
          />
        </List.Item>
      )}
    />
  )
}


export default Chat