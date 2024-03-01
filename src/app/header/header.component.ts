// header.component.ts
import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {
  searchTerm: string = '';
  searchResults: string[] = [];

  constructor(private sharedService: SearchService) {}

  search(): void {
    this.sharedService.searchItems(this.searchTerm).subscribe(
      (results: string[]) => {
        this.searchResults = results;
        console.log('Search results:', this.searchResults);
      },
      (error: any) => {
        console.error('Error during search:', error);
      }
    );
  }
}
