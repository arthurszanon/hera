import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModelComponent } from "../product/carousel-model/carousel-model.component";
import { ButtonModule } from 'primeng/button';
import { Cards01Component } from "../armarinho/cards-01/cards-01.component";
import { TextMatconService } from '../../services/text-matcon.service';
import { text_matcon } from '../../interfaces/text-matcon';


@Component({
    selector: 'app-matcon',
    standalone: true,
    templateUrl: './matcon.component.html',
    styleUrl: './matcon.component.css',
    imports: [NgFor, CarouselModelComponent, ButtonModule, Cards01Component],
    providers:[TextMatconService]
})
export class MatconComponent implements OnInit{
  card: text_matcon[] = [];
  constructor (private service: TextMatconService) {}

  ngOnInit(): void {
    this.service.list() 
    .subscribe(dados => this.card = dados);
  }
}
