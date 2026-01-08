import { BuildWidthSrcSetParams } from 'imgix-url-builder';
import { Pipe, PipeTransform } from '@angular/core';
import { asImageWidthSrcSet, ImageField } from '@prismicio/client';

type AsImageWidthSrcSetConfig = Omit<BuildWidthSrcSetParams, "widths"> & {
  widths?: "thumbnails" | BuildWidthSrcSetParams["widths"]
}

@Pipe({
  name: "asImageWidthSetSrc",
  standalone: true,
})
export class AsImageWidthSrcSetPipe implements PipeTransform {
  transform(value: ImageField, config?: AsImageWidthSrcSetConfig): {src: string, srcset: string} | null {
    return asImageWidthSrcSet(value, config);
  }
}
