import type { IAction, IActorArgs, IActorOutput, IActorTest } from '@comunica/core';
import { Actor } from '@comunica/core';
import type * as RDF from '@rdfjs/types';

/**
 * A comunica actor for rdf-metadata-extract events.
 *
 * Actor types:
 * * Input:  IActionRdfMetadataExtract:      A metadata quad stream
 * * Test:   <none>
 * * Output: IActorRdfMetadataExtractOutput: A metadata hash.
 *
 * @see IActionRdfDereference
 * @see IActorRdfDereferenceOutput
 */
export abstract class ActorRdfMetadataExtract
  extends Actor<IActionRdfMetadataExtract, IActorTest, IActorRdfMetadataExtractOutput> {
  public constructor(args: IActorArgs<IActionRdfMetadataExtract, IActorTest, IActorRdfMetadataExtractOutput>) {
    super(args);
  }
}

export interface IActionRdfMetadataExtract extends IAction {
  /**
   * The page URL from which the quads were retrieved.
   */
  url: string;
  /**
   * The resulting quad data stream.
   */
  metadata: RDF.Stream;
  /**
   * The headers of the page.
   */
  headers?: Record<string, string>;
}

export interface IActorRdfMetadataExtractOutput extends IActorOutput {
  /**
   * A metadata key-value mapping.
   */
  metadata: Record<string, any>;
}
