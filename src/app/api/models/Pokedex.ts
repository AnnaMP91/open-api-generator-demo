/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Description } from './Description';
import type { NamedAPIResource } from './NamedAPIResource';
import type { PokemonEntry } from './PokemonEntry';

export type Pokedex = {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Array<Description>;
    pokemon_entries: Array<PokemonEntry>;
    region: NamedAPIResource;
};

