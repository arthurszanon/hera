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



  cliente!: clientes[];
  Cliente!: clientes; 

  constructor(private clientesCadastradosService: ClientesCadastradosService, private router: Router) {}

  ngOnInit() {
      this.clientesCadastradosService.getClientsMini().then((data) => {
          this.cliente = data;
      });
  }

  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
}

editClient(): void {
  this.router.navigate(['/login']);
}

visible: boolean = false;

showDialog() {
    this.visible = true;
}
}





