Typescript Karma Webpack Mocha Demo
=====================================

如何把Karma, webpack, mocha连接起来，处理typescript测试。

注意：虽然mocha是运行在node上，但是karma本身是运行于浏览器中，测试代码将在浏览器中运行，
所以不能包含对node模块的调用。如果想测试node相关的代码，还需要想别的办法（比如使用支持调用node的浏览器，如electron等）

```
npm install
npm run test
```

