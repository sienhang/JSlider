;(function($){
    function Slider(element,options){
       this.$element=$(element);
       this.options=options;
       this.barSize=this.options.barSize;
       this.sliderSize=this.options.sliderSize;
       this.complete=this.$element.children('.complete');
       this.slider=this.$element.children('.slider');
    }
    Slider.prototype.init=function(){
       var sliderleft=(this.barSize.barWidth-this.sliderSize.sliderWidth)*this.options.complete;
       this.$element.css({
       	  width:this.barSize.barWidth,
       	  height:this.barSize.barHeight,
          padding:1,
       	  position:'relative'
       });
       this.slider.css({
       	  width:this.sliderSize.sliderWidth,
       	  height:this.sliderSize.sliderHeight,
       	  position:'absolute',
       	  top:'50%',
          transform:'translateY(-50%)',
          left:sliderleft,
          cursor:'pointer'
       });
       this.complete.css({
          width:sliderleft,
          height:'100%',
       });
       this.setDrag();
       this.options.onchanging(this.options.complete);
    };
    Slider.prototype.setDrag=function(){
       if(this.options.drag){
          this.slider.on('mousedown',$.proxy(function(e){
              var data={
                 sliderleft:parseInt(this.slider.css('left')),
                 sliderX:e.pageX
              } 
              $(document).on('mousemove',data,$.proxy(this.sliderMove,this)).on('mouseup',$.proxy(this.sliderUp,this));       
          },this))
       }
    };
    Slider.prototype.sliderMove=function(e){
       var data=e.data;
       var sliderleft=(e.pageX-e.data.sliderX)+e.data.sliderleft;
       var maxleft=this.barSize.barWidth-this.sliderSize.sliderWidth;
       var sleft=sliderleft<0 ? 0 : sliderleft>maxleft ? maxleft : sliderleft;
       this.slider.css('left',sleft);
       this.complete.css('width',sleft);
       this.options.onchanging(parseFloat(sleft/maxleft),e);  
    };
    Slider.prototype.sliderUp=function(){
       $(document).off('mousemove',$.proxy(this.sliderMove,this)).off('mouseup',$.proxy(this.sliderUp,this));
    };
    $.fn.jSlider=function(option){
       return this.each(function(){
          var options=$.extend({},$.fn.jSlider.default,option);
          var s=new Slider(this,options);
          s.init();
          s.options.onchanged();
       })
    };
	$.fn.jSlider.default={
		drag:true,
		barSize:{barWidth:600,barHeight:5},
		sliderSize:{sliderWidth:25,sliderHeight:15},
		complete:0.5,
		onchanging:function(percent,e){
      $('div.percent').html(percent*100+'%');
		},
		onchanged:function(){}
	}
})(jQuery);