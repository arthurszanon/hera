import { Component,  OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {Router} from '@angular/router';
import {ProdutoService} from '../../services/produtos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ProdutoService],
  imports: [
    MenubarModule,
    CommonModule,
    HttpClientModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    BadgeModule,
    DialogModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    // BuscarComponent,
  ]
})
export class HeaderComponent implements OnInit{
  categorias: any[] = [];

  orcamentoLoading: boolean = false;

  items: any[] = [
    {
      'label': 'Home',
      'icon': 'pi pi-fw pi-home',
      'routerLink': ['/']
    },
    {
      'label': 'produtos',
      'icon': 'pi pi-fw pi-shopping-cart',
      'routerLink': ['/produtos'],
    },
    {
      'label': 'Login',
      'routerLink': ['/login'],
    },
    {
      'label': 'Cadastrar',
      'routerLink': ['/cadastro'],
    },
  ];

  cartVisible: boolean = false;
  loginVisible: boolean = false;
  registerVisible: boolean = false;
  products: any[] = [];
  loginError: boolean = false;

  loginPayload = {
    email: '',
    senha: ''
  }

  registerPayload = {
    nome: '',

    email: '',
    cep: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  }

  isLogged = localStorage.getItem('logged') === 'true';

  constructor (private router: Router, private produtoService: ProdutoService) {}

  ngOnInit() {
    if(localStorage.getItem('cart')) {
      this.products = JSON.parse(localStorage.getItem('cart') || '{}');
    }
  }

  showDialog() {
    this.products = this.produtoService.getCart();
    this.cartVisible = true;
  }

  clearCart() {
    this.produtoService.clearCart();
    this.products = this.produtoService.getCart();
    this.cartVisible = false;
  }

  enviarOrcamento() {
    // if(!this.isLogged){
    //   this.router.navigate(['/login'])
    //   return;
    // }
    //
    // const user = JSON.parse(localStorage.getItem('user') || '{}')
    //
    // const orcamento = {
    //   nome: user.nome,
    //   numeroTelefone: user.telefone,
    //   produtos: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : [],
    //   status: 'pendente',
    //   created_at: new Date(),
    //   updated_at: new Date()
    // }
    // this.orcamentoLoading = true;
    // this.orcamentoService.getOrcamentoPdf(orcamento).subscribe((pdf: any) => {
    //   this.orcamentoLoading = false;
    //   this.clearCart();
    //   this.cartVisible = false;
    //   var mediaType = 'application/pdf';
    //   var blob = new Blob([pdf], {type: mediaType});
    //   saveAs(blob, `orcamento-${new Date().getTime()}.pdf`);
    //
    // }, () => {
    //   this.orcamentoLoading = false;
    // });
  }
}
