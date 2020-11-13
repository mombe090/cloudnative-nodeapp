import {HttpClient} from "@angular/common/http";
// @ts-ignore
import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  constructor(
    private http: HttpClient
  ) {
    const data = {
      "name" : "Mamadou Yaya DIALLO",
      "email" : "yayamombeya090@gmail.com",
      "reason" :  "DEMANDE INFOR",
      "otherReason" : null,
      "message" : "Need some information, please call me on 622315214"
    };


    const url = "http://localhost:3000";
    this.http.get(url).subscribe(r => {
      console.log(r);
    }, error => {
      console.log(error);
    });
  }
}
