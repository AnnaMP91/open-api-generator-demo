/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Name } from './Name';
import type { NamedAPIResource } from './NamedAPIResource';

export type EggGroup = {
    /**
     * The identifier for this egg group resource
     */
    id: number;
    /**
     * The name for this egg group resource
     */
    name: string;
    /**
     * The name of this egg group listed in different languages
     */
    names: Array<Name>;
    /**
     * A list of all Pokemon species that are members of this egg group
     */
    pokemon_species: Array<NamedAPIResource>;
};

