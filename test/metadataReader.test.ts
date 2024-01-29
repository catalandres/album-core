import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import * as path from 'node:path';
import { MetadataReader } from '../album';
import * as fsx from 'fs-extra';
import { Extended } from '../metadataType';
import * as SalesforceMetadata from '../salesforceMetadata';
import { array } from '../util';


const folderName = 'test-scenario-' + new Date().getTime().toString();

describe('MetadataReader', () => {

    beforeAll(() => {
        fsx.mkdirSync(folderName);
        fsx.copySync('./src/test/mocks/sfdx-project-mock', folderName);
    });

    // ApexClass

    test('parses ApexClass files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'classes', 'ClassOne.cls-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.apexClasses.length).toBe(1);

        const apexClass = reader.album.apexClasses[0];
        expect(Object.keys(apexClass).length).toBe(5);
        expect(apexClass.name).toBe('ClassOne');
        expect(apexClass.apiVersion).toBe(59);
        expect(apexClass.status).toBe('Active');
        expect(apexClass.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(apexClass.fileName).toBe(fileName);
    });

    // ApexComponent

    test('parses ApexComponent files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'components', 'VisualforceComponentOne.component-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.apexComponents.length).toBe(1);

        const apexComponent = reader.album.apexComponents[0];
        expect(Object.keys(apexComponent).length).toBe(5);
        expect(apexComponent.name).toBe('VisualforceComponentOne');
        expect(apexComponent.apiVersion).toBe(59);
        expect(apexComponent.label).toBe('VisualforceComponentOne');
        expect(apexComponent.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(apexComponent.fileName).toBe(fileName);
    });

    // ApexPage

    test('parses ApexPage files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'pages', 'VisualforcePageOne.page-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.apexPages.length).toBe(1);

        const apexPage = reader.album.apexPages[0];
        expect(Object.keys(apexPage).length).toBe(7);
        expect(apexPage.name).toBe('VisualforcePageOne');
        expect(apexPage.apiVersion).toBe(59);
        expect(apexPage.label).toBe('VisualforcePageOne');
        expect(apexPage.availableInTouch).toBe(false);
        expect(apexPage.confirmationTokenRequired).toBe(false);
        expect(apexPage.description).toBeUndefined();
        expect(apexPage.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(apexPage.fileName).toBe(fileName);
    });

    // ApexTrigger

    test('parses ApexTrigger files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'triggers', 'TriggerOne.trigger-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.apexTriggers.length).toBe(1);

        const apexTrigger = reader.album.apexTriggers[0];
        expect(Object.keys(apexTrigger).length).toBe(5);
        expect(apexTrigger.name).toBe('TriggerOne');
        expect(apexTrigger.apiVersion).toBe(59);
        expect(apexTrigger.status).toBe('Active');
        expect(apexTrigger.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(apexTrigger.fileName).toBe(fileName);
    });

    // AuraApplication

    test('parses AuraApplication files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'aura', 'AuraApplicationOne', 'AuraApplicationOne.app-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.auraApplications.length).toBe(1);

        const auraApplication = reader.album.auraApplications[0];
        expect(Object.keys(auraApplication).length).toBe(5);
        expect(auraApplication.name).toBe('AuraApplicationOne');
        expect(auraApplication.apiVersion).toBe(59);
        expect(auraApplication.description).toBe('A Lightning Component Bundle');
        expect(auraApplication.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(auraApplication.fileName).toBe(fileName);
    });

    // AuraComponent

    test('parses AuraComponent files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'aura', 'AuraComponentOne', 'AuraComponentOne.cmp-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);

        console.log(reader.album);

        expect(reader.album.auraComponents.length).toBe(1);

        const auraComponent = reader.album.auraComponents[0];
        expect(Object.keys(auraComponent).length).toBe(5);
        expect(auraComponent.name).toBe('AuraComponentOne');
        expect(auraComponent.apiVersion).toBe(59);
        expect(auraComponent.description).toBe('A Lightning Component Bundle');
        expect(auraComponent.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(auraComponent.fileName).toBe(fileName);
    });

    // AuraEvent

    test('parses AuraEvent files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'aura', 'AuraEventOne', 'AuraEventOne.evt-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.auraEvents.length).toBe(1);

        const auraEvent = reader.album.auraEvents[0];
        expect(Object.keys(auraEvent).length).toBe(5);
        expect(auraEvent.name).toBe('AuraEventOne');
        expect(auraEvent.apiVersion).toBe(59);
        expect(auraEvent.description).toBe('A Lightning Component Bundle');
        expect(auraEvent.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(auraEvent.fileName).toBe(fileName);
    });

    // AuraInterface

    test('parses AuraInterface files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'aura', 'AuraInterfaceOne', 'AuraInterfaceOne.intf-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.auraInterfaces.length).toBe(1);

        const auraInterface = reader.album.auraInterfaces[0];
        expect(Object.keys(auraInterface).length).toBe(5);
        expect(auraInterface.name).toBe('AuraInterfaceOne');
        expect(auraInterface.apiVersion).toBe(59);
        expect(auraInterface.description).toBe('A Lightning Component Bundle');
        expect(auraInterface.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(auraInterface.fileName).toBe(fileName);
    });

    // AuraTokens

    test('parses AuraTokens files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'aura', 'AuraTokenOne', 'AuraTokenOne.tokens-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.auraTokens.length).toBe(1);

        const auraTokens = reader.album.auraTokens[0];
        expect(Object.keys(auraTokens).length).toBe(5);
        expect(auraTokens.name).toBe('AuraTokenOne');
        expect(auraTokens.apiVersion).toBe(59);
        expect(auraTokens.description).toBe('A Lightning Component Bundle');
        expect(auraTokens.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(auraTokens.fileName).toBe(fileName);
    });
    
    // CompactLayout

    test('parses CompactLayout files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'compactLayouts', 'CompactLayoutOne.compactLayout-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.compactLayouts.length).toBe(1);

        const compactLayout = reader.album.compactLayouts[0] as Extended<SalesforceMetadata.CompactLayout>;
        expect(Object.keys(compactLayout).length).toBe(7);
        expect(compactLayout.fullName).toBe('CustomObjectOne__c.CompactLayoutOne');
        expect(compactLayout.name).toBe('CompactLayoutOne');
        expect(compactLayout.objectName).toBe('CustomObjectOne__c');
        expect(compactLayout.label).toBe('Compact Layout One');
        expect(compactLayout.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(compactLayout.fileName).toBe(fileName);
        expect(array(compactLayout.fields).length).toBe(1);
        expect(compactLayout.fields).toContain('Name');
    });

    // CustomField - checkbox

    test('parses CustomField (checkbox) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'fields', 'CheckboxOne__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(11);
        expect(customField.fullName).toBe('CustomObjectOne__c.CheckboxOne__c');
        expect(customField.name).toBe('CheckboxOne__c');
        expect(customField.objectName).toBe('CustomObjectOne__c');
        expect(customField.label).toBe('Checkbox One');
        expect(customField.type).toBe('Checkbox');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBe(true);
        expect(customField.required).toBeUndefined();
        expect(customField.externalId).toBe(false);
        expect(customField.trackTrending).toBe(false);
    });

    // CustomField - date

    test('parses CustomField (date) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'fields', 'DateOne__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(13);
        expect(customField.fullName).toBe('CustomObjectOne__c.DateOne__c');
        expect(customField.name).toBe('DateOne__c');
        expect(customField.objectName).toBe('CustomObjectOne__c');
        expect(customField.label).toBe('Date One');
        expect(customField.type).toBe('Date');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBeUndefined();
        expect(customField.required).toBe(false);
        expect(customField.externalId).toBe(false);
        expect(customField.trackTrending).toBe(false);
    });

    // CustomField - picklist

    test('parses CustomField (picklist) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'fields', 'PicklistOne__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        console.log(reader.album);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(14);
        expect(customField.fullName).toBe('CustomObjectOne__c.PicklistOne__c');
        expect(customField.name).toBe('PicklistOne__c');
        expect(customField.objectName).toBe('CustomObjectOne__c');
        expect(customField.label).toBe('Picklist One');
        expect(customField.type).toBe('Picklist');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBeUndefined();
        expect(customField.required).toBe(false);
        expect(customField.externalId).toBe(false);
        expect(customField.trackHistory).toBe(false);
        expect(customField.trackTrending).toBe(false);
        expect(customField.description).toBe('Description');
        expect(customField.inlineHelpText).toBe('Help text');

        expect(customField.valueSet).toBeDefined();
        const valueSet = customField.valueSet as SalesforceMetadata.ValueSet;
        console.log(valueSet.valueSetDefinition?.value);
        expect(valueSet.restricted).toBe(true);
        expect(valueSet.valueSetDefinition?.sorted).toBe(false);

        expect(valueSet.valueSetDefinition).toBeDefined();
        const valueSetValues = valueSet.valueSetDefinition?.value as Array<SalesforceMetadata.CustomValue>;
        console.log(valueSetValues);
        expect(valueSetValues.length).toBe(5);
        expect(valueSetValues[0].fullName).toBe('One');
        expect(valueSetValues[0].label).toBe('One');
        expect(valueSetValues[0].default).toBe(false);
        expect(valueSetValues[1].fullName).toBe('Two');
        expect(valueSetValues[1].label).toBe('Two');
        expect(valueSetValues[1].default).toBe(false);
        expect(valueSetValues[2].fullName).toBe('Three');
        expect(valueSetValues[2].label).toBe('Three');
        expect(valueSetValues[2].default).toBe(false);
        expect(valueSetValues[3].fullName).toBe('Four');
        expect(valueSetValues[3].label).toBe('Four');
        expect(valueSetValues[3].default).toBe(false);
        expect(valueSetValues[4].fullName).toBe('Five');
        expect(valueSetValues[4].label).toBe('Five');
        expect(valueSetValues[4].default).toBe(false);
    });

    // CustomField - formula

    test('parses CustomField (formula) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'fields', 'FormulaOne__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(15);
        expect(customField.fullName).toBe('CustomObjectOne__c.FormulaOne__c');
        expect(customField.name).toBe('FormulaOne__c');
        expect(customField.objectName).toBe('CustomObjectOne__c');
        expect(customField.label).toBe('Formula One');
        expect(customField.type).toBe('Number');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBeUndefined();
        expect(customField.required).toBe(false);
        expect(customField.externalId).toBe(false);
        expect(customField.unique).toBe(false);
        expect(customField.trackTrending).toBeUndefined();
        expect(customField.trackHistory).toBe(false);
        expect(customField.precision).toBe(18);
        expect(customField.scale).toBe(0);
        expect(customField.formula).toBe(1);
        expect(customField.formulaTreatBlanksAs).toBe('BlankAsZero');
    });

    // CustomField - lookup

    test('parses CustomField (lookup) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectTwo__c', 'fields', 'CustomObjectOne__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(16);
        expect(customField.fullName).toBe('CustomObjectTwo__c.CustomObjectOne__c');
        expect(customField.name).toBe('CustomObjectOne__c');
        expect(customField.objectName).toBe('CustomObjectTwo__c');
        expect(customField.label).toBe('Custom Object One');
        expect(customField.type).toBe('Lookup');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBeUndefined();
        expect(customField.required).toBe(false);
        expect(customField.externalId).toBe(false);
        expect(customField.trackTrending).toBe(false);
        expect(customField.referenceTo).toBe('CustomObjectOne__c');
        expect(customField.relationshipLabel).toBe('Custom Object Two');
        expect(customField.relationshipName).toBe('CustomObjectTwo');
        expect(customField.deleteConstraint).toBe('Restrict');
    });

    // CustomField - master-detail

    test('parses CustomField (master-detail) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectTwo__c', 'fields', 'Account__c.field-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.fields.length).toBe(1);

        const customField = reader.album.fields[0] as Extended<SalesforceMetadata.CustomField>;
        expect(Object.keys(customField).length).toBe(15);
        expect(customField.fullName).toBe('CustomObjectTwo__c.Account__c');
        expect(customField.name).toBe('Account__c');
        expect(customField.objectName).toBe('CustomObjectTwo__c');
        expect(customField.label).toBe('Account');
        expect(customField.type).toBe('MasterDetail');
        expect(customField.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customField.fileName).toBe(fileName);
        expect(customField.defaultValue).toBeUndefined();
        expect(customField.required).toBeUndefined();
        expect(customField.externalId).toBe(false);
        expect(customField.trackTrending).toBe(false);
        expect(customField.referenceTo).toBe('Account');
        expect(customField.relationshipLabel).toBe('Custom Object Two');
        expect(customField.relationshipName).toBe('CustomObjectTwo');
        expect(customField.reparentableMasterDetail).toBe(true);
        expect(customField.writeRequiresMasterRead).toBe(false);
    });

    // CustomObject - standard

    test('parses CustomObject (standard) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'Account', 'Account.object-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.objects.length).toBe(1);

        const customObject = reader.album.objects[0] as Extended<SalesforceMetadata.CustomObject>;

        console.log(customObject);

        expect(Object.keys(customObject).length).toBe(11);
        expect(customObject.fullName).toBe('Account');
        expect(customObject.name).toBe('Account');
        expect(customObject.label).toBeUndefined();
        expect(customObject.pluralLabel).toBeUndefined();
        expect(customObject.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customObject.fileName).toBe(fileName);
        expect(customObject.deploymentStatus).toBeUndefined();
        expect(customObject.sharingModel).toBe('Private');
        expect(customObject.externalSharingModel).toBe('Private');
        expect(customObject.compactLayoutAssignment).toBe('SYSTEM');
        expect(customObject.enableEnhancedLookup).toBeUndefined();
        expect(customObject.enableHistory).toBe(false);
        expect(customObject.enableFeeds).toBe(true);
        expect(customObject.recordTypeTrackFeedHistory).toBeUndefined();
        expect(customObject.recordTypeTrackHistory).toBeUndefined();

        // TODO Action Overrides
        // TODO Search Layouts
    });

    // CustomObject - custom

    test('parses CustomObject (custom) files properly', () => {
        const fileName = [folderName, 'force-app', 'main', 'default', 'objects', 'CustomObjectOne__c', 'CustomObjectOne__c.object-meta.xml'].join(path.sep);
        expect(fsx.existsSync(fileName)).toBeTruthy();

        const reader = new MetadataReader([ fileName ]);
        expect(reader.album.objects.length).toBe(1);

        const customObject = reader.album.objects[0] as Extended<SalesforceMetadata.CustomObject>;
        expect(Object.keys(customObject).length).toBe(26);
        expect(customObject.fullName).toBe('CustomObjectOne__c');
        expect(customObject.name).toBe('CustomObjectOne__c');
        expect(customObject.label).toBe('Custom Object One');
        expect(customObject.pluralLabel).toBe('Custom Object One');
        expect(customObject.xmlns).toBe('http://soap.sforce.com/2006/04/metadata');
        expect(customObject.fileName).toBe(fileName);
        expect(customObject.deploymentStatus).toBe('Deployed');
        expect(customObject.sharingModel).toBe('ReadWrite');
        expect(customObject.externalSharingModel).toBe('Private');
        expect(customObject.compactLayoutAssignment).toBe('CompactLayoutOne');
        expect(customObject.enableEnhancedLookup).toBeUndefined();
        expect(customObject.enableHistory).toBe(true);
        expect(customObject.enableFeeds).toBe(false);
        expect(customObject.enableHistory).toBe(true);
        expect(customObject.recordTypeTrackFeedHistory).toBeUndefined();
        expect(customObject.recordTypeTrackHistory).toBe(false);

        // TODO Action Overrides
        // TODO Search Layouts
    });

    // CustomObject - custom metadata types

    // CustomObject - custom settings

    // CustomObject - external objects

    // CustomObject - big objects

    // CustomObject - platform event

    // CustomTab

    // FieldSet

    // FlexiPage

    // Flow

    // Layout

    // LightningWebComponent

    // ListView

    // PermissionSet

    // PermissionSetGroup

    // Profile

    // QuickAction

    // RecordType

    // Role

    // UserAccessPolicy

    // ValidationRule

    // Workflow

    // WorkflowRule

    afterAll(() => {
        fsx.rmdirSync(folderName, { recursive: true });
    });
});