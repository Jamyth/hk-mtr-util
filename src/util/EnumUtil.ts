type StringBasedEnumMap<Enum> = { [P in keyof Enum]: Enum[P] & string };
type StringBasedEnumValue<Enum> = Enum extends StringBasedEnumMap<Enum> ? Enum[keyof Enum] : never;

function toArray<EnumMap extends StringBasedEnumMap<EnumMap>>(enumMap: EnumMap): StringBasedEnumValue<EnumMap>[] {
    return Object.values(enumMap);
}

export const EnumUtil = Object.freeze({
    toArray,
});
