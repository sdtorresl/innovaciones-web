import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'http://localhost:5000/api/v1/contact';

  constructor(private http: HttpClient) { }

  sendContact(body: any) {
    return this.http.post(this.url, body).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
