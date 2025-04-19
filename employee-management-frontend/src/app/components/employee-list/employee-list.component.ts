import { Component,inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private empService: EmployeeService) {}
  router=inject(Router);
  navigateToadd(){
    this.router.navigate(['/add-employee']);
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => this.employees = data);
  }

  deleteEmployee(id: string) {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp._id !== id);
    });
  }

  navigateToedit(id:string){
      this.router.navigate([`/edit-employee/${id}`]);
    };
  }

