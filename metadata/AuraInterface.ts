import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const AURA_INTERFACE: Metadata<SalesforceMetadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraInterfaces',
  extension: '.intf-meta.xml',
  metadataType: {} as SalesforceMetadata.AuraDefinitionBundle,
  setName: Function.getBasenameWithoutExtension,
};
