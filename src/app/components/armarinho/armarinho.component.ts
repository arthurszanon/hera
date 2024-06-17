import { Component, OnInit } from '@angular/core';
import { CarouselModelComponent } from "../product/carousel-model/carousel-model.component";
import { TextArmarinhoService } from '../../services/text-armarinho.service';
import { text_armarinho } from '../../interfaces/text-armarinho';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Cards01Component } from "./cards-01/cards-01.component";
import { text_matcon } from '../../interfaces/text-matcon';

@Component({
    selector: 'app-armarinho',
    standalone: true,
    templateUrl: './armarinho.component.html',
    styleUrl: './armarinho.component.css',
    providers: [TextArmarinhoService,],
    imports: [CarouselModelComponent, NgFor, ButtonModule, Cards01Component]
})
export class ArmarinhoComponent implements OnInit{
    card: text_matcon[] = [];
    constructor (private service: TextArmarinhoService) {}
  
    ngOnInit(): void {
      this.service.list() 
      .subscribe(dados => this.card = dados);
    }
}
