import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const CUSTOM_FIELD: Metadata<SalesforceMetadata.CustomField> = {
  name: 'CustomField',
  list: 'fields',
  extension: '.field-meta.xml',
  metadataType: {} as SalesforceMetadata.CustomField,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
