import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const APEX_CLASS: Metadata<SalesforceMetadata.ApexClass> = {
  name: 'ApexClass',
  list: 'apexClasses',
  extension: '.cls-meta.xml',
  metadataType: {} as SalesforceMetadata.ApexClass,
  setName: Function.getBasenameWithoutExtension,
};
