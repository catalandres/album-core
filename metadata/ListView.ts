import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const LIST_VIEW: Metadata<SalesforceMetadata.ListView> = {
  name: 'ListView',
  list: 'listViews',
  extension: '.listView-meta.xml',
  metadataType: {} as SalesforceMetadata.ListView,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
