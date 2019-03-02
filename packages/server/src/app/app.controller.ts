import { Get, Controller, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags } from '@nestjs/swagger';
import { ExampleService } from '@dolphub/common';

@ApiUseTags('Base')
@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly exampleService: ExampleService,
    ) {}

    @Get()
    root() {
        return this.appService.root();
    }

    @Get('/configtest')
    getConfigTest(): string {
        return this.appService.getConfigTest();
    }

    @Get('/add/:a/:b')
    getExampleServiceTest(@Param('a') a: string, @Param('b') b: string) {
        return this.exampleService.add(a, b);
    }
}
