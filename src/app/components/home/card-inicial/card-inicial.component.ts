import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardInicialService } from '../../../services/card-inicial.service';
import { HttpClientModule } from '@angular/common/http';
import { card_inicial } from '../../../interfaces/card-inicial';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card-inicial',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    HttpClientModule,
    NgFor,
    CommonModule,
    RouterLink
  ],
  templateUrl: './card-inicial.component.html',
  styleUrl: './card-inicial.component.css',
  providers: [CardInicialService,
  ]
})
export class CardInicialComponent implements OnInit {
  card: card_inicial[] = [];
  constructor (private service: CardInicialService) {}

  ngOnInit(): void {

  }

}
