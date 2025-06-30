import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailCreditur } from '../../shared/detail-creditur/detail-creditur';

@Component({
  selector: 'app-detail-creditur-page',
  imports: [DetailCreditur],
  templateUrl: './detail-creditur-page.html',
  styleUrl: './detail-creditur-page.scss',
  standalone: true
})
export class DetailCrediturPage implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log("ID detail-creditur-page:", this.id);
  }
}
