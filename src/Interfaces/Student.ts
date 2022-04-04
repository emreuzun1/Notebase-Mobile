export interface RegisterValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
  department: string;
  faculty: string;
  university: string;
}

export interface LoginInterface {
  username: string;
  password: string;
}

export interface Student {
  user: {
    id: string;
    username: string;
    email: string;
    password: string;
    last_login: string;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    date_joined: string;
    is_staff: boolean;
    is_active: boolean;
    university: string;
    faculty: string;
    department: string;
    point: number;
    date: string;
    groups: any;
    user_permissions: any;
  };
  token: string;
}

export interface StudentState {
  loading: boolean;
  student: Student;
  errorMessage: string;
}
