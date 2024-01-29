import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const WEBLINK: Metadata<SalesforceMetadata.WebLink> = {
  name: 'WebLink',
  list: 'webLinks',
  extension: '.webLink-meta.xml',
  metadataType: {} as SalesforceMetadata.WebLink,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
