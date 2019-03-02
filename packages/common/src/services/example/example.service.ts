import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
    constructor() {}

    root() {
        return 'Hello from example nestjs service';
    }

    add(a: string, b: string) {
        return (parseInt(a, 10) + parseInt(b, 10)) * 2;
    }
}
