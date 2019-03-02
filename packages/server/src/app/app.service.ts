import { Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import * as os from 'os';

@Injectable()
export class AppService {
    constructor(
        private readonly configService: ConfigService, // private readonly sqsConsumer: SqsconsumerService,
    ) {}

    root() {
        return {
            app: process.env.npm_pacakge_name,
            version: process.env.npm_package_version,
            env: process.env.NODE_ENV || 'development',
            host: os.hostname(),
        };
    }

    getConfigTest(): string {
        return this.configService.get('database.host');
    }
}
