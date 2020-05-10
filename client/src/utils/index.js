/*
 *  Description:  
 *  Author: LuckRain7
 *  Date: 2020-05-10 15:33:46
 */
export function switchTime(
  val = +new Date(),
  dateType = "YYYY-MM-DD hh:mm:ss"
) {
  // 将字符串转换成数字
  const timeStamp = +new Date(val);

  // 如果转换成数字出错
  if (!timeStamp) {
    return val;
  }
  let str;
  // 得到时间字符串
  const dateStr = new Date(timeStamp);
  str = dateType.replace("YYYY", dateStr.getFullYear());
  str = str.replace(
    "MM",
    (dateStr.getMonth() + 1 < 10 ? "0" : "") + (dateStr.getMonth() + 1)
  );
  str = str.replace(
    "DD",
    (dateStr.getDate() < 10 ? "0" : "") + dateStr.getDate()
  );
  str = str.replace(
    "hh",
    (dateStr.getHours() < 10 ? "0" : "") + dateStr.getHours()
  );
  str = str.replace(
    "mm",
    (dateStr.getMinutes() < 10 ? "0" : "") + dateStr.getMinutes()
  );
  str = str.replace(
    "ss",
    (dateStr.getSeconds() < 10 ? "0" : "") + dateStr.getSeconds()
  );

  return str;
}

export const a = 10;
