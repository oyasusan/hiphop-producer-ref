'use strict';
const MODULE_PATH = '/home/yasuosanlkz/hiphop-modules/node_modules';
const initSqlJs  = require(MODULE_PATH + '/sql.js');
const path       = require('path');
const fs         = require('fs');

const DB = path.join(__dirname, 'producers.db');

const PRODUCERS = [
  {
    name:"Nujabes", alias:"Seba Jun",
    eras:["2000s"], styles:["lo-fi","jazzy","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"80–95",
    desc:"Lo-fiヒップホップの父と称される東京出身のプロデューサー。ジャズとヒップホップを融合した穏やかで叙情的なサウンドは世界中にファンを持ち、アニメ「サムライチャンプルー」の音楽でも有名。2010年に36歳で急逝した後もその音楽は生き続けている。",
    sounds:["ジャズピアノループ","バイナルクラックル","ブラシドラム","ウォームベース","チルパッド","ソウルフルコード"],
    artists:["Shing02","Five Deez","Uyama Hiroto","C.L. Smooth"],
    prompts:[
      {type:"クラシック（Lo-fiジャズホップ）",style:"lo-fi jazz hip hop, Nujabes style, chill soulful Japanese aesthetic",detail:"[Instrumental] gentle jazz piano loop with vinyl crackle, warm brushed snare, smooth bass, soft hi-hat, melancholic chord progression, 85 BPM, lo-fi jazz hip hop loop, peaceful introspective atmosphere"},
      {type:"モダン（チルスタディービーツ）",style:"modern chill lo-fi hip hop, jazz influenced, relaxing study beats",detail:"[Instrumental] clean jazz sample loop, lo-fi drum groove, warm piano chords, smooth bass, gentle vinyl texture, ambient pad, 88 BPM, chill lo-fi study beats loop"},
      {type:"実験的（アンビエントジャズ）",style:"ambient jazz hip hop, ethereal contemplative, spacious reverb",detail:"[Instrumental] floating jazz fragments over ambient textures, sparse brushed percussion, deep reverb, subtle bass pulses, 80 BPM, ethereal ambient jazz hip hop meditation loop"}
    ]
  },
  {
    name:"DJ Krush", alias:"Hideaki Mitsuishi",
    eras:["90s","2000s"], styles:["alternative","underground","lo-fi"],
    region:"Japan", city:"Tokyo, Japan", bpm:"75–92",
    desc:"ターンテーブルを楽器として確立した日本を代表するDJ兼プロデューサー。ダークで重厚なアブストラクトサウンドと禅的な空気感が特徴で、RZAやMos Defなど米国の重鎮とも共演した国際的プロデューサー。",
    sounds:["ターンテーブルスクラッチ","ダークシンセ","アブストラクトループ","重いドラム","映画的パッド","エレクトロニクス"],
    artists:["RZA","Mos Def","Q-Tip","C.L. Smooth","Blackalicious"],
    prompts:[
      {type:"クラシック（アブストラクトターンテーブル）",style:"abstract hip hop, DJ Krush style, dark turntablist, trip hop",detail:"[Instrumental] dark abstract synthesizer loop, heavy boom bap drums, vinyl scratch elements, ominous bass, cinematic atmospheric pads, 80 BPM, dark abstract turntablist hip hop loop"},
      {type:"モダン（トリップホップ）",style:"trip hop, dark abstract electronic, meditative Japanese",detail:"[Instrumental] dark electronic textures, slow heavy drums, eerie synthesizer melody, deep bass drones, sparse scratch accents, 78 BPM, dark trip hop abstract hip hop loop"},
      {type:"実験的（ダークシネマ）",style:"cinematic abstract hip hop, dark orchestral, experimental turntablism",detail:"[Instrumental] cinematic string samples, abstract turntable manipulation, heavy industrial drums, 75 BPM, dark experimental cinematic hip hop loop"}
    ]
  },
  {
    name:"PUNPEE", alias:"PSG",
    eras:["2000s","2010s","2020s"], styles:["jazzy","boom bap","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"85–100",
    desc:"東京を拠点に活動する日本屈指のラッパー兼プロデューサー。ジャズ・ソウル・映画音楽を自在にサンプリングし、ユーモアと詩情を融合させた独自世界を構築。PSGとしての活動のほかAWICHのプロデュースも手がける。",
    sounds:["ジャズサンプル","映画的SE","ソウルフルループ","ウォームドラム","ピアノコード","レコードノイズ"],
    artists:["SOIL&PIMP SESSIONS","STUTS","AWICH","唾奇","Shing02"],
    prompts:[
      {type:"クラシック（ジャジーブームバップ）",style:"jazzy boom bap, Japanese hip hop, soulful cinematic, warm",detail:"[Instrumental] warm jazz piano sample, punchy boom bap drum pattern, smooth bass groove, cinematic string accents, vinyl warmth, 90 BPM, soulful jazzy Japanese hip hop loop"},
      {type:"モダン（シネマティックJ-HipHop）",style:"cinematic Japanese hip hop, modern boom bap, film score influenced",detail:"[Instrumental] orchestral sample chops, clean drum pattern, melodic piano, warm bass, 92 BPM, cinematic modern Japanese hip hop loop"},
      {type:"実験的（コラージュビート）",style:"collage hip hop, eclectic sampling, experimental Japanese",detail:"[Instrumental] multi-genre sample collage, jazz and film music fragments, abstract drum programming, 85 BPM, experimental collage-style Japanese hip hop loop"}
    ]
  },
  {
    name:"STUTS", alias:"",
    eras:["2010s","2020s"], styles:["jazzy","lo-fi","boom bap"],
    region:"Japan", city:"Tokyo, Japan", bpm:"85–98",
    desc:"MPC演奏とビートメイキングを融合させた東京のプロデューサー。Norikiyo、Shing02、PUNPEEら国内アーティストとのコラボで人気を博し、ライブパフォーマンスとプロデュースを両立するスタイルが特徴。",
    sounds:["MPCビート","ジャジーサンプル","ライブ感のあるドラム","ソウルループ","温かいコード","クリアーなミックス"],
    artists:["Norikiyo","Shing02","PUNPEE","Yuuna Kamino","JJJ"],
    prompts:[
      {type:"クラシック（MPCジャジービート）",style:"MPC jazz hip hop, Japanese, live beat feel, warm soulful",detail:"[Instrumental] MPC-played jazz sample loop, live-feeling drum pattern, warm soul chords, smooth bass, 90 BPM, warm Japanese MPC jazz hip hop loop"},
      {type:"モダン（ライブビートメイキング）",style:"live beat making, modern Japanese hip hop, organic jazz",detail:"[Instrumental] organic drum hits, jazz chord stabs, live bass feel, modern clean production, 92 BPM, modern live-feel Japanese hip hop beat loop"},
      {type:"実験的（ジャズエレクトロ融合）",style:"jazz electronic fusion, experimental Japanese beats, hybrid",detail:"[Instrumental] jazz samples layered over electronic drum patterns, synthesizer textures, 88 BPM, experimental jazz-electronic Japanese hip hop loop"}
    ]
  },
  {
    name:"BACHLOGIC", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"Japan", city:"Tokyo, Japan", bpm:"85–97",
    desc:"日本ヒップホップ史上最高のヒットメイカーの一人。One Year War Music主宰。SEEDA・AKLO・SALU・NORIKIYOをスターへ押し上げ、現在もZORN・Kvi Babaを手がける。メディア露出を極力避ける謎多きプロデューサー。",
    sounds:["ソウルサンプル","ジャジーコード","クリーンドラム","ディープベース","オーガニックグルーヴ","暖かいテクスチャー"],
    artists:["SEEDA","AKLO","SALU","NORIKIYO","ZORN","Kvi Baba"],
    prompts:[
      {type:"クラシック（日本語ラップ黄金期）",style:"Japanese hip hop golden era, boom bap, soulful clean production",detail:"[Instrumental] clean soul sample chops, punchy boom bap drums, smooth bass groove, jazz chord stabs, 88 BPM, soulful Japanese hip hop boom bap loop"},
      {type:"モダン（クリーンソウルホップ）",style:"clean modern Japanese hip hop, soulful, polished production",detail:"[Instrumental] polished soul sample loop, crisp modern drum pattern, warm bass, clean melodic elements, 90 BPM, polished modern Japanese soul hip hop loop"},
      {type:"実験的（ジャジーアブストラクト）",style:"jazzy abstract Japanese hip hop, underground, introspective",detail:"[Instrumental] abstract jazz sample manipulation, experimental drum programming, deep bass, 85 BPM, abstract jazzy underground Japanese hip hop loop"}
    ]
  },
  {
    name:"Chaki Zulu", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","lo-fi"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–150",
    desc:"YENTOWNクルーの主宰プロデューサー。AWICHやkZMのサウンドを手がけ、ビートメイキング・歌詞制作・ボーカルディレクションまでこなすトータルプロデューサー。加藤ミリヤや山下智久など歌謡系アーティストにも楽曲提供。",
    sounds:["メロディックシンセ","808ベース","トラップハイハット","エモーショナルパッド","ダークメロディー","レイヤードサウンド"],
    artists:["AWICH","kZm","MONYPETZJNKMN","加藤ミリヤ","Young Coco"],
    prompts:[
      {type:"クラシック（YENTOWNトラップ）",style:"Japanese trap, YENTOWN style, melodic dark, emotional",detail:"[Instrumental] dark melodic synthesizer, heavy 808 bass, trap hi-hat pattern, emotional chord progression, 140 BPM, dark melodic Japanese trap loop"},
      {type:"モダン（J-トラップ）",style:"modern Japanese trap, melodic, atmospheric dark",detail:"[Instrumental] atmospheric synthesizer melody, sliding 808, layered trap drums, dark emotional pads, 142 BPM, modern Japanese melodic trap loop"},
      {type:"実験的（ドリームトラップ）",style:"dream trap Japanese, ethereal dark, experimental",detail:"[Instrumental] ethereal synthesizer layers, warped vocal textures, 808 bass, experimental trap drums, 138 BPM, dreamy experimental Japanese trap loop"}
    ]
  },
  {
    name:"ZOT on the WAVE", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–148",
    desc:"「Uh Wave Farewell」のプロデューサータグで知られる現代日本ヒップホップシーンの重要プロデューサー。ビートメイキングからラップディレクションまでこなすトータルプロデュース能力が高く評価されている。",
    sounds:["ダークシンセ","808キック","速いハイハット","メロディーフック","アトモスフェリックパッド","クリアーミックス"],
    artists:["AWICH","Tohji","kZm","Homunculu$","STUTS"],
    prompts:[
      {type:"クラシック（ダークJトラップ）",style:"dark Japanese trap, ZOT style, heavy melodic, atmospheric",detail:"[Instrumental] dark synthesizer hook, heavy 808 bass, rapid trap hi-hats, ominous atmospheric pads, 140 BPM, dark atmospheric Japanese trap loop"},
      {type:"モダン（メロディックウェイブ）",style:"melodic wave trap, modern Japanese, dark emotional",detail:"[Instrumental] melodic synthesizer wave, sliding 808 bass, layered trap hi-hats, dark emotional texture, 142 BPM, modern melodic wave Japanese trap loop"},
      {type:"実験的（フューチャーウェイブ）",style:"future wave Japanese hip hop, experimental dark trap, innovative",detail:"[Instrumental] innovative synthesizer design, experimental 808 patterns, abstract hi-hat programming, 138 BPM, futuristic experimental dark wave Japanese hip hop loop"}
    ]
  },
  {
    name:"JIGG", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","underground","trap"],
    region:"Japan", city:"Tokyo, Japan", bpm:"85–145",
    desc:"「JIGGのビートが聴きたいな」のタグで知られる東京のビートメイカー。2005年から活動し、KOHHのGUNSMITH PRODUCTION参加をはじめ、アンダーグラウンドからメインストリームまで幅広く制作。",
    sounds:["サンプルループ","クリーンドラム","ベースライン","メロディーシンセ","ソウルフルフック","タグサウンド"],
    artists:["KOHH","JP THE WAVY","変態紳士クラブ","Awich","kZm"],
    prompts:[
      {type:"クラシック（アンダーグラウンドJ-HipHop）",style:"underground Japanese hip hop, boom bap, raw authentic",detail:"[Instrumental] raw sample loop, hard-hitting drum pattern, deep bass, authentic underground feel, 88 BPM, underground Japanese hip hop boom bap loop"},
      {type:"モダン（クロスオーバー）",style:"modern Japanese hip hop, versatile, mainstream crossover",detail:"[Instrumental] catchy synthesizer hook, clean drum pattern, 808 bass, modern production feel, 140 BPM, modern mainstream Japanese hip hop loop"},
      {type:"実験的（ハイブリッドビート）",style:"hybrid Japanese beat, experimental crossover, underground meets mainstream",detail:"[Instrumental] boom bap drum samples layered with trap 808, melodic synth, 90 BPM, experimental hybrid Japanese hip hop loop"}
    ]
  },
  {
    name:"JJJ", alias:"Fla$hBackS",
    eras:["2010s","2020s"], styles:["boom bap","underground","alternative"],
    region:"Japan", city:"Kawasaki, Japan", bpm:"85–100",
    desc:"川崎を拠点とするラッパー兼プロデューサー。Fla$hBackSのメンバーとしても活躍し、アルバム「HIKARI」（2017）は独自のオリジナルスタイルによる傑作として高く評価された。2025年4月に35歳で急逝。",
    sounds:["ダークサンプル","ブームバップドラム","メロディックループ","ソウルフルテクスチャー","低音ベース","川崎ストリートバイブ"],
    artists:["STUTS","PUNPEE","Tohji","BIM","KID FRESINO"],
    prompts:[
      {type:"クラシック（川崎ダークブームバップ）",style:"dark boom bap, Kawasaki underground, Japanese raw hip hop",detail:"[Instrumental] dark sample loop, hard punchy boom bap drums, deep bass, urban underground atmosphere, 88 BPM, dark underground Japanese hip hop boom bap loop"},
      {type:"モダン（オルタナティブJ-HipHop）",style:"alternative Japanese hip hop, introspective dark, modern underground",detail:"[Instrumental] moody sample chops, modern drum pattern, atmospheric bass, dark melodic accents, 90 BPM, alternative modern underground Japanese hip hop loop"},
      {type:"実験的（アブストラクトアンビエント）",style:"abstract ambient Japanese hip hop, experimental introspective",detail:"[Instrumental] abstract atmospheric textures, sparse drum pattern, meditative bass, 85 BPM, abstract experimental ambient Japanese hip hop loop"}
    ]
  },
  {
    name:"Homunculu$", alias:"",
    eras:["2010s","2020s"], styles:["trap","underground"],
    region:"Japan", city:"Kawasaki, Japan", bpm:"130–145",
    desc:"川崎を拠点とするドリル・トラッププロデューサー。ZOT on the WAVEとの共同制作で注目を集め、千葉雄喜の復帰作や2025年6月のソロアルバム「HOMUNCULUS」でシーンを沸かせた。",
    sounds:["ダークドリルビート","808スライド","メロディックシンセ","グリミーテクスチャー","ダークパッド","重いドラム"],
    artists:["千葉雄喜","Megan Thee Stallion","ZOT on the WAVE","川崎系ラッパー"],
    prompts:[
      {type:"クラシック（川崎ドリル）",style:"Japanese drill, Kawasaki dark, gritty melodic trap",detail:"[Instrumental] dark melodic synthesizer, heavy sliding 808 bass, drill drum pattern, gritty urban atmosphere, 140 BPM, Japanese drill dark trap loop"},
      {type:"モダン（ダークメロトラップ）",style:"dark melodic trap, modern Japanese, heavy bass",detail:"[Instrumental] moody melodic synthesizer, heavy 808 bass drops, trap drum pattern, dark atmospheric pads, 142 BPM, dark modern Japanese melodic trap loop"},
      {type:"実験的（グリミーフュージョン）",style:"grimy fusion trap, experimental dark, drill meets trap",detail:"[Instrumental] grimy synthesizer textures, experimental 808 patterns, dark drill-meets-trap drums, 138 BPM, experimental grimy Japanese drill trap fusion loop"}
    ]
  },
  {
    name:"Lil'Yukichi", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Japan", city:"Japan", bpm:"130–148",
    desc:"日本最初期のトラップビートメイカーのひとり。南部ヒップホップ・アニメ・アイドル・ダブステップなど多彩なジャンルから影響を受け、独自の日本語トラップサウンドを確立した先駆者。",
    sounds:["トラップビート","808キック","アニメ的シンセ","ダブステップ要素","キャッチーメロディー","ユニークテクスチャー"],
    artists:["日本語ラップトラップシーン全般"],
    prompts:[
      {type:"クラシック（J-トラップ黎明期）",style:"early Japanese trap, anime influenced synthesizer, unique J-trap",detail:"[Instrumental] anime-influenced synthesizer melody, 808 bass, trap drum pattern, colorful unique textures, 140 BPM, early Japanese trap innovative loop"},
      {type:"モダン（J-トラップポップ）",style:"J-trap pop, catchy melodic, modern Japanese production",detail:"[Instrumental] catchy synthesizer hook, clean trap drums, 808 bass, pop-friendly Japanese trap melody, 142 BPM, modern J-trap pop loop"},
      {type:"実験的（クロスジャンル）",style:"cross-genre Japanese trap, anime meets hip hop, eclectic",detail:"[Instrumental] eclectic sample sources, anime and hip hop fusion, experimental trap drums, 138 BPM, experimental cross-genre Japanese trap loop"}
    ]
  },
  {
    name:"tofubeats", alias:"",
    eras:["2010s","2020s"], styles:["alternative","funk","lo-fi"],
    region:"Japan", city:"Kobe, Japan", bpm:"90–128",
    desc:"神戸出身の電子音楽プロデューサー。ヒップホップ・テクノ・J-POPを自在に行き来し、藤井風や中村佳穂、Perfumeへの楽曲提供でも活躍。インターネット文化とアーバンサウンドを融合させたユニークな存在。",
    sounds:["エレクトロニックビート","ポップシンセ","サンプルループ","4つ打ちキック","インターネット的テクスチャー","J-POPメロディー"],
    artists:["藤井風","中村佳穂","Perfume","Tomggg","ESPECIA"],
    prompts:[
      {type:"クラシック（エレクトロJ-HipHop）",style:"electronic Japanese hip hop, internet culture, pop synthesizer",detail:"[Instrumental] bright synthesizer melody, electronic drum pattern, bouncy bass, internet-era pop textures, 108 BPM, electronic Japanese hip hop pop loop"},
      {type:"モダン（J-テクノホップ）",style:"Japanese techno-hop, dance electronic hip hop fusion, modern",detail:"[Instrumental] four-on-the-floor kick with hip hop elements, melodic synthesizer, clean bass, 120 BPM, modern Japanese techno-hop fusion loop"},
      {type:"実験的（ネットカルチャービート）",style:"net culture hip hop, eclectic electronic, experimental J-pop fusion",detail:"[Instrumental] eclectic sample collage, electronic drum programming, J-pop chord progressions, 100 BPM, experimental internet culture Japanese hip hop loop"}
    ]
  },
  {
    name:"KM", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","boom bap"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–148",
    desc:"東京発の次世代プロデューサー。JP THE WAVY・KEIJU・Tohjiら現行シーンを代表するアーティストのトラックを手がけ、日本語ラップとモダントラップを繋ぐキープロデューサーとして急速に台頭。",
    sounds:["モダンシンセ","808ベース","トラップハイハット","クリーンビート","メロディーフック","東京ストリートバイブ"],
    artists:["JP THE WAVY","KEIJU","Tohji","kZm","Young Coco"],
    prompts:[
      {type:"クラシック（東京モダントラップ）",style:"modern Tokyo trap, Japanese hip hop, clean melodic",detail:"[Instrumental] clean melodic synthesizer, heavy 808 bass, crisp trap drums, modern Tokyo street vibe, 140 BPM, modern clean Japanese trap loop"},
      {type:"モダン（メインストリームJ-トラップ）",style:"mainstream Japanese trap, polished, radio-ready J-hip hop",detail:"[Instrumental] polished synthesizer hook, punchy 808 bass, clean trap drum pattern, 142 BPM, mainstream radio-ready Japanese trap loop"},
      {type:"実験的（クリエイティブトラップ）",style:"creative experimental Japanese trap, innovative production",detail:"[Instrumental] innovative synthesizer design, experimental 808 manipulation, creative drum programming, 138 BPM, experimental creative Japanese trap loop"}
    ]
  },
  {
    name:"illicit tsuboi", alias:"坪井慎一郎",
    eras:["90s","2000s","2010s"], styles:["boom bap","underground"],
    region:"Japan", city:"Tokyo, Japan", bpm:"84–96",
    desc:"90年代から日本語ラップシーンを支えてきたベテランビートメイカー。ZeebraやK DUB SHINE、TOKONA-Xらとのコラボで知られ、ニューヨークスタイルのブームバップを日本に根付かせた立役者の一人。",
    sounds:["NYスタイルサンプル","ブームバップドラム","ジャズフラグメント","ハードスネア","ディープベース","アンダーグラウンドバイブ"],
    artists:["Zeebra","K DUB SHINE","TOKONA-X","般若","DABO"],
    prompts:[
      {type:"クラシック（日本語ラップNYスタイル）",style:"Japanese New York style boom bap, underground 90s influenced",detail:"[Instrumental] New York influenced sample chops, hard boom bap drum pattern, deep bass groove, jazz fragments, 88 BPM, underground Japanese NY-style hip hop boom bap loop"},
      {type:"モダン（オールドスクールリバイバル）",style:"old school revival Japanese hip hop, classic boom bap, authentic",detail:"[Instrumental] classic boom bap drum break, soulful sample loop, deep bass, authentic underground feel, 90 BPM, old school revival Japanese hip hop loop"},
      {type:"実験的（ネオブームバップ）",style:"neo boom bap, updated classic Japanese hip hop, modern underground",detail:"[Instrumental] updated boom bap drum pattern, modern sample processing, deep bass, 86 BPM, neo boom bap modern underground Japanese hip hop loop"}
    ]
  },
  {
    name:"DJ Mitsu the Beats", alias:"",
    eras:["2000s","2010s","2020s"], styles:["jazzy","boom bap","lo-fi"],
    region:"Japan", city:"Sendai, Japan", bpm:"85–96",
    desc:"GAGLEのメンバーとしても知られる仙台出身のプロデューサー兼DJ。深いレコード掘りとジャジーなサンプリングで独自のサウンドを確立し、国内外のアーティストと幅広くコラボレーション。",
    sounds:["クレートダイギングサンプル","ジャジーコード","オーガニックドラム","ウォームベース","バイナルテクスチャー","ソウルフルグルーヴ"],
    artists:["GAGLE","Shingo Suzuki","仙人掌","PUNPEE"],
    prompts:[
      {type:"クラシック（ジャジークレートダイギング）",style:"jazzy crate digging Japanese hip hop, warm soulful, vinyl",detail:"[Instrumental] deep crate-dig jazz sample, organic drum groove, warm bass, vinyl texture, soulful chord progression, 88 BPM, jazzy crate-digging Japanese hip hop loop"},
      {type:"モダン（ジャジーグルーヴ）",style:"modern jazzy hip hop groove, clean warm production, Japanese",detail:"[Instrumental] clean jazz sample loop, punchy drum pattern, warm bass groove, melodic jazz accents, 90 BPM, modern jazzy groove Japanese hip hop loop"},
      {type:"実験的（ジャズフュージョンビート）",style:"jazz fusion beat, experimental Japanese, deep groove",detail:"[Instrumental] jazz fusion sample manipulation, experimental drum pattern, deep harmonic bass, 86 BPM, jazz fusion experimental Japanese hip hop loop"}
    ]
  },
  {
    name:"Olive Oil", alias:"",
    eras:["2000s","2010s","2020s"], styles:["lo-fi","jazzy","boom bap"],
    region:"Japan", city:"Yokohama, Japan", bpm:"80–95",
    desc:"横浜を拠点とするプロデューサー。徹底したレコード掘りから生まれるレイドバックしたビートが特徴で、仙人掌・環ROY・Campanellaら個性派ラッパーのサウンドを支える縁の下の力持ち。",
    sounds:["レイドバックサンプル","ローファイドラム","ジャジーコード","暖かいベース","バイナルノイズ","スモーキーなテクスチャー"],
    artists:["仙人掌","環ROY","Campanella","OMSB","BIM"],
    prompts:[
      {type:"クラシック（横浜ローファイジャズ）",style:"lo-fi jazz hip hop, Yokohama laid-back, smoky underground",detail:"[Instrumental] laid-back jazz sample, lo-fi drum groove, warm bass, smoky atmospheric texture, vinyl noise, 83 BPM, lo-fi laid-back Yokohama jazz hip hop loop"},
      {type:"モダン（チルアンダーグラウンド）",style:"chill underground Japanese hip hop, lo-fi warm, relaxed",detail:"[Instrumental] warm lo-fi sample loop, relaxed drum pattern, deep bass, chill atmospheric pads, 85 BPM, chill underground Japanese lo-fi hip hop loop"},
      {type:"実験的（スモーキーアブストラクト）",style:"smoky abstract hip hop, experimental lo-fi, underground",detail:"[Instrumental] abstract sample textures, experimental drum programming, smoky atmospheric bass, 80 BPM, abstract smoky experimental Japanese lo-fi hip hop loop"}
    ]
  },
  {
    name:"Campanella", alias:"",
    eras:["2010s","2020s"], styles:["jazzy","boom bap","underground"],
    region:"Japan", city:"Osaka, Japan", bpm:"85–97",
    desc:"大阪出身のラッパー兼プロデューサー。Olive Oilとのコラボ作品が特に有名で、詩的でインテレクチュアルなリリックとジャジーなビートの組み合わせが特徴。関西語ラップの最重要人物の一人。",
    sounds:["ジャジーループ","オーガニックドラム","ウォームサンプル","ディープベース","詩的テクスチャー","関西バイブ"],
    artists:["Olive Oil","仙人掌","OMSB","BIM","環ROY"],
    prompts:[
      {type:"クラシック（大阪ジャジーポエトリー）",style:"Osaka jazzy hip hop, poetic underground, warm intellectual",detail:"[Instrumental] warm jazz sample loop, organic drum groove, deep bass, intellectual atmospheric texture, 88 BPM, poetic Osaka jazzy underground hip hop loop"},
      {type:"モダン（関西オルタナ）",style:"Kansai alternative hip hop, modern lo-fi, introspective",detail:"[Instrumental] modern lo-fi sample chops, clean drum pattern, warm bass, introspective mood, 90 BPM, modern Kansai alternative underground hip hop loop"},
      {type:"実験的（フリーフォームジャズホップ）",style:"free form jazz hip hop, experimental Osaka underground, abstract",detail:"[Instrumental] free-form jazz sample exploration, experimental drum patterns, 85 BPM, abstract experimental Osaka jazz hip hop loop"}
    ]
  },
  {
    name:"grooveman Spot", alias:"",
    eras:["2000s","2010s","2020s"], styles:["jazzy","boom bap","lo-fi"],
    region:"Japan", city:"Tokyo, Japan", bpm:"84–96",
    desc:"東京のビートメイカー。PUNPEEやShing02らと共演し、ジャジーでソウルフルなインストゥルメンタルビートで国内アンダーグラウンドシーンで高い評価を得る。丁寧なサンプリングが持ち味。",
    sounds:["ジャジーサンプル","ソウルコード","クリーンドラム","ウォームベース","メロウグルーヴ","バイナルウォームス"],
    artists:["PUNPEE","Shing02","Budamunk","OMSB"],
    prompts:[
      {type:"クラシック（メロウジャズホップ）",style:"mellow jazz hip hop, Tokyo underground, warm soulful",detail:"[Instrumental] mellow jazz sample, clean drum pattern, warm soul bass, smooth chord progression, 88 BPM, mellow warm Tokyo jazzy underground hip hop loop"},
      {type:"モダン（クリーングルーヴ）",style:"clean groove hip hop, modern Japanese, polished soul",detail:"[Instrumental] polished soul sample loop, crisp clean drum pattern, warm bass groove, 90 BPM, clean groove modern Japanese soul hip hop loop"},
      {type:"実験的（ジャジーテクスチャー）",style:"jazzy texture hip hop, experimental warm, Tokyo underground",detail:"[Instrumental] textural jazz sample exploration, experimental drum groove, warm atmospheric bass, 85 BPM, jazz texture experimental Tokyo underground hip hop loop"}
    ]
  },
  {
    name:"Uyama Hiroto", alias:"",
    eras:["2000s","2010s","2020s"], styles:["jazzy","lo-fi","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"78–95",
    desc:"Nujabesとの深い縁で知られる東京のインストゥルメンタルジャズ/ヒップホッププロデューサー。流麗なピアノと温かいオーケストラ感覚を持ち、ヒップホップと現代ジャズの境界を優雅に行き来する。",
    sounds:["ピアノソロ","ストリングスアレンジ","ジャズハーモニー","ソフトドラム","アンビエントパッド","オーケストラル"],
    artists:["Nujabes","Shing02","Rai (Uyama)"],
    prompts:[
      {type:"クラシック（インストジャズホップ）",style:"instrumental jazz hip hop, Nujabes influenced, orchestral warm",detail:"[Instrumental] flowing piano melody, soft jazz drum brush, warm string arrangements, ambient orchestral pad, 82 BPM, instrumental orchestral jazz hip hop loop"},
      {type:"モダン（ネオジャズ）",style:"neo jazz hip hop, modern orchestral, cinematic Japanese",detail:"[Instrumental] neo jazz piano with orchestral backing, modern clean percussion, warm bass, 85 BPM, modern neo jazz cinematic Japanese hip hop loop"},
      {type:"実験的（コンテンポラリージャズ）",style:"contemporary jazz hip hop, advanced harmony, abstract warm",detail:"[Instrumental] complex jazz harmony piano, abstract percussion, ambient orchestral textures, 80 BPM, contemporary jazz hip hop advanced harmony loop"}
    ]
  },
  {
    name:"DJ PMX", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","west coast","jazzy"],
    region:"Japan", city:"Los Angeles / Tokyo", bpm:"85–100",
    desc:"LAと東京を繋ぐ在米日本人プロデューサー。VERBALやZeebraとの仕事で知られ、米西海岸のサウンドと日本語ラップを融合させたクロスカルチャーなプロダクションスタイルを確立した。",
    sounds:["ウェストコーストグルーヴ","LAスタイルサンプル","クリーンドラム","ジャジーコード","クロスカルチャービート","スムースベース"],
    artists:["VERBAL (m-flo)","Zeebra","Trey Songz","DABO"],
    prompts:[
      {type:"クラシック（LA×日本語ラップ）",style:"LA West Coast meets Japanese hip hop, cross-cultural boom bap",detail:"[Instrumental] West Coast style sample, clean boom bap drums, jazzy chord stabs, smooth bass groove, 92 BPM, LA-meets-Japan cross-cultural hip hop boom bap loop"},
      {type:"モダン（グローバルJ-HipHop）",style:"global Japanese hip hop, modern West Coast influenced, polished",detail:"[Instrumental] polished West Coast influenced production, modern drum pattern, warm bass, global hip hop feel, 94 BPM, global modern Japanese hip hop loop"},
      {type:"実験的（バイリンガルビート）",style:"bilingual hip hop, Japanese meets American West Coast, experimental",detail:"[Instrumental] blended East-West hip hop textures, experimental drum programming, cross-cultural sonic elements, 88 BPM, bilingual experimental Japanese-American hip hop loop"}
    ]
  },
  {
    name:"Shing02", alias:"安川信悟",
    eras:["90s","2000s","2010s","2020s"], styles:["jazzy","alternative","lo-fi"],
    region:"Japan", city:"Tokyo / California", bpm:"84–95",
    desc:"Nujabesとの「Luv(sic)」シリーズで世界的に知られるMC兼プロデューサー。日本語と英語を自在に操るバイリンガルスタイルと、ジャジーなビートへの詩情あふれるアプローチが特徴。",
    sounds:["ジャジービート","ウォームサンプル","バイリンガルフロウ","ソウルフルパッド","叙情的メロディー","アコースティック要素"],
    artists:["Nujabes","Uyama Hiroto","Aztek","OB-ONE"],
    prompts:[
      {type:"クラシック（バイリンガルジャズホップ）",style:"bilingual jazz hip hop, Japanese-English, soulful conscious",detail:"[Instrumental] warm jazz sample, gentle drum groove, soulful chord progression, lyrical atmospheric pad, 88 BPM, bilingual conscious jazz hip hop loop"},
      {type:"モダン（コンシャスJ-HipHop）",style:"conscious Japanese hip hop, modern jazz influenced, introspective",detail:"[Instrumental] modern jazz-influenced sample, clean drum pattern, warm bass, introspective mood, 90 BPM, conscious modern Japanese hip hop jazz loop"},
      {type:"実験的（詩的ジャズアンビエント）",style:"poetic jazz ambient hip hop, contemplative Japanese aesthetic",detail:"[Instrumental] ambient jazz textures, sparse meditative percussion, lyrical atmosphere, 84 BPM, poetic ambient jazz Japanese hip hop loop"}
    ]
  },
  {
    name:"Tohji", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","lo-fi"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–150",
    desc:"東京のラッパー兼プロデューサー。クラウドラップとJ-トラップを融合させた夢幻的なサウンドで次世代日本語ラップシーンを牽引。gummyboyとのコラボや独自の美学が国内外で注目される。",
    sounds:["ドリーミーシンセ","808ベース","フローティングテクスチャー","エーテリアルパッド","クラウドラップビート","ユニークSE"],
    artists:["gummyboy","Yvng Homie","JP THE WAVY","KEIJU"],
    prompts:[
      {type:"クラシック（クラウドラップ）",style:"cloud rap Japanese, dreamy ethereal, floating synthesizer",detail:"[Instrumental] dreamy floating synthesizer, soft 808 bass, ethereal atmospheric pads, cloud rap drum pattern, 140 BPM, dreamy Japanese cloud rap loop"},
      {type:"モダン（ドリームトラップJ）",style:"dream trap Japanese, hazy aesthetic, modern ethereal",detail:"[Instrumental] hazy synthesizer textures, sliding 808 bass, soft trap drums, ethereal pads, 142 BPM, modern dream trap Japanese hip hop loop"},
      {type:"実験的（エーテリアルウェイブ）",style:"ethereal wave Japanese hip hop, experimental surreal, innovative",detail:"[Instrumental] surreal synthesizer waves, experimental 808, abstract dreamy drums, 138 BPM, ethereal wave experimental Japanese hip hop loop"}
    ]
  },
  {
    name:"gummyboy", alias:"",
    eras:["2010s","2020s"], styles:["trap","lo-fi","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–148",
    desc:"東京のプロデューサー。Tohjiとの親密なコラボレーションで知られ、メロディックで夢幻的なサウンドが特徴。KEIJUやkZMらとも共演し、日本の新世代トラップシーンの重要な音の担い手。",
    sounds:["メロディックシンセ","ドリーミーパッド","808ベース","ソフトトラップドラム","浮遊感のあるテクスチャー","エモーショナルコード"],
    artists:["Tohji","KEIJU","kZm","Awich","JP THE WAVY"],
    prompts:[
      {type:"クラシック（メロウトラップ）",style:"mellow Japanese trap, dreamy melodic, emotional synthesizer",detail:"[Instrumental] mellow melodic synthesizer, soft 808 bass, gentle trap drum pattern, dreamy pads, 138 BPM, mellow emotional Japanese trap loop"},
      {type:"モダン（エモJトラップ）",style:"emo Japanese trap, emotional melodic, vulnerable modern",detail:"[Instrumental] emotional synthesizer chords, melancholic melody, 808 bass, modern trap drums, 140 BPM, emotional emo Japanese trap loop"},
      {type:"実験的（ドリームポップトラップ）",style:"dream pop trap fusion, experimental Japanese, hazy and beautiful",detail:"[Instrumental] dream pop synthesizer textures, experimental trap drums, 808 bass, beautiful hazy atmosphere, 136 BPM, experimental dream pop Japanese trap loop"}
    ]
  },
  {
    name:"kZm", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"130–148",
    desc:"東京のラッパー兼プロデューサー。Young CocoやKEIJU、JP THE WAVYらとの共演で知られ、スタイリッシュなトラップサウンドを武器に日本語ラップシーンの新世代を代表する存在。",
    sounds:["スタイリッシュシンセ","808ベース","トラップハイハット","クリーンビート","クールなメロディー","モダンテクスチャー"],
    artists:["Young Coco","KEIJU","JP THE WAVY","AWICH","Chaki Zulu"],
    prompts:[
      {type:"クラシック（スタイリッシュJトラップ）",style:"stylish Japanese trap, cool modern, urban Tokyo",detail:"[Instrumental] stylish synthesizer melody, heavy 808 bass, crisp trap drums, cool urban atmosphere, 140 BPM, stylish modern Japanese trap loop"},
      {type:"モダン（アーバントーキョートラップ）",style:"urban Tokyo trap, sleek modern Japanese, clean",detail:"[Instrumental] sleek melodic synthesizer, punchy 808, clean trap drum pattern, urban Tokyo vibe, 142 BPM, urban Tokyo modern trap loop"},
      {type:"実験的（ニューウェイブJトラップ）",style:"new wave Japanese trap, innovative stylish, next generation",detail:"[Instrumental] innovative synthesizer design, experimental 808 patterns, next-gen trap drums, 138 BPM, new wave experimental stylish Japanese trap loop"}
    ]
  },
  {
    name:"Moment Joon", alias:"",
    eras:["2010s","2020s"], styles:["boom bap","underground","alternative"],
    region:"Japan", city:"Osaka, Japan", bpm:"85–100",
    desc:"大阪を拠点とする韓国系日本語ラッパー兼プロデューサー。社会問題や在日コリアンとしてのアイデンティティをリリックに込めたコンシャスラップで、日本語ヒップホップの多様性を広げる重要な存在。",
    sounds:["コンシャスビート","ブームバップドラム","ソウルサンプル","インテレクチュアルテクスチャー","ディープグルーヴ","批評的雰囲気"],
    artists:["大阪コンシャスラップシーン","環ROY","Hidden","NONA REEVES"],
    prompts:[
      {type:"クラシック（コンシャスブームバップ）",style:"conscious boom bap, Osaka underground, intellectual poetic",detail:"[Instrumental] thoughtful boom bap drum pattern, soul sample loop, intellectual atmospheric bass, 88 BPM, conscious intellectual Osaka underground hip hop boom bap loop"},
      {type:"モダン（ソーシャルコメンタリービート）",style:"social commentary hip hop, modern conscious, Osaka underground",detail:"[Instrumental] modern conscious hip hop production, soul sample, clean drums, contemplative bass, 90 BPM, modern social commentary conscious hip hop loop"},
      {type:"実験的（バイカルチャービート）",style:"bicultural experimental hip hop, Korean-Japanese identity, abstract",detail:"[Instrumental] abstract sample exploration, experimental drum pattern, bicultural sonic identity, 85 BPM, abstract bicultural experimental hip hop loop"}
    ]
  },
  {
    name:"Dos Monos", alias:"荘子it / Botsu / Taitan Man",
    eras:["2010s","2020s"], styles:["alternative","underground","experimental"],
    region:"Japan", city:"Tokyo, Japan", bpm:"80–130",
    desc:"東京の実験的ヒップホップグループ。荘子it（Doss Monos）がビート制作も担当し、ノイズ・ジャズ・エレクトロニカを融合したアブストラクトなサウンドで国内外の実験的音楽シーンで高く評価される。",
    sounds:["アブストラクトシンセ","ノイズ要素","ジャズフラグメント","実験的ドラム","電子ノイズ","アバンギャルドテクスチャー"],
    artists:["Shing02","荘子it","BOC","実験的ヒップホップシーン"],
    prompts:[
      {type:"クラシック（実験的J-HipHop）",style:"experimental Japanese hip hop, abstract noise, avant-garde",detail:"[Instrumental] abstract noise and jazz fragments, unconventional drum patterns, dissonant synthesizer textures, 90 BPM, experimental avant-garde Japanese hip hop abstract loop"},
      {type:"モダン（エクスペリメンタルJ-HipHop）",style:"experimental electronic Japanese hip hop, noise jazz fusion",detail:"[Instrumental] electronic noise textures over hip hop rhythm, jazz deconstruction, experimental bass, 95 BPM, experimental electronic noise jazz Japanese hip hop loop"},
      {type:"実験的（ノイズアブストラクト）",style:"noise abstract hip hop, maximalist experimental Japanese",detail:"[Instrumental] maximalist noise collage, deconstructed hip hop rhythms, abstract textural elements, 85 BPM, maximalist abstract noise Japanese hip hop loop"}
    ]
  },
  {
    name:"Budamunk", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"Japan", city:"Tokyo / Los Angeles", bpm:"87–97",
    desc:"東京出身でLAに移住し活動するビートメイカー。2005年にJam Master JayのMPCトーナメントで優勝した実力者。A Tribe Called QuestやJ Dilla直系のソウルフルなサンプリングで東京アンダーグラウンドシーンを支える。",
    sounds:["MPCビート","ソウルサンプル","ジャジーグルーヴ","ヴィンテージトーン","温かいドラム","J Dillaインフルエンス"],
    artists:["Issugi","5lack","Eligh (LA Symphony)","Aztek"],
    prompts:[
      {type:"クラシック（MPCソウルホップ）",style:"MPC soul hip hop, J Dilla influenced, warm jazzy Japanese",detail:"[Instrumental] MPC-crafted soul sample loop, J Dilla-inspired swing drum, warm bass, jazzy chord stabs, 90 BPM, MPC soul jazz hip hop Tokyo loop"},
      {type:"モダン（ビートサイエンス）",style:"beat science hip hop, precise MPC programming, warm modern",detail:"[Instrumental] precise MPC drum programming, warm soul sample, smooth bass groove, modern clean mix, 92 BPM, beat science warm soul hip hop loop"},
      {type:"実験的（ソウルクリエイティブ）",style:"creative soul hip hop, experimental MPC, Tokyo underground",detail:"[Instrumental] creative MPC manipulation, experimental soul sample chopping, deep groove bass, 88 BPM, creative experimental MPC soul hip hop loop"}
    ]
  },
  {
    name:"Ill Sugi", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","underground","lo-fi"],
    region:"Japan", city:"Tokyo, Japan", bpm:"84–96",
    desc:"2006年から東京を拠点に活動するビートメイカー。90年代NY（ブロンクス・ニュージャージー）スタイルへのオマージュを独自解釈で昇華し、欧州でも支持を得る日本のアンダーグラウンドビートシーンの職人。",
    sounds:["ヴィンテージNYサンプル","ブームバップドラム","ジャズフラグメント","ヴィンテージテクスチャー","ディープベース","ブロンクスバイブ"],
    artists:["Infinito 2017","国内アンダーグラウンドMC"],
    prompts:[
      {type:"クラシック（ヴィンテージNYスタイル）",style:"vintage New York style boom bap, 90s Bronx influenced, raw",detail:"[Instrumental] vintage NY style sample loop, raw boom bap drum pattern, deep bass, dusty vinyl texture, 88 BPM, vintage NY style underground Japanese hip hop loop"},
      {type:"モダン（クラシックリバイバル）",style:"classic revival underground hip hop, Japanese, authentic boom bap",detail:"[Instrumental] authentic boom bap drum break, classic soul sample, deep bass groove, 90 BPM, classic revival authentic underground Japanese hip hop loop"},
      {type:"実験的（オールドスクールネオ）",style:"old school neo underground, experimental vintage, Japanese hip hop",detail:"[Instrumental] experimental vintage sample processing, neo old-school drum pattern, deep bass, 85 BPM, old school neo experimental underground Japanese hip hop loop"}
    ]
  },
  {
    name:"Shingo Suzuki", alias:"",
    eras:["2000s","2010s","2020s"], styles:["neo soul","jazzy","alternative"],
    region:"Japan", city:"Tokyo, Japan", bpm:"82–104",
    desc:"東京在住のコンポーザー・プロデューサー・ベーシスト。トリオ「Ovall」ではヒップホップのビートに生演奏のジャズ・ソウル・ロックを融合させ、「ヒップホップ・フィール×ミュージシャン視点」を体現する。",
    sounds:["ライブベース演奏","ジャズ生演奏","ヒップホップビート","ソウルグルーヴ","プログラムとライブの融合","オーガニックテクスチャー"],
    artists:["Ovall","mabanua","mabanuaコラボ","AAAMYYY"],
    prompts:[
      {type:"クラシック（ライブジャズホップ）",style:"live jazz hip hop, neo soul, bass-driven organic groove",detail:"[Instrumental] live bass performance over hip hop beat, jazz chord stabs, organic drum groove, soulful keyboard, 88 BPM, live jazz hip hop organic groove loop"},
      {type:"モダン（ネオソウルJazz）",style:"neo soul jazz Japanese, live band feel, modern organic",detail:"[Instrumental] live band neo soul arrangement, hip hop drum programming, live bass guitar, jazz piano, 92 BPM, modern neo soul live jazz Japanese hip hop loop"},
      {type:"実験的（ジャズロックフュージョン）",style:"jazz rock fusion hip hop, experimental live instruments, progressive",detail:"[Instrumental] progressive jazz-rock fusion over hip hop beat, live instruments, experimental bass playing, 86 BPM, jazz rock fusion experimental hip hop loop"}
    ]
  }
];

async function main() {
  const SQL = await initSqlJs();
  if (!fs.existsSync(DB)) {
    console.error('DBファイルが見つかりません:', DB);
    process.exit(1);
  }
  const db = new SQL.Database(fs.readFileSync(DB));

  let inserted = 0;
  for (const p of PRODUCERS) {
    const existing = db.exec('SELECT id FROM producers WHERE name=?', [p.name]);
    if (existing.length && existing[0].values.length) {
      console.log(`スキップ（既存）: ${p.name}`);
      continue;
    }
    db.run(
      'INSERT INTO producers (name,alias,eras,styles,region,city,bpm,desc,sounds,artists,prompts,is_custom) VALUES (?,?,?,?,?,?,?,?,?,?,?,0)',
      [p.name, p.alias||'',
       JSON.stringify(p.eras), JSON.stringify(p.styles),
       p.region||'', p.city||'', p.bpm||'', p.desc||'',
       JSON.stringify(p.sounds||[]), JSON.stringify(p.artists||[]), JSON.stringify(p.prompts||[])]
    );
    console.log(`追加: ${p.name}`);
    inserted++;
  }
  fs.writeFileSync(DB, Buffer.from(db.export()));
  db.close();
  console.log(`\n✓ ${inserted}件 追加完了`);
}

main().catch(e => { console.error(e); process.exit(1); });
