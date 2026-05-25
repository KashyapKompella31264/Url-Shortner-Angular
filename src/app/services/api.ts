import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://3dugqktl38.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http: HttpClient) {}

  shorten(url: string) {

    return this.http.post(
      `${this.apiUrl}/shorten`,
      {
        longUrl: url
      }
      
    );
    console.log('Your string here')
  }
}