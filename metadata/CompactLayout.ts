import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const COMPACT_LAYOUT: Metadata<SalesforceMetadata.CompactLayout> = {
  name: 'CompactLayout',
  list: 'compactLayouts',
  extension: '.compactLayout-meta.xml',
  metadataType: {} as SalesforceMetadata.CompactLayout,
  setName: Function.getBasenameWithoutExtension,
  setObjectname: Function.getNameOfSecondToLastFolderLevel,
  setFullName: Function.concatenateObjectNameAndName,
};
