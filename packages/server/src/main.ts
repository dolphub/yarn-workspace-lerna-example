import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { ConfigService } from 'nestjs-config';
import { AppService } from './app/app.service';
import { NestAppType } from '@dolphub/common';

async function bootstrap() {
    const packageJson = require(join(__dirname, '../package.json'));
    const app = await NestFactory.create(AppModule);

    testServiceExtration(app);
    const configService: ConfigService = app.get(ConfigService);
    const port = configService.get('api.port');

    const swaggerOptions = new DocumentBuilder()
        .setTitle(packageJson.name)
        .setDescription(packageJson.description)
        .setVersion(packageJson.version)
        .build();

    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('docs', app, document);

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(port);
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${port}`);
}
bootstrap();

function testServiceExtration(app: NestAppType) {
    const appService: AppService = app.get(AppService);
    console.log(appService.root());
}
