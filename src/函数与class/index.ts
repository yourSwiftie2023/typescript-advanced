{
  /** 函数 **/
  // 方式一
  const foo1 = (name: string): number => {
    return name.length;
  };
  // 方式二
  // 函数类型签名
  const foo2: (name: string) => number = name => {
    return name.length;
  };
  // 用接口表示函数类型
  interface FuncFooStruct {
    (name: string): number;
  }
  const foo3: FuncFooStruct = name => {
    return name.length;
  };
  // void
  // 可以把undefined赋值给void
  const foo4 = (name: string): void => {
    console.log(name);
    // return undefined;
    // return;
  };
  // 可选参数
  // 在函数逻辑中注入可选参数默认值,可选参数必须位于必选参数之后
  function foo11(name: string, age?: number): number {
    const inputAge = age ?? 18;
    return name.length + inputAge;
  }
  // 直接为可选参数声明默认值
  function foo12(name: string, age: number = 18): number {
    const inputAge = age;
    return name.length + inputAge;
  }
  // 剩余参数
  function foo13(name: string, ...args: number[]): number {
    return name.length + args.length;
  }
  // 也可以使用元组类型进行标注
  function foo14(name: string, ...args: [number, number]): number {
    return name.length + args.length;
  }
  // 重载
  // 在这个实例中，函数的返回类型基于其入参 bar 的值，并且从其内部逻辑中我们知道，
  // 当 bar 为 true，返回值为 string 类型，否则为 number 类型。
  // 而这里的类型签名完全没有体现这一点，我们只知道它的返回值是这么个联合类型。
  // 要想实现与入参关联的返回值类型，我们可以使用 TypeScript 提供的函数重载签名（Overload Signature）
  function func(foo: number, bar: true): string;
  function func(foo: number, bar?: false): number;
  function func(foo: number, bar?: boolean): string | number {
    if (bar) {
      return String(foo);
    } else {
      return foo * 599;
    }
  }
  // 有多个重载声明的函数在被调用时，是按照重载的声明顺序往下查找的
  const res1 = func(599); // number
  const res2 = func(599, true); // string
  const res3 = func(599, false); // number
}

{
  /** 类 class **/
  // 主要结构只有构造函数、属性、方法和访问符（Accessor）
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    get _name() {
      return this.name;
    }

    get _age() {
      return this.age;
    }

    // setter 方法不允许进行返回值的类型标注
    set _name(name: string) {
      this.name = name;
    }

    // setter 方法不允许进行返回值的类型标注
    set _age(age: number) {
      this.age = age;
    }
  }
  // public：此类成员在类、类的实例、子类中都能被访问。
  // private：此类成员仅能在类的内部被访问。
  // protected：此类成员仅能在类与子类中被访问。
  // 你可以将类和类的实例当成两种概念，即一旦实例化完毕（出厂零件），
  // 那就和类（工厂）没关系了，即不允许再访问受保护的成员。

  // 静态成员
  // 静态成员只能通过类名访问
  class User2 {
    static name: string = 'linbudu';
    static age: number = 18;
  }
  User2.age = 20;
  // 对于静态成员和实例成员的使用时机，其实并不需要非常刻意地划分。
  // 比如我会用类 + 静态成员来收敛变量与 utils 方法：
  class Utils {
    public static identifier = 'linbudu';

    public static makeUHappy() {
      Utils.studyWithU();
      // ...
    }

    public static studyWithU() {}
  }

  Utils.makeUHappy();

  // 继承、实现、抽象类
  class Base {
    printWithLove() {}

    print() {}
  }

  class Derived extends Base {
    // 重写父类方法
    override print() {
      // ...
    }
  }
  // 抽象类
  abstract class AbsFoo {
    abstract absProp: string;
    abstract get absGetter(): string;
    abstract absMethod(name: string): string;

    print: () => void = () => {};
  }
  // 实现抽象类
  class Test implements AbsFoo {
    absProp: string;
    constructor() {
      this.absProp = 'linbudu';
    }
    absMethod(name: string): string {
      return '';
    }

    get absGetter(): string {
      return this.absProp;
    }

    print() {}
  }
  // 此时，我们必须完全实现这个抽象类的每一个抽象成员。
  // 需要注意的是，在 TypeScript 中无法声明静态的抽象成员。
  // 对于抽象类，它的本质就是描述类的结构。看到结构，你是否又想到了 interface？是的。
  // interface 不仅可以声明函数结构，也可以声明类的结构：

  interface FooStruct {
    absProp: string;
    get absGetter(): string;
    absMethod(input: string): string;
  }

  class Foo implements FooStruct {
    absProp: string = 'linbudu';

    get absGetter() {
      return 'linbudu';
    }

    absMethod(name: string) {
      return name;
    }
  }

  // 在这里，我们让类去实现了一个接口。这里接口的作用和抽象类一样，都是描述这个类的结构。
  // 除此以外，我们还可以使用 Newable Interface 来描述一个类的结构（类似于描述函数结构的 Callable Interface)
  class Foo1 {}
  interface FooStruct {
    new (): Foo1;
  }
  declare const NewableFoo: FooStruct;
  const foo = new NewableFoo();
}
