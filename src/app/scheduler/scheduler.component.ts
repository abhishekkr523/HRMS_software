import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { asyncScheduler, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  searchControl = new FormControl();
  results: any[] = [];

  constructor() {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300, asyncScheduler), 
      distinctUntilChanged(),
      switchMap(query => {
        console.log(`Query: ${query}`);
        return of([query]);
      })
    ).subscribe(results => {
      this.results = results;
      console.log('Results:', results);
    });
  }
}
