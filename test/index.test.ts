import { strict as assert } from 'assert';
import { MTRUtil } from '../src';

describe('MTRUtil', () => {
    it('96 Stations in Hong Kong (getAllLocation)', () => {
        const stations = MTRUtil.getAllLocation();
        assert.deepEqual(stations.length, 96);
    });

    it('14 Stations in East Rail Lines (getEastRailLine)', () => {
        const stations = MTRUtil.getEastRailLine();
        assert.deepEqual(stations.length, 14);
    });

    it('17 Stations in Kwun Tong Lines (getKwunTongLine)', () => {
        const stations = MTRUtil.getKwunTongLine();
        assert.deepEqual(stations.length, 17);
    });

    it('16 Stations in Tsuen Wan Lines (getTsuenWanLine)', () => {
        const stations = MTRUtil.getTsuenWanLine();
        assert.deepEqual(stations.length, 16);
    });

    it('17 Stations in Island Lines (getIslandLine)', () => {
        const stations = MTRUtil.getIslandLine();
        assert.deepEqual(stations.length, 17);
    });

    it('8 Stations in Tung Chung Lines (getTungChungLine)', () => {
        const stations = MTRUtil.getTungChungLine();
        assert.deepEqual(stations.length, 8);
    });

    it('5 Stations in Airport Express Lines (getAirportExpressLine)', () => {
        const stations = MTRUtil.getAirportExpressLine();
        assert.deepEqual(stations.length, 5);
    });

    it('8 Stations in Tseung Kwan O Lines (getTseungKwanOLine)', () => {
        const stations = MTRUtil.getTseungKwanOLine();
        assert.deepEqual(stations.length, 8);
    });

    it('12 Stations in West Rail Lines (getWestRailLine)', () => {
        const stations = MTRUtil.getWestRailLine();
        assert.deepEqual(stations.length, 12);
    });

    it('12 Stations in Tuen Ma Line Phase 1 (getTuenMaLinePhaseOne)', () => {
        const stations = MTRUtil.getTuenMaLinePhaseOne();
        assert.deepEqual(stations.length, 12);
    });

    it('2 Stations in Disneyland Resort Line (getDisneylandResortLine)', () => {
        const stations = MTRUtil.getDisneylandResortLine();
        assert.deepEqual(stations.length, 2);
    });

    it('5 Stations in South Island Line (getSouthIslandLine)', () => {
        const stations = MTRUtil.getSouthIslandLine();
        assert.deepEqual(stations.length, 5);
    });

    it('Every Stations has chinese translation (translate)', () => {
        const translation = MTRUtil.getAllLocation().map(MTRUtil.translate).filter(Boolean);
        assert.deepEqual(translation.length, 96);
    });
});
