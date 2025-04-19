import { Component ,inject} from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule ,Router} from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-nonemployee-list',
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './nonemployee-list.component.html',
  styleUrl: './nonemployee-list.component.css'
})
export class NonemployeeListComponent {
  employees: Employee[] = [];

  constructor(private empService: EmployeeService) {}
  router=inject(Router);
  ngOnInit() {
    this.empService.getEmployees().subscribe(data => this.employees = data);
  }

  navigateToview(id:string){
    this.router.navigate([`/view-profile/${id}`]);
  }
}
