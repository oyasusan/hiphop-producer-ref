'use strict';
const MODULE_PATH = '/home/yasuosanlkz/hiphop-modules/node_modules';
const initSqlJs  = require(MODULE_PATH + '/sql.js');
const path       = require('path');
const fs         = require('fs');

const DB = path.join(__dirname, 'producers.db');

const PRODUCERS = [
  {
    name:"Marley Marl", alias:"",
    eras:["80s","90s"], styles:["boom bap","underground"],
    region:"East Coast", city:"Queensbridge, NY", bpm:"90–102",
    desc:"ヒップホップにドラムサンプリングという技法をもたらした革命児。クイーンズブリッジのJuice Crewを率いてLL Cool J・Big Daddy Kaneらをプロデュースし、1980年代後半の黄金期を音響的に定義した歴史的プロデューサー。",
    sounds:["ドラムサンプルパイオニア","ソウルループ","クリーンスネア","ブラスサンプル","Juice Crewサウンド","80s NYビート"],
    artists:["LL Cool J","Big Daddy Kane","MC Shan","Biz Markie","Kool G Rap"],
    prompts:[
      {type:"クラシック（80s NYパイオニア）",style:"80s New York hip hop pioneer, Juice Crew, early boom bap sampling",detail:"[Instrumental] early sampled drum break, soulful brass loop, clean NY hip hop beat, deep bass, 94 BPM, 80s pioneering New York hip hop loop"},
      {type:"モダン（ゴールデンエラリバイバル）",style:"golden era revival hip hop, classic NY sound, boom bap",detail:"[Instrumental] classic boom bap drum pattern, soul sample loop, warm bass groove, 96 BPM, golden era revival New York hip hop loop"},
      {type:"実験的（ピュアサンプリング）",style:"pure sampling hip hop, original drum break manipulation, experimental classic",detail:"[Instrumental] drum break sample manipulation, layered soul fragments, deep bass, 92 BPM, experimental pure sampling classic hip hop loop"}
    ]
  },
  {
    name:"Large Professor", alias:"Extra P",
    eras:["90s","2000s","2010s"], styles:["boom bap","jazzy","underground"],
    region:"East Coast", city:"Queens, NY", bpm:"86–96",
    desc:"Nasのデビュー作「Illmatic」（1994）に参加し名を永遠に刻んだプロデューサー。Main Sourceの「Breaking Atoms」とともにNY黄金期を定義。R&B・ジャズ・ファンクを巧みにサンプリングした温かみのあるビートが特徴。",
    sounds:["ソウルフルサンプル","ジャズフラグメント","レイドバックドラム","ウォームベース","ファンクグルーヴ","ヴィンテージテクスチャー"],
    artists:["Nas","Main Source","Rakim","Eric B.","A Tribe Called Quest"],
    prompts:[
      {type:"クラシック（イルマティック期NYビート）",style:"Illmatic era New York boom bap, jazzy soulful, golden age",detail:"[Instrumental] warm jazz and soul sample chops, laid-back boom bap drum groove, deep bass, jazzy chord stabs, 90 BPM, golden age New York soulful hip hop loop"},
      {type:"モダン（ゴールデンエラジャズホップ）",style:"golden era jazz hip hop, modern clean, soulful warm",detail:"[Instrumental] clean jazz sample loop, punchy boom bap drums, smooth bass groove, 92 BPM, modern clean golden era jazz hip hop loop"},
      {type:"実験的（ネオジャズブームバップ）",style:"neo jazz boom bap, experimental warm, NY underground",detail:"[Instrumental] experimental jazz sample processing, neo boom bap drums, warm bass texture, 88 BPM, neo jazz experimental underground NY hip hop loop"}
    ]
  },
  {
    name:"DJ Shadow", alias:"Josh Davis",
    eras:["90s","2000s","2010s"], styles:["alternative","lo-fi","underground"],
    region:"West Coast", city:"Davis, CA", bpm:"82–100",
    desc:"デビューアルバム「Endtroducing...」（1996）がギネスに「史上初の完全サンプルアルバム」として認定されたカリフォルニアのプロデューサー。ファンク・ロック・ヒップホップ・アンビエントを多層融合したシネマティックなビートで知られる。",
    sounds:["多層サンプル","シネマティックテクスチャー","ヴィニールループ","ロック要素","アンビエントパッド","実験的ドラム"],
    artists:["UNKLE","Cut Chemist","Blackalicious","Radiohead"],
    prompts:[
      {type:"クラシック（エンドロデューシング）",style:"Endtroducing era sample hip hop, cinematic abstract, multi-genre",detail:"[Instrumental] multi-layered vinyl sample collage, cinematic atmospheric textures, abstract drum pattern, 88 BPM, cinematic abstract multi-genre hip hop loop"},
      {type:"モダン（トリップホップシネマ）",style:"trip hop cinematic, modern abstract hip hop, atmospheric",detail:"[Instrumental] atmospheric trip hop textures, slow heavy drums, cinematic synthesizer, ambient bass, 84 BPM, modern cinematic trip hop abstract loop"},
      {type:"実験的（アブストラクトヴィニール）",style:"abstract vinyl collage, experimental multi-source sampling, avant-garde",detail:"[Instrumental] abstract vinyl collage from diverse sources, experimental drum manipulation, atmospheric textures, 80 BPM, avant-garde abstract vinyl collage hip hop loop"}
    ]
  },
  {
    name:"El-P", alias:"Jaime Meline",
    eras:["90s","2000s","2010s","2020s"], styles:["alternative","underground","experimental"],
    region:"East Coast", city:"Brooklyn, NY", bpm:"88–145",
    desc:"Company Flowで台頭しDef Jux Recordsを設立したインディーヒップホップの最重要人物。現在はKiller MikeとのデュオRun the Jewelsで活動。SFパラノイアと政治的サブテキストが込められた密度の高いインダストリアルサウンドが特徴。",
    sounds:["インダストリアルシンセ","ノイズ要素","密度の高いドラム","ディストーション","SF的テクスチャー","アグレッシブベース"],
    artists:["Killer Mike (Run the Jewels)","Aesop Rock","Cage","Mr. Lif","Cannibal Ox"],
    prompts:[
      {type:"クラシック（インダストリアルインディーラップ）",style:"industrial indie hip hop, dense aggressive, El-P style, distorted",detail:"[Instrumental] distorted industrial synthesizer, dense complex drum programming, aggressive bass, noise elements, 92 BPM, dense industrial indie hip hop loop"},
      {type:"モダン（RTJ スタイル）",style:"Run the Jewels style aggressive hip hop, modern industrial, hard",detail:"[Instrumental] hard aggressive synthesizer, heavy industrial drums, powerful bass, chaotic energy, 140 BPM, aggressive Run the Jewels style modern hip hop loop"},
      {type:"実験的（ノイズポリティカル）",style:"noise political hip hop, experimental chaotic, avant-garde aggressive",detail:"[Instrumental] chaotic noise collage, distorted political energy, abstract drum patterns, 95 BPM, experimental noise political aggressive hip hop loop"}
    ]
  },
  {
    name:"Black Milk", alias:"Curtis Cross",
    eras:["2000s","2010s","2020s"], styles:["boom bap","neo soul","underground"],
    region:"Midwest", city:"Detroit, MI", bpm:"86–98",
    desc:"デトロイトのラッパー兼プロデューサー。J Dilla精神を継承しつつ独自のハードエッジを加えたデトロイト流ブームバップを体現。Royce da 5'9やDanny Brown、Slum Villageなど同世代の重要アーティストと多数コラボ。",
    sounds:["ハードドラム","デトロイトビート","ソウルサンプル","ダークグルーヴ","J Dilla継承サウンド","ライブドラム要素"],
    artists:["Royce da 5'9","Danny Brown","Slum Village","Guilty Simpson","Elzhi"],
    prompts:[
      {type:"クラシック（デトロイトハードブームバップ）",style:"Detroit hard boom bap, J Dilla influenced, dark soulful",detail:"[Instrumental] hard Detroit boom bap drums, dark soul sample loop, deep bass groove, gritty urban texture, 90 BPM, hard dark Detroit boom bap hip hop loop"},
      {type:"モダン（ネオソウルブームバップ）",style:"neo soul boom bap Detroit, modern organic, soulful hard",detail:"[Instrumental] neo soul sample with hard Detroit drums, live drum elements, deep bass, 92 BPM, modern neo soul hard Detroit boom bap loop"},
      {type:"実験的（デトロイトアブストラクト）",style:"Detroit abstract hip hop, experimental dark soul, underground",detail:"[Instrumental] abstract dark soul sample manipulation, complex Detroit drum pattern, deep bass, 88 BPM, abstract experimental dark Detroit hip hop loop"}
    ]
  },
  {
    name:"Havoc", alias:"Kejuan Muchita",
    eras:["90s","2000s","2010s"], styles:["boom bap","underground"],
    region:"East Coast", city:"Queensbridge, NY", bpm:"87–97",
    desc:"Mobb Deepのメンバーとして「The Infamous」（1995）「Hell on Earth」を手がけ、東海岸ハードコアの金字塔を打ち立てた。「Shook Ones Pt.2」は出典を長年秘密にした謎のサンプルと殺伐としたビート美学で伝説的。",
    sounds:["冷徹なシンセループ","重いキック","鋭いスネア","殺伐としたテクスチャー","QueensbridgeバイブNY寒冬感","低音ベース"],
    artists:["Prodigy (Mobb Deep)","Nas","Jay-Z","Big Noyd","Raekwon"],
    prompts:[
      {type:"クラシック（クイーンズブリッジハードコア）",style:"Queensbridge hardcore hip hop, dark gritty boom bap, Mobb Deep",detail:"[Instrumental] cold and ominous synthesizer loop, heavy kick and sharp snare, gritty Queensbridge atmosphere, dark bass, 90 BPM, Queensbridge hardcore dark boom bap loop"},
      {type:"モダン（イーストコーストダーク）",style:"East Coast dark hip hop, modern grimy boom bap, hard",detail:"[Instrumental] dark grimy sample loop, hard punchy drum pattern, cold bass, urban danger atmosphere, 92 BPM, modern dark East Coast grimy boom bap loop"},
      {type:"実験的（ホラーブームバップ）",style:"horror boom bap, extremely dark, ominous underground",detail:"[Instrumental] horror-esque dark synthesizer, heavy ominous drums, cold deep bass, 88 BPM, extreme dark horror underground boom bap loop"}
    ]
  },
  {
    name:"Organized Noize", alias:"Rico Wade / Ray Murray / Sleepy Brown",
    eras:["90s","2000s"], styles:["south","alternative","funk"],
    region:"South", city:"East Point, GA", bpm:"91–107",
    desc:"OutKastとGoodie Mobの全デビューアルバムを手がけ、南部ヒップホップ台頭の礎を築いたアトランタの伝説的プロダクションチーム。母親の地下室「Dungeon」から出発し、TLC「Waterfalls」等の超メガヒットも生んだ。",
    sounds:["ソウルループ","ライブインストゥルメント","Dungeonサウンド","サザングルーヴ","オーガニックファンク","メロウビート"],
    artists:["OutKast","Goodie Mob","TLC","Ludacris","Witchdoctor"],
    prompts:[
      {type:"クラシック（アトランタダンジョンサウンド）",style:"Atlanta Dungeon sound hip hop, Southern soulful organic, OutKast",detail:"[Instrumental] organic soul sample, warm Southern groove drum pattern, funky bass line, Dungeon Family atmosphere, 96 BPM, Atlanta Dungeon soulful Southern hip hop loop"},
      {type:"モダン（サザンオルタナソウル）",style:"Southern alternative soul hip hop, organic warm, funky",detail:"[Instrumental] warm soul sample loop, Southern organic drum feel, funky bass, melodic Southern vibe, 98 BPM, modern Southern alternative soul hip hop loop"},
      {type:"実験的（サザンサイケソウル）",style:"Southern psychedelic soul hip hop, experimental Dungeon, organic",detail:"[Instrumental] psychedelic soul sample layers, organic experimental drum feel, deep Southern bass, 93 BPM, Southern psychedelic soul experimental hip hop loop"}
    ]
  },
  {
    name:"Swizz Beatz", alias:"Kasseem Dean",
    eras:["90s","2000s","2010s","2020s"], styles:["boom bap","funk"],
    region:"East Coast", city:"Bronx, NY", bpm:"88–106",
    desc:"ブロンクス出身で16歳から制作を始め、18歳でDMXのRuff Ryders Anthemを爆発させた天才。サンプリング不使用のライブキーボード主体でNY東海岸ラップの新方言を確立。多分野でも活躍するユニークなアーティスト。",
    sounds:["ライブキーボード","ハードドラム","アンセムビート","アグレッシブシンセ","ミニマルループ","NYストリートエネルギー"],
    artists:["DMX","Jay-Z","Nas","Kanye West","Beyoncé","Lil Wayne"],
    prompts:[
      {type:"クラシック（ラフライダーズアンセム）",style:"Ruff Ryders anthem style, NY aggressive hip hop, hard keyboard",detail:"[Instrumental] hard-hitting keyboard loop, aggressive drum pattern, deep bass, NY street energy, powerful anthem feel, 96 BPM, Ruff Ryders hard New York hip hop loop"},
      {type:"モダン（ブロンクスバンガー）",style:"Bronx banger hip hop, hard energetic, keyboard-driven",detail:"[Instrumental] punchy keyboard riff, heavy drum programming, deep bass hits, energetic NY vibe, 98 BPM, hard Bronx banger hip hop keyboard-driven loop"},
      {type:"実験的（ノーサンプルビート）",style:"no-sample hip hop, live keyboard only, experimental NY",detail:"[Instrumental] purely live keyboard-generated beat, no sampling, hard drum programming, innovative bass, 94 BPM, experimental live keyboard-only New York hip hop loop"}
    ]
  },
  {
    name:"Mike Dean", alias:"",
    eras:["90s","2000s","2010s","2020s"], styles:["south","alternative","trap"],
    region:"South", city:"Houston, TX", bpm:"82–145",
    desc:"テキサス出身のマルチタレント（プロデューサー・ミキシングエンジニア・マスタリング・鍵盤奏者）。Scarface・Geto Boysで南部ラップの基盤を作り、Kanye West全7作・Travis Scott「Astroworld」で世界的評価を確立。",
    sounds:["サザンシンセ","テキサスベース","Kanyeオーケストラ","メロウキーボード","ダークサザンサウンド","エピックアレンジ"],
    artists:["Kanye West","Travis Scott","Scarface","Geto Boys","21 Savage"],
    prompts:[
      {type:"クラシック（テキサスサザンラップ）",style:"Texas Southern rap production, Scarface era, dirty south",detail:"[Instrumental] Texas Southern synthesizer groove, dirty south drum pattern, deep bass, 90 BPM, Texas Southern hip hop dirty south loop"},
      {type:"モダン（Kanyeコラボスタイル）",style:"Kanye West collaboration style, grand orchestral hip hop, modern",detail:"[Instrumental] grand orchestral arrangement, heavy modern drums, sweeping synthesizer, powerful bass, 95 BPM, modern grand orchestral Kanye-style hip hop loop"},
      {type:"実験的（テキサスアンビエント）",style:"Texas ambient hip hop, experimental progressive, cinematic dark",detail:"[Instrumental] cinematic dark Texas synthesizer, experimental drum programming, ambient bass textures, 85 BPM, experimental cinematic dark Texas hip hop loop"}
    ]
  },
  {
    name:"Tay Keith", alias:"Brytavious Chambers",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"South", city:"Memphis, TN", bpm:"135–158",
    desc:"メンフィス出身のトラッププロデューサー。「Tay Keith, fuck these niggas up」のタグと、BlocBoy JBとの「Look Alive」・Drakeの「Nonstop」でほぼ同時ブレイク。メンフィス固有の重低音と硬質なスネアでBillboard Hot 100 Top 10を11曲達成。",
    sounds:["メンフィス重低音","硬質スネア","速いハイハット","808キック","ダークメロディー","メンフィストラップ"],
    artists:["BlocBoy JB","Drake","Travis Scott","Moneybagg Yo","Yo Gotti"],
    prompts:[
      {type:"クラシック（メンフィストラップ）",style:"Memphis trap, heavy dark, Tay Keith style, hard-hitting",detail:"[Instrumental] heavy Memphis trap drum pattern, hard snare, dark synthesizer melody, deep 808 bass, rapid hi-hat, 145 BPM, dark hard-hitting Memphis trap loop"},
      {type:"モダン（ハードトラップバンガー）",style:"hard trap banger, modern Memphis, aggressive high energy",detail:"[Instrumental] aggressive hard drum hits, deep sliding 808, dark melodic hook, rapid trap hi-hat rolls, 150 BPM, hard modern Memphis trap banger loop"},
      {type:"実験的（メンフィスダークウェイブ）",style:"Memphis dark wave trap, experimental heavy, ominous",detail:"[Instrumental] ominous dark synthesizer wave, experimental heavy 808, hard drum pattern, dark atmospheric bass, 142 BPM, dark wave experimental Memphis trap loop"}
    ]
  },
  {
    name:"Southside", alias:"Joshua Luellen",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"South", city:"Atlanta, GA", bpm:"130–155",
    desc:"808 Mafia共同設立者。14歳からビート制作を始め17歳でWaka Flockaに見出された。Futureの「56 Nights」全曲を一夜で制作した伝説的エピソードを持ち、ダークで攻撃的なトラップサウンドを定義。",
    sounds:["暗いシンセ","808キックドラム","重層オーケストラ","速いハイハット","不吉なパッド","808 Mafiaサウンド"],
    artists:["Future","Young Thug","Waka Flocka","G Herbo","21 Savage"],
    prompts:[
      {type:"クラシック（808 Mafiaダークトラップ）",style:"808 Mafia dark trap, Southside style, belligerent aggressive",detail:"[Instrumental] dark belligerent synthesizer, heavy 808 kick, crisp rapid hi-hat, ominous bass, aggressive Atlanta trap energy, 140 BPM, 808 Mafia dark aggressive trap loop"},
      {type:"モダン（シネマトラップ）",style:"cinematic trap, dark orchestral, Atlanta modern",detail:"[Instrumental] dark orchestral synthesizer over trap drums, heavy 808 bass, cinematic ominous strings, 142 BPM, dark cinematic Atlanta trap loop"},
      {type:"実験的（ダークフューチャリスティック）",style:"dark futuristic trap, experimental 808, ominous innovative",detail:"[Instrumental] futuristic dark synthesizer design, experimental 808 patterns, innovative drum programming, 138 BPM, dark futuristic experimental trap loop"}
    ]
  },
  {
    name:"Young Chop", alias:"Chopsquad DJ",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"South", city:"Chicago, IL", bpm:"62–78",
    desc:"シカゴドリルの音的発明者。Chief Keefとのコンビネーションで「I Don't Like」（2012）を世に送り出し、英国・NYのドリルシーンに強大な影響を与えた。遅いBPM・スパースなドラム・暗いベースラインが特徴。",
    sounds:["スパースドラム","ダークベースライン","シカゴドリルビート","遅いBPM","ゴシックシンセ","重いスネア"],
    artists:["Chief Keef","Lil Durk","G Herbo","Chance the Rapper","King Louie"],
    prompts:[
      {type:"クラシック（シカゴドリル）",style:"Chicago drill, slow dark, Young Chop style, sparse drum",detail:"[Instrumental] sparse dark Chicago drill drum pattern, ominous synthesizer, deep bass line, cold atmosphere, 68 BPM, original Chicago drill dark slow loop"},
      {type:"モダン（ドリルエボリューション）",style:"evolved drill hip hop, dark modern, Chicago underground",detail:"[Instrumental] evolved drill drum pattern, dark melodic synthesizer, heavy bass, urban danger atmosphere, 70 BPM, modern evolved Chicago drill loop"},
      {type:"実験的（ダークミニマル）",style:"dark minimal drill, extremely sparse, menacing",detail:"[Instrumental] extremely sparse drum hits, dark menacing synthesizer, deep rumbling bass, 65 BPM, minimalist dark menacing drill loop"}
    ]
  },
  {
    name:"DJ Muggs", alias:"Lawrence Muggerud",
    eras:["90s","2000s","2010s","2020s"], styles:["west coast","underground","alternative"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"86–100",
    desc:"Cypress Hillの音楽的設計者として4枚のプラチナアルバムを達成したNY生まれLA拠点のプロデューサー。Soul Assassinsコレクティブを率い、埃っぽいヴィニールループと低音域の脅威感が醸す西海岸のサイケデリックな暗黒を確立。",
    sounds:["埃っぽいヴィニールループ","ダークサイケシンセ","パラノイア的テクスチャー","重低音","トリップホップ要素","ダブステップ影響"],
    artists:["Cypress Hill","GZA","House of Pain","Westside Gunn","Mach-Hommy"],
    prompts:[
      {type:"クラシック（サイケダークウェスト）",style:"psychedelic dark West Coast hip hop, Soul Assassins, Cypress Hill",detail:"[Instrumental] dusty vinyl loop, dark psychedelic synthesizer, paranoid atmospheric texture, heavy bass, West Coast menace, 90 BPM, psychedelic dark Soul Assassins hip hop loop"},
      {type:"モダン（ダークサイケビート）",style:"dark psychedelic beat, modern underground, West Coast gritty",detail:"[Instrumental] dark psychedelic sample processing, heavy underground drums, paranoid bass, atmospheric darkness, 92 BPM, modern dark psychedelic underground West Coast hip hop loop"},
      {type:"実験的（トリップホップエクスペリメント）",style:"trip hop experiment, dark underground, psychedelic abstract",detail:"[Instrumental] abstract psychedelic trip hop textures, experimental drum manipulation, dark bass drones, 86 BPM, experimental dark trip hop underground hip hop loop"}
    ]
  },
  {
    name:"DJ Jazzy Jeff", alias:"Jeffrey Townes",
    eras:["80s","90s","2000s","2010s","2020s"], styles:["boom bap","jazzy","funk"],
    region:"East Coast", city:"Philadelphia, PA", bpm:"88–100",
    desc:"DJ Jazzy Jeff & The Fresh Princeとして1989年にヒップホップ初のグラミー賞を受賞したフィラデルフィアのレジェンド。トランスフォーマースクラッチの普及者であり、プロダクション会社「A Touch of Jazz」でJill Scottらフィリー音楽シーンを育てた。",
    sounds:["トランスフォーマースクラッチ","ソウルフルサンプル","フィリーグルーヴ","クリーンドラム","R&Bテクスチャー","ライトハッピービート"],
    artists:["Will Smith (Fresh Prince)","Jill Scott","Rhymefest","Jazzy Jeff himself"],
    prompts:[
      {type:"クラシック（フィリービート）",style:"Philadelphia hip hop classic, soulful scratching, Fresh Prince era",detail:"[Instrumental] Philly soul sample loop, classic DJ scratch elements, clean drum pattern, warm bass, uplifting feel, 93 BPM, classic Philadelphia soulful hip hop loop"},
      {type:"モダン（ソウルフルクリーン）",style:"soulful clean hip hop, modern Philly sound, warm production",detail:"[Instrumental] clean soul sample, polished drum pattern, smooth bass, melodic Philly vibe, 95 BPM, modern clean soulful Philadelphia hip hop loop"},
      {type:"実験的（ターンテーブリズム）",style:"turntablism hip hop, scratch technique showcase, creative DJ",detail:"[Instrumental] creative turntable scratch patterns, soul sample backdrop, rhythmic drum groove, 90 BPM, turntablism creative DJ hip hop loop"}
    ]
  },
  {
    name:"Teddy Riley", alias:"",
    eras:["80s","90s","2000s"], styles:["funk","boom bap","alternative"],
    region:"East Coast", city:"New York, NY", bpm:"90–108",
    desc:"New Jack Swingの創始者。ヒップホップのビートとR&Bのメロディを結婚させたハイブリッドサウンドでMichael Jackson・Bobby Brown・Blackstreet等の名曲を生んだ。1980〜90年代ポップ・ヒップホップ融合の最重要人物。",
    sounds:["ニュージャックスウィングビート","シンセブラス","スウィンギードラム","R&Bメロディー","ファンキーベース","ポップフック"],
    artists:["Michael Jackson","Bobby Brown","Blackstreet","Wreckx-N-Effect","Aaron Hall"],
    prompts:[
      {type:"クラシック（ニュージャックスウィング）",style:"New Jack Swing hip hop R&B, Teddy Riley style, swinging drum",detail:"[Instrumental] New Jack Swing drum pattern with swinging hi-hat, funky synthesizer, brass stabs, bass groove, 100 BPM, New Jack Swing hip hop R&B fusion loop"},
      {type:"モダン（スウィングR&Bホップ）",style:"modern swing hip hop R&B, contemporary New Jack feel",detail:"[Instrumental] modern New Jack-influenced swing drum, funky bass, melodic R&B synthesizer, 102 BPM, modern swing hip hop R&B fusion loop"},
      {type:"実験的（ネオスウィング）",style:"neo swing hip hop, futuristic New Jack, experimental R&B fusion",detail:"[Instrumental] futuristic New Jack Swing update, experimental bass, electronic R&B textures, 96 BPM, neo swing experimental hip hop R&B fusion loop"}
    ]
  },
  {
    name:"Jermaine Dupri", alias:"JD",
    eras:["90s","2000s","2010s"], styles:["south","funk","trap"],
    region:"South", city:"Atlanta, GA", bpm:"95–112",
    desc:"アトランタのポップラップ先駆者。Kris Krossをデビューさせた12歳のプロデューサーとして出発し、Usher・Mariah Carey・Jay-Zの楽曲を手がけた。So So Def Recordingsを設立しアトランタ音楽産業を牽引。",
    sounds:["ポップラップビート","エネルギッシュシンセ","キャッチーフック","アトランタグルーヴ","パーティービート","クリーンポップ"],
    artists:["Usher","Mariah Carey","Jay-Z","Kris Kross","Bow Wow","Lil' Kim"],
    prompts:[
      {type:"クラシック（アトランタポップラップ）",style:"Atlanta pop rap 90s, energetic Jermaine Dupri style, catchy",detail:"[Instrumental] energetic pop rap drum beat, catchy synthesizer melody, party-ready bass groove, 104 BPM, Atlanta pop rap energetic catchy hip hop loop"},
      {type:"モダン（メインストリームアトランタ）",style:"mainstream Atlanta hip hop, modern polished, pop crossover",detail:"[Instrumental] polished mainstream synthesizer hook, clean drum pattern, smooth bass, pop crossover Atlanta feel, 106 BPM, mainstream modern Atlanta hip hop pop loop"},
      {type:"実験的（ポップラップフュージョン）",style:"pop rap fusion, experimental Atlanta, crossover innovative",detail:"[Instrumental] innovative pop-rap fusion production, experimental melodic hook, creative drum pattern, 100 BPM, experimental pop-rap Atlanta fusion loop"}
    ]
  },
  {
    name:"Dallas Austin", alias:"",
    eras:["90s","2000s"], styles:["funk","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"90–108",
    desc:"アトランタのR&B/ヒップホップ融合プロデューサー。TLC・Boyz II Men・Madonnaの楽曲を手がけ、90年代アトランタポップR&Bサウンドを定義。ヒップホップとポップとR&Bの三角地帯で唯一無二の存在感を示した。",
    sounds:["アトランタR&Bビート","ソフトポップシンセ","スウィートメロディー","ファンクグルーヴ","ポップドラム","R&Bテクスチャー"],
    artists:["TLC","Boyz II Men","Madonna","Brownstone","Monica"],
    prompts:[
      {type:"クラシック（アトランタポップR&B）",style:"Atlanta pop R&B hip hop fusion, smooth melodic, Dallas Austin",detail:"[Instrumental] smooth Atlanta pop R&B groove, melodic synthesizer, soft hip hop drum pattern, warm bass, 96 BPM, smooth Atlanta pop R&B hip hop fusion loop"},
      {type:"モダン（スウィートソウルポップ）",style:"sweet soul pop hip hop, warm melodic, modern R&B crossover",detail:"[Instrumental] sweet melodic soul sample, warm pop R&B drum, smooth bass, 98 BPM, sweet modern soul pop hip hop loop"},
      {type:"実験的（ポップソウルフュージョン）",style:"pop soul fusion hip hop, experimental melodic, Atlanta smooth",detail:"[Instrumental] experimental melodic soul-pop fusion, creative drum pattern, smooth bass, 93 BPM, experimental pop-soul Atlanta fusion loop"}
    ]
  },
  {
    name:"Rich Harrison", alias:"",
    eras:["2000s","2010s"], styles:["funk","boom bap","jazzy"],
    region:"East Coast", city:"Washington DC", bpm:"95–108",
    desc:"Beyoncé「Crazy in Love」のプロデューサー。DCのソウル・ファンク文化を継承し、アクセントの強いホルンループやシンコペートしたドラムパターンで独自のグルーヴ感を確立したアンダーレーテッドな才能。",
    sounds:["アクセントホルンループ","シンコペートドラム","ファンキーベース","ソウルフルグルーヴ","ブラスセクション","DCファンクバイブ"],
    artists:["Beyoncé","Amerie","Lil Mo","Total"],
    prompts:[
      {type:"クラシック（クレイジーインラブ期）",style:"Crazy in Love era hip hop funk, horn loop, syncopated drums",detail:"[Instrumental] accented horn loop, syncopated drum pattern, deep funky bass, powerful groove, 100 BPM, Crazy in Love era hip hop funk loop"},
      {type:"モダン（ファンキーソウルポップ）",style:"funky soul pop hip hop, horn-driven, modern groove",detail:"[Instrumental] modern horn-driven groove, funky drum pattern, soul bass, 102 BPM, funky modern soul pop hip hop loop"},
      {type:"実験的（ネオファンクビート）",style:"neo funk hip hop beat, experimental horn, innovative groove",detail:"[Instrumental] innovative horn arrangement, experimental funky drum pattern, creative bass groove, 97 BPM, neo funk experimental hip hop loop"}
    ]
  },
  {
    name:"Bangladesh", alias:"",
    eras:["2000s","2010s","2020s"], styles:["trap","south","funk"],
    region:"East Coast", city:"New York, NY", bpm:"90–140",
    desc:"Lil WayneのBet That's What You Think・Jay-Z「D.O.A.」・B.o.B「Nothin' on You」など多彩なヒットを手がけた多才なプロデューサー。ノイジーで攻撃的なシンセと独特のリズム感覚で2000年代後半の南部ラップを彩った。",
    sounds:["アグレッシブシンセ","ノイジービート","独特のリズム","ハードドラム","エネルギッシュベース","ソウスタイル"],
    artists:["Lil Wayne","Jay-Z","B.o.B","T.I.","Beyoncé"],
    prompts:[
      {type:"クラシック（バングラデシュスタイル）",style:"Bangladesh production style, aggressive noisy synthesizer, hard",detail:"[Instrumental] aggressive noisy synthesizer riff, hard-hitting drum pattern, deep bass, energetic feel, 96 BPM, aggressive Bangladesh-style hip hop loop"},
      {type:"モダン（エネルジェティックサウス）",style:"energetic Southern hip hop, modern aggressive, hard-hitting",detail:"[Instrumental] energetic Southern synthesizer, powerful drum pattern, hard bass hits, 140 BPM, energetic aggressive modern Southern trap loop"},
      {type:"実験的（ノイジーリズム）",style:"noisy rhythmic hip hop, experimental aggressive, chaotic energy",detail:"[Instrumental] chaotic noisy synthesizer, experimental irregular drum pattern, aggressive bass, 92 BPM, experimental noisy chaotic hip hop loop"}
    ]
  },
  {
    name:"Nottz Raw", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"East Coast", city:"Virginia / New York", bpm:"84–96",
    desc:"バージニア出身でNYを拠点とするソウルフルなビートメイカー。Raekwon・Bun B・Pusha Tらとのコラボで知られ、深みのあるジャジーなサンプリングと温かい感情表現を兼ね備えた職人気質のプロデューサー。",
    sounds:["ジャジーソウルサンプル","温かいドラム","ディープベース","オーガニックグルーヴ","ヴィンテージテクスチャー","エモーショナルコード"],
    artists:["Raekwon","Bun B","Pusha T","Royce da 5'9","Ludacris"],
    prompts:[
      {type:"クラシック（ソウルフルジャジービート）",style:"soulful jazzy hip hop beat, Nottz Raw style, warm emotional",detail:"[Instrumental] deep jazzy soul sample, warm punchy drum groove, smooth bass, emotional chord progression, 88 BPM, soulful jazzy emotional underground hip hop loop"},
      {type:"モダン（ウォームグルーヴ）",style:"warm groove hip hop, modern soul, emotional underground",detail:"[Instrumental] modern warm soul sample, crisp drum pattern, emotional bass, 90 BPM, modern warm groove emotional underground hip hop loop"},
      {type:"実験的（ソウルデプス）",style:"soul depth hip hop, experimental emotional, rich sampling",detail:"[Instrumental] rich experimental soul sample exploration, deep drum groove, emotionally layered bass, 85 BPM, deep soul emotional experimental underground hip hop loop"}
    ]
  },
  {
    name:"Apollo Brown", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"Midwest", city:"Detroit, MI", bpm:"84–96",
    desc:"デトロイトのビートメイカー。Ras Kass・Ghostface Killah・Guilty Simpsonらの名盤を手がけ、ジャジーでダークなサンプリングと職人的なドラムプログラミングでアンダーグラウンドシーンで絶大な信頼を得る。",
    sounds:["ダークジャズサンプル","ハードドラム","ディープベース","グリミーテクスチャー","デトロイトバイブ","職人的ビート"],
    artists:["Ras Kass","Ghostface Killah","Guilty Simpson","Onym","Skyzoo"],
    prompts:[
      {type:"クラシック（デトロイトダークジャズ）",style:"Detroit dark jazzy boom bap, gritty underground, Apollo Brown",detail:"[Instrumental] dark jazz sample loop, hard punchy Detroit drum pattern, gritty bass, underground atmosphere, 87 BPM, dark jazz Detroit boom bap underground loop"},
      {type:"モダン（グリミーブームバップ）",style:"grimy boom bap, modern dark jazz, underground artisan",detail:"[Instrumental] grimy jazz sample chops, precise drum programming, dark bass, 89 BPM, modern grimy dark jazz boom bap underground loop"},
      {type:"実験的（デトロイトアブストラクト）",style:"Detroit abstract dark jazz, experimental underground, deep",detail:"[Instrumental] abstract dark jazz sample manipulation, experimental drum feel, deep bass, 85 BPM, abstract experimental Detroit dark jazz underground loop"}
    ]
  },
  {
    name:"Blockhead", alias:"Tony Simon",
    eras:["2000s","2010s","2020s"], styles:["alternative","underground","lo-fi"],
    region:"East Coast", city:"New York, NY", bpm:"82–96",
    desc:"Aesop RockやSlug (Atmosphere)との長期コラボで知られるNYCのビートメイカー。多数の短いサンプルを緻密にレイヤリングしたモザイク的な制作手法と、映画的な雰囲気を持つインディーヒップホップの名匠。",
    sounds:["レイヤードサンプル","モザイク的テクスチャー","オーガニックドラム","インディービート","シネマティック雰囲気","ウォームグルーヴ"],
    artists:["Aesop Rock","Slug (Atmosphere)","Illogic","Cage"],
    prompts:[
      {type:"クラシック（インディーモザイクビート）",style:"indie hip hop mosaic beat, Blockhead style, layered complex",detail:"[Instrumental] layered multi-sample mosaic texture, organic drum groove, indie atmospheric feel, warm bass, 86 BPM, indie mosaic-layered underground hip hop loop"},
      {type:"モダン（オーガニックインディー）",style:"organic indie hip hop, complex layering, warm underground",detail:"[Instrumental] complex organic sample layers, indie drum pattern, warm bass, atmospheric texture, 88 BPM, organic complex indie underground hip hop loop"},
      {type:"実験的（テクスチャーコラージュ）",style:"texture collage hip hop, experimental indie, mosaic layers",detail:"[Instrumental] experimental texture collage, creative drum pattern, layered atmospheric elements, 84 BPM, experimental texture collage indie hip hop loop"}
    ]
  },
  {
    name:"Jake One", alias:"",
    eras:["2000s","2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"West Coast", city:"Seattle, WA", bpm:"84–96",
    desc:"シアトル出身のビートメイカー。Freeway・Drake・Wale・MF DOOMとのコラボで知られ、ソウルフルで緻密なサンプリング技術と幅広いアーティストへの適応力を持つ、アンダーレーテッドながら業界人に評価が高い職人。",
    sounds:["ソウルサンプル","クリーンドラム","ウォームベース","ジャジーコード","シアトルバイブ","精密なビートワーク"],
    artists:["Freeway","Drake","Wale","MF DOOM","Brother Ali","Bun B"],
    prompts:[
      {type:"クラシック（シアトルソウルビート）",style:"Seattle soulful hip hop beat, precise craftsmanship, warm",detail:"[Instrumental] precise soul sample chop, clean punchy drum pattern, warm bass groove, jazzy chord progression, 88 BPM, Seattle soulful precise hip hop loop"},
      {type:"モダン（クリーングルーヴ）",style:"clean groove hip hop, modern soulful Seattle, polished",detail:"[Instrumental] polished soul sample, crisp modern drum pattern, smooth bass, 90 BPM, clean groove modern soulful Seattle hip hop loop"},
      {type:"実験的（ジャジープレシジョン）",style:"jazzy precision hip hop, experimental soul, Seattle underground",detail:"[Instrumental] experimental precision soul sample processing, complex jazz-influenced drum, deep bass, 86 BPM, jazzy precision experimental Seattle underground hip hop loop"}
    ]
  },
  {
    name:"!llmind", alias:"Ramon Ibanga Jr.",
    eras:["2000s","2010s","2020s"], styles:["boom bap","alternative","trap"],
    region:"East Coast", city:"New Jersey", bpm:"85–140",
    desc:"NJを拠点とする多才なプロデューサー。J. Cole・Drake・Big Seanなどメジャーアーティストからアンダーグラウンドまで幅広く対応し、感情的でメロディックなビートと高いプロダクションクオリティで評価される。",
    sounds:["エモーショナルシンセ","メロディックビート","クリーンドラム","808ベース","多才なサウンド","NJスタイル"],
    artists:["J. Cole","Drake","Big Sean","Wale","Kid Cudi"],
    prompts:[
      {type:"クラシック（エモーショナルNJビート）",style:"emotional NJ hip hop beat, melodic, !llmind style versatile",detail:"[Instrumental] emotional melodic synthesizer, clean drum pattern, deep bass, expressive chord progression, 90 BPM, emotional versatile New Jersey hip hop loop"},
      {type:"モダン（メロディックモダン）",style:"melodic modern hip hop, clean production, emotional versatile",detail:"[Instrumental] modern melodic synthesizer hook, polished drum pattern, emotional bass, 92 BPM, melodic modern versatile hip hop loop"},
      {type:"実験的（クリエイティブフュージョン）",style:"creative fusion hip hop, experimental melodic, versatile innovative",detail:"[Instrumental] innovative melodic production, experimental drum programming, creative bass, 88 BPM, creative fusion experimental versatile hip hop loop"}
    ]
  },
  {
    name:"Evidence", alias:"Mike Pereira",
    eras:["2000s","2010s","2020s"], styles:["boom bap","underground","west coast"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"84–96",
    desc:"Dilated Peoplesのメンバーでありラッパーとプロデューサーを兼任するLAのアーティスト。The AlchemistやRoc Marcianoとの親交が深く、ダークでグリミーなサンプリングと精密なドラムワークを武器にするアンダーグラウンドの実力者。",
    sounds:["グリミーサンプル","精密ドラム","ダークベース","LAアンダーグラウンド","ラフテクスチャー","ウェストコーストアンダー"],
    artists:["Dilated Peoples","The Alchemist","Roc Marciano","Rakaa Iriscience","DJ Babu"],
    prompts:[
      {type:"クラシック（LAアンダーグラウンド）",style:"LA underground hip hop, grimy dark boom bap, Evidence style",detail:"[Instrumental] grimy dark LA sample loop, precise boom bap drum, deep bass, underground West Coast atmosphere, 88 BPM, dark grimy LA underground hip hop loop"},
      {type:"モダン（ダークウェスト）",style:"dark West Coast hip hop, modern underground, grimy polished",detail:"[Instrumental] dark West Coast sample chops, modern punchy drums, gritty bass, 90 BPM, modern dark grimy West Coast underground hip hop loop"},
      {type:"実験的（アンダーグラウンドアブストラクト）",style:"underground abstract West Coast, experimental dark, indie",detail:"[Instrumental] abstract sample manipulation, experimental LA drum feel, dark bass texture, 85 BPM, abstract experimental dark LA underground hip hop loop"}
    ]
  },
  {
    name:"Dot Da Genius", alias:"",
    eras:["2010s","2020s"], styles:["alternative","trap","experimental"],
    region:"East Coast", city:"Brooklyn, NY", bpm:"85–140",
    desc:"ブルックリン出身でKid Cudi・Cordae・JIDらと緊密に仕事をするオルタナティブプロデューサー。メインストリームとアンダーグラウンドを行き来し、独自の感性でアーバンなサウンドを生み出す次世代のキープロデューサー。",
    sounds:["オルタナシンセ","モダンビート","エモーショナルテクスチャー","ブルックリンバイブ","クリエイティブサウンド","808ベース"],
    artists:["Kid Cudi","Cordae","JID","Joey Badass","Smino"],
    prompts:[
      {type:"クラシック（ブルックリンオルタナ）",style:"Brooklyn alternative hip hop, modern experimental, creative",detail:"[Instrumental] creative alternative synthesizer, modern drum pattern, experimental bass, Brooklyn underground feel, 92 BPM, Brooklyn alternative creative hip hop loop"},
      {type:"モダン（エモオルタナトラップ）",style:"emo alternative trap, emotional innovative, Brooklyn modern",detail:"[Instrumental] emotional alternative synthesizer, modern trap drums, 808 bass, innovative texture, 138 BPM, emo alternative modern Brooklyn trap loop"},
      {type:"実験的（クロスオーバーイノベーション）",style:"crossover innovation hip hop, experimental creative, Brooklyn",detail:"[Instrumental] innovative crossover production, experimental drum programming, creative bass design, 90 BPM, experimental innovative crossover Brooklyn hip hop loop"}
    ]
  },
  {
    name:"Larry Fisherman", alias:"Mac Miller",
    eras:["2010s"], styles:["lo-fi","alternative","jazzy"],
    region:"East Coast", city:"Pittsburgh, PA", bpm:"78–95",
    desc:"Mac Millerが本名に由来する別名義でビートメイキングも行い、Vince StaplesやChance the Rapperらに楽曲提供。穏やかで実験的なローファイビートと内省的な音楽性が特徴で、2018年の急逝まで多才な活動を続けた。",
    sounds:["ローファイドラム","ジャジーテクスチャー","メロウシンセ","テープサチュレーション","内省的ループ","ピッツバーグバイブ"],
    artists:["Vince Staples","Chance the Rapper","Mac Miller本人","Ab-Soul"],
    prompts:[
      {type:"クラシック（ピッツバーグローファイ）",style:"Pittsburgh lo-fi hip hop, introspective mellow, Mac Miller producer",detail:"[Instrumental] mellow lo-fi drum groove, introspective jazz sample, tape saturation, warm bass, 82 BPM, Pittsburgh lo-fi introspective hip hop loop"},
      {type:"モダン（ドリーミーローファイ）",style:"dreamy lo-fi hip hop, mellow experimental, introspective",detail:"[Instrumental] dreamy sample loop, relaxed drum pattern, warm atmospheric bass, tape texture, 80 BPM, dreamy experimental lo-fi introspective hip hop loop"},
      {type:"実験的（ジャジーアブストラクト）",style:"jazzy abstract lo-fi, experimental mellow Pittsburgh, creative",detail:"[Instrumental] abstract jazz lo-fi sample, experimental drum pattern, warm creative bass, 78 BPM, abstract jazzy experimental lo-fi hip hop loop"}
    ]
  },
  {
    name:"DJ Mustard", alias:"Mustard / Dijon McFarlane",
    eras:["2010s","2020s"], styles:["west coast","trap","funk"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"95–115",
    desc:"「Mustard on that beat, ho!」のタグで知られるLAのヒットメイカー。YGとの仕事でLAラチェットサウンドを確立し、Kendrick Lamarの「Not Like Us」プロデュースで2024年に更なる頂点へ。グラミー受賞プロデューサー。",
    sounds:["ラチェットシンセ","リズミカルなドラム","LAグルーヴ","キャッチーフック","クリーン808","パーティービート"],
    artists:["YG","Ty Dolla Sign","Migos","Kendrick Lamar","Post Malone","DJ Mustard"],
    prompts:[
      {type:"クラシック（LAラチェット）",style:"LA ratchet hip hop, DJ Mustard style, club-ready, catchy",detail:"[Instrumental] LA ratchet synthesizer riff, driving drum pattern, catchy bass hook, party-ready feel, 100 BPM, LA ratchet club hip hop loop"},
      {type:"モダン（グラミーウィナー）",style:"Grammy-winning modern hip hop, polished LA, mainstream hit",detail:"[Instrumental] polished hit-ready synthesizer, crisp modern drum pattern, clean 808 bass, 102 BPM, Grammy-quality modern LA hip hop loop"},
      {type:"実験的（ウェストコーストイノベーション）",style:"West Coast innovation hip hop, creative ratchet, experimental LA",detail:"[Instrumental] innovative LA synthesizer design, creative ratchet drum pattern, experimental bass, 98 BPM, innovative experimental West Coast hip hop loop"}
    ]
  },
  {
    name:"London On Da Track", alias:"",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"130–148",
    desc:"アトランタのメロディックトラッププロデューサー。Young Thug・Gunna・21 Savageの楽曲を多数手がけ、感情的なシンセメロディーと滑らかな808を武器にアトランタトラップのメロディアス化に大きく貢献。",
    sounds:["メロディックシンセ","スムース808","エモーショナルコード","トラップドラム","ウォームメロディー","アトランタメロトラップ"],
    artists:["Young Thug","Gunna","21 Savage","6lack","Rich Homie Quan"],
    prompts:[
      {type:"クラシック（メロトラップATL）",style:"melodic trap Atlanta, emotional synthesizer, London On Da Track",detail:"[Instrumental] emotional melodic synthesizer loop, smooth 808 bass, Atlanta trap drum pattern, warm chord progression, 140 BPM, melodic emotional Atlanta trap loop"},
      {type:"モダン（スムースエモトラップ）",style:"smooth emo trap, modern melodic Atlanta, vulnerable emotional",detail:"[Instrumental] vulnerable emotional synthesizer, sliding 808, smooth trap drums, 142 BPM, smooth emo modern Atlanta trap loop"},
      {type:"実験的（メロウトラップフュージョン）",style:"mellow trap fusion, experimental melodic, Atlanta innovative",detail:"[Instrumental] innovative mellow synthesizer layers, experimental trap drums, smooth 808, 138 BPM, mellow fusion experimental Atlanta trap loop"}
    ]
  },
  {
    name:"Wheezy", alias:"",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"South", city:"Atlanta, GA", bpm:"130–150",
    desc:"アトランタのトラッププロデューサー。Young Thug・Gunna・Futureの主要曲を手がけ、「Wheezy outta here」のタグで知られる。メロディックで浮遊感のあるトラップサウンドで現代アトランタシーンを定義するキープロデューサー。",
    sounds:["フローティングシンセ","808スライド","メロウトラップビート","エーテリアルパッド","トリプレットハイハット","アトランタドリーム"],
    artists:["Young Thug","Gunna","Future","Lil Baby","Travis Scott"],
    prompts:[
      {type:"クラシック（フローティングトラップ）",style:"floating trap Atlanta, Wheezy style, dreamy melodic",detail:"[Instrumental] floating melodic synthesizer, sliding 808 bass, Atlanta trap drum pattern, dreamy atmospheric pads, 140 BPM, floating dreamy Atlanta trap loop"},
      {type:"モダン（ドリームアトランタトラップ）",style:"dream Atlanta trap, ethereal modern, melodic float",detail:"[Instrumental] ethereal synthesizer melody, smooth 808 bass, modern trap drums, floating atmosphere, 142 BPM, modern dream Atlanta trap loop"},
      {type:"実験的（エーテリアルウェイブ）",style:"ethereal wave trap, experimental dreamy, hazy Atlanta",detail:"[Instrumental] hazy ethereal synthesizer waves, experimental 808 patterns, soft trap drums, 138 BPM, ethereal wave experimental dreamy Atlanta trap loop"}
    ]
  },
  {
    name:"Turbo", alias:"Jordan Ladd",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"130–148",
    desc:"Young Thugの主力プロデューサーとして知られるアトランタのビートメイカー。メロディックなシンセとユニークなドラムパターンでYoung Thug・Lil Babyの楽曲を支え、アトランタメロトラップの進化を牽引してきた。",
    sounds:["ユニークシンセ","メロディーフック","独自ドラムパターン","808スライド","エモーショナルコード","Young Thugサウンド"],
    artists:["Young Thug","Lil Baby","Gunna","Lil Durk","Future"],
    prompts:[
      {type:"クラシック（Young Thugメロトラップ）",style:"Young Thug style melodic trap, unique synthesizer, emotional",detail:"[Instrumental] unique melodic synthesizer pattern, emotional chord progression, 808 bass, trap drum groove, 138 BPM, Young Thug style melodic emotional trap loop"},
      {type:"モダン（アトランタメロ進化）",style:"evolved Atlanta melodic trap, modern unique sound, creative",detail:"[Instrumental] creatively unique synthesizer melody, modern trap drums, sliding 808, 140 BPM, evolved modern unique Atlanta melodic trap loop"},
      {type:"実験的（ユニークメロウェイブ）",style:"unique mellow wave trap, experimental Atlanta, innovative melody",detail:"[Instrumental] innovative unique melodic synthesis, experimental drum pattern, atmospheric 808, 136 BPM, experimental innovative unique Atlanta trap loop"}
    ]
  },
  {
    name:"TM88", alias:"",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"130–150",
    desc:"808 Mafiaメンバーのアトランタ出身プロデューサー。Juice WRLDの代表曲「Lucid Dreams」を共同制作し、FutureやYoung Thugとも多数コラボ。メロディックなシンセとムーディーなパッドで現代エモトラップの基礎を築いた。",
    sounds:["メロディックシンセ","ムーディーパッド","808ベース","808 Mafiaサウンド","トラップドラム","エモエーテリアル"],
    artists:["Juice WRLD","Future","Young Thug","21 Savage","Lil Uzi Vert"],
    prompts:[
      {type:"クラシック（エモトラップ）",style:"emo trap, TM88 style, melodic moody, Juice WRLD era",detail:"[Instrumental] melodic moody synthesizer, emotional chord pads, 808 bass, trap drum pattern, 140 BPM, emo melodic moody trap loop"},
      {type:"モダン（ムーディーメロトラップ）",style:"moody melodic trap, modern emo, atmospheric 808",detail:"[Instrumental] atmospheric moody synthesizer, emotional bass pads, sliding 808, modern trap drums, 142 BPM, moody melodic atmospheric trap loop"},
      {type:"実験的（エーテリアルエモ）",style:"ethereal emo trap, experimental moody, hazy emotional",detail:"[Instrumental] hazy ethereal emotional synthesizer, experimental 808, atmospheric trap drums, 138 BPM, ethereal emo experimental trap loop"}
    ]
  },
  {
    name:"Ronny J", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","experimental"],
    region:"South", city:"Miami / Broward County, FL", bpm:"130–155",
    desc:"フロリダ出身の実験的トラッププロデューサー。「Ronny J on the beat」のタグで、Lil Pump・XXXTENTACIONらのSoundCloud世代と共鳴する激しく実験的なトラップサウンドを生み出す個性的な存在。",
    sounds:["アグレッシブシンセ","実験的808","カオスなドラム","ディストーション要素","ユニークテクスチャー","SoundCloud時代サウンド"],
    artists:["Lil Pump","XXXTENTACION","Wifisfuneral","Ski Mask the Slump God","Smokepurpp"],
    prompts:[
      {type:"クラシック（SoundCloudトラップ）",style:"SoundCloud era trap, aggressive experimental, Ronny J style",detail:"[Instrumental] aggressive experimental synthesizer, chaotic trap drum pattern, heavy distorted bass, 145 BPM, SoundCloud era aggressive experimental trap loop"},
      {type:"モダン（エクストリームトラップ）",style:"extreme trap, maximally aggressive, experimental chaotic",detail:"[Instrumental] extreme aggressive synthesizer, chaotic drum pattern, maximum bass distortion, 150 BPM, extreme aggressive maximalist experimental trap loop"},
      {type:"実験的（ノイズトラップ）",style:"noise trap, maximalist chaotic, experimental aggressive SoundCloud",detail:"[Instrumental] noise-influenced trap production, chaotic synthesizer, distorted 808, ultra-aggressive drums, 148 BPM, noise experimental aggressive trap loop"}
    ]
  },
  {
    name:"Cardo Got Wings", alias:"Cardo",
    eras:["2010s","2020s"], styles:["west coast","alternative","trap"],
    region:"South", city:"Dallas, TX / Los Angeles", bpm:"85–140",
    desc:"テキサス・LA拠点の多才なプロデューサー。Kendrick Lamar・Tyler The Creator・Vince StaplesのコンシャスウェストコーストHipHopから、ストリートラッパーまで幅広く対応する高い適応力が持ち味。",
    sounds:["ウェストコーストシンセ","オーガニックグルーヴ","コンシャスビート","ヴェルサタイルサウンド","テキサスバイブ","クリーンプロダクション"],
    artists:["Kendrick Lamar","Tyler The Creator","Vince Staples","ScHoolboy Q","Isaiah Rashad"],
    prompts:[
      {type:"クラシック（コンシャスウェスト）",style:"conscious West Coast hip hop, Cardo style, versatile clean",detail:"[Instrumental] clean West Coast conscious beat, organic groove drum pattern, smooth bass, 90 BPM, conscious versatile West Coast hip hop loop"},
      {type:"モダン（ヴァーサタイルモダン）",style:"versatile modern hip hop, West Coast meets South, multi-style",detail:"[Instrumental] versatile modern synthesizer, multi-style drum programming, adaptive bass, 95 BPM, versatile modern multi-style hip hop loop"},
      {type:"実験的（クロスリージョン）",style:"cross-region hip hop experiment, Texas meets LA, creative",detail:"[Instrumental] Texas-LA crossover sonic exploration, experimental drum patterns, creative bass, 88 BPM, cross-region experimental creative hip hop loop"}
    ]
  },
  {
    name:"Supah Mario", alias:"",
    eras:["2010s","2020s"], styles:["trap","west coast","south"],
    region:"West Coast", city:"Los Angeles, CA", bpm:"130–148",
    desc:"LAのトラッププロデューサー。Roddy Ricch・DaBaby・Pop SmokeのブリリアントなビートとWest Coast / South両対応のメロディックなスタイルで2020年前後のトラップシーンに大きな足跡を残した。",
    sounds:["メロディックシンセ","808ベース","クリスプドラム","トラップパターン","ポップクロスオーバー","ウェストコーストメロ"],
    artists:["Roddy Ricch","DaBaby","Pop Smoke","Lil Baby","Polo G"],
    prompts:[
      {type:"クラシック（メインストリームトラップ）",style:"mainstream trap, melodic polished, Supah Mario style LA",detail:"[Instrumental] polished melodic synthesizer, crisp trap drums, punchy 808 bass, mainstream trap feel, 140 BPM, mainstream polished LA trap loop"},
      {type:"モダン（チャートトラップ）",style:"chart-ready trap, catchy melodic, modern LA hit production",detail:"[Instrumental] catchy melodic hook synthesizer, precise trap drums, clean 808 bass, 142 BPM, chart-ready modern LA trap hit loop"},
      {type:"実験的（クロスオーバートラップ）",style:"crossover trap hip hop, creative West Coast meets South",detail:"[Instrumental] creative West-South crossover synthesizer, innovative trap drums, experimental 808, 138 BPM, creative crossover experimental trap loop"}
    ]
  },
  {
    name:"ATL Jacob", alias:"Jacob Canady",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"130–150",
    desc:"Futureのレーベル「Freebandz」内製プロデューサーから台頭したアトランタのビートメイカー。2022年にFuture・Lil Baby・Gunnaらの主要曲で一気にブレイクし、ダークでメロウなトラップビートで次世代プロデューサーの顔となった。",
    sounds:["ダークメロディー","メロウシンセ","808ベース","トラップドラム","フリーバンズサウンド","アトランタダーク"],
    artists:["Future","Lil Baby","Gunna","Young Thug","Drake"],
    prompts:[
      {type:"クラシック（フリーバンズダーク）",style:"Freebandz dark trap, ATL Jacob style, mellow and dark",detail:"[Instrumental] dark mellow synthesizer melody, sliding 808 bass, Atlanta trap drum pattern, dark atmospheric pads, 140 BPM, dark mellow Freebandz trap loop"},
      {type:"モダン（ダークアトランタモダン）",style:"dark modern Atlanta trap, melodic moody, next-gen ATL",detail:"[Instrumental] moody dark melodic synthesizer, powerful 808 bass, crisp trap drums, 142 BPM, dark moody modern Atlanta trap loop"},
      {type:"実験的（ダークウェイブATL）",style:"dark wave ATL trap, experimental moody, ominous melodic",detail:"[Instrumental] ominous dark wave synthesizer, experimental 808 patterns, atmospheric trap drums, 138 BPM, dark wave experimental ominous Atlanta trap loop"}
    ]
  },
  {
    name:"Nick Mira", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","experimental"],
    region:"East Coast", city:"New Jersey", bpm:"130–150",
    desc:"Internet Moneyのメンバーとして知られるNJのプロデューサー。Juice WRLD・Trippie Redd・Lil Teccaなどのエモラップ/SoundCloud世代のビートを量産し、メロディックなシンセパッドを多用したエモトラップサウンドで知られる。",
    sounds:["エモシンセパッド","メロウメロディー","808ベース","ラピッドハイハット","トラップドラム","SoundCloudエモ"],
    artists:["Juice WRLD","Trippie Redd","Lil Tecca","Internet Money全般","Nav"],
    prompts:[
      {type:"クラシック（エモラップトラップ）",style:"emo rap trap, Nick Mira style, melodic emotional pad",detail:"[Instrumental] emotional synthesizer pad melody, soft 808 bass, emo trap drum pattern, melodic chord progression, 140 BPM, emo rap melodic trap loop"},
      {type:"モダン（インターネットマネースタイル）",style:"Internet Money style trap, melodic modern emo, smooth",detail:"[Instrumental] smooth melodic Internet Money synthesizer, modern trap drums, sliding 808, 142 BPM, smooth modern Internet Money emo trap loop"},
      {type:"実験的（メロウエクスペリメンタル）",style:"mellow experimental emo trap, dreamy innovative, SoundCloud",detail:"[Instrumental] dreamy innovative synthesizer pads, experimental emo trap drums, mellow 808, 138 BPM, dreamy experimental mellow emo trap loop"}
    ]
  },
  {
    name:"Taz Taylor", alias:"",
    eras:["2010s","2020s"], styles:["trap","alternative","experimental"],
    region:"South", city:"Internet Money (Florida base)", bpm:"130–148",
    desc:"Internet Moneyの創設者兼プロデューサー。Nav・Gunna・Juice WRLDらとのコラボでSoundCloudジェネレーションのビジネスモデルを確立し、複数のプロデューサーによるコレクティブ制作スタイルを音楽業界に定着させた。",
    sounds:["コレクティブトラップビート","メロディックパッド","808ベース","ラピッドハイハット","インターネットマネーサウンド","ヒットメロディー"],
    artists:["Nav","Gunna","Juice WRLD","Internet Money全般","Future"],
    prompts:[
      {type:"クラシック（インターネットマネートラップ）",style:"Internet Money trap, collective production, melodic hit-making",detail:"[Instrumental] melodic hit synthesizer, collective trap drum pattern, 808 bass, catchy hook progression, 140 BPM, Internet Money collective melodic trap loop"},
      {type:"モダン（ヒットコレクティブ）",style:"hit collective trap, modern mainstream Internet Money, polished",detail:"[Instrumental] polished mainstream melodic synthesizer, crisp trap drums, hit-ready 808, 142 BPM, modern hit collective Internet Money trap loop"},
      {type:"実験的（コレクティブフュージョン）",style:"collective fusion trap, experimental multiple-producer style",detail:"[Instrumental] innovative multi-producer fusion concept, experimental melodic trap, creative 808, 138 BPM, experimental collective fusion modern trap loop"}
    ]
  },
  {
    name:"Helluva", alias:"DJ Plugg / Helluva Boss",
    eras:["2010s","2020s"], styles:["trap","south"],
    region:"Midwest", city:"Detroit / Michigan", bpm:"130–148",
    desc:"ミシガン州出身のトラッププロデューサー。42 Dugg・EST Gee・Moneybagg Yoのビートを量産し、デトロイト発のリリカルなストリートラップとアトランタトラップを橋渡しするサウンドで急台頭した実力者。",
    sounds:["ミシガントラップ","ダークシンセ","スパースドラム","808ベース","ストリートバイブ","デトロイトメロ"],
    artists:["42 Dugg","EST Gee","Moneybagg Yo","Lil Durk","Young Dolph"],
    prompts:[
      {type:"クラシック（ミシガンストリートトラップ）",style:"Michigan street trap, dark sparse, Helluva style",detail:"[Instrumental] dark sparse Michigan trap beat, ominous synthesizer, heavy 808 bass, street atmosphere, 140 BPM, Michigan dark street trap loop"},
      {type:"モダン（デトロイトATLフュージョン）",style:"Detroit-Atlanta trap fusion, modern dark, street melodic",detail:"[Instrumental] Detroit-Atlanta crossover synthesizer, dark trap drums, deep 808, street melodic feel, 142 BPM, Detroit-Atlanta dark fusion trap loop"},
      {type:"実験的（ミシガンダークウェイブ）",style:"Michigan dark wave trap, experimental gritty, ominous",detail:"[Instrumental] ominous Michigan dark wave synthesizer, experimental sparse drums, heavy 808, 138 BPM, dark wave experimental Michigan trap loop"}
    ]
  },
  {
    name:"Bandplay", alias:"",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Charlotte, NC", bpm:"130–148",
    desc:"ノースカロライナ州シャーロット出身のトラッププロデューサー。Cardi B・Moneybagg Yo・Rod Waveらの楽曲を手がけ、感情的なシンセメロディーとソフトなアプローチで2020年代のトラップポップクロスオーバーを牽引。",
    sounds:["エモーショナルシンセ","ソフトトラップビート","808スライド","メロウコード","ポップクロスオーバー","NCバイブ"],
    artists:["Cardi B","Moneybagg Yo","Rod Wave","Lil Durk","Polo G"],
    prompts:[
      {type:"クラシック（NCメロトラップ）",style:"NC melodic trap, emotional pop crossover, soft Bandplay style",detail:"[Instrumental] emotional melodic synthesizer, soft 808 bass, trap drum pattern, pop crossover chord progression, 138 BPM, NC melodic emotional pop trap loop"},
      {type:"モダン（トラップポップ）",style:"trap pop crossover, modern emotional, mainstream melodic",detail:"[Instrumental] mainstream melodic hook, modern trap drums, smooth 808 bass, 140 BPM, modern mainstream trap pop melodic loop"},
      {type:"実験的（メロウポップトラップフュージョン）",style:"mellow pop trap fusion, experimental emotional, innovative NC",detail:"[Instrumental] innovative NC mellow synthesizer, experimental trap drums, smooth 808, 136 BPM, mellow pop trap experimental NC fusion loop"}
    ]
  },
  {
    name:"DJ Dahi", alias:"Dacoury Natche",
    eras:["2010s","2020s"], styles:["alternative","west coast","trap"],
    region:"West Coast", city:"Inglewood, CA", bpm:"82–105",
    desc:"Inglewood出身のLA拠点プロデューサー。Kendrick Lamarの「Money Trees」・Drakeの「Worst Behavior」・Big Seanの「I Don't Fuck with You」など名作を手がけ、ジャジーなウェストコーストの感覚とソウルを持つ実力者。グラミー受賞。",
    sounds:["ウェストコーストジャズ","メロディックコード","オーガニックグルーヴ","ソウルテクスチャー","LAアンビエント","クリーンドラム"],
    artists:["Kendrick Lamar","Drake","Big Sean","21 Savage","SZA"],
    prompts:[
      {type:"クラシック（LAコンシャスビート）",style:"LA conscious hip hop beat, jazzy West Coast, melodic soulful",detail:"[Instrumental] jazzy West Coast melodic sample, organic groove drum pattern, smooth bass, ambient LA pad, 88 BPM, conscious melodic West Coast hip hop loop"},
      {type:"モダン（グラミーウィナースタイル）",style:"Grammy-winning West Coast hip hop, melodic sophisticated, modern",detail:"[Instrumental] sophisticated melodic synthesizer, modern clean drum pattern, warm bass, ambient textures, 90 BPM, Grammy-quality sophisticated West Coast hip hop loop"},
      {type:"実験的（ジャジーアンビエントLA）",style:"jazzy ambient LA hip hop, experimental West Coast, atmospheric",detail:"[Instrumental] experimental jazzy ambient textures, atmospheric West Coast feel, creative drum programming, 85 BPM, jazzy ambient experimental LA hip hop loop"}
    ]
  },
  {
    name:"RiotUSA", alias:"Ephrem Lopez Jr.",
    eras:["2020s"], styles:["trap","alternative","experimental"],
    region:"East Coast", city:"New York, NY", bpm:"130–150",
    desc:"2023〜2024年BMI R&B/Hip-Hop Awards「Top Producer」2年連続受賞のNYプロデューサー。Ice Spiceとの出会いから台頭し、「セクシーなドリルとポップラップ」の新ジャンルを確立。Billboard Hot 100に9曲、Top 10に4曲ランクイン。",
    sounds:["NYドリルビート","セクシーシンセ","ポップラップクロスオーバー","808ベース","クリスプドラム","キャッチーメロ"],
    artists:["Ice Spice","Cardi B","Offset","Lil Tjay"],
    prompts:[
      {type:"クラシック（NYポップドリル）",style:"NY pop drill, RiotUSA style, sexy catchy, Ice Spice era",detail:"[Instrumental] catchy NY drill synthesizer, sexy pop crossover drum pattern, punchy 808 bass, 140 BPM, NY pop drill sexy catchy loop"},
      {type:"モダン（BMIトッププロデューサー）",style:"BMI top producer style, mainstream hit-making, modern NY",detail:"[Instrumental] hit-ready synthesizer hook, crisp modern drum pattern, clean 808, pop crossover feel, 142 BPM, mainstream modern NY hip hop hit loop"},
      {type:"実験的（セクシードリルフュージョン）",style:"sexy drill fusion, experimental pop drill NY, innovative",detail:"[Instrumental] innovative sexy drill-pop fusion synthesizer, experimental drum pattern, creative 808, 138 BPM, experimental sexy drill pop fusion NY loop"}
    ]
  },
  {
    name:"Conductor Williams", alias:"",
    eras:["2010s","2020s"], styles:["boom bap","jazzy","underground"],
    region:"East Coast", city:"New York, NY", bpm:"82–96",
    desc:"「Conductor, we have a problem」のタグで知られるGriselda Records系のビートメイカー。Westside Gunn・Conway the Machine・Boldy James・Drake・JIDの名作を手がけ、ウォームなジャズライクなブームバッププロダクションで評価される。グラミーノミネート。",
    sounds:["ジャズライクサンプル","ウォームテクスチャー","グリセルダサウンド","ハードドラム","ディープベース","シネマティックグルーヴ"],
    artists:["Westside Gunn","Conway the Machine","Boldy James","Drake","JID","J. Cole"],
    prompts:[
      {type:"クラシック（グリセルダブームバップ）",style:"Griselda boom bap, Conductor Williams style, warm jazz cinematic",detail:"[Instrumental] warm jazz-like sample, hard punchy Griselda-style drum, deep bass, cinematic groove, 86 BPM, warm Griselda jazz boom bap underground loop"},
      {type:"モダン（ウォームシネマビート）",style:"warm cinematic boom bap, modern underground, Grammy-quality",detail:"[Instrumental] cinematic warm sample, modern crisp drum pattern, rich bass, atmospheric texture, 88 BPM, warm cinematic modern underground boom bap loop"},
      {type:"実験的（ジャズグリセルダ）",style:"jazz Griselda experimental, abstract underground, dark warm",detail:"[Instrumental] abstract jazzy sample exploration, experimental Griselda drum pattern, dark warm bass, 84 BPM, abstract jazzy dark underground experimental hip hop loop"}
    ]
  },
  {
    name:"Earl on the Beat", alias:"",
    eras:["2010s","2020s"], styles:["trap","south","alternative"],
    region:"South", city:"Atlanta, GA", bpm:"130–148",
    desc:"Drake & 21 Savage「Privileged Rappers」・Doja Cat「Paint the Town Red」などヒット量産のアトランタのトラッププロデューサー。2023〜2024年を代表するシーンの中心的ビートメイカーとして急浮上。",
    sounds:["ヒットトラップビート","メロディックシンセ","808ベース","クリスプドラム","ポップクロスオーバー","アトランタモダン"],
    artists:["Drake","21 Savage","Doja Cat","Lil Baby","Future"],
    prompts:[
      {type:"クラシック（2020年代ヒットトラップ）",style:"2020s hit trap, Earl on the Beat style, polished mainstream",detail:"[Instrumental] polished hit synthesizer, crisp modern trap drums, 808 bass, mainstream chart-ready feel, 140 BPM, 2020s hit mainstream trap loop"},
      {type:"モダン（チャートトッパートラップ）",style:"chart-topper trap, modern Atlanta, pop hip hop crossover",detail:"[Instrumental] chart-ready melodic hook, crisp trap drum pattern, clean 808, pop hip hop crossover feel, 142 BPM, chart-topper modern trap pop loop"},
      {type:"実験的（ポップトラップフュージョン）",style:"pop trap fusion, experimental mainstream crossover, innovative ATL",detail:"[Instrumental] innovative pop-trap fusion synthesizer, experimental drum programming, creative 808, 138 BPM, experimental pop trap fusion mainstream loop"}
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
