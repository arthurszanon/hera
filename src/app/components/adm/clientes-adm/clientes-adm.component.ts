import { Component, OnInit } from '@angular/core';
import { clientes } from '../../../interfaces/clientes';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ClientesCadastradosService } from '../../../services/clientes-cadastrados.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';


import {UsuarioService} from '../../../services/usuario.service';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {RepresentanteService} from '../../../services/representante.service';


@Component({
  selector: 'app-clientes-adm',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule,DialogModule,ConfirmDialogModule,
    FormsModule,InputNumberModule,ToastModule,ToolbarModule,RouterLink, FileUploadModule,
    InputTextModule,],
  templateUrl: './clientes-adm.component.html',
  styles: [
    `:host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }`],
  styleUrl: './clientes-adm.component.css',
  providers:[ClientesCadastradosService]
})

export class ClientesAdmComponent implements OnInit {
  submitted: boolean = false;
  clientDialog: boolean = false;
  selectedClients!: clientes[] | null;
  visible: boolean = false;

  clientes: any[] = [];
  cliente: any = {};

  representantes: any[] = [];

  tabelaPrecos = [
    { label: 'Preço capital', value: 'A' },
    { label: 'Preço interior', value: 'B' },
    { label: 'Preço capital promoção', value: 'C' },
    { label: 'Preço interior promoção', value: 'D' },
  ];

  constructor(private usuarioService:UsuarioService, private router: Router, private representanteService: RepresentanteService) {}

  ngOnInit() {
      this.usuarioService.buscarUsuarios().subscribe((data: any) => {
          this.clientes = data;
      });

      this.representanteService.buscarRepresentantes().subscribe((data: any) => {
          this.representantes = data;
      });
  }

  editCliente(cliente: any) {
    this.visible = true;
    this.cliente = {...cliente};
  }

  saveCliente() {
    this.visible = false;

    this.usuarioService.atualizarUsuario(this.cliente).subscribe(() => {
      this.cliente = {};
      this.usuarioService.buscarUsuarios().subscribe((data: any) => {
        this.clientes = data;
      });
    });
  }

  showTabelaPrecos(cliente: any) {
    switch (cliente.tabelaPreco) {
      case 'A':
        return 'Preço capital';
      case 'B':
        return 'Preço interior';
      case 'C':
        return 'Preço capital promoção';
      case 'D':
        return 'Preço interior promoção';
      default:
        return 'Sem tabela de preços';
    }
  }
}





