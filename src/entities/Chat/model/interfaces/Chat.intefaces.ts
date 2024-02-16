export enum Sender {
  AI = "AI",
  YOU = "YOU"
}

export interface MessageInfo {
  sender: Sender,
  date: Date,
  message: string
}

export interface IChat {
  chatHistory: MessageInfo[],
  chatName: string
  chatId: string,
  chatOptions: IChatOptions
}

export interface IChatOptions {
  organization: 1 | 2 | 3,
  speaker: 1 | 2
}   