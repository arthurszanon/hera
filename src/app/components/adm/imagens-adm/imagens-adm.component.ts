import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { produtos } from '../../../interfaces/produtos';
import { Imagem } from '../../../interfaces/Imagem';
import { ProdutoService } from '../../../services/produtos.service';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-imagens-adm',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    InputNumberModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    RouterLink,
    InputTextModule,
    
  ],
  templateUrl: './imagens-adm.component.html',
  styleUrl: './imagens-adm.component.css',
  providers:[ProdutoService]

})
export class ImagensAdmComponent {

  produto: produtos[] = [];
  selectedProducts: produtos[] = [];

  imagem: Imagem[] = [];


  constructor(private produtoService: ProdutoService) {}
  ngOnInit() {
    this.produtoService.buscarProdutos().subscribe((data: produtos[]) => {
      this.produto = data;
    });
}

visible: boolean = false;

showDialog() {
  this.visible = true;
}

onUpload( ) {

}
}
