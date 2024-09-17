{
  /** js原始类型：number, string, boolean, bigint, symbol, null, undefined , object **/

  // string
  const name: string = '蜡笔小新';

  // number
  const age: number = 18;

  // boolean
  const isTrue: boolean = true;

  // undefined
  const u: undefined = undefined;

  // null
  const n: null = null;

  // object
  const obj: object = {
    name: '蜡笔小新',
    age: 18,
  };

  // bitint
  const bi: bigint = 1n;

  // symbol
  const s: symbol = Symbol();
}

{
  /** null 与 undefined **/
  const n: null = null;
  const u: undefined = undefined;
  const s1: string = null; // 仅在关闭 strictNullChecks 时成立，下同
  const s2: string = undefined; // 仅在关闭 strictNullChecks 时成立
}

{
  /** void **/
  // void 操作符会执行后面跟着的表达式并返回一个 undefined
  void (function name() {
    console.log('name');
  })();

  // function f1(): void;
  function f1() {}

  // function f2(): void;
  function f2() {
    return;
  }

  // function f3(): undefined;
  // 可显示的添加返回类型:void
  function f3() {
    return undefined;
  }
}

{
  /** 数组的类型标注 **/
  const arr1: number[] = [1, 2, 3];
  const arr2: Array<number> = [1, 2, 3];
  // 只读数组 , 仅允许类、数组、元组添加 readonly 标记，修饰对象的属性也可添加
  const readonlyArr: readonly number[] = [1, 2, 3];
  const readonlyArr2: ReadonlyArray<number> = [1, 2, 3];
  // 固定长度的数组请使用元组，提升数组结构的严谨性
  const arr3: [number, number, number] = [1, 2, 3];
  // 元组内容是可选的
  const arr4: [number, number?, string?] = [1, ,];
  // 具名元组
  const arr5: readonly [name: string, age?: number] = ['蜡笔小新', 18];
}

{
  /** 对象的类型标注 **/
  interface IDescription {
    name: string;
    age: number;
    male: boolean;
  }

  const obj1 = {
    name: '蜡笔小新',
    age: 18,
    male: true,
  } satisfies IDescription;

  // 修饰接口属性 可选 只读
  interface IDescription2 {
    name: string;
    age?: number;
    readonly male: boolean;
    readonly other: {
      a: 1;
    };
  }

  const obj2 = {
    name: '蜡笔小新',
    male: true,
    other: {
      a: 1,
    },
  } satisfies IDescription2;
}

{
  /** object、Object、{} **/

  // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
  const tmp1: Object = undefined;
  const tmp2: Object = null;
  const tmp3: Object = void 0;

  const tmp4: Object = 'linbudu';
  const tmp5: Object = 599;
  const tmp6: Object = { name: 'linbudu' };
  const tmp7: Object = () => {};
  const tmp8: Object = [];

  // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
  const tmp17: object = undefined;
  const tmp18: object = null;
  const tmp19: object = void 0;

  const tmp20: object = 'linbudu'; // X 不成立，值为原始类型
  const tmp21: object = 599; // X 不成立，值为原始类型

  const tmp22: object = { name: 'linbudu' };
  const tmp23: object = () => {};
  const tmp24: object = [];

  // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
  const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
  const tmp26: {} = null;
  const tmp27: {} = void 0; // void 0 等价于 undefined

  const tmp28: {} = 'linbudu';
  const tmp29: {} = 599;
  const tmp30: {} = { name: 'linbudu' };
  const tmp31: {} = () => {};
  const tmp32: {} = [];
  // 虽然能够将其作为变量的类型，但你实际上无法对这个变量进行任何赋值操作：
  tmp30.name = 'linbudu'; // 类型 {} 中不存在属性“name”

  // 最后，为了更好地区分 Object、object 以及{}这三个具有迷惑性的类型，我们再做下总结：
  // 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。
  // 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 Record<string, unknown> 或 Record<string, any> 表示对象，unknown[] 或 any[] 表示数组，(...args: any[]) => any表示函数这样。
  // 我们同样要避免使用{}。{}意味着任何非 null / undefined 的值，从这个层面上看，使用它和使用 any 一样恶劣
}

{
  /** unique symbol **/
  // 每一个 unique symbol 类型都是独一无二的。
  const s1: unique symbol = Symbol();
}
