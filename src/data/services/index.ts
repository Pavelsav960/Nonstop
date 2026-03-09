import type { ServiceData } from '../serviceData';
import { carLockout } from './carLockout';
import { houseLockout } from './houseLockout';
import { emergencyLocksmith } from './emergencyLocksmith';
import { brokenKeyExtraction } from './brokenKeyExtraction';
import { lockRekey } from './lockRekey';
import { carKeyReplacement } from './carKeyReplacement';
import { keyFobProgramming } from './keyFobProgramming';
import { ignitionRepair } from './ignitionRepair';
import { lockInstallation } from './lockInstallation';
import { smartLockInstallation } from './smartLockInstallation';

export const serviceData: ServiceData[] = [
  carLockout,
  houseLockout,
  emergencyLocksmith,
  brokenKeyExtraction,
  lockRekey,
  carKeyReplacement,
  keyFobProgramming,
  ignitionRepair,
  lockInstallation,
  smartLockInstallation,
];

export const servicesByCategory: Record<string, ServiceData[]> = serviceData.reduce(
  (acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  },
  {} as Record<string, ServiceData[]>,
);
