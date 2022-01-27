import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  pdfSrc : string  = "";
  placeholder : string = "";
  
  constructor() { }

  ngOnInit() {
    this.pdfSrc = ""; 

  }

  afterLoadComplete(evt){
    console.log(evt);
  }
  
  pageRendered(evt){
    console.log(evt);
  }

}
