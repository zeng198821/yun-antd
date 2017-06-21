# Antd Style

## ant样式的使用
文档
- https://ant.design/index-cn

CDN
- https://cdnjs.com/libraries/antd

## Button按钮使用说明

* 按钮类型

```html
     主按钮
     <button type="button" class="ant-btn ant-btn-primary">
        <span>Primary</span>
     </button>
     次按钮
     <button type="button" class="ant-btn">
        <span>Default</span>
     </button>
     虚线按钮
     <button type="button" class="ant-btn ant-btn-dashed">
        <span>Dashed</span>
     </button>
     危险按钮
     <button type="button" class="ant-btn ant-btn-danger">
        <span>Danger</span>
     </button>

```

* 图标按钮
```html
    图标按钮
    <button type="button" class="ant-btn ant-btn-circle ant-btn-icon-only">
        <i class="anticon anticon-search"></i>
    </button>
    图标文字按钮 (按钮和文字的出现位置又两则的先后顺序决定)
    <button type="button" class="ant-btn ant-btn-primary">
        <i class="anticon anticon-search"></i>
        <span>Search</span>
    </button>
```

* 等待按钮

    1、等待按钮主要class为ant-btn-loading

    2、配合使用图标，图标若需要转动则追加 anticon-spin class
```html
    <button type="button" class="ant-btn ant-btn-primary ant-btn-loading">
        <i class="anticon anticon-spin anticon-loading"></i>
        <span>Loading</span>
    </button>
```

* 禁用按钮

    添加 disabled 属性即可
```html
    <button disabled="" class="ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only">
        <i class="anticon anticon-download"></i>
    </button>
```

* 按钮组

    需要将一组内的所有按钮放置在同一DIV中，并且添加 ant-btn-group 样式
```html
    <div class="ant-btn-group">
        <button type="button" class="ant-btn ant-btn-primary">
            <i class="anticon anticon-left"></i>
            <span>Go back</span>
        </button>
        <button type="button" class="ant-btn ant-btn-primary">
            <span>Go forward</span>
            <i class="anticon anticon-right"></i>
        </button>
    </div>
```

* 幽灵按钮（将颜色反转）
    ant-btn-background-ghost
```html
    <button type="button" class="ant-btn ant-btn-primary ant-btn-background-ghost">
        <span>Primary</span>
    </button>
```
