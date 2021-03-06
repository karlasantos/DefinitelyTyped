// NOTE: These definitions support NodeJS and TypeScript 3.5.

// Reference required types from the default lib:
/// <reference lib="es2018" />
/// <reference lib="esnext.asynciterable" />
/// <reference lib="esnext.intl" />
/// <reference lib="esnext.bigint" />

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.2/index.d.ts" />

// TypeScript 3.5-specific augmentations:
/// <reference path="wasi.d.ts" />
