import {
    AirportExpressLine,
    DisneylandResortLine,
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

export function getAirportExpressLine() {
    return EnumUtil.toArray(AirportExpressLine);
}

export function getDisneylandResortLine() {
    return EnumUtil.toArray(DisneylandResortLine);
}

export function getEastRailLine() {
    return EnumUtil.toArray(EastRailLine);
}

export function getIslandLine() {
    return EnumUtil.toArray(IslandLine);
}

export function getKwunTongLine() {
    return EnumUtil.toArray(KwunTongLine);
}

export function getSouthIslandLine() {
    return EnumUtil.toArray(SouthIslandLine);
}

export function getTseungKwanOLine() {
    return EnumUtil.toArray(TseungKwanOLine);
}

export function getTsuenWanLine() {
    return EnumUtil.toArray(TsuenWanLine);
}

export function getTuenMaLinePhaseOne() {
    return EnumUtil.toArray(TuenMaLinePhaseOne);
}

export function getTungChungLine() {
    return EnumUtil.toArray(TungChungLine);
}

export function getWestRailLine() {
    return EnumUtil.toArray(WestRailLine);
}
