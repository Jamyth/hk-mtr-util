import { District, IslandLine, SouthIslandLine, TungChungLine } from './type';
import { EnumUtil } from './util/EnumUtil';

export function getIslandLocation(): District[] {
    const islandLocation = EnumUtil.toArray(IslandLine);
    const southIslandLine = EnumUtil.toArray(SouthIslandLine);
    return Array.from(new Set([TungChungLine.HONG_KONG, ...islandLocation, ...southIslandLine]));
}
