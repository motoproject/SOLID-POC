import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class HttpBaseService {

    constructor(private http: HttpClient) {

    }

    public get(url: string): Observable<any> {
        return this.http.get(url).pipe(map(res => res));
    }

    public post(url: string, data): Observable<any> {
        return this.http.post(url, data).pipe(map(res => res));
    }

    public put(url: string, data): Observable<any> {
        return this.http.put(url, data).pipe(map(res => res));
    }

    public patch(url: string, parameterName): Observable<any> {
        return this.http.patch(url, parameterName).pipe(map(res => res));
    }

}
