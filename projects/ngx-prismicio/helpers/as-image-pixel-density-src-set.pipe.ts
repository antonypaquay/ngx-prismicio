import { Pipe, PipeTransform } from "@angular/core";
import { asImagePixelDensitySrcSet, ImageField } from "@prismicio/client";
import { BuildPixelDensitySrcSetParams } from 'imgix-url-builder';

type AsImagePixelDensitySrcSetConfig = Omit<
  BuildPixelDensitySrcSetParams,
  "pixelDensities"
> &
  Partial<Pick<BuildPixelDensitySrcSetParams, "pixelDensities">>

@Pipe({
  name: "asImagePixelDensitySrcSet",
  standalone: true,
})
export class AsImagePixelDensitySrcSetPipe implements PipeTransform {
  transform(value: ImageField, config?: AsImagePixelDensitySrcSetConfig): {} | null {
    return asImagePixelDensitySrcSet(value, config);
  }
}
