# 测试 Immutable 对 re render 性能的优化

## 观察测试结果

```bash
  $ git clone git@github.com:Maopy/react-pure-render-practice.git

  $ npm install

  $ npm start
```

## 测试内容

1. 对未经 Pure 优化的 Component 进行数据未改变的赋值
  
  ```js
    let vanilla = this.state.vanilla
    this.setState({
      vanilla
    })
  ```
  
  发现即便数据没有发生任何变化,在不经过 pure 优化的情况下还是会 re render
  
2. 对经过 Pure 优化的 Component 进行深层子对象赋值
  
  ```js
    let vanilla = this.state.vanilla
    vanilla.foo.bar2 = Math.round(Math.random() * 9 + 1)
    this.setState({
      vanilla
    })
  ```
  
  由于 pure 优化使用 shallowEqual, 而 shallowEqual 其实只比较 props 的第一层子属性是不是相同
  
  所以, 当只修改了深层子属性的值, 但未修改引用时, 会引起此 BUG

3. 对 Immutable 优化的 Component 进行数据未改变赋值
  
  ```js
    this.setState(({data}) => ({
      data
    }))
  ```
  
  正确的没有 re render

4. 对 Immutable 优化的 Component 进行深层子对象赋值
  
  ```js
    this.setState(({data}) => ({
      data: data.setIn(['foo', 'bar2'], Math.round(Math.random() * 9 + 1))
    }))
  ```
  
  正确的只 re render 了改变的子属性

## 总结 Immutable 的作用

1. 防止 state 值不变时的 re render

2. 防止原生对象在进行 pure 优化时, 无法 re render 深层子组件

3. 在进行一般 re render 时, 也更加迅速

## 坑 List

1. 线上使用的 `react-immutable-render-mixin` 有严重 BUG, 并未起任何作用, 具体原因待查 FUCK!!!

2. 当 props 中有函数, 且调用时写了 .bind(this), 这样函数执行时每次引用都会修改, pure 失效, 建议使用 EventEmitter 代替函数 props
