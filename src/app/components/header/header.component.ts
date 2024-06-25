import { Component } from '@angular/core';
import { MenubarHeaderComponent } from './menubar-header/menubar-header.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {RouterLink} from '@angular/router';
import {SharedModule} from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [MenubarHeaderComponent, ButtonModule, InputTextModule, MenubarModule, RouterLink, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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

}
