export interface Employee {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'employee';
    department: string;
  }
  