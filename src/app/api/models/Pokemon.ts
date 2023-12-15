/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamedAPIResource } from './NamedAPIResource';
import type { PokemonAbility } from './PokemonAbility';
import type { PokemonForm } from './PokemonForm';
import type { PokemonHeldItem } from './PokemonHeldItem';
import type { PokemonMove } from './PokemonMove';
import type { PokemonSprites } from './PokemonSprites';
import type { PokemonStat } from './PokemonStat';
import type { PokemonType } from './PokemonType';
import type { VersionGameIndex } from './VersionGameIndex';

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<PokemonAbility>;
    forms: Array<PokemonForm>;
    game_indices: Array<VersionGameIndex>;
    held_items: Array<PokemonHeldItem>;
    location_area_encounters: string;
    moves: Array<PokemonMove>;
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: Array<PokemonStat>;
    types: Array<PokemonType>;
};

