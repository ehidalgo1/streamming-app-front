import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst',
  standalone: false,
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string): unknown {
    if(!value || (typeof value !== 'string') || value.length === 0) return null;
    value = value.toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
