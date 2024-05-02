import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button-input',
  standalone: true,
  imports: [],
  templateUrl: './button-input.component.html',
  styleUrl: './button-input.component.css'
})
export class ButtonInputComponent {
  inputValue: string = '';

  constructor(private http: HttpClient) {}

  postData() {
    const url = 'http://localhost:3333/api';
    this.http.post(url, { data: this.inputValue }).subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => console.error('Error:', error)
    });
  }
}
