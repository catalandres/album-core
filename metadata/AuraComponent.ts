import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const AURA_COMPONENT: Metadata<SalesforceMetadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraComponents',
  extension: '.cmp-meta.xml',
  metadataType: {} as SalesforceMetadata.AuraDefinitionBundle,
  setName: Function.getBasenameWithoutExtension,
};
