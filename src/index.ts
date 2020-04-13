// 装饰器
// 普通方法target => 类的 prototype ; key func 名字
// 静态方法target => 类的 构造函数 
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target , key);
    descriptor.value = function () {
        return 'descriptor';
    }
}

class Test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test1 = new Test(
    'liou'
);

// test1.getName = ()=> {
//     return '12';
// }
// console.log(test1);
console.log(test1.getName());

