# jQuery滑块插件

## 一、运行示例

双击index.html文件查看示例效果。

## 二、用法Usage

**详细代码见文件夹JSlider**

1. index.html文件代码

   ```html
       <!DOCTYPE html>
       <html lang="zh-CN">
         <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <title>jQuery滑块插件</title>
           <script type="text/javascript" src="jquery-1.10.1.js"></script>
           <script type="text/javascript" src="jquery.slider.js"></script>
           <script type="text/javascript" src="index.js"></script>
           <style type="text/css">
             .bar{
                background-color: #FFFFE0;
                border: 1px solid #A9C9E2;
                margin: 20px;
             }
             .complete{
                background-color: #7d9edb;
             }
             .slider{
                background-color: #E6E6FA;
                border: 1px solid #A5B6C8;
             }
             .percent{
                margin-left: 20px;
             }
           </style>
         </head>
         <body>
            <div class="bar">
              <div class="complete"></div>
              <div class="slider"></div>
            </div>
            <div class="percent"></div>
         </body>
       </html>
   ```

   **PS：**

   * 在head区域引入jquery文件，jquery.slider.js滑块插件文件，index.js文件。
   * 以父元素div包裹两个子元素div，一个div表示完成度，添加complete类名，另一个div表示滑块，添加slider类名。
   * 在类名为percent的div中可以显示滑块完成度百分比。

2. index.js文件代码

   ```
   $(function(){
   	$('.bar').jSlider({
   		barSize:{barWidth:700,barHeight:10},
   		sliderSize:{sliderWidth:30,sliderHeight:17},
   		complete:0.2
   	});
   });
   ```

   **PS：**

   * 在调用时，选中父元素标签，调用jSlider方法即可，参数传递一个对象，用来配置轮播器，详细参数配置见下文。如：$(parent).jSlider({ }); 
   * 如果不传递参数，则使用默认配置。

   ## 三、API

   1. jQuery滑块插件参数配置

      * drag:              配置是否支持鼠标拖动滑块，是一个布尔值，true表示支持，false表示不支持；

      * barSize:         配置进度条的尺寸，是一个对象，包括：

        ​                       barWidth:  配置进度条的长度，是一个数值，默认单位为‘px’；

        ​                       barHeight: 配置进度条的高度，是一个数值，默认单位为‘px’；

      * sliderSize:     配置滑块的尺寸，是一个对象，包括：

        ​                       sliderWidth:  配置滑块的宽度，是一个数值，默认单位为‘px’；

        ​                       sliderHeight: 配置滑块的高度，是一个数值，默认单位为‘px’；

      * complete:     配置进度条的初始完成度，是一个 0~1 的数值；

      * onchanging: 配置插件获取进度条百分比后的处理方法，是一个方法，示例用于在页面显示百分比；

      * onchanged:  配置执行完滑块之后的回调函数，是一个方法。

   2. jQuery滑块插件默认参数配置

      以下为滑块插件的默认配置，在调用时可根据需要更改默认配置，也可以通过传递参数覆盖默认配置；

          {
          	drag:true,
          	barSize:{barWidth:600,barHeight:5},
          	sliderSize:{sliderWidth:25,sliderHeight:15},
          	complete:0.5,
          	onchanging:function(percent,e){
                $('div.percent').html(percent*100+'%');
          	},
          	onchanged:function(){}
          }







