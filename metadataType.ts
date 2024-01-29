import { Metadata as SalesforceMetadata } from './salesforceMetadata';

export type Album = Record<string, Array<Extended<SalesforceMetadata>>>;

export type Extended<T> = T &
  Record<string, unknown> & {
    name: string;
    objectName: string;
    fullName: string;
    fileName: string;
  };

export interface MetadataType {
  readonly name: string;
  readonly list: string;
  readonly extension?: string;
  readonly metadataType: SalesforceMetadata;
  readonly documentationUrl?: string;
  readonly container?: boolean;
  readonly setName?: (record: Record<string, unknown>) => string;
  readonly setObjectname?: (record: Record<string, unknown>) => string;
  readonly setFullName?: (record: Record<string, unknown>) => string;
  readonly setLabel?: (record: Record<string, unknown>) => string;
  readonly transform?: (record: Record<string, unknown>) => void;
  readonly children?: Record<string, MetadataType>;
}

export interface Metadata<SalesforceMetadataType extends SalesforceMetadata> extends MetadataType {
  readonly metadataType: SalesforceMetadataType;
}
