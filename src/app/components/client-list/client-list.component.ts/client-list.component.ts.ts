import { Component, inject, OnInit, ViewChild } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
@Component({
  selector: 'app-client-list.component.ts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client-list.component.ts.html',
  styleUrl: './client-list.component.ts.scss',
})
export class ClientListComponent implements OnInit {
  private clientService = inject(ClientService);

  newClient: Partial<Client> = { firstName: '', lastName: '', email: '' };

  @ViewChild('clientForm') clientForm!: NgForm;

  ngOnInit(): void {
    this.clientService.loadClients();
  }

  get clients() {
    return this.clientService.clients();
  }

  addClient() {
    this.clientService.addClient(this.newClient).subscribe(() => {
      this.clientService.loadClients();
      this.newClient = { firstName: '', lastName: '', email: '' };
      this.clientForm.resetForm(this.newClient);
    });
  }
}
