import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const LAYOUT: Metadata<SalesforceMetadata.Layout> = {
  name: 'Layout',
  list: 'layouts',
  extension: '.layout-meta.xml',
  metadataType: {} as SalesforceMetadata.Layout,
  setName: Function.getSecondHalfOfBasenameSplitByDash,
  setObjectname: Function.getFirstHalfOfBasenameSplitByDash,
  setFullName: Function.getBasenameWithoutExtension,
};
