import { Pipe, PipeTransform } from "@angular/core";
import {
  asLink,
  PrismicDocument,
  ContentRelationshipField,
  LinkField,
  LinkToMediaField,
  LinkResolverFunction, FilledLinkToWebField, FilledLinkToMediaField, FilledContentRelationshipField,
} from "@prismicio/client";

type AsLinkConfig<LinkResolverFunctionReturnType = string | null | undefined> = {
  linkResolver?: LinkResolverFunction<LinkResolverFunctionReturnType> | null
}

export type AsLinkReturnType<
  LinkResolverFunctionReturnType = string | null | undefined,
  Field extends LinkField | PrismicDocument | null | undefined =
      | LinkField
    | PrismicDocument
    | null
    | undefined,
> = Field extends | FilledLinkToWebField
  | FilledLinkToMediaField
  | FilledContentRelationshipField
  | PrismicDocument
  ? LinkResolverFunctionReturnType | string | null
  : null

@Pipe({
  name: "asLink",
  standalone: true,
})
export class AsLinkPipe implements PipeTransform {
  transform(
    linkFieldOrDocument: LinkField | LinkToMediaField | ContentRelationshipField | PrismicDocument,
    config?: AsLinkConfig,
  ): string | null | undefined {
    return asLink(linkFieldOrDocument, config);
  }
}
