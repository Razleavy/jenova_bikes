import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Station } from '../../models/station/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationDataService {

  private _url = 'https://api.jcdecaux.com/vls/v1/stations';

  constructor(private _http: HttpClient) { }

  getStations(): Observable<Station[]> {
    return this._http.get<Station[]>(this._url, { params: { contract: 'dublin', apiKey: 'bb6d413793ac74135a0eaf49dee2a57addba5d19' } })
      .pipe(map(data => data));
  }
}
