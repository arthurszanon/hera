import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { produtos } from '../../../interfaces/produtos';
import { ProdutoService } from '../../../services/produtos.service';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-carousel-model',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule,
    RouterModule,
  ],
  templateUrl: './carousel-model.component.html',
  styleUrl: './carousel-model.component.css',
  providers:[ProdutoService, RouterLink, Router]
})
export class CarouselModelComponent implements OnInit{

  products: produtos[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private produtosService: ProdutoService) {}

  ngOnInit() {
    this.produtosService.buscarProdutos().subscribe((res: any) => {
      this.products = res;
    });

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }
}
