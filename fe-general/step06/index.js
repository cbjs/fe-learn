var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/video', function(req, res) {
  var result = {
    data: [
      {
        image: 'images/T1qDE_BbdT1RXrhCrK.jpg',
        title: '小米11月24日发布会（节选）',
        desc:'雷总深情独白：我所有的向往'
      },
      {
        image: 'images/T1QHAgBsWT1RXrhCrK.jpg',
        title: '炫酷!小米九号平衡车还能这么玩',
        desc:'现代舞艺术家用九号平衡车跳舞，实在是太帅了'
      },
      {
        image: 'images/T1oeK_BCAv1RXrhCrK.jpg',
        title: '红米Note3 外观展示',
        desc:'将这些先于时代的千元旗舰配置，献给所有的年轻人'
      },
      {
        image: 'images/T1ApKgBbCT1RXrhCrK.jpg',
        title: '小米电视3 语音体感遥控器',
        desc:'看电视时只需说话，就能轻松找到'
      },
      {
        image: 'images/T1dDxQBCbT1RXrhCrK.jpg',
        title: '60秒看懂小米Note有多酷',
        desc:'美女帅哥模特小米产品视频'
      },
      {
        image: 'images/xiaominote.jpg',
        title: '美!小米Note外观视频',
        desc:'小米Note外观工艺视频'
      },
      {
        image: 'images/jinghsuiqi.jpg',
        title: '不米净水器外观与工艺演示',
        desc:'直接可以喝的纯净水'
      },
      {
        image: 'images/xinguohuo.jpg',
        title: '小米电视2S与小米净水器发布会全程视频',
        desc:'新国货，雄起!'
      },
    ],
    code: 0
  };
  res.json(result);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('web server start at http://%s:%s', host, port);
});
