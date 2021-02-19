const format = (dateObj, format)=>{
   var o = {
     "M+" : dateObj.getMonth()+1, //month
     "d+" : dateObj.getDate(),    //day
     "h+" : dateObj.getHours(),   //hour
     "m+" : dateObj.getMinutes(), //minute
     "s+" : dateObj.getSeconds(), //second
     "q+" : Math.floor((dateObj.getMonth()+3)/3),  //quarter
     "S" : dateObj.getMilliseconds() //millisecond
   }
   if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
   (dateObj.getFullYear()+"").substr(4 - RegExp.$1.length));
   for(var k in o)if(new RegExp("("+ k +")").test(format))
   format = format.replace(RegExp.$1,
   RegExp.$1.length==1 ? o[k] :
   ("00"+ o[k]).substr((""+ o[k]).length));
   return format;
}

const getPastDateStr = (nowDate, dayCount)=>{
  let retDate
  if(Object.prototype.toString.call(nowDate)!=='[object Date]'){
    retDate = new Date()
    dayCount = +nowDate
  } else {
    retDate = nowDate
  }
  retDate.setDate(retDate.getDate() - dayCount);
  return format(retDate, "yyyy-MM-dd")
}

const stringToDate = (fDate)=>{
  var fullDate = fDate.split("-");
  return new Date(fullDate[0], fullDate[1]-1, fullDate[2], 0, 0, 0);
}

const getPastDateStrByStr = (nowDateStr, dayCount)=>{
  return getPastDateStr(stringToDate(nowDateStr), dayCount)
}

const getNowDateStr = ()=>{
  const day = new Date()
  return format(day, "yyyy-MM-dd")
}
export {
  format,
  getPastDateStr,
  stringToDate,
  getPastDateStrByStr,
  getNowDateStr,
}