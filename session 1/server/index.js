function Foo() {}

const dunderProtoEqualsPrototypeOfFunction =
	new Foo().__proto__ === Foo.prototype;

const actualObjectDontHavePrototype = new Foo().prototype === undefined;

console.log(
	'dunder Proto Equals Prototype Of Function',
	dunderProtoEqualsPrototypeOfFunction
);

console.log('actual Object Dont Have Prototype', actualObjectDontHavePrototype);

const fooObject = new Foo();
console.log('fooObject is instance of Foo', fooObject instanceof Foo);
console.log('fooObject is instance of Object', fooObject instanceof Object);
