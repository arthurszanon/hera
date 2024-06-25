import { Component,  OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../../services/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { matconcategoria } from '../../../interfaces/matconcategoria';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginComponent } from "../../login/login.component";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



@Component({
    selector: 'app-menubar-header',
    standalone: true,
    templateUrl: './menubar-header.component.html',
    styleUrl: './menubar-header.component.css',
    providers: [CategoriasService],
  imports: [
    MenubarModule,
    CommonModule,
    HttpClientModule,
    NgFor,
    RouterLink,
    LoginComponent,
    ButtonModule,
    InputTextModule
  ]
})
export class MenubarHeaderComponent implements OnInit{
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
  constructor (private service: CategoriasService) {}

  ngOnInit() {

  }
}
