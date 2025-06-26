import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Creditur } from '../../model/creditur.interface';

@Injectable({
  providedIn: 'root'
})

export class ReminderService {

  showReminder(item: Creditur): void {
    if (!item.date) return;

    const today = new Date();
    const eventDate = new Date(item.date);

    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    const timeDiff = eventDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (dayDiff === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Reminder Hari H',
        text: `Hari H! Survey untuk ${item.name} adalah hari ini.`,
      });
    } else if (dayDiff === 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Reminder H-1',
        text: `Besok adalah survey untuk ${item.name}`,
      });
    } else {
      const formatted = this.convertDaysToYMD(dayDiff);
      Swal.fire({
        icon: 'info',
        title: 'Reminder',
        text: `Survey ${item.name} masih ${formatted} lagi.`,
      });
    }
  }

  private convertDaysToYMD(days: number): string {
    if (days <= 0) return 'Hari ini';

    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    let result = '';
    if (years > 0) result += `${years} tahun `;
    if (months > 0) result += `${months} bulan `;
    if (remainingDays > 0) result += `${remainingDays} hari`;

    return result.trim();
  }
}