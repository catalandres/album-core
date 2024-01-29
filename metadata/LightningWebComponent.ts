import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const LIGHTNING_WEB_COMPONENT: Metadata<SalesforceMetadata.LightningComponentBundle> = {
  name: 'LightningComponentBundle',
  list: 'lightningWebComponents',
  extension: '.js-meta.xml',
  metadataType: {} as SalesforceMetadata.LightningComponentBundle,
  setName: Function.getBasenameWithoutExtension,
};
