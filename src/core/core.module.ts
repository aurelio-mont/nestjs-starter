import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { SchedulerModule } from './scheduler/scheduler.module';

const CORE_MODULES = [DatabaseModule, ConfigModule, SchedulerModule]

@Module({
    imports: CORE_MODULES,
    exports: CORE_MODULES,
})
export class CoreModule { }
