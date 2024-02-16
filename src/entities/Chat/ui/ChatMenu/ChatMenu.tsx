import {  Menu, MenuProps } from "antd"
import { SetStateAction, useEffect, useState } from "react";
import { IChat } from "../../model/interfaces/Chat.intefaces";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const ChatMenu = ({setCurrentChatId , chats}: {setCurrentChatId: React.Dispatch<SetStateAction<string>>, chats: IChat[]}) => {
  
  const [menuProps, setMenuProps] = useState([
    getItem('Chats', 'grp', null, [], 'group'),
  ])

  useEffect(() => {
    const chatMenuItems = chats.map(item => getItem(item.chatName, item.chatId))
    setMenuProps([getItem('Chats', 'chats', null, chatMenuItems, 'group')])
  }, [chats])

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuProps}
        style={{marginTop: 20}}
        onSelect={({key}) => {
          setCurrentChatId(key)
        }}
      />
    </>
    
  )
}

export default ChatMenu