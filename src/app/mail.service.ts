import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    { id: 0, text:"this thing is not showing" },
    { id: 1, text:"THIS IS MESSAGE 1" },
    { id: 2, text:"THIS IS MESSAGE 2" },
    { id: 3, text:"THIS IS MESSAGE 3" }
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
  constructor() { }

}
