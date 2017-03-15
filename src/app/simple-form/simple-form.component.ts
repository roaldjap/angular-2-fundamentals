import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(value){
    console.log(value);
  }

  constructor() { }


  ngOnInit() {
  }

}
