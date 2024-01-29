import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const VALIDATION_RULE: Metadata<SalesforceMetadata.ValidationRule> = {
  name: 'ValidationRule',
  list: 'validationRules',
  extension: '.validationRule-meta.xml',
  metadataType: {} as SalesforceMetadata.ValidationRule,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
