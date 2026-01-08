import { Pipe, PipeTransform } from "@angular/core";
import { asImageSrc, ImageField } from "@prismicio/client";
import { ImgixURLParams } from 'imgix-url-builder';

@Pipe({
  name: "asImageSrc",
  standalone: true,
})
export class AsImageSrcPipe implements PipeTransform {
  transform(value: ImageField, config?: ImgixURLParams): string | null {
    return asImageSrc(value, config);
  }
}
