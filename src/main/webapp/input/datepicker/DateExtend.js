/**
 * Created by zeng on 2017-6-25.
 */
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 说明：添加天数
// 参数：天数 比如40天
// 结果：比如日期：2016-16-13，加40天，结果为：2016-07-23
Date.prototype.addDays = function(days)
{
    var date = new Date(this);
    date.setDate(date.getDate() + days);
    return date;
}

/**
 * 获取当前月的第一天
 */
Date.prototype.getCurrentMonthFirst = function (){
    var date=new Date(this);
    date.setDate(1);
    return date;
}
/**
 * 获取当前月的最后一天
 */
Date.prototype.getCurrentMonthLast =  function (){
    var date=new Date(this);
    var currentMonth=date.getMonth();
    var nextMonth=currentMonth + 1;
    var nextMonthFirstDay=new Date(date.getFullYear(),nextMonth,1);
    var oneDay=1000*60*60*24;
    return new Date(nextMonthFirstDay-oneDay);
}
/**
 * 获取两个时间之间天数差
 * @param date1
 * @param date2
 * @returns {number} 天数差
 */
Date.prototype.dateDiffDays = function (date1, date2) {
    var type1 = typeof date1, type2 = typeof date2;
    if (type1 == 'string')
        date1 = stringToTime(date1);
    else if (date1.getTime)
        date1 = date1.getTime();
    if (type2 == 'string')
        date2 = stringToTime(date2);
    else if (date2.getTime)
        date2 = date2.getTime();
    //alert((date1 - date2) / (1000*60*60));
    return (date1 - date2) / (1000 * 60 * 60 * 24);
}

Date.prototype.getCalFirstDay = function () {
    var tmpDate=new Date(this.getCurrentMonthFirst());
    var tmpCurrentDayWeeks = tmpDate.getDay();
    return tmpDate.addDays(0-tmpCurrentDayWeeks);
}

Date.prototype.getCalLastDay = function () {
    var tmpDate=new Date(this.getCurrentMonthLast());
    var tmpCurrentDayWeeks = tmpDate.getDay();
    return tmpDate.addDays(6-tmpCurrentDayWeeks);
}

Date.prototype.getCalDays = function () {
    var tmpCalFirstDate = this.getCalFirstDay();
    var tmpDate = new Date(tmpCalFirstDate);
    var tmpCurrMonth = this.getMonth();
    var tmpCalWeeks = 6;
    var tmpCalDaysArr = [];
    while(tmpCalWeeks > 0){
        var tmpWeekArr = [];
        for(var j = 0;j < 7;j++){
            tmpWeekArr.push({"date":tmpDate,"isThisMonth":tmpCurrMonth == tmpDate.getMonth()});
            tmpDate = tmpDate.addDays(1);
        }
        //tmpDate = tmpDate.addDays(1);
        tmpCalDaysArr.push(tmpWeekArr);
        tmpCalWeeks--;
    }
    return tmpCalDaysArr;
}