import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const APEX_PAGE: Metadata<SalesforceMetadata.ApexPage> = {
  name: 'ApexPage',
  list: 'apexPages',
  extension: '.page-meta.xml',
  metadataType: {} as SalesforceMetadata.ApexPage,
  setName: Function.getBasenameWithoutExtension,
};
