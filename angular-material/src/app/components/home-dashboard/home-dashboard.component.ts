import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  /*
  openSnackbar() {
    this.snackbar.open('This is the Snackbar message with an action', 'Got it', {
      duration: 3000
    });
  }

  openSnackbar2() {
    this.snackbar.open('This is the Snackbar message without action', '', {
      duration: 2000
    });
  }
  */

}
