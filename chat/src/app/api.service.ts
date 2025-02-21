import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://your-backend-api.com/messages'; 

  constructor(private http: HttpClient) {}

  getMessages(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { text: message });
  }
}
