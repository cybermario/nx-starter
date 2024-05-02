import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'button-input',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './button-input.component.html',
  styleUrl: './button-input.component.css',
})
export class ButtonInputComponent {
  inputData: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    //this.http.post('http://159.69.121.229:3000/api', { data: this.inputData })
    this.http.post('http://localhost:3000/api', { data: this.inputData })
      .subscribe({
        next: (response) => console.log('Data submitted', response),
        error: (error) => console.error('Error:', error)
      });
  }
}
