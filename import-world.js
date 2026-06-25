'use strict';
const MODULE_PATH = '/home/yasuosanlkz/hiphop-modules/node_modules';
const initSqlJs  = require(MODULE_PATH + '/sql.js');
const path       = require('path');
const fs         = require('fs');

const DB = path.join(__dirname, 'producers.db');

const PRODUCERS = [
  // ===== UK =====
  {
    name:"Wiley", alias:"Richard Cowie Jr.",
    eras:["2000s","2010s"], styles:["alternative","underground","experimental"],
    region:"Other", city:"London, UK", bpm:"138–142",
    desc:"「グライムの名付け親」と称されるロンドン東部出身のアーティスト。2000年代初頭にEskibeatと呼ばれる独自のサウンドをホワイトレーベルで自主流通し、グライムというジャンルを実質的に創始した。Roll Deepを率いDizzee Rascal・Skeptaを輩出。",
    sounds:["Eskibeatシンセ","冷たいサウンド","重いベースライン","変則ビート","ホワイトレーベルサウンド","グライムDIY"],
    artists:["Dizzee Rascal","Skepta","Tinchy Stryder","Roll Deep","Stormzy"],
    prompts:[
      {type:"クラシック（Eskibeatグライム）",style:"Eskibeat grime, Wiley original, icy dark synthesizer, 140 BPM",detail:"[Instrumental] icy cold synthesizer pattern, dark grime drum machine beat, heavy bass line, off-kilter rhythm, 140 BPM, original Eskibeat grime underground loop"},
      {type:"モダン（UKグライム）",style:"modern UK grime, underground urban London, dark electronic",detail:"[Instrumental] modern dark grime synthesizer, UK underground drum pattern, heavy bass, urban London atmosphere, 140 BPM, modern UK grime urban underground loop"},
      {type:"実験的（アブストラクトグライム）",style:"abstract grime experiment, unconventional dark London, avant-garde",detail:"[Instrumental] abstract experimental grime synthesizer, unconventional drum pattern, dark bass, 140 BPM, abstract experimental avant-garde grime loop"}
    ]
  },
  {
    name:"Skepta", alias:"Joseph Adenuga Jr.",
    eras:["2000s","2010s","2020s"], styles:["alternative","trap","underground"],
    region:"Other", city:"London, UK", bpm:"138–145",
    desc:"グライム第一世代のスターでプロデューサーとしても高い評価を受ける。A$AP Rockyとの「Praise The Lord」を手がけるなど英米を繋ぐ存在。Boy Better Knowの中心人物でグライムをグローバルシーンへ押し上げた功績は大きい。",
    sounds:["ピアノベースグライム","ダークシネマシンセ","UKガレージ要素","グライムドラム","重低音","ストリートバイブ"],
    artists:["A$AP Rocky","Drake","Wiley","JME","Dizzee Rascal"],
    prompts:[
      {type:"クラシック（ボーイベターノウグライム）",style:"Boy Better Know grime, Skepta dark cinematic, piano-based",detail:"[Instrumental] dark piano-based grime synthesizer, cinematic atmospheric pads, heavy grime drum machine, deep bass, 140 BPM, Boy Better Know dark cinematic grime loop"},
      {type:"モダン（グローバルグライム）",style:"global grime hip hop, US-UK crossover, modern dark",detail:"[Instrumental] modern dark UK grime-meets-hip-hop synthesizer, trap-influenced drum pattern, heavy bass, 142 BPM, global US-UK crossover grime hip hop loop"},
      {type:"実験的（グライムトラップフュージョン）",style:"grime trap fusion experimental, dark hybrid, UK-US",detail:"[Instrumental] experimental grime-trap hybrid synthesizer, fusion drum pattern, dark bass, 140 BPM, experimental dark grime trap fusion UK-US loop"}
    ]
  },
  {
    name:"Steel Banglez", alias:"Pahuldip Sandhu",
    eras:["2010s","2020s"], styles:["alternative","trap","underground"],
    region:"Other", city:"London, UK", bpm:"130–145",
    desc:"インド系ロンドンのプロデューサー。MoStackとMISTをUKラップのメインストリームへ押し上げた立役者で、メロディアスなピアノループとUK固有のパーカッシブなドラムが特徴。Nasとのコラボも実現した越境型の才能。",
    sounds:["メロディアスピアノ","UKパーカッション","ストリートソウル","UKラップビート","ドリル要素","ドライドラム"],
    artists:["MoStack","MIST","Wiley","Nas","Sidhu Moose Wala"],
    prompts:[
      {type:"クラシック（UKラップピアノ）",style:"UK rap piano loop, melodic street soul, Steel Banglez",detail:"[Instrumental] melodic UK rap piano loop, UK-specific percussive drum pattern, street soul bass, 138 BPM, UK rap melodic street soul piano loop"},
      {type:"モダン（モダンUKストリート）",style:"modern UK street rap, melodic polished, mainstream UK",detail:"[Instrumental] polished modern UK street synthesizer, precise drum pattern, smooth bass, 140 BPM, modern polished UK street rap melodic loop"},
      {type:"実験的（UKグローバルフュージョン）",style:"UK global fusion rap, experimental melodic, cross-cultural",detail:"[Instrumental] experimental UK global fusion synthesizer, creative drum pattern, cultural bass blend, 135 BPM, experimental global UK fusion rap loop"}
    ]
  },
  {
    name:"Jae5", alias:"",
    eras:["2010s","2020s"], styles:["alternative","trap","underground"],
    region:"Other", city:"London, UK", bpm:"130–145",
    desc:"ロンドン出身のUKドリル/アフロスウィング系プロデューサー。ナイジェリア系英国人としてのバックグラウンドからアフロビーツとUKドリルを融合させた独自サウンドで、Dave・J Hus等の名作を手がけてきた。",
    sounds:["UKドリルビート","アフロスウィング要素","ダークメロディー","ナイジェリアンビート","UKストリートサウンド","融合的テクスチャー"],
    artists:["Dave","J Hus","WizKid","Burna Boy","Fredo"],
    prompts:[
      {type:"クラシック（UKドリルアフロ）",style:"UK drill Afro fusion, Jae5 style, dark melodic Nigerian-UK",detail:"[Instrumental] UK drill dark synthesizer with Afrobeat elements, Nigerian-influenced melody, drill drum pattern, 140 BPM, UK drill Afro fusion dark loop"},
      {type:"モダン（アフロスウィングUK）",style:"Afro swing UK, modern fusion melodic, dark urban London",detail:"[Instrumental] modern Afro swing melodic synthesizer, UK drill drum pattern, fusion bass, 142 BPM, modern Afro swing UK drill melodic loop"},
      {type:"実験的（ナイジェリアUKフュージョン）",style:"Nigerian UK experimental fusion, dark Afro drill, innovative",detail:"[Instrumental] experimental Nigerian-UK sonic fusion, innovative drill-Afro drum pattern, deep bass, 138 BPM, experimental innovative Afro UK drill fusion loop"}
    ]
  },
  {
    name:"Rude Kid", alias:"Shehzad Zar",
    eras:["2010s","2020s"], styles:["alternative","underground","experimental"],
    region:"Other", city:"Ilford, London, UK", bpm:"130–142",
    desc:"「Are you ready?」のビートタグで知られるロンドンのプロデューサー。グライム・バスライン・ダブステップ・UKガレージを横断する幅広いスタイルが特徴で、ひとつのジャンルに縛られない柔軟性が強み。",
    sounds:["グライムシンセ","バスラインビート","ダブステップ要素","UKガレージリズム","ハードドラム","多ジャンル対応"],
    artists:["UKグライム・ガレージ界全般"],
    prompts:[
      {type:"クラシック（UKマルチジャンル）",style:"UK multi-genre underground, grime bassline dubstep, versatile",detail:"[Instrumental] versatile UK synthesizer crossing grime and dubstep, bassline drum pattern, deep bass, 140 BPM, UK multi-genre underground versatile loop"},
      {type:"モダン（バスライン×ガレージ）",style:"bassline meets garage UK, modern underground, heavy bass",detail:"[Instrumental] modern UK bassline-garage synthesizer, heavy drum pattern, deep bass, 138 BPM, modern UK bassline garage underground loop"},
      {type:"実験的（UKクロスジャンル）",style:"UK cross-genre experiment, abstract underground, dark versatile",detail:"[Instrumental] abstract UK cross-genre synthesizer exploration, experimental drum pattern, dark bass, 134 BPM, experimental abstract UK cross-genre underground loop"}
    ]
  },
  {
    name:"Davinche", alias:"",
    eras:["2000s","2010s"], styles:["alternative","underground","experimental"],
    region:"Other", city:"London, UK", bpm:"138–142",
    desc:"グライム草創期の重要プロデューサー。GeeneusやTargetと並んでジャンル形成に貢献し、初期グライムシーンの音的基盤を構築した。8バー構造のMCリレーを支えるミニマルでダークなビートメイキングが特徴。",
    sounds:["グライム黎明期ビート","ミニマルシンセ","ダーク音響","8バー構造","グライムドラム","アーリーUKサウンド"],
    artists:["初期グライムMC多数","N.A.S.T.Y Crew"],
    prompts:[
      {type:"クラシック（グライム黎明期）",style:"early grime pioneer beat, minimalist dark, 8-bar structure",detail:"[Instrumental] minimalist dark grime synthesizer, 8-bar drum machine pattern, sparse bass, underground raw feel, 140 BPM, early pioneer grime underground loop"},
      {type:"モダン（ピュアグライム）",style:"pure grime essence, raw minimalist UK, underground authentic",detail:"[Instrumental] raw authentic grime synthesizer, minimal drum pattern, sparse bass, 140 BPM, pure authentic raw grime underground loop"},
      {type:"実験的（グライムアブストラクト）",style:"grime abstract experiment, minimalist dark UK avant-garde",detail:"[Instrumental] abstract minimalist dark grime synthesizer, unconventional sparse drums, 138 BPM, abstract experimental minimalist dark grime loop"}
    ]
  },
  // ===== FRANCE =====
  {
    name:"DJ Mehdi", alias:"Mehdi Favéris-Essadi",
    eras:["90s","2000s"], styles:["boom bap","alternative","funk"],
    region:"Other", city:"Paris, France", bpm:"87–125",
    desc:"フランスアンダーグラウンドヒップホップの最高峰プロデューサー。MC Solaar・113・Rohffらフレンチラップを音で支え、後にDaft Punk・Ed Bangerのエレクトロシーンとも融合した。2011年に33歳で事故死。伝説は続く。",
    sounds:["フレンチヒップホップビート","エレクトロ要素","洗練サンプリング","パリジャンサウンド","Ed Bangerクオリティ","ヒップホップエレクトロ橋渡し"],
    artists:["MC Solaar","113","Rohff","Ideal J","Chromeo"],
    prompts:[
      {type:"クラシック（フレンチアンダーグラウンド）",style:"French underground hip hop, DJ Mehdi style, sophisticated sampling",detail:"[Instrumental] sophisticated French hip hop sample, clean precise drum pattern, deep bass, Parisian underground atmosphere, 92 BPM, French underground hip hop sophisticated loop"},
      {type:"モダン（パリジャンエレクトロホップ）",style:"Parisian electro hip hop, refined French production, Ed Banger",detail:"[Instrumental] refined Parisian electronic hip hop synthesis, precise drum programming, electronic bass, 100 BPM, Parisian refined electro hip hop loop"},
      {type:"実験的（エレクトロフレンチフュージョン）",style:"electro French hip hop fusion, experimental sophisticated, Paris",detail:"[Instrumental] experimental French hip hop meets electro fusion, sophisticated sample processing, 95 BPM, experimental Parisian electro fusion hip hop loop"}
    ]
  },
  {
    name:"Jimmy Jay", alias:"",
    eras:["90s","2000s"], styles:["boom bap","jazzy","south"],
    region:"Other", city:"Marseille, France", bpm:"86–95",
    desc:"「フランスのビートメイカーの父」と称されるマルセイユのレジェンド。IAMの「L'École du Micro d'Argent」を手がけ、アメリカのジャズ・ソウルサンプリングとマルセイユ固有のラテン的メロディ感覚を融合させてフレンチラップを全土に広めた。",
    sounds:["ジャズソウルサンプル","ラテン的メロディ","マルセイユグルーヴ","ビッグバンド要素","フレンチラップビート","サザンフランスバイブ"],
    artists:["IAM","Akhenaton","Shurik'n","Kheops"],
    prompts:[
      {type:"クラシック（マルセイユフレンチラップ）",style:"Marseille French rap, jazz soul sampling, Mediterranean",detail:"[Instrumental] American jazz soul sample with Mediterranean feel, Marseille-style drum groove, warm bass, 90 BPM, Marseille French hip hop soul jazz loop"},
      {type:"モダン（フランスゴールデンエラ）",style:"French hip hop golden era, soulful warm, Marseille influence",detail:"[Instrumental] golden era French hip hop soul sample, clean drum pattern, warm bass, 92 BPM, French golden era soul jazz hip hop loop"},
      {type:"実験的（メッド・ラップフュージョン）",style:"Mediterranean rap fusion, experimental French soul, cultural",detail:"[Instrumental] experimental Mediterranean hip hop cultural fusion, French jazz sample, creative drum, 88 BPM, experimental Mediterranean French hip hop fusion loop"}
    ]
  },
  {
    name:"SHK", alias:"",
    eras:["2010s","2020s"], styles:["boom bap","trap","jazzy"],
    region:"Other", city:"Paris, France", bpm:"75–140",
    desc:"現代フランスラップシーンで最も尊敬されるプロデューサーの一人。Nekfeu・Alpha Wann・Freeze Corleoneらトップアーティストと組み、ジャジーな質感からトラップまで幅広いスタイルをこなす多才なビートメイカー。",
    sounds:["ジャジーフレンチビート","トラップ要素","精密サンプリング","感情的メロディー","多才スタイル","モダンフランスサウンド"],
    artists:["Nekfeu","Alpha Wann","Freeze Corleone","SCH","Laylow"],
    prompts:[
      {type:"クラシック（コンテンポラリーフランスラップ）",style:"contemporary French rap, jazzy dark, SHK style versatile",detail:"[Instrumental] jazzy dark French hip hop sample, precise drum pattern, emotional bass, 88 BPM, contemporary versatile French rap jazzy loop"},
      {type:"モダン（フランストラップ）",style:"modern French trap, dark melodic, contemporary Paris rap",detail:"[Instrumental] dark melodic French trap synthesizer, modern drum pattern, 808 bass, 138 BPM, modern dark French trap Paris rap loop"},
      {type:"実験的（ジャジートラップフュージョン）",style:"jazzy trap fusion French, experimental sophisticated, versatile",detail:"[Instrumental] sophisticated jazzy-trap fusion, experimental French production, versatile bass, 100 BPM, experimental sophisticated French jazzy trap fusion loop"}
    ]
  },
  {
    name:"Skread", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Other", city:"France", bpm:"72–140",
    desc:"フランスラップをモダンなサウンドへアップデートしたプロデューサー。DJ MehdiやCut Killerが築いた礎の上に現代的なトラップ感覚を持ち込み、ダークなトラップと感情的なメロディの融合でシーンを刷新した。",
    sounds:["ダークフレンチトラップ","シネマティックシンセ","エモーショナルメロディー","モダンフレンチビート","808ベース","フランスダークサウンド"],
    artists:["現代フランスラップアーティスト多数","Ninho","SCH"],
    prompts:[
      {type:"クラシック（ダークフレンチトラップ）",style:"dark French trap, Skread style, cinematic emotional",detail:"[Instrumental] dark cinematic French trap synthesizer, emotional chord progression, heavy 808 bass, 138 BPM, dark cinematic French trap emotional loop"},
      {type:"モダン（フランスシネマトラップ）",style:"French cinematic trap, modern dark, emotional Paris",detail:"[Instrumental] modern cinematic dark synthesizer, French trap drum pattern, deep 808, emotional atmospheric, 140 BPM, modern French cinematic dark trap loop"},
      {type:"実験的（ダークシネマフュージョン）",style:"dark cinema hip hop fusion French, experimental moody",detail:"[Instrumental] experimental dark cinema French hip hop synthesis, moody sample, innovative drum, 134 BPM, dark cinema experimental French fusion loop"}
    ]
  },
  {
    name:"Cut Killer", alias:"Cédric Cutter",
    eras:["90s","2000s"], styles:["boom bap","underground","funk"],
    region:"Other", city:"Paris, France", bpm:"88–100",
    desc:"1990年代フランスヒップホップの象徴的DJ兼プロデューサー。映画「La Haine（憎しみ）」のサウンドトラック参加でも知られ、NTM・MC Solaarなどのフレンチラップ黎明期を支えながらNYとパリの感覚を橋渡しした。",
    sounds:["DJスクラッチ","フレンチラップビート","ミックステープサウンド","バイナルグルーヴ","パリジャンストリート","NYPari橋渡し"],
    artists:["NTM","MC Solaar","Booba","Rohff","IAM"],
    prompts:[
      {type:"クラシック（フレンチラップ黎明期）",style:"early French hip hop classic, DJ cuts, 90s Paris NYC bridge",detail:"[Instrumental] classic DJ scratch over French hip hop beat, boom bap drum pattern, Paris underground atmosphere, 92 BPM, early French hip hop DJ scratch classic loop"},
      {type:"モダン（フレンチクラシックリバイバル）",style:"French hip hop classic revival, old school Paris, nostalgic",detail:"[Instrumental] French hip hop revival sample, classic drum pattern, scratch elements, warm bass, 94 BPM, French classic revival nostalgia hip hop loop"},
      {type:"実験的（パリNYターンテーブル）",style:"Paris NYC turntable experiment, cross-cultural, creative scratch",detail:"[Instrumental] creative cross-cultural scratch experiment, French-American hip hop fusion, 90 BPM, Paris-NYC experimental turntable hip hop loop"}
    ]
  },
  // ===== GERMANY =====
  {
    name:"Sepalot", alias:"",
    eras:["90s","2000s","2010s"], styles:["boom bap","alternative","experimental"],
    region:"Other", city:"Munich, Germany", bpm:"84–100",
    desc:"ミュンヘンのビートメイカー兼Blumentopfグループのメンバー。ソウルからエレクトロまで多様な音楽的素養を持ち、ヨハネスブルクからボリビアまで世界ツアーを行う国際的存在。ドイツヒップホップのトップ10アルバムを複数記録。",
    sounds:["ドイツブームバップ","エレクトロ要素","ヴィニールサンプル","オーガニックグルーヴ","ミュンヘンスタイル","マルチジャンル"],
    artists:["Blumentopf","ドイツ国内外MC多数"],
    prompts:[
      {type:"クラシック（ミュンヘンブームバップ）",style:"Munich boom bap, German hip hop, soul electronic blend",detail:"[Instrumental] Munich-style soul vinyl sample, German hip hop drum pattern, electronic elements, warm bass, 88 BPM, Munich German boom bap soul loop"},
      {type:"モダン（ジャーマンエレクトロホップ）",style:"German electro hop, modern Munich, multi-genre",detail:"[Instrumental] modern German electronic hip hop synthesizer, multi-genre drum pattern, electronic bass, 90 BPM, modern German electro hop Munich loop"},
      {type:"実験的（グローバルビートフュージョン）",style:"global beat fusion German, experimental international, Munich",detail:"[Instrumental] experimental global sound fusion, international drum programming, creative bass, 86 BPM, experimental global fusion German hip hop loop"}
    ]
  },
  {
    name:"Suff Daddy", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"Other", city:"Berlin, Germany", bpm:"84–96",
    desc:"ベルリン発のビートメイカーで、ドイツの新世代ビートプロデューサー運動の中心人物。「Hi-Hat Club」シリーズを通じてアンダーグラウンドの高品質ビートを精力的に世に送り出している職人。",
    sounds:["ヴィンテージジャズサンプル","ベルリンソウルビート","Hi-Hat Clubサウンド","精密ドラム","ウォームベース","ジャジーコード"],
    artists:["Hi-Hat Club (Twit One, Dexter, Brenk Sinatra)"],
    prompts:[
      {type:"クラシック（ベルリンジャジービート）",style:"Berlin jazzy hip hop beat, Suff Daddy style, vintage soul",detail:"[Instrumental] vintage Berlin jazz sample, precise drum pattern, warm soul bass, jazzy chord stabs, 88 BPM, Berlin jazzy vintage soul hip hop loop"},
      {type:"モダン（Hi-Hat Clubクオリティ）",style:"Hi-Hat Club quality German underground, modern artisan beat",detail:"[Instrumental] artisan quality soul sample, precise modern drum programming, warm bass, 90 BPM, Hi-Hat Club quality modern German underground loop"},
      {type:"実験的（ベルリンアンダーグラウンドジャズ）",style:"Berlin underground jazz experiment, abstract artisan, German",detail:"[Instrumental] abstract jazz sample exploration, experimental drum feel, warm creative bass, 85 BPM, abstract Berlin underground jazzy experimental loop"}
    ]
  },
  {
    name:"Twit One", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","underground","jazzy"],
    region:"Other", city:"Germany", bpm:"85–96",
    desc:"ドイツ屈指のビートメイカー。深いレコード掘りを基盤とするサンプリングと、クラシックなヒップホップ文法への忠実さが特徴。Hi-Hat Club系のコレクティブを通じてドイツのアンダーグラウンドヒップホップ産業を牽引。",
    sounds:["クレートダイギングサンプル","クラシックドラム","ドープなグルーヴ","ドイツアンダーグラウンド","バイナルウォームス","正統派ビート"],
    artists:["Suff Daddy","Dexter","Brenk Sinatra","Hi-Hat Club"],
    prompts:[
      {type:"クラシック（クラシックジャーマンビート）",style:"classic German hip hop beat, crate digging, authentic boom bap",detail:"[Instrumental] deep crate-dig sample, authentic boom bap drum pattern, dope bass groove, vinyl warmth, 88 BPM, authentic classic German crate-digging boom bap loop"},
      {type:"モダン（アンダーグラウンドコレクティブ）",style:"underground collective German hip hop, Hi-Hat Club, artisan",detail:"[Instrumental] artisan collective quality boom bap, clean German underground drum, deep bass, 90 BPM, Hi-Hat Club collective artisan German underground loop"},
      {type:"実験的（ドープサンプリングエクスペリメント）",style:"dope sampling experiment, deep crates German, abstract",detail:"[Instrumental] abstract deep crate sample, experimental German drum pattern, warm creative bass, 86 BPM, abstract deep crate experimental German hip hop loop"}
    ]
  },
  {
    name:"Morlockk Dilemma", alias:"",
    eras:["2000s","2010s","2020s"], styles:["underground","experimental","alternative"],
    region:"Other", city:"Leipzig, Germany", bpm:"80–95",
    desc:"ライプツィヒ出身のラッパー兼プロデューサー。1960〜80年代のオブスキュアなライブラリ音楽を素材に独自の暗黒ヒップホップワールドを構築。ファンク・ソウルを避ける異端のサンプリング哲学が唯一無二。",
    sounds:["ライブラリミュージックサンプル","ダークアブストラクト","旧東ドイツバイブ","実験的テクスチャー","オブスキュアサンプル","ダークドラム"],
    artists:["Hiob","Leipzig/東ドイツアンダーグラウンド"],
    prompts:[
      {type:"クラシック（ライブラリミュージックダーク）",style:"library music dark hip hop, obscure sampling, East Germany",detail:"[Instrumental] obscure 1960-80s library music sample, dark hip hop drum pattern, ominous bass, East German dark atmosphere, 85 BPM, dark library music underground hip hop loop"},
      {type:"モダン（アブストラクトダーク）",style:"abstract dark German hip hop, experimental library, obscure",detail:"[Instrumental] abstract obscure library sample, dark experimental drum pattern, ominous bass, 88 BPM, abstract dark obscure experimental German hip hop loop"},
      {type:"実験的（オブスキュアコラージュ）",style:"obscure collage hip hop, avant-garde East German, dark abstract",detail:"[Instrumental] avant-garde obscure collage from library sources, abstract drum, dark bass, 82 BPM, abstract avant-garde obscure collage dark German hip hop loop"}
    ]
  },
  {
    name:"Cubeatz", alias:"Tim & Kevin Gomringer",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Other", city:"Sindelfingen, Germany", bpm:"130–148",
    desc:"ドイツ出身の双子プロデューサーデュオ。Metro Boomin・Murda Beatz・Boi-1daにループを提供しDrake・Travis Scott・Futureのアルバムにクレジットされるという異例のキャリア。Sony Music Publishingとグローバル契約締結。",
    sounds:["ムーディーメロディー","レイヤードエフェクト","トラップループ","グローバルサウンド","ドイツ×アメリカフュージョン","高品質サンプル"],
    artists:["Drake","Travis Scott","Future","21 Savage","Metro Boomin (ループ提供)"],
    prompts:[
      {type:"クラシック（ドイツ×グローバルトラップ）",style:"German global trap loop, Cubeatz twin style, moody layered",detail:"[Instrumental] moody layered melodic trap loop, German-international quality, emotional synthesizer, 140 BPM, German global trap moody melodic loop"},
      {type:"モダン（ソニーミュージックグローバル）",style:"Sony Music global trap, international hit quality, modern melodic",detail:"[Instrumental] international quality melodic trap synthesizer, crisp trap drums, 808 bass, 142 BPM, Sony-level global modern melodic trap loop"},
      {type:"実験的（ループサプライヤーフュージョン）",style:"loop supplier fusion trap, creative German-American, experimental",detail:"[Instrumental] creative German-American melodic loop fusion, experimental layering, innovative 808, 138 BPM, experimental creative loop supplier trap fusion loop"}
    ]
  },
  // ===== KOREA =====
  {
    name:"Primary", alias:"Jung Won-young",
    eras:["2010s","2020s"], styles:["jazzy","alternative","neo soul"],
    region:"Other", city:"Seoul, South Korea", bpm:"84–106",
    desc:"顔を公開せず「P」マークのみで活動する韓国ヒップホップの重要プロデューサー。ジャズ風のコード進行と温かいR&Bテクスチャで、Dynamic Duo・Zion.T・Crushらとのコラボでアンダーグラウンドとメジャーを橋渡し。",
    sounds:["ジャジーR&Bビート","スタイリッシュコード","メロディックグルーヴ","Kヒップホップサウンド","ウォームシンセ","プロフェッショナルミックス"],
    artists:["Dynamic Duo","Zion.T","Crush","Swings","Gaeko"],
    prompts:[
      {type:"クラシック（Kヒップホップジャジー）",style:"K-hip hop jazzy R&B, Primary style mysterious, warm melodic",detail:"[Instrumental] Korean hip hop jazzy R&B chord progression, warm melodic synthesizer, clean drum pattern, smooth bass, 90 BPM, jazzy R&B Korean hip hop warm loop"},
      {type:"モダン（モダンKポップホップ）",style:"modern K-pop hop crossover, polished jazzy, mainstream Korean",detail:"[Instrumental] polished modern Korean hip hop jazz synthesizer, clean drum, warm bass, pop crossover feel, 94 BPM, modern polished K-pop-hop jazzy loop"},
      {type:"実験的（Kジャズポップフュージョン）",style:"K jazz pop fusion, experimental Korean, sophisticated",detail:"[Instrumental] sophisticated experimental Korean jazz-pop fusion, creative drum, complex bass harmony, 88 BPM, experimental K jazz pop fusion sophisticated loop"}
    ]
  },
  {
    name:"Groovyroom", alias:"Park Gyu-jeong & Lee Hwi-min",
    eras:["2010s","2020s"], styles:["trap","alternative","funk"],
    region:"Other", city:"Seoul, South Korea", bpm:"130–150",
    desc:"H1ghr Music所属のプロデューサーデュオ。DJ・プロデューサーの二刀流で活動し、クリーンでモダンなトラップ構造と韓国語ラップのシームレスな融合で韓国トラップシーンの音楽的水準を底上げしてきた。",
    sounds:["クリーントラップビート","モダンKシンセ","808ベース","Kラップグルーヴ","H1ghr Musicサウンド","デュオプロダクション"],
    artists:["Jay Park","H1ghr Music全般","Loco","Simon Dominic"],
    prompts:[
      {type:"クラシック（Kトラップクリーン）",style:"K-trap clean modern, Groovyroom style H1ghr, crisp",detail:"[Instrumental] clean crisp Korean trap synthesizer, precise drum pattern, 808 bass, modern K-hip hop groove, 140 BPM, clean modern H1ghr Korean trap loop"},
      {type:"モダン（H1ghr Musicスタイル）",style:"H1ghr Music style trap, modern Korean urban, polished duo",detail:"[Instrumental] polished H1ghr Music Korean urban synthesizer, dual-producer quality drum, clean 808, 142 BPM, H1ghr Music polished modern Korean trap loop"},
      {type:"実験的（KトラップイノベーションDJ）",style:"K-trap DJ innovation, experimental Korean duo, creative",detail:"[Instrumental] creative DJ-producer Korean trap innovation, experimental drum pattern, innovative 808, 138 BPM, experimental DJ innovative Korean trap loop"}
    ]
  },
  {
    name:"Code Kunst", alias:"Jo Sung-woo",
    eras:["2010s","2020s"], styles:["alternative","experimental","neo soul"],
    region:"Other", city:"Incheon / Seoul, South Korea", bpm:"75–110",
    desc:"仁川出身のAOMG所属プロデューサー。ボーカルチョッピングの独自技法・ブルース/ロック/ソウルのレイヤリング・Mac Miller的感性が特徴。2021年韓国ヒップホップ大賞「プロデューサー・オブ・ザ・イヤー」受賞。",
    sounds:["ボーカルチョップ","ブルースロック要素","ソウルレイヤリング","AOMGサウンド","オルタナKビート","エモーショナルコード"],
    artists:["AOMG全般","C Jamm","Nucksal","Lee Hi","Jay Park"],
    prompts:[
      {type:"クラシック（オルタナKヒップホップ）",style:"alternative K-hip hop, Code Kunst style, blues soul layered",detail:"[Instrumental] soul blues layered sample, vocal chop technique, alternative Korean hip hop drum, 88 BPM, alternative soul blues layered Korean hip hop loop"},
      {type:"モダン（AOMG実験的）",style:"AOMG experimental Korean hip hop, sophisticated Mac Miller vibe",detail:"[Instrumental] sophisticated experimental Korean soul synthesizer, complex drum pattern, warm bass, 90 BPM, AOMG sophisticated experimental K-hip hop loop"},
      {type:"実験的（ボーカルチョップアート）",style:"vocal chop art hip hop, experimental Korean, abstract soul",detail:"[Instrumental] creative vocal chop art over Korean hip hop beat, abstract soul textures, experimental drum, 85 BPM, vocal chop art abstract experimental Korean hip hop loop"}
    ]
  },
  {
    name:"KUSH", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","trap","alternative"],
    region:"Other", city:"Seoul, South Korea", bpm:"88–140",
    desc:"YG Entertainmentの重要プロデューサー。G-Dragon・Zion.TとのコラボやShow Me the Money参加で知られ、KポップとKヒップホップの中間に位置するメジャー志向のプロフェッショナルなサウンドが特徴。",
    sounds:["YGサウンド","メジャーKビート","ポップヒップホップ","プロフェッショナルミックス","K-POPフック","バーサタイルスタイル"],
    artists:["G-Dragon","Zion.T","Show Me the Money出演者","YG全般"],
    prompts:[
      {type:"クラシック（YGKヒップホップ）",style:"YG K-hip hop, polished mainstream Korean, G-Dragon era",detail:"[Instrumental] polished YG-style Korean hip hop synthesizer, clean drum pattern, mainstream K-hip hop bass, 92 BPM, YG polished mainstream Korean hip hop loop"},
      {type:"モダン（メジャーKトラップ）",style:"major label K-trap, YG modern, polished mainstream",detail:"[Instrumental] modern major K-trap synthesizer, crisp professional drum, 808 bass, 140 BPM, major label modern polished K-trap loop"},
      {type:"実験的（KポップヒップホップフュージョンYG）",style:"K-pop hip hop fusion YG, experimental mainstream Korean",detail:"[Instrumental] experimental K-pop hip hop YG fusion synthesizer, creative drum pattern, innovative bass, 95 BPM, experimental K-pop hip hop YG fusion loop"}
    ]
  },
  {
    name:"Gray", alias:"Hong Sang-pyo",
    eras:["2010s","2020s"], styles:["trap","neo soul","alternative"],
    region:"Other", city:"Seoul, South Korea", bpm:"82–142",
    desc:"AOMGレーベルの中心的プロデューサー兼アーティスト。Jay Parkが設立したAOMGの音楽的フレームワークを構築したひとりで、感情的なR&BメロディーとKヒップホップビートを融合させた「AOMG独自のアーバンスムースサウンド」の設計者。",
    sounds:["R&BメロディーKビート","AOMGサウンド","スムースアーバン","エモーショナルコード","プロデューサー×アーティスト","ソウルK融合"],
    artists:["Simon Dominic","Loco","AOMG全般","Jay Park","Ugly Duck"],
    prompts:[
      {type:"クラシック（AOMGスムースR&B）",style:"AOMG smooth R&B Korean hip hop, Gray style, emotional",detail:"[Instrumental] smooth emotional AOMG-style R&B synthesizer, clean hip hop drum, warm bass, 88 BPM, AOMG smooth Korean R&B hip hop loop"},
      {type:"モダン（アーバンKスムース）",style:"urban K smooth hip hop R&B, modern AOMG, emotional polished",detail:"[Instrumental] polished urban Korean smooth synthesizer, modern R&B-hip hop drum, emotional bass, 90 BPM, urban polished Korean smooth hip hop R&B loop"},
      {type:"実験的（Kソウルアーバンフュージョン）",style:"K soul urban fusion, experimental AOMG, emotional innovative",detail:"[Instrumental] experimental Korean soul-urban fusion synthesizer, innovative drum pattern, emotional bass, 85 BPM, experimental K soul urban fusion innovative loop"}
    ]
  },
  // ===== LATIN AMERICA =====
  {
    name:"Bizarrap", alias:"BZRP / Gonzalo Conde",
    eras:["2010s","2020s"], styles:["trap","alternative","experimental"],
    region:"Other", city:"Buenos Aires, Argentina", bpm:"82–140",
    desc:"アルゼンチン出身、1998年生まれの世界的プロデューサー。固定カメラ・ミニマル美学の「BZRP Music Sessions」でShakira・Peso Pluma・Bad Bunnyらとのコラボがバイラル。ラテングラミー「Producer of the Year」2021・2023ノミネート。",
    sounds:["EDMシンセ","ラテントラップビート","ミニマルセッションサウンド","グローバルポップ","BZRPタグ","エレクトロラテン"],
    artists:["Shakira","Peso Pluma","Daddy Yankee","Bad Bunny","Young Miko","Residente"],
    prompts:[
      {type:"クラシック（BZRPミュージックセッション）",style:"BZRP Music Sessions style, Argentine EDM trap, minimal viral",detail:"[Instrumental] BZRP-style minimal EDM trap synthesizer, viral Latin beat, 808 bass, 130 BPM, Argentine BZRP Music Session style Latin trap loop"},
      {type:"モダン（グローバルラテントラップ）",style:"global Latin trap EDM, modern viral Argentine, Shakira era",detail:"[Instrumental] modern global Latin trap EDM synthesizer, viral drum pattern, 808 bass, 140 BPM, global viral modern Latin EDM trap loop"},
      {type:"実験的（ラテンEDMフュージョン）",style:"Latin EDM fusion experimental, Argentine innovative, global viral",detail:"[Instrumental] innovative Latin-EDM fusion synthesizer, experimental beat pattern, creative bass, 135 BPM, experimental innovative Latin EDM global fusion loop"}
    ]
  },
  {
    name:"Tainy", alias:"Marco Masís",
    eras:["2010s","2020s"], styles:["trap","funk","alternative"],
    region:"Other", city:"San Juan, Puerto Rico", bpm:"92–100",
    desc:"Luny Tunesに師事したプエルトリコのプロデューサー。Bad Bunny・J Balvin・Daddy Yankeeと継続的にコラボし、デムボウリズムと現代的エレクトロを融合させたレゲトンの世界制覇を後方支援する業界最重要人物の一人。",
    sounds:["デムボウリズム","エレクトロレゲトン","モダンラテンビート","ベースライン","プエルトリコサウンド","ラテントラップ"],
    artists:["Bad Bunny","J Balvin","Kali Uchis","Daddy Yankee","Ricky Martin"],
    prompts:[
      {type:"クラシック（レゲトンデムボウ）",style:"reggaeton dembow rhythm, Tainy style, Puerto Rican modern",detail:"[Instrumental] traditional dembow rhythm pattern, reggaeton bass, Puerto Rican melodic element, 95 BPM, classic Puerto Rican reggaeton dembow loop"},
      {type:"モダン（ラテントラップポップ）",style:"Latin trap pop crossover, modern global, Bad Bunny era",detail:"[Instrumental] modern Latin trap-pop synthesizer, dembow-influenced drum, 808 bass, 98 BPM, modern global Latin trap pop crossover loop"},
      {type:"実験的（ラテンエレクトロポップ）",style:"Latin electro pop fusion, experimental Puerto Rico, innovative",detail:"[Instrumental] innovative Latin electro-pop synthesizer, experimental dembow pattern, creative bass, 94 BPM, experimental innovative Latin electro pop fusion loop"}
    ]
  },
  {
    name:"Luny Tunes", alias:"Luny & Tunes",
    eras:["2000s","2010s"], styles:["funk","south","alternative"],
    region:"Other", city:"Lawrence MA / Dominican Republic", bpm:"92–100",
    desc:"「Gasolina」でレゲトンの世界制覇を決定的にしたドミニカ系デュオ。バチャータ+レゲトン=バチャトンの創出、Daddy Yankee「Gasolina」でデムボウリズムを世界に広め、現在のラテントラップの礎を作った伝説的プロダクションチーム。",
    sounds:["デムボウリズム","バチャトン","ラテンビート","Gasolinaサウンド","プエルトリコサウンド","ラテン808"],
    artists:["Daddy Yankee","Don Omar","Wisin & Yandel","Tego Calderón","Nicky Jam"],
    prompts:[
      {type:"クラシック（ガソリーナ時代レゲトン）",style:"Gasolina era reggaeton, Luny Tunes style, classic dembow",detail:"[Instrumental] classic Gasolina-era dembow rhythm, reggaeton bass, Latin percussion, energetic feel, 95 BPM, classic legendary reggaeton dembow Latin loop"},
      {type:"モダン（ラテンビートレジェンド）",style:"Latin beat legend style, modern reggaeton, classic with modern",detail:"[Instrumental] modern reggaeton with classic Luny Tunes foundation, updated dembow, 96 BPM, legendary Latin beat modern reggaeton loop"},
      {type:"実験的（バチャトンフュージョン）",style:"bachatón fusion experimental, Latin genre crossover, innovative",detail:"[Instrumental] experimental bachata meets reggaeton fusion, innovative Latin drum, 92 BPM, experimental bachatón genre-crossing Latin fusion loop"}
    ]
  },
  {
    name:"Lex Luger", alias:"Lexus Lewis",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"South", city:"Virginia / Atlanta", bpm:"130–148",
    desc:"808 Mafia共同設立者でトラップミュージックの音的設計者。TR-808キックドラムの爆発的使用・不気味なシンセライン・ハンマー的ドラム連打でWaka Flocka・Rick Ross・Jay-Zを手がけ、アトランタトラップの原型を定義した。",
    sounds:["TR-808キック","不気味シンセ","ハンマードラム","アグレッシブトラップ","808 Mafiaオリジナル","ダークエネルギー"],
    artists:["Waka Flocka Flame","Rick Ross","Kanye West","Jay-Z","Lil Wayne"],
    prompts:[
      {type:"クラシック（808 Mafiaオリジン）",style:"808 Mafia origin trap, Lex Luger style, TR-808 heavy dark",detail:"[Instrumental] heavy TR-808 kick drums, dark ominous synthesizer, hammering drum pattern, 140 BPM, original 808 Mafia dark heavy trap loop"},
      {type:"モダン（ダークトラップエボリューション）",style:"dark trap evolution, modern 808, aggressive ominous",detail:"[Instrumental] evolved dark 808 trap synthesizer, modern aggressive drum, heavy bass, 142 BPM, evolved modern aggressive dark 808 trap loop"},
      {type:"実験的（ハンマートラップアブストラクト）",style:"hammer trap abstract, extreme dark 808, aggressive experimental",detail:"[Instrumental] extreme experimental 808 hammer patterns, abstract dark synthesizer, aggressive bass, 138 BPM, extreme experimental 808 hammer dark abstract trap loop"}
    ]
  },
  {
    name:"Jhay Cortez", alias:"Jesús Manuel Nieves Cortés",
    eras:["2010s","2020s"], styles:["trap","funk","alternative"],
    region:"Other", city:"San Juan, Puerto Rico", bpm:"92–140",
    desc:"14歳から楽曲制作を始め、J Balvinの「Vibras」でグラミー受賞（2018年）・Cardi Bの「I Like It」等を手がけたプエルトリコのプロデューサー兼シンガー。ラテンアーバン界の重要な作曲家として業界を支える。",
    sounds:["ラテントラップビート","アーバンラテンサウンド","レゲトン要素","エモーショナルラテンメロ","プエルトリコストリート","グラミーレベルプロダクション"],
    artists:["J Balvin","Anuel AA","Bad Bunny","Natti Natasha","Cardi B"],
    prompts:[
      {type:"クラシック（ラテンアーバン）",style:"Latin urban trap, Jhay Cortez style, Grammy level Puerto Rico",detail:"[Instrumental] Grammy-level Latin urban trap synthesizer, Puerto Rican melodic element, dembow-trap drums, 95 BPM, Latin urban trap Grammy-quality Puerto Rico loop"},
      {type:"モダン（グローバルラテンポップトラップ）",style:"global Latin pop trap, modern Puerto Rico crossover, emotional",detail:"[Instrumental] modern global Latin pop-trap synthesizer, emotional chord, dembow-influenced drum, 140 BPM, global modern Latin pop trap emotional loop"},
      {type:"実験的（ラテンポップアーバンフュージョン）",style:"Latin pop urban fusion, experimental Puerto Rico, innovative",detail:"[Instrumental] innovative Latin pop-urban-trap fusion, experimental rhythm, creative bass, 98 BPM, experimental innovative Latin pop urban fusion Puerto Rico loop"}
    ]
  },
  {
    name:"Tarrío", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Other", city:"Colombia", bpm:"72–140",
    desc:"コロンビアのラテントラップシーンで活躍するプロデューサー。南米固有のリズム感覚と現代的なトラップを融合し、コロンビアのストリートラップとグローバルサウンドを繋ぐ重要なビートメイカー。",
    sounds:["コロンビアンリズム","ラテントラップ","ストリートビート","南米グルーヴ","モダンラテンサウンド","クロスカルチャービート"],
    artists:["コロンビア系ラッパー多数"],
    prompts:[
      {type:"クラシック（コロンビアンラテントラップ）",style:"Colombian Latin trap, South American rhythmic, street",detail:"[Instrumental] Colombian rhythmic Latin trap beat, South American groove, street bass, 140 BPM, Colombian Latin trap South American street loop"},
      {type:"モダン（グローバルコロンビアビート）",style:"global Colombian beat, modern Latin trap, cross-cultural",detail:"[Instrumental] modern global Colombian Latin synthesizer, cross-cultural drum, international bass, 142 BPM, global modern Colombian Latin trap loop"},
      {type:"実験的（ラテンアメリカンフュージョン）",style:"Latin American fusion, experimental Colombian, innovative South",detail:"[Instrumental] experimental Latin American fusion synthesizer, innovative Colombian drum pattern, creative bass, 138 BPM, experimental innovative Latin American Colombian fusion loop"}
    ]
  },
  // ===== AFRICA / NIGERIA =====
  {
    name:"Don Jazzy", alias:"Michael Collins Ajereh",
    eras:["2000s","2010s","2020s"], styles:["funk","alternative","neo soul"],
    region:"Other", city:"Lagos, Nigeria", bpm:"98–112",
    desc:"「21世紀最高のアフロビーツプロデューサー」と称されるナイジェリアの巨人。Mo'Hits Recordsを創設後2012年にMavin Recordsを設立し、Rema・Ayra Starrをグローバルスターへ押し上げた。ハイライフ・ファンク・R&Bの巧みな融合が特徴。",
    sounds:["アフロビーツリズム","ハイライフ要素","ファンクベース","R&Bメロディー","ラゴスサウンド","Mavin Recordsクオリティ"],
    artists:["D'banj","Tiwa Savage","Rema","Ayra Starr","WizKid"],
    prompts:[
      {type:"クラシック（アフロビーツゴールデンエラ）",style:"Afrobeats golden era, Don Jazzy style, highlife R&B funk",detail:"[Instrumental] highlife funk and R&B fusion, afrobeats rhythm pattern, warm bass groove, Lagos atmosphere, 104 BPM, golden era Afrobeats highlife funk loop"},
      {type:"モダン（Mavin Recordsサウンド）",style:"Mavin Records modern Afrobeats, global pop crossover, polished",detail:"[Instrumental] polished modern Afrobeats synthesizer, global pop crossover feel, warm bass, 106 BPM, Mavin Records modern polished global Afrobeats loop"},
      {type:"実験的（アフロポップフュージョン）",style:"Afro pop fusion experimental, innovative Nigerian, global",detail:"[Instrumental] innovative Nigerian Afro pop fusion, experimental rhythm pattern, creative bass, 100 BPM, experimental innovative Nigerian Afro pop global fusion loop"}
    ]
  },
  {
    name:"Sarz", alias:"Osabuohien Osaretin",
    eras:["2000s","2010s","2020s"], styles:["funk","alternative","neo soul"],
    region:"Other", city:"Benin City / Lagos, Nigeria", bpm:"100–115",
    desc:"「Sarz on the beat」のタグで知られるナイジェリア代表プロデューサー。Drake「One Dance」やBeyoncéの「Lion King: The Gift」に貢献。Sarz Academyで次世代ナイジェリア人プロデューサーを育てる教育者でもある。",
    sounds:["アフロビーツドラム","ソウルメロディー","R&Bグルーヴ","クラブビート","ハイライフ影響","グローバルサウンド"],
    artists:["Wizkid","Tems","Asake","Lojay","Beyoncé","Drake"],
    prompts:[
      {type:"クラシック（ナイジェリアアフロビーツ）",style:"Nigerian Afrobeats, Sarz style, soul R&B club groove",detail:"[Instrumental] Afrobeats drum pattern, soulful R&B melody, warm bass groove, club-ready rhythm, 106 BPM, Nigerian Afrobeats soul R&B club loop"},
      {type:"モダン（グローバルアフロビーツ）",style:"global Afrobeats, modern Beyoncé collab level, sophisticated",detail:"[Instrumental] sophisticated global Afrobeats synthesizer, modern R&B groove, 108 BPM, global sophisticated modern Afrobeats R&B loop"},
      {type:"実験的（アフロビーツグローバルフュージョン）",style:"Afrobeats global fusion, experimental Nigerian, innovative soul",detail:"[Instrumental] experimental innovative Nigerian Afrobeats global fusion, creative rhythm pattern, soul bass, 102 BPM, experimental global Nigerian Afrobeats fusion loop"}
    ]
  },
  {
    name:"Pheelz", alias:"",
    eras:["2010s","2020s"], styles:["funk","alternative","neo soul"],
    region:"Other", city:"Lagos, Nigeria", bpm:"100–118",
    desc:"ラゴス出身の万能プロデューサー。Olamideのストリートホップ・Adekunle GoldのFuji-Pop・Fireboyのデビューアルバムとジャンルを跨いだ傑作を量産。ナイジェリア音楽の多様性を体現するキープロデューサー。",
    sounds:["アフロビーツ要素","ストリートナイジャビート","Fuji-Pop融合","オルタナアフロポップ","ソウルメロディー","Lagos多様サウンド"],
    artists:["Olamide","Adekunle Gold","Fireboy DML","Tiwa Savage","Rema"],
    prompts:[
      {type:"クラシック（ナイジェリアストリートポップ）",style:"Nigerian street pop Afro, Pheelz style, Olamide era",detail:"[Instrumental] Nigerian street pop Afrobeats rhythm, soulful melodic synthesizer, warm bass, 106 BPM, Nigerian street Afrobeats soul pop loop"},
      {type:"モダン（フュージポップフュージョン）",style:"Fuji pop fusion Afrobeats, modern Nigerian genre-blend",detail:"[Instrumental] modern Fuji-pop Afrobeats fusion synthesizer, creative rhythm pattern, warm bass, 110 BPM, modern Fuji pop Afrobeats fusion Nigerian loop"},
      {type:"実験的（アフロジャンル横断）",style:"Afro genre-crossing experimental, innovative versatile Nigerian",detail:"[Instrumental] experimental innovative Nigerian multi-genre Afro fusion, versatile rhythm, creative bass, 104 BPM, experimental innovative versatile Nigerian Afro fusion loop"}
    ]
  },
  {
    name:"Masterkraft", alias:"",
    eras:["2000s","2010s","2020s"], styles:["funk","alternative"],
    region:"Other", city:"Lagos, Nigeria", bpm:"100–116",
    desc:"ナイジェリアのアフロビーツプロデューサーのなかで、最も多才かつ長いキャリアを持つ一人。Kennis Musicからスタートし、ジャンルの変遷とともに自身のスタイルを進化させ続けてきたナイジェリア音楽の生き字引。",
    sounds:["ハイライフグルーヴ","アフロポップビート","ナイジェリアリズム","ロングキャリアサウンド","Kennis Musicスタイル","多才アフロビーツ"],
    artists:["Banky W","Lynxxx","Bracket","2Baba","P-Square"],
    prompts:[
      {type:"クラシック（ナイジェリアハイライフ）",style:"Nigerian highlife pop, Masterkraft style, classic Lagos",detail:"[Instrumental] classic Nigerian highlife groove, Afrobeats drum pattern, warm melodic bass, 104 BPM, classic Nigerian highlife pop Afrobeats loop"},
      {type:"モダン（モダンアフロポップ）",style:"modern Afro pop Lagos, evolved Nigerian, polished",detail:"[Instrumental] modern polished Afro pop synthesizer, evolved Nigerian rhythm, warm bass, 108 BPM, modern polished evolved Nigerian Afro pop loop"},
      {type:"実験的（ナイジェリアグローバル）",style:"Nigerian global Afro experiment, innovative long-career, versatile",detail:"[Instrumental] innovative versatile Nigerian Afro global synthesis, experimental rhythm, 102 BPM, experimental innovative global Nigerian Afro loop"}
    ]
  },
  {
    name:"Kiddominant", alias:"",
    eras:["2010s","2020s"], styles:["funk","alternative"],
    region:"Other", city:"Lagos, Nigeria", bpm:"100–115",
    desc:"Davidoとのコンビネーションで国際的名声を得たラゴスのプロデューサー。「Fall」のBillboard Hot 100 29週滞在記録はナイジェリア人として史上最長で、アフロビーツを世界規模に押し上げた歴史的なビートを手がけた。",
    sounds:["Davidoサウンド","アフロダンスホール","グローバルアフロビーツ","ダンスホールリズム","Billboard品質ビート","ラゴスクラブ"],
    artists:["Davido","WizKid","Beyoncé","Chris Brown","Tiwa Savage"],
    prompts:[
      {type:"クラシック（DavidoアフロダンスホールFall）",style:"Afro dancehall, Kiddominant Davido style, Billboard hit quality",detail:"[Instrumental] Afro dancehall rhythm pattern, melodic synthesizer, warm bass groove, club-ready feel, 106 BPM, Afro dancehall Billboard-hit quality loop"},
      {type:"モダン（グローバルアフロダンス）",style:"global Afro dance, modern crossover, international hit",detail:"[Instrumental] international Afro dance synthesizer, global crossover drum, warm bass, 108 BPM, global modern Afro dance international hit loop"},
      {type:"実験的（アフロポップグローバルフュージョン）",style:"Afro pop global fusion, experimental international Nigerian",detail:"[Instrumental] experimental international Nigerian Afro pop fusion synthesizer, creative rhythm, 102 BPM, experimental global Nigerian Afro pop fusion innovative loop"}
    ]
  },
  // ===== CANADA =====
  {
    name:"Noah \"40\" Shebib", alias:"40",
    eras:["2010s","2020s"], styles:["alternative","neo soul","lo-fi"],
    region:"Other", city:"Toronto, Canada", bpm:"70–95",
    desc:"Drake・Oliver El-KhatibとともにOVOレーベルを共同設立したトロントのレジェンド。2008年以来Drakeのほぼ全作品を手がけ、霧がかったような靄感のあるアトモスフェリックR&B/ヒップホップサウンド「OVOサウンド」を世界に輸出した。",
    sounds:["アトモスフェリックパッド","靄感のあるR&B","OVOサウンド","エモーショナルシンセ","ロウキーベース","霧のトロントバイブ"],
    artists:["Drake (全作品)","The Weeknd","PartyNextDoor","Majid Jordan"],
    prompts:[
      {type:"クラシック（OVOアトモスフェリック）",style:"OVO atmospheric hip hop, 40 style, misty Toronto R&B",detail:"[Instrumental] misty atmospheric R&B synthesizer, slow OVO-style drum pattern, emotional bass, ambient pad, 80 BPM, atmospheric misty OVO Toronto hip hop loop"},
      {type:"モダン（ドレークエラサウンド）",style:"Drake era sound, modern OVO R&B hip hop, emotional cloud",detail:"[Instrumental] modern OVO emotional cloud synthesizer, slow hip hop drum, atmospheric bass, 82 BPM, modern Drake era atmospheric OVO hip hop loop"},
      {type:"実験的（アンビエントR&Bアトモ）",style:"ambient R&B atmospheric, experimental OVO, dreamy misty",detail:"[Instrumental] experimental ambient dreamy R&B synthesis, minimalist OVO drum, atmospheric deep bass, 78 BPM, ambient experimental misty OVO R&B hip hop loop"}
    ]
  },
  {
    name:"Boi-1da", alias:"Matthew Samuels",
    eras:["2000s","2010s","2020s"], styles:["boom bap","trap","alternative"],
    region:"Other", city:"Kingston, Jamaica / Toronto, Canada", bpm:"85–145",
    desc:"ジャマイカ出身のカナダ拠点プロデューサー。2006年からDrakeを初期から支え、Eminem・Kendrick Lamar・J. Coleとも多数の名作を手がける。WondaGurl・T-Minusら後進を引き上げトロントの音楽産業全体を底上げした。",
    sounds:["ハードドラム","ブームバップ×トラップ","東海岸バイブ","ジャマイカ影響","グラミーレベルビート","トロントプライド"],
    artists:["Drake","Eminem","Kendrick Lamar","J. Cole","Meek Mill","Jay-Z"],
    prompts:[
      {type:"クラシック（カナダブームバップ）",style:"Canadian boom bap hip hop, Boi-1da style, hard-hitting versatile",detail:"[Instrumental] hard-hitting versatile boom bap drum, soulful sample, deep bass, Toronto underground vibe, 90 BPM, Canadian hard boom bap versatile hip hop loop"},
      {type:"モダン（グローバルヒットプロデューサー）",style:"global hit producer style, modern versatile, Grammy-level Canadian",detail:"[Instrumental] Grammy-level modern versatile synthesizer, crisp drum pattern, powerful bass, 92 BPM, Grammy-quality modern Canadian global hip hop loop"},
      {type:"実験的（カリビアンカナダフュージョン）",style:"Caribbean Canadian hip hop fusion, experimental Jamaican-Toronto",detail:"[Instrumental] experimental Jamaican-Toronto hip hop fusion, creative drum pattern, innovative bass, 88 BPM, experimental Caribbean Canadian hip hop fusion loop"}
    ]
  },
  {
    name:"WondaGurl", alias:"Ebony Oshunrinde",
    eras:["2010s","2020s"], styles:["trap","alternative","boom bap"],
    region:"Other", city:"Toronto, Canada", bpm:"130–155",
    desc:"9歳からビート制作を始め16歳でJay-Z・Travis Scottのアルバムにクレジットされた天才。カナダ最重要の女性ビートメイカーとして業界を切り開き、女性プロデューサーの先駆けとしての存在感は世界的にも大きい。",
    sounds:["ハードヒットトラップ","808ベース","アトモスフェリックパッド","クリスプドラム","WondaGurlタグ","アグレッシブビート"],
    artists:["Travis Scott","Jay-Z","SZA","Drake","Rihanna"],
    prompts:[
      {type:"クラシック（天才16歳トラップ）",style:"prodigy trap, WondaGurl style, Jay-Z level quality hard hitting",detail:"[Instrumental] Jay-Z level quality trap beat, aggressive synthesizer, heavy 808 bass, crisp hard drum, 145 BPM, prodigy Canadian female trap hard-hitting loop"},
      {type:"モダン（パワフルフィメールトラップ）",style:"powerful female trap, modern Canadian, aggressive atmospheric",detail:"[Instrumental] powerful atmospheric trap synthesizer, aggressive drum pattern, heavy 808, 148 BPM, modern powerful female Canadian trap loop"},
      {type:"実験的（ガラスの天井ブレイカー）",style:"glass ceiling breaker trap, experimental innovative female, pioneering",detail:"[Instrumental] pioneering innovative female trap synthesizer, experimental drum programming, creative 808 bass, 142 BPM, pioneering experimental innovative female trap loop"}
    ]
  },
  {
    name:"Frank Dukes", alias:"Adam Feeney",
    eras:["2010s","2020s"], styles:["lo-fi","jazzy","boom bap"],
    region:"Other", city:"Toronto, Canada", bpm:"75–100",
    desc:"DJ・Pete Rock・RZAを研究し独自のサンプリング哲学を構築したトロントのプロデューサー。Kingsway Music Libraryを創設しライブミュージシャンによるサンプルループをアーティストに提供するという革新的サービスを展開。",
    sounds:["Kingsway Music Libraryサンプル","ソウルフルサンプリング","ライブ録音ループ","ウォームテクスチャー","ヴィンテージグルーヴ","オーガニックフィール"],
    artists:["Drake","Travis Scott","Kanye West","Frank Ocean","Post Malone"],
    prompts:[
      {type:"クラシック（Kingswayライブサンプル）",style:"Kingsway Music Library live sample, Frank Dukes warm vintage",detail:"[Instrumental] warm live-recorded Kingsway sample, organic drum groove, vintage bass feel, soulful chord progression, 82 BPM, Kingsway warm vintage soulful hip hop loop"},
      {type:"モダン（ライブサンプルモダン）",style:"live sample modern hip hop, innovative Toronto, warm organic",detail:"[Instrumental] modern warm live sample application, clean organic drum, smooth bass, 85 BPM, modern innovative live sample warm organic Toronto hip hop loop"},
      {type:"実験的（ライブサンプルイノベーション）",style:"live sample innovation, experimental Kingsway, pioneering Toronto",detail:"[Instrumental] pioneering experimental Kingsway live sample, innovative drum programming, warm creative bass, 80 BPM, experimental innovative live sample Toronto hip hop loop"}
    ]
  },
  // ===== AUSTRALIA =====
  {
    name:"M-Phazes", alias:"Mark Landon",
    eras:["2000s","2010s","2020s"], styles:["boom bap","neo soul","alternative"],
    region:"Other", city:"Gold Coast / Los Angeles", bpm:"84–100",
    desc:"ゴールドコースト出身でLAを拠点とするオーストラリア最高峰プロデューサー。Eminem「Bad Guy」でグラミー受賞、ARIA Awards5部門制覇という前人未到の記録を持つ。ヒップホップからポップまで越境するマルチタレント。",
    sounds:["ネオソウルブームバップ","グラミーレベルビート","ARIAアウォードサウンド","ウォームメロディー","LAオーストラリア融合","クリーンプロダクション"],
    artists:["Eminem","Logic","Madonna","Demi Lovato","Amy Shark","Ruel","Kimbra"],
    prompts:[
      {type:"クラシック（オーストラリアンブームバップ）",style:"Australian boom bap neo soul, M-Phazes Grammy quality warm",detail:"[Instrumental] Grammy-quality warm Australian boom bap drum, neo soul sample, smooth bass, 88 BPM, Australian warm neo soul boom bap Grammy-level loop"},
      {type:"モダン（グラミーARIAマルチジャンル）",style:"Grammy ARIA multi-genre, modern Australian global, versatile",detail:"[Instrumental] versatile modern global Australian synthesizer, clean drum pattern, warm bass, 90 BPM, Grammy ARIA modern versatile Australian global hip hop loop"},
      {type:"実験的（ゴールドコーストLA融合）",style:"Gold Coast LA fusion, experimental Australian-American, global",detail:"[Instrumental] experimental Gold Coast-LA sonic fusion, innovative drum, creative bass, 86 BPM, experimental Australian-American global fusion hip hop loop"}
    ]
  },
  {
    name:"Hau Latukefu", alias:"Koolism",
    eras:["90s","2000s","2010s"], styles:["boom bap","underground","alternative"],
    region:"Other", city:"Australia", bpm:"85–96",
    desc:"オーストラリアン・ヒップホップのパイオニアで伝説的デュオKoolismの一員。ソロキャリアと並行してTriple Jのヒップホップ番組最長ホストを務め、オーストラリアのヒップホップ文化を育て続けてきた文化的功労者。",
    sounds:["オーストラリアンヒップホップ","コンシャスビート","ブームバップドラム","ローカルバイブ","Triple Jサウンド","アンダーグラウンドオズ"],
    artists:["Koolism (デュオパートナー)","Triple J関連","オーストラリアMC多数"],
    prompts:[
      {type:"クラシック（オーストラリアンアンダーグラウンド）",style:"Australian underground hip hop, Koolism conscious, boom bap",detail:"[Instrumental] Australian conscious boom bap drum, underground sample, Triple J vibe, 88 BPM, Australian underground conscious boom bap hip hop loop"},
      {type:"モダン（オズコンシャスホップ）",style:"Oz conscious hip hop, modern Australian underground, authentic",detail:"[Instrumental] modern authentic Australian conscious hip hop beat, clean drum, underground bass, 90 BPM, modern Australian conscious underground hip hop loop"},
      {type:"実験的（オーストラリアンアイデンティティビート）",style:"Australian identity hip hop, experimental local culture, unique",detail:"[Instrumental] experimental Australian identity hip hop, unique local culture sonic, creative drum, 86 BPM, experimental Australian identity local culture hip hop loop"}
    ]
  },
  {
    name:"Dialectrix", alias:"",
    eras:["2000s","2010s"], styles:["boom bap","underground","alternative"],
    region:"Other", city:"Australia", bpm:"84–96",
    desc:"Obese Records所属のオーストラリアンアーティスト。「アフリカ中心的ヒップホップ文化とオーストラリア文化のモングレルなミューテーション」と表現するUK・USの影響を独自フィルターで消化したユニークなスタイルを持つ。",
    sounds:["オーストラリアンアンダーグラウンド","アフリカセントリックビート","Obese Recordsサウンド","ユニーク文化融合","コンシャスビート","ロウエネルギー"],
    artists:["Obese Records所属アーティスト多数"],
    prompts:[
      {type:"クラシック（アフロセントリックオズ）",style:"Afrocentric Australian hip hop, underground mongrel, Obese Records",detail:"[Instrumental] Afrocentric influenced Australian underground drum, culture-blended sample, raw bass, 86 BPM, Afrocentric underground Australian Obese Records hip hop loop"},
      {type:"モダン（クロスカルチャービート）",style:"cross-cultural Australian hip hop, modern mongrel fusion, unique",detail:"[Instrumental] unique cross-cultural Australian hip hop synthesizer, modern drum, fusion bass, 88 BPM, cross-cultural modern unique Australian hip hop loop"},
      {type:"実験的（モングレルフュージョン）",style:"mongrel fusion experimental, unique Australian cultural, abstract",detail:"[Instrumental] abstract mongrel cultural fusion, experimental Australian drum, creative bass, 84 BPM, abstract experimental mongrel Australian cultural fusion hip hop loop"}
    ]
  },
  {
    name:"Mantra", alias:"",
    eras:["2010s","2020s"], styles:["boom bap","alternative","underground"],
    region:"Other", city:"Australia", bpm:"86–96",
    desc:"メルボルン/シドニー発のクリーンなヒップホッププロダクションで知られるオーストラリアのプロデューサー。Illyとの「Bring It Back」アルバムなどコンシャスなラップを支えるソウルフルなビートで国内高い評価を得る。",
    sounds:["クリーンオーストラリアビート","コンシャスヒップホップサウンド","ソウルフルビート","Illyコラボサウンド","クリーンプロダクション","メルボルンバイブ"],
    artists:["Illy","Pez","Trials","オーストラリアンコンシャスラッパー"],
    prompts:[
      {type:"クラシック（オーストラリアンコンシャス）",style:"Australian conscious hip hop, Mantra clean soulful, Illy era",detail:"[Instrumental] clean soulful Australian conscious hip hop drum, sample loop, warm bass, 88 BPM, clean soulful Australian conscious Illy-era hip hop loop"},
      {type:"モダン（クリーンアウォードクオリティ）",style:"clean award-quality Australian hip hop, modern polished conscious",detail:"[Instrumental] polished modern Australian conscious synthesizer, clean drum pattern, warm bass, 90 BPM, award-quality modern clean Australian conscious hip hop loop"},
      {type:"実験的（オーストラリアンインディーコンシャス）",style:"Australian indie conscious hip hop, experimental, unique local",detail:"[Instrumental] experimental unique Australian indie conscious production, creative drum, local bass, 86 BPM, experimental indie conscious unique Australian hip hop loop"}
    ]
  },
  {
    name:"Calski", alias:"",
    eras:["2010s","2020s"], styles:["boom bap","neo soul","alternative"],
    region:"Other", city:"Australia", bpm:"82–97",
    desc:"「オーストラリアで最も革新的なプロデューサー」と称されるビートメイカー。スムースなソウルからラギッドなブームバップまでシームレスに移行できる職人的な柔軟性が最大の強み。国内先進的音楽シーンを牽引。",
    sounds:["スムースソウル","ラギッドブームバップ","シームレス移行","革新的テクスチャー","オーストラリアン前衛","多様スタイル"],
    artists:["オーストラリア先進的アーティスト多数"],
    prompts:[
      {type:"クラシック（スムースソウルブームバップ）",style:"smooth soul boom bap, Calski Australian innovative, versatile",detail:"[Instrumental] smooth soul sample, versatile boom bap drum, warm bass, seamless texture, 86 BPM, smooth soul boom bap innovative Australian loop"},
      {type:"モダン（イノベーティブオーストラリアン）",style:"innovative Australian hip hop, modern progressive, versatile",detail:"[Instrumental] progressive innovative synthesizer, modern versatile drum pattern, smooth bass, 88 BPM, innovative progressive modern Australian hip hop loop"},
      {type:"実験的（ラギッドスムースフュージョン）",style:"rugged smooth fusion experimental, Australian progressive, unique",detail:"[Instrumental] experimental rugged-smooth fusion, unique Australian creative drum, versatile bass, 84 BPM, experimental rugged-smooth fusion progressive Australian hip hop loop"}
    ]
  },
  // ===== OTHER ASIA =====
  {
    name:"Youngohm", alias:"Ratthaphong Phoorisit",
    eras:["2010s","2020s"], styles:["trap","alternative"],
    region:"Other", city:"Bangkok, Thailand", bpm:"130–145",
    desc:"タイのヒップホップシーンを牽引するバンコク出身のラッパー兼プロデューサー。中学時代から楽曲制作を始め、2019年の「Do White」はリリース2週間で5500万回再生を突破。タイ語ラップと現代トラップビートを融合した先駆者。",
    sounds:["タイ語トラップビート","モダンシンセ","808ベース","バンコクストリートバイブ","東南アジアサウンド","アジアントラップ"],
    artists:["FIIXD","タイシーン全般"],
    prompts:[
      {type:"クラシック（タイトラップ）",style:"Thai trap hip hop, Youngohm style, Bangkok street modern",detail:"[Instrumental] modern Thai trap synthesizer, 808 bass, Bangkok street atmosphere, crisp drum pattern, 140 BPM, Thai trap Bangkok urban hip hop loop"},
      {type:"モダン（アジアントラップポップ）",style:"Asian trap pop, modern Thai crossover, viral Southeast Asia",detail:"[Instrumental] viral Southeast Asian trap pop synthesizer, modern drum, 808 bass, 142 BPM, modern viral Asian trap pop hip hop loop"},
      {type:"実験的（サウスイーストアジアウェイブ）",style:"Southeast Asia wave, experimental Thai trap, regional innovative",detail:"[Instrumental] experimental Southeast Asian trap wave synthesizer, innovative drum pattern, creative 808, 138 BPM, experimental SE Asian wave innovative Thai trap loop"}
    ]
  },
  {
    name:"FIIXD", alias:"",
    eras:["2010s","2020s"], styles:["trap","underground","alternative"],
    region:"Other", city:"Khon Kaen / Bangkok, Thailand", bpm:"130–145",
    desc:"コーンケーン出身でバンコクに移住した映像学奨学生出身の多才なアーティスト。自身のMVを自ら監督する映像と音楽の二刀流でタイアンダーグラウンドシーンの重要人物となり、The Rapper TVshowでブレイク。",
    sounds:["タイアンダーグラウンドビート","インディービート","映像的サウンド","ローカルタイバイブ","エクスペリメンタル要素","バンコクアンダー"],
    artists:["Youngohm","タイアンダーグラウンド全般"],
    prompts:[
      {type:"クラシック（タイアンダーグラウンドトラップ）",style:"Thai underground trap, FIIXD indie filmmaker style",detail:"[Instrumental] Thai underground trap synthesizer, indie-filmmaker atmospheric, dark drum pattern, 140 BPM, Thai underground indie dark trap loop"},
      {type:"モダン（ビジュアルアーティストビート）",style:"visual artist hip hop beat, cinematic Thai underground, creative",detail:"[Instrumental] cinematic Thai underground hip hop synthesizer, creative atmospheric drum, 142 BPM, cinematic creative Thai underground hip hop loop"},
      {type:"実験的（タイインディーアートビート）",style:"Thai indie art beat, experimental visual sound, innovative",detail:"[Instrumental] innovative experimental Thai indie art sound, visual-inspired drum, creative bass, 138 BPM, experimental innovative Thai indie art hip hop loop"}
    ]
  },
  {
    name:"DIVINE", alias:"Vivian Fernandes",
    eras:["2010s","2020s"], styles:["boom bap","underground","alternative"],
    region:"Other", city:"Mumbai, India", bpm:"88–140",
    desc:"インドのヒップホップ（Gully Rap）を世界に知らしめた立役者。ムンバイのスラム街から這い上がりNaezyとの「Mere Gully Mein」が映画「Gully Boy」の原案に。アジア音楽チャートを席巻するインドヒップホップの象徴的存在。",
    sounds:["ムンバイストリートビート","Gullyラップサウンド","ヒンディー語×英語バイリンガル","ボリウッド要素","インドストリートバイブ","コンシャスビート"],
    artists:["Naezy","映画Gully Boy関連","Mass Appeal India","Divine本人"],
    prompts:[
      {type:"クラシック（Gullyラップムンバイ）",style:"Gully Rap Mumbai, DIVINE style, Indian street hip hop",detail:"[Instrumental] Mumbai street hip hop beat, Gully rap drum pattern, deep bass, Indian urban atmosphere, 90 BPM, Mumbai Gully rap street hip hop loop"},
      {type:"モダン（インドヒップホップグローバル）",style:"Indian hip hop global, modern Mumbai, Bollywood crossover",detail:"[Instrumental] modern Indian hip hop synthesizer, global drum pattern, Bollywood influence, warm bass, 92 BPM, modern global Indian hip hop Bollywood crossover loop"},
      {type:"実験的（インドストリートカルチャービート）",style:"Indian street culture beat, experimental Gully, multicultural",detail:"[Instrumental] experimental multicultural Indian hip hop fusion, street culture drum, creative bass, 88 BPM, experimental multicultural Indian street culture hip hop loop"}
    ]
  },
  {
    name:"Ramengvrl", alias:"Rachel Mulia",
    eras:["2010s","2020s"], styles:["trap","alternative","neo soul"],
    region:"Other", city:"Jakarta, Indonesia", bpm:"130–150",
    desc:"ジャカルタ出身の女性ラッパー兼プロデューサー。東南アジアでは希少な女性MCとしての存在感を発揮し、トラップとR&Bを自在に操るマルチタレント。英語・インドネシア語バイリンガルでインドネシアのヒップホップシーンに新風を吹き込む。",
    sounds:["インドネシアトラップ","R&Bフュージョン","バイリンガルビート","東南アジアフィメール","モダンシンセ","ジャカルタストリート"],
    artists:["東南アジアヒップホップシーン全般"],
    prompts:[
      {type:"クラシック（インドネシアフィメールトラップ）",style:"Indonesian female trap hip hop, Ramengvrl bilingual R&B",detail:"[Instrumental] Indonesian trap synthesizer, female artist energy, R&B trap drum pattern, 140 BPM, Indonesian female trap R&B bilingual hip hop loop"},
      {type:"モダン（SEアジアフィメールトラップ）",style:"SE Asia female trap, modern Jakarta, bilingual trendsetting",detail:"[Instrumental] modern SE Asian female trap synthesizer, Jakarta urban drum, 808 bass, 142 BPM, modern SE Asian female trendsetting trap loop"},
      {type:"実験的（インドネシアR&Bトラップフュージョン）",style:"Indonesian R&B trap fusion, experimental bilingual, innovative",detail:"[Instrumental] experimental bilingual Indonesian R&B trap fusion synthesizer, creative drum, 138 BPM, experimental innovative Indonesian R&B trap fusion loop"}
    ]
  }
];

async function main() {
  const SQL = await initSqlJs();
  if (!fs.existsSync(DB)) { console.error('DBファイルが見つかりません:', DB); process.exit(1); }
  const db = new SQL.Database(fs.readFileSync(DB));
  let inserted = 0;
  for (const p of PRODUCERS) {
    const ex = db.exec('SELECT id FROM producers WHERE name=?', [p.name]);
    if (ex.length && ex[0].values.length) { console.log(`スキップ（既存）: ${p.name}`); continue; }
    db.run(
      'INSERT INTO producers (name,alias,eras,styles,region,city,bpm,desc,sounds,artists,prompts,is_custom) VALUES (?,?,?,?,?,?,?,?,?,?,?,0)',
      [p.name, p.alias||'', JSON.stringify(p.eras), JSON.stringify(p.styles),
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
