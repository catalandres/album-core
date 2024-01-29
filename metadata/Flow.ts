import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const FLOW: Metadata<SalesforceMetadata.Flow> = {
  name: 'Flow',
  list: 'flows',
  extension: '.flow-meta.xml',
  metadataType: {} as SalesforceMetadata.Flow,
  setName: Function.getBasenameWithoutExtension,
  transform: Function.transformFlow,
};
