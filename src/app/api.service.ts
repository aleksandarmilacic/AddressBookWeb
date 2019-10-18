import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from './models/contact';
import { ReturnListData } from './models/helper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalErrorComponent} from './modal-error/modal-error.component';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiCtrlUrl = 'https://localhost:44314/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.modalOpen("Status: " + error.error.StatusCode + ", message: "+ error.error.Message);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  modalOpen(text) {
    const modalRef = this.modalService.open(ModalErrorComponent);
    modalRef.componentInstance.message = text;
  }

  searchContacts(quary: any): Observable<ReturnListData> {
    return this.http.get<any | ReturnListData>(apiCtrlUrl  + quary)
      .pipe(
        tap(() => console.log('fetched Contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  getContacts(): Observable<ReturnListData> {
    return this.http.get<any | ReturnListData>(apiCtrlUrl)
      .pipe(
        tap(() => console.log('fetched Contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  getContact(id: string): Observable<Contact> {
    const url = `${apiCtrlUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => console.log(`fetched Contact id=${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  addContact(contact: any): Observable<Contact> {
    return this.http.post<Contact>(apiCtrlUrl, contact, httpOptions).pipe(
      tap((contactRes: Contact) => console.log(`added Contact w/ id=${contactRes.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  updateContact(contact: any): Observable<any> {
    const url = `${apiCtrlUrl}`;
    return this.http.put(url, contact, httpOptions).pipe(
      tap(_ => console.log(`updated Contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  deleteContact(id: string): Observable<Contact> {
    const url = `${apiCtrlUrl}/${id}`;
    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }
}
