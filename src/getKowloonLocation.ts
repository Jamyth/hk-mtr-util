import {
    District,
    TsuenWanLine,
    TungChungLine,
    WestRailLine,
    KwunTongLine,
    TuenMaLinePhaseOne,
    EastRailLine,
    TseungKwanOLine,
} from './type';
import { EnumUtil } from './util/EnumUtil';

export function getKowloonLocation(): District[] {
    const tsuenWanLineExcluded = [
        TsuenWanLine.KWAI_FONG,
        TsuenWanLine.KWAI_HING,
        TsuenWanLine.TAI_WO_HAU,
        TsuenWanLine.TSUEN_WAN,
        TsuenWanLine.ADMIRALTY,
        TsuenWanLine.CENTRAL,
    ];
    const tsuenWanLineInKLN = EnumUtil.toArray(TsuenWanLine).filter((_) => !tsuenWanLineExcluded.includes(_));

    const tungChungLineExcluded = [
        TungChungLine.TSING_YI,
        TungChungLine.SUNNY_BAY,
        TungChungLine.TUNG_CHUNG,
        TungChungLine.HONG_KONG,
    ];
    const tungChungLineInKLN = EnumUtil.toArray(TungChungLine).filter((_) => !tungChungLineExcluded.includes(_));

    const westRailLineExcluded = [
        WestRailLine.TUEN_MUN,
        WestRailLine.SIU_HONG,
        WestRailLine.TIN_SHUI_WAI,
        WestRailLine.LONG_PING,
        WestRailLine.YUEN_LONG,
        WestRailLine.KAM_SHEUNG_ROAD,
        WestRailLine.TSUEN_WAN_WEST,
    ];
    const westRailLineInKLN = EnumUtil.toArray(WestRailLine).filter((_) => !westRailLineExcluded.includes(_));

    const kwunTongLineExcluded = [KwunTongLine.TIU_KENG_LENG];
    const kwunTonLine = EnumUtil.toArray(KwunTongLine).filter((_) => !kwunTongLineExcluded.includes(_));

    const tuenMaLinePhaseOne = [TuenMaLinePhaseOne.DIAMOND_HILL, TuenMaLinePhaseOne.KAI_TAK];

    const eastRailLine = [EastRailLine.HUNG_HOM, EastRailLine.MONG_KOK_EAST, EastRailLine.KOWLOON_TONG];

    const tsuengKwanOLine = [TseungKwanOLine.YAU_TONG];

    return Array.from(
        new Set([
            ...tsuenWanLineInKLN,
            ...tungChungLineInKLN,
            ...westRailLineInKLN,
            ...kwunTonLine,
            ...tuenMaLinePhaseOne,
            ...eastRailLine,
            ...tsuengKwanOLine,
        ]),
    );
}
