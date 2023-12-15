/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Name } from './Name';
import type { NamedAPIResource } from './NamedAPIResource';

export type Region = {
    id: number;
    locations: Array<NamedAPIResource>;
    name: string;
    names: Array<Name>;
    main_generation: NamedAPIResource;
    pokedexes: Array<NamedAPIResource>;
    version_groups: Array<NamedAPIResource>;
};

