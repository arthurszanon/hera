import { Component } from '@angular/core';
import { MenubarHeaderComponent } from './menubar-header/menubar-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
