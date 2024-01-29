import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const PROFILE: Metadata<SalesforceMetadata.Profile> = {
  name: 'Profile',
  list: 'profiles',
  extension: '.profile-meta.xml',
  metadataType: {} as SalesforceMetadata.Profile,
  setName: Function.getBasenameWithoutExtension,
};
