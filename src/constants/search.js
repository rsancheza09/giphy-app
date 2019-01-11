import { defineAction } from '../utils/defineActions';

export const SEARCH = defineAction(
  'SEARCH',
  ['INIT', 'ERROR', 'SUCCESS']
);

/*
 * It is the same as:
 */

// export const COUNTER_INCREMENT_REQUESTED = 'COUNTER::INCREMENT_REQUESTED';
// export const COUNTER_INCREMENT = 'COUNTER::INCREMENT';
// export const COUNTER_DECREMENT_REQUESTED = 'COUNTER::DECREMENT_REQUESTED';
// export const COUNTER_DECREMENT = 'COUNTER::DECREMENT';
