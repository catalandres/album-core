import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const CUSTOM_TAB: Metadata<SalesforceMetadata.CustomTab> = {
  name: 'CustomTab',
  list: 'tabs',
  extension: '.tab-meta.xml',
  metadataType: {} as SalesforceMetadata.CustomTab,
  setName: Function.getBasenameWithoutExtension,
  transform: Function.transformCustomTab,
};
