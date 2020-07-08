## 前端和electron一起的项目
### 根路径：electron壳子
### content：react项目，使用standardjs作为eslint校验规则
## vscode配置tsx的eslint校验：
```js
"eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
 ```