import {
    AirportExpressLine,
    DisneylandResortLine,
    District,
    EastRailLine,
    IslandLine,
    KwunTongLine,
    SouthIslandLine,
    TseungKwanOLine,
    TsuenWanLine,
    TuenMaLinePhaseOne,
    TungChungLine,
    WestRailLine,
} from './type';
import { EnumUtil } from './util/EnumUtil';

export function getAllLocation(): District[] {
    const airportExpressLine = EnumUtil.toArray(AirportExpressLine);
    const disneylandResortLine = EnumUtil.toArray(DisneylandResortLine);
    const eastRailLine = EnumUtil.toArray(EastRailLine);
    const islandLine = EnumUtil.toArray(IslandLine);
    const kwunTongLine = EnumUtil.toArray(KwunTongLine);
    const southIslandLine = EnumUtil.toArray(SouthIslandLine);
    const tseungKwanOLine = EnumUtil.toArray(TseungKwanOLine);
    const tsuenWanLine = EnumUtil.toArray(TsuenWanLine);
    const tuenMaLinePhaseOne = EnumUtil.toArray(TuenMaLinePhaseOne);
    const tungChungLine = EnumUtil.toArray(TungChungLine);
    const westRailLine = EnumUtil.toArray(WestRailLine);
    return Array.from(
        new Set([
            ...airportExpressLine,
            ...disneylandResortLine,
            ...eastRailLine,
            ...islandLine,
            ...kwunTongLine,
            ...southIslandLine,
            ...tseungKwanOLine,
            ...tsuenWanLine,
            ...tuenMaLinePhaseOne,
            ...tungChungLine,
            ...westRailLine,
        ]),
    );
}
