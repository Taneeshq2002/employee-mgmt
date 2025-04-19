import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private empService: EmployeeService, private router: Router) {}

  login() {
    this.empService.login(this.email, this.password).subscribe({
      next: user => {
        if (user.role === 'admin') this.router.navigate(['/employee']);
        else this.router.navigate(['/view-employees']);
      },
      error: () => this.error = 'Invalid login'
    });
  }
}
