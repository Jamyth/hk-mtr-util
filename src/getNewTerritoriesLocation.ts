import { getAllLocation } from './getAllLocation';
import { getIslandLocation } from './getIslandLocation';
import { getKowloonLocation } from './getKowloonLocation';
import { District } from './type';

export function getNewTerritoriesLocation(): District[] {
    const kowloonLocation = getKowloonLocation();
    const islandLocation = getIslandLocation();
    const allLocations = getAllLocation();
    return allLocations.filter((_) => ![...kowloonLocation, ...islandLocation].includes(_));
}
