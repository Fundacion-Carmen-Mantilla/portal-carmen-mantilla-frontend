import { Injectable } from '@angular/core';
import { NewsRepository } from '../repositories/news/news-repository';
import { News } from '../models/news/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(private newsRepository: NewsRepository) {}

    createNews(news:News){
        return this.newsRepository.create(news);
    }
}
