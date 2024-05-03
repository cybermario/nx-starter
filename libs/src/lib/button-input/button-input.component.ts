import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'button-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.css'],
})
export class ButtonInputComponent {
  inputData: string = '';

  @Output() submitData = new EventEmitter<string>();

  onSubmit() {
    this.submitData.emit(this.inputData);
  }
}