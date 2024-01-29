import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const FLEXIPAGE: Metadata<SalesforceMetadata.FlexiPage> = {
  name: 'FlexiPage',
  list: 'flexipages',
  extension: '.flexipage-meta.xml',
  metadataType: {} as SalesforceMetadata.FlexiPage,
  setName: Function.getBasenameWithoutExtension,
};
