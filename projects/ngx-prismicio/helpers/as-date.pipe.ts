import { Pipe, PipeTransform } from "@angular/core";
import { asDate, DateField, TimestampField } from "@prismicio/client";

@Pipe({
  name: "asDate",
  standalone: true,
})
export class AsDatePipe implements PipeTransform {
  transform(field: DateField | TimestampField): Date | null {
    return asDate(field);
  }
}
