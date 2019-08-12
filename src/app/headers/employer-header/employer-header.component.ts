import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-employer-header',
  templateUrl: './employer-header.component.html',
  styleUrls: ['./employer-header.component.css']
})
export class EmployerHeaderComponent implements OnInit {
// tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this._authService.logout();
  }
}
