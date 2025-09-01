import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);

  private clientsSignal = signal<Client[]>([]);
  readonly clients = this.clientsSignal.asReadonly();

  private apiUrl = 'http://localhost:8080/clients';

  loadClients(): void {
    this.http.get<Client[]>(this.apiUrl).subscribe({
      next: (data) => this.clientsSignal.set(data),
      error: (err) => console.error('❌ Błąd podczas pobierania klientów', err),
    });
  }

  addClient(client: Partial<Client>): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }
}
