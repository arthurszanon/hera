import { Component } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProdutoService} from '../../services/produtos.service';

@Component({
  selector: 'app-products-list-page',
  standalone: true,
  imports: [
    PanelMenuModule,
    CardModule,
    ButtonModule,
    NgForOf,
    CurrencyPipe,
    NgIf,
    ProgressSpinnerModule
  ],
  providers: [ProdutoService],
  templateUrl: './products-list-page.component.html',
  styleUrl: './products-list-page.component.css'
})
export class ProductsListPageComponent {

  items: MenuItem[] = [];
  categorias: any[] = [];

  categoria: any;
  produtos: any[] = [];

  carrinhoPayload: any;
  quantidadeProdutos: number = 1;

  isLogged: boolean = localStorage.getItem('logged') === 'true'

  loading: boolean = true;

  constructor(private produtosService: ProdutoService, private route: ActivatedRoute) {
  }

  ngOnInit(){

    this.produtosService.buscarCategorias().subscribe(categorias => {
      this.categorias = categorias.map((categoria: any) => {
        return categoria.categoria;
      });

      this.items = this.categorias.map(categoria => {
        return {
          label: categoria,
          routerLink: ['/produtos', categoria]
        }
      });
    });

    this.route.params.subscribe(params => {
      this.loading = true;
      this.categoria = params['categoria'];
      if(this.categoria){
        this.produtosService.buscarPorCategoria(this.categoria).subscribe(produtos => {
          this.produtos = produtos;
          this.loading = false;
          this.produtos.map(produto => {
            if(produto.descricao){
              produto.descricao = produto.descricao?.length > 32 ? produto.descricao.substring(0, 20) + '...' : produto.descricao;
              return produto;
            }
            return produto;
          });
        });
      }else{
        this.produtosService.buscarProdutos().subscribe(produtos => {
          this.produtos = produtos;
          this.loading = false;
          this.produtos.map(produto => {
            if(produto.descricao){
              produto.descricao = produto.descricao?.length > 32 ? produto.descricao.substring(0, 20) + '...' : produto.descricao;
              return produto;
            }
            return produto;
          });
        });
        this.categoria = 'Todos os produtos'
      }
    });

  }

  addCarrinho(product: any) {
    this.carrinhoPayload = {
      id: product.id,
      nome: product.descricao,
      descricao: product.descricao,
      preco: product.preco,
      quantidade: this.quantidadeProdutos,
      imagemURL: product.imagemURL
    }
    this.produtosService.addToCart(this.carrinhoPayload);
  }

  verPreco(produto: any){
    const tabelaPreco = localStorage.getItem('tabelaPreco');
    if(tabelaPreco) {
      switch (tabelaPreco) {
        case 'A':
          return produto.valorCapital;
        case 'B':
          return produto.valorInterior;
        case 'C':
          return produto.valorCapitalPromocao;
        case 'D':
          return produto.valorCapitalPromocao;
        default:
          return produto.valorCapital;
      }
    }
  }
}
