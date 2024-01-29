import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const AURA_TOKEN: Metadata<SalesforceMetadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraTokens',
  extension: '.tokens-meta.xml',
  metadataType: {} as SalesforceMetadata.AuraDefinitionBundle,
  setName: Function.getBasenameWithoutExtension,
};
