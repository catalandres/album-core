import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const QUICK_ACTION: Metadata<SalesforceMetadata.QuickAction> = {
  name: 'QuickAction',
  list: 'quickActions',
  extension: '.quickAction-meta.xml',
  metadataType: {} as SalesforceMetadata.QuickAction,
  setName: Function.getSecondHalfOfBasenameSplitByPeriod,
  setObjectname: Function.getFirstHalfOfBasenameSplitByPeriod,
  setFullName: Function.getBasenameWithoutExtension,
};
