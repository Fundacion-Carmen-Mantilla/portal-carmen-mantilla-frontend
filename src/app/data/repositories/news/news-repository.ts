import { environment } from '../../../../environments/environment';
import { News } from '../../models/news/news.model';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class NewsRepository {
    private apiUrl = `${environment.apiUrl}/news`;

    constructor(private http: HttpClient) {}

    create(news: News): Observable<News> {
        return this.http.post<ApiResponse<News>>(this.apiUrl, news).pipe(
            map((response: ApiResponse<News>): News => {
                return response.data;
            })
        );
    }
}
