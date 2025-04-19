import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private API = 'http://localhost:5000/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.API}/${id}`);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API, emp);
  }
  getEmployeeById(id: string) {
    return this.http.get<Employee>(`${this.API}/${id}`);
  }
  updateEmployee(id: string, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API}/${id}`, emp);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

  login(email: string, password: string): Observable<Employee> {
    return this.http.post<Employee>(`${this.API}/login`, { email, password });
  }
}
