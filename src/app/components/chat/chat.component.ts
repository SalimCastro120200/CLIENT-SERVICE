import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSubsciptions: Subscription = new Subscription;
<<<<<<< HEAD

  mensajes: any[]=[];
=======
>>>>>>> 66531c72d43a5ee909c57e43b4c651b6b019b765

  constructor(

    public servicioCharla: ChatService

  ) { }

  ngOnInit(): void {
    this.mensajesSubsciptions = this.servicioCharla.getMessages().subscribe( msg => {
<<<<<<< HEAD
      this.mensajes.push(msg);
=======
>>>>>>> 66531c72d43a5ee909c57e43b4c651b6b019b765
      console.log(msg);
    } )
  }

  ngOnDestroy(){
    this.mensajesSubsciptions.unsubscribe();
  }

  enviar(){
    console.log(this.texto);
    this.servicioCharla.sendMessage(this.texto);
    this.texto='';
  }

}
