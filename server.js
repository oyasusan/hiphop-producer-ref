'use strict';
// モジュールはホームの node_modules から読む（SDカードはFATのため npm install 不可）
const MODULE_PATH = '/home/yasuosanlkz/hiphop-modules/node_modules';
const express    = require(MODULE_PATH + '/express');
const initSqlJs  = require(MODULE_PATH + '/sql.js');
const path       = require('path');
const fs         = require('fs');
const os         = require('os');

const app  = express();
const PORT = process.env.PORT || 3000;
const DB   = path.join(__dirname, 'producers.db');

let db;  // sql.js Database instance（非同期初期化後にセット）

app.use(express.json());
app.use(express.static(__dirname));

// ── sql.js helpers ────────────────────────────────────────────────────────────
function saveDB() {
  fs.writeFileSync(DB, Buffer.from(db.export()));
}

function dbAll(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function dbGet(sql, params = []) {
  return dbAll(sql, params)[0] || null;
}

function dbRun(sql, params = []) {
  db.run(sql, params);
  return db.exec('SELECT last_insert_rowid() as id')[0]?.values[0]?.[0];
}

// ── Seed data ─────────────────────────────────────────────────────────────────
const SEED = [
  {
    name:"DJ Premier", alias:"Premo",
    eras:["90s"], styles:["boom bap","underground"],
    region:"East Coast", city:"Brooklyn, NY", bpm:"84–96",
    desc:"90年代NYハードコアHipHopの象徴。Gang Starrのメンバーとして活躍し、チョップされたジャズサンプル・スクラッチ・ハードなMPCドラムで独自の「プリモサウンド」を確立した。",
    sounds:["チョップサンプル","バイナルスクラッチ","バイナルクラックル","ハードMPCドラム","ジャズサンプル","ベースライン"],
    artists:["Gang Starr","Nas","Jay-Z","Notorious B.I.G.","Jeru the Damaja","Big L"],
    prompts:[
      {type:"クラシック（90s本格派）",style:"90s New York hardcore hip hop, boom bap, dark gritty underground",detail:"[Instrumental] chopped jazz vinyl samples with vinyl crackle, hard hitting MPC boom bap drums, DJ scratching cuts, deep bassline, 88 BPM, dark gritty New York underground atmosphere, raw aggressive energy, instrumental loop"},
      {type:"モダン（現代解釈）",style:"modern boom bap hip hop, DJ Premier inspired, New York underground",detail:"[Instrumental] crisp chopped soul samples, hard punchy drums, clean scratch elements, 90 BPM, classic New York underground hip hop loop, polished yet raw production feel"},
      {type:"実験的（エクスペリメンタル）",style:"experimental boom bap, abstract hip hop, avant-garde sampling",detail:"[Instrumental] deconstructed jazz samples, glitchy abstract scratching, unconventional drum patterns, dark atmospheric textures, 85 BPM, underground experimental hip hop loop"}
    ]
  },
  {
    name:"Pete Rock", alias:"The Soul Controller",
    eras:["90s"], styles:["boom bap","jazzy"],
    region:"East Coast", city:"New Rochelle, NY", bpm:"88–98",
    desc:"C.L. Smoothとのデュオで有名な「ソウルコントローラー」。ホルンやブラスをフィーチャーしたソウルフルかつジャジーなサンプリングで90年代NYシーンに唯一無二のグルーヴをもたらした。",
    sounds:["ホルンサンプル","ソウルフルループ","ジャジードラム","ウォームベース","ブラスサンプル"],
    artists:["C.L. Smooth","Gang Starr","Nas","Big Pun","Rakim"],
    prompts:[
      {type:"クラシック（90sソウルジャジー）",style:"90s soulful jazz hip hop, boom bap, New York, warm and groovy",detail:"[Instrumental] warm soulful horn samples, jazzy piano chords, smooth boom bap drum pattern, deep bass groove, vinyl warmth, 92 BPM, uplifting soulful New York hip hop loop"},
      {type:"モダン（クリーンソウル）",style:"modern jazzy hip hop, neo soul influenced, soulful beats",detail:"[Instrumental] chopped brass and horn samples, clean punchy drums, warm bass, jazz chord progressions, 90 BPM, soulful smooth hip hop instrumental loop, positive uplifting feel"},
      {type:"実験的（ジャズフュージョン）",style:"jazz fusion hip hop, experimental soul, abstract beats",detail:"[Instrumental] complex jazz sample layering, live drumkit feel, saxophone and trumpet accents, modal jazz harmony, 88 BPM, sophisticated jazz-hip-hop fusion loop"}
    ]
  },
  {
    name:"RZA", alias:"Bobby Digital",
    eras:["90s"], styles:["boom bap","alternative"],
    region:"East Coast", city:"Staten Island, NY", bpm:"70–92",
    desc:"Wu-Tang Clanのサウンドアーキテクト。カンフー映画のダイアログ・不穏な弦楽サンプル・重いドラムで独自のダーク&シネマティックなワールドを構築した。",
    sounds:["カンフー映画SE","ダーク弦楽","重いドラム","グリミーテクスチャー","ボイスサンプル","ダークアンビエンス"],
    artists:["Wu-Tang Clan","Ghostface Killah","GZA","Method Man","Raekwon"],
    prompts:[
      {type:"クラシック（WuTangダーク）",style:"90s dark cinematic hip hop, Wu-Tang style, gritty underground",detail:"[Instrumental] dark and eerie string samples, kung fu movie dialogue cuts, heavy booming drums, ominous bass, dusty vinyl texture, 80 BPM, dark atmospheric underground New York hip hop loop"},
      {type:"モダン（ダークシネマ）",style:"dark cinematic hip hop, atmospheric, moody underground",detail:"[Instrumental] ominous orchestral strings, heavy drums, deep sub bass, mysterious atmospheric pads, 84 BPM, dark cinematic hip hop loop, thriller movie soundtrack feel"},
      {type:"実験的（ホラーアブストラクト）",style:"horror hip hop, abstract dark beats, experimental underground",detail:"[Instrumental] distorted eerie samples, unconventional dark textures, warped vocal chops, industrial percussion, 75 BPM, abstract horror-influenced hip hop loop"}
    ]
  },
  {
    name:"J Dilla", alias:"Jay Dee / Donuts",
    eras:["90s","2000s"], styles:["lo-fi","neo soul","alternative","jazzy"],
    region:"Midwest", city:"Detroit, MI", bpm:"75–95",
    desc:"ビートメイキングを芸術に昇華させた天才。意図的にオフビートで置かれたドラム・MPC3000の独特のスウィング・ソウルフルなサンプリングで後世に多大な影響を与えた。",
    sounds:["オフビートドラム","MPCスウィング","ソウルサンプル","ウォームテクスチャー","ジャジーコード","グルーヴィーベース"],
    artists:["Common","De La Soul","A Tribe Called Quest","Erykah Badu","D'Angelo","Slum Village"],
    prompts:[
      {type:"クラシック（Dilla感）",style:"lo-fi hip hop, Detroit MPC beats, neo soul, off-kilter groovy",detail:"[Instrumental] warm soulful sample chops, intentionally off-beat MPC drum swing, jazzy chord stabs, deep bass groove, dusty vinyl texture, 82 BPM, Detroit soul hip hop loop, organic imperfect feel"},
      {type:"モダン（ローファイソウル）",style:"lo-fi hip hop, soulful beats, chill relaxing, neo soul influenced",detail:"[Instrumental] mellow soulful piano and guitar samples, laid-back swinging drum groove, warm bass, tape saturation, cassette hiss, 80 BPM, chill lo-fi hip hop soul loop"},
      {type:"実験的（デトロイトジャズ）",style:"experimental Detroit hip hop, jazz deconstruction, abstract beats",detail:"[Instrumental] complex jazz sample manipulation, glitchy MPC stutters, polyrhythmic drum patterns, modal jazz harmony fragments, 78 BPM, experimental Detroit beatscape loop"}
    ]
  },
  {
    name:"Madlib", alias:"Quasimoto / Lord Quas",
    eras:["2000s","2010s","2020s"], styles:["lo-fi","alternative","jazzy"],
    region:"West Coast", city:"Oxnard, CA", bpm:"70–95",
    desc:"ガレージに埋もれた世界中のレアグルーヴを掘り起こし、独自のサイケデリックな視点で再構築する「クレートダイガーの王」。MF DOOMとのコラボ「Madvillainy」は歴史的名盤。",
    sounds:["レアグルーヴサンプル","サイケデリックテクスチャー","エスニックサンプル","ローファイドラム","グリッチ"],
    artists:["MF DOOM","Mos Def","Freddie Gibbs","Quasimoto","Kanye West"],
    prompts:[
      {type:"クラシック（サイケクレート）",style:"lo-fi psychedelic hip hop, crate digging, abstract beats, dusty",detail:"[Instrumental] obscure rare groove vinyl samples, psychedelic and exotic textures, dusty lo-fi drum breaks, ethnic music fragments, 80 BPM, abstract crate-digging hip hop loop, trippy atmospheric feel"},
      {type:"モダン（アブストラクト）",style:"abstract hip hop, lo-fi experimental, multi-genre sampling",detail:"[Instrumental] layered world music samples, chopped and filtered jazz, avant-garde drum patterns, psychedelic bass, 78 BPM, abstract lo-fi hip hop experimental loop"},
      {type:"実験的（ワールドミュージック融合）",style:"world music hip hop fusion, experimental lo-fi, psychedelic beats",detail:"[Instrumental] fused African, Brazilian, Asian music samples over hip hop beats, exotic percussion, modal scales, drone textures, 72 BPM, psychedelic world-fusion hip hop loop"}
    ]
  },
  {
    name:"Dr. Dre", alias:"The Chronic",
    eras:["90s","2000s","2010s"], styles:["g-funk","west coast"],
    region:"West Coast", city:"Compton, CA", bpm:"90–104",
    desc:"Gファンクの定義者にして西海岸HipHopの頂点。George Clinton/P-Funkのシンセベース・Talkboxを取り込み、Snoop Dogg・Eminem・50 Centといった才能を世に送り出した。",
    sounds:["Gファンクシンセ","シンセベース","Pファンクサンプル","Talkbox","クリーンドラム","ウェストコーストグルーヴ"],
    artists:["Snoop Dogg","Eminem","50 Cent","Ice Cube","Kendrick Lamar"],
    prompts:[
      {type:"クラシック（Gファンク）",style:"90s G-funk West Coast hip hop, gangsta rap beat, smooth and funky",detail:"[Instrumental] G-funk synthesizer melody, deep synth bass groove, P-Funk influenced samples, talkbox voice, laid-back West Coast drum groove, 96 BPM, smooth Compton hip hop loop"},
      {type:"モダン（ドレービート）",style:"modern West Coast hip hop, Dr. Dre influenced, polished G-funk",detail:"[Instrumental] clean polished synthesizer chords, heavy 808 bass, crisp snare and hi-hat, West Coast swagger groove, 98 BPM, refined modern G-funk hip hop loop"},
      {type:"実験的（ネオGファンク）",style:"neo G-funk, futuristic West Coast, cinematic hip hop",detail:"[Instrumental] evolved G-funk with orchestral strings, futuristic synth layers, heavy sub bass, cinematic drum programming, 100 BPM, modern cinematic West Coast hip hop loop"}
    ]
  },
  {
    name:"The Neptunes", alias:"Pharrell Williams & Chad Hugo",
    eras:["2000s"], styles:["funk","alternative"],
    region:"East Coast", city:"Virginia Beach, VA", bpm:"95–112",
    desc:"2000年代の音楽シーンを席巻したネプチューンズ。ミニマルなドラムパターン・独特のシンセ・ファンキーなグルーヴで、Jay-Z・Clipse・Nelly・Beyoncéなど無数のヒットを生んだ。",
    sounds:["ミニマルドラム","独特シンセ","ファンキーベース","808","スネアクラップ","エレクトリックギター"],
    artists:["Jay-Z","Clipse","Nelly","Snoop Dogg","Pharrell","Justin Timberlake"],
    prompts:[
      {type:"クラシック（ネプチューンズ）",style:"2000s Neptunes hip hop beat, minimalist funky, unique drum pattern",detail:"[Instrumental] sparse minimalist drum pattern with unique syncopation, funky synthesizer stabs, deep bass groove, clap-heavy rhythm, 100 BPM, Neptunes-style hip hop funk loop, quirky infectious groove"},
      {type:"モダン（ミニマルファンク）",style:"minimalist hip hop funk, modern Pharrell inspired, clean production",detail:"[Instrumental] stripped-back minimalist drum groove, bouncy synthesizer melody, electric bass, precise hi-hat patterns, 104 BPM, clean minimalist hip hop funk loop"},
      {type:"実験的（スペースファンク）",style:"space funk hip hop, futuristic minimalism, electronic funk",detail:"[Instrumental] alien synthesizer textures over minimalist drum groove, cosmic bass, futuristic sound design elements, 98 BPM, experimental space-funk hip hop loop"}
    ]
  },
  {
    name:"Timbaland", alias:"Tim Mosley",
    eras:["2000s"], styles:["alternative","funk"],
    region:"East Coast", city:"Norfolk, VA", bpm:"90–108",
    desc:"ティンバランドのリズムパターンは唯一無二。インドや中東・アフリカの音楽を大胆に取り込んだエスニックなパーカッション・独特のドラムプログラミングでR&BとHipHopの境界を塗り替えた。",
    sounds:["独特リズムパターン","インドパーカッション","エレクトリックサウンド","ユニークドラム","エスニックサンプル"],
    artists:["Missy Elliott","Jay-Z","Aaliyah","Justin Timberlake","Nelly Furtado"],
    prompts:[
      {type:"クラシック（ティンバランドリズム）",style:"2000s Timbaland hip hop R&B beat, unique drum pattern, exotic percussion",detail:"[Instrumental] Timbaland-style unique syncopated drum pattern, Indian and Middle Eastern percussion elements, electric synthesizer stabs, unusual bass groove, 98 BPM, exotic rhythmic hip hop R&B loop"},
      {type:"モダン（エスニックフュージョン）",style:"modern ethnic fusion hip hop, world beat, unique percussion programming",detail:"[Instrumental] complex polyrhythmic percussion layers, exotic world instruments, synthesizer textures, 100 BPM, modern ethnic-fusion hip hop loop with global influences"},
      {type:"実験的（ポリリズム）",style:"polyrhythmic experimental hip hop, percussion-forward, eclectic",detail:"[Instrumental] layered polyrhythmic drum patterns from multiple cultures, glitchy electronic elements, abstract bass, 96 BPM, experimental polyrhythmic percussion hip hop loop"}
    ]
  },
  {
    name:"Kanye West", alias:"Ye / Louis Vuitton Don",
    eras:["2000s","2010s"], styles:["boom bap","alternative"],
    region:"Midwest", city:"Chicago, IL", bpm:"86–104",
    desc:"ソウルサンプルをスピードアップさせる「ソウルサンプルチョップ」を確立した2000年代の革命児。College Dropout期の温かみのある楽観的なサウンドから後期の前衛的なエクスペリメンタルまで幅広い。",
    sounds:["スピードアップソウル","ピアノサンプル","808キック","シンセ","オーケストラ"],
    artists:["Jay-Z","Common","Lil Wayne","Kid Cudi","Frank Ocean"],
    prompts:[
      {type:"クラシック（ソウルサンプル期）",style:"2000s soul sample hip hop, Chicago, warm uplifting, boom bap soul",detail:"[Instrumental] sped-up chopped soul sample, warm piano chords, hard-hitting drum pattern, uplifting gospel-influenced feel, 90 BPM, classic Chicago soul hip hop loop, optimistic warm atmosphere"},
      {type:"モダン（808マキシマリスト）",style:"808 heavy hip hop, maximalist production, orchestral hip hop",detail:"[Instrumental] 808 bass drums, lush orchestral strings, dramatic choir swells, heavy bass drop, 95 BPM, maximalist cinematic hip hop loop, grandiose epic feel"},
      {type:"実験的（前衛エレクトロ）",style:"experimental electronic hip hop, avant-garde, industrial influenced",detail:"[Instrumental] distorted industrial samples, deconstructed 808 patterns, abstract electronic textures, 88 BPM, experimental avant-garde hip hop loop"}
    ]
  },
  {
    name:"Metro Boomin", alias:"Not All Heroes Wear Capes",
    eras:["2010s","2020s"], styles:["trap"],
    region:"South", city:"Atlanta, GA", bpm:"130–148",
    desc:"モダントラップの頂点。ダークでシネマティックなオーケストラサウンドと808ベース・連打するハイハットで、Future・21 Savage・Drake等の楽曲を手がけたアトランタのキングプロデューサー。",
    sounds:["オーケストラサンプル","808ベース","トリプレットハイハット","ダークパッド","シネマティックストリングス"],
    artists:["Future","21 Savage","Drake","Young Thug","Gucci Mane","Offset"],
    prompts:[
      {type:"クラシック（ダークトラップ）",style:"dark trap hip hop, Metro Boomin style, Atlanta, cinematic",detail:"[Instrumental] dark orchestral string samples, heavy 808 bass hits, rapid trap hi-hat rolls, ominous piano stabs, thunderous snare, 140 BPM, dark cinematic Atlanta trap loop"},
      {type:"モダン（メロトラップ）",style:"melodic dark trap, atmospheric, modern Atlanta trap",detail:"[Instrumental] melancholic piano melody over trap drums, sliding 808 bass, layered trap hi-hats, dark atmospheric pads, 138 BPM, modern melodic dark trap loop"},
      {type:"実験的（シネマトラップ）",style:"cinematic trap, orchestral hip hop, epic dark production",detail:"[Instrumental] full orchestral arrangement with trap drums, epic brass and strings, 808 bass drops, cinematic build-ups, 142 BPM, epic cinematic trap loop, blockbuster movie feel"}
    ]
  },
  {
    name:"Zaytoven", alias:"Zay",
    eras:["2000s","2010s"], styles:["trap"],
    region:"South", city:"Atlanta, GA", bpm:"130–145",
    desc:"アトランタのピアノトラップパイオニア。チャーチで培ったピアノ技術をトラップに融合し、Gucci Mane・Future・21 Savage・Migos等のアトランタシーン形成に貢献した。",
    sounds:["ピアノメロディー","808ベース","トリプレットハイハット","チャーチオルガン","ベルサウンド"],
    artists:["Gucci Mane","Future","Migos","21 Savage","Young Thug"],
    prompts:[
      {type:"クラシック（ピアノトラップ）",style:"Atlanta piano trap, Zaytoven style, church influenced, melodic",detail:"[Instrumental] melodic piano loop in trap beat, church organ undertones, heavy 808 bass, triplet hi-hat pattern, bright synth bells, 138 BPM, Atlanta piano trap loop, gospel-influenced melody"},
      {type:"モダン（メロディックトラップ）",style:"melodic trap, piano-driven, Atlanta modern trap",detail:"[Instrumental] catchy piano melody with trap production, sliding 808, layered melodic elements, trap drum pattern, 140 BPM, modern melodic Atlanta trap loop"},
      {type:"実験的（ゴスペルトラップ）",style:"gospel trap fusion, spiritual hip hop, experimental church sound",detail:"[Instrumental] gospel choir samples over trap drums, church organ and piano, 808 bass, spiritual and street fusion, 136 BPM, gospel trap experimental loop"}
    ]
  },
  {
    name:"Pi'erre Bourne", alias:"Pierre",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"South", city:"Columbia, SC", bpm:"130–148",
    desc:"エーテリアルトラップの先駆者。独特のサンプリング感覚・夢幻的なシンセテクスチャー・浮遊感のあるビートでPlayboi Carti・21 Savage等の楽曲を手がけ、ロマンチックなトラップ新世界を創出。",
    sounds:["浮遊シンセ","ドリーミーテクスチャー","エーテリアルサンプル","808ベース","キラキラベル"],
    artists:["Playboi Carti","21 Savage","Lil Uzi Vert","SosThatky","Juice WRLD"],
    prompts:[
      {type:"クラシック（エーテリアルトラップ）",style:"ethereal trap, dreamy atmospheric, Pierre Bourne style",detail:"[Instrumental] dreamy floating synthesizer melody, otherworldly atmospheric pads, heavy 808 bass, trap drum pattern, sparkling bells and arpeggios, 140 BPM, ethereal psychedelic trap loop"},
      {type:"モダン（ドリームトラップ）",style:"dream trap, psychedelic hip hop, floaty atmospheric",detail:"[Instrumental] surreal synthesizer textures, pitch-shifted dreamy samples, sliding 808, layered atmospheric sounds, 142 BPM, dreamy hypnotic trap loop, mind-bending sonic landscape"},
      {type:"実験的（サイケトラップ）",style:"psychedelic trap, experimental hip hop, surreal production",detail:"[Instrumental] heavily processed psychedelic samples, glitchy dream sequences, warped 808 bass, abstract trap drums, 136 BPM, surreal experimental psychedelic trap loop"}
    ]
  },
  {
    name:"Mannie Fresh", alias:"The Original",
    eras:["90s","2000s"], styles:["south"],
    region:"South", city:"New Orleans, LA", bpm:"98–112",
    desc:"Cash Money Records専属のサウンドアーキテクト。ニューオーリンズバウンスのリズム・派手なシンセブラス・エレクトリックドラムでBirdmanやLil Wayne等の楽曲を手がけた。",
    sounds:["バウンスビート","シンセブラス","エレクトリックドラム","ファンキーベース","ニューオーリンズリズム"],
    artists:["Birdman","Lil Wayne","Hot Boys","B.G.","Juvenile"],
    prompts:[
      {type:"クラシック（NOバウンス）",style:"New Orleans bounce hip hop, Cash Money style, party beat, energetic",detail:"[Instrumental] New Orleans bounce rhythm pattern, punchy synth brass stabs, energetic electric drum machine, deep bass groove, party anthem feel, 106 BPM, New Orleans hip hop bounce loop"},
      {type:"モダン（サウスパーティー）",style:"Southern party hip hop, bounce influenced, festive energetic",detail:"[Instrumental] upbeat southern hip hop groove, synth brass flourishes, driving drum pattern, bass-heavy, 104 BPM, energetic party southern hip hop loop"},
      {type:"実験的（エレクトロバウンス）",style:"electro bounce hip hop, New Orleans electronic, futuristic party",detail:"[Instrumental] electronic New Orleans bounce pattern, synthesized brass, futuristic drum programming, deep electronic bass, 108 BPM, electro bounce hip hop experimental loop"}
    ]
  },
  {
    name:"Three 6 Mafia", alias:"DJ Paul & Juicy J",
    eras:["90s","2000s"], styles:["south","crunk"],
    region:"South", city:"Memphis, TN", bpm:"78–96",
    desc:"メンフィスホラーコアとクランクの開拓者。不穏でスプーキーなダークシンセ・ヘビーなスロービート・ホラー映画的な雰囲気でアンダーグラウンドから世界へ。アカデミー賞受賞のユニーク経歴も持つ。",
    sounds:["ダークシンセ","スプーキーループ","ヘビードラム","ホラーSE","不穏メロディー"],
    artists:["Crunchy Black","Project Pat","Young Buck","Wiz Khalifa"],
    prompts:[
      {type:"クラシック（メンフィスホラー）",style:"Memphis horrorcore hip hop, dark and eerie, Three 6 Mafia style",detail:"[Instrumental] spooky synthesizer loop, dark horror movie-inspired melody, heavy slow drum pattern, ominous bass, eerie sound effects, 85 BPM, Memphis horrorcore underground hip hop loop"},
      {type:"モダン（ダーククランク）",style:"dark crunk hip hop, Memphis influenced, heavy and sinister",detail:"[Instrumental] heavy sinister synthesizer chords, crunk drum pattern, dark atmospheric pad, bass-heavy low-end, 90 BPM, modern dark crunk Southern hip hop loop"},
      {type:"実験的（ホラーアブストラクト）",style:"horror hip hop, dark experimental, Memphis underground",detail:"[Instrumental] warped horror samples, industrial percussion, distorted dark synthesizers, 80 BPM, extreme dark experimental horror hip hop loop, unsettling atmosphere"}
    ]
  },
  {
    name:"Flying Lotus", alias:"FlyLo / Captain Murphy",
    eras:["2000s","2010s","2020s"], styles:["alternative","lo-fi"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"80–108",
    desc:"John Coltraneの甥でもある実験的音楽家。ジャズ・エレクトロニック・HipHopを融合した「ブレインフィーダーサウンド」で、Kendrick Lamar「untitled unmastered」にも参加した。",
    sounds:["グリッチエレクトロニクス","ジャズフラグメント","実験的リズム","レイヤードシンセ","アブストラクトテクスチャー"],
    artists:["Kendrick Lamar","Thundercat","Erykah Badu","Snoop Dogg","Mos Def"],
    prompts:[
      {type:"クラシック（エレクトロジャズ）",style:"experimental electronic hip hop, jazz influenced, glitchy abstract",detail:"[Instrumental] glitchy electronic beats with jazz fragments, abstract synthesizer textures, unconventional drum programming, jazz piano and bass echoes, 90 BPM, experimental jazz-electronic hip hop loop"},
      {type:"モダン（フューチャービート）",style:"future beats, experimental jazz hip hop, cosmic electronic",detail:"[Instrumental] cosmic synthesizer layers, jazz-influenced melodic fragments, complex electronic drum patterns, deep bass frequencies, 88 BPM, futuristic experimental hip hop loop"},
      {type:"実験的（フリーフォーム）",style:"free jazz electronic, abstract beats, avant-garde hip hop",detail:"[Instrumental] free jazz deconstruction, chaotic yet musical electronic textures, abstract rhythm patterns, 82 BPM, completely experimental avant-garde electronic jazz hip hop loop"}
    ]
  },
  {
    name:"Knxwledge", alias:"Knx",
    eras:["2010s","2020s"], styles:["lo-fi","neo soul","alternative"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"72–90",
    desc:"ローファイビートの先駆者の一人。テープサチュレーションとカセットダビングのノイズ・ソウルフルな短いサンプルループ・オーガニックなドラムグルーヴでドリーミーな音楽世界を展開。",
    sounds:["テープサチュレーション","ソウルループ","ローファイドラム","カセットノイズ","ドリーミーテクスチャー"],
    artists:["Kendrick Lamar","NxWorries","Anderson .Paak"],
    prompts:[
      {type:"クラシック（ローファイネオソウル）",style:"lo-fi hip hop, neo soul, tape saturated, dreamy and warm",detail:"[Instrumental] warm tape-saturated soul sample loop, lo-fi drum groove with vinyl crackle, cassette hiss, dreamy atmospheric texture, short chopped soul chords, 80 BPM, lo-fi neo-soul hip hop loop"},
      {type:"モダン（チルソウル）",style:"chill lo-fi hip hop, soulful, relaxing, warm bedroom production",detail:"[Instrumental] mellow soulful guitar and keyboard samples, laid-back lo-fi drum pattern, warm bass, ambient texture, 78 BPM, chill relaxing lo-fi soul hip hop loop"},
      {type:"実験的（テープループ）",style:"tape loop hip hop, lo-fi experimental, cassette aesthetic",detail:"[Instrumental] looped cassette tape fragments, degraded vintage sound, lo-fi drum texture, warm distorted bass, 75 BPM, experimental tape loop neo-soul hip hop"}
    ]
  },
  {
    name:"9th Wonder", alias:"Patrick Douthit",
    eras:["2000s","2010s"], styles:["boom bap","jazzy","south"],
    region:"South", city:"Durham, NC", bpm:"84–96",
    desc:"Little Brother所属のサウス出身のビートレジェンド。デジタルサンプリングを駆使したソウルフルでウォームなビートで、Jay-Z・Destiny's Child・Mary J. Bligeの楽曲も手がけた。",
    sounds:["ソウルサンプル","クリーンドラム","ウォームグルーヴ","ジャジーコード","オーガニックフィール"],
    artists:["Little Brother","Jay-Z","Destiny's Child","Mary J. Blige","Kendrick Lamar"],
    prompts:[
      {type:"クラシック（サウスブームバップ）",style:"soulful boom bap, 9th Wonder style, warm and organic, Southern",detail:"[Instrumental] warm soulful sample chop, clean punchy boom bap drums, organic bass groove, smooth jazz-influenced chord progression, 88 BPM, warm Southern soulful hip hop loop"},
      {type:"モダン（ソウルグルーヴ）",style:"modern soulful hip hop, clean production, groove-heavy",detail:"[Instrumental] clean chopped soul samples, crisp drum pattern, warm bass, bright melodic accents, 90 BPM, polished soulful hip hop groove loop"},
      {type:"実験的（ジャジーソウル）",style:"jazzy soul hip hop, rich harmonics, warm experimental",detail:"[Instrumental] complex jazz chord voicings in soul samples, warm organic drum feel, deep harmonic bass, 86 BPM, rich jazzy soul hip hop experimental loop"}
    ]
  },
  {
    name:"The Alchemist", alias:"Al Chemist",
    eras:["2000s","2010s","2020s"], styles:["boom bap","underground"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"78–92",
    desc:"ダークでミステリアスなサンプリングを得意とするアンダーグラウンドの重鎮。Mobb Deep時代からGriselda Records系まで、重厚で粘り気のあるグリミーなビートで唯一無二の地位を確立。",
    sounds:["ダークサンプル","グリミーテクスチャー","ハードスネア","ヘビーキック","ミステリアスメロディー"],
    artists:["Mobb Deep","Action Bronson","Freddie Gibbs","Westside Gunn","Conway the Machine"],
    prompts:[
      {type:"クラシック（グリミーアンダーグラウンド）",style:"grimy underground hip hop, dark sampling, boom bap, Alchemist style",detail:"[Instrumental] dark and mysterious sample melody, heavy punchy snare, hard kick drum, grimy low-end bass, ominous atmospheric texture, 84 BPM, grimy underground hip hop loop"},
      {type:"モダン（ダークブームバップ）",style:"modern dark boom bap, underground, mysterious and heavy",detail:"[Instrumental] murky dark sample chops, hard-hitting drum pattern, deep sub bass, cold atmospheric pads, 86 BPM, modern dark underground boom bap loop"},
      {type:"実験的（ムーディーアブストラクト）",style:"moody abstract hip hop, dark experimental sampling",detail:"[Instrumental] moody processed samples with abstract textures, unconventional dark harmonics, heavy drum pattern, 80 BPM, dark abstract experimental hip hop loop"}
    ]
  },
  {
    name:"Just Blaze", alias:"Justin Smith",
    eras:["2000s"], styles:["boom bap","south"],
    region:"East Coast", city:"Paterson, NJ", bpm:"90–108",
    desc:"2000年代のJay-Z時代のキープロデューサー。ソウルサンプルをビッグドラムと組み合わせた「アンセムビート」を量産し、Eminem・Kanye・Talib Kweli等の名盤にも参加した。",
    sounds:["ビッグドラム","スピードアップソウル","オーケストラル","エピックフィール","ブラスセクション"],
    artists:["Jay-Z","Eminem","Kanye West","Talib Kweli","Freeway"],
    prompts:[
      {type:"クラシック（アンセムビート）",style:"2000s hip hop anthem beat, big drums, soulful, Just Blaze style",detail:"[Instrumental] sped-up soul sample with epic brass, massive hard-hitting drum pattern, building orchestral tension, powerful bass, 98 BPM, epic hip hop anthem loop, arena-ready energy"},
      {type:"モダン（エピックソウル）",style:"epic soul hip hop, big room sound, orchestral hip hop",detail:"[Instrumental] orchestral soul arrangement, powerful boom bap drums, dramatic build-up sections, epic brass and strings, 100 BPM, big room epic hip hop loop"},
      {type:"実験的（マキシマリスト）",style:"maximalist hip hop, orchestral, bombastic production",detail:"[Instrumental] overwhelming orchestral layers, bombastic drum pattern, multiple sample sources, epic operatic swells, 95 BPM, maximalist orchestral hip hop experimental loop"}
    ]
  },
  {
    name:"No I.D.", alias:"Ernest Dion Wilson",
    eras:["90s","2000s","2010s"], styles:["boom bap","jazzy"],
    region:"Midwest", city:"Chicago, IL", bpm:"84–96",
    desc:"Kanye Westのメンターでもある現役最高レベルのシカゴレジェンド。Common・Jay-Z・Kendrick Lamar等のアルバム制作に参加し、長きに渡って進化し続ける稀有なプロデューサー。",
    sounds:["ソウルサンプル","ブームバップドラム","シカゴスタイル","ディープグルーヴ","リッチサンプル"],
    artists:["Common","Jay-Z","Kendrick Lamar","Kanye West","Pusha T"],
    prompts:[
      {type:"クラシック（シカゴソウル）",style:"Chicago boom bap soul hip hop, classic Midwest, rich sampling",detail:"[Instrumental] deep soulful Chicago-style sample, hard boom bap drum pattern, heavy bass groove, warm harmonic texture, 88 BPM, classic Midwest Chicago soul hip hop loop"},
      {type:"モダン（エレガントソウル）",style:"elegant soulful hip hop, sophisticated sampling, Midwest",detail:"[Instrumental] sophisticated soul sample arrangement, clean punchy drums, warm bass, refined musical feel, 90 BPM, elegant sophisticated Midwest soul hip hop loop"},
      {type:"実験的（ネオソウルブームバップ）",style:"neo soul boom bap fusion, experimental Chicago, deep groove",detail:"[Instrumental] deep harmonic soul samples, experimental drum programming, bass-heavy groove, 85 BPM, neo-soul boom bap Chicago fusion experimental loop"}
    ]
  },
  {
    name:"Lil Jon", alias:"The King of Crunk",
    eras:["2000s"], styles:["crunk","south"],
    region:"South", city:"Atlanta, GA", bpm:"100–118",
    desc:"クランクの王様。アグレッシブでハイエナジーなシンセ・チャント向けのビート・クラブを揺らすドラムパターンで、East Side Boyzとして2000年代のクラブシーンに旋風を巻き起こした。",
    sounds:["アグレッシブシンセ","クランクドラム","ハイエナジー","チャント向けビート","ヘビーベース"],
    artists:["Ying Yang Twins","Ludacris","Usher","Petey Pablo"],
    prompts:[
      {type:"クラシック（クランクバンガー）",style:"crunk hip hop, energetic club banger, aggressive Atlanta, Lil Jon",detail:"[Instrumental] aggressive crunk synthesizer, high-energy drum pattern, heavy bass drops, club-ready rhythm, chant-friendly beat structure, 108 BPM, crunk Atlanta hip hop club banger loop"},
      {type:"モダン（エレクトロクランク）",style:"electro crunk, modern party hip hop, hyphy energy",detail:"[Instrumental] electronic crunk-influenced beat, massive bass, energetic synth stabs, party-ready drum pattern, 112 BPM, modern electro crunk party hip hop loop"},
      {type:"実験的（ハイパークランク）",style:"hyper crunk, maximalist party hip hop, aggressive electronic",detail:"[Instrumental] hyper-aggressive synthesizer layers, bombastic drum programming, extreme bass pressure, 115 BPM, maximalist hyper crunk experimental party hip hop loop"}
    ]
  },
  {
    name:"Warren G", alias:"Warren Griffin III",
    eras:["90s"], styles:["g-funk","west coast"],
    region:"West Coast", city:"Long Beach, CA", bpm:"94–106",
    desc:"「Regulate」でG-Funk史上最高のフックを放ったロングビーチの貴族。スムースでレイドバックしたGファンクシンセ・ゆったりとしたグルーヴ・Nate Doggとの相性で独自のポジションを確立。",
    sounds:["スムースシンセ","ファンキーベース","レイドバックグルーヴ","Gファンクホイッスル","ウェストコーストムード"],
    artists:["Nate Dogg","Snoop Dogg","Dr. Dre","Tupac"],
    prompts:[
      {type:"クラシック（スムースGファンク）",style:"smooth G-funk West Coast hip hop, laid-back groove, 90s Long Beach",detail:"[Instrumental] smooth G-funk synthesizer melody, deep laid-back bass groove, G-funk whistle, relaxed West Coast drum pattern, warm atmospheric pad, 98 BPM, smooth 90s West Coast G-funk hip hop loop"},
      {type:"モダン（ウェストコーストムード）",style:"modern smooth West Coast hip hop, G-funk influenced, mellow",detail:"[Instrumental] contemporary smooth synthesizer chords inspired by G-funk, mellow bass groove, modern clean drum pattern, 100 BPM, smooth modern West Coast hip hop mellow loop"},
      {type:"実験的（フューチャーGファンク）",style:"future G-funk, futuristic West Coast smooth hip hop",detail:"[Instrumental] futuristic take on G-funk synthesizers, evolving smooth bass, atmospheric textures, 96 BPM, futuristic smooth West Coast hip hop experimental loop"}
    ]
  },
  {
    name:"Q-Tip", alias:"The Abstract",
    eras:["90s","2000s"], styles:["jazzy","boom bap","alternative"],
    region:"East Coast", city:"Manhattan, NY", bpm:"88–100",
    desc:"A Tribe Called QuestのMCかつプロデューサー。ジャジーでポジティブなサンプリング・ライトタッチのドラム・アフロセントリックなグルーヴで90年代オルタナティブHipHopの顔を定義した。",
    sounds:["ジャズサンプル","ウォームベース","ポジティブグルーヴ","ライトドラム","ソウルフルループ"],
    artists:["A Tribe Called Quest","De La Soul","Busta Rhymes","Janet Jackson","Mariah Carey"],
    prompts:[
      {type:"クラシック（ジャジートライブ）",style:"jazzy hip hop, A Tribe Called Quest style, positive alternative, 90s NY",detail:"[Instrumental] warm jazz sample loop, uplifting chord progression, light touch drum groove, bouncy bass line, positive afrocentric feel, 92 BPM, jazzy alternative 90s New York hip hop loop"},
      {type:"モダン（ポジティブジャズホップ）",style:"modern jazz hip hop, positive vibes, alternative soulful",detail:"[Instrumental] contemporary jazz-influenced sample, uplifting piano chords, modern clean drum pattern, smooth bass, 94 BPM, positive modern jazz hip hop alternative loop"},
      {type:"実験的（アフロジャズ）",style:"afro jazz hip hop, polyrhythmic, spiritual alternative",detail:"[Instrumental] African rhythmic patterns with jazz harmony, complex polyrhythmic drumming, spiritual bass groove, 88 BPM, afro jazz alternative hip hop experimental loop"}
    ]
  },
  {
    name:"Mike Will Made It", alias:"MWMI",
    eras:["2010s"], styles:["trap"],
    region:"South", city:"Atlanta, GA", bpm:"130–145",
    desc:"シンプルだが非常に効果的なミニマリストトラップを得意とするアトランタの重鎮。Future・Rae Sremmurd・Miley Cyrusなど多様なアーティストのヒット曲を製作し、2010年代を代表するトラッププロデューサー。",
    sounds:["スパース808","ミニマルシンセ","スネアクラップ","ハードヒットドラム","ヘビーベース"],
    artists:["Rae Sremmurd","Future","Kendrick Lamar","Miley Cyrus","Beyoncé"],
    prompts:[
      {type:"クラシック（ミニマルトラップ）",style:"minimalist trap hip hop, Atlanta, Mike Will style, sparse and hard-hitting",detail:"[Instrumental] sparse minimalist trap beat, hard 808 bass hits, sharp snare and clap, simple but effective synthesizer melody, rapid hi-hats, 138 BPM, minimalist Atlanta trap loop"},
      {type:"モダン（クリーントラップ）",style:"clean modern trap, polished Atlanta, radio-ready trap beat",detail:"[Instrumental] clean polished trap production, punchy 808, crisp drum sounds, melodic synthesizer hook, 140 BPM, clean modern radio-friendly Atlanta trap loop"},
      {type:"実験的（ハードミニマル）",style:"hard minimal trap, maximally sparse, heavy hitting",detail:"[Instrumental] extreme minimalist approach, maximum impact with minimum elements, crushing 808 bass, stark drum pattern, 136 BPM, hard minimal trap experimental loop"}
    ]
  },
  {
    name:"Murda Beatz", alias:"Shane Lee Lindstrom",
    eras:["2010s","2020s"], styles:["trap"],
    region:"Other", city:"Fort Erie, Canada", bpm:"128–148",
    desc:"カナダ出身の国際的トラッププロデューサー。Drake・Travis Scott・Cardi Bなど多くのメガヒットを手がけ、メロディックでキャッチーなトラップビートで世界規模の成功を収めた。",
    sounds:["メロディックシンセ","808スライド","キャッチーフック","クリアードラム","エモーショナルメロディー"],
    artists:["Drake","Travis Scott","Cardi B","Post Malone","6ix9ine"],
    prompts:[
      {type:"クラシック（メロディックトラップ）",style:"melodic trap hip hop, catchy hook-ready, modern radio trap",detail:"[Instrumental] catchy melodic synthesizer hook, sliding 808 bass, clean trap drum pattern, emotional chord progression, 140 BPM, melodic modern trap loop, radio-ready catchiness"},
      {type:"モダン（エモトラップ）",style:"emo trap, emotional melodic hip hop, vulnerable and melodic",detail:"[Instrumental] emotional melodic synthesizer layers, melancholic chord progression, modern trap drums, 808 bass, 138 BPM, emotional emo trap melodic loop"},
      {type:"実験的（インターナショナルトラップ）",style:"international trap, global pop-trap fusion, hybrid production",detail:"[Instrumental] global pop influences in trap format, diverse melodic elements, international sound palette, 142 BPM, international pop-trap fusion experimental loop"}
    ]
  },
  {
    name:"Kenny Beats", alias:"Kenneth Blume",
    eras:["2010s","2020s"], styles:["alternative","underground"],
    region:"East Coast", city:"Connecticut", bpm:"84–105",
    desc:"Vaultageというドキュメンタリーシリーズで知られる多才なプロデューサー。Denzel Curry・Rico Nasty・Kevin Abstractなどとの仕事で、ロック・グランジ・ハードコア要素を大胆にHipHopへ融合させた。",
    sounds:["ハードギター","グランジ要素","クリスプスネア","アグレッシブサウンド","ロックエレメント"],
    artists:["Denzel Curry","Rico Nasty","Kevin Abstract","Vince Staples","Tierra Whack"],
    prompts:[
      {type:"クラシック（アグレッシブアンダーグラウンド）",style:"aggressive underground hip hop, rock-influenced, raw energy",detail:"[Instrumental] hard-hitting guitar-influenced samples, aggressive drum pattern, raw gritty energy, punchy bass, 92 BPM, aggressive underground hip hop rock-fusion loop"},
      {type:"モダン（グランジホップ）",style:"grunge hip hop, alternative underground, raw rock energy",detail:"[Instrumental] distorted grunge guitar textures, heavy drum pattern, raw underground energy, bass-heavy low-end, 95 BPM, grunge alternative hip hop loop"},
      {type:"実験的（ハードコアフュージョン）",style:"hardcore hip hop, punk rock fusion, extreme underground",detail:"[Instrumental] punk-hardcore energy in hip hop format, aggressive drum programming, distorted bass, chaotic energy, 100 BPM, hardcore punk-hip-hop fusion experimental loop"}
    ]
  },
  {
    name:"Sounwave", alias:"Mark Spears",
    eras:["2010s","2020s"], styles:["alternative","neo soul"],
    region:"West Coast", city:"Compton, CA", bpm:"82–100",
    desc:"Kendrick Lamarの主要プロデューサーの一人。「To Pimp a Butterfly」「DAMN.」等の歴史的名盤に貢献。ライブインストゥルメントとジャズ・ファンクを融合した複雑でコンシャスなサウンドが特徴。",
    sounds:["ライブインストゥルメント","ジャズ要素","レイヤードサウンド","ファンクグルーヴ","オーガニック"],
    artists:["Kendrick Lamar","ScHoolboy Q","Ab-Soul","Jay Rock"],
    prompts:[
      {type:"クラシック（コンシャスウェストコースト）",style:"conscious West Coast hip hop, jazz-funk influenced, complex production",detail:"[Instrumental] live jazz-funk instrumentation layers, complex drum programming, organic bass groove, horn arrangements, 90 BPM, conscious intellectual West Coast hip hop loop"},
      {type:"モダン（ライブジャズファンク）",style:"live instrument hip hop, jazz-funk fusion, sophisticated modern",detail:"[Instrumental] live drums, bass guitar, electric piano, horn section, complex arrangement, dynamic build and release, 88 BPM, sophisticated live-instrument jazz-funk hip hop loop"},
      {type:"実験的（アブストラクトコンシャス）",style:"abstract conscious hip hop, experimental jazz, West Coast underground",detail:"[Instrumental] abstract jazz deconstruction, polyrhythmic drum patterns, dissonant harmonic textures, 85 BPM, experimental abstract conscious West Coast hip hop loop"}
    ]
  },
  {
    name:"Hit-Boy", alias:"Chauncey Hollis",
    eras:["2010s","2020s"], styles:["boom bap","alternative"],
    region:"West Coast", city:"Fontana, CA", bpm:"88–106",
    desc:"2010年代から現在に至るまで最も多作なトップレベルプロデューサーの一人。Nas「King's Disease」シリーズで評価を一新し、Jay-Z・Beyoncé・Kanye等の楽曲も手がけた実力派。",
    sounds:["クリーンシンセ","808ベース","スーパーソニックキック","ビルドアップ","モダンサウンド"],
    artists:["Nas","Jay-Z","Beyoncé","Kanye West","Travis Scott","Big Sean"],
    prompts:[
      {type:"クラシック（モダンポリッシュ）",style:"modern polished hip hop, West Coast, clean production, Hit-Boy style",detail:"[Instrumental] clean polished synthesizer chords, crisp modern drum pattern, punchy 808 bass, bright melodic elements, build-up and drop structure, 96 BPM, modern polished hip hop loop"},
      {type:"モダン（スタジアムヒップホップ）",style:"stadium hip hop, cinematic modern, grand production",detail:"[Instrumental] grand cinematic synthesizer swells, powerful drum pattern, massive bass, arena-scale production feel, 98 BPM, stadium-level modern hip hop cinematic loop"},
      {type:"実験的（フューチャリスティック）",style:"futuristic hip hop, next-gen production, cutting edge modern",detail:"[Instrumental] cutting-edge synthesizer design, forward-thinking drum programming, futuristic sound palette, 94 BPM, next-generation futuristic hip hop experimental loop"}
    ]
  },
  {
    name:"DJ Quik", alias:"David Marvin Blake",
    eras:["90s","2000s"], styles:["g-funk","west coast"],
    region:"West Coast", city:"Compton, CA", bpm:"94–108",
    desc:"コンプトン出身のマルチインストゥルメンタリスト兼プロデューサー。George Clinton直系のPファンクとライブファンクグルーヴを取り込んだ、ジャジーでグルーヴィーな西海岸サウンドの職人。",
    sounds:["ファンキーシンセ","ライブファンク","Pファンクサンプル","クールバイブ","ウェストコーストソウル"],
    artists:["Snoop Dogg","Tupac","Dr. Dre","AMG","MC Eiht"],
    prompts:[
      {type:"クラシック（ファンクグルーヴ）",style:"funky West Coast hip hop, G-funk, P-Funk influenced, groovy",detail:"[Instrumental] live P-Funk influenced synthesizer groove, deep funky bass guitar, laid-back West Coast drum pattern, jazzy chord stabs, 100 BPM, groovy West Coast funk hip hop loop"},
      {type:"モダン（ネオファンク）",style:"neo-funk West Coast hip hop, live instruments, modern groove",detail:"[Instrumental] modern interpretation of West Coast funk, live bass and keyboard elements, contemporary drum production, 102 BPM, neo-funk West Coast hip hop modern loop"},
      {type:"実験的（ジャジーファンク）",style:"jazzy funk hip hop, sophisticated groove, West Coast jazz",detail:"[Instrumental] sophisticated jazz-funk arrangement, complex chord voicings, live drum groove, 96 BPM, jazz-funk experimental West Coast hip hop loop"}
    ]
  },
  {
    name:"Scott Storch", alias:"Scotty",
    eras:["2000s"], styles:["jazzy","south"],
    region:"East Coast", city:"Philadelphia, PA", bpm:"90–108",
    desc:"ドレー・ビーツの鍵盤奏者出身で、Dr. DreやBlackstreetとの仕事から独立後は2000年代最高額のプロデューサーへ。ピアノ主体の華やかでメロディックなプロダクションが特徴。",
    sounds:["ピアノフレーズ","豪華オーケストラ","R&B要素","メロディーキーボード","グルーヴドラム"],
    artists:["Beyoncé","Chris Brown","Fat Joe","50 Cent","Dr. Dre","Snoop Dogg"],
    prompts:[
      {type:"クラシック（ピアノドリブン）",style:"melodic piano hip hop R&B, luxurious orchestral, Scott Storch style",detail:"[Instrumental] elegant piano melody with orchestral backing, lush strings and brass, smooth hip hop drum groove, rich harmonic bass, 96 BPM, luxurious melodic hip hop R&B loop"},
      {type:"モダン（リッチメロディー）",style:"rich melodic hip hop, piano-led, opulent production",detail:"[Instrumental] grand piano lead melody, full orchestral arrangement, modern clean drum pattern, deep bass, 98 BPM, opulent rich melodic hip hop loop"},
      {type:"実験的（ネオクラシカル）",style:"neo-classical hip hop, piano concerto fusion, sophisticated",detail:"[Instrumental] classical piano technique meets hip hop rhythm, chamber ensemble arrangement, 92 BPM, neo-classical hip hop experimental fusion loop"}
    ]
  }
];

// ── Helper ────────────────────────────────────────────────────────────────────
function deserialize(row) {
  return {
    id:      row.id,
    name:    row.name,
    alias:   row.alias,
    region:  row.region,
    city:    row.city,
    bpm:     row.bpm,
    desc:    row.desc,
    eras:    JSON.parse(row.eras    || '[]'),
    styles:  JSON.parse(row.styles  || '[]'),
    sounds:  JSON.parse(row.sounds  || '[]'),
    artists: JSON.parse(row.artists || '[]'),
    prompts: JSON.parse(row.prompts || '[]'),
    custom:  row.is_custom === 1,
    created_at: row.created_at,
  };
}

// ── API routes ────────────────────────────────────────────────────────────────
app.get('/api/producers', (_req, res) => {
  res.json(dbAll('SELECT * FROM producers ORDER BY id').map(deserialize));
});

app.post('/api/producers', (req, res) => {
  const p = req.body;
  if (!p?.name?.trim()) return res.status(400).json({ error: 'name は必須です' });
  const newId = dbRun(
    'INSERT INTO producers (name,alias,eras,styles,region,city,bpm,desc,sounds,artists,prompts,is_custom) VALUES (?,?,?,?,?,?,?,?,?,?,?,1)',
    [p.name.trim(), p.alias||'',
     JSON.stringify(p.eras||[]), JSON.stringify(p.styles||[]),
     p.region||'', p.city||'', p.bpm||'', p.desc||'',
     JSON.stringify(p.sounds||[]), JSON.stringify(p.artists||[]), JSON.stringify(p.prompts||[])]
  );
  saveDB();
  res.status(201).json(deserialize(dbGet('SELECT * FROM producers WHERE id=?', [newId])));
});

app.delete('/api/producers/:id', (req, res) => {
  const row = dbGet('SELECT * FROM producers WHERE id=?', [req.params.id]);
  if (!row)          return res.status(404).json({ error: 'Not found' });
  if (!row.is_custom) return res.status(403).json({ error: '組み込みプロデューサーは削除できません' });
  dbRun('DELETE FROM producers WHERE id=?', [req.params.id]);
  saveDB();
  res.json({ ok: true });
});

// ── Bootstrap ─────────────────────────────────────────────────────────────────
async function start() {
  const SQL = await initSqlJs();

  // DBファイルがあれば読み込み、なければ新規作成
  db = fs.existsSync(DB)
    ? new SQL.Database(fs.readFileSync(DB))
    : new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS producers (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT    NOT NULL,
      alias      TEXT    NOT NULL DEFAULT '',
      eras       TEXT    NOT NULL DEFAULT '[]',
      styles     TEXT    NOT NULL DEFAULT '[]',
      region     TEXT    NOT NULL DEFAULT '',
      city       TEXT    NOT NULL DEFAULT '',
      bpm        TEXT    NOT NULL DEFAULT '',
      desc       TEXT    NOT NULL DEFAULT '',
      sounds     TEXT    NOT NULL DEFAULT '[]',
      artists    TEXT    NOT NULL DEFAULT '[]',
      prompts    TEXT    NOT NULL DEFAULT '[]',
      is_custom  INTEGER NOT NULL DEFAULT 0,
      created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M:%S','now','localtime'))
    )
  `);

  // 組み込みデータのシード（初回のみ）
  const count = dbGet('SELECT COUNT(*) as c FROM producers WHERE is_custom=0')?.c || 0;
  if (Number(count) === 0) {
    for (const p of SEED) {
      dbRun(
        'INSERT INTO producers (name,alias,eras,styles,region,city,bpm,desc,sounds,artists,prompts,is_custom) VALUES (?,?,?,?,?,?,?,?,?,?,?,0)',
        [p.name, p.alias||'', JSON.stringify(p.eras), JSON.stringify(p.styles),
         p.region||'', p.city||'', p.bpm||'', p.desc||'',
         JSON.stringify(p.sounds||[]), JSON.stringify(p.artists||[]), JSON.stringify(p.prompts||[])]
      );
    }
    saveDB();
    console.log(`✓ ${SEED.length} 件の組み込みプロデューサーをシードしました`);
  }

  app.listen(PORT, '0.0.0.0', () => {
    const ips = Object.values(os.networkInterfaces())
      .flat()
      .filter(i => i.family === 'IPv4' && !i.internal)
      .map(i => i.address);
    console.log('\n🎛️  HipHop Producer Ref が起動しました');
    console.log(`   ローカル    : http://localhost:${PORT}`);
    ips.forEach(ip => console.log(`   ネットワーク : http://${ip}:${PORT}  ← スマホはこちら`));
    console.log('');
  });
}

start().catch(e => { console.error('起動エラー:', e); process.exit(1); });
