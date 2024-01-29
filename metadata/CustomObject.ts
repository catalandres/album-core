import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const CUSTOM_OBJECT: Metadata<SalesforceMetadata.CustomObject> = {
  name: 'CustomObject',
  list: 'objects',
  extension: '.object-meta.xml',
  documentationUrl: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customobject.htm',
  metadataType: {} as SalesforceMetadata.CustomObject,
  setName: Function.getBasenameWithoutExtension,
  setFullName: Function.getBasenameWithoutExtension,
  transform: Function.transformCustomObject,
};
