import { Pipe, PipeTransform } from '@angular/core';
import { isFilled } from '@prismicio/client';

type FilledType =
  | 'richText'
  | 'title'
  | 'image'
  | 'imageThumbnail'
  | 'link'
  | 'linkToMedia'
  | 'contentRelationship'
  | 'date'
  | 'timestamp'
  | 'color'
  | 'number'
  | 'keyText'
  | 'select'
  | 'embed'
  | 'geoPoint'
  | 'table'
  | 'integration'
  | 'repeatable'
  | 'group'
  | 'sliceZone'

@Pipe({
  name: 'isFilled',
  standalone: true
})
export class IsFilledPipe implements PipeTransform {
  transform(field: any, type: FilledType): boolean {
    switch (type) {
      case 'richText':
        return isFilled.richText(field);
      case 'title':
        return isFilled.title(field);
      case 'image':
        return isFilled.image(field);
      case 'imageThumbnail':
        return isFilled.imageThumbnail(field);
      case 'link':
        return isFilled.link(field);
      case 'linkToMedia':
        return isFilled.linkToMedia(field);
      case 'contentRelationship':
        return isFilled.contentRelationship(field);
      case 'date':
        return isFilled.date(field);
      case 'timestamp':
        return isFilled.timestamp(field);
      case 'color':
        return isFilled.color(field);
      case 'number':
        return isFilled.number(field);
      case 'keyText':
        return isFilled.keyText(field);
      case 'select':
        return isFilled.select(field);
      case 'embed':
        return isFilled.embed(field);
      case 'geoPoint':
        return isFilled.geoPoint(field);
      case 'table':
        return isFilled.table(field);
      case 'integration':
        return isFilled.integration(field);
      case 'repeatable':
        return isFilled.repeatable(field);
      case 'group':
        return isFilled.group(field);
      default:
        return false;
    }
  }
}
