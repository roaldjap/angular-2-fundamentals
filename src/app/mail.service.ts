import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    "this thing is not showing",
    "THIS IS MESSAGE 1",
    "THIS IS MESSAGE 2",
    "THIS IS MESSAGE 3"
  ];
  constructor() { }

}
