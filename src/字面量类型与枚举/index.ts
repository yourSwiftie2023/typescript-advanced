{
  /** 字面量类型 **/
  /** 比原始类型更精确的类型,
   * 字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型
   **/
  const tmp1: 'hello' = 'hello';
  const tmp2: 123 = 123;
  const tmp3: true = true;
  const tmp4: { name: 'linbudu' } = { name: 'linbudu' };
}

{
  /** 联合类型 **/
  const tmp5: 'hello' | 'linbudu' = 'hello';
  // 实现手动的互斥属性
  interface IDescription {
    obj:
      | {
          name: 'linbudu';
          age: 18;
        }
      | {
          name: '蜡笔小新';
          age: 20;
        };
  }
  declare let tmp: IDescription;
  if (tmp.obj.name === 'linbudu') {
    console.log(tmp.obj.age);
  }
}

{
  /** 对象字面量类型 **/
  const tmp1: { name: 'linbudu'; age: 18 } = { name: 'linbudu', age: 18 };
  const tmp2: { name: 'linbudu'; age: 18 } = { name: 'linbudu', age: 18 };
  // 无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值
}

{
  /** 枚举类型 **/
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
  const tmp1: Direction.Up = Direction.Up; // 1
  const tmp1_: Direction.Up = 1; // 1
  const tmp2: Direction = Direction.Down; // 2
  const tmp3: Direction = Direction.Left; // 3
  const tmp4: Direction = Direction.Right; // 4
  // 双向映射
  enum Items {
    Foo,
    Bar,
    Baz,
  }
  const fooValue = Items.Foo; // 0
  const fooKey = Items[0]; // "Foo"
  // 常量枚举
  // 它和普通枚举的差异主要在访问性与编译产物。对于常量枚举，
  // 你只能通过枚举成员访问枚举值（而不能通过值访问成员）
  const enum Directions {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
  }
}
