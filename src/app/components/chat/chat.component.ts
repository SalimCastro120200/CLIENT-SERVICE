import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto = '';

  constructor(

    public servicioCharla: ChatService

  ) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.texto);
    this.servicioCharla.sendMessage(this.texto);
    this.texto='';
  }

}
