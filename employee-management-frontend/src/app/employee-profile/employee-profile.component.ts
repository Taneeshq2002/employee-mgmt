import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  imports: [NavbarComponent],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent {
  employee: Employee | null = null;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.empService.getEmployeeById(id).subscribe({
        next: (res) => (this.employee = res),
        error: (err) => console.error('Error fetching employee', err),
      });
    } else {
      console.warn('No employee ID found in URL.');
    }
  }
}
