import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackbar: MatSnackBar) { }
  
  config: MatSnackBarConfig = {
    duration:3000,
    horizontalPosition: 'right',
    verticalPosition:'top'
  }

  success(msg: string){
    this.config['panelClass'] = ['notification', 'success'];
    this.snackbar.open(msg,'', this.config);
  }
  warn(msg: any){
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackbar.open(msg,'', this.config);
  }
}
