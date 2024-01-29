import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const AURA_EVENT: Metadata<SalesforceMetadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraEvents',
  extension: '.evt-meta.xml',
  metadataType: {} as SalesforceMetadata.AuraDefinitionBundle,
  setName: Function.getBasenameWithoutExtension,
};
