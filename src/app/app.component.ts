import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { exit } from 'process';
import masterJson from '../assets/csvjson.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  masterData = [];
  surveys = [];

  headJson = {
    "Sno.": "",
    "Description of property": "",
    "Reg.Date\nExe.Date\nPres.Date": "",
    "Nature &\nMkt.Value\nCon. Value": "",
    "Name of Parties Executant(EX) & Claimants(CL)": "",
    "Vol/Pg No.\nCD No.\nDoct No./Year": "",
    "Survey No": ""
  }
  heading = [];
  years = [];
  target = 0;
  filters = [];
  term: string;
  collapseAll = false;
  isaash = false;


  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.target = 0;
    for (let key of Object.keys(this.headJson)) {
      this.heading.push(key)
    }
    let yr = 2021;
    while (yr > 1992) {
      this.years.push(yr);
      yr--;
    }
    this.masterData = Array.from(masterJson);
  }

  sortData(year) {
    return this.masterData.filter((detail) => {
      if (detail['date'])
        return (
          detail['date'].includes(year)
        );
    });
  }

  addRemoveArray(arr, state, val) {
    if (state)
      arr == 1 ? this.surveys.push(val) : this.filters.push(val);
    else
      arr == 1 ? this.surveys = this.surveys.filter(item => item !== val) : this.filters = this.filters.filter(item => item !== val)
  }

  isOwn(value) {
    if (!value.dop.toLowerCase().includes('aash') && !value.parties.toLowerCase().includes('aash') && !value.dop.toLowerCase().includes('sha') && !value.parties.toLowerCase().includes('sha')) {
      return false;
    }
    return true;
  }
}

