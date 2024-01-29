import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const RECORD_TYPE: Metadata<SalesforceMetadata.RecordType> = {
  name: 'RecordType',
  list: 'recordTypes',
  extension: '.recordType-meta.xml',
  metadataType: {} as SalesforceMetadata.RecordType,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
