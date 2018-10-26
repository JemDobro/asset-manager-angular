import { Injectable } from '@angular/core';
import { REQUESTS } from '../mock-data';
import {Request } from "../models";
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class RequestsService {
 
  constructor() { }

  getRequests(): Observable<Request[]> {
    return of (REQUESTS);
  }
}
