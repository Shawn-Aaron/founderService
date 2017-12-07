
var WebUtil={};

WebUtil.formatResult=function(result){
    var resultFormat = {};
    if(0 == result.recordset.length){
        resultFormat.nRes = 0;
        resultFormat.vcRes = "未查询到相关数据";
    }else{
        resultFormat.nRes = 1;
        resultFormat.result = result.recordset;
    }
    return resultFormat;
};

WebUtil.isEmptyString=function(result){
    if(result.replace(/(^\s*)|(\s*$)/g, "").length ==0){
        return true;
    }else{
        return false;
    }
};

module.exports=WebUtil;
