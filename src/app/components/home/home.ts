import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  longUrl = '';
  shortUrl = '';
  loading = false;
  error = '';

  constructor(private api: ApiService) {}

  shortenUrl() {

    if (!this.longUrl) return;

    this.loading = true;
    this.error = '';

    this.api.shorten(this.longUrl).subscribe({

      next: (res: any) => {
        this.shortUrl = res.shortUrl;
        this.loading = false;
      },

      error: () => {
        this.error = 'Failed to shorten URL';
        this.loading = false;
      }

    });
  }

  copyUrl() {
    navigator.clipboard.writeText(this.shortUrl);
    alert('Copied!');
  }
}