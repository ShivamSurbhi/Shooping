import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiRequestService } from 'src/http-request/api-request.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  errorMessage: any = '';

  constructor(private http: HttpClient,private apiRequestService:ApiRequestService) {
    this.getAll();
  }

  getAll() {
    console.log("hit");
    this.apiRequestService
      .postReq('add-product', {
        Name: 'shivam',
        Author: 'shokeen',
        Price: 1,
        Description: 'test Description',
        Password: 'surbhi',
        ConfirmPassword: 'surbhi',
      })
      .subscribe({
        next: (data) => {},
        error: (error) => {
          this.errorMessage = error.message;
          setTimeout(() => {
            this.errorMessage = '';
          }, 8000);
          console.error('There was an error!', error);
        },
      });
  }
}
