import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const FIELD_SET: Metadata<SalesforceMetadata.FieldSet> = {
  name: 'FieldSet',
  list: 'fieldSets',
  extension: '.fieldSet-meta.xml',
  metadataType: {} as SalesforceMetadata.FieldSet,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
