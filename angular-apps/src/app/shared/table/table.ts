import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';
import { ReminderService } from '../../service/reminder/reminder-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table{
  @Input() childrenData: Creditur[] = [];
  @Output() deleteEmitter = new EventEmitter<string>();
  @Output() editEmitter = new EventEmitter<number>();

  constructor(
    private reminderService: ReminderService,
    private router:Router
  ) {}


  onDelete(id: string) {
    this.deleteEmitter.emit(id);
  }

  onRowClick(item: Creditur) {
    this.reminderService.showReminder(item);
  }

  goToDetail(id: string) {
  this.router.navigate(['/detail', id]);
  console.log("ini :", id)
}
}