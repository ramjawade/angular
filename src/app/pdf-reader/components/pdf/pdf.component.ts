import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  pdfSrc : string  = "";
  constructor() { }

  ngOnInit() {
    this.pdfSrc = "assets/OSS_Interface_Req_v1.3.pdf"; 
  }

  afterLoadComplete(evt){
    console.log(evt);
  }
  
  pageRendered(evt){
    console.log(evt);
  }

}
