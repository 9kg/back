$(function(){function t(){var t=base.calDate("i",-(new Date).getMinutes()),a=base.calDate("y",1,t);n=$(".date_start").val(base.date("y-m-d h:i",t)).datepicker({format:"y-m-d h:i",min:"today",datetime:t}),i=$(".date_end").val(base.date("y-m-d h:i",a)).datepicker({format:"y-m-d h:i",min:"today",datetime:a})}function a(t){var a=$("form.add_task");if(!base.formValidate(a))return!1;$('[name="price"][data-show]:checked,[name="taskprice"][data-show]:checked').prop("disabled",!0);var e=a.serializeArray();return $.ajax({url:"test.php",type:"POST",dataType:"json",data:e}).done(function(){t&&t("das")}).fail(function(a){t&&t(),console.dir(a)}),!0}function e(){var e=new Box({title:"添加特邀用户",html:"http://git.bramble.wang/back/html/temp/add_task.html .add_task_form",css:{"min-width":"320px"},fnSure:function(t,e){return a(t&&t.afterfnSure)?void 0:!1},fnCancel:function(t){}});window.oper_task={box:e,initDateBox:t}}var n,i;$(".date_start").length?(t(),$('form.add_task [name="storeurl"]').attr("data-validate-dir","")):e(),$("body").on("change",".date_start,.date_end",function(){$(this).is(".date_start")?i.cgOpt({min:$(this).val()}):n.cgOpt({max:$(this).val()})}).on("click",".btn_task_submit",function(){a(function(t){})})});