/* @flow */

import type { ArenaB } from "@capnp-js/builder-core";

type u16 = number;

export class IncorrectTagError extends Error {
  +currentTag: u16;
  +fieldTag: u16;

  constructor(currentTag: u16, fieldTag: u16) {
    super();
    this.currentTag = currentTag;
    this.fieldTag = fieldTag;
  }
}

export class AdoptNonorphanError extends Error {}

export class MoveNonorphanError extends Error {}

export class ExternalOrphanError extends Error {
  +sourceArena: ArenaB;
  +targetArena: ArenaB;

  constructor(sourceArena: ArenaB, targetArena: ArenaB) {
    super();
    this.sourceArena = sourceArena;
    this.targetArena = targetArena;
  }
}
