import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const APEX_COMPONENT: Metadata<SalesforceMetadata.ApexComponent> = {
  name: 'ApexComponent',
  list: 'apexComponents',
  extension: '.component-meta.xml',
  metadataType: {} as SalesforceMetadata.ApexComponent,
  setName: Function.getBasenameWithoutExtension,
};
