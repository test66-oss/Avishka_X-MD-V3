const _0x52c312=_0x1f33;function _0xea6f(){const _0x4e2fbc=['3447rQnYvP','mtype','reply','-af\x20atempo=4/4,asetrate=44500*2/3','child_process','reverse2','1981452WqsJNG','355rfjHAM','1127328sdbYDR','22408NfWifV','test','tools','Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with','-filter_complex\x20\x22areverse\x22','sendMessage','Adds\x20fast(equilizer)\x20in\x20quoted\x20audio.','-af\x20equalizer=f=54:width_type=o:width=2:g=20','wait','-filter:a\x20\x22atempo=1.63,asetrate=44100\x22','readFileSync','unlinkSync','fast','887oPhwyC','45558pDrYRZ','adds\x20deep\x20effect\x20in\x20given\x20audio','ffmpeg\x20-i\x20','24ikZmaq','slice','728lupxkB','bass','-af\x20acrusher=.1:1:64:0:log','quoted','chat','Reply\x20to\x20the\x20audio\x20you\x20want\x20to\x20change\x20with.','<reply\x20to\x20any\x20audio>','805IntoTh','downloadAndSaveMediaMessage','../command','.mp3','2841773VIIKuS','blown','1100rqOYYy','audio/mpeg','sender'];_0xea6f=function(){return _0x4e2fbc;};return _0xea6f();}(function(_0x1f22e4,_0x43043d){const _0x1bd253=_0x1f33,_0x411921=_0x1f22e4();while(!![]){try{const _0x55d59e=parseInt(_0x1bd253(0xd2))/0x1*(parseInt(_0x1bd253(0xd8))/0x2)+parseInt(_0x1bd253(0xc2))/0x3+-parseInt(_0x1bd253(0xc4))/0x4+-parseInt(_0x1bd253(0xc3))/0x5*(-parseInt(_0x1bd253(0xd3))/0x6)+parseInt(_0x1bd253(0xdf))/0x7*(-parseInt(_0x1bd253(0xc5))/0x8)+-parseInt(_0x1bd253(0xbc))/0x9*(parseInt(_0x1bd253(0xb9))/0xa)+parseInt(_0x1bd253(0xe3))/0xb*(-parseInt(_0x1bd253(0xd6))/0xc);if(_0x55d59e===_0x43043d)break;else _0x411921['push'](_0x411921['shift']());}catch(_0x5eb436){_0x411921['push'](_0x411921['shift']());}}}(_0xea6f,0x57d0c));function _0x1f33(_0x20960b,_0x242f1d){const _0xea6fb4=_0xea6f();return _0x1f33=function(_0x1f33d2,_0x53bbc3){_0x1f33d2=_0x1f33d2-0xb9;let _0x26bcbb=_0xea6fb4[_0x1f33d2];return _0x26bcbb;},_0x1f33(_0x20960b,_0x242f1d);}const fs=require('fs'),{exec}=require(_0x52c312(0xc0)),{cmd,commands}=require(_0x52c312(0xe1));cmd({'pattern':_0x52c312(0xd9),'desc':'adds\x20bass\x20in\x20given\x20sound','category':_0x52c312(0xc7),'use':_0x52c312(0xde),'react':'🔊'},async(_0x1f0347,_0x2aa2d7)=>{const _0x8e1e28=_0x52c312;let _0x502889=_0x2aa2d7['quoted']['mtype'],_0x1585b8=_0x8e1e28(0xcc);if(/audio/[_0x8e1e28(0xc6)](_0x502889)){_0x2aa2d7[_0x8e1e28(0xbe)](tlang()['wait']);let _0x76522d=await _0x1f0347[_0x8e1e28(0xe0)](_0x2aa2d7[_0x8e1e28(0xdb)]),_0x3616db=_0x2aa2d7[_0x8e1e28(0xbb)]['slice'](0x6)+'.mp3';exec(_0x8e1e28(0xd5)+_0x76522d+'\x20'+_0x1585b8+'\x20'+_0x3616db,(_0x396ae6,_0x4bf6ab,_0x137b51)=>{const _0xe00fdd=_0x8e1e28;fs[_0xe00fdd(0xd0)](_0x76522d);if(_0x396ae6)return reply(_0x396ae6);let _0x3bac59=fs[_0xe00fdd(0xcf)](_0x3616db);_0x1f0347[_0xe00fdd(0xca)](_0x2aa2d7['chat'],{'audio':_0x3bac59,'mimetype':'audio/mpeg'},{'quoted':_0x2aa2d7}),fs['unlinkSync'](_0x3616db);});}else _0x2aa2d7[_0x8e1e28(0xbe)](_0x8e1e28(0xc8));}),cmd({'pattern':_0x52c312(0xe4),'desc':'adds\x20blown\x20in\x20given\x20audio','category':_0x52c312(0xc7),'use':'<reply\x20to\x20any\x20audio>','react':'🌬'},async(_0x192805,_0x1a5789)=>{const _0x18c829=_0x52c312;let _0x4c2b0c=_0x1a5789['quoted'][_0x18c829(0xbd)],_0x219338=_0x18c829(0xda);if(/audio/[_0x18c829(0xc6)](_0x4c2b0c)){_0x1a5789[_0x18c829(0xbe)](tlang()['wait']);let _0x108ba9=await _0x192805[_0x18c829(0xe0)](_0x1a5789['quoted']),_0x3ac16b=_0x1a5789[_0x18c829(0xbb)][_0x18c829(0xd7)](0x6)+_0x18c829(0xe2);exec(_0x18c829(0xd5)+_0x108ba9+'\x20'+_0x219338+'\x20'+_0x3ac16b,(_0x343afc,_0x210a95,_0x10c4b0)=>{const _0x734dda=_0x18c829;fs['unlinkSync'](_0x108ba9);if(_0x343afc)return reply(_0x343afc);let _0x5ee936=fs[_0x734dda(0xcf)](_0x3ac16b);_0x192805[_0x734dda(0xca)](_0x1a5789[_0x734dda(0xdc)],{'audio':_0x5ee936,'mimetype':'audio/mpeg'},{'quoted':_0x1a5789}),fs['unlinkSync'](_0x3ac16b);});}else _0x1a5789[_0x18c829(0xbe)](_0x18c829(0xdd));}),cmd({'pattern':'deep','desc':_0x52c312(0xd4),'category':'tools','use':_0x52c312(0xde),'react':'🌀'},async(_0x2183cc,_0x282bc1)=>{const _0x245ee8=_0x52c312;let _0x498c02=_0x282bc1['quoted'][_0x245ee8(0xbd)],_0x307f9f=_0x245ee8(0xbf);if(/audio/[_0x245ee8(0xc6)](_0x498c02)){_0x282bc1[_0x245ee8(0xbe)](tlang()[_0x245ee8(0xcd)]);let _0x46550d=await _0x2183cc[_0x245ee8(0xe0)](_0x282bc1['quoted']),_0x997589=_0x282bc1[_0x245ee8(0xbb)][_0x245ee8(0xd7)](0x6)+'.mp3';exec(_0x245ee8(0xd5)+_0x46550d+'\x20'+_0x307f9f+'\x20'+_0x997589,(_0x42c9fb,_0x301d8f,_0x20e41a)=>{const _0x3f1e70=_0x245ee8;fs[_0x3f1e70(0xd0)](_0x46550d);if(_0x42c9fb)return reply(_0x42c9fb);let _0xc695b3=fs['readFileSync'](_0x997589);_0x2183cc[_0x3f1e70(0xca)](_0x282bc1[_0x3f1e70(0xdc)],{'audio':_0xc695b3,'mimetype':_0x3f1e70(0xba)},{'quoted':_0x282bc1}),fs[_0x3f1e70(0xd0)](_0x997589);});}else _0x282bc1[_0x245ee8(0xbe)](_0x245ee8(0xdd));}),cmd({'pattern':_0x52c312(0xd1),'desc':_0x52c312(0xcb),'category':_0x52c312(0xc7),'use':_0x52c312(0xde),'react':'⚡'},async(_0x452bfb,_0x1d0ecd)=>{const _0x3a2c85=_0x52c312;let _0x1db7dc=_0x1d0ecd[_0x3a2c85(0xdb)][_0x3a2c85(0xbd)],_0x41d514=_0x3a2c85(0xce);if(/audio/['test'](_0x1db7dc)){_0x1d0ecd['reply'](tlang()['wait']);let _0x2466a6=await _0x452bfb[_0x3a2c85(0xe0)](_0x1d0ecd[_0x3a2c85(0xdb)]),_0x50ed35=_0x1d0ecd[_0x3a2c85(0xbb)]['slice'](0x6)+'.mp3';exec(_0x3a2c85(0xd5)+_0x2466a6+'\x20'+_0x41d514+'\x20'+_0x50ed35,(_0x1e089d,_0x2767fd,_0x3aa1b2)=>{const _0xfec693=_0x3a2c85;fs['unlinkSync'](_0x2466a6);if(_0x1e089d)return reply(_0x1e089d);let _0x5132a0=fs[_0xfec693(0xcf)](_0x50ed35);_0x452bfb['sendMessage'](_0x1d0ecd[_0xfec693(0xdc)],{'audio':_0x5132a0,'mimetype':_0xfec693(0xba)},{'quoted':_0x1d0ecd}),fs[_0xfec693(0xd0)](_0x50ed35);});}else _0x1d0ecd['reply'](_0x3a2c85(0xdd));}),cmd({'pattern':_0x52c312(0xc1),'desc':'Adds\x20reverse(equilizer)\x20in\x20quoted\x20audio.','category':_0x52c312(0xc7),'use':_0x52c312(0xde),'react':'🔁'},async(_0x2ad135,_0x2b6be9)=>{const _0x33828a=_0x52c312;let _0xb842f1=_0x2b6be9['quoted']['mtype'],_0x4535d5=_0x33828a(0xc9);if(/audio/[_0x33828a(0xc6)](_0xb842f1)){_0x2b6be9[_0x33828a(0xbe)](tlang()['wait']);let _0x5c3b9c=await _0x2ad135[_0x33828a(0xe0)](_0x2b6be9[_0x33828a(0xdb)]),_0x183496=_0x2b6be9[_0x33828a(0xbb)][_0x33828a(0xd7)](0x6)+_0x33828a(0xe2);exec(_0x33828a(0xd5)+_0x5c3b9c+'\x20'+_0x4535d5+'\x20'+_0x183496,(_0x1a569a,_0x4ce73b,_0xacd897)=>{const _0x4146b6=_0x33828a;fs['unlinkSync'](_0x5c3b9c);if(_0x1a569a)return reply(_0x1a569a);let _0x4fe321=fs[_0x4146b6(0xcf)](_0x183496);_0x2ad135[_0x4146b6(0xca)](_0x2b6be9[_0x4146b6(0xdc)],{'audio':_0x4fe321,'mimetype':'audio/mpeg'},{'quoted':_0x2b6be9}),fs[_0x4146b6(0xd0)](_0x183496);});}else _0x2b6be9[_0x33828a(0xbe)](_0x33828a(0xdd));});