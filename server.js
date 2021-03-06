'use strict';
var AV = require('leanengine');

var appId = process.env.LC_APP_ID;
var appKey = process.env.LC_APP_KEY;
var masterKey = process.env.LC_APP_MASTER_KEY;

AV.init({ appId, appKey, masterKey });
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();

var app = require('./app');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);
});
