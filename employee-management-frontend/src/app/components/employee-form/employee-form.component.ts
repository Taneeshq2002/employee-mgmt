import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employee: Employee = {
    name: '', email: '', password: '', role: 'employee', department: ''
  };
  isEditMode: boolean = false;
  employeeId: string = '';

  constructor(  private route: ActivatedRoute,
    private empService: EmployeeService,
    private router: Router) {}
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id') || '';

    if (this.employeeId) {
      this.isEditMode = true;
      this.empService.getEmployeeById(this.employeeId).subscribe(emp => {
        this.employee = emp;
        // Optional: you may want to remove password from view when editing
        // this.employee.password = '';
      });
    }
  }
  save() {
    if (this.isEditMode && this.employee._id) {
      this.empService.updateEmployee(this.employee._id, this.employee).subscribe(() => {
        this.router.navigate(['/employee']);
      });
    } else {
      const { _id, ...newEmp } = this.employee;
      this.empService.addEmployee(newEmp).subscribe(() => {
        this.router.navigate(['/employee']);
      });
  }
}
}
