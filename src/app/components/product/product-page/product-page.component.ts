import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProdutoService } from '../../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModelComponent } from "../carousel-model/carousel-model.component";


@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
    providers: [ProdutoService],
    imports: [
        GalleriaModule,
        TagModule,
        ButtonModule,
        CarouselModelComponent
    ]
})
export class ProductPageComponent implements OnInit{
  product: any = {};

  constructor(private produtosService: ProdutoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      const id = res['id'];
      this.produtosService.buscarPorId(id).subscribe((res: any) => {
        this.product = res;
      })
    })
  }
}
