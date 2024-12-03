import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  boardData = [
    {
      name: 'boardstandard',
      price: [
        { multiple: 12, metric: 'hour', price: 30 },
        { multiple: 1, metric: 'day', price: 40 },
        { multiple: 2, metric: 'day', price: 50 },
        { multiple: 3, metric: 'day', price: 60 },
        { multiple: 4, metric: 'day', price: 70 },
        { multiple: 5, metric: 'day', price: 80 },
        { multiple: 6, metric: 'day', price: 90 },
        { multiple: 1, metric: 'week', price: 100 },
      ],
    },
    {
      name: 'boardpremium',
      price: [
        { multiple: 12, metric: 'hour', price: 40 },
        { multiple: 1, metric: 'day', price: 50 },
        { multiple: 2, metric: 'day', price: 60 },
        { multiple: 3, metric: 'day', price: 70 },
        { multiple: 4, metric: 'day', price: 80 },
        { multiple: 5, metric: 'day', price: 90 },
        { multiple: 6, metric: 'day', price: 100 },
        { multiple: 1, metric: 'week', price: 110 },
      ],
    },
  ];
}
