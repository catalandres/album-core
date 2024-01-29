// Copyright 2024 Andrés Catalán (@catalandres)

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'node:fs';
import * as xml2js from 'xml2js';
import { array } from './util';
import { getMetadataExtension } from './util';
import { Metadata as SalesforceMetadata} from './salesforceMetadata';
import { Extended, Album, MetadataType, Metadata } from './metadataType';

import { ALL_METADATA_TYPES } from './allMetadataTypes';

export class MetadataReader {
  public album: Album = {};
  private projectFilenames: string[];
  private metadataFilenames: string[];
  private fileTypesByExtension: Map<string, MetadataType>;
  private metadataExtensions: Set<string>;

  public constructor(filenames: string[]) {
    this.projectFilenames = filenames;
    this.fileTypesByExtension = new Map();

    for (const thisMetadataType of ALL_METADATA_TYPES as MetadataType[]) {
      if (thisMetadataType.extension) {
        this.fileTypesByExtension.set(thisMetadataType.extension, thisMetadataType);
      }
    }
    this.metadataExtensions = new Set(this.fileTypesByExtension.keys());

    this.metadataFilenames = this.projectFilenames.filter((theFile) => this.isMetadataFile(theFile));

    for (const thisFile of this.metadataFilenames) {
      const thisMetadataType: MetadataType = this.fileTypesByExtension.get(getMetadataExtension(thisFile))!;
      const xml = fs.readFileSync(thisFile, 'utf-8');
      this.absorb(getMetadata<Extended<typeof thisMetadataType.metadataType>>(xml, thisFile, thisMetadataType));
    }
  }

  private absorb(album: Album): void {
    for (const thisList of Object.keys(album)) {
      if (!this.album[thisList]) {
        this.album[thisList] = [];
      }
      this.album[thisList].push(...album[thisList]);
    }
  }

  private isMetadataFile(thisFile: string): boolean {
    return this.metadataExtensions.has(getMetadataExtension(thisFile));
  }
}

const parserOptions: xml2js.ParserOptions = {
  explicitArray: false,
  mergeAttrs: true,
  valueProcessors: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    xml2js.processors.parseNumbers,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    xml2js.processors.parseBooleans,
  ],
};

function getMetadata<SalesforceMetadataType extends SalesforceMetadata>(xml: string, fileName: string, definition: MetadataType): Album {
  const album: Album = {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  xml2js.parseString(xml, parserOptions, (err, result: Record<string, Extended<SalesforceMetadataType>>) => {
    const theRecord = result[definition.name];
    if (!definition.container) {
      treatRecord(theRecord, definition, fileName);
      album[definition.list] = [theRecord];
    }
    if (definition.children) {
      for (const listName of Object.keys(definition.children)) {
        const thisMetadataType = definition.children[listName];
        album[thisMetadataType.list] = [];
        const records = array(theRecord[listName]) as Array<Extended<typeof thisMetadataType.metadataType>>;
        for (const thisRecord of records) {
          treatRecord(thisRecord, thisMetadataType, fileName);
          album[thisMetadataType.list].push(thisRecord as Extended<SalesforceMetadataType>);
        }
      }
    }
  });
  return album;
}

function treatRecord<SalesforceMetadataType extends SalesforceMetadata>(record: Extended<SalesforceMetadataType>, metadataType: Metadata<SalesforceMetadataType>, fileName: string): void {
  record.fileName = fileName;
  if (metadataType.setName) {
    record.name = metadataType.setName(record);
  }
  if (metadataType.setObjectname) {
    record.objectName = metadataType.setObjectname(record);
  }
  if (metadataType.setFullName) {
    record.fullName = metadataType.setFullName(record);
  }
  if (metadataType.transform) {
    metadataType.transform(record);
  }
}
