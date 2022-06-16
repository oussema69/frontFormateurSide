
export interface Message{
  idS: string;
  idR: string;
  messages: [{ msg: string; ids: string }];
  visible: boolean;

}
