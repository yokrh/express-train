var express = require('express');
var router = express.Router();

// デフォルトルーティング
router.get('/', function (request, response) {
  var title = "タイトル";
  var description = "ディスクリプションです。nodejsサンプルページ。";
  var params = {};
  params["hoge"] = "hogehoge";
  params["fuga"] = "fugafuga";
  response.render('index',
    {
      title: title,
      description: description,
      params: params
    }
  );
});

module.exports = router;
