import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const USER_ACCESS_POLICY: Metadata<SalesforceMetadata.UserAccessPolicy> = {
  name: 'UserAccessPolicy',
  list: 'userAccessPolicies',
  extension: '.useraccesspolicy-meta.xml',
  metadataType: {} as SalesforceMetadata.UserAccessPolicy,
  setName: Function.getBasenameWithoutExtension,
};
