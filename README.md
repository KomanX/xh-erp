# xh-erp

一个简约的ERP系统。

Vue2+Vue CLI3+scss+elementUI+Express+mongoDB

部分效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/home.png)

## 自己设计的UI组件

组件相关文件都在src\components\目录下。

### color-cards - 彩色卡片组

函数式组件+插槽实现。

可以根据插槽数量，生成同样数量的带有自动彩色的圆角矩形卡片。

只能识别default插槽。

使用示例：

```javascript
<color-cards class="color-cards">
	<template>
        <div
        	v-for="(item, index) in user.team"
        	:key="index"
        >
        	<img :src="item.img" />
        	<div>
        		<span>{{ item.pro }}</span>
        			{{ item.name }}
        	</div>
        	<div>→</div>
        </div>
	</template>
</color-cards>
```

可以通过给color-cards标签添加class来设置卡片组内容的大小等属性。

选择器.color-cards>div可以找到插槽内容（卡片Dom对象），也可以通过添加class的方式修改属性，默认样式（可覆盖）有：

```css
border-radius: 10px,
margin-right: 1rem,
flex: auto,
height: 100%
```

卡片的背景颜色添加到v-bind:style中，如果想要修改，需要做以下操作：

```html
<div
	v-for="(item, index) in user.team"
	:key="index"
    :style="{'background': 'black'}"<!-- 添加该行，也可以设置为'background-color': 'black' -->
>
	<img :src="item.img" />
	<div>
		<span>{{ item.pro }}</span>
		{{ item.name }}
		</div>
	<div>→</div>
</div>
```

渲染函数如下：

```javascript
  render(h) {
    let slotList = this.$slots.default.map(
      (item, index) => {
        item.data.style = Object.assign(
          {
            'background-color': this.colors[index]
          },
          item.data.style
        );
        item.data.staticClass = `color-card ${item.data.staticClass}`;
        return item;
      }
    );
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'align-items': 'center'
        }
      },
      slotList
    );
  }
```

效果图：

 ![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/color-cards.png)

### progress-bar - 多种进度条样式

可以通过设置参数实现多种进度条样式。

```javascript
props: {
    //rate - 指定进度，若为数组对象，则会用多条进度条填满灰度条，每条进度条的占比为其本身数值占所有进度数值总合的百分比。
    'rate': [Number, String, Array],
    //percentage - 决定是否在进度条后面显示具体进度数值文本，rate类型不为Array时才生效。
    'percentage': {
      type: Boolean,
      default: false
    },
    //col - 决定是否竖着显示进度条
    'col': {
      type: Boolean,
      default: false
    },
    //bar-color - 设置进度条的颜色，可以为数组，与多条进度条配合。若有多条进度条，颜色数量少于进度条数量，多出的进度条会用默认颜色。若没有设置，则用默认颜色。
    'bar-color': {
      type: [String, Array],
      default: defaultBarColor
    },
    //err-rate - 设置警告边界，若当前进度数值小于警告边界数值，进度条颜色和进度数值文本颜色会变成警告颜色，rate类型不为Array时才生效。
    'err-rate': {
      type: [Number, String],
      default: 0
    }
    //err-color - 设置警告颜色。若没有设置，则用默认颜色。
    'err-color': {
      type: String,
      default: defaultErrColor
    },
  },
```

**进度条没有默认宽高，需要外部设置！**

效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/progress-bar-1.png)

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/progress-bar-2.png)

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/progress-bar-3.png)

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/progress-bar-4.png)

### xh-chart - 多种统计图样式

暂时只有跟进度条结合的统计图样式。

通过设置相应规格的参数和统计图类型，自动生成统计图。

```javascript
props: {
    //xh-data - 统计图数据
    'xh-data': {
      type: Array
    },
    //type - 统计图类型
    'type': {
      type: String
    }
  }
```

统计图类型暂时支持三种：row、row-img、schedule。

#### row - 行统计图

数据类型：

```javascript
[{
	'name':String,
	'des':String,
	'rate':[Number,String,Array]
}]
```

效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/xh-chart-row.png)

当内容过多时，超出部分会被隐藏，可以通过滚动显示。

#### row-img - 带图行统计图

数据类型：

```javascript
[{
    'img':String,
	'name':String,
	'des':String,
	'rate':[Number,String,Array]
}]
```

效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/xh-chart-row-img.png)

#### schedule - 日程表

数据类型：

```javascript
[{
	'name':Array,
	'rate':Array
}]
```

效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/xh-chart-schedule.png)

### msg-icon - 图标圆角矩形

通过设置参数，自动生成内部图标或文本水平垂直居中的圆角矩形。

```javascript
props: {
    //组件类型
    'type': {
      type: String
    },
    //文本内容
    'message': {
      type: String
    }
  }
```

如果设置了message，圆角矩形中就会显示文本，而不会显示图片。

如果设置了type，圆角矩形中会显示图片，图片的路径为

```javascript
:src="'/images/msg-icon-' + type + '.png'"
```

所以只需要在public\images目录中添加名为msg-icon-*的png图片，就可以根据你的自定义名调用相应的图标圆角矩形。

效果图：

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/msg-icon-message.png)

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/msg-icon-msg.png)

![image](https://github.com/KomanX/xh-erp/tree/master/readme-images/msg-icon-todo.png)