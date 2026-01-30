import * as migration_20260130_202602 from './20260130_202602';

export const migrations = [
  {
    up: migration_20260130_202602.up,
    down: migration_20260130_202602.down,
    name: '20260130_202602'
  },
];
