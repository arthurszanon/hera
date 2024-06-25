import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    CommonModule,
    HttpClientModule,
    ToastModule
  ]
})
export class AppComponent {
  title = 'repres';
}
