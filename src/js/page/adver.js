$(function() {
    var opt = {
        $ct: $(".content"),
        col: [{
            key: "idfa",
            title: "商务",
            sort: false,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "id",
            title: "公司",
            sort: true,
            filter: true
        }, {
            key: "phone",
            title: "姓名",
            sort: false,
            filter: true
        }, {
            key: "wechat",
            title: "电话",
            sort: false,
            filter: true,
            cls: "hidden_xs"
        }, {
            key: "login_times",
            title: "消费",
            sort: false,
            filter: true
        }, {
            key: "money",
            title: "余额",
            sort: true
        }, {
            key: "money",
            title: "任务",
            sort: true,
            cls: "hidden_xs"
        }, {
            key: "money",
            title: "账号",
            sort: true
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
        window.open('_HOST_/html/detail/adver_detail.html?id='+$(this).data('id'));
    });
});
