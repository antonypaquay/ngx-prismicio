import { Pipe, PipeTransform } from "@angular/core";
import { asText, RichTextField } from "@prismicio/client";

@Pipe({
  name: "asText",
  standalone: true,
})
export class AsTextPipe implements PipeTransform {
  transform(value: RichTextField): string {
    return asText(value);
  }
}
