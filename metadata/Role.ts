import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const ROLE: Metadata<SalesforceMetadata.Role> = {
  name: 'Role',
  list: 'roles',
  extension: '.role-meta.xml',
  metadataType: {} as SalesforceMetadata.Role,
  setFullName: Function.getBasenameWithoutExtension,
  transform: Function.transformRole,
};
