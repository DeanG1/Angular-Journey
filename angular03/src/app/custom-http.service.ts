import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {
  post(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }
      };

      xhr.send(JSON.stringify(body));
    });
  }
}
