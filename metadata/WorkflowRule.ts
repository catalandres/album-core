import * as SalesforceMetadata from '../salesforceMetadata';
import { Metadata } from '../metadataType';
import * as Function from '../functions/index';

export const WORKFLOW_RULE: Metadata<SalesforceMetadata.WorkflowRule> = {
  name: 'WorkflowRule',
  list: 'workflowRules',
  metadataType: {} as SalesforceMetadata.WorkflowRule,
  setName: Function.getFullNameValue,
  setObjectname: Function.getBasenameWithoutExtension,
  setFullName: Function.concatenateObjectNameAndName,
};
