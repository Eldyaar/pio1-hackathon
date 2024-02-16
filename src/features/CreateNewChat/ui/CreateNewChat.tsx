import { Button, Input, Modal, Select, Space, Typography } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import { SetStateAction, useState } from "react";
import { IChat } from "../../../entities/Chat/model/interfaces/Chat.intefaces";

const CreateNewChat = ({chats, setChats}: {chats: IChat[], setChats: React.Dispatch<SetStateAction<IChat[]>>}): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newChat, setNewChat] = useState<IChat>({
    chatHistory: [],
    chatId: '',
    chatName: '',
    chatOptions: {
      organization: 1,
      speaker: 1
    }
  })

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setChats([...chats, {...newChat, chatId: String(Math.random() * 10), chatHistory: [] }])
    setNewChat({
      chatHistory: [],
      chatId: '',
      chatName: '',
      chatOptions: {
        organization: 1,
        speaker: 1
      }
    })
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{width: '100%'}}>
        New Chat <PlusOutlined/>
      </Button>
      <Modal title="Create a new chat" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Create' okType='primary'>
        <Space direction="vertical" size='middle' style={{margin: '20px 0'}}>
        <Typography.Title level={5}>Пожалуйста дайте название чату</Typography.Title>
          <Input value={newChat.chatName} placeholder="Название чата..." onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewChat({...newChat, chatName: event.target.value.trim()})}/>
          <Typography.Title level={5}>Пожалуйста выберите Организацию и Спикера</Typography.Title>
          <Select defaultValue={newChat.chatOptions.organization} style={{width: 130}} options={[
            {value: 1, label: 'ЦОН'},
            {value: 2, label: 'Больницы'},
            {value: 3, label: 'Налоговая'},
          ]} onChange={(value: IChat['chatOptions']['organization']) => setNewChat({...newChat, chatOptions: {organization: value, speaker: newChat.chatOptions.speaker}})}/>
          <Select defaultValue={newChat.chatOptions.speaker} style={{width: 130}} options={[
            {value: 1, label: 'Мужской'},
            {value: 2, label: 'Женский'},
          ]} onChange={(value: IChat['chatOptions']['speaker']) => setNewChat({...newChat, chatOptions: {speaker: value, organization: newChat.chatOptions.organization}})}/> 
        </Space>
      </Modal>
    </>
  );
}

export default CreateNewChat