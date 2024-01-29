import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const APEX_TRIGGER: Metadata<SalesforceMetadata.ApexTrigger> = {
  name: 'ApexTrigger',
  list: 'apexTriggers',
  extension: '.trigger-meta.xml',
  metadataType: {} as SalesforceMetadata.ApexTrigger,
  setName: Function.getBasenameWithoutExtension,
};
