import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-advance-search',
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule],
  templateUrl: './advance-search.component.html',
  styleUrl: './advance-search.component.scss',
  standalone: true
})
export class AdvanceSearchComponent implements OnInit {
  fg = new FormGroup({
    name: new FormControl(),
  });

  users$ : any ;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fg.get('name')?.valueChanges.subscribe(data=> console.log(data));
  }
}
