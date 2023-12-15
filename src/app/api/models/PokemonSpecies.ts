/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Description } from './Description';
import type { EggGroup } from './EggGroup';
import type { EvolutionChain } from './EvolutionChain';
import type { FlavorText } from './FlavorText';
import type { Generation } from './Generation';
import type { Genus } from './Genus';
import type { GrowthRate } from './GrowthRate';
import type { Name } from './Name';
import type { PalParkEncounterArea } from './PalParkEncounterArea';
import type { PokemonColor } from './PokemonColor';
import type { PokemonHabitat } from './PokemonHabitat';
import type { PokemonShape } from './PokemonShape';
import type { PokemonSpeciesDexEntry } from './PokemonSpeciesDexEntry';
import type { PokemonSpeciesVariety } from './PokemonSpeciesVariety';

export type PokemonSpecies = {
    id?: number;
    name?: string;
    order?: number;
    gender_rate?: number;
    capture_rate?: number;
    base_happiness?: number;
    is_baby?: boolean;
    hatch_counter?: number;
    has_gender_differences?: boolean;
    forms_switchable?: boolean;
    growth_rate?: GrowthRate;
    pokedex_numbers?: Array<PokemonSpeciesDexEntry>;
    egg_groups?: Array<EggGroup>;
    color?: PokemonColor;
    shape?: PokemonShape;
    evolves_from_species?: PokemonSpecies;
    evolution_chain?: EvolutionChain;
    habitat?: PokemonHabitat;
    generation?: Generation;
    names?: Array<Name>;
    pal_park_encounters?: Array<PalParkEncounterArea>;
    flavor_text_entries?: Array<FlavorText>;
    form_descriptions?: Array<Description>;
    genera?: Array<Genus>;
    varieties?: Array<PokemonSpeciesVariety>;
};

