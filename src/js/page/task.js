$(function() {
    var opt = {
        $ct: $(".content"),
        col: [{
            key: "id",
            title: '<label class="checkbox"><input type="checkbox" name="sel_task_all"><span class="opt_imitate"></span></label>',
            width: 20,
            render: function(a, b) {
                var btn_query = $('<label class="checkbox"><input type="checkbox" value="'+b+'" name="sel_task"><span class="opt_imitate"></span></label>');
                a.append(btn_query);
            }
        }, {
            key: "idfa",
            title: "商务",
            sort: false,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "id",
            title: "公司",
            sort: true,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "login_times",
            title: "名称",
            sort: false,
            filter: true
        }, {
            key: "phone",
            title: "关键词",
            sort: false,
            filter: true,
            cls: "hidden_md"
        }, {
            key: "money",
            title: "下载",
            sort: true,
            cls: "hidden_md"
        }, {
            key: "money",
            title: "评论",
            sort: true,
            cls: "hidden_xs"
        }, {
            key: "money",
            title: "投放",
            sort: true,
            cls: "hidden_xs"
        }, {
            key: "money",
            title: "已完成",
            sort: true,
            cls: "hidden_xs"
        }, {
            key: "login",
            title: "开始时间",
            sort: true,
            cls: "hidden_md"
        }, {
            key: "wechat",
            title: "来源",
            sort: false,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "ip",
            title: "单价",
            sort: false,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "money",
            title: "状态",
            sort: false,
            filter: true
        }, {
            key: "id",
            title: "操作",
            width: 60,
            cls: "t_center",
            render: function(a, b) {
                var btn_query = $('<button type="button" class="btn btn_info btn_query_detail" data-id="' + b + '">查看</button>');
                a.append(btn_query);
            }
        }],
        isLocal: true,
        url: "_HOST_/js/json/user.json"
    };
    new Table(opt);
    $('body').on('click','table .btn_query_detail',function(){
        window.open('_HOST_/html/detail/task_detail.html?id='+$(this).data('id'));
    });
});
