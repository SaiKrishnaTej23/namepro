import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  loggedInUser: any;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = of([]);

  ngOnInit() {
    this.loggedInUser = {
      uid: 'U819876',
      firstName: 'Sai Krishna Teja',
      lastName: 'Pothapragada',
      phoneticName: '',
      nameRecordingLink:''
    }
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
