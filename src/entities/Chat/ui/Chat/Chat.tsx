import { Avatar, List, Typography } from 'antd';
import { MessageInfo } from '../../model/interfaces/Chat.intefaces';

const data: MessageInfo[] = [
  {sender: 'you', date: new Date(), message: 'l;kajsfd;lakwsjdf;laskjdf;lskdjal'},
  {sender: 'you', date: new Date(), message: 'l;kajsfd;lakwsjdf;laskjdf;lskdjal'},
  {sender: 'you', date: new Date(), message: 'l;kajsfd;lakwsjdf;laskjdf;lskdjal'},
  {sender: 'you', date: new Date(), message: 'l;kajsfd;lakwsjdf;laskjdf;lskdjal'},
  {sender: 'you', date: new Date(), message: 'l;kajsfd;lakwsjdf;laskjdf;lskdjal'}
]


const Chat = (): JSX.Element => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Typography.Title level={5}>{item.sender}</Typography.Title>}
          description={<p>{item.message}</p>}
        />
      </List.Item>
    )}
  />
);

export default Chat;