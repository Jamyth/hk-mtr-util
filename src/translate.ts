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

export function translate(location: District, locale: 'en' | 'zh'): string {
    if (locale === 'zh') {
        return translateZH(location);
    } else {
        return translateEn(location);
    }
}

function translateZH(location: District): string {
    switch (location) {
        // Airport Express
        case AirportExpressLine.AIRPORT:
            return '機場';
        case AirportExpressLine.ASIS_WORLD_EXPO:
            return '博覽館';
        case AirportExpressLine.TSING_YI:
            return '青衣';
        case AirportExpressLine.KOWNLOON:
            return '九龍';
        case AirportExpressLine.HONG_KONG:
            return '香港';

        // Disneyland Resort
        case DisneylandResortLine.DISNEYLAND_RESORT:
            return '迪士尼';
        case DisneylandResortLine.SUNNY_BAY:
            return '欣澳';

        // East Rail
        case EastRailLine.HUNG_HOM:
            return '紅磡';
        case EastRailLine.MONG_KOK_EAST:
            return '旺角東';
        case EastRailLine.KOWLOON_TONG:
            return '九龍塘';
        case EastRailLine.TAI_WAI:
            return '大圍';
        case EastRailLine.SHA_TIN:
            return '沙田';
        case EastRailLine.FO_TAN:
            return '火炭';
        case EastRailLine.RACECOURSE:
            return '馬場';
        case EastRailLine.UNIVERSITY:
            return '大學';
        case EastRailLine.TAI_PO_MARKET:
            return '大埔墟';
        case EastRailLine.TAI_WO:
            return '太和';
        case EastRailLine.FANLING:
            return '粉嶺';
        case EastRailLine.SHEUNG_SHUI:
            return '上水';
        case EastRailLine.LO_WU:
            return '羅湖';
        case EastRailLine.LOK_MA_CHAU:
            return '落馬洲';

        // Island
        case IslandLine.KENNEDY_TOWN:
            return '堅尼地城';
        case IslandLine.HKU:
            return '香港大學';
        case IslandLine.SAI_YING_PUN:
            return '西營盤';
        case IslandLine.SHEUNG_WAN:
            return '上環';
        case IslandLine.CENTRAL:
            return '中環';
        case IslandLine.ADMIRALTY:
            return '金鐘';
        case IslandLine.WAN_CHAI:
            return '灣仔';
        case IslandLine.CAUSEWAY_BAY:
            return '銅鑼灣';
        case IslandLine.TIN_HAU:
            return '天后';
        case IslandLine.FORTRESS_HILL:
            return '炮台山';
        case IslandLine.NORTH_POINT:
            return '北角';
        case IslandLine.QUARRY_BAY:
            return '鰂魚涌';
        case IslandLine.TAI_KOO:
            return '太古';
        case IslandLine.SAI_WAN_HO:
            return '西灣河';
        case IslandLine.SHAU_KEI_WAN:
            return '筲箕灣';
        case IslandLine.HENG_FA_CHUEN:
            return '杏花邨';
        case IslandLine.CHAI_WAN:
            return '柴灣';

        // Kwun Tong
        case KwunTongLine.WHAMPOA:
            return '黃埔';
        case KwunTongLine.HO_MAN_TIN:
            return '何文田';
        case KwunTongLine.YAU_MA_TEI:
            return '油麻地';
        case KwunTongLine.MONG_KOK:
            return '旺角';
        case KwunTongLine.PRINCE_EDWARD:
            return '太子';
        case KwunTongLine.SHEK_KIP_MEI:
            return '石硤尾';
        case KwunTongLine.KOWLOON_TONG:
            return '九龍塘';
        case KwunTongLine.LOK_FU:
            return '樂富';
        case KwunTongLine.WONG_TAI_SIN:
            return '黃大仙';
        case KwunTongLine.DIAMOND_HILL:
            return '鑽石山';
        case KwunTongLine.CHOI_HUNG:
            return '彩虹';
        case KwunTongLine.KOWLOON_BAY:
            return '九龍灣';
        case KwunTongLine.NGAU_TAU_KOK:
            return '牛頭角';
        case KwunTongLine.KWUN_TONG:
            return '觀塘';
        case KwunTongLine.LAM_TIN:
            return '藍田';
        case KwunTongLine.YAU_TONG:
            return '油塘';
        case KwunTongLine.TIU_KENG_LENG:
            return '調景嶺';

        // South Island
        case SouthIslandLine.ADMIRALTY:
            return '金鐘';
        case SouthIslandLine.OCEAN_PARK:
            return '海洋公園';
        case SouthIslandLine.WONG_CHUK_HANG:
            return '黃竹坑';
        case SouthIslandLine.LEI_TUNG:
            return '利東';
        case SouthIslandLine.SOUTH_HORIZONS:
            return '海怡半島';

        // Tseung Kwan O
        case TseungKwanOLine.NORTH_POINT:
            return '北角';
        case TseungKwanOLine.QUARRY_BAY:
            return '鰂魚涌';
        case TseungKwanOLine.YAU_TONG:
            return '油塘';
        case TseungKwanOLine.TIU_KENG_LENG:
            return '調景嶺';
        case TseungKwanOLine.TSEUNG_KWAN_O:
            return '將軍澳';
        case TseungKwanOLine.HANG_HAU:
            return '坑口';
        case TseungKwanOLine.PO_LAM:
            return '寶琳';
        case TseungKwanOLine.LOHAS_PARK:
            return '康城';

        // Tsuen Wan
        case TsuenWanLine.CENTRAL:
            return '中環';
        case TsuenWanLine.ADMIRALTY:
            return '金鐘';
        case TsuenWanLine.TSIM_SHA_TSUI:
            return '尖沙嘴';
        case TsuenWanLine.JORDAN:
            return '佐敦';
        case TsuenWanLine.YAU_MA_TEI:
            return '油麻地';
        case TsuenWanLine.MONG_KOK:
            return '旺角';
        case TsuenWanLine.PRINCE_EDWARD:
            return '太子';
        case TsuenWanLine.SHAM_SHUI_PO:
            return '深水埗';
        case TsuenWanLine.CHEUNG_SHA_WAN:
            return '長沙灣';
        case TsuenWanLine.LAI_CHI_KOK:
            return '荔枝角';
        case TsuenWanLine.MEI_FOO:
            return '美孚';
        case TsuenWanLine.LAI_KING:
            return '荔景';
        case TsuenWanLine.KWAI_FONG:
            return '葵芳';
        case TsuenWanLine.KWAI_HING:
            return '葵興';
        case TsuenWanLine.TAI_WO_HAU:
            return '大窩口';
        case TsuenWanLine.TSUEN_WAN:
            return '荃灣';

        // Tuen Ma Line Phase One
        case TuenMaLinePhaseOne.KAI_TAK:
            return '啟德';
        case TuenMaLinePhaseOne.DIAMOND_HILL:
            return '鑽石山';
        case TuenMaLinePhaseOne.HIN_KENG:
            return '顯徑';
        case TuenMaLinePhaseOne.TAI_WAI:
            return '大圍';
        case TuenMaLinePhaseOne.CHE_KUNG_TEMPLE:
            return '車公廟';
        case TuenMaLinePhaseOne.SHA_TIN_WAI:
            return '沙田圍';
        case TuenMaLinePhaseOne.CITY_ONE:
            return '第一城';
        case TuenMaLinePhaseOne.SHEK_MUN:
            return '石門';
        case TuenMaLinePhaseOne.TAI_SHUI_HANG:
            return '大水坑';
        case TuenMaLinePhaseOne.HENG_ON:
            return '恆安';
        case TuenMaLinePhaseOne.MA_ON_SHAN:
            return '馬鞍山';
        case TuenMaLinePhaseOne.WU_KAI_SHA:
            return '烏溪沙';

        // Tung Chung
        case TungChungLine.HONG_KONG:
            return '香港';
        case TungChungLine.KOWLOON:
            return '九龍';
        case TungChungLine.OLYMPIC:
            return '奧運';
        case TungChungLine.NAM_CHEONG:
            return '南昌';
        case TungChungLine.LAI_KING:
            return '荔景';
        case TungChungLine.TSING_YI:
            return '青衣';
        case TungChungLine.SUNNY_BAY:
            return '欣澳';
        case TungChungLine.TUNG_CHUNG:
            return '東涌';

        // West Rail
        case WestRailLine.HUNG_HOM:
            return '紅磡';
        case WestRailLine.EAST_TSIM_SHA_TSUI:
            return '尖東';
        case WestRailLine.AUSTIN:
            return '柯士甸';
        case WestRailLine.NAM_CHEONG:
            return '南昌';
        case WestRailLine.MEI_FOO:
            return '美孚';
        case WestRailLine.TSUEN_WAN_WEST:
            return '荃灣西';
        case WestRailLine.KAM_SHEUNG_ROAD:
            return '錦上路';
        case WestRailLine.YUEN_LONG:
            return '元朗';
        case WestRailLine.LONG_PING:
            return '朗屏';
        case WestRailLine.TIN_SHUI_WAI:
            return '天水圍';
        case WestRailLine.SIU_HONG:
            return '兆康';
        case WestRailLine.TUEN_MUN:
            return '屯門';
    }
}

function translateEn(location: District): string {
    switch (location) {
        // Airport Express
        case AirportExpressLine.AIRPORT:
            return 'Airport';
        case AirportExpressLine.ASIS_WORLD_EXPO:
            return 'AsiaWorld-Expo';
        case AirportExpressLine.TSING_YI:
            return 'Tsing Yi';
        case AirportExpressLine.KOWNLOON:
            return 'Kowloon';
        case AirportExpressLine.HONG_KONG:
            return 'Hong Kong';

        // Disneyland Resort
        case DisneylandResortLine.DISNEYLAND_RESORT:
            return 'Disneyland Resort';
        case DisneylandResortLine.SUNNY_BAY:
            return 'Sunny Bay';

        // East Rail
        case EastRailLine.HUNG_HOM:
            return 'Hung Home';
        case EastRailLine.MONG_KOK_EAST:
            return 'Mong Kok East';
        case EastRailLine.KOWLOON_TONG:
            return 'Kowloon Tong';
        case EastRailLine.TAI_WAI:
            return 'Tai Wai';
        case EastRailLine.SHA_TIN:
            return 'Sha Tin';
        case EastRailLine.FO_TAN:
            return 'Fo Tan';
        case EastRailLine.RACECOURSE:
            return 'Racecourse';
        case EastRailLine.UNIVERSITY:
            return 'University';
        case EastRailLine.TAI_PO_MARKET:
            return 'Tai Po Market';
        case EastRailLine.TAI_WO:
            return 'Tai Wo';
        case EastRailLine.FANLING:
            return 'Fanling';
        case EastRailLine.SHEUNG_SHUI:
            return 'Sheung Shui';
        case EastRailLine.LO_WU:
            return 'Lo Wu';
        case EastRailLine.LOK_MA_CHAU:
            return 'Lok Ma Chau';

        // Island
        case IslandLine.KENNEDY_TOWN:
            return 'Kennedy Town';
        case IslandLine.HKU:
            return 'HKU';
        case IslandLine.SAI_YING_PUN:
            return 'Sai Ying Pun';
        case IslandLine.SHEUNG_WAN:
            return 'Sheung Wan';
        case IslandLine.CENTRAL:
            return 'Central';
        case IslandLine.ADMIRALTY:
            return 'Admiralty';
        case IslandLine.WAN_CHAI:
            return 'Wan Chai';
        case IslandLine.CAUSEWAY_BAY:
            return 'Causeway Bay';
        case IslandLine.TIN_HAU:
            return 'Tin Hau';
        case IslandLine.FORTRESS_HILL:
            return 'Fortress Hill';
        case IslandLine.NORTH_POINT:
            return 'North Point';
        case IslandLine.QUARRY_BAY:
            return 'Quarry Bay';
        case IslandLine.TAI_KOO:
            return 'Tai Koo';
        case IslandLine.SAI_WAN_HO:
            return 'Sai Wan Ho';
        case IslandLine.SHAU_KEI_WAN:
            return 'Shau Kei Wan';
        case IslandLine.HENG_FA_CHUEN:
            return 'Heng Fa Chuen';
        case IslandLine.CHAI_WAN:
            return 'Chai Wan';

        // Kwun Tong
        case KwunTongLine.WHAMPOA:
            return 'Whampoa';
        case KwunTongLine.HO_MAN_TIN:
            return 'Ho Man Tin';
        case KwunTongLine.YAU_MA_TEI:
            return 'Yau Ma Tei';
        case KwunTongLine.MONG_KOK:
            return 'Mong Kok';
        case KwunTongLine.PRINCE_EDWARD:
            return 'Prince Edward';
        case KwunTongLine.SHEK_KIP_MEI:
            return 'Shek Kip Mei';
        case KwunTongLine.KOWLOON_TONG:
            return 'Kowloon Tong';
        case KwunTongLine.LOK_FU:
            return 'Lok Fu';
        case KwunTongLine.WONG_TAI_SIN:
            return 'Wong Tai Sin';
        case KwunTongLine.DIAMOND_HILL:
            return 'Diamond Hill';
        case KwunTongLine.CHOI_HUNG:
            return 'Choi Hung';
        case KwunTongLine.KOWLOON_BAY:
            return 'Kowloon Bay';
        case KwunTongLine.NGAU_TAU_KOK:
            return 'Ngau Tau Kok';
        case KwunTongLine.KWUN_TONG:
            return 'Kwun Tong';
        case KwunTongLine.LAM_TIN:
            return 'Lam Tin';
        case KwunTongLine.YAU_TONG:
            return 'Yau Tong';
        case KwunTongLine.TIU_KENG_LENG:
            return 'Tiu Keng Leng';

        // South Island
        case SouthIslandLine.ADMIRALTY:
            return 'Admiralty';
        case SouthIslandLine.OCEAN_PARK:
            return 'Ocean Park';
        case SouthIslandLine.WONG_CHUK_HANG:
            return 'Wong CHuk';
        case SouthIslandLine.LEI_TUNG:
            return 'Lei Tung';
        case SouthIslandLine.SOUTH_HORIZONS:
            return 'South Horizons';

        // Tseung Kwan O
        case TseungKwanOLine.NORTH_POINT:
            return 'North Point';
        case TseungKwanOLine.QUARRY_BAY:
            return 'Quarry Bay';
        case TseungKwanOLine.YAU_TONG:
            return 'Yau Tong';
        case TseungKwanOLine.TIU_KENG_LENG:
            return 'Tiu Keng Leng';
        case TseungKwanOLine.TSEUNG_KWAN_O:
            return 'Tseung Kwan O';
        case TseungKwanOLine.HANG_HAU:
            return 'Hang Hau';
        case TseungKwanOLine.PO_LAM:
            return 'Po Lam';
        case TseungKwanOLine.LOHAS_PARK:
            return 'Lohas Park';

        // Tsuen Wan
        case TsuenWanLine.CENTRAL:
            return 'Central';
        case TsuenWanLine.ADMIRALTY:
            return 'Admiralty';
        case TsuenWanLine.TSIM_SHA_TSUI:
            return 'Tsim Sha Tsui';
        case TsuenWanLine.JORDAN:
            return 'Jordan';
        case TsuenWanLine.YAU_MA_TEI:
            return 'Yau Ma Tei';
        case TsuenWanLine.MONG_KOK:
            return 'Mong Kok';
        case TsuenWanLine.PRINCE_EDWARD:
            return 'Price Edward';
        case TsuenWanLine.SHAM_SHUI_PO:
            return 'Sham Shui Po';
        case TsuenWanLine.CHEUNG_SHA_WAN:
            return 'Cheung Sha Wan';
        case TsuenWanLine.LAI_CHI_KOK:
            return 'Lai Chi Kok';
        case TsuenWanLine.MEI_FOO:
            return 'Mei Foo';
        case TsuenWanLine.LAI_KING:
            return 'Lai King';
        case TsuenWanLine.KWAI_FONG:
            return 'Kwai Fong';
        case TsuenWanLine.KWAI_HING:
            return 'Kwai Hing';
        case TsuenWanLine.TAI_WO_HAU:
            return 'Tai Wo Hau';
        case TsuenWanLine.TSUEN_WAN:
            return 'Tsuen Wan';

        // Tuen Ma Line Phase One
        case TuenMaLinePhaseOne.KAI_TAK:
            return 'Kai Tak';
        case TuenMaLinePhaseOne.DIAMOND_HILL:
            return 'Diamond Hill';
        case TuenMaLinePhaseOne.HIN_KENG:
            return 'Hin Keng';
        case TuenMaLinePhaseOne.TAI_WAI:
            return 'Tai Wai';
        case TuenMaLinePhaseOne.CHE_KUNG_TEMPLE:
            return 'Che Kung Temple';
        case TuenMaLinePhaseOne.SHA_TIN_WAI:
            return 'Sha Tin Wai';
        case TuenMaLinePhaseOne.CITY_ONE:
            return 'City One';
        case TuenMaLinePhaseOne.SHEK_MUN:
            return 'Shek Mun';
        case TuenMaLinePhaseOne.TAI_SHUI_HANG:
            return 'Tai Shui Hang';
        case TuenMaLinePhaseOne.HENG_ON:
            return 'Heng On';
        case TuenMaLinePhaseOne.MA_ON_SHAN:
            return 'Ma On Shan';
        case TuenMaLinePhaseOne.WU_KAI_SHA:
            return 'Wu Kai Sha';

        // Tung Chung
        case TungChungLine.HONG_KONG:
            return 'Hong Kong';
        case TungChungLine.KOWLOON:
            return 'Kowloon';
        case TungChungLine.OLYMPIC:
            return 'Olympic';
        case TungChungLine.NAM_CHEONG:
            return 'Nam Cheong';
        case TungChungLine.LAI_KING:
            return 'Lai King';
        case TungChungLine.TSING_YI:
            return 'Tsing Yi';
        case TungChungLine.SUNNY_BAY:
            return 'Sunny Bay';
        case TungChungLine.TUNG_CHUNG:
            return 'Tung Chung';

        // West Rail
        case WestRailLine.HUNG_HOM:
            return 'Hung Hom';
        case WestRailLine.EAST_TSIM_SHA_TSUI:
            return 'East Tsun Sha Tsui';
        case WestRailLine.AUSTIN:
            return 'Austin';
        case WestRailLine.NAM_CHEONG:
            return 'Nam Cheong';
        case WestRailLine.MEI_FOO:
            return 'Mei Foo';
        case WestRailLine.TSUEN_WAN_WEST:
            return 'Tsuen Wan West';
        case WestRailLine.KAM_SHEUNG_ROAD:
            return 'Kam Sheung Road';
        case WestRailLine.YUEN_LONG:
            return 'Yuen Long';
        case WestRailLine.LONG_PING:
            return 'Long Ping';
        case WestRailLine.TIN_SHUI_WAI:
            return 'Tin Shui Wai';
        case WestRailLine.SIU_HONG:
            return 'Siu Hong';
        case WestRailLine.TUEN_MUN:
            return 'Tuen Mun';
    }
}
