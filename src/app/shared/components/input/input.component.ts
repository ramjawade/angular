import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() modelValue : any;
  @Input() lableText : string;
  @Input() placeholder : string;
  // @Output() onChange :new Event

  constructor() { }

  ngOnInit() {
  }

}
