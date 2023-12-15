/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Effect } from './Effect';
import type { NamedAPIResource } from './NamedAPIResource';

export type AbilityEffectChange = {
    effect_entries: Array<Effect>;
    /**
     * The version group in which the ability effect change occurred.
     */
    version_group: NamedAPIResource;
};

