/**
 * Created by 菅晓凯 on 2017-12-06.
 * http请求信息
 */
var express = require('express');

var router = express.Router();
var httpUtil = require('../common/util/HttpUtil.js');
var moment = require('moment');

router.get('/getWebInfo', function(req, res, next) {
    //获取并配置查询相关参数
    var url = req.query.url == undefined? "":req.query.url;
    function resResult(date){
        //返回数据
        res.json(200,date);
    }
    httpUtil.getAndReturnJson('http://japi.juhe.cn/joke/content/list.from?sort=asc&page=1&pagesize=1&time=1418816972&key=b4af1c3f31cbb1af77cbdcb8c9d06895',resResult);
});

module.exports = router;

