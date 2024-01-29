import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const PERMISSION_SET_GROUP: Metadata<SalesforceMetadata.PermissionSetGroup> = {
  name: 'PermissionSetGroup',
  list: 'permissionSetGroups',
  extension: '.permissionsetgroup-meta.xml',
  metadataType: {} as SalesforceMetadata.PermissionSetGroup,
  setName: Function.getBasenameWithoutExtension,
};
