import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let val = value.filter(value => {
      if (args[0]) {
        if (!value.dop.toLowerCase().includes('aash') && !value.parties.toLowerCase().includes('aash') && !value.dop.toLowerCase().includes('sha') && !value.parties.toLowerCase().includes('sha')) {
          return false;
        }
      }
      if (!args[1].includes(value.survey.toString())) {
        return false;
      }
      for (let elem of args[2]) {
        elem = elem.toString().toLowerCase();
        if (args[3]) {
          // console.log(args[3]);
          // if (value.dop.toLowerCase() == elem || value.parties.toLowerCase() == elem || value.date.toLowerCase() == elem || value.value.toLowerCase() == elem) {
          //   return false;
          // }
        } else {
          if (!value.dop.toLowerCase().includes(elem) && !value.parties.toLowerCase().includes(elem) && !value.date.toLowerCase().includes(elem) && !value.value.toLowerCase().includes(elem)) {
            return false;
          }
        }


      }
      return true;
    });
    return val;
  }
}
