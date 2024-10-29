import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeNames',
  standalone: false,
})
export class CapitalizeNamesPipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value || (typeof value !== 'string') || value.length === 0) return null;
    value = value.toLowerCase();
    const values: string[] = value.split(' ');
    let valueFinal: string = '';
    values.forEach(val => {
      val = val.trim();
      valueFinal = valueFinal + val.charAt(0).toUpperCase() + val.slice(1) + ' ';
    });
    return valueFinal;
  }

}
