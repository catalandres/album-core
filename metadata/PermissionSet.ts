import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const PERMISSION_SET: Metadata<SalesforceMetadata.PermissionSet> = {
  name: 'PermissionSet',
  list: 'permissionSets',
  extension: '.permissionset-meta.xml',
  metadataType: {} as SalesforceMetadata.PermissionSet,
  setName: Function.getBasenameWithoutExtension,
};
