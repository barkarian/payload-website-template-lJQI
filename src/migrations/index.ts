import * as migration_20240824_104118_initial_migration from './20240824_104118_initial_migration';

export const migrations = [
  {
    up: migration_20240824_104118_initial_migration.up,
    down: migration_20240824_104118_initial_migration.down,
    name: '20240824_104118_initial_migration'
  },
];
