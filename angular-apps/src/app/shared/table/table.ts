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
  @Output() deleteEmitter = new EventEmitter<number>()
  @Output() editEmitter = new EventEmitter<number>()

  onDelete(index:number){
    this.deleteEmitter.emit(index);
  }

  // onEdit(index:number){
  //   this.editEmitter.emit(index)
  // }
}
