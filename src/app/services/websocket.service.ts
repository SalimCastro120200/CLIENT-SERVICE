import { Injectable } from '@angular/core';
import { Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus=false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado al Servidor');
      this.socketStatus = true;
    })
   
    this.socket.on('disconnect', () => {
      console.log('Desconectado del Servidor');
      this.socketStatus = false;
    });
  }
  
  emit(evento: string, payload?: any, callback?: Function){
<<<<<<< HEAD
    console.log('Emitiendo ', evento);
    this.socket.emit(evento,  payload, callback);
  }

  listen( evento: string ){
=======
    console.log('Emitiendo ',evento);
    this.socket.emit(evento,  payload, callback);
  }

  listen(evento:string){
>>>>>>> 66531c72d43a5ee909c57e43b4c651b6b019b765
    return this.socket.fromEvent(evento);
  }
}
