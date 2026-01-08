import { Pipe, PipeTransform } from '@angular/core';
import { documentToLinkField, PrismicDocument } from '@prismicio/client';

type SetOptional<T, Keys extends keyof T> = Omit<T, Keys> &
  Partial<Pick<T, Keys>>

@Pipe({
  name: 'documentToLinkField',
  standalone: true,
})
export class DocumentToLinkFieldPipe<TDocument extends SetOptional<PrismicDocument, "slugs">> implements PipeTransform {
  transform(prismicDocument: TDocument) {
    return documentToLinkField(prismicDocument);
  }
}
