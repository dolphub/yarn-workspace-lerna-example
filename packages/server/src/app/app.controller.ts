import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Base')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    root() {
        return this.appService.root();
    }

    @Get('/configtest')
    getConfigTest(): string {
        return this.appService.getConfigTest();
    }
}
