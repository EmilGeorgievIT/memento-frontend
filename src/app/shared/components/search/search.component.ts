import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  locations: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];

  filteredStreets: Observable<string[]>;

  constructor(
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      location: ''
    });

    this.filteredStreets = this.searchForm.get('location').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(address => address.includes(filterValue));
  }

  submitSearch() {
    console.log(this.searchForm.value);
  }

  ngOnInit() {
  }

}
