/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Name } from './Name';
import type { NamedAPIResource } from './NamedAPIResource';

export type EncounterConditionValue = {
    /**
     * The identifier for this encounter condition value resource
     */
    id: number;
    /**
     * The name for this encounter condition value resource
     */
    name: string;
    /**
     * The condition this encounter condition value pertains to
     */
    condition: NamedAPIResource;
    /**
     * The name of this encounter condition value listed in different languages
     */
    names: Array<Name>;
};

