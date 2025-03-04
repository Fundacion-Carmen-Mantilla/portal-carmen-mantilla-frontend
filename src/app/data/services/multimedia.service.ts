import { Injectable } from '@angular/core';
import { MultimediaRepository } from '../repositories/multimedia/multimedia-repository';
import { Observable } from 'rxjs';
import { Multimedia } from '../models/multimedia/multimedia.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

    constructor(private multimediaRepo: MultimediaRepository) {}

    getMultimediaByStatus(): Observable<Multimedia[]> {
        return this.multimediaRepo.getAll().pipe(
            map(items => items.filter(item => item.status)) // ← Lógica de negocio aquí
        );
    }
}
