// 装饰器
function myDecorator() {
    return function <T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'lee';
            getName() {
                return this.name;
            }
        };
    }
}


const Test = myDecorator()(class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
});

// @myDecorator()
// class Test {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

const test1 = new Test(
    'liou'
);

console.log(test1);
console.log(test1.getName);

