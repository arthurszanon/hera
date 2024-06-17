import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PasswordModule, FloatLabelModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) { }

  login() {
    const user = { email: this.email, senha: this.senha };
    this.authService.login(user).subscribe(response => {
      console.log(response);
      // Salve o token no localStorage
      this.authService.setToken(response.token);
      // Redirecione o usuário para a página protegida ou faça outras ações
    }, error => {
      console.error(error);
      // Mostre uma mensagem de erro para o usuário
    });
  }
}
