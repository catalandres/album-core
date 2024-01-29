import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const AURA_APPLICATION: Metadata<SalesforceMetadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraApplications',
  extension: '.app-meta.xml',
  metadataType: {} as SalesforceMetadata.AuraDefinitionBundle,
  setName: Function.getBasenameWithoutExtension,
};
