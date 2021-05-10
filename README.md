# **HK MTR Util**

A simple TypeScript Library contains information about HK MTR.

## **Installation**

```bash
$ npm install hk-mtr-util
or
$ yarn add hk-mtr-util
```

## **Usage**

### **Translation**

```ts
import { MTRUtil } from 'hk-mtr-util';

const stations = MTRUtil.getKowloonLocation();
// [KOWLOON, MONG_KOK, LAI_CHI_KOK, ...]

const translatedStations = stations.map(MTRUtil.translate);
// ["九龍", "旺角", "荔枝角", ...]
```

### **By Area**

```ts
import { MTRUtil } from 'hk-mtr-util';

// Kowloon
const stations = MTRUtil.getKowloonLocation();

// Island
const stations = MTRUtil.getIslandLocation();

// New Territories
const stations = MTRUtil.getNewTerritoriesLocation();
```

### **By Line**

```ts
import { MTRUtil } from 'hk-mtr-util';

// Kwun Tong Line
const stations = MTRUtil.getKwunTongLine();

// Island Line
const stations = MTRUtil.getIslandLine();

// Disneyland Resort Line
const stations = MTRUtil.getDisneylandResortLine();

// etc...
```

### **Type Definition**

```ts
import { MTRUtil } from 'hk-mtr-util';
import type { District, AirportExpressLine, IslandLine } from 'hk-mtr-util';

const allStations: District[] = MTRUtil.getAllLocation();

const airportStations: AirportExpressLine[] = MTRUtil.getAirportExpressLine();

const islandStations: IslandLine[] = MTRUtil.getIslandLine();
```