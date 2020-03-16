import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//todo use this type
export interface Book {
  id: string;
  title: string;
}

export interface AwsHttpResponse {
  body: string;
  statusCode: string;  
}

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://8is9croova.execute-api.us-east-2.amazonaws.com/production/books';
  //     https://8is9croova.execute-api.us-east-2.amazonaws.com/production/books

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  /*
  body: "[{\"id\":\"60e272d88c43bbc684601096fc711dff\",\"title\":\"One Hundred Years of Solitude\"}]"
  statusCode: 200
*/

  getBooks() {
    return this.http.get<AwsHttpResponse>(this.url).pipe(
      catchError(this.handleError)
    );
  }
}
