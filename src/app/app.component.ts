import { Component, Inject } from '@angular/core';
// ANOTHER OPTION : SHARE SERVICES
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // ANOTHER OPTION: SHARE SERVICES
  // constructor(private mail:MailService){

  // }  

  constructor(
    @Inject('mail') private mail
    
  ){}
}
