"use strict";var TodoView=Backbone.View.extend({tagName:"#todo",events:{"keypress .searchIpt":"createOnEnter","click .searchBtn":"search"},initialize:function(){this.$el=$("#todo"),this.fooList=$("#fooList"),this.input=this.$(".searchIpt"),this.searchBtnStatus=!1,this.listenTo(foodLists,"change: _meta",this.render)},render:function(){return foodLists.each(function(t){console.log(t);var e=new TodoView({model:t});this.fooList.append(e.render().el)},this),this},edit:function(){},close:function(){},search:function(){this.searchBtnStatus=!0,this.createOnEnter()},createOnEnter:function(t){var e=this,s=e.input.val(),i="https://api.nutritionix.com/v1_1/search/"+s+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=fafaa50d&appKey=dd6e5d7563cfb23e902d053eca5c80a4";!0!==e.searchBtnStatus&&t.which!==ENTER_KEY||(!0===e.searchBtnStatus&&(e.searchBtnStatus=!1),this.fooList.html(""),spinner.spin(loadTarget),$.ajax({url:i}).done(function(t){if(foodLists.reset(),foodLists.meta(!1),spinner.spin(),-1!==Object.prototype.toString.call(t).indexOf("Object")){if(t.hits){for(var e=[],s=0;s<t.hits.length;s++){var i=new Todo({title:t.hits[s].fields.item_name,brandName:t.hits[s].fields.brand_name,calories:t.hits[s].fields.nf_calories});"USDA"===i.get("brandName")&&i.set("brandName",""),e.push(i)}foodLists.push(e),foodLists.meta(!0),console.log(foodLists),console.log(foodLists._meta.completed)}}else alert("响应的结果数据类型不是一个对象")}).fail(function(t){alert("响应失败")}))}});
//# sourceMappingURL=app-view.js.map
