(function (window) {
  let cbh = {};
  cbh.formatDate = function (d) {
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    return `${year}年${month}月${date}日${hour}时${minute}分${second}秒`;
  };

  window.cbh = cbh;
})(window);
