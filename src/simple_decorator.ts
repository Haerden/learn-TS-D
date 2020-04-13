// 装饰器

function testDecorator(constructor: any) {
    constructor.prototype.getName = () => {
        console.log('liu');
    }
    console.log('liu');
}


@testDecorator
class TestS {

}

const test = new TestS();
(test as any).getName();

