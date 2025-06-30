import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrediturData } from '../../service/creditur/creditur-data';
import { Creditur } from '../../../model/creditur.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-creditur',
  imports: [CommonModule],
  templateUrl: './detail-creditur.html',
  styleUrls: ['./detail-creditur.scss']
})
export class DetailCreditur implements OnInit {
  kreditur?: Creditur;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private crediturService: CrediturData,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ID detail-creditur:", id);
    if (id) {
      this.crediturService.getDataById(id).subscribe({
        next: (data) => {
          this.kreditur = data;
          this.loading = false;
          this.cdRef.detectChanges()
          console.log("Data kreditur:", this.kreditur);
          console.log("loading:", this.loading);
        },
        error: (err) => {
          this.errorMessage = 'Data tidak ditemukan';
          this.loading = false;
        }
      });
    }
  }
}
