/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Name } from './Name';
import type { NamedAPIResource } from './NamedAPIResource';

export type EncounterCondition = {
    /**
     * The identifier for this encounter condition resource
     */
    id: number;
    /**
     * The name for this encounter condition resource
     */
    name: string;
    /**
     * A list of values that are used with this encounter condition
     */
    values: Array<NamedAPIResource>;
    /**
     * The name of this encounter condition listed in different languages
     */
    names: Array<Name>;
};

