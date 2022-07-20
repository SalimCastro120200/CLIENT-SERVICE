import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

  sendMessage(mensaje: string){
     const payload = {
      de:'Salim Castro',
      cuerpo: mensaje,
      color: 'cyan'
     };
     this.wsService.emit('mensaje', payload);
     
  }

  getMessages(){
    return this.wsService.listen('mensaje-nuevo');
  }
  
  getMessagesPrivate(){
    return this.wsService.listen('mensaje-privado')
  }

}
