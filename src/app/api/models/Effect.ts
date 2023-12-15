/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbilityEffectChange } from './AbilityEffectChange';
import type { ContestComboSets } from './ContestComboSets';
import type { ContestType } from './ContestType';
import type { EffectEffect } from './EffectEffect';
import type { FlavorText } from './FlavorText';
import type { Generation } from './Generation';
import type { MachineVersionDetail } from './MachineVersionDetail';
import type { MoveMetaData } from './MoveMetaData';
import type { MoveStatChange } from './MoveStatChange';
import type { PokemonSpecies } from './PokemonSpecies';
import type { SuperContestEffect } from './SuperContestEffect';

/**
 * An effect that occurs in a game, e.g. causing a Pokémon to fall asleep.
 */
export type Effect = {
    /**
     * The identifier for this effect resource
     */
    id?: number;
    /**
     * The name for this effect resource
     */
    name?: string;
    /**
     * The list of effect text entries
     */
    effect_entries?: Array<EffectEffect>;
    /**
     * The flavor text entries that describe this effect
     */
    pokemon_flavor_text_entries?: Array<EffectEffect>;
    /**
     * The species that this effect is against
     */
    target_species?: PokemonSpecies;
    /**
     * The list of effects that are changed by this ability
     */
    effect_changes?: Array<AbilityEffectChange>;
    /**
     * The flavor text entries that describe this effect
     */
    flavor_text_entries?: Array<FlavorText>;
    /**
     * The generation this effect originated in
     */
    generation?: Generation;
    /**
     * The machines that teach this move
     */
    machines?: Array<MachineVersionDetail>;
    /**
     * Meta data about this effect
     */
    meta?: MoveMetaData;
    /**
     * The short description of this effect listed in different languages
     */
    short_effect?: string;
    /**
     * The chance of this move having an additional effect listed in percentage
     */
    effect_chance?: number;
    /**
     * The list of stat changes that are caused by this effect
     */
    stat_changes?: Array<MoveStatChange>;
    /**
     * The detail of how effective this move is to the super contest
     */
    super_contest_effect?: SuperContestEffect;
    /**
     * A detail of combos this move can be used in
     */
    contest_combos?: ContestComboSets;
    /**
     * The type of appeal this move gives a Pokémon when used in a contest
     */
    contest_type?: ContestType;
};

