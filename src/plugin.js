/**
 * esdoc-plugin-npm -- In development...
 */

'use strict';

// import fs         from 'fs-extra';
// import path       from 'path';

// let config;
let options;
// let tags;

// ESDoc plugin callbacks -------------------------------------------------------------------------------------------

/**
 * Sanitizes optional parameters.
 *
 * @param {object}   ev - Event from ESDoc containing data field.
 */
export function onStart(ev)
{
   // Stores sanitized option map.
   options = typeof ev.data.option === 'object' ? ev.data.option : {};

   // Stores option that if true silences logging output.
   options.silent = typeof options.silent === 'boolean' ? options.silent : true;
   options.verbose = typeof options.verbose === 'boolean' ? options.verbose : false;
}

// /**
//  * Stores the ESDoc configuration file for later use.
//  *
//  * @param {object}   ev - Event from ESDoc containing data field.
//  */
// export function onHandleConfig(ev)
// {
//   config = ev.data.config;
// }

// /**
//  * @param {object}   ev - Event from ESDoc containing data field
//  */
// export function onHandleTag(ev)
// {
//   tags = ev.data.tag;
// }

// /**
//  * @param {object}   ev - Event from ESDoc containing data field.
//  */
//  export function onHandleAST(ev)
//  {
//  }

// /**
//  * @param {object}   ev - Event from ESDoc containing data field
//  */
// export function onHandleHTML(ev)
// {
// }

// /**
//  *
//  */
// export function onComplete()
// {
// }