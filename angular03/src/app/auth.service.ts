import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy endpoint

  constructor(private customHttpService: CustomHttpService) {}

  login(username: string, password: string): Promise<any> {
    const payload = { username, password };
    return this.customHttpService.post(this.apiUrl, payload);
  }
}
