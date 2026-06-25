const SEED_PRODUCERS = [
  {
    "id": 1,
    "name": "DJ Premier",
    "alias": "Premo",
    "city": "Brooklyn, NY",
    "bpm": "84–96",
    "eras": [
      "90s"
    ],
    "styles": [
      "boom bap",
      "underground"
    ],
    "region": "East Coast",
    "desc": "90年代NYハードコアHipHopの象徴。Gang Starrのメンバーとして活躍し、チョップされたジャズサンプル・スクラッチ・ハードなMPCドラムで独自の「プリモサウンド」を確立した。",
    "sounds": [
      "チョップサンプル",
      "バイナルスクラッチ",
      "バイナルクラックル",
      "ハードMPCドラム",
      "ジャズサンプル",
      "ベースライン"
    ],
    "artists": [
      "Gang Starr",
      "Nas",
      "Jay-Z",
      "Notorious B.I.G.",
      "Jeru the Damaja",
      "Big L"
    ],
    "prompts": [
      {
        "type": "クラシック（90s本格派）",
        "style": "90s New York hardcore hip hop, boom bap, dark gritty underground, no vocals, instrumental",
        "detail": "[Instrumental] chopped jazz vinyl samples with vinyl crackle, hard hitting MPC boom bap drums, DJ scratching cuts, deep bassline, 88 BPM, dark gritty New York underground atmosphere, raw aggressive energy, instrumental loop [No Vocals]"
      },
      {
        "type": "モダン（現代解釈）",
        "style": "modern boom bap hip hop, DJ Premier inspired, New York underground, no vocals, instrumental",
        "detail": "[Instrumental] crisp chopped soul samples, hard punchy drums, clean scratch elements, 90 BPM, classic New York underground hip hop loop, polished yet raw production feel [No Vocals]"
      },
      {
        "type": "実験的（エクスペリメンタル）",
        "style": "experimental boom bap, abstract hip hop, avant-garde sampling, no vocals, instrumental",
        "detail": "[Instrumental] deconstructed jazz samples, glitchy abstract scratching, unconventional drum patterns, dark atmospheric textures, 85 BPM, underground experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 2,
    "name": "Pete Rock",
    "alias": "The Soul Controller",
    "city": "New Rochelle, NY",
    "bpm": "88–98",
    "eras": [
      "90s"
    ],
    "styles": [
      "boom bap",
      "jazzy"
    ],
    "region": "East Coast",
    "desc": "C.L. Smoothとのデュオで有名な「ソウルコントローラー」。ホルンやブラスをフィーチャーしたソウルフルかつジャジーなサンプリングで90年代NYシーンに唯一無二のグルーヴをもたらした。",
    "sounds": [
      "ホルンサンプル",
      "ソウルフルループ",
      "ジャジードラム",
      "ウォームベース",
      "ブラスサンプル"
    ],
    "artists": [
      "C.L. Smooth",
      "Gang Starr",
      "Nas",
      "Big Pun",
      "Rakim"
    ],
    "prompts": [
      {
        "type": "クラシック（90sソウルジャジー）",
        "style": "90s soulful jazz hip hop, boom bap, New York, warm and groovy, no vocals, instrumental",
        "detail": "[Instrumental] warm soulful horn samples, jazzy piano chords, smooth boom bap drum pattern, deep bass groove, vinyl warmth, 92 BPM, uplifting soulful New York hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クリーンソウル）",
        "style": "modern jazzy hip hop, neo soul influenced, soulful beats, no vocals, instrumental",
        "detail": "[Instrumental] chopped brass and horn samples, clean punchy drums, warm bass, jazz chord progressions, 90 BPM, soulful smooth hip hop instrumental loop, positive uplifting feel [No Vocals]"
      },
      {
        "type": "実験的（ジャズフュージョン）",
        "style": "jazz fusion hip hop, experimental soul, abstract beats, no vocals, instrumental",
        "detail": "[Instrumental] complex jazz sample layering, live drumkit feel, saxophone and trumpet accents, modal jazz harmony, 88 BPM, sophisticated jazz-hip-hop fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 3,
    "name": "RZA",
    "alias": "Bobby Digital",
    "city": "Staten Island, NY",
    "bpm": "70–92",
    "eras": [
      "90s"
    ],
    "styles": [
      "boom bap",
      "alternative"
    ],
    "region": "East Coast",
    "desc": "Wu-Tang Clanのサウンドアーキテクト。カンフー映画のダイアログ・不穏な弦楽サンプル・重いドラムで独自のダーク&シネマティックなワールドを構築した。",
    "sounds": [
      "カンフー映画SE",
      "ダーク弦楽",
      "重いドラム",
      "グリミーテクスチャー",
      "ボイスサンプル",
      "ダークアンビエンス"
    ],
    "artists": [
      "Wu-Tang Clan",
      "Ghostface Killah",
      "GZA",
      "Method Man",
      "Raekwon"
    ],
    "prompts": [
      {
        "type": "クラシック（WuTangダーク）",
        "style": "90s dark cinematic hip hop, Wu-Tang style, gritty underground, no vocals, instrumental",
        "detail": "[Instrumental] dark and eerie string samples, kung fu movie dialogue cuts, heavy booming drums, ominous bass, dusty vinyl texture, 80 BPM, dark atmospheric underground New York hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ダークシネマ）",
        "style": "dark cinematic hip hop, atmospheric, moody underground, no vocals, instrumental",
        "detail": "[Instrumental] ominous orchestral strings, heavy drums, deep sub bass, mysterious atmospheric pads, 84 BPM, dark cinematic hip hop loop, thriller movie soundtrack feel [No Vocals]"
      },
      {
        "type": "実験的（ホラーアブストラクト）",
        "style": "horror hip hop, abstract dark beats, experimental underground, no vocals, instrumental",
        "detail": "[Instrumental] distorted eerie samples, unconventional dark textures, warped vocal chops, industrial percussion, 75 BPM, abstract horror-influenced hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 4,
    "name": "J Dilla",
    "alias": "Jay Dee / Donuts",
    "city": "Detroit, MI",
    "bpm": "75–95",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "lo-fi",
      "neo soul",
      "alternative",
      "jazzy"
    ],
    "region": "Midwest",
    "desc": "ビートメイキングを芸術に昇華させた天才。意図的にオフビートで置かれたドラム・MPC3000の独特のスウィング・ソウルフルなサンプリングで後世に多大な影響を与えた。",
    "sounds": [
      "オフビートドラム",
      "MPCスウィング",
      "ソウルサンプル",
      "ウォームテクスチャー",
      "ジャジーコード",
      "グルーヴィーベース"
    ],
    "artists": [
      "Common",
      "De La Soul",
      "A Tribe Called Quest",
      "Erykah Badu",
      "D'Angelo",
      "Slum Village"
    ],
    "prompts": [
      {
        "type": "クラシック（Dilla感）",
        "style": "lo-fi hip hop, Detroit MPC beats, neo soul, off-kilter groovy, no vocals, instrumental",
        "detail": "[Instrumental] warm soulful sample chops, intentionally off-beat MPC drum swing, jazzy chord stabs, deep bass groove, dusty vinyl texture, 82 BPM, Detroit soul hip hop loop, organic imperfect feel [No Vocals]"
      },
      {
        "type": "モダン（ローファイソウル）",
        "style": "lo-fi hip hop, soulful beats, chill relaxing, neo soul influenced, no vocals, instrumental",
        "detail": "[Instrumental] mellow soulful piano and guitar samples, laid-back swinging drum groove, warm bass, tape saturation, cassette hiss, 80 BPM, chill lo-fi hip hop soul loop [No Vocals]"
      },
      {
        "type": "実験的（デトロイトジャズ）",
        "style": "experimental Detroit hip hop, jazz deconstruction, abstract beats, no vocals, instrumental",
        "detail": "[Instrumental] complex jazz sample manipulation, glitchy MPC stutters, polyrhythmic drum patterns, modal jazz harmony fragments, 78 BPM, experimental Detroit beatscape loop [No Vocals]"
      }
    ]
  },
  {
    "id": 5,
    "name": "Madlib",
    "alias": "Quasimoto / Lord Quas",
    "city": "Oxnard, CA",
    "bpm": "70–95",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "lo-fi",
      "alternative",
      "jazzy"
    ],
    "region": "West Coast",
    "desc": "ガレージに埋もれた世界中のレアグルーヴを掘り起こし、独自のサイケデリックな視点で再構築する「クレートダイガーの王」。MF DOOMとのコラボ「Madvillainy」は歴史的名盤。",
    "sounds": [
      "レアグルーヴサンプル",
      "サイケデリックテクスチャー",
      "エスニックサンプル",
      "ローファイドラム",
      "グリッチ"
    ],
    "artists": [
      "MF DOOM",
      "Mos Def",
      "Freddie Gibbs",
      "Quasimoto",
      "Kanye West"
    ],
    "prompts": [
      {
        "type": "クラシック（サイケクレート）",
        "style": "lo-fi psychedelic hip hop, crate digging, abstract beats, dusty, no vocals, instrumental",
        "detail": "[Instrumental] obscure rare groove vinyl samples, psychedelic and exotic textures, dusty lo-fi drum breaks, ethnic music fragments, 80 BPM, abstract crate-digging hip hop loop, trippy atmospheric feel [No Vocals]"
      },
      {
        "type": "モダン（アブストラクト）",
        "style": "abstract hip hop, lo-fi experimental, multi-genre sampling, no vocals, instrumental",
        "detail": "[Instrumental] layered world music samples, chopped and filtered jazz, avant-garde drum patterns, psychedelic bass, 78 BPM, abstract lo-fi hip hop experimental loop [No Vocals]"
      },
      {
        "type": "実験的（ワールドミュージック融合）",
        "style": "world music hip hop fusion, experimental lo-fi, psychedelic beats, no vocals, instrumental",
        "detail": "[Instrumental] fused African, Brazilian, Asian music samples over hip hop beats, exotic percussion, modal scales, drone textures, 72 BPM, psychedelic world-fusion hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 6,
    "name": "Dr. Dre",
    "alias": "The Chronic",
    "city": "Compton, CA",
    "bpm": "90–104",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "g-funk",
      "west coast"
    ],
    "region": "West Coast",
    "desc": "Gファンクの定義者にして西海岸HipHopの頂点。George Clinton/P-Funkのシンセベース・Talkboxを取り込み、Snoop Dogg・Eminem・50 Centといった才能を世に送り出した。",
    "sounds": [
      "Gファンクシンセ",
      "シンセベース",
      "Pファンクサンプル",
      "Talkbox",
      "クリーンドラム",
      "ウェストコーストグルーヴ"
    ],
    "artists": [
      "Snoop Dogg",
      "Eminem",
      "50 Cent",
      "Ice Cube",
      "Kendrick Lamar"
    ],
    "prompts": [
      {
        "type": "クラシック（Gファンク）",
        "style": "90s G-funk West Coast hip hop, gangsta rap beat, smooth and funky, no vocals, instrumental",
        "detail": "[Instrumental] G-funk synthesizer melody, deep synth bass groove, P-Funk influenced samples, talkbox voice, laid-back West Coast drum groove, 96 BPM, smooth Compton hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ドレービート）",
        "style": "modern West Coast hip hop, Dr. Dre influenced, polished G-funk, no vocals, instrumental",
        "detail": "[Instrumental] clean polished synthesizer chords, heavy 808 bass, crisp snare and hi-hat, West Coast swagger groove, 98 BPM, refined modern G-funk hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオGファンク）",
        "style": "neo G-funk, futuristic West Coast, cinematic hip hop, no vocals, instrumental",
        "detail": "[Instrumental] evolved G-funk with orchestral strings, futuristic synth layers, heavy sub bass, cinematic drum programming, 100 BPM, modern cinematic West Coast hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 7,
    "name": "The Neptunes",
    "alias": "Pharrell Williams & Chad Hugo",
    "city": "Virginia Beach, VA",
    "bpm": "95–112",
    "eras": [
      "2000s"
    ],
    "styles": [
      "funk",
      "alternative"
    ],
    "region": "East Coast",
    "desc": "2000年代の音楽シーンを席巻したネプチューンズ。ミニマルなドラムパターン・独特のシンセ・ファンキーなグルーヴで、Jay-Z・Clipse・Nelly・Beyoncéなど無数のヒットを生んだ。",
    "sounds": [
      "ミニマルドラム",
      "独特シンセ",
      "ファンキーベース",
      "808",
      "スネアクラップ",
      "エレクトリックギター"
    ],
    "artists": [
      "Jay-Z",
      "Clipse",
      "Nelly",
      "Snoop Dogg",
      "Pharrell",
      "Justin Timberlake"
    ],
    "prompts": [
      {
        "type": "クラシック（ネプチューンズ）",
        "style": "2000s Neptunes hip hop beat, minimalist funky, unique drum pattern, no vocals, instrumental",
        "detail": "[Instrumental] sparse minimalist drum pattern with unique syncopation, funky synthesizer stabs, deep bass groove, clap-heavy rhythm, 100 BPM, Neptunes-style hip hop funk loop, quirky infectious groove [No Vocals]"
      },
      {
        "type": "モダン（ミニマルファンク）",
        "style": "minimalist hip hop funk, modern Pharrell inspired, clean production, no vocals, instrumental",
        "detail": "[Instrumental] stripped-back minimalist drum groove, bouncy synthesizer melody, electric bass, precise hi-hat patterns, 104 BPM, clean minimalist hip hop funk loop [No Vocals]"
      },
      {
        "type": "実験的（スペースファンク）",
        "style": "space funk hip hop, futuristic minimalism, electronic funk, no vocals, instrumental",
        "detail": "[Instrumental] alien synthesizer textures over minimalist drum groove, cosmic bass, futuristic sound design elements, 98 BPM, experimental space-funk hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 8,
    "name": "Timbaland",
    "alias": "Tim Mosley",
    "city": "Norfolk, VA",
    "bpm": "90–108",
    "eras": [
      "2000s"
    ],
    "styles": [
      "alternative",
      "funk"
    ],
    "region": "East Coast",
    "desc": "ティンバランドのリズムパターンは唯一無二。インドや中東・アフリカの音楽を大胆に取り込んだエスニックなパーカッション・独特のドラムプログラミングでR&BとHipHopの境界を塗り替えた。",
    "sounds": [
      "独特リズムパターン",
      "インドパーカッション",
      "エレクトリックサウンド",
      "ユニークドラム",
      "エスニックサンプル"
    ],
    "artists": [
      "Missy Elliott",
      "Jay-Z",
      "Aaliyah",
      "Justin Timberlake",
      "Nelly Furtado"
    ],
    "prompts": [
      {
        "type": "クラシック（ティンバランドリズム）",
        "style": "2000s Timbaland hip hop R&B beat, unique drum pattern, exotic percussion, no vocals, instrumental",
        "detail": "[Instrumental] Timbaland-style unique syncopated drum pattern, Indian and Middle Eastern percussion elements, electric synthesizer stabs, unusual bass groove, 98 BPM, exotic rhythmic hip hop R&B loop [No Vocals]"
      },
      {
        "type": "モダン（エスニックフュージョン）",
        "style": "modern ethnic fusion hip hop, world beat, unique percussion programming, no vocals, instrumental",
        "detail": "[Instrumental] complex polyrhythmic percussion layers, exotic world instruments, synthesizer textures, 100 BPM, modern ethnic-fusion hip hop loop with global influences [No Vocals]"
      },
      {
        "type": "実験的（ポリリズム）",
        "style": "polyrhythmic experimental hip hop, percussion-forward, eclectic, no vocals, instrumental",
        "detail": "[Instrumental] layered polyrhythmic drum patterns from multiple cultures, glitchy electronic elements, abstract bass, 96 BPM, experimental polyrhythmic percussion hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 9,
    "name": "Kanye West",
    "alias": "Ye / Louis Vuitton Don",
    "city": "Chicago, IL",
    "bpm": "86–104",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "alternative"
    ],
    "region": "Midwest",
    "desc": "ソウルサンプルをスピードアップさせる「ソウルサンプルチョップ」を確立した2000年代の革命児。College Dropout期の温かみのある楽観的なサウンドから後期の前衛的なエクスペリメンタルまで幅広い。",
    "sounds": [
      "スピードアップソウル",
      "ピアノサンプル",
      "808キック",
      "シンセ",
      "オーケストラ"
    ],
    "artists": [
      "Jay-Z",
      "Common",
      "Lil Wayne",
      "Kid Cudi",
      "Frank Ocean"
    ],
    "prompts": [
      {
        "type": "クラシック（ソウルサンプル期）",
        "style": "2000s soul sample hip hop, Chicago, warm uplifting, boom bap soul, no vocals, instrumental",
        "detail": "[Instrumental] sped-up chopped soul sample, warm piano chords, hard-hitting drum pattern, uplifting gospel-influenced feel, 90 BPM, classic Chicago soul hip hop loop, optimistic warm atmosphere [No Vocals]"
      },
      {
        "type": "モダン（808マキシマリスト）",
        "style": "808 heavy hip hop, maximalist production, orchestral hip hop, no vocals, instrumental",
        "detail": "[Instrumental] 808 bass drums, lush orchestral strings, dramatic choir swells, heavy bass drop, 95 BPM, maximalist cinematic hip hop loop, grandiose epic feel [No Vocals]"
      },
      {
        "type": "実験的（前衛エレクトロ）",
        "style": "experimental electronic hip hop, avant-garde, industrial influenced, no vocals, instrumental",
        "detail": "[Instrumental] distorted industrial samples, deconstructed 808 patterns, abstract electronic textures, 88 BPM, experimental avant-garde hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 10,
    "name": "Metro Boomin",
    "alias": "Not All Heroes Wear Capes",
    "city": "Atlanta, GA",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap"
    ],
    "region": "South",
    "desc": "モダントラップの頂点。ダークでシネマティックなオーケストラサウンドと808ベース・連打するハイハットで、Future・21 Savage・Drake等の楽曲を手がけたアトランタのキングプロデューサー。",
    "sounds": [
      "オーケストラサンプル",
      "808ベース",
      "トリプレットハイハット",
      "ダークパッド",
      "シネマティックストリングス"
    ],
    "artists": [
      "Future",
      "21 Savage",
      "Drake",
      "Young Thug",
      "Gucci Mane",
      "Offset"
    ],
    "prompts": [
      {
        "type": "クラシック（ダークトラップ）",
        "style": "dark trap hip hop, Metro Boomin style, Atlanta, cinematic, no vocals, instrumental",
        "detail": "[Instrumental] dark orchestral string samples, heavy 808 bass hits, rapid trap hi-hat rolls, ominous piano stabs, thunderous snare, 140 BPM, dark cinematic Atlanta trap loop [No Vocals]"
      },
      {
        "type": "モダン（メロトラップ）",
        "style": "melodic dark trap, atmospheric, modern Atlanta trap, no vocals, instrumental",
        "detail": "[Instrumental] melancholic piano melody over trap drums, sliding 808 bass, layered trap hi-hats, dark atmospheric pads, 138 BPM, modern melodic dark trap loop [No Vocals]"
      },
      {
        "type": "実験的（シネマトラップ）",
        "style": "cinematic trap, orchestral hip hop, epic dark production, no vocals, instrumental",
        "detail": "[Instrumental] full orchestral arrangement with trap drums, epic brass and strings, 808 bass drops, cinematic build-ups, 142 BPM, epic cinematic trap loop, blockbuster movie feel [No Vocals]"
      }
    ]
  },
  {
    "id": 11,
    "name": "Zaytoven",
    "alias": "Zay",
    "city": "Atlanta, GA",
    "bpm": "130–145",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "trap"
    ],
    "region": "South",
    "desc": "アトランタのピアノトラップパイオニア。チャーチで培ったピアノ技術をトラップに融合し、Gucci Mane・Future・21 Savage・Migos等のアトランタシーン形成に貢献した。",
    "sounds": [
      "ピアノメロディー",
      "808ベース",
      "トリプレットハイハット",
      "チャーチオルガン",
      "ベルサウンド"
    ],
    "artists": [
      "Gucci Mane",
      "Future",
      "Migos",
      "21 Savage",
      "Young Thug"
    ],
    "prompts": [
      {
        "type": "クラシック（ピアノトラップ）",
        "style": "Atlanta piano trap, Zaytoven style, church influenced, melodic, no vocals, instrumental",
        "detail": "[Instrumental] melodic piano loop in trap beat, church organ undertones, heavy 808 bass, triplet hi-hat pattern, bright synth bells, 138 BPM, Atlanta piano trap loop, gospel-influenced melody [No Vocals]"
      },
      {
        "type": "モダン（メロディックトラップ）",
        "style": "melodic trap, piano-driven, Atlanta modern trap, no vocals, instrumental",
        "detail": "[Instrumental] catchy piano melody with trap production, sliding 808, layered melodic elements, trap drum pattern, 140 BPM, modern melodic Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（ゴスペルトラップ）",
        "style": "gospel trap fusion, spiritual hip hop, experimental church sound, no vocals, instrumental",
        "detail": "[Instrumental] gospel choir samples over trap drums, church organ and piano, 808 bass, spiritual and street fusion, 136 BPM, gospel trap experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 12,
    "name": "Pi'erre Bourne",
    "alias": "Pierre",
    "city": "Columbia, SC",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "South",
    "desc": "エーテリアルトラップの先駆者。独特のサンプリング感覚・夢幻的なシンセテクスチャー・浮遊感のあるビートでPlayboi Carti・21 Savage等の楽曲を手がけ、ロマンチックなトラップ新世界を創出。",
    "sounds": [
      "浮遊シンセ",
      "ドリーミーテクスチャー",
      "エーテリアルサンプル",
      "808ベース",
      "キラキラベル"
    ],
    "artists": [
      "Playboi Carti",
      "21 Savage",
      "Lil Uzi Vert",
      "SosThatky",
      "Juice WRLD"
    ],
    "prompts": [
      {
        "type": "クラシック（エーテリアルトラップ）",
        "style": "ethereal trap, dreamy atmospheric, Pierre Bourne style, no vocals, instrumental",
        "detail": "[Instrumental] dreamy floating synthesizer melody, otherworldly atmospheric pads, heavy 808 bass, trap drum pattern, sparkling bells and arpeggios, 140 BPM, ethereal psychedelic trap loop [No Vocals]"
      },
      {
        "type": "モダン（ドリームトラップ）",
        "style": "dream trap, psychedelic hip hop, floaty atmospheric, no vocals, instrumental",
        "detail": "[Instrumental] surreal synthesizer textures, pitch-shifted dreamy samples, sliding 808, layered atmospheric sounds, 142 BPM, dreamy hypnotic trap loop, mind-bending sonic landscape [No Vocals]"
      },
      {
        "type": "実験的（サイケトラップ）",
        "style": "psychedelic trap, experimental hip hop, surreal production, no vocals, instrumental",
        "detail": "[Instrumental] heavily processed psychedelic samples, glitchy dream sequences, warped 808 bass, abstract trap drums, 136 BPM, surreal experimental psychedelic trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 13,
    "name": "Mannie Fresh",
    "alias": "The Original",
    "city": "New Orleans, LA",
    "bpm": "98–112",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "south"
    ],
    "region": "South",
    "desc": "Cash Money Records専属のサウンドアーキテクト。ニューオーリンズバウンスのリズム・派手なシンセブラス・エレクトリックドラムでBirdmanやLil Wayne等の楽曲を手がけた。",
    "sounds": [
      "バウンスビート",
      "シンセブラス",
      "エレクトリックドラム",
      "ファンキーベース",
      "ニューオーリンズリズム"
    ],
    "artists": [
      "Birdman",
      "Lil Wayne",
      "Hot Boys",
      "B.G.",
      "Juvenile"
    ],
    "prompts": [
      {
        "type": "クラシック（NOバウンス）",
        "style": "New Orleans bounce hip hop, Cash Money style, party beat, energetic, no vocals, instrumental",
        "detail": "[Instrumental] New Orleans bounce rhythm pattern, punchy synth brass stabs, energetic electric drum machine, deep bass groove, party anthem feel, 106 BPM, New Orleans hip hop bounce loop [No Vocals]"
      },
      {
        "type": "モダン（サウスパーティー）",
        "style": "Southern party hip hop, bounce influenced, festive energetic, no vocals, instrumental",
        "detail": "[Instrumental] upbeat southern hip hop groove, synth brass flourishes, driving drum pattern, bass-heavy, 104 BPM, energetic party southern hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（エレクトロバウンス）",
        "style": "electro bounce hip hop, New Orleans electronic, futuristic party, no vocals, instrumental",
        "detail": "[Instrumental] electronic New Orleans bounce pattern, synthesized brass, futuristic drum programming, deep electronic bass, 108 BPM, electro bounce hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 14,
    "name": "Three 6 Mafia",
    "alias": "DJ Paul & Juicy J",
    "city": "Memphis, TN",
    "bpm": "78–96",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "south",
      "crunk"
    ],
    "region": "South",
    "desc": "メンフィスホラーコアとクランクの開拓者。不穏でスプーキーなダークシンセ・ヘビーなスロービート・ホラー映画的な雰囲気でアンダーグラウンドから世界へ。アカデミー賞受賞のユニーク経歴も持つ。",
    "sounds": [
      "ダークシンセ",
      "スプーキーループ",
      "ヘビードラム",
      "ホラーSE",
      "不穏メロディー"
    ],
    "artists": [
      "Crunchy Black",
      "Project Pat",
      "Young Buck",
      "Wiz Khalifa"
    ],
    "prompts": [
      {
        "type": "クラシック（メンフィスホラー）",
        "style": "Memphis horrorcore hip hop, dark and eerie, Three 6 Mafia style, no vocals, instrumental",
        "detail": "[Instrumental] spooky synthesizer loop, dark horror movie-inspired melody, heavy slow drum pattern, ominous bass, eerie sound effects, 85 BPM, Memphis horrorcore underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ダーククランク）",
        "style": "dark crunk hip hop, Memphis influenced, heavy and sinister, no vocals, instrumental",
        "detail": "[Instrumental] heavy sinister synthesizer chords, crunk drum pattern, dark atmospheric pad, bass-heavy low-end, 90 BPM, modern dark crunk Southern hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ホラーアブストラクト）",
        "style": "horror hip hop, dark experimental, Memphis underground, no vocals, instrumental",
        "detail": "[Instrumental] warped horror samples, industrial percussion, distorted dark synthesizers, 80 BPM, extreme dark experimental horror hip hop loop, unsettling atmosphere [No Vocals]"
      }
    ]
  },
  {
    "id": 15,
    "name": "Flying Lotus",
    "alias": "FlyLo / Captain Murphy",
    "city": "Los Angeles, CA",
    "bpm": "80–108",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "lo-fi"
    ],
    "region": "West Coast",
    "desc": "John Coltraneの甥でもある実験的音楽家。ジャズ・エレクトロニック・HipHopを融合した「ブレインフィーダーサウンド」で、Kendrick Lamar「untitled unmastered」にも参加した。",
    "sounds": [
      "グリッチエレクトロニクス",
      "ジャズフラグメント",
      "実験的リズム",
      "レイヤードシンセ",
      "アブストラクトテクスチャー"
    ],
    "artists": [
      "Kendrick Lamar",
      "Thundercat",
      "Erykah Badu",
      "Snoop Dogg",
      "Mos Def"
    ],
    "prompts": [
      {
        "type": "クラシック（エレクトロジャズ）",
        "style": "experimental electronic hip hop, jazz influenced, glitchy abstract, no vocals, instrumental",
        "detail": "[Instrumental] glitchy electronic beats with jazz fragments, abstract synthesizer textures, unconventional drum programming, jazz piano and bass echoes, 90 BPM, experimental jazz-electronic hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（フューチャービート）",
        "style": "future beats, experimental jazz hip hop, cosmic electronic, no vocals, instrumental",
        "detail": "[Instrumental] cosmic synthesizer layers, jazz-influenced melodic fragments, complex electronic drum patterns, deep bass frequencies, 88 BPM, futuristic experimental hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（フリーフォーム）",
        "style": "free jazz electronic, abstract beats, avant-garde hip hop, no vocals, instrumental",
        "detail": "[Instrumental] free jazz deconstruction, chaotic yet musical electronic textures, abstract rhythm patterns, 82 BPM, completely experimental avant-garde electronic jazz hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 16,
    "name": "Knxwledge",
    "alias": "Knx",
    "city": "Los Angeles, CA",
    "bpm": "72–90",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "lo-fi",
      "neo soul",
      "alternative"
    ],
    "region": "West Coast",
    "desc": "ローファイビートの先駆者の一人。テープサチュレーションとカセットダビングのノイズ・ソウルフルな短いサンプルループ・オーガニックなドラムグルーヴでドリーミーな音楽世界を展開。",
    "sounds": [
      "テープサチュレーション",
      "ソウルループ",
      "ローファイドラム",
      "カセットノイズ",
      "ドリーミーテクスチャー"
    ],
    "artists": [
      "Kendrick Lamar",
      "NxWorries",
      "Anderson .Paak"
    ],
    "prompts": [
      {
        "type": "クラシック（ローファイネオソウル）",
        "style": "lo-fi hip hop, neo soul, tape saturated, dreamy and warm, no vocals, instrumental",
        "detail": "[Instrumental] warm tape-saturated soul sample loop, lo-fi drum groove with vinyl crackle, cassette hiss, dreamy atmospheric texture, short chopped soul chords, 80 BPM, lo-fi neo-soul hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（チルソウル）",
        "style": "chill lo-fi hip hop, soulful, relaxing, warm bedroom production, no vocals, instrumental",
        "detail": "[Instrumental] mellow soulful guitar and keyboard samples, laid-back lo-fi drum pattern, warm bass, ambient texture, 78 BPM, chill relaxing lo-fi soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（テープループ）",
        "style": "tape loop hip hop, lo-fi experimental, cassette aesthetic, no vocals, instrumental",
        "detail": "[Instrumental] looped cassette tape fragments, degraded vintage sound, lo-fi drum texture, warm distorted bass, 75 BPM, experimental tape loop neo-soul hip hop [No Vocals]"
      }
    ]
  },
  {
    "id": 17,
    "name": "9th Wonder",
    "alias": "Patrick Douthit",
    "city": "Durham, NC",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "south"
    ],
    "region": "South",
    "desc": "Little Brother所属のサウス出身のビートレジェンド。デジタルサンプリングを駆使したソウルフルでウォームなビートで、Jay-Z・Destiny's Child・Mary J. Bligeの楽曲も手がけた。",
    "sounds": [
      "ソウルサンプル",
      "クリーンドラム",
      "ウォームグルーヴ",
      "ジャジーコード",
      "オーガニックフィール"
    ],
    "artists": [
      "Little Brother",
      "Jay-Z",
      "Destiny's Child",
      "Mary J. Blige",
      "Kendrick Lamar"
    ],
    "prompts": [
      {
        "type": "クラシック（サウスブームバップ）",
        "style": "soulful boom bap, 9th Wonder style, warm and organic, Southern, no vocals, instrumental",
        "detail": "[Instrumental] warm soulful sample chop, clean punchy boom bap drums, organic bass groove, smooth jazz-influenced chord progression, 88 BPM, warm Southern soulful hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ソウルグルーヴ）",
        "style": "modern soulful hip hop, clean production, groove-heavy, no vocals, instrumental",
        "detail": "[Instrumental] clean chopped soul samples, crisp drum pattern, warm bass, bright melodic accents, 90 BPM, polished soulful hip hop groove loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーソウル）",
        "style": "jazzy soul hip hop, rich harmonics, warm experimental, no vocals, instrumental",
        "detail": "[Instrumental] complex jazz chord voicings in soul samples, warm organic drum feel, deep harmonic bass, 86 BPM, rich jazzy soul hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 18,
    "name": "The Alchemist",
    "alias": "Al Chemist",
    "city": "Los Angeles, CA",
    "bpm": "78–92",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground"
    ],
    "region": "West Coast",
    "desc": "ダークでミステリアスなサンプリングを得意とするアンダーグラウンドの重鎮。Mobb Deep時代からGriselda Records系まで、重厚で粘り気のあるグリミーなビートで唯一無二の地位を確立。",
    "sounds": [
      "ダークサンプル",
      "グリミーテクスチャー",
      "ハードスネア",
      "ヘビーキック",
      "ミステリアスメロディー"
    ],
    "artists": [
      "Mobb Deep",
      "Action Bronson",
      "Freddie Gibbs",
      "Westside Gunn",
      "Conway the Machine"
    ],
    "prompts": [
      {
        "type": "クラシック（グリミーアンダーグラウンド）",
        "style": "grimy underground hip hop, dark sampling, boom bap, Alchemist style, no vocals, instrumental",
        "detail": "[Instrumental] dark and mysterious sample melody, heavy punchy snare, hard kick drum, grimy low-end bass, ominous atmospheric texture, 84 BPM, grimy underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ダークブームバップ）",
        "style": "modern dark boom bap, underground, mysterious and heavy, no vocals, instrumental",
        "detail": "[Instrumental] murky dark sample chops, hard-hitting drum pattern, deep sub bass, cold atmospheric pads, 86 BPM, modern dark underground boom bap loop [No Vocals]"
      },
      {
        "type": "実験的（ムーディーアブストラクト）",
        "style": "moody abstract hip hop, dark experimental sampling, no vocals, instrumental",
        "detail": "[Instrumental] moody processed samples with abstract textures, unconventional dark harmonics, heavy drum pattern, 80 BPM, dark abstract experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 19,
    "name": "Just Blaze",
    "alias": "Justin Smith",
    "city": "Paterson, NJ",
    "bpm": "90–108",
    "eras": [
      "2000s"
    ],
    "styles": [
      "boom bap",
      "south"
    ],
    "region": "East Coast",
    "desc": "2000年代のJay-Z時代のキープロデューサー。ソウルサンプルをビッグドラムと組み合わせた「アンセムビート」を量産し、Eminem・Kanye・Talib Kweli等の名盤にも参加した。",
    "sounds": [
      "ビッグドラム",
      "スピードアップソウル",
      "オーケストラル",
      "エピックフィール",
      "ブラスセクション"
    ],
    "artists": [
      "Jay-Z",
      "Eminem",
      "Kanye West",
      "Talib Kweli",
      "Freeway"
    ],
    "prompts": [
      {
        "type": "クラシック（アンセムビート）",
        "style": "2000s hip hop anthem beat, big drums, soulful, Just Blaze style, no vocals, instrumental",
        "detail": "[Instrumental] sped-up soul sample with epic brass, massive hard-hitting drum pattern, building orchestral tension, powerful bass, 98 BPM, epic hip hop anthem loop, arena-ready energy [No Vocals]"
      },
      {
        "type": "モダン（エピックソウル）",
        "style": "epic soul hip hop, big room sound, orchestral hip hop, no vocals, instrumental",
        "detail": "[Instrumental] orchestral soul arrangement, powerful boom bap drums, dramatic build-up sections, epic brass and strings, 100 BPM, big room epic hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（マキシマリスト）",
        "style": "maximalist hip hop, orchestral, bombastic production, no vocals, instrumental",
        "detail": "[Instrumental] overwhelming orchestral layers, bombastic drum pattern, multiple sample sources, epic operatic swells, 95 BPM, maximalist orchestral hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 20,
    "name": "No I.D.",
    "alias": "Ernest Dion Wilson",
    "city": "Chicago, IL",
    "bpm": "84–96",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "jazzy"
    ],
    "region": "Midwest",
    "desc": "Kanye Westのメンターでもある現役最高レベルのシカゴレジェンド。Common・Jay-Z・Kendrick Lamar等のアルバム制作に参加し、長きに渡って進化し続ける稀有なプロデューサー。",
    "sounds": [
      "ソウルサンプル",
      "ブームバップドラム",
      "シカゴスタイル",
      "ディープグルーヴ",
      "リッチサンプル"
    ],
    "artists": [
      "Common",
      "Jay-Z",
      "Kendrick Lamar",
      "Kanye West",
      "Pusha T"
    ],
    "prompts": [
      {
        "type": "クラシック（シカゴソウル）",
        "style": "Chicago boom bap soul hip hop, classic Midwest, rich sampling, no vocals, instrumental",
        "detail": "[Instrumental] deep soulful Chicago-style sample, hard boom bap drum pattern, heavy bass groove, warm harmonic texture, 88 BPM, classic Midwest Chicago soul hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（エレガントソウル）",
        "style": "elegant soulful hip hop, sophisticated sampling, Midwest, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated soul sample arrangement, clean punchy drums, warm bass, refined musical feel, 90 BPM, elegant sophisticated Midwest soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオソウルブームバップ）",
        "style": "neo soul boom bap fusion, experimental Chicago, deep groove, no vocals, instrumental",
        "detail": "[Instrumental] deep harmonic soul samples, experimental drum programming, bass-heavy groove, 85 BPM, neo-soul boom bap Chicago fusion experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 21,
    "name": "Lil Jon",
    "alias": "The King of Crunk",
    "city": "Atlanta, GA",
    "bpm": "100–118",
    "eras": [
      "2000s"
    ],
    "styles": [
      "crunk",
      "south"
    ],
    "region": "South",
    "desc": "クランクの王様。アグレッシブでハイエナジーなシンセ・チャント向けのビート・クラブを揺らすドラムパターンで、East Side Boyzとして2000年代のクラブシーンに旋風を巻き起こした。",
    "sounds": [
      "アグレッシブシンセ",
      "クランクドラム",
      "ハイエナジー",
      "チャント向けビート",
      "ヘビーベース"
    ],
    "artists": [
      "Ying Yang Twins",
      "Ludacris",
      "Usher",
      "Petey Pablo"
    ],
    "prompts": [
      {
        "type": "クラシック（クランクバンガー）",
        "style": "crunk hip hop, energetic club banger, aggressive Atlanta, Lil Jon, no vocals, instrumental",
        "detail": "[Instrumental] aggressive crunk synthesizer, high-energy drum pattern, heavy bass drops, club-ready rhythm, chant-friendly beat structure, 108 BPM, crunk Atlanta hip hop club banger loop [No Vocals]"
      },
      {
        "type": "モダン（エレクトロクランク）",
        "style": "electro crunk, modern party hip hop, hyphy energy, no vocals, instrumental",
        "detail": "[Instrumental] electronic crunk-influenced beat, massive bass, energetic synth stabs, party-ready drum pattern, 112 BPM, modern electro crunk party hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ハイパークランク）",
        "style": "hyper crunk, maximalist party hip hop, aggressive electronic, no vocals, instrumental",
        "detail": "[Instrumental] hyper-aggressive synthesizer layers, bombastic drum programming, extreme bass pressure, 115 BPM, maximalist hyper crunk experimental party hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 22,
    "name": "Warren G",
    "alias": "Warren Griffin III",
    "city": "Long Beach, CA",
    "bpm": "94–106",
    "eras": [
      "90s"
    ],
    "styles": [
      "g-funk",
      "west coast"
    ],
    "region": "West Coast",
    "desc": "「Regulate」でG-Funk史上最高のフックを放ったロングビーチの貴族。スムースでレイドバックしたGファンクシンセ・ゆったりとしたグルーヴ・Nate Doggとの相性で独自のポジションを確立。",
    "sounds": [
      "スムースシンセ",
      "ファンキーベース",
      "レイドバックグルーヴ",
      "Gファンクホイッスル",
      "ウェストコーストムード"
    ],
    "artists": [
      "Nate Dogg",
      "Snoop Dogg",
      "Dr. Dre",
      "Tupac"
    ],
    "prompts": [
      {
        "type": "クラシック（スムースGファンク）",
        "style": "smooth G-funk West Coast hip hop, laid-back groove, 90s Long Beach, no vocals, instrumental",
        "detail": "[Instrumental] smooth G-funk synthesizer melody, deep laid-back bass groove, G-funk whistle, relaxed West Coast drum pattern, warm atmospheric pad, 98 BPM, smooth 90s West Coast G-funk hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ウェストコーストムード）",
        "style": "modern smooth West Coast hip hop, G-funk influenced, mellow, no vocals, instrumental",
        "detail": "[Instrumental] contemporary smooth synthesizer chords inspired by G-funk, mellow bass groove, modern clean drum pattern, 100 BPM, smooth modern West Coast hip hop mellow loop [No Vocals]"
      },
      {
        "type": "実験的（フューチャーGファンク）",
        "style": "future G-funk, futuristic West Coast smooth hip hop, no vocals, instrumental",
        "detail": "[Instrumental] futuristic take on G-funk synthesizers, evolving smooth bass, atmospheric textures, 96 BPM, futuristic smooth West Coast hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 23,
    "name": "Q-Tip",
    "alias": "The Abstract",
    "city": "Manhattan, NY",
    "bpm": "88–100",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "jazzy",
      "boom bap",
      "alternative"
    ],
    "region": "East Coast",
    "desc": "A Tribe Called QuestのMCかつプロデューサー。ジャジーでポジティブなサンプリング・ライトタッチのドラム・アフロセントリックなグルーヴで90年代オルタナティブHipHopの顔を定義した。",
    "sounds": [
      "ジャズサンプル",
      "ウォームベース",
      "ポジティブグルーヴ",
      "ライトドラム",
      "ソウルフルループ"
    ],
    "artists": [
      "A Tribe Called Quest",
      "De La Soul",
      "Busta Rhymes",
      "Janet Jackson",
      "Mariah Carey"
    ],
    "prompts": [
      {
        "type": "クラシック（ジャジートライブ）",
        "style": "jazzy hip hop, A Tribe Called Quest style, positive alternative, 90s NY, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz sample loop, uplifting chord progression, light touch drum groove, bouncy bass line, positive afrocentric feel, 92 BPM, jazzy alternative 90s New York hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ポジティブジャズホップ）",
        "style": "modern jazz hip hop, positive vibes, alternative soulful, no vocals, instrumental",
        "detail": "[Instrumental] contemporary jazz-influenced sample, uplifting piano chords, modern clean drum pattern, smooth bass, 94 BPM, positive modern jazz hip hop alternative loop [No Vocals]"
      },
      {
        "type": "実験的（アフロジャズ）",
        "style": "afro jazz hip hop, polyrhythmic, spiritual alternative, no vocals, instrumental",
        "detail": "[Instrumental] African rhythmic patterns with jazz harmony, complex polyrhythmic drumming, spiritual bass groove, 88 BPM, afro jazz alternative hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 24,
    "name": "Mike Will Made It",
    "alias": "MWMI",
    "city": "Atlanta, GA",
    "bpm": "130–145",
    "eras": [
      "2010s"
    ],
    "styles": [
      "trap"
    ],
    "region": "South",
    "desc": "シンプルだが非常に効果的なミニマリストトラップを得意とするアトランタの重鎮。Future・Rae Sremmurd・Miley Cyrusなど多様なアーティストのヒット曲を製作し、2010年代を代表するトラッププロデューサー。",
    "sounds": [
      "スパース808",
      "ミニマルシンセ",
      "スネアクラップ",
      "ハードヒットドラム",
      "ヘビーベース"
    ],
    "artists": [
      "Rae Sremmurd",
      "Future",
      "Kendrick Lamar",
      "Miley Cyrus",
      "Beyoncé"
    ],
    "prompts": [
      {
        "type": "クラシック（ミニマルトラップ）",
        "style": "minimalist trap hip hop, Atlanta, Mike Will style, sparse and hard-hitting, no vocals, instrumental",
        "detail": "[Instrumental] sparse minimalist trap beat, hard 808 bass hits, sharp snare and clap, simple but effective synthesizer melody, rapid hi-hats, 138 BPM, minimalist Atlanta trap loop [No Vocals]"
      },
      {
        "type": "モダン（クリーントラップ）",
        "style": "clean modern trap, polished Atlanta, radio-ready trap beat, no vocals, instrumental",
        "detail": "[Instrumental] clean polished trap production, punchy 808, crisp drum sounds, melodic synthesizer hook, 140 BPM, clean modern radio-friendly Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（ハードミニマル）",
        "style": "hard minimal trap, maximally sparse, heavy hitting, no vocals, instrumental",
        "detail": "[Instrumental] extreme minimalist approach, maximum impact with minimum elements, crushing 808 bass, stark drum pattern, 136 BPM, hard minimal trap experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 25,
    "name": "Murda Beatz",
    "alias": "Shane Lee Lindstrom",
    "city": "Fort Erie, Canada",
    "bpm": "128–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap"
    ],
    "region": "Other",
    "desc": "カナダ出身の国際的トラッププロデューサー。Drake・Travis Scott・Cardi Bなど多くのメガヒットを手がけ、メロディックでキャッチーなトラップビートで世界規模の成功を収めた。",
    "sounds": [
      "メロディックシンセ",
      "808スライド",
      "キャッチーフック",
      "クリアードラム",
      "エモーショナルメロディー"
    ],
    "artists": [
      "Drake",
      "Travis Scott",
      "Cardi B",
      "Post Malone",
      "6ix9ine"
    ],
    "prompts": [
      {
        "type": "クラシック（メロディックトラップ）",
        "style": "melodic trap hip hop, catchy hook-ready, modern radio trap, no vocals, instrumental",
        "detail": "[Instrumental] catchy melodic synthesizer hook, sliding 808 bass, clean trap drum pattern, emotional chord progression, 140 BPM, melodic modern trap loop, radio-ready catchiness [No Vocals]"
      },
      {
        "type": "モダン（エモトラップ）",
        "style": "emo trap, emotional melodic hip hop, vulnerable and melodic, no vocals, instrumental",
        "detail": "[Instrumental] emotional melodic synthesizer layers, melancholic chord progression, modern trap drums, 808 bass, 138 BPM, emotional emo trap melodic loop [No Vocals]"
      },
      {
        "type": "実験的（インターナショナルトラップ）",
        "style": "international trap, global pop-trap fusion, hybrid production, no vocals, instrumental",
        "detail": "[Instrumental] global pop influences in trap format, diverse melodic elements, international sound palette, 142 BPM, international pop-trap fusion experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 26,
    "name": "Kenny Beats",
    "alias": "Kenneth Blume",
    "city": "Connecticut",
    "bpm": "84–105",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "underground"
    ],
    "region": "East Coast",
    "desc": "Vaultageというドキュメンタリーシリーズで知られる多才なプロデューサー。Denzel Curry・Rico Nasty・Kevin Abstractなどとの仕事で、ロック・グランジ・ハードコア要素を大胆にHipHopへ融合させた。",
    "sounds": [
      "ハードギター",
      "グランジ要素",
      "クリスプスネア",
      "アグレッシブサウンド",
      "ロックエレメント"
    ],
    "artists": [
      "Denzel Curry",
      "Rico Nasty",
      "Kevin Abstract",
      "Vince Staples",
      "Tierra Whack"
    ],
    "prompts": [
      {
        "type": "クラシック（アグレッシブアンダーグラウンド）",
        "style": "aggressive underground hip hop, rock-influenced, raw energy, no vocals, instrumental",
        "detail": "[Instrumental] hard-hitting guitar-influenced samples, aggressive drum pattern, raw gritty energy, punchy bass, 92 BPM, aggressive underground hip hop rock-fusion loop [No Vocals]"
      },
      {
        "type": "モダン（グランジホップ）",
        "style": "grunge hip hop, alternative underground, raw rock energy, no vocals, instrumental",
        "detail": "[Instrumental] distorted grunge guitar textures, heavy drum pattern, raw underground energy, bass-heavy low-end, 95 BPM, grunge alternative hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ハードコアフュージョン）",
        "style": "hardcore hip hop, punk rock fusion, extreme underground, no vocals, instrumental",
        "detail": "[Instrumental] punk-hardcore energy in hip hop format, aggressive drum programming, distorted bass, chaotic energy, 100 BPM, hardcore punk-hip-hop fusion experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 27,
    "name": "Sounwave",
    "alias": "Mark Spears",
    "city": "Compton, CA",
    "bpm": "82–100",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "neo soul"
    ],
    "region": "West Coast",
    "desc": "Kendrick Lamarの主要プロデューサーの一人。「To Pimp a Butterfly」「DAMN.」等の歴史的名盤に貢献。ライブインストゥルメントとジャズ・ファンクを融合した複雑でコンシャスなサウンドが特徴。",
    "sounds": [
      "ライブインストゥルメント",
      "ジャズ要素",
      "レイヤードサウンド",
      "ファンクグルーヴ",
      "オーガニック"
    ],
    "artists": [
      "Kendrick Lamar",
      "ScHoolboy Q",
      "Ab-Soul",
      "Jay Rock"
    ],
    "prompts": [
      {
        "type": "クラシック（コンシャスウェストコースト）",
        "style": "conscious West Coast hip hop, jazz-funk influenced, complex production, no vocals, instrumental",
        "detail": "[Instrumental] live jazz-funk instrumentation layers, complex drum programming, organic bass groove, horn arrangements, 90 BPM, conscious intellectual West Coast hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ライブジャズファンク）",
        "style": "live instrument hip hop, jazz-funk fusion, sophisticated modern, no vocals, instrumental",
        "detail": "[Instrumental] live drums, bass guitar, electric piano, horn section, complex arrangement, dynamic build and release, 88 BPM, sophisticated live-instrument jazz-funk hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（アブストラクトコンシャス）",
        "style": "abstract conscious hip hop, experimental jazz, West Coast underground, no vocals, instrumental",
        "detail": "[Instrumental] abstract jazz deconstruction, polyrhythmic drum patterns, dissonant harmonic textures, 85 BPM, experimental abstract conscious West Coast hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 28,
    "name": "Hit-Boy",
    "alias": "Chauncey Hollis",
    "city": "Fontana, CA",
    "bpm": "88–106",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "alternative"
    ],
    "region": "West Coast",
    "desc": "2010年代から現在に至るまで最も多作なトップレベルプロデューサーの一人。Nas「King's Disease」シリーズで評価を一新し、Jay-Z・Beyoncé・Kanye等の楽曲も手がけた実力派。",
    "sounds": [
      "クリーンシンセ",
      "808ベース",
      "スーパーソニックキック",
      "ビルドアップ",
      "モダンサウンド"
    ],
    "artists": [
      "Nas",
      "Jay-Z",
      "Beyoncé",
      "Kanye West",
      "Travis Scott",
      "Big Sean"
    ],
    "prompts": [
      {
        "type": "クラシック（モダンポリッシュ）",
        "style": "modern polished hip hop, West Coast, clean production, Hit-Boy style, no vocals, instrumental",
        "detail": "[Instrumental] clean polished synthesizer chords, crisp modern drum pattern, punchy 808 bass, bright melodic elements, build-up and drop structure, 96 BPM, modern polished hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（スタジアムヒップホップ）",
        "style": "stadium hip hop, cinematic modern, grand production, no vocals, instrumental",
        "detail": "[Instrumental] grand cinematic synthesizer swells, powerful drum pattern, massive bass, arena-scale production feel, 98 BPM, stadium-level modern hip hop cinematic loop [No Vocals]"
      },
      {
        "type": "実験的（フューチャリスティック）",
        "style": "futuristic hip hop, next-gen production, cutting edge modern, no vocals, instrumental",
        "detail": "[Instrumental] cutting-edge synthesizer design, forward-thinking drum programming, futuristic sound palette, 94 BPM, next-generation futuristic hip hop experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 29,
    "name": "DJ Quik",
    "alias": "David Marvin Blake",
    "city": "Compton, CA",
    "bpm": "94–108",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "g-funk",
      "west coast"
    ],
    "region": "West Coast",
    "desc": "コンプトン出身のマルチインストゥルメンタリスト兼プロデューサー。George Clinton直系のPファンクとライブファンクグルーヴを取り込んだ、ジャジーでグルーヴィーな西海岸サウンドの職人。",
    "sounds": [
      "ファンキーシンセ",
      "ライブファンク",
      "Pファンクサンプル",
      "クールバイブ",
      "ウェストコーストソウル"
    ],
    "artists": [
      "Snoop Dogg",
      "Tupac",
      "Dr. Dre",
      "AMG",
      "MC Eiht"
    ],
    "prompts": [
      {
        "type": "クラシック（ファンクグルーヴ）",
        "style": "funky West Coast hip hop, G-funk, P-Funk influenced, groovy, no vocals, instrumental",
        "detail": "[Instrumental] live P-Funk influenced synthesizer groove, deep funky bass guitar, laid-back West Coast drum pattern, jazzy chord stabs, 100 BPM, groovy West Coast funk hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ネオファンク）",
        "style": "neo-funk West Coast hip hop, live instruments, modern groove, no vocals, instrumental",
        "detail": "[Instrumental] modern interpretation of West Coast funk, live bass and keyboard elements, contemporary drum production, 102 BPM, neo-funk West Coast hip hop modern loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーファンク）",
        "style": "jazzy funk hip hop, sophisticated groove, West Coast jazz, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated jazz-funk arrangement, complex chord voicings, live drum groove, 96 BPM, jazz-funk experimental West Coast hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 30,
    "name": "Scott Storch",
    "alias": "Scotty",
    "city": "Philadelphia, PA",
    "bpm": "90–108",
    "eras": [
      "2000s"
    ],
    "styles": [
      "jazzy",
      "south"
    ],
    "region": "East Coast",
    "desc": "ドレー・ビーツの鍵盤奏者出身で、Dr. DreやBlackstreetとの仕事から独立後は2000年代最高額のプロデューサーへ。ピアノ主体の華やかでメロディックなプロダクションが特徴。",
    "sounds": [
      "ピアノフレーズ",
      "豪華オーケストラ",
      "R&B要素",
      "メロディーキーボード",
      "グルーヴドラム"
    ],
    "artists": [
      "Beyoncé",
      "Chris Brown",
      "Fat Joe",
      "50 Cent",
      "Dr. Dre",
      "Snoop Dogg"
    ],
    "prompts": [
      {
        "type": "クラシック（ピアノドリブン）",
        "style": "melodic piano hip hop R&B, luxurious orchestral, Scott Storch style, no vocals, instrumental",
        "detail": "[Instrumental] elegant piano melody with orchestral backing, lush strings and brass, smooth hip hop drum groove, rich harmonic bass, 96 BPM, luxurious melodic hip hop R&B loop [No Vocals]"
      },
      {
        "type": "モダン（リッチメロディー）",
        "style": "rich melodic hip hop, piano-led, opulent production, no vocals, instrumental",
        "detail": "[Instrumental] grand piano lead melody, full orchestral arrangement, modern clean drum pattern, deep bass, 98 BPM, opulent rich melodic hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオクラシカル）",
        "style": "neo-classical hip hop, piano concerto fusion, sophisticated, no vocals, instrumental",
        "detail": "[Instrumental] classical piano technique meets hip hop rhythm, chamber ensemble arrangement, 92 BPM, neo-classical hip hop experimental fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 32,
    "name": "Nujabes",
    "alias": "Seba Jun",
    "city": "Tokyo, Japan",
    "bpm": "80–95",
    "eras": [
      "2000s"
    ],
    "styles": [
      "lo-fi",
      "jazzy",
      "alternative"
    ],
    "region": "Japan",
    "desc": "Lo-fiヒップホップの父と称される東京出身のプロデューサー。ジャズとヒップホップを融合した穏やかで叙情的なサウンドは世界中にファンを持ち、アニメ「サムライチャンプルー」の音楽でも有名。2010年に36歳で急逝した後もその音楽は生き続けている。",
    "sounds": [
      "ジャズピアノループ",
      "バイナルクラックル",
      "ブラシドラム",
      "ウォームベース",
      "チルパッド",
      "ソウルフルコード"
    ],
    "artists": [
      "Shing02",
      "Five Deez",
      "Uyama Hiroto",
      "C.L. Smooth"
    ],
    "prompts": [
      {
        "type": "クラシック（Lo-fiジャズホップ）",
        "style": "lo-fi jazz hip hop, Nujabes style, chill soulful Japanese aesthetic, no vocals, instrumental",
        "detail": "[Instrumental] gentle jazz piano loop with vinyl crackle, warm brushed snare, smooth bass, soft hi-hat, melancholic chord progression, 85 BPM, lo-fi jazz hip hop loop, peaceful introspective atmosphere [No Vocals]"
      },
      {
        "type": "モダン（チルスタディービーツ）",
        "style": "modern chill lo-fi hip hop, jazz influenced, relaxing study beats, no vocals, instrumental",
        "detail": "[Instrumental] clean jazz sample loop, lo-fi drum groove, warm piano chords, smooth bass, gentle vinyl texture, ambient pad, 88 BPM, chill lo-fi study beats loop [No Vocals]"
      },
      {
        "type": "実験的（アンビエントジャズ）",
        "style": "ambient jazz hip hop, ethereal contemplative, spacious reverb, no vocals, instrumental",
        "detail": "[Instrumental] floating jazz fragments over ambient textures, sparse brushed percussion, deep reverb, subtle bass pulses, 80 BPM, ethereal ambient jazz hip hop meditation loop [No Vocals]"
      }
    ]
  },
  {
    "id": 33,
    "name": "DJ Krush",
    "alias": "Hideaki Mitsuishi",
    "city": "Tokyo, Japan",
    "bpm": "75–92",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "alternative",
      "underground",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "ターンテーブルを楽器として確立した日本を代表するDJ兼プロデューサー。ダークで重厚なアブストラクトサウンドと禅的な空気感が特徴で、RZAやMos Defなど米国の重鎮とも共演した国際的プロデューサー。",
    "sounds": [
      "ターンテーブルスクラッチ",
      "ダークシンセ",
      "アブストラクトループ",
      "重いドラム",
      "映画的パッド",
      "エレクトロニクス"
    ],
    "artists": [
      "RZA",
      "Mos Def",
      "Q-Tip",
      "C.L. Smooth",
      "Blackalicious"
    ],
    "prompts": [
      {
        "type": "クラシック（アブストラクトターンテーブル）",
        "style": "abstract hip hop, DJ Krush style, dark turntablist, trip hop, no vocals, instrumental",
        "detail": "[Instrumental] dark abstract synthesizer loop, heavy boom bap drums, vinyl scratch elements, ominous bass, cinematic atmospheric pads, 80 BPM, dark abstract turntablist hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（トリップホップ）",
        "style": "trip hop, dark abstract electronic, meditative Japanese, no vocals, instrumental",
        "detail": "[Instrumental] dark electronic textures, slow heavy drums, eerie synthesizer melody, deep bass drones, sparse scratch accents, 78 BPM, dark trip hop abstract hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ダークシネマ）",
        "style": "cinematic abstract hip hop, dark orchestral, experimental turntablism, no vocals, instrumental",
        "detail": "[Instrumental] cinematic string samples, abstract turntable manipulation, heavy industrial drums, 75 BPM, dark experimental cinematic hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 34,
    "name": "PUNPEE",
    "alias": "PSG",
    "city": "Tokyo, Japan",
    "bpm": "85–100",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "boom bap",
      "alternative"
    ],
    "region": "Japan",
    "desc": "東京を拠点に活動する日本屈指のラッパー兼プロデューサー。ジャズ・ソウル・映画音楽を自在にサンプリングし、ユーモアと詩情を融合させた独自世界を構築。PSGとしての活動のほかAWICHのプロデュースも手がける。",
    "sounds": [
      "ジャズサンプル",
      "映画的SE",
      "ソウルフルループ",
      "ウォームドラム",
      "ピアノコード",
      "レコードノイズ"
    ],
    "artists": [
      "SOIL&PIMP SESSIONS",
      "STUTS",
      "AWICH",
      "唾奇",
      "Shing02"
    ],
    "prompts": [
      {
        "type": "クラシック（ジャジーブームバップ）",
        "style": "jazzy boom bap, Japanese hip hop, soulful cinematic, warm, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz piano sample, punchy boom bap drum pattern, smooth bass groove, cinematic string accents, vinyl warmth, 90 BPM, soulful jazzy Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（シネマティックJ-HipHop）",
        "style": "cinematic Japanese hip hop, modern boom bap, film score influenced, no vocals, instrumental",
        "detail": "[Instrumental] orchestral sample chops, clean drum pattern, melodic piano, warm bass, 92 BPM, cinematic modern Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（コラージュビート）",
        "style": "collage hip hop, eclectic sampling, experimental Japanese, no vocals, instrumental",
        "detail": "[Instrumental] multi-genre sample collage, jazz and film music fragments, abstract drum programming, 85 BPM, experimental collage-style Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 35,
    "name": "STUTS",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "85–98",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "lo-fi",
      "boom bap"
    ],
    "region": "Japan",
    "desc": "MPC演奏とビートメイキングを融合させた東京のプロデューサー。Norikiyo、Shing02、PUNPEEら国内アーティストとのコラボで人気を博し、ライブパフォーマンスとプロデュースを両立するスタイルが特徴。",
    "sounds": [
      "MPCビート",
      "ジャジーサンプル",
      "ライブ感のあるドラム",
      "ソウルループ",
      "温かいコード",
      "クリアーなミックス"
    ],
    "artists": [
      "Norikiyo",
      "Shing02",
      "PUNPEE",
      "Yuuna Kamino",
      "JJJ"
    ],
    "prompts": [
      {
        "type": "クラシック（MPCジャジービート）",
        "style": "MPC jazz hip hop, Japanese, live beat feel, warm soulful, no vocals, instrumental",
        "detail": "[Instrumental] MPC-played jazz sample loop, live-feeling drum pattern, warm soul chords, smooth bass, 90 BPM, warm Japanese MPC jazz hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ライブビートメイキング）",
        "style": "live beat making, modern Japanese hip hop, organic jazz, no vocals, instrumental",
        "detail": "[Instrumental] organic drum hits, jazz chord stabs, live bass feel, modern clean production, 92 BPM, modern live-feel Japanese hip hop beat loop [No Vocals]"
      },
      {
        "type": "実験的（ジャズエレクトロ融合）",
        "style": "jazz electronic fusion, experimental Japanese beats, hybrid, no vocals, instrumental",
        "detail": "[Instrumental] jazz samples layered over electronic drum patterns, synthesizer textures, 88 BPM, experimental jazz-electronic Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 36,
    "name": "BACHLOGIC",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "85–97",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "Japan",
    "desc": "日本ヒップホップ史上最高のヒットメイカーの一人。One Year War Music主宰。SEEDA・AKLO・SALU・NORIKIYOをスターへ押し上げ、現在もZORN・Kvi Babaを手がける。メディア露出を極力避ける謎多きプロデューサー。",
    "sounds": [
      "ソウルサンプル",
      "ジャジーコード",
      "クリーンドラム",
      "ディープベース",
      "オーガニックグルーヴ",
      "暖かいテクスチャー"
    ],
    "artists": [
      "SEEDA",
      "AKLO",
      "SALU",
      "NORIKIYO",
      "ZORN",
      "Kvi Baba"
    ],
    "prompts": [
      {
        "type": "クラシック（日本語ラップ黄金期）",
        "style": "Japanese hip hop golden era, boom bap, soulful clean production, no vocals, instrumental",
        "detail": "[Instrumental] clean soul sample chops, punchy boom bap drums, smooth bass groove, jazz chord stabs, 88 BPM, soulful Japanese hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（クリーンソウルホップ）",
        "style": "clean modern Japanese hip hop, soulful, polished production, no vocals, instrumental",
        "detail": "[Instrumental] polished soul sample loop, crisp modern drum pattern, warm bass, clean melodic elements, 90 BPM, polished modern Japanese soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーアブストラクト）",
        "style": "jazzy abstract Japanese hip hop, underground, introspective, no vocals, instrumental",
        "detail": "[Instrumental] abstract jazz sample manipulation, experimental drum programming, deep bass, 85 BPM, abstract jazzy underground Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 37,
    "name": "Chaki Zulu",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "YENTOWNクルーの主宰プロデューサー。AWICHやkZMのサウンドを手がけ、ビートメイキング・歌詞制作・ボーカルディレクションまでこなすトータルプロデューサー。加藤ミリヤや山下智久など歌謡系アーティストにも楽曲提供。",
    "sounds": [
      "メロディックシンセ",
      "808ベース",
      "トラップハイハット",
      "エモーショナルパッド",
      "ダークメロディー",
      "レイヤードサウンド"
    ],
    "artists": [
      "AWICH",
      "kZm",
      "MONYPETZJNKMN",
      "加藤ミリヤ",
      "Young Coco"
    ],
    "prompts": [
      {
        "type": "クラシック（YENTOWNトラップ）",
        "style": "Japanese trap, YENTOWN style, melodic dark, emotional, no vocals, instrumental",
        "detail": "[Instrumental] dark melodic synthesizer, heavy 808 bass, trap hi-hat pattern, emotional chord progression, 140 BPM, dark melodic Japanese trap loop [No Vocals]"
      },
      {
        "type": "モダン（J-トラップ）",
        "style": "modern Japanese trap, melodic, atmospheric dark, no vocals, instrumental",
        "detail": "[Instrumental] atmospheric synthesizer melody, sliding 808, layered trap drums, dark emotional pads, 142 BPM, modern Japanese melodic trap loop [No Vocals]"
      },
      {
        "type": "実験的（ドリームトラップ）",
        "style": "dream trap Japanese, ethereal dark, experimental, no vocals, instrumental",
        "detail": "[Instrumental] ethereal synthesizer layers, warped vocal textures, 808 bass, experimental trap drums, 138 BPM, dreamy experimental Japanese trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 38,
    "name": "ZOT on the WAVE",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Japan",
    "desc": "「Uh Wave Farewell」のプロデューサータグで知られる現代日本ヒップホップシーンの重要プロデューサー。ビートメイキングからラップディレクションまでこなすトータルプロデュース能力が高く評価されている。",
    "sounds": [
      "ダークシンセ",
      "808キック",
      "速いハイハット",
      "メロディーフック",
      "アトモスフェリックパッド",
      "クリアーミックス"
    ],
    "artists": [
      "AWICH",
      "Tohji",
      "kZm",
      "Homunculu$",
      "STUTS"
    ],
    "prompts": [
      {
        "type": "クラシック（ダークJトラップ）",
        "style": "dark Japanese trap, ZOT style, heavy melodic, atmospheric, no vocals, instrumental",
        "detail": "[Instrumental] dark synthesizer hook, heavy 808 bass, rapid trap hi-hats, ominous atmospheric pads, 140 BPM, dark atmospheric Japanese trap loop [No Vocals]"
      },
      {
        "type": "モダン（メロディックウェイブ）",
        "style": "melodic wave trap, modern Japanese, dark emotional, no vocals, instrumental",
        "detail": "[Instrumental] melodic synthesizer wave, sliding 808 bass, layered trap hi-hats, dark emotional texture, 142 BPM, modern melodic wave Japanese trap loop [No Vocals]"
      },
      {
        "type": "実験的（フューチャーウェイブ）",
        "style": "future wave Japanese hip hop, experimental dark trap, innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative synthesizer design, experimental 808 patterns, abstract hi-hat programming, 138 BPM, futuristic experimental dark wave Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 39,
    "name": "JIGG",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "85–145",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "trap"
    ],
    "region": "Japan",
    "desc": "「JIGGのビートが聴きたいな」のタグで知られる東京のビートメイカー。2005年から活動し、KOHHのGUNSMITH PRODUCTION参加をはじめ、アンダーグラウンドからメインストリームまで幅広く制作。",
    "sounds": [
      "サンプルループ",
      "クリーンドラム",
      "ベースライン",
      "メロディーシンセ",
      "ソウルフルフック",
      "タグサウンド"
    ],
    "artists": [
      "KOHH",
      "JP THE WAVY",
      "変態紳士クラブ",
      "Awich",
      "kZm"
    ],
    "prompts": [
      {
        "type": "クラシック（アンダーグラウンドJ-HipHop）",
        "style": "underground Japanese hip hop, boom bap, raw authentic, no vocals, instrumental",
        "detail": "[Instrumental] raw sample loop, hard-hitting drum pattern, deep bass, authentic underground feel, 88 BPM, underground Japanese hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（クロスオーバー）",
        "style": "modern Japanese hip hop, versatile, mainstream crossover, no vocals, instrumental",
        "detail": "[Instrumental] catchy synthesizer hook, clean drum pattern, 808 bass, modern production feel, 140 BPM, modern mainstream Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ハイブリッドビート）",
        "style": "hybrid Japanese beat, experimental crossover, underground meets mainstream, no vocals, instrumental",
        "detail": "[Instrumental] boom bap drum samples layered with trap 808, melodic synth, 90 BPM, experimental hybrid Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 40,
    "name": "JJJ",
    "alias": "Fla$hBackS",
    "city": "Kawasaki, Japan",
    "bpm": "85–100",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "alternative"
    ],
    "region": "Japan",
    "desc": "川崎を拠点とするラッパー兼プロデューサー。Fla$hBackSのメンバーとしても活躍し、アルバム「HIKARI」（2017）は独自のオリジナルスタイルによる傑作として高く評価された。2025年4月に35歳で急逝。",
    "sounds": [
      "ダークサンプル",
      "ブームバップドラム",
      "メロディックループ",
      "ソウルフルテクスチャー",
      "低音ベース",
      "川崎ストリートバイブ"
    ],
    "artists": [
      "STUTS",
      "PUNPEE",
      "Tohji",
      "BIM",
      "KID FRESINO"
    ],
    "prompts": [
      {
        "type": "クラシック（川崎ダークブームバップ）",
        "style": "dark boom bap, Kawasaki underground, Japanese raw hip hop, no vocals, instrumental",
        "detail": "[Instrumental] dark sample loop, hard punchy boom bap drums, deep bass, urban underground atmosphere, 88 BPM, dark underground Japanese hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（オルタナティブJ-HipHop）",
        "style": "alternative Japanese hip hop, introspective dark, modern underground, no vocals, instrumental",
        "detail": "[Instrumental] moody sample chops, modern drum pattern, atmospheric bass, dark melodic accents, 90 BPM, alternative modern underground Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（アブストラクトアンビエント）",
        "style": "abstract ambient Japanese hip hop, experimental introspective, no vocals, instrumental",
        "detail": "[Instrumental] abstract atmospheric textures, sparse drum pattern, meditative bass, 85 BPM, abstract experimental ambient Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 41,
    "name": "Homunculu$",
    "alias": "",
    "city": "Kawasaki, Japan",
    "bpm": "130–145",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "underground"
    ],
    "region": "Japan",
    "desc": "川崎を拠点とするドリル・トラッププロデューサー。ZOT on the WAVEとの共同制作で注目を集め、千葉雄喜の復帰作や2025年6月のソロアルバム「HOMUNCULUS」でシーンを沸かせた。",
    "sounds": [
      "ダークドリルビート",
      "808スライド",
      "メロディックシンセ",
      "グリミーテクスチャー",
      "ダークパッド",
      "重いドラム"
    ],
    "artists": [
      "千葉雄喜",
      "Megan Thee Stallion",
      "ZOT on the WAVE",
      "川崎系ラッパー"
    ],
    "prompts": [
      {
        "type": "クラシック（川崎ドリル）",
        "style": "Japanese drill, Kawasaki dark, gritty melodic trap, no vocals, instrumental",
        "detail": "[Instrumental] dark melodic synthesizer, heavy sliding 808 bass, drill drum pattern, gritty urban atmosphere, 140 BPM, Japanese drill dark trap loop [No Vocals]"
      },
      {
        "type": "モダン（ダークメロトラップ）",
        "style": "dark melodic trap, modern Japanese, heavy bass, no vocals, instrumental",
        "detail": "[Instrumental] moody melodic synthesizer, heavy 808 bass drops, trap drum pattern, dark atmospheric pads, 142 BPM, dark modern Japanese melodic trap loop [No Vocals]"
      },
      {
        "type": "実験的（グリミーフュージョン）",
        "style": "grimy fusion trap, experimental dark, drill meets trap, no vocals, instrumental",
        "detail": "[Instrumental] grimy synthesizer textures, experimental 808 patterns, dark drill-meets-trap drums, 138 BPM, experimental grimy Japanese drill trap fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 42,
    "name": "Lil'Yukichi",
    "alias": "",
    "city": "Japan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Japan",
    "desc": "日本最初期のトラップビートメイカーのひとり。南部ヒップホップ・アニメ・アイドル・ダブステップなど多彩なジャンルから影響を受け、独自の日本語トラップサウンドを確立した先駆者。",
    "sounds": [
      "トラップビート",
      "808キック",
      "アニメ的シンセ",
      "ダブステップ要素",
      "キャッチーメロディー",
      "ユニークテクスチャー"
    ],
    "artists": [
      "日本語ラップトラップシーン全般"
    ],
    "prompts": [
      {
        "type": "クラシック（J-トラップ黎明期）",
        "style": "early Japanese trap, anime influenced synthesizer, unique J-trap, no vocals, instrumental",
        "detail": "[Instrumental] anime-influenced synthesizer melody, 808 bass, trap drum pattern, colorful unique textures, 140 BPM, early Japanese trap innovative loop [No Vocals]"
      },
      {
        "type": "モダン（J-トラップポップ）",
        "style": "J-trap pop, catchy melodic, modern Japanese production, no vocals, instrumental",
        "detail": "[Instrumental] catchy synthesizer hook, clean trap drums, 808 bass, pop-friendly Japanese trap melody, 142 BPM, modern J-trap pop loop [No Vocals]"
      },
      {
        "type": "実験的（クロスジャンル）",
        "style": "cross-genre Japanese trap, anime meets hip hop, eclectic, no vocals, instrumental",
        "detail": "[Instrumental] eclectic sample sources, anime and hip hop fusion, experimental trap drums, 138 BPM, experimental cross-genre Japanese trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 43,
    "name": "tofubeats",
    "alias": "",
    "city": "Kobe, Japan",
    "bpm": "90–128",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "funk",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "神戸出身の電子音楽プロデューサー。ヒップホップ・テクノ・J-POPを自在に行き来し、藤井風や中村佳穂、Perfumeへの楽曲提供でも活躍。インターネット文化とアーバンサウンドを融合させたユニークな存在。",
    "sounds": [
      "エレクトロニックビート",
      "ポップシンセ",
      "サンプルループ",
      "4つ打ちキック",
      "インターネット的テクスチャー",
      "J-POPメロディー"
    ],
    "artists": [
      "藤井風",
      "中村佳穂",
      "Perfume",
      "Tomggg",
      "ESPECIA"
    ],
    "prompts": [
      {
        "type": "クラシック（エレクトロJ-HipHop）",
        "style": "electronic Japanese hip hop, internet culture, pop synthesizer, no vocals, instrumental",
        "detail": "[Instrumental] bright synthesizer melody, electronic drum pattern, bouncy bass, internet-era pop textures, 108 BPM, electronic Japanese hip hop pop loop [No Vocals]"
      },
      {
        "type": "モダン（J-テクノホップ）",
        "style": "Japanese techno-hop, dance electronic hip hop fusion, modern, no vocals, instrumental",
        "detail": "[Instrumental] four-on-the-floor kick with hip hop elements, melodic synthesizer, clean bass, 120 BPM, modern Japanese techno-hop fusion loop [No Vocals]"
      },
      {
        "type": "実験的（ネットカルチャービート）",
        "style": "net culture hip hop, eclectic electronic, experimental J-pop fusion, no vocals, instrumental",
        "detail": "[Instrumental] eclectic sample collage, electronic drum programming, J-pop chord progressions, 100 BPM, experimental internet culture Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 44,
    "name": "KM",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "boom bap"
    ],
    "region": "Japan",
    "desc": "東京発の次世代プロデューサー。JP THE WAVY・KEIJU・Tohjiら現行シーンを代表するアーティストのトラックを手がけ、日本語ラップとモダントラップを繋ぐキープロデューサーとして急速に台頭。",
    "sounds": [
      "モダンシンセ",
      "808ベース",
      "トラップハイハット",
      "クリーンビート",
      "メロディーフック",
      "東京ストリートバイブ"
    ],
    "artists": [
      "JP THE WAVY",
      "KEIJU",
      "Tohji",
      "kZm",
      "Young Coco"
    ],
    "prompts": [
      {
        "type": "クラシック（東京モダントラップ）",
        "style": "modern Tokyo trap, Japanese hip hop, clean melodic, no vocals, instrumental",
        "detail": "[Instrumental] clean melodic synthesizer, heavy 808 bass, crisp trap drums, modern Tokyo street vibe, 140 BPM, modern clean Japanese trap loop [No Vocals]"
      },
      {
        "type": "モダン（メインストリームJ-トラップ）",
        "style": "mainstream Japanese trap, polished, radio-ready J-hip hop, no vocals, instrumental",
        "detail": "[Instrumental] polished synthesizer hook, punchy 808 bass, clean trap drum pattern, 142 BPM, mainstream radio-ready Japanese trap loop [No Vocals]"
      },
      {
        "type": "実験的（クリエイティブトラップ）",
        "style": "creative experimental Japanese trap, innovative production, no vocals, instrumental",
        "detail": "[Instrumental] innovative synthesizer design, experimental 808 manipulation, creative drum programming, 138 BPM, experimental creative Japanese trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 45,
    "name": "illicit tsuboi",
    "alias": "坪井慎一郎",
    "city": "Tokyo, Japan",
    "bpm": "84–96",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "underground"
    ],
    "region": "Japan",
    "desc": "90年代から日本語ラップシーンを支えてきたベテランビートメイカー。ZeebraやK DUB SHINE、TOKONA-Xらとのコラボで知られ、ニューヨークスタイルのブームバップを日本に根付かせた立役者の一人。",
    "sounds": [
      "NYスタイルサンプル",
      "ブームバップドラム",
      "ジャズフラグメント",
      "ハードスネア",
      "ディープベース",
      "アンダーグラウンドバイブ"
    ],
    "artists": [
      "Zeebra",
      "K DUB SHINE",
      "TOKONA-X",
      "般若",
      "DABO"
    ],
    "prompts": [
      {
        "type": "クラシック（日本語ラップNYスタイル）",
        "style": "Japanese New York style boom bap, underground 90s influenced, no vocals, instrumental",
        "detail": "[Instrumental] New York influenced sample chops, hard boom bap drum pattern, deep bass groove, jazz fragments, 88 BPM, underground Japanese NY-style hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（オールドスクールリバイバル）",
        "style": "old school revival Japanese hip hop, classic boom bap, authentic, no vocals, instrumental",
        "detail": "[Instrumental] classic boom bap drum break, soulful sample loop, deep bass, authentic underground feel, 90 BPM, old school revival Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオブームバップ）",
        "style": "neo boom bap, updated classic Japanese hip hop, modern underground, no vocals, instrumental",
        "detail": "[Instrumental] updated boom bap drum pattern, modern sample processing, deep bass, 86 BPM, neo boom bap modern underground Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 46,
    "name": "DJ Mitsu the Beats",
    "alias": "",
    "city": "Sendai, Japan",
    "bpm": "85–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "boom bap",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "GAGLEのメンバーとしても知られる仙台出身のプロデューサー兼DJ。深いレコード掘りとジャジーなサンプリングで独自のサウンドを確立し、国内外のアーティストと幅広くコラボレーション。",
    "sounds": [
      "クレートダイギングサンプル",
      "ジャジーコード",
      "オーガニックドラム",
      "ウォームベース",
      "バイナルテクスチャー",
      "ソウルフルグルーヴ"
    ],
    "artists": [
      "GAGLE",
      "Shingo Suzuki",
      "仙人掌",
      "PUNPEE"
    ],
    "prompts": [
      {
        "type": "クラシック（ジャジークレートダイギング）",
        "style": "jazzy crate digging Japanese hip hop, warm soulful, vinyl, no vocals, instrumental",
        "detail": "[Instrumental] deep crate-dig jazz sample, organic drum groove, warm bass, vinyl texture, soulful chord progression, 88 BPM, jazzy crate-digging Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ジャジーグルーヴ）",
        "style": "modern jazzy hip hop groove, clean warm production, Japanese, no vocals, instrumental",
        "detail": "[Instrumental] clean jazz sample loop, punchy drum pattern, warm bass groove, melodic jazz accents, 90 BPM, modern jazzy groove Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャズフュージョンビート）",
        "style": "jazz fusion beat, experimental Japanese, deep groove, no vocals, instrumental",
        "detail": "[Instrumental] jazz fusion sample manipulation, experimental drum pattern, deep harmonic bass, 86 BPM, jazz fusion experimental Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 47,
    "name": "Olive Oil",
    "alias": "",
    "city": "Yokohama, Japan",
    "bpm": "80–95",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "lo-fi",
      "jazzy",
      "boom bap"
    ],
    "region": "Japan",
    "desc": "横浜を拠点とするプロデューサー。徹底したレコード掘りから生まれるレイドバックしたビートが特徴で、仙人掌・環ROY・Campanellaら個性派ラッパーのサウンドを支える縁の下の力持ち。",
    "sounds": [
      "レイドバックサンプル",
      "ローファイドラム",
      "ジャジーコード",
      "暖かいベース",
      "バイナルノイズ",
      "スモーキーなテクスチャー"
    ],
    "artists": [
      "仙人掌",
      "環ROY",
      "Campanella",
      "OMSB",
      "BIM"
    ],
    "prompts": [
      {
        "type": "クラシック（横浜ローファイジャズ）",
        "style": "lo-fi jazz hip hop, Yokohama laid-back, smoky underground, no vocals, instrumental",
        "detail": "[Instrumental] laid-back jazz sample, lo-fi drum groove, warm bass, smoky atmospheric texture, vinyl noise, 83 BPM, lo-fi laid-back Yokohama jazz hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（チルアンダーグラウンド）",
        "style": "chill underground Japanese hip hop, lo-fi warm, relaxed, no vocals, instrumental",
        "detail": "[Instrumental] warm lo-fi sample loop, relaxed drum pattern, deep bass, chill atmospheric pads, 85 BPM, chill underground Japanese lo-fi hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（スモーキーアブストラクト）",
        "style": "smoky abstract hip hop, experimental lo-fi, underground, no vocals, instrumental",
        "detail": "[Instrumental] abstract sample textures, experimental drum programming, smoky atmospheric bass, 80 BPM, abstract smoky experimental Japanese lo-fi hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 48,
    "name": "Campanella",
    "alias": "",
    "city": "Osaka, Japan",
    "bpm": "85–97",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "boom bap",
      "underground"
    ],
    "region": "Japan",
    "desc": "大阪出身のラッパー兼プロデューサー。Olive Oilとのコラボ作品が特に有名で、詩的でインテレクチュアルなリリックとジャジーなビートの組み合わせが特徴。関西語ラップの最重要人物の一人。",
    "sounds": [
      "ジャジーループ",
      "オーガニックドラム",
      "ウォームサンプル",
      "ディープベース",
      "詩的テクスチャー",
      "関西バイブ"
    ],
    "artists": [
      "Olive Oil",
      "仙人掌",
      "OMSB",
      "BIM",
      "環ROY"
    ],
    "prompts": [
      {
        "type": "クラシック（大阪ジャジーポエトリー）",
        "style": "Osaka jazzy hip hop, poetic underground, warm intellectual, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz sample loop, organic drum groove, deep bass, intellectual atmospheric texture, 88 BPM, poetic Osaka jazzy underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（関西オルタナ）",
        "style": "Kansai alternative hip hop, modern lo-fi, introspective, no vocals, instrumental",
        "detail": "[Instrumental] modern lo-fi sample chops, clean drum pattern, warm bass, introspective mood, 90 BPM, modern Kansai alternative underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（フリーフォームジャズホップ）",
        "style": "free form jazz hip hop, experimental Osaka underground, abstract, no vocals, instrumental",
        "detail": "[Instrumental] free-form jazz sample exploration, experimental drum patterns, 85 BPM, abstract experimental Osaka jazz hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 49,
    "name": "grooveman Spot",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "boom bap",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "東京のビートメイカー。PUNPEEやShing02らと共演し、ジャジーでソウルフルなインストゥルメンタルビートで国内アンダーグラウンドシーンで高い評価を得る。丁寧なサンプリングが持ち味。",
    "sounds": [
      "ジャジーサンプル",
      "ソウルコード",
      "クリーンドラム",
      "ウォームベース",
      "メロウグルーヴ",
      "バイナルウォームス"
    ],
    "artists": [
      "PUNPEE",
      "Shing02",
      "Budamunk",
      "OMSB"
    ],
    "prompts": [
      {
        "type": "クラシック（メロウジャズホップ）",
        "style": "mellow jazz hip hop, Tokyo underground, warm soulful, no vocals, instrumental",
        "detail": "[Instrumental] mellow jazz sample, clean drum pattern, warm soul bass, smooth chord progression, 88 BPM, mellow warm Tokyo jazzy underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クリーングルーヴ）",
        "style": "clean groove hip hop, modern Japanese, polished soul, no vocals, instrumental",
        "detail": "[Instrumental] polished soul sample loop, crisp clean drum pattern, warm bass groove, 90 BPM, clean groove modern Japanese soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーテクスチャー）",
        "style": "jazzy texture hip hop, experimental warm, Tokyo underground, no vocals, instrumental",
        "detail": "[Instrumental] textural jazz sample exploration, experimental drum groove, warm atmospheric bass, 85 BPM, jazz texture experimental Tokyo underground hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 50,
    "name": "Uyama Hiroto",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "78–95",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "lo-fi",
      "alternative"
    ],
    "region": "Japan",
    "desc": "Nujabesとの深い縁で知られる東京のインストゥルメンタルジャズ/ヒップホッププロデューサー。流麗なピアノと温かいオーケストラ感覚を持ち、ヒップホップと現代ジャズの境界を優雅に行き来する。",
    "sounds": [
      "ピアノソロ",
      "ストリングスアレンジ",
      "ジャズハーモニー",
      "ソフトドラム",
      "アンビエントパッド",
      "オーケストラル"
    ],
    "artists": [
      "Nujabes",
      "Shing02",
      "Rai (Uyama)"
    ],
    "prompts": [
      {
        "type": "クラシック（インストジャズホップ）",
        "style": "instrumental jazz hip hop, Nujabes influenced, orchestral warm, no vocals, instrumental",
        "detail": "[Instrumental] flowing piano melody, soft jazz drum brush, warm string arrangements, ambient orchestral pad, 82 BPM, instrumental orchestral jazz hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ネオジャズ）",
        "style": "neo jazz hip hop, modern orchestral, cinematic Japanese, no vocals, instrumental",
        "detail": "[Instrumental] neo jazz piano with orchestral backing, modern clean percussion, warm bass, 85 BPM, modern neo jazz cinematic Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（コンテンポラリージャズ）",
        "style": "contemporary jazz hip hop, advanced harmony, abstract warm, no vocals, instrumental",
        "detail": "[Instrumental] complex jazz harmony piano, abstract percussion, ambient orchestral textures, 80 BPM, contemporary jazz hip hop advanced harmony loop [No Vocals]"
      }
    ]
  },
  {
    "id": 51,
    "name": "DJ PMX",
    "alias": "",
    "city": "Los Angeles / Tokyo",
    "bpm": "85–100",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "west coast",
      "jazzy"
    ],
    "region": "Japan",
    "desc": "LAと東京を繋ぐ在米日本人プロデューサー。VERBALやZeebraとの仕事で知られ、米西海岸のサウンドと日本語ラップを融合させたクロスカルチャーなプロダクションスタイルを確立した。",
    "sounds": [
      "ウェストコーストグルーヴ",
      "LAスタイルサンプル",
      "クリーンドラム",
      "ジャジーコード",
      "クロスカルチャービート",
      "スムースベース"
    ],
    "artists": [
      "VERBAL (m-flo)",
      "Zeebra",
      "Trey Songz",
      "DABO"
    ],
    "prompts": [
      {
        "type": "クラシック（LA×日本語ラップ）",
        "style": "LA West Coast meets Japanese hip hop, cross-cultural boom bap, no vocals, instrumental",
        "detail": "[Instrumental] West Coast style sample, clean boom bap drums, jazzy chord stabs, smooth bass groove, 92 BPM, LA-meets-Japan cross-cultural hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルJ-HipHop）",
        "style": "global Japanese hip hop, modern West Coast influenced, polished, no vocals, instrumental",
        "detail": "[Instrumental] polished West Coast influenced production, modern drum pattern, warm bass, global hip hop feel, 94 BPM, global modern Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（バイリンガルビート）",
        "style": "bilingual hip hop, Japanese meets American West Coast, experimental, no vocals, instrumental",
        "detail": "[Instrumental] blended East-West hip hop textures, experimental drum programming, cross-cultural sonic elements, 88 BPM, bilingual experimental Japanese-American hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 52,
    "name": "Shing02",
    "alias": "安川信悟",
    "city": "Tokyo / California",
    "bpm": "84–95",
    "eras": [
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "alternative",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "Nujabesとの「Luv(sic)」シリーズで世界的に知られるMC兼プロデューサー。日本語と英語を自在に操るバイリンガルスタイルと、ジャジーなビートへの詩情あふれるアプローチが特徴。",
    "sounds": [
      "ジャジービート",
      "ウォームサンプル",
      "バイリンガルフロウ",
      "ソウルフルパッド",
      "叙情的メロディー",
      "アコースティック要素"
    ],
    "artists": [
      "Nujabes",
      "Uyama Hiroto",
      "Aztek",
      "OB-ONE"
    ],
    "prompts": [
      {
        "type": "クラシック（バイリンガルジャズホップ）",
        "style": "bilingual jazz hip hop, Japanese-English, soulful conscious, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz sample, gentle drum groove, soulful chord progression, lyrical atmospheric pad, 88 BPM, bilingual conscious jazz hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（コンシャスJ-HipHop）",
        "style": "conscious Japanese hip hop, modern jazz influenced, introspective, no vocals, instrumental",
        "detail": "[Instrumental] modern jazz-influenced sample, clean drum pattern, warm bass, introspective mood, 90 BPM, conscious modern Japanese hip hop jazz loop [No Vocals]"
      },
      {
        "type": "実験的（詩的ジャズアンビエント）",
        "style": "poetic jazz ambient hip hop, contemplative Japanese aesthetic, no vocals, instrumental",
        "detail": "[Instrumental] ambient jazz textures, sparse meditative percussion, lyrical atmosphere, 84 BPM, poetic ambient jazz Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 53,
    "name": "Tohji",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "東京のラッパー兼プロデューサー。クラウドラップとJ-トラップを融合させた夢幻的なサウンドで次世代日本語ラップシーンを牽引。gummyboyとのコラボや独自の美学が国内外で注目される。",
    "sounds": [
      "ドリーミーシンセ",
      "808ベース",
      "フローティングテクスチャー",
      "エーテリアルパッド",
      "クラウドラップビート",
      "ユニークSE"
    ],
    "artists": [
      "gummyboy",
      "Yvng Homie",
      "JP THE WAVY",
      "KEIJU"
    ],
    "prompts": [
      {
        "type": "クラシック（クラウドラップ）",
        "style": "cloud rap Japanese, dreamy ethereal, floating synthesizer, no vocals, instrumental",
        "detail": "[Instrumental] dreamy floating synthesizer, soft 808 bass, ethereal atmospheric pads, cloud rap drum pattern, 140 BPM, dreamy Japanese cloud rap loop [No Vocals]"
      },
      {
        "type": "モダン（ドリームトラップJ）",
        "style": "dream trap Japanese, hazy aesthetic, modern ethereal, no vocals, instrumental",
        "detail": "[Instrumental] hazy synthesizer textures, sliding 808 bass, soft trap drums, ethereal pads, 142 BPM, modern dream trap Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（エーテリアルウェイブ）",
        "style": "ethereal wave Japanese hip hop, experimental surreal, innovative, no vocals, instrumental",
        "detail": "[Instrumental] surreal synthesizer waves, experimental 808, abstract dreamy drums, 138 BPM, ethereal wave experimental Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 54,
    "name": "gummyboy",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "lo-fi",
      "alternative"
    ],
    "region": "Japan",
    "desc": "東京のプロデューサー。Tohjiとの親密なコラボレーションで知られ、メロディックで夢幻的なサウンドが特徴。KEIJUやkZMらとも共演し、日本の新世代トラップシーンの重要な音の担い手。",
    "sounds": [
      "メロディックシンセ",
      "ドリーミーパッド",
      "808ベース",
      "ソフトトラップドラム",
      "浮遊感のあるテクスチャー",
      "エモーショナルコード"
    ],
    "artists": [
      "Tohji",
      "KEIJU",
      "kZm",
      "Awich",
      "JP THE WAVY"
    ],
    "prompts": [
      {
        "type": "クラシック（メロウトラップ）",
        "style": "mellow Japanese trap, dreamy melodic, emotional synthesizer, no vocals, instrumental",
        "detail": "[Instrumental] mellow melodic synthesizer, soft 808 bass, gentle trap drum pattern, dreamy pads, 138 BPM, mellow emotional Japanese trap loop [No Vocals]"
      },
      {
        "type": "モダン（エモJトラップ）",
        "style": "emo Japanese trap, emotional melodic, vulnerable modern, no vocals, instrumental",
        "detail": "[Instrumental] emotional synthesizer chords, melancholic melody, 808 bass, modern trap drums, 140 BPM, emotional emo Japanese trap loop [No Vocals]"
      },
      {
        "type": "実験的（ドリームポップトラップ）",
        "style": "dream pop trap fusion, experimental Japanese, hazy and beautiful, no vocals, instrumental",
        "detail": "[Instrumental] dream pop synthesizer textures, experimental trap drums, 808 bass, beautiful hazy atmosphere, 136 BPM, experimental dream pop Japanese trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 55,
    "name": "kZm",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Japan",
    "desc": "東京のラッパー兼プロデューサー。Young CocoやKEIJU、JP THE WAVYらとの共演で知られ、スタイリッシュなトラップサウンドを武器に日本語ラップシーンの新世代を代表する存在。",
    "sounds": [
      "スタイリッシュシンセ",
      "808ベース",
      "トラップハイハット",
      "クリーンビート",
      "クールなメロディー",
      "モダンテクスチャー"
    ],
    "artists": [
      "Young Coco",
      "KEIJU",
      "JP THE WAVY",
      "AWICH",
      "Chaki Zulu"
    ],
    "prompts": [
      {
        "type": "クラシック（スタイリッシュJトラップ）",
        "style": "stylish Japanese trap, cool modern, urban Tokyo, no vocals, instrumental",
        "detail": "[Instrumental] stylish synthesizer melody, heavy 808 bass, crisp trap drums, cool urban atmosphere, 140 BPM, stylish modern Japanese trap loop [No Vocals]"
      },
      {
        "type": "モダン（アーバントーキョートラップ）",
        "style": "urban Tokyo trap, sleek modern Japanese, clean, no vocals, instrumental",
        "detail": "[Instrumental] sleek melodic synthesizer, punchy 808, clean trap drum pattern, urban Tokyo vibe, 142 BPM, urban Tokyo modern trap loop [No Vocals]"
      },
      {
        "type": "実験的（ニューウェイブJトラップ）",
        "style": "new wave Japanese trap, innovative stylish, next generation, no vocals, instrumental",
        "detail": "[Instrumental] innovative synthesizer design, experimental 808 patterns, next-gen trap drums, 138 BPM, new wave experimental stylish Japanese trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 56,
    "name": "Moment Joon",
    "alias": "",
    "city": "Osaka, Japan",
    "bpm": "85–100",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "alternative"
    ],
    "region": "Japan",
    "desc": "大阪を拠点とする韓国系日本語ラッパー兼プロデューサー。社会問題や在日コリアンとしてのアイデンティティをリリックに込めたコンシャスラップで、日本語ヒップホップの多様性を広げる重要な存在。",
    "sounds": [
      "コンシャスビート",
      "ブームバップドラム",
      "ソウルサンプル",
      "インテレクチュアルテクスチャー",
      "ディープグルーヴ",
      "批評的雰囲気"
    ],
    "artists": [
      "大阪コンシャスラップシーン",
      "環ROY",
      "Hidden",
      "NONA REEVES"
    ],
    "prompts": [
      {
        "type": "クラシック（コンシャスブームバップ）",
        "style": "conscious boom bap, Osaka underground, intellectual poetic, no vocals, instrumental",
        "detail": "[Instrumental] thoughtful boom bap drum pattern, soul sample loop, intellectual atmospheric bass, 88 BPM, conscious intellectual Osaka underground hip hop boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（ソーシャルコメンタリービート）",
        "style": "social commentary hip hop, modern conscious, Osaka underground, no vocals, instrumental",
        "detail": "[Instrumental] modern conscious hip hop production, soul sample, clean drums, contemplative bass, 90 BPM, modern social commentary conscious hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（バイカルチャービート）",
        "style": "bicultural experimental hip hop, Korean-Japanese identity, abstract, no vocals, instrumental",
        "detail": "[Instrumental] abstract sample exploration, experimental drum pattern, bicultural sonic identity, 85 BPM, abstract bicultural experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 57,
    "name": "Dos Monos",
    "alias": "荘子it / Botsu / Taitan Man",
    "city": "Tokyo, Japan",
    "bpm": "80–130",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "underground",
      "experimental"
    ],
    "region": "Japan",
    "desc": "東京の実験的ヒップホップグループ。荘子it（Doss Monos）がビート制作も担当し、ノイズ・ジャズ・エレクトロニカを融合したアブストラクトなサウンドで国内外の実験的音楽シーンで高く評価される。",
    "sounds": [
      "アブストラクトシンセ",
      "ノイズ要素",
      "ジャズフラグメント",
      "実験的ドラム",
      "電子ノイズ",
      "アバンギャルドテクスチャー"
    ],
    "artists": [
      "Shing02",
      "荘子it",
      "BOC",
      "実験的ヒップホップシーン"
    ],
    "prompts": [
      {
        "type": "クラシック（実験的J-HipHop）",
        "style": "experimental Japanese hip hop, abstract noise, avant-garde, no vocals, instrumental",
        "detail": "[Instrumental] abstract noise and jazz fragments, unconventional drum patterns, dissonant synthesizer textures, 90 BPM, experimental avant-garde Japanese hip hop abstract loop [No Vocals]"
      },
      {
        "type": "モダン（エクスペリメンタルJ-HipHop）",
        "style": "experimental electronic Japanese hip hop, noise jazz fusion, no vocals, instrumental",
        "detail": "[Instrumental] electronic noise textures over hip hop rhythm, jazz deconstruction, experimental bass, 95 BPM, experimental electronic noise jazz Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ノイズアブストラクト）",
        "style": "noise abstract hip hop, maximalist experimental Japanese, no vocals, instrumental",
        "detail": "[Instrumental] maximalist noise collage, deconstructed hip hop rhythms, abstract textural elements, 85 BPM, maximalist abstract noise Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 58,
    "name": "Budamunk",
    "alias": "",
    "city": "Tokyo / Los Angeles",
    "bpm": "87–97",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "Japan",
    "desc": "東京出身でLAに移住し活動するビートメイカー。2005年にJam Master JayのMPCトーナメントで優勝した実力者。A Tribe Called QuestやJ Dilla直系のソウルフルなサンプリングで東京アンダーグラウンドシーンを支える。",
    "sounds": [
      "MPCビート",
      "ソウルサンプル",
      "ジャジーグルーヴ",
      "ヴィンテージトーン",
      "温かいドラム",
      "J Dillaインフルエンス"
    ],
    "artists": [
      "Issugi",
      "5lack",
      "Eligh (LA Symphony)",
      "Aztek"
    ],
    "prompts": [
      {
        "type": "クラシック（MPCソウルホップ）",
        "style": "MPC soul hip hop, J Dilla influenced, warm jazzy Japanese, no vocals, instrumental",
        "detail": "[Instrumental] MPC-crafted soul sample loop, J Dilla-inspired swing drum, warm bass, jazzy chord stabs, 90 BPM, MPC soul jazz hip hop Tokyo loop [No Vocals]"
      },
      {
        "type": "モダン（ビートサイエンス）",
        "style": "beat science hip hop, precise MPC programming, warm modern, no vocals, instrumental",
        "detail": "[Instrumental] precise MPC drum programming, warm soul sample, smooth bass groove, modern clean mix, 92 BPM, beat science warm soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ソウルクリエイティブ）",
        "style": "creative soul hip hop, experimental MPC, Tokyo underground, no vocals, instrumental",
        "detail": "[Instrumental] creative MPC manipulation, experimental soul sample chopping, deep groove bass, 88 BPM, creative experimental MPC soul hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 59,
    "name": "Ill Sugi",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "lo-fi"
    ],
    "region": "Japan",
    "desc": "2006年から東京を拠点に活動するビートメイカー。90年代NY（ブロンクス・ニュージャージー）スタイルへのオマージュを独自解釈で昇華し、欧州でも支持を得る日本のアンダーグラウンドビートシーンの職人。",
    "sounds": [
      "ヴィンテージNYサンプル",
      "ブームバップドラム",
      "ジャズフラグメント",
      "ヴィンテージテクスチャー",
      "ディープベース",
      "ブロンクスバイブ"
    ],
    "artists": [
      "Infinito 2017",
      "国内アンダーグラウンドMC"
    ],
    "prompts": [
      {
        "type": "クラシック（ヴィンテージNYスタイル）",
        "style": "vintage New York style boom bap, 90s Bronx influenced, raw, no vocals, instrumental",
        "detail": "[Instrumental] vintage NY style sample loop, raw boom bap drum pattern, deep bass, dusty vinyl texture, 88 BPM, vintage NY style underground Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クラシックリバイバル）",
        "style": "classic revival underground hip hop, Japanese, authentic boom bap, no vocals, instrumental",
        "detail": "[Instrumental] authentic boom bap drum break, classic soul sample, deep bass groove, 90 BPM, classic revival authentic underground Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（オールドスクールネオ）",
        "style": "old school neo underground, experimental vintage, Japanese hip hop, no vocals, instrumental",
        "detail": "[Instrumental] experimental vintage sample processing, neo old-school drum pattern, deep bass, 85 BPM, old school neo experimental underground Japanese hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 60,
    "name": "Shingo Suzuki",
    "alias": "",
    "city": "Tokyo, Japan",
    "bpm": "82–104",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "neo soul",
      "jazzy",
      "alternative"
    ],
    "region": "Japan",
    "desc": "東京在住のコンポーザー・プロデューサー・ベーシスト。トリオ「Ovall」ではヒップホップのビートに生演奏のジャズ・ソウル・ロックを融合させ、「ヒップホップ・フィール×ミュージシャン視点」を体現する。",
    "sounds": [
      "ライブベース演奏",
      "ジャズ生演奏",
      "ヒップホップビート",
      "ソウルグルーヴ",
      "プログラムとライブの融合",
      "オーガニックテクスチャー"
    ],
    "artists": [
      "Ovall",
      "mabanua",
      "mabanuaコラボ",
      "AAAMYYY"
    ],
    "prompts": [
      {
        "type": "クラシック（ライブジャズホップ）",
        "style": "live jazz hip hop, neo soul, bass-driven organic groove, no vocals, instrumental",
        "detail": "[Instrumental] live bass performance over hip hop beat, jazz chord stabs, organic drum groove, soulful keyboard, 88 BPM, live jazz hip hop organic groove loop [No Vocals]"
      },
      {
        "type": "モダン（ネオソウルJazz）",
        "style": "neo soul jazz Japanese, live band feel, modern organic, no vocals, instrumental",
        "detail": "[Instrumental] live band neo soul arrangement, hip hop drum programming, live bass guitar, jazz piano, 92 BPM, modern neo soul live jazz Japanese hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャズロックフュージョン）",
        "style": "jazz rock fusion hip hop, experimental live instruments, progressive, no vocals, instrumental",
        "detail": "[Instrumental] progressive jazz-rock fusion over hip hop beat, live instruments, experimental bass playing, 86 BPM, jazz rock fusion experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 61,
    "name": "Marley Marl",
    "alias": "",
    "city": "Queensbridge, NY",
    "bpm": "90–102",
    "eras": [
      "80s",
      "90s"
    ],
    "styles": [
      "boom bap",
      "underground"
    ],
    "region": "East Coast",
    "desc": "ヒップホップにドラムサンプリングという技法をもたらした革命児。クイーンズブリッジのJuice Crewを率いてLL Cool J・Big Daddy Kaneらをプロデュースし、1980年代後半の黄金期を音響的に定義した歴史的プロデューサー。",
    "sounds": [
      "ドラムサンプルパイオニア",
      "ソウルループ",
      "クリーンスネア",
      "ブラスサンプル",
      "Juice Crewサウンド",
      "80s NYビート"
    ],
    "artists": [
      "LL Cool J",
      "Big Daddy Kane",
      "MC Shan",
      "Biz Markie",
      "Kool G Rap"
    ],
    "prompts": [
      {
        "type": "クラシック（80s NYパイオニア）",
        "style": "80s New York hip hop pioneer, Juice Crew, early boom bap sampling, no vocals, instrumental",
        "detail": "[Instrumental] early sampled drum break, soulful brass loop, clean NY hip hop beat, deep bass, 94 BPM, 80s pioneering New York hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ゴールデンエラリバイバル）",
        "style": "golden era revival hip hop, classic NY sound, boom bap, no vocals, instrumental",
        "detail": "[Instrumental] classic boom bap drum pattern, soul sample loop, warm bass groove, 96 BPM, golden era revival New York hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ピュアサンプリング）",
        "style": "pure sampling hip hop, original drum break manipulation, experimental classic, no vocals, instrumental",
        "detail": "[Instrumental] drum break sample manipulation, layered soul fragments, deep bass, 92 BPM, experimental pure sampling classic hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 62,
    "name": "Large Professor",
    "alias": "Extra P",
    "city": "Queens, NY",
    "bpm": "86–96",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "East Coast",
    "desc": "Nasのデビュー作「Illmatic」（1994）に参加し名を永遠に刻んだプロデューサー。Main Sourceの「Breaking Atoms」とともにNY黄金期を定義。R&B・ジャズ・ファンクを巧みにサンプリングした温かみのあるビートが特徴。",
    "sounds": [
      "ソウルフルサンプル",
      "ジャズフラグメント",
      "レイドバックドラム",
      "ウォームベース",
      "ファンクグルーヴ",
      "ヴィンテージテクスチャー"
    ],
    "artists": [
      "Nas",
      "Main Source",
      "Rakim",
      "Eric B.",
      "A Tribe Called Quest"
    ],
    "prompts": [
      {
        "type": "クラシック（イルマティック期NYビート）",
        "style": "Illmatic era New York boom bap, jazzy soulful, golden age, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz and soul sample chops, laid-back boom bap drum groove, deep bass, jazzy chord stabs, 90 BPM, golden age New York soulful hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ゴールデンエラジャズホップ）",
        "style": "golden era jazz hip hop, modern clean, soulful warm, no vocals, instrumental",
        "detail": "[Instrumental] clean jazz sample loop, punchy boom bap drums, smooth bass groove, 92 BPM, modern clean golden era jazz hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオジャズブームバップ）",
        "style": "neo jazz boom bap, experimental warm, NY underground, no vocals, instrumental",
        "detail": "[Instrumental] experimental jazz sample processing, neo boom bap drums, warm bass texture, 88 BPM, neo jazz experimental underground NY hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 63,
    "name": "DJ Shadow",
    "alias": "Josh Davis",
    "city": "Davis, CA",
    "bpm": "82–100",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "alternative",
      "lo-fi",
      "underground"
    ],
    "region": "West Coast",
    "desc": "デビューアルバム「Endtroducing...」（1996）がギネスに「史上初の完全サンプルアルバム」として認定されたカリフォルニアのプロデューサー。ファンク・ロック・ヒップホップ・アンビエントを多層融合したシネマティックなビートで知られる。",
    "sounds": [
      "多層サンプル",
      "シネマティックテクスチャー",
      "ヴィニールループ",
      "ロック要素",
      "アンビエントパッド",
      "実験的ドラム"
    ],
    "artists": [
      "UNKLE",
      "Cut Chemist",
      "Blackalicious",
      "Radiohead"
    ],
    "prompts": [
      {
        "type": "クラシック（エンドロデューシング）",
        "style": "Endtroducing era sample hip hop, cinematic abstract, multi-genre, no vocals, instrumental",
        "detail": "[Instrumental] multi-layered vinyl sample collage, cinematic atmospheric textures, abstract drum pattern, 88 BPM, cinematic abstract multi-genre hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（トリップホップシネマ）",
        "style": "trip hop cinematic, modern abstract hip hop, atmospheric, no vocals, instrumental",
        "detail": "[Instrumental] atmospheric trip hop textures, slow heavy drums, cinematic synthesizer, ambient bass, 84 BPM, modern cinematic trip hop abstract loop [No Vocals]"
      },
      {
        "type": "実験的（アブストラクトヴィニール）",
        "style": "abstract vinyl collage, experimental multi-source sampling, avant-garde, no vocals, instrumental",
        "detail": "[Instrumental] abstract vinyl collage from diverse sources, experimental drum manipulation, atmospheric textures, 80 BPM, avant-garde abstract vinyl collage hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 64,
    "name": "El-P",
    "alias": "Jaime Meline",
    "city": "Brooklyn, NY",
    "bpm": "88–145",
    "eras": [
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "underground",
      "experimental"
    ],
    "region": "East Coast",
    "desc": "Company Flowで台頭しDef Jux Recordsを設立したインディーヒップホップの最重要人物。現在はKiller MikeとのデュオRun the Jewelsで活動。SFパラノイアと政治的サブテキストが込められた密度の高いインダストリアルサウンドが特徴。",
    "sounds": [
      "インダストリアルシンセ",
      "ノイズ要素",
      "密度の高いドラム",
      "ディストーション",
      "SF的テクスチャー",
      "アグレッシブベース"
    ],
    "artists": [
      "Killer Mike (Run the Jewels)",
      "Aesop Rock",
      "Cage",
      "Mr. Lif",
      "Cannibal Ox"
    ],
    "prompts": [
      {
        "type": "クラシック（インダストリアルインディーラップ）",
        "style": "industrial indie hip hop, dense aggressive, El-P style, distorted, no vocals, instrumental",
        "detail": "[Instrumental] distorted industrial synthesizer, dense complex drum programming, aggressive bass, noise elements, 92 BPM, dense industrial indie hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（RTJ スタイル）",
        "style": "Run the Jewels style aggressive hip hop, modern industrial, hard, no vocals, instrumental",
        "detail": "[Instrumental] hard aggressive synthesizer, heavy industrial drums, powerful bass, chaotic energy, 140 BPM, aggressive Run the Jewels style modern hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ノイズポリティカル）",
        "style": "noise political hip hop, experimental chaotic, avant-garde aggressive, no vocals, instrumental",
        "detail": "[Instrumental] chaotic noise collage, distorted political energy, abstract drum patterns, 95 BPM, experimental noise political aggressive hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 65,
    "name": "Black Milk",
    "alias": "Curtis Cross",
    "city": "Detroit, MI",
    "bpm": "86–98",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "neo soul",
      "underground"
    ],
    "region": "Midwest",
    "desc": "デトロイトのラッパー兼プロデューサー。J Dilla精神を継承しつつ独自のハードエッジを加えたデトロイト流ブームバップを体現。Royce da 5'9やDanny Brown、Slum Villageなど同世代の重要アーティストと多数コラボ。",
    "sounds": [
      "ハードドラム",
      "デトロイトビート",
      "ソウルサンプル",
      "ダークグルーヴ",
      "J Dilla継承サウンド",
      "ライブドラム要素"
    ],
    "artists": [
      "Royce da 5'9",
      "Danny Brown",
      "Slum Village",
      "Guilty Simpson",
      "Elzhi"
    ],
    "prompts": [
      {
        "type": "クラシック（デトロイトハードブームバップ）",
        "style": "Detroit hard boom bap, J Dilla influenced, dark soulful, no vocals, instrumental",
        "detail": "[Instrumental] hard Detroit boom bap drums, dark soul sample loop, deep bass groove, gritty urban texture, 90 BPM, hard dark Detroit boom bap hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ネオソウルブームバップ）",
        "style": "neo soul boom bap Detroit, modern organic, soulful hard, no vocals, instrumental",
        "detail": "[Instrumental] neo soul sample with hard Detroit drums, live drum elements, deep bass, 92 BPM, modern neo soul hard Detroit boom bap loop [No Vocals]"
      },
      {
        "type": "実験的（デトロイトアブストラクト）",
        "style": "Detroit abstract hip hop, experimental dark soul, underground, no vocals, instrumental",
        "detail": "[Instrumental] abstract dark soul sample manipulation, complex Detroit drum pattern, deep bass, 88 BPM, abstract experimental dark Detroit hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 66,
    "name": "Havoc",
    "alias": "Kejuan Muchita",
    "city": "Queensbridge, NY",
    "bpm": "87–97",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "underground"
    ],
    "region": "East Coast",
    "desc": "Mobb Deepのメンバーとして「The Infamous」（1995）「Hell on Earth」を手がけ、東海岸ハードコアの金字塔を打ち立てた。「Shook Ones Pt.2」は出典を長年秘密にした謎のサンプルと殺伐としたビート美学で伝説的。",
    "sounds": [
      "冷徹なシンセループ",
      "重いキック",
      "鋭いスネア",
      "殺伐としたテクスチャー",
      "QueensbridgeバイブNY寒冬感",
      "低音ベース"
    ],
    "artists": [
      "Prodigy (Mobb Deep)",
      "Nas",
      "Jay-Z",
      "Big Noyd",
      "Raekwon"
    ],
    "prompts": [
      {
        "type": "クラシック（クイーンズブリッジハードコア）",
        "style": "Queensbridge hardcore hip hop, dark gritty boom bap, Mobb Deep, no vocals, instrumental",
        "detail": "[Instrumental] cold and ominous synthesizer loop, heavy kick and sharp snare, gritty Queensbridge atmosphere, dark bass, 90 BPM, Queensbridge hardcore dark boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（イーストコーストダーク）",
        "style": "East Coast dark hip hop, modern grimy boom bap, hard, no vocals, instrumental",
        "detail": "[Instrumental] dark grimy sample loop, hard punchy drum pattern, cold bass, urban danger atmosphere, 92 BPM, modern dark East Coast grimy boom bap loop [No Vocals]"
      },
      {
        "type": "実験的（ホラーブームバップ）",
        "style": "horror boom bap, extremely dark, ominous underground, no vocals, instrumental",
        "detail": "[Instrumental] horror-esque dark synthesizer, heavy ominous drums, cold deep bass, 88 BPM, extreme dark horror underground boom bap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 67,
    "name": "Organized Noize",
    "alias": "Rico Wade / Ray Murray / Sleepy Brown",
    "city": "East Point, GA",
    "bpm": "91–107",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "south",
      "alternative",
      "funk"
    ],
    "region": "South",
    "desc": "OutKastとGoodie Mobの全デビューアルバムを手がけ、南部ヒップホップ台頭の礎を築いたアトランタの伝説的プロダクションチーム。母親の地下室「Dungeon」から出発し、TLC「Waterfalls」等の超メガヒットも生んだ。",
    "sounds": [
      "ソウルループ",
      "ライブインストゥルメント",
      "Dungeonサウンド",
      "サザングルーヴ",
      "オーガニックファンク",
      "メロウビート"
    ],
    "artists": [
      "OutKast",
      "Goodie Mob",
      "TLC",
      "Ludacris",
      "Witchdoctor"
    ],
    "prompts": [
      {
        "type": "クラシック（アトランタダンジョンサウンド）",
        "style": "Atlanta Dungeon sound hip hop, Southern soulful organic, OutKast, no vocals, instrumental",
        "detail": "[Instrumental] organic soul sample, warm Southern groove drum pattern, funky bass line, Dungeon Family atmosphere, 96 BPM, Atlanta Dungeon soulful Southern hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（サザンオルタナソウル）",
        "style": "Southern alternative soul hip hop, organic warm, funky, no vocals, instrumental",
        "detail": "[Instrumental] warm soul sample loop, Southern organic drum feel, funky bass, melodic Southern vibe, 98 BPM, modern Southern alternative soul hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（サザンサイケソウル）",
        "style": "Southern psychedelic soul hip hop, experimental Dungeon, organic, no vocals, instrumental",
        "detail": "[Instrumental] psychedelic soul sample layers, organic experimental drum feel, deep Southern bass, 93 BPM, Southern psychedelic soul experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 68,
    "name": "Swizz Beatz",
    "alias": "Kasseem Dean",
    "city": "Bronx, NY",
    "bpm": "88–106",
    "eras": [
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "funk"
    ],
    "region": "East Coast",
    "desc": "ブロンクス出身で16歳から制作を始め、18歳でDMXのRuff Ryders Anthemを爆発させた天才。サンプリング不使用のライブキーボード主体でNY東海岸ラップの新方言を確立。多分野でも活躍するユニークなアーティスト。",
    "sounds": [
      "ライブキーボード",
      "ハードドラム",
      "アンセムビート",
      "アグレッシブシンセ",
      "ミニマルループ",
      "NYストリートエネルギー"
    ],
    "artists": [
      "DMX",
      "Jay-Z",
      "Nas",
      "Kanye West",
      "Beyoncé",
      "Lil Wayne"
    ],
    "prompts": [
      {
        "type": "クラシック（ラフライダーズアンセム）",
        "style": "Ruff Ryders anthem style, NY aggressive hip hop, hard keyboard, no vocals, instrumental",
        "detail": "[Instrumental] hard-hitting keyboard loop, aggressive drum pattern, deep bass, NY street energy, powerful anthem feel, 96 BPM, Ruff Ryders hard New York hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ブロンクスバンガー）",
        "style": "Bronx banger hip hop, hard energetic, keyboard-driven, no vocals, instrumental",
        "detail": "[Instrumental] punchy keyboard riff, heavy drum programming, deep bass hits, energetic NY vibe, 98 BPM, hard Bronx banger hip hop keyboard-driven loop [No Vocals]"
      },
      {
        "type": "実験的（ノーサンプルビート）",
        "style": "no-sample hip hop, live keyboard only, experimental NY, no vocals, instrumental",
        "detail": "[Instrumental] purely live keyboard-generated beat, no sampling, hard drum programming, innovative bass, 94 BPM, experimental live keyboard-only New York hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 69,
    "name": "Mike Dean",
    "alias": "",
    "city": "Houston, TX",
    "bpm": "82–145",
    "eras": [
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "south",
      "alternative",
      "trap"
    ],
    "region": "South",
    "desc": "テキサス出身のマルチタレント（プロデューサー・ミキシングエンジニア・マスタリング・鍵盤奏者）。Scarface・Geto Boysで南部ラップの基盤を作り、Kanye West全7作・Travis Scott「Astroworld」で世界的評価を確立。",
    "sounds": [
      "サザンシンセ",
      "テキサスベース",
      "Kanyeオーケストラ",
      "メロウキーボード",
      "ダークサザンサウンド",
      "エピックアレンジ"
    ],
    "artists": [
      "Kanye West",
      "Travis Scott",
      "Scarface",
      "Geto Boys",
      "21 Savage"
    ],
    "prompts": [
      {
        "type": "クラシック（テキサスサザンラップ）",
        "style": "Texas Southern rap production, Scarface era, dirty south, no vocals, instrumental",
        "detail": "[Instrumental] Texas Southern synthesizer groove, dirty south drum pattern, deep bass, 90 BPM, Texas Southern hip hop dirty south loop [No Vocals]"
      },
      {
        "type": "モダン（Kanyeコラボスタイル）",
        "style": "Kanye West collaboration style, grand orchestral hip hop, modern, no vocals, instrumental",
        "detail": "[Instrumental] grand orchestral arrangement, heavy modern drums, sweeping synthesizer, powerful bass, 95 BPM, modern grand orchestral Kanye-style hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（テキサスアンビエント）",
        "style": "Texas ambient hip hop, experimental progressive, cinematic dark, no vocals, instrumental",
        "detail": "[Instrumental] cinematic dark Texas synthesizer, experimental drum programming, ambient bass textures, 85 BPM, experimental cinematic dark Texas hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 70,
    "name": "Tay Keith",
    "alias": "Brytavious Chambers",
    "city": "Memphis, TN",
    "bpm": "135–158",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "South",
    "desc": "メンフィス出身のトラッププロデューサー。「Tay Keith, fuck these niggas up」のタグと、BlocBoy JBとの「Look Alive」・Drakeの「Nonstop」でほぼ同時ブレイク。メンフィス固有の重低音と硬質なスネアでBillboard Hot 100 Top 10を11曲達成。",
    "sounds": [
      "メンフィス重低音",
      "硬質スネア",
      "速いハイハット",
      "808キック",
      "ダークメロディー",
      "メンフィストラップ"
    ],
    "artists": [
      "BlocBoy JB",
      "Drake",
      "Travis Scott",
      "Moneybagg Yo",
      "Yo Gotti"
    ],
    "prompts": [
      {
        "type": "クラシック（メンフィストラップ）",
        "style": "Memphis trap, heavy dark, Tay Keith style, hard-hitting, no vocals, instrumental",
        "detail": "[Instrumental] heavy Memphis trap drum pattern, hard snare, dark synthesizer melody, deep 808 bass, rapid hi-hat, 145 BPM, dark hard-hitting Memphis trap loop [No Vocals]"
      },
      {
        "type": "モダン（ハードトラップバンガー）",
        "style": "hard trap banger, modern Memphis, aggressive high energy, no vocals, instrumental",
        "detail": "[Instrumental] aggressive hard drum hits, deep sliding 808, dark melodic hook, rapid trap hi-hat rolls, 150 BPM, hard modern Memphis trap banger loop [No Vocals]"
      },
      {
        "type": "実験的（メンフィスダークウェイブ）",
        "style": "Memphis dark wave trap, experimental heavy, ominous, no vocals, instrumental",
        "detail": "[Instrumental] ominous dark synthesizer wave, experimental heavy 808, hard drum pattern, dark atmospheric bass, 142 BPM, dark wave experimental Memphis trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 71,
    "name": "Southside",
    "alias": "Joshua Luellen",
    "city": "Atlanta, GA",
    "bpm": "130–155",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "South",
    "desc": "808 Mafia共同設立者。14歳からビート制作を始め17歳でWaka Flockaに見出された。Futureの「56 Nights」全曲を一夜で制作した伝説的エピソードを持ち、ダークで攻撃的なトラップサウンドを定義。",
    "sounds": [
      "暗いシンセ",
      "808キックドラム",
      "重層オーケストラ",
      "速いハイハット",
      "不吉なパッド",
      "808 Mafiaサウンド"
    ],
    "artists": [
      "Future",
      "Young Thug",
      "Waka Flocka",
      "G Herbo",
      "21 Savage"
    ],
    "prompts": [
      {
        "type": "クラシック（808 Mafiaダークトラップ）",
        "style": "808 Mafia dark trap, Southside style, belligerent aggressive, no vocals, instrumental",
        "detail": "[Instrumental] dark belligerent synthesizer, heavy 808 kick, crisp rapid hi-hat, ominous bass, aggressive Atlanta trap energy, 140 BPM, 808 Mafia dark aggressive trap loop [No Vocals]"
      },
      {
        "type": "モダン（シネマトラップ）",
        "style": "cinematic trap, dark orchestral, Atlanta modern, no vocals, instrumental",
        "detail": "[Instrumental] dark orchestral synthesizer over trap drums, heavy 808 bass, cinematic ominous strings, 142 BPM, dark cinematic Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（ダークフューチャリスティック）",
        "style": "dark futuristic trap, experimental 808, ominous innovative, no vocals, instrumental",
        "detail": "[Instrumental] futuristic dark synthesizer design, experimental 808 patterns, innovative drum programming, 138 BPM, dark futuristic experimental trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 72,
    "name": "Young Chop",
    "alias": "Chopsquad DJ",
    "city": "Chicago, IL",
    "bpm": "62–78",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "South",
    "desc": "シカゴドリルの音的発明者。Chief Keefとのコンビネーションで「I Don't Like」（2012）を世に送り出し、英国・NYのドリルシーンに強大な影響を与えた。遅いBPM・スパースなドラム・暗いベースラインが特徴。",
    "sounds": [
      "スパースドラム",
      "ダークベースライン",
      "シカゴドリルビート",
      "遅いBPM",
      "ゴシックシンセ",
      "重いスネア"
    ],
    "artists": [
      "Chief Keef",
      "Lil Durk",
      "G Herbo",
      "Chance the Rapper",
      "King Louie"
    ],
    "prompts": [
      {
        "type": "クラシック（シカゴドリル）",
        "style": "Chicago drill, slow dark, Young Chop style, sparse drum, no vocals, instrumental",
        "detail": "[Instrumental] sparse dark Chicago drill drum pattern, ominous synthesizer, deep bass line, cold atmosphere, 68 BPM, original Chicago drill dark slow loop [No Vocals]"
      },
      {
        "type": "モダン（ドリルエボリューション）",
        "style": "evolved drill hip hop, dark modern, Chicago underground, no vocals, instrumental",
        "detail": "[Instrumental] evolved drill drum pattern, dark melodic synthesizer, heavy bass, urban danger atmosphere, 70 BPM, modern evolved Chicago drill loop [No Vocals]"
      },
      {
        "type": "実験的（ダークミニマル）",
        "style": "dark minimal drill, extremely sparse, menacing, no vocals, instrumental",
        "detail": "[Instrumental] extremely sparse drum hits, dark menacing synthesizer, deep rumbling bass, 65 BPM, minimalist dark menacing drill loop [No Vocals]"
      }
    ]
  },
  {
    "id": 73,
    "name": "DJ Muggs",
    "alias": "Lawrence Muggerud",
    "city": "Los Angeles, CA",
    "bpm": "86–100",
    "eras": [
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "west coast",
      "underground",
      "alternative"
    ],
    "region": "West Coast",
    "desc": "Cypress Hillの音楽的設計者として4枚のプラチナアルバムを達成したNY生まれLA拠点のプロデューサー。Soul Assassinsコレクティブを率い、埃っぽいヴィニールループと低音域の脅威感が醸す西海岸のサイケデリックな暗黒を確立。",
    "sounds": [
      "埃っぽいヴィニールループ",
      "ダークサイケシンセ",
      "パラノイア的テクスチャー",
      "重低音",
      "トリップホップ要素",
      "ダブステップ影響"
    ],
    "artists": [
      "Cypress Hill",
      "GZA",
      "House of Pain",
      "Westside Gunn",
      "Mach-Hommy"
    ],
    "prompts": [
      {
        "type": "クラシック（サイケダークウェスト）",
        "style": "psychedelic dark West Coast hip hop, Soul Assassins, Cypress Hill, no vocals, instrumental",
        "detail": "[Instrumental] dusty vinyl loop, dark psychedelic synthesizer, paranoid atmospheric texture, heavy bass, West Coast menace, 90 BPM, psychedelic dark Soul Assassins hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ダークサイケビート）",
        "style": "dark psychedelic beat, modern underground, West Coast gritty, no vocals, instrumental",
        "detail": "[Instrumental] dark psychedelic sample processing, heavy underground drums, paranoid bass, atmospheric darkness, 92 BPM, modern dark psychedelic underground West Coast hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（トリップホップエクスペリメント）",
        "style": "trip hop experiment, dark underground, psychedelic abstract, no vocals, instrumental",
        "detail": "[Instrumental] abstract psychedelic trip hop textures, experimental drum manipulation, dark bass drones, 86 BPM, experimental dark trip hop underground hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 74,
    "name": "DJ Jazzy Jeff",
    "alias": "Jeffrey Townes",
    "city": "Philadelphia, PA",
    "bpm": "88–100",
    "eras": [
      "80s",
      "90s",
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "funk"
    ],
    "region": "East Coast",
    "desc": "DJ Jazzy Jeff & The Fresh Princeとして1989年にヒップホップ初のグラミー賞を受賞したフィラデルフィアのレジェンド。トランスフォーマースクラッチの普及者であり、プロダクション会社「A Touch of Jazz」でJill Scottらフィリー音楽シーンを育てた。",
    "sounds": [
      "トランスフォーマースクラッチ",
      "ソウルフルサンプル",
      "フィリーグルーヴ",
      "クリーンドラム",
      "R&Bテクスチャー",
      "ライトハッピービート"
    ],
    "artists": [
      "Will Smith (Fresh Prince)",
      "Jill Scott",
      "Rhymefest",
      "Jazzy Jeff himself"
    ],
    "prompts": [
      {
        "type": "クラシック（フィリービート）",
        "style": "Philadelphia hip hop classic, soulful scratching, Fresh Prince era, no vocals, instrumental",
        "detail": "[Instrumental] Philly soul sample loop, classic DJ scratch elements, clean drum pattern, warm bass, uplifting feel, 93 BPM, classic Philadelphia soulful hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ソウルフルクリーン）",
        "style": "soulful clean hip hop, modern Philly sound, warm production, no vocals, instrumental",
        "detail": "[Instrumental] clean soul sample, polished drum pattern, smooth bass, melodic Philly vibe, 95 BPM, modern clean soulful Philadelphia hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ターンテーブリズム）",
        "style": "turntablism hip hop, scratch technique showcase, creative DJ, no vocals, instrumental",
        "detail": "[Instrumental] creative turntable scratch patterns, soul sample backdrop, rhythmic drum groove, 90 BPM, turntablism creative DJ hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 75,
    "name": "Teddy Riley",
    "alias": "",
    "city": "New York, NY",
    "bpm": "90–108",
    "eras": [
      "80s",
      "90s",
      "2000s"
    ],
    "styles": [
      "funk",
      "boom bap",
      "alternative"
    ],
    "region": "East Coast",
    "desc": "New Jack Swingの創始者。ヒップホップのビートとR&Bのメロディを結婚させたハイブリッドサウンドでMichael Jackson・Bobby Brown・Blackstreet等の名曲を生んだ。1980〜90年代ポップ・ヒップホップ融合の最重要人物。",
    "sounds": [
      "ニュージャックスウィングビート",
      "シンセブラス",
      "スウィンギードラム",
      "R&Bメロディー",
      "ファンキーベース",
      "ポップフック"
    ],
    "artists": [
      "Michael Jackson",
      "Bobby Brown",
      "Blackstreet",
      "Wreckx-N-Effect",
      "Aaron Hall"
    ],
    "prompts": [
      {
        "type": "クラシック（ニュージャックスウィング）",
        "style": "New Jack Swing hip hop R&B, Teddy Riley style, swinging drum, no vocals, instrumental",
        "detail": "[Instrumental] New Jack Swing drum pattern with swinging hi-hat, funky synthesizer, brass stabs, bass groove, 100 BPM, New Jack Swing hip hop R&B fusion loop [No Vocals]"
      },
      {
        "type": "モダン（スウィングR&Bホップ）",
        "style": "modern swing hip hop R&B, contemporary New Jack feel, no vocals, instrumental",
        "detail": "[Instrumental] modern New Jack-influenced swing drum, funky bass, melodic R&B synthesizer, 102 BPM, modern swing hip hop R&B fusion loop [No Vocals]"
      },
      {
        "type": "実験的（ネオスウィング）",
        "style": "neo swing hip hop, futuristic New Jack, experimental R&B fusion, no vocals, instrumental",
        "detail": "[Instrumental] futuristic New Jack Swing update, experimental bass, electronic R&B textures, 96 BPM, neo swing experimental hip hop R&B fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 76,
    "name": "Jermaine Dupri",
    "alias": "JD",
    "city": "Atlanta, GA",
    "bpm": "95–112",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "south",
      "funk",
      "trap"
    ],
    "region": "South",
    "desc": "アトランタのポップラップ先駆者。Kris Krossをデビューさせた12歳のプロデューサーとして出発し、Usher・Mariah Carey・Jay-Zの楽曲を手がけた。So So Def Recordingsを設立しアトランタ音楽産業を牽引。",
    "sounds": [
      "ポップラップビート",
      "エネルギッシュシンセ",
      "キャッチーフック",
      "アトランタグルーヴ",
      "パーティービート",
      "クリーンポップ"
    ],
    "artists": [
      "Usher",
      "Mariah Carey",
      "Jay-Z",
      "Kris Kross",
      "Bow Wow",
      "Lil' Kim"
    ],
    "prompts": [
      {
        "type": "クラシック（アトランタポップラップ）",
        "style": "Atlanta pop rap 90s, energetic Jermaine Dupri style, catchy, no vocals, instrumental",
        "detail": "[Instrumental] energetic pop rap drum beat, catchy synthesizer melody, party-ready bass groove, 104 BPM, Atlanta pop rap energetic catchy hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（メインストリームアトランタ）",
        "style": "mainstream Atlanta hip hop, modern polished, pop crossover, no vocals, instrumental",
        "detail": "[Instrumental] polished mainstream synthesizer hook, clean drum pattern, smooth bass, pop crossover Atlanta feel, 106 BPM, mainstream modern Atlanta hip hop pop loop [No Vocals]"
      },
      {
        "type": "実験的（ポップラップフュージョン）",
        "style": "pop rap fusion, experimental Atlanta, crossover innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative pop-rap fusion production, experimental melodic hook, creative drum pattern, 100 BPM, experimental pop-rap Atlanta fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 77,
    "name": "Dallas Austin",
    "alias": "",
    "city": "Atlanta, GA",
    "bpm": "90–108",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "funk",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "アトランタのR&B/ヒップホップ融合プロデューサー。TLC・Boyz II Men・Madonnaの楽曲を手がけ、90年代アトランタポップR&Bサウンドを定義。ヒップホップとポップとR&Bの三角地帯で唯一無二の存在感を示した。",
    "sounds": [
      "アトランタR&Bビート",
      "ソフトポップシンセ",
      "スウィートメロディー",
      "ファンクグルーヴ",
      "ポップドラム",
      "R&Bテクスチャー"
    ],
    "artists": [
      "TLC",
      "Boyz II Men",
      "Madonna",
      "Brownstone",
      "Monica"
    ],
    "prompts": [
      {
        "type": "クラシック（アトランタポップR&B）",
        "style": "Atlanta pop R&B hip hop fusion, smooth melodic, Dallas Austin, no vocals, instrumental",
        "detail": "[Instrumental] smooth Atlanta pop R&B groove, melodic synthesizer, soft hip hop drum pattern, warm bass, 96 BPM, smooth Atlanta pop R&B hip hop fusion loop [No Vocals]"
      },
      {
        "type": "モダン（スウィートソウルポップ）",
        "style": "sweet soul pop hip hop, warm melodic, modern R&B crossover, no vocals, instrumental",
        "detail": "[Instrumental] sweet melodic soul sample, warm pop R&B drum, smooth bass, 98 BPM, sweet modern soul pop hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ポップソウルフュージョン）",
        "style": "pop soul fusion hip hop, experimental melodic, Atlanta smooth, no vocals, instrumental",
        "detail": "[Instrumental] experimental melodic soul-pop fusion, creative drum pattern, smooth bass, 93 BPM, experimental pop-soul Atlanta fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 78,
    "name": "Rich Harrison",
    "alias": "",
    "city": "Washington DC",
    "bpm": "95–108",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "funk",
      "boom bap",
      "jazzy"
    ],
    "region": "East Coast",
    "desc": "Beyoncé「Crazy in Love」のプロデューサー。DCのソウル・ファンク文化を継承し、アクセントの強いホルンループやシンコペートしたドラムパターンで独自のグルーヴ感を確立したアンダーレーテッドな才能。",
    "sounds": [
      "アクセントホルンループ",
      "シンコペートドラム",
      "ファンキーベース",
      "ソウルフルグルーヴ",
      "ブラスセクション",
      "DCファンクバイブ"
    ],
    "artists": [
      "Beyoncé",
      "Amerie",
      "Lil Mo",
      "Total"
    ],
    "prompts": [
      {
        "type": "クラシック（クレイジーインラブ期）",
        "style": "Crazy in Love era hip hop funk, horn loop, syncopated drums, no vocals, instrumental",
        "detail": "[Instrumental] accented horn loop, syncopated drum pattern, deep funky bass, powerful groove, 100 BPM, Crazy in Love era hip hop funk loop [No Vocals]"
      },
      {
        "type": "モダン（ファンキーソウルポップ）",
        "style": "funky soul pop hip hop, horn-driven, modern groove, no vocals, instrumental",
        "detail": "[Instrumental] modern horn-driven groove, funky drum pattern, soul bass, 102 BPM, funky modern soul pop hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ネオファンクビート）",
        "style": "neo funk hip hop beat, experimental horn, innovative groove, no vocals, instrumental",
        "detail": "[Instrumental] innovative horn arrangement, experimental funky drum pattern, creative bass groove, 97 BPM, neo funk experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 79,
    "name": "Bangladesh",
    "alias": "",
    "city": "New York, NY",
    "bpm": "90–140",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "funk"
    ],
    "region": "East Coast",
    "desc": "Lil WayneのBet That's What You Think・Jay-Z「D.O.A.」・B.o.B「Nothin' on You」など多彩なヒットを手がけた多才なプロデューサー。ノイジーで攻撃的なシンセと独特のリズム感覚で2000年代後半の南部ラップを彩った。",
    "sounds": [
      "アグレッシブシンセ",
      "ノイジービート",
      "独特のリズム",
      "ハードドラム",
      "エネルギッシュベース",
      "ソウスタイル"
    ],
    "artists": [
      "Lil Wayne",
      "Jay-Z",
      "B.o.B",
      "T.I.",
      "Beyoncé"
    ],
    "prompts": [
      {
        "type": "クラシック（バングラデシュスタイル）",
        "style": "Bangladesh production style, aggressive noisy synthesizer, hard, no vocals, instrumental",
        "detail": "[Instrumental] aggressive noisy synthesizer riff, hard-hitting drum pattern, deep bass, energetic feel, 96 BPM, aggressive Bangladesh-style hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（エネルジェティックサウス）",
        "style": "energetic Southern hip hop, modern aggressive, hard-hitting, no vocals, instrumental",
        "detail": "[Instrumental] energetic Southern synthesizer, powerful drum pattern, hard bass hits, 140 BPM, energetic aggressive modern Southern trap loop [No Vocals]"
      },
      {
        "type": "実験的（ノイジーリズム）",
        "style": "noisy rhythmic hip hop, experimental aggressive, chaotic energy, no vocals, instrumental",
        "detail": "[Instrumental] chaotic noisy synthesizer, experimental irregular drum pattern, aggressive bass, 92 BPM, experimental noisy chaotic hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 80,
    "name": "Nottz Raw",
    "alias": "",
    "city": "Virginia / New York",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "East Coast",
    "desc": "バージニア出身でNYを拠点とするソウルフルなビートメイカー。Raekwon・Bun B・Pusha Tらとのコラボで知られ、深みのあるジャジーなサンプリングと温かい感情表現を兼ね備えた職人気質のプロデューサー。",
    "sounds": [
      "ジャジーソウルサンプル",
      "温かいドラム",
      "ディープベース",
      "オーガニックグルーヴ",
      "ヴィンテージテクスチャー",
      "エモーショナルコード"
    ],
    "artists": [
      "Raekwon",
      "Bun B",
      "Pusha T",
      "Royce da 5'9",
      "Ludacris"
    ],
    "prompts": [
      {
        "type": "クラシック（ソウルフルジャジービート）",
        "style": "soulful jazzy hip hop beat, Nottz Raw style, warm emotional, no vocals, instrumental",
        "detail": "[Instrumental] deep jazzy soul sample, warm punchy drum groove, smooth bass, emotional chord progression, 88 BPM, soulful jazzy emotional underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ウォームグルーヴ）",
        "style": "warm groove hip hop, modern soul, emotional underground, no vocals, instrumental",
        "detail": "[Instrumental] modern warm soul sample, crisp drum pattern, emotional bass, 90 BPM, modern warm groove emotional underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ソウルデプス）",
        "style": "soul depth hip hop, experimental emotional, rich sampling, no vocals, instrumental",
        "detail": "[Instrumental] rich experimental soul sample exploration, deep drum groove, emotionally layered bass, 85 BPM, deep soul emotional experimental underground hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 81,
    "name": "Apollo Brown",
    "alias": "",
    "city": "Detroit, MI",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "Midwest",
    "desc": "デトロイトのビートメイカー。Ras Kass・Ghostface Killah・Guilty Simpsonらの名盤を手がけ、ジャジーでダークなサンプリングと職人的なドラムプログラミングでアンダーグラウンドシーンで絶大な信頼を得る。",
    "sounds": [
      "ダークジャズサンプル",
      "ハードドラム",
      "ディープベース",
      "グリミーテクスチャー",
      "デトロイトバイブ",
      "職人的ビート"
    ],
    "artists": [
      "Ras Kass",
      "Ghostface Killah",
      "Guilty Simpson",
      "Onym",
      "Skyzoo"
    ],
    "prompts": [
      {
        "type": "クラシック（デトロイトダークジャズ）",
        "style": "Detroit dark jazzy boom bap, gritty underground, Apollo Brown, no vocals, instrumental",
        "detail": "[Instrumental] dark jazz sample loop, hard punchy Detroit drum pattern, gritty bass, underground atmosphere, 87 BPM, dark jazz Detroit boom bap underground loop [No Vocals]"
      },
      {
        "type": "モダン（グリミーブームバップ）",
        "style": "grimy boom bap, modern dark jazz, underground artisan, no vocals, instrumental",
        "detail": "[Instrumental] grimy jazz sample chops, precise drum programming, dark bass, 89 BPM, modern grimy dark jazz boom bap underground loop [No Vocals]"
      },
      {
        "type": "実験的（デトロイトアブストラクト）",
        "style": "Detroit abstract dark jazz, experimental underground, deep, no vocals, instrumental",
        "detail": "[Instrumental] abstract dark jazz sample manipulation, experimental drum feel, deep bass, 85 BPM, abstract experimental Detroit dark jazz underground loop [No Vocals]"
      }
    ]
  },
  {
    "id": 82,
    "name": "Blockhead",
    "alias": "Tony Simon",
    "city": "New York, NY",
    "bpm": "82–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "underground",
      "lo-fi"
    ],
    "region": "East Coast",
    "desc": "Aesop RockやSlug (Atmosphere)との長期コラボで知られるNYCのビートメイカー。多数の短いサンプルを緻密にレイヤリングしたモザイク的な制作手法と、映画的な雰囲気を持つインディーヒップホップの名匠。",
    "sounds": [
      "レイヤードサンプル",
      "モザイク的テクスチャー",
      "オーガニックドラム",
      "インディービート",
      "シネマティック雰囲気",
      "ウォームグルーヴ"
    ],
    "artists": [
      "Aesop Rock",
      "Slug (Atmosphere)",
      "Illogic",
      "Cage"
    ],
    "prompts": [
      {
        "type": "クラシック（インディーモザイクビート）",
        "style": "indie hip hop mosaic beat, Blockhead style, layered complex, no vocals, instrumental",
        "detail": "[Instrumental] layered multi-sample mosaic texture, organic drum groove, indie atmospheric feel, warm bass, 86 BPM, indie mosaic-layered underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（オーガニックインディー）",
        "style": "organic indie hip hop, complex layering, warm underground, no vocals, instrumental",
        "detail": "[Instrumental] complex organic sample layers, indie drum pattern, warm bass, atmospheric texture, 88 BPM, organic complex indie underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（テクスチャーコラージュ）",
        "style": "texture collage hip hop, experimental indie, mosaic layers, no vocals, instrumental",
        "detail": "[Instrumental] experimental texture collage, creative drum pattern, layered atmospheric elements, 84 BPM, experimental texture collage indie hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 83,
    "name": "Jake One",
    "alias": "",
    "city": "Seattle, WA",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "West Coast",
    "desc": "シアトル出身のビートメイカー。Freeway・Drake・Wale・MF DOOMとのコラボで知られ、ソウルフルで緻密なサンプリング技術と幅広いアーティストへの適応力を持つ、アンダーレーテッドながら業界人に評価が高い職人。",
    "sounds": [
      "ソウルサンプル",
      "クリーンドラム",
      "ウォームベース",
      "ジャジーコード",
      "シアトルバイブ",
      "精密なビートワーク"
    ],
    "artists": [
      "Freeway",
      "Drake",
      "Wale",
      "MF DOOM",
      "Brother Ali",
      "Bun B"
    ],
    "prompts": [
      {
        "type": "クラシック（シアトルソウルビート）",
        "style": "Seattle soulful hip hop beat, precise craftsmanship, warm, no vocals, instrumental",
        "detail": "[Instrumental] precise soul sample chop, clean punchy drum pattern, warm bass groove, jazzy chord progression, 88 BPM, Seattle soulful precise hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クリーングルーヴ）",
        "style": "clean groove hip hop, modern soulful Seattle, polished, no vocals, instrumental",
        "detail": "[Instrumental] polished soul sample, crisp modern drum pattern, smooth bass, 90 BPM, clean groove modern soulful Seattle hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジープレシジョン）",
        "style": "jazzy precision hip hop, experimental soul, Seattle underground, no vocals, instrumental",
        "detail": "[Instrumental] experimental precision soul sample processing, complex jazz-influenced drum, deep bass, 86 BPM, jazzy precision experimental Seattle underground hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 84,
    "name": "!llmind",
    "alias": "Ramon Ibanga Jr.",
    "city": "New Jersey",
    "bpm": "85–140",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "alternative",
      "trap"
    ],
    "region": "East Coast",
    "desc": "NJを拠点とする多才なプロデューサー。J. Cole・Drake・Big Seanなどメジャーアーティストからアンダーグラウンドまで幅広く対応し、感情的でメロディックなビートと高いプロダクションクオリティで評価される。",
    "sounds": [
      "エモーショナルシンセ",
      "メロディックビート",
      "クリーンドラム",
      "808ベース",
      "多才なサウンド",
      "NJスタイル"
    ],
    "artists": [
      "J. Cole",
      "Drake",
      "Big Sean",
      "Wale",
      "Kid Cudi"
    ],
    "prompts": [
      {
        "type": "クラシック（エモーショナルNJビート）",
        "style": "emotional NJ hip hop beat, melodic, !llmind style versatile, no vocals, instrumental",
        "detail": "[Instrumental] emotional melodic synthesizer, clean drum pattern, deep bass, expressive chord progression, 90 BPM, emotional versatile New Jersey hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（メロディックモダン）",
        "style": "melodic modern hip hop, clean production, emotional versatile, no vocals, instrumental",
        "detail": "[Instrumental] modern melodic synthesizer hook, polished drum pattern, emotional bass, 92 BPM, melodic modern versatile hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（クリエイティブフュージョン）",
        "style": "creative fusion hip hop, experimental melodic, versatile innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative melodic production, experimental drum programming, creative bass, 88 BPM, creative fusion experimental versatile hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 85,
    "name": "Evidence",
    "alias": "Mike Pereira",
    "city": "Los Angeles, CA",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "west coast"
    ],
    "region": "West Coast",
    "desc": "Dilated Peoplesのメンバーでありラッパーとプロデューサーを兼任するLAのアーティスト。The AlchemistやRoc Marcianoとの親交が深く、ダークでグリミーなサンプリングと精密なドラムワークを武器にするアンダーグラウンドの実力者。",
    "sounds": [
      "グリミーサンプル",
      "精密ドラム",
      "ダークベース",
      "LAアンダーグラウンド",
      "ラフテクスチャー",
      "ウェストコーストアンダー"
    ],
    "artists": [
      "Dilated Peoples",
      "The Alchemist",
      "Roc Marciano",
      "Rakaa Iriscience",
      "DJ Babu"
    ],
    "prompts": [
      {
        "type": "クラシック（LAアンダーグラウンド）",
        "style": "LA underground hip hop, grimy dark boom bap, Evidence style, no vocals, instrumental",
        "detail": "[Instrumental] grimy dark LA sample loop, precise boom bap drum, deep bass, underground West Coast atmosphere, 88 BPM, dark grimy LA underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ダークウェスト）",
        "style": "dark West Coast hip hop, modern underground, grimy polished, no vocals, instrumental",
        "detail": "[Instrumental] dark West Coast sample chops, modern punchy drums, gritty bass, 90 BPM, modern dark grimy West Coast underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（アンダーグラウンドアブストラクト）",
        "style": "underground abstract West Coast, experimental dark, indie, no vocals, instrumental",
        "detail": "[Instrumental] abstract sample manipulation, experimental LA drum feel, dark bass texture, 85 BPM, abstract experimental dark LA underground hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 86,
    "name": "Dot Da Genius",
    "alias": "",
    "city": "Brooklyn, NY",
    "bpm": "85–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "trap",
      "experimental"
    ],
    "region": "East Coast",
    "desc": "ブルックリン出身でKid Cudi・Cordae・JIDらと緊密に仕事をするオルタナティブプロデューサー。メインストリームとアンダーグラウンドを行き来し、独自の感性でアーバンなサウンドを生み出す次世代のキープロデューサー。",
    "sounds": [
      "オルタナシンセ",
      "モダンビート",
      "エモーショナルテクスチャー",
      "ブルックリンバイブ",
      "クリエイティブサウンド",
      "808ベース"
    ],
    "artists": [
      "Kid Cudi",
      "Cordae",
      "JID",
      "Joey Badass",
      "Smino"
    ],
    "prompts": [
      {
        "type": "クラシック（ブルックリンオルタナ）",
        "style": "Brooklyn alternative hip hop, modern experimental, creative, no vocals, instrumental",
        "detail": "[Instrumental] creative alternative synthesizer, modern drum pattern, experimental bass, Brooklyn underground feel, 92 BPM, Brooklyn alternative creative hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（エモオルタナトラップ）",
        "style": "emo alternative trap, emotional innovative, Brooklyn modern, no vocals, instrumental",
        "detail": "[Instrumental] emotional alternative synthesizer, modern trap drums, 808 bass, innovative texture, 138 BPM, emo alternative modern Brooklyn trap loop [No Vocals]"
      },
      {
        "type": "実験的（クロスオーバーイノベーション）",
        "style": "crossover innovation hip hop, experimental creative, Brooklyn, no vocals, instrumental",
        "detail": "[Instrumental] innovative crossover production, experimental drum programming, creative bass design, 90 BPM, experimental innovative crossover Brooklyn hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 87,
    "name": "Larry Fisherman",
    "alias": "Mac Miller",
    "city": "Pittsburgh, PA",
    "bpm": "78–95",
    "eras": [
      "2010s"
    ],
    "styles": [
      "lo-fi",
      "alternative",
      "jazzy"
    ],
    "region": "East Coast",
    "desc": "Mac Millerが本名に由来する別名義でビートメイキングも行い、Vince StaplesやChance the Rapperらに楽曲提供。穏やかで実験的なローファイビートと内省的な音楽性が特徴で、2018年の急逝まで多才な活動を続けた。",
    "sounds": [
      "ローファイドラム",
      "ジャジーテクスチャー",
      "メロウシンセ",
      "テープサチュレーション",
      "内省的ループ",
      "ピッツバーグバイブ"
    ],
    "artists": [
      "Vince Staples",
      "Chance the Rapper",
      "Mac Miller本人",
      "Ab-Soul"
    ],
    "prompts": [
      {
        "type": "クラシック（ピッツバーグローファイ）",
        "style": "Pittsburgh lo-fi hip hop, introspective mellow, Mac Miller producer, no vocals, instrumental",
        "detail": "[Instrumental] mellow lo-fi drum groove, introspective jazz sample, tape saturation, warm bass, 82 BPM, Pittsburgh lo-fi introspective hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ドリーミーローファイ）",
        "style": "dreamy lo-fi hip hop, mellow experimental, introspective, no vocals, instrumental",
        "detail": "[Instrumental] dreamy sample loop, relaxed drum pattern, warm atmospheric bass, tape texture, 80 BPM, dreamy experimental lo-fi introspective hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーアブストラクト）",
        "style": "jazzy abstract lo-fi, experimental mellow Pittsburgh, creative, no vocals, instrumental",
        "detail": "[Instrumental] abstract jazz lo-fi sample, experimental drum pattern, warm creative bass, 78 BPM, abstract jazzy experimental lo-fi hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 88,
    "name": "DJ Mustard",
    "alias": "Mustard / Dijon McFarlane",
    "city": "Los Angeles, CA",
    "bpm": "95–115",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "west coast",
      "trap",
      "funk"
    ],
    "region": "West Coast",
    "desc": "「Mustard on that beat, ho!」のタグで知られるLAのヒットメイカー。YGとの仕事でLAラチェットサウンドを確立し、Kendrick Lamarの「Not Like Us」プロデュースで2024年に更なる頂点へ。グラミー受賞プロデューサー。",
    "sounds": [
      "ラチェットシンセ",
      "リズミカルなドラム",
      "LAグルーヴ",
      "キャッチーフック",
      "クリーン808",
      "パーティービート"
    ],
    "artists": [
      "YG",
      "Ty Dolla Sign",
      "Migos",
      "Kendrick Lamar",
      "Post Malone",
      "DJ Mustard"
    ],
    "prompts": [
      {
        "type": "クラシック（LAラチェット）",
        "style": "LA ratchet hip hop, DJ Mustard style, club-ready, catchy, no vocals, instrumental",
        "detail": "[Instrumental] LA ratchet synthesizer riff, driving drum pattern, catchy bass hook, party-ready feel, 100 BPM, LA ratchet club hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（グラミーウィナー）",
        "style": "Grammy-winning modern hip hop, polished LA, mainstream hit, no vocals, instrumental",
        "detail": "[Instrumental] polished hit-ready synthesizer, crisp modern drum pattern, clean 808 bass, 102 BPM, Grammy-quality modern LA hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ウェストコーストイノベーション）",
        "style": "West Coast innovation hip hop, creative ratchet, experimental LA, no vocals, instrumental",
        "detail": "[Instrumental] innovative LA synthesizer design, creative ratchet drum pattern, experimental bass, 98 BPM, innovative experimental West Coast hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 89,
    "name": "London On Da Track",
    "alias": "",
    "city": "Atlanta, GA",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "アトランタのメロディックトラッププロデューサー。Young Thug・Gunna・21 Savageの楽曲を多数手がけ、感情的なシンセメロディーと滑らかな808を武器にアトランタトラップのメロディアス化に大きく貢献。",
    "sounds": [
      "メロディックシンセ",
      "スムース808",
      "エモーショナルコード",
      "トラップドラム",
      "ウォームメロディー",
      "アトランタメロトラップ"
    ],
    "artists": [
      "Young Thug",
      "Gunna",
      "21 Savage",
      "6lack",
      "Rich Homie Quan"
    ],
    "prompts": [
      {
        "type": "クラシック（メロトラップATL）",
        "style": "melodic trap Atlanta, emotional synthesizer, London On Da Track, no vocals, instrumental",
        "detail": "[Instrumental] emotional melodic synthesizer loop, smooth 808 bass, Atlanta trap drum pattern, warm chord progression, 140 BPM, melodic emotional Atlanta trap loop [No Vocals]"
      },
      {
        "type": "モダン（スムースエモトラップ）",
        "style": "smooth emo trap, modern melodic Atlanta, vulnerable emotional, no vocals, instrumental",
        "detail": "[Instrumental] vulnerable emotional synthesizer, sliding 808, smooth trap drums, 142 BPM, smooth emo modern Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（メロウトラップフュージョン）",
        "style": "mellow trap fusion, experimental melodic, Atlanta innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative mellow synthesizer layers, experimental trap drums, smooth 808, 138 BPM, mellow fusion experimental Atlanta trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 90,
    "name": "Wheezy",
    "alias": "",
    "city": "Atlanta, GA",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "South",
    "desc": "アトランタのトラッププロデューサー。Young Thug・Gunna・Futureの主要曲を手がけ、「Wheezy outta here」のタグで知られる。メロディックで浮遊感のあるトラップサウンドで現代アトランタシーンを定義するキープロデューサー。",
    "sounds": [
      "フローティングシンセ",
      "808スライド",
      "メロウトラップビート",
      "エーテリアルパッド",
      "トリプレットハイハット",
      "アトランタドリーム"
    ],
    "artists": [
      "Young Thug",
      "Gunna",
      "Future",
      "Lil Baby",
      "Travis Scott"
    ],
    "prompts": [
      {
        "type": "クラシック（フローティングトラップ）",
        "style": "floating trap Atlanta, Wheezy style, dreamy melodic, no vocals, instrumental",
        "detail": "[Instrumental] floating melodic synthesizer, sliding 808 bass, Atlanta trap drum pattern, dreamy atmospheric pads, 140 BPM, floating dreamy Atlanta trap loop [No Vocals]"
      },
      {
        "type": "モダン（ドリームアトランタトラップ）",
        "style": "dream Atlanta trap, ethereal modern, melodic float, no vocals, instrumental",
        "detail": "[Instrumental] ethereal synthesizer melody, smooth 808 bass, modern trap drums, floating atmosphere, 142 BPM, modern dream Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（エーテリアルウェイブ）",
        "style": "ethereal wave trap, experimental dreamy, hazy Atlanta, no vocals, instrumental",
        "detail": "[Instrumental] hazy ethereal synthesizer waves, experimental 808 patterns, soft trap drums, 138 BPM, ethereal wave experimental dreamy Atlanta trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 91,
    "name": "Turbo",
    "alias": "Jordan Ladd",
    "city": "Atlanta, GA",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "Young Thugの主力プロデューサーとして知られるアトランタのビートメイカー。メロディックなシンセとユニークなドラムパターンでYoung Thug・Lil Babyの楽曲を支え、アトランタメロトラップの進化を牽引してきた。",
    "sounds": [
      "ユニークシンセ",
      "メロディーフック",
      "独自ドラムパターン",
      "808スライド",
      "エモーショナルコード",
      "Young Thugサウンド"
    ],
    "artists": [
      "Young Thug",
      "Lil Baby",
      "Gunna",
      "Lil Durk",
      "Future"
    ],
    "prompts": [
      {
        "type": "クラシック（Young Thugメロトラップ）",
        "style": "Young Thug style melodic trap, unique synthesizer, emotional, no vocals, instrumental",
        "detail": "[Instrumental] unique melodic synthesizer pattern, emotional chord progression, 808 bass, trap drum groove, 138 BPM, Young Thug style melodic emotional trap loop [No Vocals]"
      },
      {
        "type": "モダン（アトランタメロ進化）",
        "style": "evolved Atlanta melodic trap, modern unique sound, creative, no vocals, instrumental",
        "detail": "[Instrumental] creatively unique synthesizer melody, modern trap drums, sliding 808, 140 BPM, evolved modern unique Atlanta melodic trap loop [No Vocals]"
      },
      {
        "type": "実験的（ユニークメロウェイブ）",
        "style": "unique mellow wave trap, experimental Atlanta, innovative melody, no vocals, instrumental",
        "detail": "[Instrumental] innovative unique melodic synthesis, experimental drum pattern, atmospheric 808, 136 BPM, experimental innovative unique Atlanta trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 92,
    "name": "TM88",
    "alias": "",
    "city": "Atlanta, GA",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "808 Mafiaメンバーのアトランタ出身プロデューサー。Juice WRLDの代表曲「Lucid Dreams」を共同制作し、FutureやYoung Thugとも多数コラボ。メロディックなシンセとムーディーなパッドで現代エモトラップの基礎を築いた。",
    "sounds": [
      "メロディックシンセ",
      "ムーディーパッド",
      "808ベース",
      "808 Mafiaサウンド",
      "トラップドラム",
      "エモエーテリアル"
    ],
    "artists": [
      "Juice WRLD",
      "Future",
      "Young Thug",
      "21 Savage",
      "Lil Uzi Vert"
    ],
    "prompts": [
      {
        "type": "クラシック（エモトラップ）",
        "style": "emo trap, TM88 style, melodic moody, Juice WRLD era, no vocals, instrumental",
        "detail": "[Instrumental] melodic moody synthesizer, emotional chord pads, 808 bass, trap drum pattern, 140 BPM, emo melodic moody trap loop [No Vocals]"
      },
      {
        "type": "モダン（ムーディーメロトラップ）",
        "style": "moody melodic trap, modern emo, atmospheric 808, no vocals, instrumental",
        "detail": "[Instrumental] atmospheric moody synthesizer, emotional bass pads, sliding 808, modern trap drums, 142 BPM, moody melodic atmospheric trap loop [No Vocals]"
      },
      {
        "type": "実験的（エーテリアルエモ）",
        "style": "ethereal emo trap, experimental moody, hazy emotional, no vocals, instrumental",
        "detail": "[Instrumental] hazy ethereal emotional synthesizer, experimental 808, atmospheric trap drums, 138 BPM, ethereal emo experimental trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 93,
    "name": "Ronny J",
    "alias": "",
    "city": "Miami / Broward County, FL",
    "bpm": "130–155",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "experimental"
    ],
    "region": "South",
    "desc": "フロリダ出身の実験的トラッププロデューサー。「Ronny J on the beat」のタグで、Lil Pump・XXXTENTACIONらのSoundCloud世代と共鳴する激しく実験的なトラップサウンドを生み出す個性的な存在。",
    "sounds": [
      "アグレッシブシンセ",
      "実験的808",
      "カオスなドラム",
      "ディストーション要素",
      "ユニークテクスチャー",
      "SoundCloud時代サウンド"
    ],
    "artists": [
      "Lil Pump",
      "XXXTENTACION",
      "Wifisfuneral",
      "Ski Mask the Slump God",
      "Smokepurpp"
    ],
    "prompts": [
      {
        "type": "クラシック（SoundCloudトラップ）",
        "style": "SoundCloud era trap, aggressive experimental, Ronny J style, no vocals, instrumental",
        "detail": "[Instrumental] aggressive experimental synthesizer, chaotic trap drum pattern, heavy distorted bass, 145 BPM, SoundCloud era aggressive experimental trap loop [No Vocals]"
      },
      {
        "type": "モダン（エクストリームトラップ）",
        "style": "extreme trap, maximally aggressive, experimental chaotic, no vocals, instrumental",
        "detail": "[Instrumental] extreme aggressive synthesizer, chaotic drum pattern, maximum bass distortion, 150 BPM, extreme aggressive maximalist experimental trap loop [No Vocals]"
      },
      {
        "type": "実験的（ノイズトラップ）",
        "style": "noise trap, maximalist chaotic, experimental aggressive SoundCloud, no vocals, instrumental",
        "detail": "[Instrumental] noise-influenced trap production, chaotic synthesizer, distorted 808, ultra-aggressive drums, 148 BPM, noise experimental aggressive trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 94,
    "name": "Cardo Got Wings",
    "alias": "Cardo",
    "city": "Dallas, TX / Los Angeles",
    "bpm": "85–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "west coast",
      "alternative",
      "trap"
    ],
    "region": "South",
    "desc": "テキサス・LA拠点の多才なプロデューサー。Kendrick Lamar・Tyler The Creator・Vince StaplesのコンシャスウェストコーストHipHopから、ストリートラッパーまで幅広く対応する高い適応力が持ち味。",
    "sounds": [
      "ウェストコーストシンセ",
      "オーガニックグルーヴ",
      "コンシャスビート",
      "ヴェルサタイルサウンド",
      "テキサスバイブ",
      "クリーンプロダクション"
    ],
    "artists": [
      "Kendrick Lamar",
      "Tyler The Creator",
      "Vince Staples",
      "ScHoolboy Q",
      "Isaiah Rashad"
    ],
    "prompts": [
      {
        "type": "クラシック（コンシャスウェスト）",
        "style": "conscious West Coast hip hop, Cardo style, versatile clean, no vocals, instrumental",
        "detail": "[Instrumental] clean West Coast conscious beat, organic groove drum pattern, smooth bass, 90 BPM, conscious versatile West Coast hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ヴァーサタイルモダン）",
        "style": "versatile modern hip hop, West Coast meets South, multi-style, no vocals, instrumental",
        "detail": "[Instrumental] versatile modern synthesizer, multi-style drum programming, adaptive bass, 95 BPM, versatile modern multi-style hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（クロスリージョン）",
        "style": "cross-region hip hop experiment, Texas meets LA, creative, no vocals, instrumental",
        "detail": "[Instrumental] Texas-LA crossover sonic exploration, experimental drum patterns, creative bass, 88 BPM, cross-region experimental creative hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 95,
    "name": "Supah Mario",
    "alias": "",
    "city": "Los Angeles, CA",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "west coast",
      "south"
    ],
    "region": "West Coast",
    "desc": "LAのトラッププロデューサー。Roddy Ricch・DaBaby・Pop SmokeのブリリアントなビートとWest Coast / South両対応のメロディックなスタイルで2020年前後のトラップシーンに大きな足跡を残した。",
    "sounds": [
      "メロディックシンセ",
      "808ベース",
      "クリスプドラム",
      "トラップパターン",
      "ポップクロスオーバー",
      "ウェストコーストメロ"
    ],
    "artists": [
      "Roddy Ricch",
      "DaBaby",
      "Pop Smoke",
      "Lil Baby",
      "Polo G"
    ],
    "prompts": [
      {
        "type": "クラシック（メインストリームトラップ）",
        "style": "mainstream trap, melodic polished, Supah Mario style LA, no vocals, instrumental",
        "detail": "[Instrumental] polished melodic synthesizer, crisp trap drums, punchy 808 bass, mainstream trap feel, 140 BPM, mainstream polished LA trap loop [No Vocals]"
      },
      {
        "type": "モダン（チャートトラップ）",
        "style": "chart-ready trap, catchy melodic, modern LA hit production, no vocals, instrumental",
        "detail": "[Instrumental] catchy melodic hook synthesizer, precise trap drums, clean 808 bass, 142 BPM, chart-ready modern LA trap hit loop [No Vocals]"
      },
      {
        "type": "実験的（クロスオーバートラップ）",
        "style": "crossover trap hip hop, creative West Coast meets South, no vocals, instrumental",
        "detail": "[Instrumental] creative West-South crossover synthesizer, innovative trap drums, experimental 808, 138 BPM, creative crossover experimental trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 96,
    "name": "ATL Jacob",
    "alias": "Jacob Canady",
    "city": "Atlanta, GA",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "Futureのレーベル「Freebandz」内製プロデューサーから台頭したアトランタのビートメイカー。2022年にFuture・Lil Baby・Gunnaらの主要曲で一気にブレイクし、ダークでメロウなトラップビートで次世代プロデューサーの顔となった。",
    "sounds": [
      "ダークメロディー",
      "メロウシンセ",
      "808ベース",
      "トラップドラム",
      "フリーバンズサウンド",
      "アトランタダーク"
    ],
    "artists": [
      "Future",
      "Lil Baby",
      "Gunna",
      "Young Thug",
      "Drake"
    ],
    "prompts": [
      {
        "type": "クラシック（フリーバンズダーク）",
        "style": "Freebandz dark trap, ATL Jacob style, mellow and dark, no vocals, instrumental",
        "detail": "[Instrumental] dark mellow synthesizer melody, sliding 808 bass, Atlanta trap drum pattern, dark atmospheric pads, 140 BPM, dark mellow Freebandz trap loop [No Vocals]"
      },
      {
        "type": "モダン（ダークアトランタモダン）",
        "style": "dark modern Atlanta trap, melodic moody, next-gen ATL, no vocals, instrumental",
        "detail": "[Instrumental] moody dark melodic synthesizer, powerful 808 bass, crisp trap drums, 142 BPM, dark moody modern Atlanta trap loop [No Vocals]"
      },
      {
        "type": "実験的（ダークウェイブATL）",
        "style": "dark wave ATL trap, experimental moody, ominous melodic, no vocals, instrumental",
        "detail": "[Instrumental] ominous dark wave synthesizer, experimental 808 patterns, atmospheric trap drums, 138 BPM, dark wave experimental ominous Atlanta trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 97,
    "name": "Nick Mira",
    "alias": "",
    "city": "New Jersey",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "experimental"
    ],
    "region": "East Coast",
    "desc": "Internet Moneyのメンバーとして知られるNJのプロデューサー。Juice WRLD・Trippie Redd・Lil Teccaなどのエモラップ/SoundCloud世代のビートを量産し、メロディックなシンセパッドを多用したエモトラップサウンドで知られる。",
    "sounds": [
      "エモシンセパッド",
      "メロウメロディー",
      "808ベース",
      "ラピッドハイハット",
      "トラップドラム",
      "SoundCloudエモ"
    ],
    "artists": [
      "Juice WRLD",
      "Trippie Redd",
      "Lil Tecca",
      "Internet Money全般",
      "Nav"
    ],
    "prompts": [
      {
        "type": "クラシック（エモラップトラップ）",
        "style": "emo rap trap, Nick Mira style, melodic emotional pad, no vocals, instrumental",
        "detail": "[Instrumental] emotional synthesizer pad melody, soft 808 bass, emo trap drum pattern, melodic chord progression, 140 BPM, emo rap melodic trap loop [No Vocals]"
      },
      {
        "type": "モダン（インターネットマネースタイル）",
        "style": "Internet Money style trap, melodic modern emo, smooth, no vocals, instrumental",
        "detail": "[Instrumental] smooth melodic Internet Money synthesizer, modern trap drums, sliding 808, 142 BPM, smooth modern Internet Money emo trap loop [No Vocals]"
      },
      {
        "type": "実験的（メロウエクスペリメンタル）",
        "style": "mellow experimental emo trap, dreamy innovative, SoundCloud, no vocals, instrumental",
        "detail": "[Instrumental] dreamy innovative synthesizer pads, experimental emo trap drums, mellow 808, 138 BPM, dreamy experimental mellow emo trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 98,
    "name": "Taz Taylor",
    "alias": "",
    "city": "Internet Money (Florida base)",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "experimental"
    ],
    "region": "South",
    "desc": "Internet Moneyの創設者兼プロデューサー。Nav・Gunna・Juice WRLDらとのコラボでSoundCloudジェネレーションのビジネスモデルを確立し、複数のプロデューサーによるコレクティブ制作スタイルを音楽業界に定着させた。",
    "sounds": [
      "コレクティブトラップビート",
      "メロディックパッド",
      "808ベース",
      "ラピッドハイハット",
      "インターネットマネーサウンド",
      "ヒットメロディー"
    ],
    "artists": [
      "Nav",
      "Gunna",
      "Juice WRLD",
      "Internet Money全般",
      "Future"
    ],
    "prompts": [
      {
        "type": "クラシック（インターネットマネートラップ）",
        "style": "Internet Money trap, collective production, melodic hit-making, no vocals, instrumental",
        "detail": "[Instrumental] melodic hit synthesizer, collective trap drum pattern, 808 bass, catchy hook progression, 140 BPM, Internet Money collective melodic trap loop [No Vocals]"
      },
      {
        "type": "モダン（ヒットコレクティブ）",
        "style": "hit collective trap, modern mainstream Internet Money, polished, no vocals, instrumental",
        "detail": "[Instrumental] polished mainstream melodic synthesizer, crisp trap drums, hit-ready 808, 142 BPM, modern hit collective Internet Money trap loop [No Vocals]"
      },
      {
        "type": "実験的（コレクティブフュージョン）",
        "style": "collective fusion trap, experimental multiple-producer style, no vocals, instrumental",
        "detail": "[Instrumental] innovative multi-producer fusion concept, experimental melodic trap, creative 808, 138 BPM, experimental collective fusion modern trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 99,
    "name": "Helluva",
    "alias": "DJ Plugg / Helluva Boss",
    "city": "Detroit / Michigan",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "Midwest",
    "desc": "ミシガン州出身のトラッププロデューサー。42 Dugg・EST Gee・Moneybagg Yoのビートを量産し、デトロイト発のリリカルなストリートラップとアトランタトラップを橋渡しするサウンドで急台頭した実力者。",
    "sounds": [
      "ミシガントラップ",
      "ダークシンセ",
      "スパースドラム",
      "808ベース",
      "ストリートバイブ",
      "デトロイトメロ"
    ],
    "artists": [
      "42 Dugg",
      "EST Gee",
      "Moneybagg Yo",
      "Lil Durk",
      "Young Dolph"
    ],
    "prompts": [
      {
        "type": "クラシック（ミシガンストリートトラップ）",
        "style": "Michigan street trap, dark sparse, Helluva style, no vocals, instrumental",
        "detail": "[Instrumental] dark sparse Michigan trap beat, ominous synthesizer, heavy 808 bass, street atmosphere, 140 BPM, Michigan dark street trap loop [No Vocals]"
      },
      {
        "type": "モダン（デトロイトATLフュージョン）",
        "style": "Detroit-Atlanta trap fusion, modern dark, street melodic, no vocals, instrumental",
        "detail": "[Instrumental] Detroit-Atlanta crossover synthesizer, dark trap drums, deep 808, street melodic feel, 142 BPM, Detroit-Atlanta dark fusion trap loop [No Vocals]"
      },
      {
        "type": "実験的（ミシガンダークウェイブ）",
        "style": "Michigan dark wave trap, experimental gritty, ominous, no vocals, instrumental",
        "detail": "[Instrumental] ominous Michigan dark wave synthesizer, experimental sparse drums, heavy 808, 138 BPM, dark wave experimental Michigan trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 100,
    "name": "Bandplay",
    "alias": "",
    "city": "Charlotte, NC",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "ノースカロライナ州シャーロット出身のトラッププロデューサー。Cardi B・Moneybagg Yo・Rod Waveらの楽曲を手がけ、感情的なシンセメロディーとソフトなアプローチで2020年代のトラップポップクロスオーバーを牽引。",
    "sounds": [
      "エモーショナルシンセ",
      "ソフトトラップビート",
      "808スライド",
      "メロウコード",
      "ポップクロスオーバー",
      "NCバイブ"
    ],
    "artists": [
      "Cardi B",
      "Moneybagg Yo",
      "Rod Wave",
      "Lil Durk",
      "Polo G"
    ],
    "prompts": [
      {
        "type": "クラシック（NCメロトラップ）",
        "style": "NC melodic trap, emotional pop crossover, soft Bandplay style, no vocals, instrumental",
        "detail": "[Instrumental] emotional melodic synthesizer, soft 808 bass, trap drum pattern, pop crossover chord progression, 138 BPM, NC melodic emotional pop trap loop [No Vocals]"
      },
      {
        "type": "モダン（トラップポップ）",
        "style": "trap pop crossover, modern emotional, mainstream melodic, no vocals, instrumental",
        "detail": "[Instrumental] mainstream melodic hook, modern trap drums, smooth 808 bass, 140 BPM, modern mainstream trap pop melodic loop [No Vocals]"
      },
      {
        "type": "実験的（メロウポップトラップフュージョン）",
        "style": "mellow pop trap fusion, experimental emotional, innovative NC, no vocals, instrumental",
        "detail": "[Instrumental] innovative NC mellow synthesizer, experimental trap drums, smooth 808, 136 BPM, mellow pop trap experimental NC fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 101,
    "name": "DJ Dahi",
    "alias": "Dacoury Natche",
    "city": "Inglewood, CA",
    "bpm": "82–105",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "west coast",
      "trap"
    ],
    "region": "West Coast",
    "desc": "Inglewood出身のLA拠点プロデューサー。Kendrick Lamarの「Money Trees」・Drakeの「Worst Behavior」・Big Seanの「I Don't Fuck with You」など名作を手がけ、ジャジーなウェストコーストの感覚とソウルを持つ実力者。グラミー受賞。",
    "sounds": [
      "ウェストコーストジャズ",
      "メロディックコード",
      "オーガニックグルーヴ",
      "ソウルテクスチャー",
      "LAアンビエント",
      "クリーンドラム"
    ],
    "artists": [
      "Kendrick Lamar",
      "Drake",
      "Big Sean",
      "21 Savage",
      "SZA"
    ],
    "prompts": [
      {
        "type": "クラシック（LAコンシャスビート）",
        "style": "LA conscious hip hop beat, jazzy West Coast, melodic soulful, no vocals, instrumental",
        "detail": "[Instrumental] jazzy West Coast melodic sample, organic groove drum pattern, smooth bass, ambient LA pad, 88 BPM, conscious melodic West Coast hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（グラミーウィナースタイル）",
        "style": "Grammy-winning West Coast hip hop, melodic sophisticated, modern, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated melodic synthesizer, modern clean drum pattern, warm bass, ambient textures, 90 BPM, Grammy-quality sophisticated West Coast hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジーアンビエントLA）",
        "style": "jazzy ambient LA hip hop, experimental West Coast, atmospheric, no vocals, instrumental",
        "detail": "[Instrumental] experimental jazzy ambient textures, atmospheric West Coast feel, creative drum programming, 85 BPM, jazzy ambient experimental LA hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 102,
    "name": "RiotUSA",
    "alias": "Ephrem Lopez Jr.",
    "city": "New York, NY",
    "bpm": "130–150",
    "eras": [
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "experimental"
    ],
    "region": "East Coast",
    "desc": "2023〜2024年BMI R&B/Hip-Hop Awards「Top Producer」2年連続受賞のNYプロデューサー。Ice Spiceとの出会いから台頭し、「セクシーなドリルとポップラップ」の新ジャンルを確立。Billboard Hot 100に9曲、Top 10に4曲ランクイン。",
    "sounds": [
      "NYドリルビート",
      "セクシーシンセ",
      "ポップラップクロスオーバー",
      "808ベース",
      "クリスプドラム",
      "キャッチーメロ"
    ],
    "artists": [
      "Ice Spice",
      "Cardi B",
      "Offset",
      "Lil Tjay"
    ],
    "prompts": [
      {
        "type": "クラシック（NYポップドリル）",
        "style": "NY pop drill, RiotUSA style, sexy catchy, Ice Spice era, no vocals, instrumental",
        "detail": "[Instrumental] catchy NY drill synthesizer, sexy pop crossover drum pattern, punchy 808 bass, 140 BPM, NY pop drill sexy catchy loop [No Vocals]"
      },
      {
        "type": "モダン（BMIトッププロデューサー）",
        "style": "BMI top producer style, mainstream hit-making, modern NY, no vocals, instrumental",
        "detail": "[Instrumental] hit-ready synthesizer hook, crisp modern drum pattern, clean 808, pop crossover feel, 142 BPM, mainstream modern NY hip hop hit loop [No Vocals]"
      },
      {
        "type": "実験的（セクシードリルフュージョン）",
        "style": "sexy drill fusion, experimental pop drill NY, innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative sexy drill-pop fusion synthesizer, experimental drum pattern, creative 808, 138 BPM, experimental sexy drill pop fusion NY loop [No Vocals]"
      }
    ]
  },
  {
    "id": 103,
    "name": "Conductor Williams",
    "alias": "",
    "city": "New York, NY",
    "bpm": "82–96",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "East Coast",
    "desc": "「Conductor, we have a problem」のタグで知られるGriselda Records系のビートメイカー。Westside Gunn・Conway the Machine・Boldy James・Drake・JIDの名作を手がけ、ウォームなジャズライクなブームバッププロダクションで評価される。グラミーノミネート。",
    "sounds": [
      "ジャズライクサンプル",
      "ウォームテクスチャー",
      "グリセルダサウンド",
      "ハードドラム",
      "ディープベース",
      "シネマティックグルーヴ"
    ],
    "artists": [
      "Westside Gunn",
      "Conway the Machine",
      "Boldy James",
      "Drake",
      "JID",
      "J. Cole"
    ],
    "prompts": [
      {
        "type": "クラシック（グリセルダブームバップ）",
        "style": "Griselda boom bap, Conductor Williams style, warm jazz cinematic, no vocals, instrumental",
        "detail": "[Instrumental] warm jazz-like sample, hard punchy Griselda-style drum, deep bass, cinematic groove, 86 BPM, warm Griselda jazz boom bap underground loop [No Vocals]"
      },
      {
        "type": "モダン（ウォームシネマビート）",
        "style": "warm cinematic boom bap, modern underground, Grammy-quality, no vocals, instrumental",
        "detail": "[Instrumental] cinematic warm sample, modern crisp drum pattern, rich bass, atmospheric texture, 88 BPM, warm cinematic modern underground boom bap loop [No Vocals]"
      },
      {
        "type": "実験的（ジャズグリセルダ）",
        "style": "jazz Griselda experimental, abstract underground, dark warm, no vocals, instrumental",
        "detail": "[Instrumental] abstract jazzy sample exploration, experimental Griselda drum pattern, dark warm bass, 84 BPM, abstract jazzy dark underground experimental hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 104,
    "name": "Earl on the Beat",
    "alias": "",
    "city": "Atlanta, GA",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south",
      "alternative"
    ],
    "region": "South",
    "desc": "Drake & 21 Savage「Privileged Rappers」・Doja Cat「Paint the Town Red」などヒット量産のアトランタのトラッププロデューサー。2023〜2024年を代表するシーンの中心的ビートメイカーとして急浮上。",
    "sounds": [
      "ヒットトラップビート",
      "メロディックシンセ",
      "808ベース",
      "クリスプドラム",
      "ポップクロスオーバー",
      "アトランタモダン"
    ],
    "artists": [
      "Drake",
      "21 Savage",
      "Doja Cat",
      "Lil Baby",
      "Future"
    ],
    "prompts": [
      {
        "type": "クラシック（2020年代ヒットトラップ）",
        "style": "2020s hit trap, Earl on the Beat style, polished mainstream, no vocals, instrumental",
        "detail": "[Instrumental] polished hit synthesizer, crisp modern trap drums, 808 bass, mainstream chart-ready feel, 140 BPM, 2020s hit mainstream trap loop [No Vocals]"
      },
      {
        "type": "モダン（チャートトッパートラップ）",
        "style": "chart-topper trap, modern Atlanta, pop hip hop crossover, no vocals, instrumental",
        "detail": "[Instrumental] chart-ready melodic hook, crisp trap drum pattern, clean 808, pop hip hop crossover feel, 142 BPM, chart-topper modern trap pop loop [No Vocals]"
      },
      {
        "type": "実験的（ポップトラップフュージョン）",
        "style": "pop trap fusion, experimental mainstream crossover, innovative ATL, no vocals, instrumental",
        "detail": "[Instrumental] innovative pop-trap fusion synthesizer, experimental drum programming, creative 808, 138 BPM, experimental pop trap fusion mainstream loop [No Vocals]"
      }
    ]
  },
  {
    "id": 105,
    "name": "Wiley",
    "alias": "Richard Cowie Jr.",
    "city": "London, UK",
    "bpm": "138–142",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "alternative",
      "underground",
      "experimental"
    ],
    "region": "Other",
    "desc": "「グライムの名付け親」と称されるロンドン東部出身のアーティスト。2000年代初頭にEskibeatと呼ばれる独自のサウンドをホワイトレーベルで自主流通し、グライムというジャンルを実質的に創始した。Roll Deepを率いDizzee Rascal・Skeptaを輩出。",
    "sounds": [
      "Eskibeatシンセ",
      "冷たいサウンド",
      "重いベースライン",
      "変則ビート",
      "ホワイトレーベルサウンド",
      "グライムDIY"
    ],
    "artists": [
      "Dizzee Rascal",
      "Skepta",
      "Tinchy Stryder",
      "Roll Deep",
      "Stormzy"
    ],
    "prompts": [
      {
        "type": "クラシック（Eskibeatグライム）",
        "style": "Eskibeat grime, Wiley original, icy dark synthesizer, 140 BPM, no vocals, instrumental",
        "detail": "[Instrumental] icy cold synthesizer pattern, dark grime drum machine beat, heavy bass line, off-kilter rhythm, 140 BPM, original Eskibeat grime underground loop [No Vocals]"
      },
      {
        "type": "モダン（UKグライム）",
        "style": "modern UK grime, underground urban London, dark electronic, no vocals, instrumental",
        "detail": "[Instrumental] modern dark grime synthesizer, UK underground drum pattern, heavy bass, urban London atmosphere, 140 BPM, modern UK grime urban underground loop [No Vocals]"
      },
      {
        "type": "実験的（アブストラクトグライム）",
        "style": "abstract grime experiment, unconventional dark London, avant-garde, no vocals, instrumental",
        "detail": "[Instrumental] abstract experimental grime synthesizer, unconventional drum pattern, dark bass, 140 BPM, abstract experimental avant-garde grime loop [No Vocals]"
      }
    ]
  },
  {
    "id": 106,
    "name": "Skepta",
    "alias": "Joseph Adenuga Jr.",
    "city": "London, UK",
    "bpm": "138–145",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "trap",
      "underground"
    ],
    "region": "Other",
    "desc": "グライム第一世代のスターでプロデューサーとしても高い評価を受ける。A$AP Rockyとの「Praise The Lord」を手がけるなど英米を繋ぐ存在。Boy Better Knowの中心人物でグライムをグローバルシーンへ押し上げた功績は大きい。",
    "sounds": [
      "ピアノベースグライム",
      "ダークシネマシンセ",
      "UKガレージ要素",
      "グライムドラム",
      "重低音",
      "ストリートバイブ"
    ],
    "artists": [
      "A$AP Rocky",
      "Drake",
      "Wiley",
      "JME",
      "Dizzee Rascal"
    ],
    "prompts": [
      {
        "type": "クラシック（ボーイベターノウグライム）",
        "style": "Boy Better Know grime, Skepta dark cinematic, piano-based, no vocals, instrumental",
        "detail": "[Instrumental] dark piano-based grime synthesizer, cinematic atmospheric pads, heavy grime drum machine, deep bass, 140 BPM, Boy Better Know dark cinematic grime loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルグライム）",
        "style": "global grime hip hop, US-UK crossover, modern dark, no vocals, instrumental",
        "detail": "[Instrumental] modern dark UK grime-meets-hip-hop synthesizer, trap-influenced drum pattern, heavy bass, 142 BPM, global US-UK crossover grime hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（グライムトラップフュージョン）",
        "style": "grime trap fusion experimental, dark hybrid, UK-US, no vocals, instrumental",
        "detail": "[Instrumental] experimental grime-trap hybrid synthesizer, fusion drum pattern, dark bass, 140 BPM, experimental dark grime trap fusion UK-US loop [No Vocals]"
      }
    ]
  },
  {
    "id": 107,
    "name": "Steel Banglez",
    "alias": "Pahuldip Sandhu",
    "city": "London, UK",
    "bpm": "130–145",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "trap",
      "underground"
    ],
    "region": "Other",
    "desc": "インド系ロンドンのプロデューサー。MoStackとMISTをUKラップのメインストリームへ押し上げた立役者で、メロディアスなピアノループとUK固有のパーカッシブなドラムが特徴。Nasとのコラボも実現した越境型の才能。",
    "sounds": [
      "メロディアスピアノ",
      "UKパーカッション",
      "ストリートソウル",
      "UKラップビート",
      "ドリル要素",
      "ドライドラム"
    ],
    "artists": [
      "MoStack",
      "MIST",
      "Wiley",
      "Nas",
      "Sidhu Moose Wala"
    ],
    "prompts": [
      {
        "type": "クラシック（UKラップピアノ）",
        "style": "UK rap piano loop, melodic street soul, Steel Banglez, no vocals, instrumental",
        "detail": "[Instrumental] melodic UK rap piano loop, UK-specific percussive drum pattern, street soul bass, 138 BPM, UK rap melodic street soul piano loop [No Vocals]"
      },
      {
        "type": "モダン（モダンUKストリート）",
        "style": "modern UK street rap, melodic polished, mainstream UK, no vocals, instrumental",
        "detail": "[Instrumental] polished modern UK street synthesizer, precise drum pattern, smooth bass, 140 BPM, modern polished UK street rap melodic loop [No Vocals]"
      },
      {
        "type": "実験的（UKグローバルフュージョン）",
        "style": "UK global fusion rap, experimental melodic, cross-cultural, no vocals, instrumental",
        "detail": "[Instrumental] experimental UK global fusion synthesizer, creative drum pattern, cultural bass blend, 135 BPM, experimental global UK fusion rap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 108,
    "name": "Jae5",
    "alias": "",
    "city": "London, UK",
    "bpm": "130–145",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "trap",
      "underground"
    ],
    "region": "Other",
    "desc": "ロンドン出身のUKドリル/アフロスウィング系プロデューサー。ナイジェリア系英国人としてのバックグラウンドからアフロビーツとUKドリルを融合させた独自サウンドで、Dave・J Hus等の名作を手がけてきた。",
    "sounds": [
      "UKドリルビート",
      "アフロスウィング要素",
      "ダークメロディー",
      "ナイジェリアンビート",
      "UKストリートサウンド",
      "融合的テクスチャー"
    ],
    "artists": [
      "Dave",
      "J Hus",
      "WizKid",
      "Burna Boy",
      "Fredo"
    ],
    "prompts": [
      {
        "type": "クラシック（UKドリルアフロ）",
        "style": "UK drill Afro fusion, Jae5 style, dark melodic Nigerian-UK, no vocals, instrumental",
        "detail": "[Instrumental] UK drill dark synthesizer with Afrobeat elements, Nigerian-influenced melody, drill drum pattern, 140 BPM, UK drill Afro fusion dark loop [No Vocals]"
      },
      {
        "type": "モダン（アフロスウィングUK）",
        "style": "Afro swing UK, modern fusion melodic, dark urban London, no vocals, instrumental",
        "detail": "[Instrumental] modern Afro swing melodic synthesizer, UK drill drum pattern, fusion bass, 142 BPM, modern Afro swing UK drill melodic loop [No Vocals]"
      },
      {
        "type": "実験的（ナイジェリアUKフュージョン）",
        "style": "Nigerian UK experimental fusion, dark Afro drill, innovative, no vocals, instrumental",
        "detail": "[Instrumental] experimental Nigerian-UK sonic fusion, innovative drill-Afro drum pattern, deep bass, 138 BPM, experimental innovative Afro UK drill fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 109,
    "name": "Rude Kid",
    "alias": "Shehzad Zar",
    "city": "Ilford, London, UK",
    "bpm": "130–142",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "underground",
      "experimental"
    ],
    "region": "Other",
    "desc": "「Are you ready?」のビートタグで知られるロンドンのプロデューサー。グライム・バスライン・ダブステップ・UKガレージを横断する幅広いスタイルが特徴で、ひとつのジャンルに縛られない柔軟性が強み。",
    "sounds": [
      "グライムシンセ",
      "バスラインビート",
      "ダブステップ要素",
      "UKガレージリズム",
      "ハードドラム",
      "多ジャンル対応"
    ],
    "artists": [
      "UKグライム・ガレージ界全般"
    ],
    "prompts": [
      {
        "type": "クラシック（UKマルチジャンル）",
        "style": "UK multi-genre underground, grime bassline dubstep, versatile, no vocals, instrumental",
        "detail": "[Instrumental] versatile UK synthesizer crossing grime and dubstep, bassline drum pattern, deep bass, 140 BPM, UK multi-genre underground versatile loop [No Vocals]"
      },
      {
        "type": "モダン（バスライン×ガレージ）",
        "style": "bassline meets garage UK, modern underground, heavy bass, no vocals, instrumental",
        "detail": "[Instrumental] modern UK bassline-garage synthesizer, heavy drum pattern, deep bass, 138 BPM, modern UK bassline garage underground loop [No Vocals]"
      },
      {
        "type": "実験的（UKクロスジャンル）",
        "style": "UK cross-genre experiment, abstract underground, dark versatile, no vocals, instrumental",
        "detail": "[Instrumental] abstract UK cross-genre synthesizer exploration, experimental drum pattern, dark bass, 134 BPM, experimental abstract UK cross-genre underground loop [No Vocals]"
      }
    ]
  },
  {
    "id": 110,
    "name": "Davinche",
    "alias": "",
    "city": "London, UK",
    "bpm": "138–142",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "alternative",
      "underground",
      "experimental"
    ],
    "region": "Other",
    "desc": "グライム草創期の重要プロデューサー。GeeneusやTargetと並んでジャンル形成に貢献し、初期グライムシーンの音的基盤を構築した。8バー構造のMCリレーを支えるミニマルでダークなビートメイキングが特徴。",
    "sounds": [
      "グライム黎明期ビート",
      "ミニマルシンセ",
      "ダーク音響",
      "8バー構造",
      "グライムドラム",
      "アーリーUKサウンド"
    ],
    "artists": [
      "初期グライムMC多数",
      "N.A.S.T.Y Crew"
    ],
    "prompts": [
      {
        "type": "クラシック（グライム黎明期）",
        "style": "early grime pioneer beat, minimalist dark, 8-bar structure, no vocals, instrumental",
        "detail": "[Instrumental] minimalist dark grime synthesizer, 8-bar drum machine pattern, sparse bass, underground raw feel, 140 BPM, early pioneer grime underground loop [No Vocals]"
      },
      {
        "type": "モダン（ピュアグライム）",
        "style": "pure grime essence, raw minimalist UK, underground authentic, no vocals, instrumental",
        "detail": "[Instrumental] raw authentic grime synthesizer, minimal drum pattern, sparse bass, 140 BPM, pure authentic raw grime underground loop [No Vocals]"
      },
      {
        "type": "実験的（グライムアブストラクト）",
        "style": "grime abstract experiment, minimalist dark UK avant-garde, no vocals, instrumental",
        "detail": "[Instrumental] abstract minimalist dark grime synthesizer, unconventional sparse drums, 138 BPM, abstract experimental minimalist dark grime loop [No Vocals]"
      }
    ]
  },
  {
    "id": 111,
    "name": "DJ Mehdi",
    "alias": "Mehdi Favéris-Essadi",
    "city": "Paris, France",
    "bpm": "87–125",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "boom bap",
      "alternative",
      "funk"
    ],
    "region": "Other",
    "desc": "フランスアンダーグラウンドヒップホップの最高峰プロデューサー。MC Solaar・113・Rohffらフレンチラップを音で支え、後にDaft Punk・Ed Bangerのエレクトロシーンとも融合した。2011年に33歳で事故死。伝説は続く。",
    "sounds": [
      "フレンチヒップホップビート",
      "エレクトロ要素",
      "洗練サンプリング",
      "パリジャンサウンド",
      "Ed Bangerクオリティ",
      "ヒップホップエレクトロ橋渡し"
    ],
    "artists": [
      "MC Solaar",
      "113",
      "Rohff",
      "Ideal J",
      "Chromeo"
    ],
    "prompts": [
      {
        "type": "クラシック（フレンチアンダーグラウンド）",
        "style": "French underground hip hop, DJ Mehdi style, sophisticated sampling, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated French hip hop sample, clean precise drum pattern, deep bass, Parisian underground atmosphere, 92 BPM, French underground hip hop sophisticated loop [No Vocals]"
      },
      {
        "type": "モダン（パリジャンエレクトロホップ）",
        "style": "Parisian electro hip hop, refined French production, Ed Banger, no vocals, instrumental",
        "detail": "[Instrumental] refined Parisian electronic hip hop synthesis, precise drum programming, electronic bass, 100 BPM, Parisian refined electro hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（エレクトロフレンチフュージョン）",
        "style": "electro French hip hop fusion, experimental sophisticated, Paris, no vocals, instrumental",
        "detail": "[Instrumental] experimental French hip hop meets electro fusion, sophisticated sample processing, 95 BPM, experimental Parisian electro fusion hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 112,
    "name": "Jimmy Jay",
    "alias": "",
    "city": "Marseille, France",
    "bpm": "86–95",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "south"
    ],
    "region": "Other",
    "desc": "「フランスのビートメイカーの父」と称されるマルセイユのレジェンド。IAMの「L'École du Micro d'Argent」を手がけ、アメリカのジャズ・ソウルサンプリングとマルセイユ固有のラテン的メロディ感覚を融合させてフレンチラップを全土に広めた。",
    "sounds": [
      "ジャズソウルサンプル",
      "ラテン的メロディ",
      "マルセイユグルーヴ",
      "ビッグバンド要素",
      "フレンチラップビート",
      "サザンフランスバイブ"
    ],
    "artists": [
      "IAM",
      "Akhenaton",
      "Shurik'n",
      "Kheops"
    ],
    "prompts": [
      {
        "type": "クラシック（マルセイユフレンチラップ）",
        "style": "Marseille French rap, jazz soul sampling, Mediterranean, no vocals, instrumental",
        "detail": "[Instrumental] American jazz soul sample with Mediterranean feel, Marseille-style drum groove, warm bass, 90 BPM, Marseille French hip hop soul jazz loop [No Vocals]"
      },
      {
        "type": "モダン（フランスゴールデンエラ）",
        "style": "French hip hop golden era, soulful warm, Marseille influence, no vocals, instrumental",
        "detail": "[Instrumental] golden era French hip hop soul sample, clean drum pattern, warm bass, 92 BPM, French golden era soul jazz hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（メッド・ラップフュージョン）",
        "style": "Mediterranean rap fusion, experimental French soul, cultural, no vocals, instrumental",
        "detail": "[Instrumental] experimental Mediterranean hip hop cultural fusion, French jazz sample, creative drum, 88 BPM, experimental Mediterranean French hip hop fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 113,
    "name": "SHK",
    "alias": "",
    "city": "Paris, France",
    "bpm": "75–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "trap",
      "jazzy"
    ],
    "region": "Other",
    "desc": "現代フランスラップシーンで最も尊敬されるプロデューサーの一人。Nekfeu・Alpha Wann・Freeze Corleoneらトップアーティストと組み、ジャジーな質感からトラップまで幅広いスタイルをこなす多才なビートメイカー。",
    "sounds": [
      "ジャジーフレンチビート",
      "トラップ要素",
      "精密サンプリング",
      "感情的メロディー",
      "多才スタイル",
      "モダンフランスサウンド"
    ],
    "artists": [
      "Nekfeu",
      "Alpha Wann",
      "Freeze Corleone",
      "SCH",
      "Laylow"
    ],
    "prompts": [
      {
        "type": "クラシック（コンテンポラリーフランスラップ）",
        "style": "contemporary French rap, jazzy dark, SHK style versatile, no vocals, instrumental",
        "detail": "[Instrumental] jazzy dark French hip hop sample, precise drum pattern, emotional bass, 88 BPM, contemporary versatile French rap jazzy loop [No Vocals]"
      },
      {
        "type": "モダン（フランストラップ）",
        "style": "modern French trap, dark melodic, contemporary Paris rap, no vocals, instrumental",
        "detail": "[Instrumental] dark melodic French trap synthesizer, modern drum pattern, 808 bass, 138 BPM, modern dark French trap Paris rap loop [No Vocals]"
      },
      {
        "type": "実験的（ジャジートラップフュージョン）",
        "style": "jazzy trap fusion French, experimental sophisticated, versatile, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated jazzy-trap fusion, experimental French production, versatile bass, 100 BPM, experimental sophisticated French jazzy trap fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 114,
    "name": "Skread",
    "alias": "",
    "city": "France",
    "bpm": "72–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "フランスラップをモダンなサウンドへアップデートしたプロデューサー。DJ MehdiやCut Killerが築いた礎の上に現代的なトラップ感覚を持ち込み、ダークなトラップと感情的なメロディの融合でシーンを刷新した。",
    "sounds": [
      "ダークフレンチトラップ",
      "シネマティックシンセ",
      "エモーショナルメロディー",
      "モダンフレンチビート",
      "808ベース",
      "フランスダークサウンド"
    ],
    "artists": [
      "現代フランスラップアーティスト多数",
      "Ninho",
      "SCH"
    ],
    "prompts": [
      {
        "type": "クラシック（ダークフレンチトラップ）",
        "style": "dark French trap, Skread style, cinematic emotional, no vocals, instrumental",
        "detail": "[Instrumental] dark cinematic French trap synthesizer, emotional chord progression, heavy 808 bass, 138 BPM, dark cinematic French trap emotional loop [No Vocals]"
      },
      {
        "type": "モダン（フランスシネマトラップ）",
        "style": "French cinematic trap, modern dark, emotional Paris, no vocals, instrumental",
        "detail": "[Instrumental] modern cinematic dark synthesizer, French trap drum pattern, deep 808, emotional atmospheric, 140 BPM, modern French cinematic dark trap loop [No Vocals]"
      },
      {
        "type": "実験的（ダークシネマフュージョン）",
        "style": "dark cinema hip hop fusion French, experimental moody, no vocals, instrumental",
        "detail": "[Instrumental] experimental dark cinema French hip hop synthesis, moody sample, innovative drum, 134 BPM, dark cinema experimental French fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 115,
    "name": "Cut Killer",
    "alias": "Cédric Cutter",
    "city": "Paris, France",
    "bpm": "88–100",
    "eras": [
      "90s",
      "2000s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "funk"
    ],
    "region": "Other",
    "desc": "1990年代フランスヒップホップの象徴的DJ兼プロデューサー。映画「La Haine（憎しみ）」のサウンドトラック参加でも知られ、NTM・MC Solaarなどのフレンチラップ黎明期を支えながらNYとパリの感覚を橋渡しした。",
    "sounds": [
      "DJスクラッチ",
      "フレンチラップビート",
      "ミックステープサウンド",
      "バイナルグルーヴ",
      "パリジャンストリート",
      "NYPari橋渡し"
    ],
    "artists": [
      "NTM",
      "MC Solaar",
      "Booba",
      "Rohff",
      "IAM"
    ],
    "prompts": [
      {
        "type": "クラシック（フレンチラップ黎明期）",
        "style": "early French hip hop classic, DJ cuts, 90s Paris NYC bridge, no vocals, instrumental",
        "detail": "[Instrumental] classic DJ scratch over French hip hop beat, boom bap drum pattern, Paris underground atmosphere, 92 BPM, early French hip hop DJ scratch classic loop [No Vocals]"
      },
      {
        "type": "モダン（フレンチクラシックリバイバル）",
        "style": "French hip hop classic revival, old school Paris, nostalgic, no vocals, instrumental",
        "detail": "[Instrumental] French hip hop revival sample, classic drum pattern, scratch elements, warm bass, 94 BPM, French classic revival nostalgia hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（パリNYターンテーブル）",
        "style": "Paris NYC turntable experiment, cross-cultural, creative scratch, no vocals, instrumental",
        "detail": "[Instrumental] creative cross-cultural scratch experiment, French-American hip hop fusion, 90 BPM, Paris-NYC experimental turntable hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 116,
    "name": "Sepalot",
    "alias": "",
    "city": "Munich, Germany",
    "bpm": "84–100",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "alternative",
      "experimental"
    ],
    "region": "Other",
    "desc": "ミュンヘンのビートメイカー兼Blumentopfグループのメンバー。ソウルからエレクトロまで多様な音楽的素養を持ち、ヨハネスブルクからボリビアまで世界ツアーを行う国際的存在。ドイツヒップホップのトップ10アルバムを複数記録。",
    "sounds": [
      "ドイツブームバップ",
      "エレクトロ要素",
      "ヴィニールサンプル",
      "オーガニックグルーヴ",
      "ミュンヘンスタイル",
      "マルチジャンル"
    ],
    "artists": [
      "Blumentopf",
      "ドイツ国内外MC多数"
    ],
    "prompts": [
      {
        "type": "クラシック（ミュンヘンブームバップ）",
        "style": "Munich boom bap, German hip hop, soul electronic blend, no vocals, instrumental",
        "detail": "[Instrumental] Munich-style soul vinyl sample, German hip hop drum pattern, electronic elements, warm bass, 88 BPM, Munich German boom bap soul loop [No Vocals]"
      },
      {
        "type": "モダン（ジャーマンエレクトロホップ）",
        "style": "German electro hop, modern Munich, multi-genre, no vocals, instrumental",
        "detail": "[Instrumental] modern German electronic hip hop synthesizer, multi-genre drum pattern, electronic bass, 90 BPM, modern German electro hop Munich loop [No Vocals]"
      },
      {
        "type": "実験的（グローバルビートフュージョン）",
        "style": "global beat fusion German, experimental international, Munich, no vocals, instrumental",
        "detail": "[Instrumental] experimental global sound fusion, international drum programming, creative bass, 86 BPM, experimental global fusion German hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 117,
    "name": "Suff Daddy",
    "alias": "",
    "city": "Berlin, Germany",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "jazzy",
      "underground"
    ],
    "region": "Other",
    "desc": "ベルリン発のビートメイカーで、ドイツの新世代ビートプロデューサー運動の中心人物。「Hi-Hat Club」シリーズを通じてアンダーグラウンドの高品質ビートを精力的に世に送り出している職人。",
    "sounds": [
      "ヴィンテージジャズサンプル",
      "ベルリンソウルビート",
      "Hi-Hat Clubサウンド",
      "精密ドラム",
      "ウォームベース",
      "ジャジーコード"
    ],
    "artists": [
      "Hi-Hat Club (Twit One, Dexter, Brenk Sinatra)"
    ],
    "prompts": [
      {
        "type": "クラシック（ベルリンジャジービート）",
        "style": "Berlin jazzy hip hop beat, Suff Daddy style, vintage soul, no vocals, instrumental",
        "detail": "[Instrumental] vintage Berlin jazz sample, precise drum pattern, warm soul bass, jazzy chord stabs, 88 BPM, Berlin jazzy vintage soul hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（Hi-Hat Clubクオリティ）",
        "style": "Hi-Hat Club quality German underground, modern artisan beat, no vocals, instrumental",
        "detail": "[Instrumental] artisan quality soul sample, precise modern drum programming, warm bass, 90 BPM, Hi-Hat Club quality modern German underground loop [No Vocals]"
      },
      {
        "type": "実験的（ベルリンアンダーグラウンドジャズ）",
        "style": "Berlin underground jazz experiment, abstract artisan, German, no vocals, instrumental",
        "detail": "[Instrumental] abstract jazz sample exploration, experimental drum feel, warm creative bass, 85 BPM, abstract Berlin underground jazzy experimental loop [No Vocals]"
      }
    ]
  },
  {
    "id": 118,
    "name": "Twit One",
    "alias": "",
    "city": "Germany",
    "bpm": "85–96",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "jazzy"
    ],
    "region": "Other",
    "desc": "ドイツ屈指のビートメイカー。深いレコード掘りを基盤とするサンプリングと、クラシックなヒップホップ文法への忠実さが特徴。Hi-Hat Club系のコレクティブを通じてドイツのアンダーグラウンドヒップホップ産業を牽引。",
    "sounds": [
      "クレートダイギングサンプル",
      "クラシックドラム",
      "ドープなグルーヴ",
      "ドイツアンダーグラウンド",
      "バイナルウォームス",
      "正統派ビート"
    ],
    "artists": [
      "Suff Daddy",
      "Dexter",
      "Brenk Sinatra",
      "Hi-Hat Club"
    ],
    "prompts": [
      {
        "type": "クラシック（クラシックジャーマンビート）",
        "style": "classic German hip hop beat, crate digging, authentic boom bap, no vocals, instrumental",
        "detail": "[Instrumental] deep crate-dig sample, authentic boom bap drum pattern, dope bass groove, vinyl warmth, 88 BPM, authentic classic German crate-digging boom bap loop [No Vocals]"
      },
      {
        "type": "モダン（アンダーグラウンドコレクティブ）",
        "style": "underground collective German hip hop, Hi-Hat Club, artisan, no vocals, instrumental",
        "detail": "[Instrumental] artisan collective quality boom bap, clean German underground drum, deep bass, 90 BPM, Hi-Hat Club collective artisan German underground loop [No Vocals]"
      },
      {
        "type": "実験的（ドープサンプリングエクスペリメント）",
        "style": "dope sampling experiment, deep crates German, abstract, no vocals, instrumental",
        "detail": "[Instrumental] abstract deep crate sample, experimental German drum pattern, warm creative bass, 86 BPM, abstract deep crate experimental German hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 119,
    "name": "Morlockk Dilemma",
    "alias": "",
    "city": "Leipzig, Germany",
    "bpm": "80–95",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "underground",
      "experimental",
      "alternative"
    ],
    "region": "Other",
    "desc": "ライプツィヒ出身のラッパー兼プロデューサー。1960〜80年代のオブスキュアなライブラリ音楽を素材に独自の暗黒ヒップホップワールドを構築。ファンク・ソウルを避ける異端のサンプリング哲学が唯一無二。",
    "sounds": [
      "ライブラリミュージックサンプル",
      "ダークアブストラクト",
      "旧東ドイツバイブ",
      "実験的テクスチャー",
      "オブスキュアサンプル",
      "ダークドラム"
    ],
    "artists": [
      "Hiob",
      "Leipzig/東ドイツアンダーグラウンド"
    ],
    "prompts": [
      {
        "type": "クラシック（ライブラリミュージックダーク）",
        "style": "library music dark hip hop, obscure sampling, East Germany, no vocals, instrumental",
        "detail": "[Instrumental] obscure 1960-80s library music sample, dark hip hop drum pattern, ominous bass, East German dark atmosphere, 85 BPM, dark library music underground hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（アブストラクトダーク）",
        "style": "abstract dark German hip hop, experimental library, obscure, no vocals, instrumental",
        "detail": "[Instrumental] abstract obscure library sample, dark experimental drum pattern, ominous bass, 88 BPM, abstract dark obscure experimental German hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（オブスキュアコラージュ）",
        "style": "obscure collage hip hop, avant-garde East German, dark abstract, no vocals, instrumental",
        "detail": "[Instrumental] avant-garde obscure collage from library sources, abstract drum, dark bass, 82 BPM, abstract avant-garde obscure collage dark German hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 120,
    "name": "Cubeatz",
    "alias": "Tim & Kevin Gomringer",
    "city": "Sindelfingen, Germany",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "ドイツ出身の双子プロデューサーデュオ。Metro Boomin・Murda Beatz・Boi-1daにループを提供しDrake・Travis Scott・Futureのアルバムにクレジットされるという異例のキャリア。Sony Music Publishingとグローバル契約締結。",
    "sounds": [
      "ムーディーメロディー",
      "レイヤードエフェクト",
      "トラップループ",
      "グローバルサウンド",
      "ドイツ×アメリカフュージョン",
      "高品質サンプル"
    ],
    "artists": [
      "Drake",
      "Travis Scott",
      "Future",
      "21 Savage",
      "Metro Boomin (ループ提供)"
    ],
    "prompts": [
      {
        "type": "クラシック（ドイツ×グローバルトラップ）",
        "style": "German global trap loop, Cubeatz twin style, moody layered, no vocals, instrumental",
        "detail": "[Instrumental] moody layered melodic trap loop, German-international quality, emotional synthesizer, 140 BPM, German global trap moody melodic loop [No Vocals]"
      },
      {
        "type": "モダン（ソニーミュージックグローバル）",
        "style": "Sony Music global trap, international hit quality, modern melodic, no vocals, instrumental",
        "detail": "[Instrumental] international quality melodic trap synthesizer, crisp trap drums, 808 bass, 142 BPM, Sony-level global modern melodic trap loop [No Vocals]"
      },
      {
        "type": "実験的（ループサプライヤーフュージョン）",
        "style": "loop supplier fusion trap, creative German-American, experimental, no vocals, instrumental",
        "detail": "[Instrumental] creative German-American melodic loop fusion, experimental layering, innovative 808, 138 BPM, experimental creative loop supplier trap fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 121,
    "name": "Primary",
    "alias": "Jung Won-young",
    "city": "Seoul, South Korea",
    "bpm": "84–106",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "jazzy",
      "alternative",
      "neo soul"
    ],
    "region": "Other",
    "desc": "顔を公開せず「P」マークのみで活動する韓国ヒップホップの重要プロデューサー。ジャズ風のコード進行と温かいR&Bテクスチャで、Dynamic Duo・Zion.T・Crushらとのコラボでアンダーグラウンドとメジャーを橋渡し。",
    "sounds": [
      "ジャジーR&Bビート",
      "スタイリッシュコード",
      "メロディックグルーヴ",
      "Kヒップホップサウンド",
      "ウォームシンセ",
      "プロフェッショナルミックス"
    ],
    "artists": [
      "Dynamic Duo",
      "Zion.T",
      "Crush",
      "Swings",
      "Gaeko"
    ],
    "prompts": [
      {
        "type": "クラシック（Kヒップホップジャジー）",
        "style": "K-hip hop jazzy R&B, Primary style mysterious, warm melodic, no vocals, instrumental",
        "detail": "[Instrumental] Korean hip hop jazzy R&B chord progression, warm melodic synthesizer, clean drum pattern, smooth bass, 90 BPM, jazzy R&B Korean hip hop warm loop [No Vocals]"
      },
      {
        "type": "モダン（モダンKポップホップ）",
        "style": "modern K-pop hop crossover, polished jazzy, mainstream Korean, no vocals, instrumental",
        "detail": "[Instrumental] polished modern Korean hip hop jazz synthesizer, clean drum, warm bass, pop crossover feel, 94 BPM, modern polished K-pop-hop jazzy loop [No Vocals]"
      },
      {
        "type": "実験的（Kジャズポップフュージョン）",
        "style": "K jazz pop fusion, experimental Korean, sophisticated, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated experimental Korean jazz-pop fusion, creative drum, complex bass harmony, 88 BPM, experimental K jazz pop fusion sophisticated loop [No Vocals]"
      }
    ]
  },
  {
    "id": 122,
    "name": "Groovyroom",
    "alias": "Park Gyu-jeong & Lee Hwi-min",
    "city": "Seoul, South Korea",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "funk"
    ],
    "region": "Other",
    "desc": "H1ghr Music所属のプロデューサーデュオ。DJ・プロデューサーの二刀流で活動し、クリーンでモダンなトラップ構造と韓国語ラップのシームレスな融合で韓国トラップシーンの音楽的水準を底上げしてきた。",
    "sounds": [
      "クリーントラップビート",
      "モダンKシンセ",
      "808ベース",
      "Kラップグルーヴ",
      "H1ghr Musicサウンド",
      "デュオプロダクション"
    ],
    "artists": [
      "Jay Park",
      "H1ghr Music全般",
      "Loco",
      "Simon Dominic"
    ],
    "prompts": [
      {
        "type": "クラシック（Kトラップクリーン）",
        "style": "K-trap clean modern, Groovyroom style H1ghr, crisp, no vocals, instrumental",
        "detail": "[Instrumental] clean crisp Korean trap synthesizer, precise drum pattern, 808 bass, modern K-hip hop groove, 140 BPM, clean modern H1ghr Korean trap loop [No Vocals]"
      },
      {
        "type": "モダン（H1ghr Musicスタイル）",
        "style": "H1ghr Music style trap, modern Korean urban, polished duo, no vocals, instrumental",
        "detail": "[Instrumental] polished H1ghr Music Korean urban synthesizer, dual-producer quality drum, clean 808, 142 BPM, H1ghr Music polished modern Korean trap loop [No Vocals]"
      },
      {
        "type": "実験的（KトラップイノベーションDJ）",
        "style": "K-trap DJ innovation, experimental Korean duo, creative, no vocals, instrumental",
        "detail": "[Instrumental] creative DJ-producer Korean trap innovation, experimental drum pattern, innovative 808, 138 BPM, experimental DJ innovative Korean trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 123,
    "name": "Code Kunst",
    "alias": "Jo Sung-woo",
    "city": "Incheon / Seoul, South Korea",
    "bpm": "75–110",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "experimental",
      "neo soul"
    ],
    "region": "Other",
    "desc": "仁川出身のAOMG所属プロデューサー。ボーカルチョッピングの独自技法・ブルース/ロック/ソウルのレイヤリング・Mac Miller的感性が特徴。2021年韓国ヒップホップ大賞「プロデューサー・オブ・ザ・イヤー」受賞。",
    "sounds": [
      "ボーカルチョップ",
      "ブルースロック要素",
      "ソウルレイヤリング",
      "AOMGサウンド",
      "オルタナKビート",
      "エモーショナルコード"
    ],
    "artists": [
      "AOMG全般",
      "C Jamm",
      "Nucksal",
      "Lee Hi",
      "Jay Park"
    ],
    "prompts": [
      {
        "type": "クラシック（オルタナKヒップホップ）",
        "style": "alternative K-hip hop, Code Kunst style, blues soul layered, no vocals, instrumental",
        "detail": "[Instrumental] soul blues layered sample, vocal chop technique, alternative Korean hip hop drum, 88 BPM, alternative soul blues layered Korean hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（AOMG実験的）",
        "style": "AOMG experimental Korean hip hop, sophisticated Mac Miller vibe, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated experimental Korean soul synthesizer, complex drum pattern, warm bass, 90 BPM, AOMG sophisticated experimental K-hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ボーカルチョップアート）",
        "style": "vocal chop art hip hop, experimental Korean, abstract soul, no vocals, instrumental",
        "detail": "[Instrumental] creative vocal chop art over Korean hip hop beat, abstract soul textures, experimental drum, 85 BPM, vocal chop art abstract experimental Korean hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 124,
    "name": "KUSH",
    "alias": "",
    "city": "Seoul, South Korea",
    "bpm": "88–140",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "YG Entertainmentの重要プロデューサー。G-Dragon・Zion.TとのコラボやShow Me the Money参加で知られ、KポップとKヒップホップの中間に位置するメジャー志向のプロフェッショナルなサウンドが特徴。",
    "sounds": [
      "YGサウンド",
      "メジャーKビート",
      "ポップヒップホップ",
      "プロフェッショナルミックス",
      "K-POPフック",
      "バーサタイルスタイル"
    ],
    "artists": [
      "G-Dragon",
      "Zion.T",
      "Show Me the Money出演者",
      "YG全般"
    ],
    "prompts": [
      {
        "type": "クラシック（YGKヒップホップ）",
        "style": "YG K-hip hop, polished mainstream Korean, G-Dragon era, no vocals, instrumental",
        "detail": "[Instrumental] polished YG-style Korean hip hop synthesizer, clean drum pattern, mainstream K-hip hop bass, 92 BPM, YG polished mainstream Korean hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（メジャーKトラップ）",
        "style": "major label K-trap, YG modern, polished mainstream, no vocals, instrumental",
        "detail": "[Instrumental] modern major K-trap synthesizer, crisp professional drum, 808 bass, 140 BPM, major label modern polished K-trap loop [No Vocals]"
      },
      {
        "type": "実験的（KポップヒップホップフュージョンYG）",
        "style": "K-pop hip hop fusion YG, experimental mainstream Korean, no vocals, instrumental",
        "detail": "[Instrumental] experimental K-pop hip hop YG fusion synthesizer, creative drum pattern, innovative bass, 95 BPM, experimental K-pop hip hop YG fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 125,
    "name": "Gray",
    "alias": "Hong Sang-pyo",
    "city": "Seoul, South Korea",
    "bpm": "82–142",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "neo soul",
      "alternative"
    ],
    "region": "Other",
    "desc": "AOMGレーベルの中心的プロデューサー兼アーティスト。Jay Parkが設立したAOMGの音楽的フレームワークを構築したひとりで、感情的なR&BメロディーとKヒップホップビートを融合させた「AOMG独自のアーバンスムースサウンド」の設計者。",
    "sounds": [
      "R&BメロディーKビート",
      "AOMGサウンド",
      "スムースアーバン",
      "エモーショナルコード",
      "プロデューサー×アーティスト",
      "ソウルK融合"
    ],
    "artists": [
      "Simon Dominic",
      "Loco",
      "AOMG全般",
      "Jay Park",
      "Ugly Duck"
    ],
    "prompts": [
      {
        "type": "クラシック（AOMGスムースR&B）",
        "style": "AOMG smooth R&B Korean hip hop, Gray style, emotional, no vocals, instrumental",
        "detail": "[Instrumental] smooth emotional AOMG-style R&B synthesizer, clean hip hop drum, warm bass, 88 BPM, AOMG smooth Korean R&B hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（アーバンKスムース）",
        "style": "urban K smooth hip hop R&B, modern AOMG, emotional polished, no vocals, instrumental",
        "detail": "[Instrumental] polished urban Korean smooth synthesizer, modern R&B-hip hop drum, emotional bass, 90 BPM, urban polished Korean smooth hip hop R&B loop [No Vocals]"
      },
      {
        "type": "実験的（Kソウルアーバンフュージョン）",
        "style": "K soul urban fusion, experimental AOMG, emotional innovative, no vocals, instrumental",
        "detail": "[Instrumental] experimental Korean soul-urban fusion synthesizer, innovative drum pattern, emotional bass, 85 BPM, experimental K soul urban fusion innovative loop [No Vocals]"
      }
    ]
  },
  {
    "id": 126,
    "name": "Bizarrap",
    "alias": "BZRP / Gonzalo Conde",
    "city": "Buenos Aires, Argentina",
    "bpm": "82–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "experimental"
    ],
    "region": "Other",
    "desc": "アルゼンチン出身、1998年生まれの世界的プロデューサー。固定カメラ・ミニマル美学の「BZRP Music Sessions」でShakira・Peso Pluma・Bad Bunnyらとのコラボがバイラル。ラテングラミー「Producer of the Year」2021・2023ノミネート。",
    "sounds": [
      "EDMシンセ",
      "ラテントラップビート",
      "ミニマルセッションサウンド",
      "グローバルポップ",
      "BZRPタグ",
      "エレクトロラテン"
    ],
    "artists": [
      "Shakira",
      "Peso Pluma",
      "Daddy Yankee",
      "Bad Bunny",
      "Young Miko",
      "Residente"
    ],
    "prompts": [
      {
        "type": "クラシック（BZRPミュージックセッション）",
        "style": "BZRP Music Sessions style, Argentine EDM trap, minimal viral, no vocals, instrumental",
        "detail": "[Instrumental] BZRP-style minimal EDM trap synthesizer, viral Latin beat, 808 bass, 130 BPM, Argentine BZRP Music Session style Latin trap loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルラテントラップ）",
        "style": "global Latin trap EDM, modern viral Argentine, Shakira era, no vocals, instrumental",
        "detail": "[Instrumental] modern global Latin trap EDM synthesizer, viral drum pattern, 808 bass, 140 BPM, global viral modern Latin EDM trap loop [No Vocals]"
      },
      {
        "type": "実験的（ラテンEDMフュージョン）",
        "style": "Latin EDM fusion experimental, Argentine innovative, global viral, no vocals, instrumental",
        "detail": "[Instrumental] innovative Latin-EDM fusion synthesizer, experimental beat pattern, creative bass, 135 BPM, experimental innovative Latin EDM global fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 127,
    "name": "Tainy",
    "alias": "Marco Masís",
    "city": "San Juan, Puerto Rico",
    "bpm": "92–100",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "funk",
      "alternative"
    ],
    "region": "Other",
    "desc": "Luny Tunesに師事したプエルトリコのプロデューサー。Bad Bunny・J Balvin・Daddy Yankeeと継続的にコラボし、デムボウリズムと現代的エレクトロを融合させたレゲトンの世界制覇を後方支援する業界最重要人物の一人。",
    "sounds": [
      "デムボウリズム",
      "エレクトロレゲトン",
      "モダンラテンビート",
      "ベースライン",
      "プエルトリコサウンド",
      "ラテントラップ"
    ],
    "artists": [
      "Bad Bunny",
      "J Balvin",
      "Kali Uchis",
      "Daddy Yankee",
      "Ricky Martin"
    ],
    "prompts": [
      {
        "type": "クラシック（レゲトンデムボウ）",
        "style": "reggaeton dembow rhythm, Tainy style, Puerto Rican modern, no vocals, instrumental",
        "detail": "[Instrumental] traditional dembow rhythm pattern, reggaeton bass, Puerto Rican melodic element, 95 BPM, classic Puerto Rican reggaeton dembow loop [No Vocals]"
      },
      {
        "type": "モダン（ラテントラップポップ）",
        "style": "Latin trap pop crossover, modern global, Bad Bunny era, no vocals, instrumental",
        "detail": "[Instrumental] modern Latin trap-pop synthesizer, dembow-influenced drum, 808 bass, 98 BPM, modern global Latin trap pop crossover loop [No Vocals]"
      },
      {
        "type": "実験的（ラテンエレクトロポップ）",
        "style": "Latin electro pop fusion, experimental Puerto Rico, innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative Latin electro-pop synthesizer, experimental dembow pattern, creative bass, 94 BPM, experimental innovative Latin electro pop fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 128,
    "name": "Luny Tunes",
    "alias": "Luny & Tunes",
    "city": "Lawrence MA / Dominican Republic",
    "bpm": "92–100",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "funk",
      "south",
      "alternative"
    ],
    "region": "Other",
    "desc": "「Gasolina」でレゲトンの世界制覇を決定的にしたドミニカ系デュオ。バチャータ+レゲトン=バチャトンの創出、Daddy Yankee「Gasolina」でデムボウリズムを世界に広め、現在のラテントラップの礎を作った伝説的プロダクションチーム。",
    "sounds": [
      "デムボウリズム",
      "バチャトン",
      "ラテンビート",
      "Gasolinaサウンド",
      "プエルトリコサウンド",
      "ラテン808"
    ],
    "artists": [
      "Daddy Yankee",
      "Don Omar",
      "Wisin & Yandel",
      "Tego Calderón",
      "Nicky Jam"
    ],
    "prompts": [
      {
        "type": "クラシック（ガソリーナ時代レゲトン）",
        "style": "Gasolina era reggaeton, Luny Tunes style, classic dembow, no vocals, instrumental",
        "detail": "[Instrumental] classic Gasolina-era dembow rhythm, reggaeton bass, Latin percussion, energetic feel, 95 BPM, classic legendary reggaeton dembow Latin loop [No Vocals]"
      },
      {
        "type": "モダン（ラテンビートレジェンド）",
        "style": "Latin beat legend style, modern reggaeton, classic with modern, no vocals, instrumental",
        "detail": "[Instrumental] modern reggaeton with classic Luny Tunes foundation, updated dembow, 96 BPM, legendary Latin beat modern reggaeton loop [No Vocals]"
      },
      {
        "type": "実験的（バチャトンフュージョン）",
        "style": "bachatón fusion experimental, Latin genre crossover, innovative, no vocals, instrumental",
        "detail": "[Instrumental] experimental bachata meets reggaeton fusion, innovative Latin drum, 92 BPM, experimental bachatón genre-crossing Latin fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 129,
    "name": "Lex Luger",
    "alias": "Lexus Lewis",
    "city": "Virginia / Atlanta",
    "bpm": "130–148",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "south"
    ],
    "region": "South",
    "desc": "808 Mafia共同設立者でトラップミュージックの音的設計者。TR-808キックドラムの爆発的使用・不気味なシンセライン・ハンマー的ドラム連打でWaka Flocka・Rick Ross・Jay-Zを手がけ、アトランタトラップの原型を定義した。",
    "sounds": [
      "TR-808キック",
      "不気味シンセ",
      "ハンマードラム",
      "アグレッシブトラップ",
      "808 Mafiaオリジナル",
      "ダークエネルギー"
    ],
    "artists": [
      "Waka Flocka Flame",
      "Rick Ross",
      "Kanye West",
      "Jay-Z",
      "Lil Wayne"
    ],
    "prompts": [
      {
        "type": "クラシック（808 Mafiaオリジン）",
        "style": "808 Mafia origin trap, Lex Luger style, TR-808 heavy dark, no vocals, instrumental",
        "detail": "[Instrumental] heavy TR-808 kick drums, dark ominous synthesizer, hammering drum pattern, 140 BPM, original 808 Mafia dark heavy trap loop [No Vocals]"
      },
      {
        "type": "モダン（ダークトラップエボリューション）",
        "style": "dark trap evolution, modern 808, aggressive ominous, no vocals, instrumental",
        "detail": "[Instrumental] evolved dark 808 trap synthesizer, modern aggressive drum, heavy bass, 142 BPM, evolved modern aggressive dark 808 trap loop [No Vocals]"
      },
      {
        "type": "実験的（ハンマートラップアブストラクト）",
        "style": "hammer trap abstract, extreme dark 808, aggressive experimental, no vocals, instrumental",
        "detail": "[Instrumental] extreme experimental 808 hammer patterns, abstract dark synthesizer, aggressive bass, 138 BPM, extreme experimental 808 hammer dark abstract trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 130,
    "name": "Jhay Cortez",
    "alias": "Jesús Manuel Nieves Cortés",
    "city": "San Juan, Puerto Rico",
    "bpm": "92–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "funk",
      "alternative"
    ],
    "region": "Other",
    "desc": "14歳から楽曲制作を始め、J Balvinの「Vibras」でグラミー受賞（2018年）・Cardi Bの「I Like It」等を手がけたプエルトリコのプロデューサー兼シンガー。ラテンアーバン界の重要な作曲家として業界を支える。",
    "sounds": [
      "ラテントラップビート",
      "アーバンラテンサウンド",
      "レゲトン要素",
      "エモーショナルラテンメロ",
      "プエルトリコストリート",
      "グラミーレベルプロダクション"
    ],
    "artists": [
      "J Balvin",
      "Anuel AA",
      "Bad Bunny",
      "Natti Natasha",
      "Cardi B"
    ],
    "prompts": [
      {
        "type": "クラシック（ラテンアーバン）",
        "style": "Latin urban trap, Jhay Cortez style, Grammy level Puerto Rico, no vocals, instrumental",
        "detail": "[Instrumental] Grammy-level Latin urban trap synthesizer, Puerto Rican melodic element, dembow-trap drums, 95 BPM, Latin urban trap Grammy-quality Puerto Rico loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルラテンポップトラップ）",
        "style": "global Latin pop trap, modern Puerto Rico crossover, emotional, no vocals, instrumental",
        "detail": "[Instrumental] modern global Latin pop-trap synthesizer, emotional chord, dembow-influenced drum, 140 BPM, global modern Latin pop trap emotional loop [No Vocals]"
      },
      {
        "type": "実験的（ラテンポップアーバンフュージョン）",
        "style": "Latin pop urban fusion, experimental Puerto Rico, innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative Latin pop-urban-trap fusion, experimental rhythm, creative bass, 98 BPM, experimental innovative Latin pop urban fusion Puerto Rico loop [No Vocals]"
      }
    ]
  },
  {
    "id": 131,
    "name": "Tarrío",
    "alias": "",
    "city": "Colombia",
    "bpm": "72–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "コロンビアのラテントラップシーンで活躍するプロデューサー。南米固有のリズム感覚と現代的なトラップを融合し、コロンビアのストリートラップとグローバルサウンドを繋ぐ重要なビートメイカー。",
    "sounds": [
      "コロンビアンリズム",
      "ラテントラップ",
      "ストリートビート",
      "南米グルーヴ",
      "モダンラテンサウンド",
      "クロスカルチャービート"
    ],
    "artists": [
      "コロンビア系ラッパー多数"
    ],
    "prompts": [
      {
        "type": "クラシック（コロンビアンラテントラップ）",
        "style": "Colombian Latin trap, South American rhythmic, street, no vocals, instrumental",
        "detail": "[Instrumental] Colombian rhythmic Latin trap beat, South American groove, street bass, 140 BPM, Colombian Latin trap South American street loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルコロンビアビート）",
        "style": "global Colombian beat, modern Latin trap, cross-cultural, no vocals, instrumental",
        "detail": "[Instrumental] modern global Colombian Latin synthesizer, cross-cultural drum, international bass, 142 BPM, global modern Colombian Latin trap loop [No Vocals]"
      },
      {
        "type": "実験的（ラテンアメリカンフュージョン）",
        "style": "Latin American fusion, experimental Colombian, innovative South, no vocals, instrumental",
        "detail": "[Instrumental] experimental Latin American fusion synthesizer, innovative Colombian drum pattern, creative bass, 138 BPM, experimental innovative Latin American Colombian fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 132,
    "name": "Don Jazzy",
    "alias": "Michael Collins Ajereh",
    "city": "Lagos, Nigeria",
    "bpm": "98–112",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "funk",
      "alternative",
      "neo soul"
    ],
    "region": "Other",
    "desc": "「21世紀最高のアフロビーツプロデューサー」と称されるナイジェリアの巨人。Mo'Hits Recordsを創設後2012年にMavin Recordsを設立し、Rema・Ayra Starrをグローバルスターへ押し上げた。ハイライフ・ファンク・R&Bの巧みな融合が特徴。",
    "sounds": [
      "アフロビーツリズム",
      "ハイライフ要素",
      "ファンクベース",
      "R&Bメロディー",
      "ラゴスサウンド",
      "Mavin Recordsクオリティ"
    ],
    "artists": [
      "D'banj",
      "Tiwa Savage",
      "Rema",
      "Ayra Starr",
      "WizKid"
    ],
    "prompts": [
      {
        "type": "クラシック（アフロビーツゴールデンエラ）",
        "style": "Afrobeats golden era, Don Jazzy style, highlife R&B funk, no vocals, instrumental",
        "detail": "[Instrumental] highlife funk and R&B fusion, afrobeats rhythm pattern, warm bass groove, Lagos atmosphere, 104 BPM, golden era Afrobeats highlife funk loop [No Vocals]"
      },
      {
        "type": "モダン（Mavin Recordsサウンド）",
        "style": "Mavin Records modern Afrobeats, global pop crossover, polished, no vocals, instrumental",
        "detail": "[Instrumental] polished modern Afrobeats synthesizer, global pop crossover feel, warm bass, 106 BPM, Mavin Records modern polished global Afrobeats loop [No Vocals]"
      },
      {
        "type": "実験的（アフロポップフュージョン）",
        "style": "Afro pop fusion experimental, innovative Nigerian, global, no vocals, instrumental",
        "detail": "[Instrumental] innovative Nigerian Afro pop fusion, experimental rhythm pattern, creative bass, 100 BPM, experimental innovative Nigerian Afro pop global fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 133,
    "name": "Sarz",
    "alias": "Osabuohien Osaretin",
    "city": "Benin City / Lagos, Nigeria",
    "bpm": "100–115",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "funk",
      "alternative",
      "neo soul"
    ],
    "region": "Other",
    "desc": "「Sarz on the beat」のタグで知られるナイジェリア代表プロデューサー。Drake「One Dance」やBeyoncéの「Lion King: The Gift」に貢献。Sarz Academyで次世代ナイジェリア人プロデューサーを育てる教育者でもある。",
    "sounds": [
      "アフロビーツドラム",
      "ソウルメロディー",
      "R&Bグルーヴ",
      "クラブビート",
      "ハイライフ影響",
      "グローバルサウンド"
    ],
    "artists": [
      "Wizkid",
      "Tems",
      "Asake",
      "Lojay",
      "Beyoncé",
      "Drake"
    ],
    "prompts": [
      {
        "type": "クラシック（ナイジェリアアフロビーツ）",
        "style": "Nigerian Afrobeats, Sarz style, soul R&B club groove, no vocals, instrumental",
        "detail": "[Instrumental] Afrobeats drum pattern, soulful R&B melody, warm bass groove, club-ready rhythm, 106 BPM, Nigerian Afrobeats soul R&B club loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルアフロビーツ）",
        "style": "global Afrobeats, modern Beyoncé collab level, sophisticated, no vocals, instrumental",
        "detail": "[Instrumental] sophisticated global Afrobeats synthesizer, modern R&B groove, 108 BPM, global sophisticated modern Afrobeats R&B loop [No Vocals]"
      },
      {
        "type": "実験的（アフロビーツグローバルフュージョン）",
        "style": "Afrobeats global fusion, experimental Nigerian, innovative soul, no vocals, instrumental",
        "detail": "[Instrumental] experimental innovative Nigerian Afrobeats global fusion, creative rhythm pattern, soul bass, 102 BPM, experimental global Nigerian Afrobeats fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 134,
    "name": "Pheelz",
    "alias": "",
    "city": "Lagos, Nigeria",
    "bpm": "100–118",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "funk",
      "alternative",
      "neo soul"
    ],
    "region": "Other",
    "desc": "ラゴス出身の万能プロデューサー。Olamideのストリートホップ・Adekunle GoldのFuji-Pop・Fireboyのデビューアルバムとジャンルを跨いだ傑作を量産。ナイジェリア音楽の多様性を体現するキープロデューサー。",
    "sounds": [
      "アフロビーツ要素",
      "ストリートナイジャビート",
      "Fuji-Pop融合",
      "オルタナアフロポップ",
      "ソウルメロディー",
      "Lagos多様サウンド"
    ],
    "artists": [
      "Olamide",
      "Adekunle Gold",
      "Fireboy DML",
      "Tiwa Savage",
      "Rema"
    ],
    "prompts": [
      {
        "type": "クラシック（ナイジェリアストリートポップ）",
        "style": "Nigerian street pop Afro, Pheelz style, Olamide era, no vocals, instrumental",
        "detail": "[Instrumental] Nigerian street pop Afrobeats rhythm, soulful melodic synthesizer, warm bass, 106 BPM, Nigerian street Afrobeats soul pop loop [No Vocals]"
      },
      {
        "type": "モダン（フュージポップフュージョン）",
        "style": "Fuji pop fusion Afrobeats, modern Nigerian genre-blend, no vocals, instrumental",
        "detail": "[Instrumental] modern Fuji-pop Afrobeats fusion synthesizer, creative rhythm pattern, warm bass, 110 BPM, modern Fuji pop Afrobeats fusion Nigerian loop [No Vocals]"
      },
      {
        "type": "実験的（アフロジャンル横断）",
        "style": "Afro genre-crossing experimental, innovative versatile Nigerian, no vocals, instrumental",
        "detail": "[Instrumental] experimental innovative Nigerian multi-genre Afro fusion, versatile rhythm, creative bass, 104 BPM, experimental innovative versatile Nigerian Afro fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 135,
    "name": "Masterkraft",
    "alias": "",
    "city": "Lagos, Nigeria",
    "bpm": "100–116",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "funk",
      "alternative"
    ],
    "region": "Other",
    "desc": "ナイジェリアのアフロビーツプロデューサーのなかで、最も多才かつ長いキャリアを持つ一人。Kennis Musicからスタートし、ジャンルの変遷とともに自身のスタイルを進化させ続けてきたナイジェリア音楽の生き字引。",
    "sounds": [
      "ハイライフグルーヴ",
      "アフロポップビート",
      "ナイジェリアリズム",
      "ロングキャリアサウンド",
      "Kennis Musicスタイル",
      "多才アフロビーツ"
    ],
    "artists": [
      "Banky W",
      "Lynxxx",
      "Bracket",
      "2Baba",
      "P-Square"
    ],
    "prompts": [
      {
        "type": "クラシック（ナイジェリアハイライフ）",
        "style": "Nigerian highlife pop, Masterkraft style, classic Lagos, no vocals, instrumental",
        "detail": "[Instrumental] classic Nigerian highlife groove, Afrobeats drum pattern, warm melodic bass, 104 BPM, classic Nigerian highlife pop Afrobeats loop [No Vocals]"
      },
      {
        "type": "モダン（モダンアフロポップ）",
        "style": "modern Afro pop Lagos, evolved Nigerian, polished, no vocals, instrumental",
        "detail": "[Instrumental] modern polished Afro pop synthesizer, evolved Nigerian rhythm, warm bass, 108 BPM, modern polished evolved Nigerian Afro pop loop [No Vocals]"
      },
      {
        "type": "実験的（ナイジェリアグローバル）",
        "style": "Nigerian global Afro experiment, innovative long-career, versatile, no vocals, instrumental",
        "detail": "[Instrumental] innovative versatile Nigerian Afro global synthesis, experimental rhythm, 102 BPM, experimental innovative global Nigerian Afro loop [No Vocals]"
      }
    ]
  },
  {
    "id": 136,
    "name": "Kiddominant",
    "alias": "",
    "city": "Lagos, Nigeria",
    "bpm": "100–115",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "funk",
      "alternative"
    ],
    "region": "Other",
    "desc": "Davidoとのコンビネーションで国際的名声を得たラゴスのプロデューサー。「Fall」のBillboard Hot 100 29週滞在記録はナイジェリア人として史上最長で、アフロビーツを世界規模に押し上げた歴史的なビートを手がけた。",
    "sounds": [
      "Davidoサウンド",
      "アフロダンスホール",
      "グローバルアフロビーツ",
      "ダンスホールリズム",
      "Billboard品質ビート",
      "ラゴスクラブ"
    ],
    "artists": [
      "Davido",
      "WizKid",
      "Beyoncé",
      "Chris Brown",
      "Tiwa Savage"
    ],
    "prompts": [
      {
        "type": "クラシック（DavidoアフロダンスホールFall）",
        "style": "Afro dancehall, Kiddominant Davido style, Billboard hit quality, no vocals, instrumental",
        "detail": "[Instrumental] Afro dancehall rhythm pattern, melodic synthesizer, warm bass groove, club-ready feel, 106 BPM, Afro dancehall Billboard-hit quality loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルアフロダンス）",
        "style": "global Afro dance, modern crossover, international hit, no vocals, instrumental",
        "detail": "[Instrumental] international Afro dance synthesizer, global crossover drum, warm bass, 108 BPM, global modern Afro dance international hit loop [No Vocals]"
      },
      {
        "type": "実験的（アフロポップグローバルフュージョン）",
        "style": "Afro pop global fusion, experimental international Nigerian, no vocals, instrumental",
        "detail": "[Instrumental] experimental international Nigerian Afro pop fusion synthesizer, creative rhythm, 102 BPM, experimental global Nigerian Afro pop fusion innovative loop [No Vocals]"
      }
    ]
  },
  {
    "id": 137,
    "name": "Noah \"40\" Shebib",
    "alias": "40",
    "city": "Toronto, Canada",
    "bpm": "70–95",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "alternative",
      "neo soul",
      "lo-fi"
    ],
    "region": "Other",
    "desc": "Drake・Oliver El-KhatibとともにOVOレーベルを共同設立したトロントのレジェンド。2008年以来Drakeのほぼ全作品を手がけ、霧がかったような靄感のあるアトモスフェリックR&B/ヒップホップサウンド「OVOサウンド」を世界に輸出した。",
    "sounds": [
      "アトモスフェリックパッド",
      "靄感のあるR&B",
      "OVOサウンド",
      "エモーショナルシンセ",
      "ロウキーベース",
      "霧のトロントバイブ"
    ],
    "artists": [
      "Drake (全作品)",
      "The Weeknd",
      "PartyNextDoor",
      "Majid Jordan"
    ],
    "prompts": [
      {
        "type": "クラシック（OVOアトモスフェリック）",
        "style": "OVO atmospheric hip hop, 40 style, misty Toronto R&B, no vocals, instrumental",
        "detail": "[Instrumental] misty atmospheric R&B synthesizer, slow OVO-style drum pattern, emotional bass, ambient pad, 80 BPM, atmospheric misty OVO Toronto hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ドレークエラサウンド）",
        "style": "Drake era sound, modern OVO R&B hip hop, emotional cloud, no vocals, instrumental",
        "detail": "[Instrumental] modern OVO emotional cloud synthesizer, slow hip hop drum, atmospheric bass, 82 BPM, modern Drake era atmospheric OVO hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（アンビエントR&Bアトモ）",
        "style": "ambient R&B atmospheric, experimental OVO, dreamy misty, no vocals, instrumental",
        "detail": "[Instrumental] experimental ambient dreamy R&B synthesis, minimalist OVO drum, atmospheric deep bass, 78 BPM, ambient experimental misty OVO R&B hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 138,
    "name": "Boi-1da",
    "alias": "Matthew Samuels",
    "city": "Kingston, Jamaica / Toronto, Canada",
    "bpm": "85–145",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "ジャマイカ出身のカナダ拠点プロデューサー。2006年からDrakeを初期から支え、Eminem・Kendrick Lamar・J. Coleとも多数の名作を手がける。WondaGurl・T-Minusら後進を引き上げトロントの音楽産業全体を底上げした。",
    "sounds": [
      "ハードドラム",
      "ブームバップ×トラップ",
      "東海岸バイブ",
      "ジャマイカ影響",
      "グラミーレベルビート",
      "トロントプライド"
    ],
    "artists": [
      "Drake",
      "Eminem",
      "Kendrick Lamar",
      "J. Cole",
      "Meek Mill",
      "Jay-Z"
    ],
    "prompts": [
      {
        "type": "クラシック（カナダブームバップ）",
        "style": "Canadian boom bap hip hop, Boi-1da style, hard-hitting versatile, no vocals, instrumental",
        "detail": "[Instrumental] hard-hitting versatile boom bap drum, soulful sample, deep bass, Toronto underground vibe, 90 BPM, Canadian hard boom bap versatile hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（グローバルヒットプロデューサー）",
        "style": "global hit producer style, modern versatile, Grammy-level Canadian, no vocals, instrumental",
        "detail": "[Instrumental] Grammy-level modern versatile synthesizer, crisp drum pattern, powerful bass, 92 BPM, Grammy-quality modern Canadian global hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（カリビアンカナダフュージョン）",
        "style": "Caribbean Canadian hip hop fusion, experimental Jamaican-Toronto, no vocals, instrumental",
        "detail": "[Instrumental] experimental Jamaican-Toronto hip hop fusion, creative drum pattern, innovative bass, 88 BPM, experimental Caribbean Canadian hip hop fusion loop [No Vocals]"
      }
    ]
  },
  {
    "id": 139,
    "name": "WondaGurl",
    "alias": "Ebony Oshunrinde",
    "city": "Toronto, Canada",
    "bpm": "130–155",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "boom bap"
    ],
    "region": "Other",
    "desc": "9歳からビート制作を始め16歳でJay-Z・Travis Scottのアルバムにクレジットされた天才。カナダ最重要の女性ビートメイカーとして業界を切り開き、女性プロデューサーの先駆けとしての存在感は世界的にも大きい。",
    "sounds": [
      "ハードヒットトラップ",
      "808ベース",
      "アトモスフェリックパッド",
      "クリスプドラム",
      "WondaGurlタグ",
      "アグレッシブビート"
    ],
    "artists": [
      "Travis Scott",
      "Jay-Z",
      "SZA",
      "Drake",
      "Rihanna"
    ],
    "prompts": [
      {
        "type": "クラシック（天才16歳トラップ）",
        "style": "prodigy trap, WondaGurl style, Jay-Z level quality hard hitting, no vocals, instrumental",
        "detail": "[Instrumental] Jay-Z level quality trap beat, aggressive synthesizer, heavy 808 bass, crisp hard drum, 145 BPM, prodigy Canadian female trap hard-hitting loop [No Vocals]"
      },
      {
        "type": "モダン（パワフルフィメールトラップ）",
        "style": "powerful female trap, modern Canadian, aggressive atmospheric, no vocals, instrumental",
        "detail": "[Instrumental] powerful atmospheric trap synthesizer, aggressive drum pattern, heavy 808, 148 BPM, modern powerful female Canadian trap loop [No Vocals]"
      },
      {
        "type": "実験的（ガラスの天井ブレイカー）",
        "style": "glass ceiling breaker trap, experimental innovative female, pioneering, no vocals, instrumental",
        "detail": "[Instrumental] pioneering innovative female trap synthesizer, experimental drum programming, creative 808 bass, 142 BPM, pioneering experimental innovative female trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 140,
    "name": "Frank Dukes",
    "alias": "Adam Feeney",
    "city": "Toronto, Canada",
    "bpm": "75–100",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "lo-fi",
      "jazzy",
      "boom bap"
    ],
    "region": "Other",
    "desc": "DJ・Pete Rock・RZAを研究し独自のサンプリング哲学を構築したトロントのプロデューサー。Kingsway Music Libraryを創設しライブミュージシャンによるサンプルループをアーティストに提供するという革新的サービスを展開。",
    "sounds": [
      "Kingsway Music Libraryサンプル",
      "ソウルフルサンプリング",
      "ライブ録音ループ",
      "ウォームテクスチャー",
      "ヴィンテージグルーヴ",
      "オーガニックフィール"
    ],
    "artists": [
      "Drake",
      "Travis Scott",
      "Kanye West",
      "Frank Ocean",
      "Post Malone"
    ],
    "prompts": [
      {
        "type": "クラシック（Kingswayライブサンプル）",
        "style": "Kingsway Music Library live sample, Frank Dukes warm vintage, no vocals, instrumental",
        "detail": "[Instrumental] warm live-recorded Kingsway sample, organic drum groove, vintage bass feel, soulful chord progression, 82 BPM, Kingsway warm vintage soulful hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（ライブサンプルモダン）",
        "style": "live sample modern hip hop, innovative Toronto, warm organic, no vocals, instrumental",
        "detail": "[Instrumental] modern warm live sample application, clean organic drum, smooth bass, 85 BPM, modern innovative live sample warm organic Toronto hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ライブサンプルイノベーション）",
        "style": "live sample innovation, experimental Kingsway, pioneering Toronto, no vocals, instrumental",
        "detail": "[Instrumental] pioneering experimental Kingsway live sample, innovative drum programming, warm creative bass, 80 BPM, experimental innovative live sample Toronto hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 141,
    "name": "M-Phazes",
    "alias": "Mark Landon",
    "city": "Gold Coast / Los Angeles",
    "bpm": "84–100",
    "eras": [
      "2000s",
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "neo soul",
      "alternative"
    ],
    "region": "Other",
    "desc": "ゴールドコースト出身でLAを拠点とするオーストラリア最高峰プロデューサー。Eminem「Bad Guy」でグラミー受賞、ARIA Awards5部門制覇という前人未到の記録を持つ。ヒップホップからポップまで越境するマルチタレント。",
    "sounds": [
      "ネオソウルブームバップ",
      "グラミーレベルビート",
      "ARIAアウォードサウンド",
      "ウォームメロディー",
      "LAオーストラリア融合",
      "クリーンプロダクション"
    ],
    "artists": [
      "Eminem",
      "Logic",
      "Madonna",
      "Demi Lovato",
      "Amy Shark",
      "Ruel",
      "Kimbra"
    ],
    "prompts": [
      {
        "type": "クラシック（オーストラリアンブームバップ）",
        "style": "Australian boom bap neo soul, M-Phazes Grammy quality warm, no vocals, instrumental",
        "detail": "[Instrumental] Grammy-quality warm Australian boom bap drum, neo soul sample, smooth bass, 88 BPM, Australian warm neo soul boom bap Grammy-level loop [No Vocals]"
      },
      {
        "type": "モダン（グラミーARIAマルチジャンル）",
        "style": "Grammy ARIA multi-genre, modern Australian global, versatile, no vocals, instrumental",
        "detail": "[Instrumental] versatile modern global Australian synthesizer, clean drum pattern, warm bass, 90 BPM, Grammy ARIA modern versatile Australian global hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ゴールドコーストLA融合）",
        "style": "Gold Coast LA fusion, experimental Australian-American, global, no vocals, instrumental",
        "detail": "[Instrumental] experimental Gold Coast-LA sonic fusion, innovative drum, creative bass, 86 BPM, experimental Australian-American global fusion hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 142,
    "name": "Hau Latukefu",
    "alias": "Koolism",
    "city": "Australia",
    "bpm": "85–96",
    "eras": [
      "90s",
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "alternative"
    ],
    "region": "Other",
    "desc": "オーストラリアン・ヒップホップのパイオニアで伝説的デュオKoolismの一員。ソロキャリアと並行してTriple Jのヒップホップ番組最長ホストを務め、オーストラリアのヒップホップ文化を育て続けてきた文化的功労者。",
    "sounds": [
      "オーストラリアンヒップホップ",
      "コンシャスビート",
      "ブームバップドラム",
      "ローカルバイブ",
      "Triple Jサウンド",
      "アンダーグラウンドオズ"
    ],
    "artists": [
      "Koolism (デュオパートナー)",
      "Triple J関連",
      "オーストラリアMC多数"
    ],
    "prompts": [
      {
        "type": "クラシック（オーストラリアンアンダーグラウンド）",
        "style": "Australian underground hip hop, Koolism conscious, boom bap, no vocals, instrumental",
        "detail": "[Instrumental] Australian conscious boom bap drum, underground sample, Triple J vibe, 88 BPM, Australian underground conscious boom bap hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（オズコンシャスホップ）",
        "style": "Oz conscious hip hop, modern Australian underground, authentic, no vocals, instrumental",
        "detail": "[Instrumental] modern authentic Australian conscious hip hop beat, clean drum, underground bass, 90 BPM, modern Australian conscious underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（オーストラリアンアイデンティティビート）",
        "style": "Australian identity hip hop, experimental local culture, unique, no vocals, instrumental",
        "detail": "[Instrumental] experimental Australian identity hip hop, unique local culture sonic, creative drum, 86 BPM, experimental Australian identity local culture hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 143,
    "name": "Dialectrix",
    "alias": "",
    "city": "Australia",
    "bpm": "84–96",
    "eras": [
      "2000s",
      "2010s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "alternative"
    ],
    "region": "Other",
    "desc": "Obese Records所属のオーストラリアンアーティスト。「アフリカ中心的ヒップホップ文化とオーストラリア文化のモングレルなミューテーション」と表現するUK・USの影響を独自フィルターで消化したユニークなスタイルを持つ。",
    "sounds": [
      "オーストラリアンアンダーグラウンド",
      "アフリカセントリックビート",
      "Obese Recordsサウンド",
      "ユニーク文化融合",
      "コンシャスビート",
      "ロウエネルギー"
    ],
    "artists": [
      "Obese Records所属アーティスト多数"
    ],
    "prompts": [
      {
        "type": "クラシック（アフロセントリックオズ）",
        "style": "Afrocentric Australian hip hop, underground mongrel, Obese Records, no vocals, instrumental",
        "detail": "[Instrumental] Afrocentric influenced Australian underground drum, culture-blended sample, raw bass, 86 BPM, Afrocentric underground Australian Obese Records hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クロスカルチャービート）",
        "style": "cross-cultural Australian hip hop, modern mongrel fusion, unique, no vocals, instrumental",
        "detail": "[Instrumental] unique cross-cultural Australian hip hop synthesizer, modern drum, fusion bass, 88 BPM, cross-cultural modern unique Australian hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（モングレルフュージョン）",
        "style": "mongrel fusion experimental, unique Australian cultural, abstract, no vocals, instrumental",
        "detail": "[Instrumental] abstract mongrel cultural fusion, experimental Australian drum, creative bass, 84 BPM, abstract experimental mongrel Australian cultural fusion hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 144,
    "name": "Mantra",
    "alias": "",
    "city": "Australia",
    "bpm": "86–96",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "alternative",
      "underground"
    ],
    "region": "Other",
    "desc": "メルボルン/シドニー発のクリーンなヒップホッププロダクションで知られるオーストラリアのプロデューサー。Illyとの「Bring It Back」アルバムなどコンシャスなラップを支えるソウルフルなビートで国内高い評価を得る。",
    "sounds": [
      "クリーンオーストラリアビート",
      "コンシャスヒップホップサウンド",
      "ソウルフルビート",
      "Illyコラボサウンド",
      "クリーンプロダクション",
      "メルボルンバイブ"
    ],
    "artists": [
      "Illy",
      "Pez",
      "Trials",
      "オーストラリアンコンシャスラッパー"
    ],
    "prompts": [
      {
        "type": "クラシック（オーストラリアンコンシャス）",
        "style": "Australian conscious hip hop, Mantra clean soulful, Illy era, no vocals, instrumental",
        "detail": "[Instrumental] clean soulful Australian conscious hip hop drum, sample loop, warm bass, 88 BPM, clean soulful Australian conscious Illy-era hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（クリーンアウォードクオリティ）",
        "style": "clean award-quality Australian hip hop, modern polished conscious, no vocals, instrumental",
        "detail": "[Instrumental] polished modern Australian conscious synthesizer, clean drum pattern, warm bass, 90 BPM, award-quality modern clean Australian conscious hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（オーストラリアンインディーコンシャス）",
        "style": "Australian indie conscious hip hop, experimental, unique local, no vocals, instrumental",
        "detail": "[Instrumental] experimental unique Australian indie conscious production, creative drum, local bass, 86 BPM, experimental indie conscious unique Australian hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 145,
    "name": "Calski",
    "alias": "",
    "city": "Australia",
    "bpm": "82–97",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "neo soul",
      "alternative"
    ],
    "region": "Other",
    "desc": "「オーストラリアで最も革新的なプロデューサー」と称されるビートメイカー。スムースなソウルからラギッドなブームバップまでシームレスに移行できる職人的な柔軟性が最大の強み。国内先進的音楽シーンを牽引。",
    "sounds": [
      "スムースソウル",
      "ラギッドブームバップ",
      "シームレス移行",
      "革新的テクスチャー",
      "オーストラリアン前衛",
      "多様スタイル"
    ],
    "artists": [
      "オーストラリア先進的アーティスト多数"
    ],
    "prompts": [
      {
        "type": "クラシック（スムースソウルブームバップ）",
        "style": "smooth soul boom bap, Calski Australian innovative, versatile, no vocals, instrumental",
        "detail": "[Instrumental] smooth soul sample, versatile boom bap drum, warm bass, seamless texture, 86 BPM, smooth soul boom bap innovative Australian loop [No Vocals]"
      },
      {
        "type": "モダン（イノベーティブオーストラリアン）",
        "style": "innovative Australian hip hop, modern progressive, versatile, no vocals, instrumental",
        "detail": "[Instrumental] progressive innovative synthesizer, modern versatile drum pattern, smooth bass, 88 BPM, innovative progressive modern Australian hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（ラギッドスムースフュージョン）",
        "style": "rugged smooth fusion experimental, Australian progressive, unique, no vocals, instrumental",
        "detail": "[Instrumental] experimental rugged-smooth fusion, unique Australian creative drum, versatile bass, 84 BPM, experimental rugged-smooth fusion progressive Australian hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 146,
    "name": "Youngohm",
    "alias": "Ratthaphong Phoorisit",
    "city": "Bangkok, Thailand",
    "bpm": "130–145",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative"
    ],
    "region": "Other",
    "desc": "タイのヒップホップシーンを牽引するバンコク出身のラッパー兼プロデューサー。中学時代から楽曲制作を始め、2019年の「Do White」はリリース2週間で5500万回再生を突破。タイ語ラップと現代トラップビートを融合した先駆者。",
    "sounds": [
      "タイ語トラップビート",
      "モダンシンセ",
      "808ベース",
      "バンコクストリートバイブ",
      "東南アジアサウンド",
      "アジアントラップ"
    ],
    "artists": [
      "FIIXD",
      "タイシーン全般"
    ],
    "prompts": [
      {
        "type": "クラシック（タイトラップ）",
        "style": "Thai trap hip hop, Youngohm style, Bangkok street modern, no vocals, instrumental",
        "detail": "[Instrumental] modern Thai trap synthesizer, 808 bass, Bangkok street atmosphere, crisp drum pattern, 140 BPM, Thai trap Bangkok urban hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（アジアントラップポップ）",
        "style": "Asian trap pop, modern Thai crossover, viral Southeast Asia, no vocals, instrumental",
        "detail": "[Instrumental] viral Southeast Asian trap pop synthesizer, modern drum, 808 bass, 142 BPM, modern viral Asian trap pop hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（サウスイーストアジアウェイブ）",
        "style": "Southeast Asia wave, experimental Thai trap, regional innovative, no vocals, instrumental",
        "detail": "[Instrumental] experimental Southeast Asian trap wave synthesizer, innovative drum pattern, creative 808, 138 BPM, experimental SE Asian wave innovative Thai trap loop [No Vocals]"
      }
    ]
  },
  {
    "id": 147,
    "name": "FIIXD",
    "alias": "",
    "city": "Khon Kaen / Bangkok, Thailand",
    "bpm": "130–145",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "underground",
      "alternative"
    ],
    "region": "Other",
    "desc": "コーンケーン出身でバンコクに移住した映像学奨学生出身の多才なアーティスト。自身のMVを自ら監督する映像と音楽の二刀流でタイアンダーグラウンドシーンの重要人物となり、The Rapper TVshowでブレイク。",
    "sounds": [
      "タイアンダーグラウンドビート",
      "インディービート",
      "映像的サウンド",
      "ローカルタイバイブ",
      "エクスペリメンタル要素",
      "バンコクアンダー"
    ],
    "artists": [
      "Youngohm",
      "タイアンダーグラウンド全般"
    ],
    "prompts": [
      {
        "type": "クラシック（タイアンダーグラウンドトラップ）",
        "style": "Thai underground trap, FIIXD indie filmmaker style, no vocals, instrumental",
        "detail": "[Instrumental] Thai underground trap synthesizer, indie-filmmaker atmospheric, dark drum pattern, 140 BPM, Thai underground indie dark trap loop [No Vocals]"
      },
      {
        "type": "モダン（ビジュアルアーティストビート）",
        "style": "visual artist hip hop beat, cinematic Thai underground, creative, no vocals, instrumental",
        "detail": "[Instrumental] cinematic Thai underground hip hop synthesizer, creative atmospheric drum, 142 BPM, cinematic creative Thai underground hip hop loop [No Vocals]"
      },
      {
        "type": "実験的（タイインディーアートビート）",
        "style": "Thai indie art beat, experimental visual sound, innovative, no vocals, instrumental",
        "detail": "[Instrumental] innovative experimental Thai indie art sound, visual-inspired drum, creative bass, 138 BPM, experimental innovative Thai indie art hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 148,
    "name": "DIVINE",
    "alias": "Vivian Fernandes",
    "city": "Mumbai, India",
    "bpm": "88–140",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "boom bap",
      "underground",
      "alternative"
    ],
    "region": "Other",
    "desc": "インドのヒップホップ（Gully Rap）を世界に知らしめた立役者。ムンバイのスラム街から這い上がりNaezyとの「Mere Gully Mein」が映画「Gully Boy」の原案に。アジア音楽チャートを席巻するインドヒップホップの象徴的存在。",
    "sounds": [
      "ムンバイストリートビート",
      "Gullyラップサウンド",
      "ヒンディー語×英語バイリンガル",
      "ボリウッド要素",
      "インドストリートバイブ",
      "コンシャスビート"
    ],
    "artists": [
      "Naezy",
      "映画Gully Boy関連",
      "Mass Appeal India",
      "Divine本人"
    ],
    "prompts": [
      {
        "type": "クラシック（Gullyラップムンバイ）",
        "style": "Gully Rap Mumbai, DIVINE style, Indian street hip hop, no vocals, instrumental",
        "detail": "[Instrumental] Mumbai street hip hop beat, Gully rap drum pattern, deep bass, Indian urban atmosphere, 90 BPM, Mumbai Gully rap street hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（インドヒップホップグローバル）",
        "style": "Indian hip hop global, modern Mumbai, Bollywood crossover, no vocals, instrumental",
        "detail": "[Instrumental] modern Indian hip hop synthesizer, global drum pattern, Bollywood influence, warm bass, 92 BPM, modern global Indian hip hop Bollywood crossover loop [No Vocals]"
      },
      {
        "type": "実験的（インドストリートカルチャービート）",
        "style": "Indian street culture beat, experimental Gully, multicultural, no vocals, instrumental",
        "detail": "[Instrumental] experimental multicultural Indian hip hop fusion, street culture drum, creative bass, 88 BPM, experimental multicultural Indian street culture hip hop loop [No Vocals]"
      }
    ]
  },
  {
    "id": 149,
    "name": "Ramengvrl",
    "alias": "Rachel Mulia",
    "city": "Jakarta, Indonesia",
    "bpm": "130–150",
    "eras": [
      "2010s",
      "2020s"
    ],
    "styles": [
      "trap",
      "alternative",
      "neo soul"
    ],
    "region": "Other",
    "desc": "ジャカルタ出身の女性ラッパー兼プロデューサー。東南アジアでは希少な女性MCとしての存在感を発揮し、トラップとR&Bを自在に操るマルチタレント。英語・インドネシア語バイリンガルでインドネシアのヒップホップシーンに新風を吹き込む。",
    "sounds": [
      "インドネシアトラップ",
      "R&Bフュージョン",
      "バイリンガルビート",
      "東南アジアフィメール",
      "モダンシンセ",
      "ジャカルタストリート"
    ],
    "artists": [
      "東南アジアヒップホップシーン全般"
    ],
    "prompts": [
      {
        "type": "クラシック（インドネシアフィメールトラップ）",
        "style": "Indonesian female trap hip hop, Ramengvrl bilingual R&B, no vocals, instrumental",
        "detail": "[Instrumental] Indonesian trap synthesizer, female artist energy, R&B trap drum pattern, 140 BPM, Indonesian female trap R&B bilingual hip hop loop [No Vocals]"
      },
      {
        "type": "モダン（SEアジアフィメールトラップ）",
        "style": "SE Asia female trap, modern Jakarta, bilingual trendsetting, no vocals, instrumental",
        "detail": "[Instrumental] modern SE Asian female trap synthesizer, Jakarta urban drum, 808 bass, 142 BPM, modern SE Asian female trendsetting trap loop [No Vocals]"
      },
      {
        "type": "実験的（インドネシアR&Bトラップフュージョン）",
        "style": "Indonesian R&B trap fusion, experimental bilingual, innovative, no vocals, instrumental",
        "detail": "[Instrumental] experimental bilingual Indonesian R&B trap fusion synthesizer, creative drum, 138 BPM, experimental innovative Indonesian R&B trap fusion loop [No Vocals]"
      }
    ]
  }
];
