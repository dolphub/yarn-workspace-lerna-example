import { coreFunction, coreAdder, anotherCoreFunction } from '@dolphub/common';
coreFunction();
for (let i = 0; i < 4; i++) {
    console.log(coreAdder(i, i * i + 1), anotherCoreFunction());
}
