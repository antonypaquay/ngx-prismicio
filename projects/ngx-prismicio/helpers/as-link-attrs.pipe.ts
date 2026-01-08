import { Pipe, PipeTransform } from "@angular/core";
import {
  asLinkAttrs,
  AsLinkAttrsConfig, FilledContentRelationshipField, FilledLinkToMediaField,
  FilledLinkToWebField,
  LinkField,
  LinkResolverFunction,
  PrismicDocument
} from '@prismicio/client';
import { AsLinkReturnType } from './as-link.pipe';

type AsLinkAttrsReturnType<
  LinkResolverFunctionReturnType = ReturnType<LinkResolverFunction>,
  Field extends LinkField | PrismicDocument | null | undefined =
      | LinkField
    | PrismicDocument
    | null
    | undefined,
> = Field extends | FilledLinkToWebField
  | FilledLinkToMediaField
  | FilledContentRelationshipField
  | PrismicDocument
  ? {
    href:
      | NonNullable<AsLinkReturnType<LinkResolverFunctionReturnType, Field>>
      | undefined
    target?: string
    rel?: string
  }
  : {
    href?: undefined
    target?: undefined
    rel?: undefined
  }

@Pipe({
  name: "asLinkAttrs",
  standalone: true,
})
export class AsLinkPipe implements PipeTransform {
  transform(
    linkFieldOrDocument: LinkField | PrismicDocument | null | undefined,
    config?: AsLinkAttrsConfig,
  ): AsLinkAttrsReturnType {
    return asLinkAttrs(linkFieldOrDocument, config);
  }
}
