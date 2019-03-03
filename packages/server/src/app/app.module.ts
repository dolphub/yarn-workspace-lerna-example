import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { ConfigModule } from 'nestjs-config';
import { ExampleService } from '@dolphub/common';

MorganMiddleware.configure(
    ':date - :method :url :status :res[content-length] - :response-time ms',
    {},
);

@Module({
    imports: [
        ConfigModule.resolveSrcPath(__dirname).load('config/**/!(*.d).{ts,js}'),
    ],
    controllers: [AppController],
    providers: [AppService, ExampleService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        consumer
            .apply(MorganMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
