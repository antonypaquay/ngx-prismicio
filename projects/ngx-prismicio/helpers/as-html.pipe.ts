import { Pipe, PipeTransform } from "@angular/core";
import { asHTML, HTMLRichTextSerializer, LinkResolverFunction, RichTextField } from "@prismicio/client"

type AsHTMLConfig = {
  linkResolver?: LinkResolverFunction | null
  serializer?: HTMLRichTextSerializer | null
}

@Pipe({
  name: "asHTML",
  standalone: true,
})
export class AsHTMLPipe implements PipeTransform {
  transform(value: RichTextField, config?: AsHTMLConfig): string {
    return asHTML(value, config);
  }
}
