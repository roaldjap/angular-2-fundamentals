import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<hr>
<p>{{ message }}</p>
<hr>
<input #myInput type="text">
<button (click)="onClick(myInput.value)">Clicking events</button>`,
  // templateUrl: 'simple-form.component.html',
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
