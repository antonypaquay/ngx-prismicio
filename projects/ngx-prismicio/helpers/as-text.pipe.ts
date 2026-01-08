import { Pipe, PipeTransform } from "@angular/core";
import { asText, RichTextField } from "@prismicio/client";

type AsTextConfig = {
  separator?: string
}

@Pipe({
  name: "asText",
  standalone: true,
})
export class AsTextPipe implements PipeTransform {
  transform(richTextField: RichTextField, config?: AsTextConfig): string {
    return asText(richTextField, config);
  }
}
