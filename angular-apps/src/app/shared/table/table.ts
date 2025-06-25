import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  @Input() childrenData: Creditur[] =[]
  @Output() buttonEmitter = new EventEmitter<string>()

  sendDataFromChildren(){
    this.buttonEmitter.emit(this.childrenData[0].name = 'Apis')
  }
}
