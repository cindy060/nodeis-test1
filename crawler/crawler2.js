// axios await 版本
// 把 query string 抽出來當變數，用 params 的方式去設定

const axios = require('axios');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211

(async () => {
    try {
        let stockNo = '2618';
        let date = '20221111';
        let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
      params: {
        stockNo,
        date,
      },
    });
    
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    
  })();
 