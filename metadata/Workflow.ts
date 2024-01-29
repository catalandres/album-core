import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Type from './index';

export const WORKFLOW: Metadata<SalesforceMetadata.Workflow> = {
  name: 'Workflow',
  list: 'workflows',
  extension: '.workflow-meta.xml',
  container: true,
  metadataType: {} as SalesforceMetadata.Workflow,
  children: {
    rules: Type.WORKFLOW_RULE,
  },
};
