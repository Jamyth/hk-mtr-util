import { getAllLocation } from './getAllLocation';
import { getKowloonLocation } from './getKowloonLocation';
import { getIslandLocation } from './getIslandLocation';
import { getNewTerritoriesLocation } from './getNewTerritoriesLocation';
import { translate } from './translate';
import {
    getAirportExpressLine,
    getDisneylandResortLine,
    getEastRailLine,
    getIslandLine,
    getKwunTongLine,
    getSouthIslandLine,
    getTseungKwanOLine,
    getTsuenWanLine,
    getTuenMaLinePhaseOne,
    getTungChungLine,
    getWestRailLine,
} from './getLineLocation';

export * from './type';

export const MTRUtil = Object.freeze({
    getAllLocation,
    getKowloonLocation,
    getIslandLocation,
    getNewTerritoriesLocation,
    translate,
    getAirportExpressLine,
    getDisneylandResortLine,
    getEastRailLine,
    getIslandLine,
    getKwunTongLine,
    getSouthIslandLine,
    getTseungKwanOLine,
    getTsuenWanLine,
    getTuenMaLinePhaseOne,
    getTungChungLine,
    getWestRailLine,
});
