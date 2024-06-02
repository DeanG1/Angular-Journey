import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}

  onSubmit(loginForm: any) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    console.log(username, password);
    this.showAlert(`Username: ${username}, Password: ${password}`);
    this.openDialog(username, password);
  }
  openDialog(username: string, password: string): void {
    this.dialog.open(LoginDialogComponent, {
      data: { username, password },
    });
  }
  showAlert(message: string): void {
    alert(message);
  }
}
