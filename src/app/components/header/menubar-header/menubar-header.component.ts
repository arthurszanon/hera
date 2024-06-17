import { Component,  OnInit  } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { CategoriasService } from '../../../services/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { matconcategoria } from '../../../interfaces/matconcategoria';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginComponent } from "../../login/login.component";



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
        LoginComponent
    ]
})
export class MenubarHeaderComponent implements OnInit{
  items: matconcategoria[] = [];
  constructor (private service: CategoriasService) {}

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.items = dados);
}
}
