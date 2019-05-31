/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [[
	{
		"basic":true,
		"name":"我喜歡",
		"singer":"UnKnown",
		"img":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
	},
	{
		"name":"孤單的貝多芬",
		"singer":"葉巧琳",
		"img":"https://v1.itooi.cn/tencent/pic?id=000yprlh4H1TCB",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=34497542",
		"lrc":"[ti:孤单的贝多芬] [ar:叶巧琳] [al:孤单的贝多芬] [by:] [offset:0] [00:00.00]孤单的贝多芬 - 叶巧琳 (Mischa Ip) [00:08.60]词：林若宁 [00:17.20]曲：Guy Robin,Laura White,Simon Pollitt [00:25.80]小店铺卖热诚要推荐你冷门货 [00:28.48]生意不算多也可发展 [00:30.83]这一个卖艺人结他每晚也演奏 [00:33.53]纵使不见有天出唱片 [00:36.05]还有跳街舞队员转圈转了百多转 [00:38.82]拍出了小众歌舞片 [00:41.01]行人听不见哑剧团也许节奏太深奥 [00:43.83]有半位观众都要演 [00:45.93]浪漫就是这份勇 [00:47.70]最孤单 贝多芬 [00:50.71]浪漫就是这份勇 [00:52.98]听不出欢呼 也开心 [00:55.79]浪漫就是这份勇 [00:58.14]得不到知音 已经足够开过心 [01:01.44]浪漫就是这份勇 yeah yeah [01:04.70]这份勇 yeah yeah [01:08.76] [01:17.04]这一个运动员缺少了世界打气 [01:20.18]最少天天跑快点 [01:22.67]这一个大自然每天种满了蔬果 [01:25.20]心血一斤几块钱 [01:27.55]浪漫定要 有些疯癫 [01:30.43]别讲太多预算 [01:32.89]有些疯癫 但是脚踏实地 [01:35.46]好一套奋斗片 [01:37.50]浪漫就是这份勇 [01:39.43]最孤单 贝多芬 [01:42.38]浪漫就是这份勇 [01:44.53]听不出欢呼 也开心 [01:47.48]浪漫就是这份勇 [01:49.70]得不到知音 已经足够开过心 [01:52.98]浪漫就是这份勇 yeah yeah [01:56.31]这份勇 yeah yeah [01:58.53]无论我没胜利道 无论我未够大路 [02:03.25]无论缺乏注目度 偏僻的小领土 [02:08.49]还是向自我服务 还是拒绝去让步 [02:13.55]还是制造发现号 yeah yeah [02:18.76]浪漫就是这份勇 [02:20.67]最孤单 贝多芬 [02:23.94]浪漫就是这份勇 [02:25.83]听不出欢呼 也开心 [02:29.03]浪漫就是这份勇 [02:30.98]得不到知音 已经足够开过心 [02:34.25]浪漫就是这份勇 yeah yeah [02:37.55]这份勇 yeah yeah [02:39.49]浪漫就是这份勇 [02:41.28]再孤僻 也缤纷 [02:43.99] [02:44.51]浪漫就是这份勇 [02:46.49]每一粒音阶 最衷心 [02:49.47]浪漫就是这份勇 [02:51.67]不需要开灯 去彰显我的信心 [02:54.95]浪漫就是这份勇 yeah yeah [02:58.30]这份勇 yeah yeah"
	},
	{		
		"name":"存在",
		"singer":"曾樂彤",
		"img":"https://v1.itooi.cn/tencent/pic?id=001mTShc3AOOgF",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=001mTShc3AOOgF",
		"lrc":"[ti:存在] [ar:曾乐彤] [al:存在] [by:] [offset:0] [00:00.87]存在 - 曾乐彤 [00:02.19]词 : 吴奇琦 [00:02.79]曲：余曦陶 [00:02.92]编曲 : Cousin Fung/余曦陶 [00:03.15]监制 : Cousin Fung/Ronnie Ng [00:03.35]OP : EEG Music Publishing Limited [00:13.24]这旧照 永未细望过 [00:16.62]镜头里 少年同伴三几个 [00:19.91]正在笑 那人正是我 [00:22.76]似乎我 往日还活得不错 [00:26.07]懂了太少 想了太多 [00:29.18]竟挂念那天 的我能那么 [00:32.37]放肆能那么 [00:33.81]不理会结果 不会害怕闯祸 [00:38.73]这城市 永未细望过 [00:42.05]已习惯 昼夜麻木的经过 [00:45.37]试图去 证实我活过 [00:48.37]却认错 镜内那陌生的我 [00:51.60]想了太多 懂了太少 [00:54.53]当压力已逼 得你在折腰 [00:57.79]志气磨掉了 [00:59.37]一切亦习惯 得眼泪懒得掉 [01:03.76]快乐变少 信念变少 [01:06.76]再别要统统失色变调 [01:09.10]会追的美梦变少 [01:11.63]继续变少 [01:13.20]破灭到甘心苏醒过来了 [01:15.92]今天纵是 [01:17.06]幼稚不可以 像往昔那样容易 [01:21.77]这一生 只得一次 [01:23.45]为何还在怕 存在没有意思 [01:42.82]确定了 哪样最重要 [01:46.07]却又变 世俗了 又不懂了 [01:49.55]厌倦了 却又接受了 [01:52.46]笑着勉强地说 这不紧要 [01:55.35]想了太多 懂了太少 [01:58.61]舍弃掉了初衷却未算少 [02:01.87]这叫成熟 看通了 [02:04.14]或你昨天信条已改掉 [02:07.65]快乐变少 信念变少 [02:10.91]再别要统统失色变调 [02:13.14]会追的美梦变少 [02:15.62]继续变少 [02:17.18]破灭到甘心苏醒过来了 [02:19.86]今天纵是 [02:21.10]幼稚不可以 像往昔那样容易 [02:25.74]得一生 不敢一试 [02:27.49]来日才后悔 存在没有意思 [02:58.62]快乐变少 信念变少 [03:01.99]怕就要统统失色 [03:03.87]变调到心中那道烈火 [03:06.50]再没燃烧 [03:08.50]至明了抛低的竟最重要 [03:11.06]今天纵是 [03:12.26]幼稚得可以 没往昔那样容易 [03:16.90]偏偏想 偏偏可以 [03:18.57]拿来提示我 其实活过我知"
	},
	{
		"name":"我們的下雨天",
		"singer":"Gingerbread/明福俠",
		"img":"http://p1.music.126.net/1Rsy7sofTFB5z-wsv7PjpQ==/109951164096532844.jpg",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=1367414244",
		"lrc":"[00:00.00] 作曲 : 黄良升 [00:01.00] 作词 : 小美 [00:09.97]监制：Doughboy / WE5 [00:11.51]编曲：Doughboy / WE5 [00:15.65] [00:20.32]Auto-Tom:	又独行旧地 遇着拦路雨洒遍地 [00:27.83]	路静人寂寞 这痛哭的雨 [00:32.05]	途人懒去作躲避 [00:36.23]明福 : 这雨中失意空间 点点雨似渗出眼泪 [00:43.94]Auto-Tom:	我置身失意空间 盼雨水冲去 [00:48.15]	彷徨愁怀愁思心碎滋味 [00:51.60]明福 : 对昨天心已死 [00:54.05]Auto-Tom: 只想不记起 [00:56.09]合	：遗忘眼里暗带着希冀 [01:01.80]Auto-Tom: 在某雨夜我心爱别离 [01:05.36]明福 : 置身雨中哭泣作逃避 [01:09.38]Auto-Tom:	仍然情深我未淡忘 [01:12.68]明福 : 看见雨点假想她在旁 [01:17.48] [01:17.76]Auto-Tom:	风急雨下假装上路忙 [01:21.29]明福 : 那知我心没法可释放 [01:25.29]合	：仍怀念你一再往后看 [01:30.90]合	：爱已碰灰 雨也变灰 [01:36.91]明福 :	深宵雨里陌路徘徊	孤单的心开着舞会 [01:45.39]合	：	这个雨天 无言流了泪 [01:53.10]Auto-Tom:	急风送陌路人 [01:56.75]明福 : 雨中归去 [02:00.39] [02:01.73]Auto-Tom:	又独行旧地 遇着拦路雨洒遍地 [02:08.79]	路静人寂寞 这痛哭的雨 [02:13.70]	途人懒去作躲避 [02:16.93]明福 : 这雨中失意空间 点点雨似渗出眼泪 [02:24.78]Auto-Tom:	我置身失意空间 盼雨水冲去 [02:29.43]	彷徨愁怀愁思心碎滋味 [02:33.30]明福 : 对昨天心已死 [02:35.54]Auto-Tom: 只想不记起 [02:37.57]合	：遗忘眼里暗带着希冀 [02:43.31]Auto-Tom: 在某雨夜我心爱别离 [02:47.02]明福 : 置身雨中哭泣作逃避 [02:50.82]Auto-Tom:	仍然情深我未淡忘 [02:54.28]明福 : 看见雨点假想她在旁 [02:59.26] [02:59.809]Auto-Tom:	风急雨下假装上路忙 [03:02.87]明福 : 那知我心没法可释放 [03:07.36]合	：仍怀念你一再往后看 [03:12.07]合	：爱已碰灰 雨也变灰 [03:18.73]明福 :	深宵雨里陌路徘徊	孤单的心开着舞会 [03:26.88]合	：	这个雨天 无言流了泪 [03:34.58]Auto-Tom:	急风送陌路人 [03:38.32]明福 : 雨中归去"
	},
	{	
		"name":"手足",
		"singer":"Boy'z",
		"img":"https://v1.itooi.cn/tencent/pic?id=000tkzg60FMFUV",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=000tkzg60FMFUV",
		"lrc":"[ti:手足] [ar:Boy'z] [al:BOYZ Can Cook] [by:] [offset:0] [00:00.00]手足 - Boy'z (BOYZ) [00:05.93]词：周耀辉 [00:11.87]曲：黄思俊 [00:17.81]编曲：吴国恩 [00:23.75]我要有信心 [00:25.75]却飘得仿佛水母 [00:28.68] [00:29.31]我要看远景 [00:31.41]却始终仿佛守株兔 [00:34.96]天天有烦恼 [00:37.10]怪世界太讲彩数 [00:40.64]你会说有时大嗌很好 [00:45.53] [00:46.34]两个要上街 [00:48.35]喝啤酒必须冰冻 [00:51.88]两个去唱 K [00:53.48] [00:54.00]由得我借歌哭诉 [00:57.27]想得到得不到 [00:59.98]哪个有心知道 [01:02.83] [01:03.96]有人为我赶到 [01:06.72] [01:08.49]手足只得两个字 [01:11.32]所以只有两个知 [01:14.16]今晚很想见见面 [01:16.95]想散心心照得你可以 [01:19.76]难解释难休息 [01:22.56]城市太多争霸战 [01:25.40]各有各去应战天光冲刺 [01:31.18]手足只得两个字 [01:33.91]感觉点只有你会知 [01:36.73]不必多讲半个字 [01:39.55]一辈子只有跟你可以 [01:42.31]谁失踪谁失忆 [01:45.17]城市太少不会变 [01:48.01]各有各去应战 [01:51.17] [01:52.06]天黑相见 [01:54.92] [02:05.34]与女友嗌交 [02:07.42]我解释她听不到 [02:10.97]厌到要转工 [02:13.02]见很多次都找不到 [02:15.92] [02:16.56]天天有烦恼 [02:18.70]怪世界太想不到 [02:21.68] [02:22.26]你会说会挨就过得到 [02:25.95] [02:27.52]手足只得两个字 [02:30.37]所以只有两个知 [02:33.20]今晚很想见见面 [02:35.99]想散心心照得你可以 [02:38.83]难解释难休息 [02:41.60]城市太多争霸战 [02:44.46]各有各去应战天光冲刺 [02:50.22]手足只得两个字 [02:52.92]感觉点只有你会知 [02:55.75]不必多讲半个字 [02:58.45]一辈子只有跟你可以 [03:01.38]谁失踪谁失忆 [03:04.21]城市太少不会变 [03:07.06]各有各去应战 [03:11.11]天黑相见 [03:14.16] [03:16.08]担起了太多 [03:18.06]轻松却太少 [03:21.00] [03:21.52]方知道这就叫成年 [03:25.01] [03:27.22]一起去眼浅 [03:29.58]一起去上链 [03:32.82]方知道和谁极相似 [03:37.62] [03:38.16]手足只得两个字 [03:40.98]所以只有两个知 [03:43.81]今晚很想见见面 [03:46.56]想散心心照得你可以 [03:49.42]难解释难休息 [03:52.22]城市太多争霸战 [03:55.08]各有各去应战天光冲刺 [04:00.82]手足只得两个字 [04:03.51]感觉点只有你会知 [04:06.34]不必多讲半个字 [04:09.18]一辈子只有跟你可以 [04:12.00]谁失踪谁失忆 [04:14.86]城市太少不会变 [04:17.68]各有各去应战 [04:21.15] [04:21.68]天黑相见"
	},
	{	
		"name":"可一可再",
		"singer":"陳奕迅",
		"img":"https://v1.itooi.cn/tencent/pic?id=003cN4kC3hK8QC",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=003cN4kC3hK8QC",
		"lrc":"[ti:可一可再] [ar:陈奕迅/eason and the duo band] [al:L.O.V.E.] [by:] [offset:0] [00:00.00]可一可再 - 陈奕迅 (Eason Chan)/eason and the duo band [00:00.44]词：陈咏谦 [00:00.89]曲：陈奕迅 [00:01.34]编曲：the duo band [00:01.79]监制：王双骏 [00:02.24]回味那日子 回望那地方 [00:08.30]乘着印象依稀 想听你讲 [00:14.40]团聚那盛景 临别那泪光 [00:20.56]全部摄入相簿 翻开细看 [00:26.91]仍是翠绿的 常做破坏的 [00:32.62]来自某异乡的 无限笑容的 [00:38.61]平静友善的 天生形状怪异的 [00:44.69]全部也是真的 多么好看 [00:52.22]可不可 想不想 再次见面 [00:58.12]再拍些新的照片 [01:04.13]听一听 讲一讲 从而互勉 [01:09.12]不想理世界怎么变迁 [01:14.62]成熟了面孔 犹幸更健康 [01:20.57]轮住诞下娃娃 松不了绑 [01:26.58]还是爱幻想的 提步往前方 [01:32.55]同在岁月中 苦苦找答案 [02:02.98]回味那日子 回望那地方 [02:08.60]乘着印象依稀 想听你讲 [02:14.62]团聚那盛景 临别那泪光 [02:20.58]全部摄入相簿 翻开细看 [02:28.20]可不可 想不想 再次见面 [02:34.13]再拍些新的照片 [02:40.20]听一听 讲一讲 从而互勉 [02:45.04]只关注你我怎么蜕变 [02:51.07]爱是这样 你认识我 [02:57.03]只盼望每个都发亮 [03:03.04]爱是这样 我认识你 [03:09.05]不接受你那欢笑被劫抢 [03:15.06]爱是这样 我目睹了 [03:20.98]不再是纯幻想 [03:26.67]回味那日子 回望那地方 [03:32.57]乘着印象依稀 想听你讲 [03:38.58]团聚那盛景 临别那泪光 [03:44.58]全部摄入相簿 翻开细看"		
	},
	{
		"name":"啱嗮我",
		"singer":"王琪飛",
		"img":"https://v1.itooi.cn/tencent/pic?id=003Dj1Ui2ZSPsl",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=003Dj1Ui2ZSPsl",
		"lrc":"[ti:啱晒我] [ar:王琪飞] [al:啱晒我] [by:] [offset:0] [00:00.00]啱晒我 - 王琪飞 [00:02.69]词：李嘉裕 [00:05.38]曲：冯翰銘 [00:08.07]编曲：戴晋揚 [00:10.77]监制：冯翰铭 [00:13.46]Hey 搏杀每日八粒钟 [00:15.83] [00:16.74]仍是会怕失控 再英勇 [00:19.46] [00:20.10]也腰酸背痛 [00:21.65] [00:23.08]Hey 搏到假日也转送 [00:25.51] [00:26.43]年月哪会指控 我心血 [00:29.65]已天天进贡 [00:30.98] [00:31.54]成日要 忍忍忍 [00:33.40] [00:34.15]忍会忍到发癫 [00:35.53] [00:36.18]节奏太保守要改变 [00:38.27] [00:38.86]由我搭配试一遍 [00:41.17]难道靠 等等等 [00:43.14] [00:43.74]等来缓和风险 [00:45.34] [00:45.94]最破格也会去挑战 [00:48.54]跳脱我主线 [00:50.05] [00:50.79]无聊吧 通通通通 [00:53.38] [00:54.07]睇我搞边科 [00:55.19] [00:55.81]绑手绑脚太过傻 [00:57.55] [00:58.25]拘束转个弯打破 [01:00.00] [01:00.79]烦闷 通通通通 [01:02.97] [01:03.65]不会再罗嗦 [01:04.83] [01:05.53]歌曲起势播 [01:06.72] [01:07.30]点会错 啱晒我 [01:09.60] [01:31.02]Hey 放放脱力那双臂 [01:33.46] [01:34.37]闲日逛逛书店 看出戏 [01:37.00] [01:37.59]吊颈抖下气 [01:39.04] [01:40.66]Hey 储满压力那幽怨 [01:43.12] [01:44.01]来换购礼品券 要出国 [01:46.69] [01:47.30]叹餐饱至算 [01:48.48] [01:49.09]谁亦有 天生资质 [01:51.56] [01:52.07]要即兴发挥 [01:53.12] [01:53.63]你与我各有各宝贵 [01:55.73] [01:56.43]命数似四季演替 [01:58.67]谁习惯 卑躬屈膝 [02:01.48]来奉承边位 [02:02.92] [02:03.57]有智慧哪怕你克制 [02:05.48] [02:06.05]我有我手掣 [02:07.48] [02:09.57]无聊吧 通通通通 [02:12.75]睇我搞边科 [02:14.05] [02:14.57]绑手绑脚太过傻 [02:16.27] [02:17.04]拘束转个弯打破 [02:18.82] [02:19.47]烦闷 通通通通 [02:22.40]不会再罗嗦 [02:23.55] [02:24.29]歌曲起势播 [02:25.47] [02:26.07]点会错 啱晒我 [02:28.53] [02:48.31]无聊吧 通通通通 [02:50.73] [02:51.47]睇我搞边科 [02:52.58] [02:53.34]绑手绑脚太过傻 [02:54.98] [02:55.83]拘束转个弯打破 [02:57.53] [02:58.16]烦闷 通通通通 [03:00.45] [03:01.14]不会再罗嗦 [03:02.21] [03:03.07]歌曲起势播 [03:04.17] [03:04.80]点会错 啱晒我 [03:07.07] [03:07.68]无聊吧 通通通通 [03:09.83]无聊吧 通通通通 [03:12.95]绑手绑脚太过傻 [03:14.43] [03:15.21]拘束转个弯打破 [03:17.14] [03:17.94]烦闷 通通通通 [03:19.92] [03:20.62]不会再罗嗦 [03:21.70] [03:22.53]歌曲起势播 [03:23.64] [03:24.25]点会错 啱晒我"		
	},
	{		
		"name":"心花怒放",
		"singer":"容祖兒/陳奐仁",
		"img":"https://v1.itooi.cn/tencent/pic?id=002vIsOo2oVynM",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=002vIsOo2oVynM",
		"lrc":"[ti:心花怒放] [ar:容祖儿] [al:All Delicious Collection 快歌精选] [by:] [offset:0] [00:00.00]心花怒放 (百老汇广告歌) - 容祖儿 (Joey Yung)/陈奂仁 [00:02.38]词：周耀辉 [00:04.76]曲：陈奂仁 [00:07.14]平日我唱K歌 [00:10.82]平日我有把锁 [00:14.84]还是我习惯独个生活太耐想你来释放 [00:24.50]一直等一种感觉今天终于有点狂 [00:32.03]不想正常心花正怒放 [00:36.60]春风给我按摩 [00:40.55]仿佛有满天樱花抱起我 [00:44.59]街灯使我发光 [00:48.50]仿佛千百串烟花庆祝我 [00:53.28]喜欢你喜欢我 [00:56.78]其实试过很多 [01:00.82]其实信过因果 [01:04.92]还是我没有学过享受爱情想你来挥霍 [01:14.54]一直等一种感觉今天终于有点狂 [01:22.06]不想正常心花正怒放 [01:26.61]春风给我按摩 [01:30.51]仿佛有满天樱花抱起我 [01:34.49]街灯使我发光 [01:38.59]仿佛千百串烟花庆祝我 [01:42.61]不必想到太多 [01:46.57]只知道你的天花也亲我 [01:52.81]不必给我太多 [01:54.64]请将千百扎心花送给我 [01:59.43]喜欢你喜欢我 [02:02.56]差些遗忘了快乐 [02:06.52]差些从此专心工作 [02:11.06]然后似疯也像狂的拍拖 [02:18.06]春风给我按摩 [02:22.63]仿佛有满天樱花抱起我 [02:26.55]街灯使我发光 [02:30.66]仿佛千百串烟花庆祝我 [02:34.51]不必想到太多 [02:38.56]只知道你的天花也亲我 [02:42.61]不必给我太多 [02:46.50]请将千百扎心花送给我 [02:50.69]喜欢你喜欢我 [02:54.31]春风给我按摩 [02:58.18]仿佛有满天樱花抱起我 [03:02.51]街灯使我发光 [03:06.56]仿佛千百串烟花庆祝我 [03:10.55]不必想到太多 [03:14.51]只知道你的天花也亲我"		
	},
	{		
		
		
				
		"name":"星戀",
		"singer":"凌栢涛",
		"img":"https://v1.itooi.cn/tencent/pic?id=0022wXZV3R977b",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=0022wXZV3R977b",
		"lrc":"[ti:星恋] [ar:凌栢涛] [al:星恋空] [by:] [offset:0] [00:00.00]星恋 (Star Love) - 凌栢涛 [00:10.00]词：Kelly Yan [00:20.00]曲：林佑陞 [00:30.01]你是我 的小秘密 [00:33.52] [00:37.14]无论有没有身份 [00:41.03] [00:44.10]从没有多少戏份 [00:48.90] [00:49.91]学会懂得如何安份 [00:54.56] [00:58.24]宇宙里 千亿个人 [01:01.80] [01:05.34]无奈已被你区分 [01:09.28] [01:12.39]来为你充当养份 [01:16.88] [01:18.05]在暗黑遵照我本份 [01:24.09] [01:24.73]愿化作一颗星 来做你的风景 [01:30.49] [01:31.55]泪已沾湿了午夜亦都只可故作安静 [01:38.20] [01:38.71]愿化作一颗星 天光了都不必叫醒 [01:45.04] [01:46.53]埋于天边不要留证 [01:52.04] [02:08.85]要自觉 不可放任 [02:12.29] [02:15.92]如月照让我安枕 啊噢 [02:21.76] [02:23.00]明月哪须讲责任 [02:27.60] [02:28.57]直到星星对你倾心 [02:34.47] [02:35.22]愿化作一颗星 来做你的风景 [02:41.31] [02:42.20]泪已沾湿了午夜亦都只可故作安静 [02:48.61] [02:49.32]就化作一颗星 天光了都不必叫醒 [02:55.49] [02:57.11]埋于漆黑不要天清 [03:02.62] [03:03.46]让我作一颗星 留住最好风景 [03:09.72] [03:10.42]用那星轨去透露痕迹 [03:14.36]只得我能做证 [03:17.66]让我这一颗星 保守这最灿烂幻影 [03:24.48] [03:25.42]留于心底不要力证 [03:30.39] [03:32.53]埋于天边不要留证 [03:37.51] [03:40.06]由这点点星宿 来作证"
	},
	{	
		"name":"~趣緻的響鈴~Drunk Text Me",
		"singer":"Serrini 樹妮妮",
		"img":"http://p1.music.126.net/5fhDMiBRRhc-dTCTrg0ngw==/109951163217448220.jpg?param=1000y1000",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=549354758",
		"lrc":"[by:KiuSerni] [00:00.00] 作曲 : Serrini [00:01.00] 作词 : Serrini [00:03.00] 编曲：Hirsk [00:11.00]独白：Drunk Text Me [01:22.00]独白：其实，嗰次打边炉既时候 Me [01:27.00]我已经好想好想同你讲… [00:14.90]就趁 我喝醉的一次 笑著说 I love you [00:21.43]就趁醉到有点诗意 靠近你 I love you [00:28.37]即使我被你一笑带过 你也尽责 任来照顾 [00:35.56]就趁我自制再凋零 把你片刻的禁锢 [00:48.14]就趁 我喝醉的一次 靠近你 I love you [00:54.98]念到我过去的失意 看著你 I love you [01:01.98]即使你会笑著矫正我 「我地会友谊永固」 [01:09.02]就算我自信再凋零 不怕你睇穿我噜 [01:34.26]问我再要说谎几次 会习惯 I hide the truth [01:40.92]让我借醉再不经意 趁乱说 I love you [01:47.85]即使我被你一笑带过 你也不会暗藏 厌恶 [01:54.89]就趁我乱唱歌不停 把你耳朵都禁锢 [02:06.02]问到你也会否可以 靠近我 爱してる [02:12.65]习惯看我撒谎的你 够尽兴 キズしてる [02:19.70]深知你最爱是嘲笑我 我也未会暗藏厌恶 [02:26.64]自信我引你 笑不停 这也なんか大丈夫 [02:35.69]念到你再腼腆不已 我就更obsessed with you [02:42.57]任我再吓怕你几次 你亦会 时常维护 [02:49.61]一天你扮醉就亲吻我 [02:53.61]我就ready to make out with you [02:56.54]我像最趣緻的响铃 一浸已经可以噜"
	},
	{
		"name":"雙雙",
		"singer":"李幸倪",
		"img":"http://p1.music.126.net/F_PG27fFQzojH2n96lK4-A==/17686744044504286.jpg",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=399364830",
		"lrc":"[ti:双双] [ar:李幸倪] [al:beGin] [by:] [offset:0] [00:00.00]双双 - 李幸倪 (Gin Lee) [00:05.48]词：林若宁 [00:10.96]曲：Eric Kwok [00:16.44]编曲：张子坚 [00:21.92]卿卿我我幸运儿 [00:25.27]天天春风得意 [00:28.12] [00:28.77]双双向往恋爱这大志 [00:33.52] [00:36.00]嘻嘻哈哈旧阵时 [00:39.22]轻轻扣着尾指 [00:42.58]我脸颊小小 [00:44.35]你亦个子小小发誓毕生永志 [00:48.33] [00:50.01]岁岁年年的飞奔 [00:53.53]役役营营足印 [00:56.22] [00:56.75]当你走得远远想不起初吻 [01:01.34] [01:04.23]断线下沉的风筝 [01:07.33]跟我飞过多少个小镇 [01:10.88]旧时路太远面前路 [01:13.20]却太近共谁落土生根 [01:16.99]几多可笑诺言 被作废了 [01:20.37]几多优美落霞记得多少 [01:23.98]匆匆岁月 丝丝幼苗 [01:27.48]失恋过太少 [01:31.10]几经波折二人又再见了 [01:34.56]几多牵挂二人说不出口不紧要 [01:39.02]不懂说话 只可以对你笑 [01:44.50] [01:57.27]漂漂泊泊又六年 [02:00.50]依依稀稀的脸 [02:03.19] [02:04.13]偏偏恋爱比世界善变 [02:08.77] [02:11.38]每每寂寥的今天 [02:14.46]总会翻揭相簿来相见 [02:17.91]在何地再见 [02:19.71]在何日说再见在宁静的春天 [02:24.02]几多可笑诺言被作废了 [02:27.42]几多优美落霞记得多少 [02:30.94]匆匆岁月 丝丝幼苗 [02:34.62]失恋过太少 [02:38.22]几经波折二人又再见了 [02:41.57]几多牵挂二人说不出口不紧要 [02:46.00]不懂说话 只可以对你笑 [02:52.35] [03:03.00]相亲相爱旧时共你说笑 [03:06.20]东奔西扑现时太多纷扰 [03:09.82]匆匆岁月 丝丝爱情 [03:13.40]恋不到破晓 [03:16.83]几经波折二人又再见了 [03:20.28]天空海阔二人见识分手都多了 [03:24.85]花总会谢 一想你却会笑 [03:30.76] [03:35.95]生生世世又是谁 [03:38.83] [03:39.40]挥都挥之不去 [03:42.05] [03:43.03]始终有你栖息于心里"
	},
	{
		"name":"動態回顧",
		"singer":"石咏莉",
		"img":"https://p2.music.126.net/zQCVjJWk9AE5G4kYA8MJhg==/109951164078446205.jpg",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=1335803260",
		"lrc":"[ti:动态回顾] [ar:石咏莉] [al:动态回顾] [by:] [offset:0] [00:00.54]动态回顾 - 石咏莉 [00:01.94]词：Patrick Tang [00:02.47]曲：Ariel Lai [00:03.00]编曲：Ariel Lai [00:03.61]制作人：Wallace Lam [00:15.96]一堆的忆记过往的希冀 [00:19.26]再次发现却要那么嫌弃 [00:22.75]手机的那光景太稀奇 [00:30.00]当初可跟你悠闲什么都不理 [00:33.52]穿梭街角到处也可游戏 [00:37.09]简单的也可当作新奇 [00:43.09]都已是忘记强迫使我再三想你 [00:50.42]动态一再煽动怎么对自己 [00:57.16]怎么可以承认挂念你 [01:00.57]怎么释放然后再可收起 [01:04.59]从前一切我又妒忌 [01:08.13]为何想你没有限期 [01:11.38]怎么可以回味抱着你 [01:14.83]怎么会你然后再花心机 [01:18.80]为何迫我继续这么的记起 [01:24.19]宁愿以后再不想你 [01:30.47]当天的分秒每下的心跳 [01:33.89]过去片段记载太多微笑 [01:37.48]讲不出那感触太萧条 [01:44.46]不安的天气完全地超越预期 [01:48.13]怎么不似过去那么完美 [01:51.76]今天所有都也太卑微 [01:57.48]都已是忘记强迫使我再三想你 [02:05.07]动态一再煽动怎么对自己 [02:11.69]怎么可以承认挂念你 [02:15.25]怎么释放然后再可收起 [02:19.29]从前一切我又妒忌 [02:22.75]为何想你没有限期 [02:26.05]怎么可以回味抱着你 [02:29.38]怎么会你然后再花心机 [02:33.44]为何迫我继续这么的记起 [02:38.84]难道再没自由 [02:41.34]想你难心死太多后来未放弃 [02:47.30]从来没人关注我重温都撑不起 [02:54.43]早已被遗弃怕分享当我逃避你 [03:01.41]无谓扮忘记偷偷想记起 [03:12.33]怎么可以承认挂念你 [03:15.74]怎么可以疲累也不心死 [03:19.76]从前一切我又妒忌 [03:23.21]然而恋爱亦有限期 [03:26.48]不想一再承认爱着你 [03:29.91]不可一世期待再可一起 [03:33.94]为何逼我继续这么的记起 [03:39.26]宁愿以后记不起你"
	},
	{		
		"name":"怪美的",
		"singer":"蔡依林",
		"img":"https://v1.itooi.cn/tencent/pic?id=0041JA4C1lGft2",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=0041JA4C1lGft2",
		"lrc":"[ti:怪美的] [ar:蔡依林] [al:] [by:] [offset:0] [00:00.30]怪美的 - 蔡依林 [00:00.97]作词：吴青峰 [00:01.00]作曲：洪筠惠 Yun-Hui Hung [00:01.13]OA/OC：Rhys Fletcher/ 杨宥闲 Stan Dubb / Richard Craker / 蔡依林 / Starr Chen 陈星翰 [00:01.76]OP：林暐哲音乐社有限公司 / 凌时差音乐制作有限公司 / 跳蛋工厂有限公司 [00:02.75]SP：Universal Ms Publ Ltd Taiwan [00:02.95]OP：振颤音乐有限公司 [00:03.24]SP：Sony Music Publishing ( Pte ) Ltd. Taiwan Branch [00:09.82]垂涎的邪恶 陪 我长大 [00:19.30]在软烂中生长 社会 营养 [00:28.56]过去坑疤的让我站稳了 [00:30.94]那些神丑的评谁乱正的 [00:33.41]喔我都笑哭了 [00:39.38]这什么标准急着决定适者生存 [00:46.30]爱我恨我非我 [00:48.19]有一些外在我来自内在我 [01:08.26]听谁说错的对的 [01:11.65]说美的丑的 [01:14.10]若问我我看我说 [01:18.09]我怪美的 [01:29.73]看不见我的美是你瞎了眼 [01:34.60]称赞的嘴脸却转身吐口水 [01:39.53]审美的世界谁有胆说那么绝对 [01:46.27]真我假我自我看今天这个我 [01:51.14]想要哪个我 [02:07.06]听谁说错的对的 [02:10.42]说美的丑的 [02:12.88]若问我我看我说 [02:16.91]我怪美的 [02:28.57]谁来推我一把On to the next one [02:30.73]一路背着太多道德活着令人会喘 [02:33.15]任谁去伤去想去讲不相关就别管 [02:35.52]太婉转的相处灵魂拉扯左右为难 [02:38.06]正负能量全都吃掉 [02:39.78]美的丑的自有他存在的必要 [02:42.24]爱恨随你各自喜好 [02:43.55]拒绝你的伪善拥抱 [02:45.10]想要活得显耀回应心中恶之必要 [02:47.52]谁说错的对的 [02:49.67]说美的丑的 [02:52.08]若问我我说我呢怪美的"		
	}
],
[
	{
		"basic":true,
		"name":"跑步",
		"singer":"",
		"img":"http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_1492897_0.jpg"
	},
	{
		"name":"長相廝守",
		"singer":"TONICK",
		"img":"https://v1.itooi.cn/tencent/pic?id=0045opgo4NUNxl",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=0045opgo4NUNxl",
		"lrc":"[ti:长相厮守 (《救僵清道夫》 电影主题曲)] [ar:ToNick] [al:不停站] [by:] [offset:0] [00:00.00]长相厮守 (《救僵清道夫》 电影主题曲) - ToNick [00:00.39]词：梁栢坚/姜柠乐 [00:00.79]曲：ToNick [00:01.18]编曲：ToNick [00:01.58]监制：Adrian Chan/ToNick [00:01.98]难道我可以扭转宿命 [00:04.67]重遇你一次 [00:07.90] [00:08.59]难道故事终结早已注定 [00:12.28]没法制止 [00:15.29]其实我不理一切 [00:17.42]挑战拼命试 [00:19.27]攀险峰千次万次 [00:22.16]沿路满地布着刺 [00:24.52]也没有在意 [00:26.05]即使伤过无数次 [00:28.44]仍会愿意 [00:32.29] [00:42.51]回望最初 漆黑里紧张的碰撞 [00:46.81]雷电重击 在一刻交错 [00:50.26]不安神情惊慌 [00:52.35] [00:52.89]还觉惊叹仿徨 [00:55.69]然后某刻 静默时简单的对望 [01:00.21]然后发展 逐渐的交往 [01:03.68]凶险齐来抵挡 [01:05.67] [01:06.24]还会给我护航 [01:08.54] [01:10.27]纵路途满是困阻 [01:13.04]问题或变化 [01:15.29]不再可怕 [01:19.50]去吧 [01:21.94]难道我可以扭转宿命 [01:24.63]重遇你一次 [01:28.11] [01:28.94]难道故事终结早已注定 [01:32.25]没法制止 [01:35.09]其实我不理一切 [01:37.33]挑战拼命试 [01:39.36]攀险峰千次万次 [01:42.06]沿路满地布着刺 [01:44.50]也没有在意 [01:46.18]即使伤过无数次 [01:48.59]仍会愿意 [01:53.26] [02:02.44]无惧搁浅 在异流与冲击锻炼 [02:06.86]无惧压迫 逆转中改变 [02:10.13]只想停留身边 [02:12.67]和你走每一天继续上演 [02:16.77]角力凭你在并肩 [02:19.65]共同地奋战 [02:21.85]不再胆怯 [02:25.35]难道我可以扭转宿命 [02:28.00]重遇你一次 [02:31.57] [02:32.39]难道故事终结早已注定 [02:35.42]没法制止 [02:38.44]其实我不理一切 [02:40.63]挑战拼命试 [02:42.55]攀险峰千次万次 [02:45.60]沿路满地布着刺 [02:47.80]也没有在意 [02:49.43]即使伤过无数次 [02:51.76]仍会愿意 [02:56.00] [02:56.68]不怕跌入 恐怖漩涡 [02:59.65]不惧不累就凭团火 [03:03.07]哪怕这是祸 [03:05.17]滴血都不会痛 [03:07.73]未怕跌荡 [03:09.02] [03:09.76]冲破界限问谁能阻 [03:13.03]你是我活着的希望 [03:16.36]盼望有日会回到最初 [03:21.86] [03:22.43]难道我可以摆脱宿命 [03:24.68]重遇你多次 [03:28.81]还没跟你相约他世再会 [03:32.16]梦已化烟 [03:35.25]无论要经过转世千次百万次 [03:39.25]跟你的虚线 不变 [03:42.07]缘尽了又有下次 [03:44.45]再下次下次 [03:46.25]即使伤过无数次 [03:48.48]仍会愿意 [03:51.93]离散聚天意有含意 [03:57.34] [04:02.09]情也是真挚"
	},
	{
		"name":"遠征",
		"singer":"Dear Jane",
		"img":"https://v1.itooi.cn/tencent/pic?id=000E3D9p2FvPQe",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=000E3D9p2FvPQe",
		"lrc":"[ti:远征] [ar:Dear Jane] [al:远征] [by:] [offset:0] [00:00.00]远征 (Long Road) - Dear Jane [00:05.35]词：林宝 [00:10.70]曲：Howie [00:16.05]一念 奔向天国 [00:19.61]一念 堕回地狱 [00:22.61]信念 挣扎中兜转 [00:26.58] [00:28.60]经验 过渡万年 [00:32.16]嘴脸 分秒的变 [00:35.17]际遇 屡遇上失眠 [00:39.11] [00:40.51]而逐寸逐寸 [00:42.74]历尽万辛找不到乐园 [00:46.92]路到尽处 要怎打算 [00:52.90]还要走多远 还要兜多圈 [00:59.29]离目标很远 [01:02.41]才骤觉理想也讲生存 [01:06.33]疲又倦 光阴似箭 [01:09.73]花光了血 补不了缺 [01:12.72]学会所谓那洒脱 反失方寸 [01:20.25] [01:25.66]生活 终算不错 [01:28.90]收获 足够笙歌 [01:32.17]意义 竟觉得不多 [01:36.14] [01:38.26]想念 执过宝剑 [01:41.65]考验 一寸执意 [01:44.67]挂念 信奉过坚持 [01:48.84] [01:49.95]如逐寸逐寸 [01:52.24]茫茫浮生经得起陆沉 [01:56.46]何以自怨 脚边积雪 [02:02.37]还要走多远 还要兜多圈 [02:08.73]离目标很远 [02:11.84]才骤觉理想也讲生存 [02:15.79]疲又倦 光阴似箭 [02:19.15]花光了血 补不了缺 [02:22.19]但我享受这虚脱 出于心血 [02:30.86] [02:54.68]尽管差距就算攀山涉水 [02:59.97]直到气数也都早已尽了 [03:03.63]我该粉碎 [03:06.37]能挨下去 难面对 是心虚 [03:11.82]还要走多远 还要兜多圈 [03:18.21]唯独这种远 [03:21.25]源自我爱跟理想周旋 [03:25.29]凌又乱 只差半寸 [03:28.61]我未完全 双脚未断 [03:31.67]亦要守住这一寸 一息不断 [03:40.62] [03:42.01]不甘志短 走出深渊"
	},
	{
		"name":"發現號",
		"singer":"RubberBand",
		"img":"https://v1.itooi.cn/tencent/url?quality=320&id=003z8RV20H8K9k",
		"src":"https://v1.itooi.cn/tencent/pic?id=003z8RV20H8K9k",
		"lrc":"[ti:发现号] [ar:RubberBand] [al:We Are RubberBand] [by:] [offset:0] [00:00.00]发现号 - RubberBand [00:04.43]词：6号 @RubberBand,Tim Lui [00:08.86]曲：伟/正/艺琛@RubberBand [00:13.29]撞进了冰山卷上了急湾 [00:17.67]一秒从未想折返 [00:20.30] [00:21.05]就望到了就能望到了 [00:24.24]终会踏足这峡湾 [00:26.65] [00:27.28]划破了风衣丢了救生衣 [00:30.86]未曾想过会幸免 [00:33.64]若生于某个总挤不进我地点 [00:39.25]注定远征一遍 [00:47.48] [00:54.46]这发热汗腺也都干透了 [01:00.86]双腿却继续狂放在冲出那人浪 [01:06.89] [01:07.43]几次被埋葬窄巷中复活过几趟 [01:16.32] [01:17.03]留一口气讲 [01:19.93] [01:20.61]再失败至懂看透那不甘 [01:29.40] [01:30.31]去为我来营救向着太阳狂走 [01:37.01]撞进了冰山卷上了急湾 [01:41.64]一秒从未想折返 [01:44.83]就望到了就能望到了 [01:48.38]终会踏足这峡湾 [01:51.22]划破了风衣丢了救生衣 [01:54.71]未曾想过会幸免 [01:56.95] [01:57.53]逆光中进发不甘安置到盲点 [02:03.20]上路去再实践 [02:11.62] [02:18.58]板块移动了乱世中绝地里反抗 [02:26.85] [02:27.63]谁躲于暗光 [02:31.22]直到失败至懂看透让那不甘 [02:40.80]去为我来营救向着太阳狂走 [02:48.10]撞进了冰山卷上了急湾 [02:52.37]一秒从未想折返 [02:55.64]就望到了就能望到了 [02:58.98]终会踏足这峡湾 [03:01.82]划破了风衣丢了救生衣 [03:05.41]成全这最美历险 [03:08.58]逆光中进发不甘安置到盲点 [03:13.76]上路去再实践 [03:18.57] [03:29.22]撞碎了冰山冲过了急湾 [03:33.41]登上完梦的峡湾 [03:37.13]望到了望到了 [03:40.03]白云搭上一片蓝 [03:43.12]记载了凶险伤势也不浅 [03:46.42]脚踏这里这一天 [03:49.76]历史中结算一心走出错地点 [03:54.73]干下远征一遍渊"
	},
	{
		"name":"方向感",
		"singer":"Mr.",
		"img":"https://v1.itooi.cn/tencent/pic?id=002uaVGg1LyzPw",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=002uaVGg1LyzPw",
		"lrc":"[ti:方向感] [ar:Mr.] [al:New Beginning] [by:] [offset:0] [00:00.00]方向感 - Mr. [00:05.42]词：小克 [00:10.85]曲：Mr. [00:16.27]蚂蚁会望上 发奋要望上 [00:20.21]要上到枝叶上 上上上不自量 [00:24.30]却怕太高傲尽头失足得重伤 No [00:32.73]雀鸟也会望下 听听细雨落下 [00:36.78]尝人间烟火欣赏冷冬仲夏 [00:41.06]却怕太孤独尽头一直没情话 No [00:50.12] [00:51.55]如何分清楚方向落差woo [00:58.78] [00:59.61]为何想清楚又要怕 [01:03.63]我欠缺指引乱爬 [01:06.64] [01:08.00]对与错 谁来过问 [01:13.53]无计较远近 只想找一点方向感woo [01:22.61]昨晚明晨 潜进人群里找寻 [01:30.10]南北西东碰碰运 今天怎变阵 [01:36.85]要逗留 还是继续前行 [01:40.75] [01:47.36]爱进血脉内 爱进了瘟疫内 [01:51.25]仍难保一天分开置身事外 [01:55.56]爱到太深没尽头终极是无奈 No [02:04.57] [02:05.92]如何分清楚方向避灾 [02:12.86] [02:14.14]为何既怕恨又怕爱 [02:18.29]我欠缺指引乱来 [02:21.22] [02:22.37]对与错 谁来过问 [02:27.66] [02:28.22]无计较远近 只想找一点方向感woo [02:36.46] [02:37.13]昨晚明晨 潜进人群里找寻 [02:44.67]南北西东碰碰运 今天怎变阵 [02:51.28]向左行 还是向右迷人 [02:54.90] [02:56.75]还是向上求神 还是向后离群 [03:03.17]还是向下寻根 还是向外求答允 [03:07.19]教诲教训 不要再问 [03:12.65] [03:39.31]人世无常 无理 无从过问 [03:46.13] [03:46.65]忘记对与错 只需跟心中的勇敢woo [03:54.82] [03:55.60]昨晚明晨 时间磨平了伤痕 [04:03.22]南北西东里发现 今天怎变阵 [04:09.84]也可行 其实也是前行 [04:15.33]哪一方都对等 唯独我在圆心"
	},
	{
		"name":"無盡",
		"singer":"Supper Moment",
		"img":"https://v1.itooi.cn/tencent/pic?id=000km7Zi0joqyB",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=000km7Zi0joqyB",
		"lrc":"[ti:无尽] [ar:Supper Moment] [al:无尽] [by:] [offset:0] [00:00.00]无尽 - Supper Moment [00:00.24]词：Supper Moment [00:00.49]曲：Supper Moment [00:00.74]梦想于漆黑里仍然铿锵仍然大声高唱 [00:09.92]仍然期待世界给我鼓掌 [00:14.05]是妄想 趁现在追赶失散方向 [00:19.30]曾怀著心底的信仰 千次万次跌伤 [00:25.93] [00:27.11]开始不敢回头寻觅那真相 [00:32.36]明日那个幻想 [00:38.11] [00:39.49]也开始不甘被雕刻成石像 [00:44.55]踏上这无尽旅途 [00:49.05]过去飘散消散失散花火 [00:52.80]重燃起 重燃点起鼓舞 [00:57.86]或许到最后没有完美句号 [01:03.43]仍然倔强冒险一一去征讨 [01:09.99]踏上这无尽旅途 [01:14.11]谁又能鉴定你的丑恶与美好 [01:18.80]低与高离队抹走那刺心挖苦的劝告 [01:26.18]人生梦一场革命至苍老 [01:30.80] [01:42.30]梦想 存活在别人期待那奖赏 [01:46.68]最后连自己都相信 [01:49.61]勇气不再热血结霜 [01:54.11]开始裹足停留开始习惯体谅 [01:59.87]也开始不甘被倒模的 [02:03.11]一个用剩余力气去吧 鼓掌 [02:09.12] [02:31.29]太多太多构思踫壁 [02:33.91]太多太多理想压抑 [02:37.05]沉默对应著岁月无声 [02:42.49] [02:43.49]天空尚有片夕阳带领 [02:48.37]踏上这无尽旅途 [02:52.43]过去飘散消散失散花火 [02:56.43]重燃起 重燃点起鼓舞 [03:00.93]或许到最后没有完美句号 [03:06.37]仍然倔强冒险一一去征讨 [03:12.93]踏上这无尽旅途 [03:17.05]谁又能鉴定你的丑恶与美好 [03:21.81]来提步 壮阔跑道 [03:25.62]合十双手去祷告 [03:29.37]人生梦一场革命至苍老 [03:35.68] [03:38.93]难得梦一场革命不老"
	},
	{
		"name":"Run Away",
		"singer":"陈蕾 / Jan Curious",
		"img":"https://v1.itooi.cn/tencent/pic?id=002Q8Tvc3QOZXG",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=002Q8Tvc3QOZXG",
		"lrc":"[ti:Run Away] [ar:陈蕾/Jan Curious] [al:1029] [by:] [offset:0] [00:00.00]Run Away - 陈蕾 (Penther Chen)/Jan Curious [00:03.79]词：MJ Tam [00:07.58]曲：陈蕾 [00:11.37]编曲：C.Y. Kong [00:15.17]监制：C.Y. Kong/Tom/MJ Tam [00:18.96]Let's run away [00:21.33]这都市太多喘气 与禁忌 [00:25.70]请跟我探讨荒诞 的游戏 [00:28.87]世界置之不理 敢爱的身体永不 老死 [00:35.82]别太乏味 [00:38.51]当失意角色怎会 有趣味 [00:42.35]她跟你昨天一切 请忘记 [00:46.05]这刻的你 [00:48.85]弥留的心跳 灵魂的呼叫 [00:52.90]感到烦扰 跟发烧 [00:56.32]请跟我 [00:59.89]快活到正常 [01:04.14]来放胆铺张 [01:06.04]木纳安稳的 角色 使你 不敢幻想 [01:11.84]这夜 来找新的 去向 [01:19.01]Let's run away [01:21.46]当一切理想 不再似预期 [01:25.74]即使这世间 充满不完美 [01:28.84]也要做出好戏 拯救出骨子里的自己 [01:34.88]Ohh baby run away [01:38.02]贪恋过去式怎会 有趣味 [01:42.82]她跟你昨天一切 请忘记 [01:45.98]这刻的你 [01:48.62]弥留的心跳 灵魂的呼叫 [01:52.71]感到烦扰 跟发烧 [01:58.41]请跟我 [02:02.16]快活到正常 [02:06.33]来放胆铺张 [02:08.10]木纳安稳的 角色 使你 不敢幻想 [02:13.94]可否撇开 伤心气场 [02:19.20]竞逐这月亮 [02:23.48]灵魂亦发亮 [02:25.36]静默安守这 半生 可以 不堪设想 [02:31.10]这夜 来找新的 去向 [02:35.36]难道以自卑者身份 [02:39.61]埋没以后快乐情感 [02:43.98]不要紧 不要紧 [02:46.05]放任前行 不要偷生 [03:01.70]Come on let's get away we run and we will run for today [03:05.85]Come on let's get away let's be alive and run away [03:10.05]Come on let's get away we run and we will run for today [03:14.37]Come on let's get away let's be alive and run away [03:17.81]Hold my hand run away take me far away [03:19.35]Hold my hand run away take me far away yeah [03:21.28]请跟我 [03:22.05]快活到正常 [03:25.05]来放胆铺张 [03:27.31]浪漫穿梭于太空跟我 一起妄想 [03:33.17]可否撇开 伤心气场 [03:38.48]竞逐这月亮 [03:42.78]灵魂亦发亮 [03:44.65]剩下不安于半空 请你不必再想 [03:50.38]去吧 来找新的 去向 [03:53.26]Come on let's get away we run and we will run for today [03:57.23]Come on let's get away let's be alive and run away [04:01.52]Come on let's get away we run and we will run for today [04:05.62]Come on let's get away let's be alive and run away [04:10.07]Come on let's get away we run and we will run for today [04:14.18]Come on let's get away le's be alive and run away [04:18.54]Come on let's get away we run and we will run for today [04:22.75]Come on let's get away let's be alive and run away [04:27.20]Come on let's get away we run and we will run for today [04:31.33]Come on let's get away le's be alive and run away"
	},
	{
		"name":"Unstoppable",
		"singer":"The Scores",
		"img":"https://v1.itooi.cn/tencent/pic?id=001Xrg0m4E0IeK",
		"src":"https://v1.itooi.cn/tencent/lrc?id=001Xrg0m4E0IeK",
		"lrc":"[ti:Unstoppable] [ar:The Score] [al:Unstoppable] [by:] [offset:0] [00:00.00]Unstoppable (无可阻挡) - The Score [00:02.01]Lyrics by：Edan Chai Dover/Eddie Anthony Ramirez Jr/Steven Solomon/David Hodges [00:04.03]Composed by：Edan Chai Dover/Eddie Anthony Ramirez Jr/Steven Solomon/David Hodges [00:06.04]Produced by：The Score/David Hodges [00:08.06]There's a moment [00:09.34]In your bones when [00:11.01]When the fire takes over [00:14.10]Blood is running [00:15.60]Heart is pumping [00:17.19]As the battle gets closer [00:19.94]Ooh [00:24.04]They can say what they want now [00:26.25]Ooh [00:30.14]Cuz we'll be screaming out [00:31.36]We can be heroes everywhere we go [00:34.48]We can have all that we ever want [00:37.43]Swinging like Ali knocking out bodies [00:40.60]Standing on top like a champion [00:44.36]Keep your silver give me that gold [00:47.49]You'll remember when I say [00:49.73]We can be heroes everywhere we go [00:52.97]Keeping us down is impossible [00:55.54]'Cause we're unstoppable [00:56.79]Oh whoa we're unstoppable [00:59.94]Oh whoa we're unstoppable [01:03.37]Every spotlight [01:04.88]Every sound byte [01:06.42]Everybody who gave up [01:09.33]Is just the fuel for [01:10.93]Wanting it more [01:12.39]Than anybody against us [01:15.21]Ooh [01:19.35]They can say what they want now [01:21.54]Ooh [01:25.55]Cuz we'll be screaming out [01:26.92]We can be heroes everywhere we go [01:29.88]We can have all that we ever want [01:32.90]Swinging like Ali knocking out bodies [01:35.99]Standing on top like a champion [01:39.75]Keep your silver give me that gold [01:42.80]You'll remember when I say [01:45.12]We can be heroes everywhere we go [01:48.26]Keeping us down is impossible [01:50.97]'Cause we're unstoppable [01:52.18]Oh whoa we're unstoppable [01:55.32]Oh whoa we're unstoppable [02:10.89]Ooh [02:14.90]They can say what they want now [02:16.94]Ooh [02:20.89]Cuz we'll be screaming out [02:25.28]We can be heroes everywhere we go [02:28.20]We can have all that we ever want [02:31.33]Swinging like Ali knocking out bodies [02:34.42]Standing on top like a champion [02:38.31]Keep your silver give me that gold [02:41.31]You'll remember when I say [02:43.89]We can be heroes everywhere we go [02:46.70]Keeping us down is impossible [02:49.46]We're unstoppable [02:50.76]Oh whoa we're unstoppable [02:53.80]Oh whoa we're unstoppable [02:56.91]Oh whoa we're unstoppable [02:59.92]Oh whoa we're unstoppable [03:02.99]Oh whoa we're unstoppable [03:06.35]We're unstoppable"
	},
	{
		"name":"Feels so Good",
		"singer":"Kelly Carvin",
		"img":"http://p1.music.126.net/heH2JgzQntdHNAIdn-4R2w==/109951163291397395.jpg",
		"src":"https://v1.itooi.cn/netease/url?quality=320&id=559003882",
		"lrc":""
	},
	{
		"name":"I Love It",
		"singer":"Icona Pop / Charli XCX",
		"img":"https://v1.itooi.cn/tencent/pic?id=001O2QHH2dqtTA",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=001O2QHH2dqtTA",
		"lrc":"[ti:I Love It (《极品飞车17：最高通缉》游戏插曲)] [ar:Icona Pop/Charli XCX] [al:Iconic] [by:] [offset:0] [00:00.00]I Love It - Icona Pop (爱卡娜女王)/Charli XCX (查莉 XCX) [00:04.32]Written by：Charlotte Aitchison/Patrik Berger [00:08.65]I got this feelin' on this summer day when you were gone [00:12.41]I crashed my car into the bridge I watched I let it burn [00:16.15]I threw your sh*t into a bag and pushed it down the stairs [00:19.99]I crashed my car into the bridge I don't care [00:24.18] [00:24.85]I love it I don't care [00:28.00] [00:31.55]I got this feelin' on this summer day when you were gone [00:35.28]I crashed my car into the bridge I watched I let it burn [00:39.01]I threw your sh*t into a bag and pushed it down the stairs [00:42.83]I crashed my car into the bridge I don't care [00:47.08] [00:47.78]I love it I don't care [00:50.84] [00:53.51]You're on a different road I'm in the milky way [00:57.13]You want me down on earth but I am up in space [01:00.96]You're so damn hard to please we gotta kill this switch [01:04.73]You're from the '70s but I'm a '90s b**ch [01:08.65]I love it I love it [01:17.13] [01:24.89]I got this feelin' on this summer day when you were gone [01:28.56]I crashed my car into the bridge I watched I let it burn [01:32.33]I threw your sh*t into a bag and pushed it down the stairs [01:36.13]I crashed my car into the bridge I don't care [01:40.30] [01:41.16]I love it I don't care [01:44.17] [01:44.98]I love it I love it [01:46.42]I don't care I love it [01:49.57] [01:50.13]I don't care [01:51.79] [01:54.47]You're on a different road I'm in the milky way [01:58.10]You want me down on earth but I am up in space [02:01.89]You're so damn hard to please we gotta kill this switch [02:05.71]You're from the '70s but I'm a '90s b**ch [02:09.44]I don't care I love it [02:12.53] [02:13.06]I don't care I love it I love it [02:16.85]I don't care I love it [02:20.52]I don't care I love it I love it [02:24.46]I don't care [02:26.00] [02:32.54]I love it"
	},
	{
		"name":"Lean On",
		"singer":"Major Lazer / MØ / DJ Snake",
		"img":"https://v1.itooi.cn/tencent/pic?id=0014FPXg0QOyLI",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=0014FPXg0QOyLI",
		"lrc":"[ti:Lean On] [ar:Major Lazer] [al:Lean On] [by:] [offset:0] [00:00.00]Lean On (依靠) (2016年Billboard最佳舞曲/电子单曲) - Major Lazer (拉扎尔少校)/MØ/DJ Snake (DJ斯雷克) [00:02.58]词：Karen Marie Orsted/William Sami Etienne Grigacine/Steve Guess/PHILIP MECKSEPER (pka Junior Blender)/Thomas Wesley Pentz [00:05.17]曲：Karen Marie Orsted/William Sami Etienne Grigacine/Steve Guess/PHILIP MECKSEPER (pka Junior Blender)/Thomas Wesley Pentz [00:07.75]制作人：Major Lazer/DJ Snake [00:10.34]Do you recall not long ago [00:12.97]We would walk on the sidewalk [00:15.46]Innocent remember [00:17.84]All we did was care for each other [00:20.59]But the night was warm [00:22.21]We were bold and young [00:25.24]All around the wind blows [00:27.39]We would only hold on to let go [00:30.18]Blow a kiss fire a gun [00:32.38]We need someone to lean on [00:35.07]Blow a kiss fire a gun [00:37.12]All we need is somebody to lean on [00:39.96]Blow a kiss fire a gun [00:42.16]We need someone to lean on [00:44.85]Blow a kiss fire a gun [00:46.95]All we need is somebody to lean on [00:49.24] [01:09.23]What will we do when we get old [01:11.74]Will we walk down the same road [01:14.07]Will you be there by my side [01:16.62]Standing strong as the waves roll over [01:19.42]When the nights are long [01:21.05]Longing for you to come home [01:23.98]All around the wind blows [01:26.18]We would only hold on to let go [01:28.96]Blow a kiss fire a gun [01:31.10]We need someone to lean on [01:33.85]Blow a kiss fire a gun [01:35.94]All we need is somebody to lean on [01:38.77]Blow a kiss fire a gun [01:40.89]We need someone to lean on [01:43.64]Blow a kiss fire a gun [01:45.73]All we need is somebody to lean on [01:48.03] [01:55.62]All we need is somebody to lean on [01:57.76] [02:05.30]All we need is somebody to lean on [02:07.59]Lean on lean on lean on lean on [02:10.17] [02:32.61]Blow a kiss fire a gun [02:34.81]We need someone to lean on [02:37.05] [02:37.57]Blow a kiss fire a gun [02:39.56]All we need is somebody to lean on [02:42.40]Blow a kiss fire a gun [02:44.54]We need someone to lean on [02:47.31]Blow a kiss fire a gun [02:49.41]All we need is somebody to lean on"
	},
	{
		"name":"Walk This Way",
		"singer":"MØ",
		"img":"https://v1.itooi.cn/tencent/pic?id=004UvWKz0VYnHF",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=004UvWKz0VYnHF",
		"lrc":"[ti:Walk This Way] [ar:MØ] [al:No Mythologies to Follow (Deluxe)] [by:] [offset:0] [00:00.00]Walk This Way - MØ [00:00.82]All my life I've stepped to the rhythm of the drums inside my head [00:05.90]Longing for the sweet sound of my mama [00:08.71]Make them all walk this way [00:10.06] [00:11.31]All my life I've stepped to the rhythm of the drums inside my head [00:14.85]Longing for the sweet sound of my mama [00:19.08]Make them all walk this way [00:22.70]There's a light for you burning for you [00:24.36]Oh my mama said: ”It is burning for you [00:27.14]Oh don't let it go oh don't let it go [00:30.21]You'll find a way baby make them all burn ” [00:31.90]You'll make them all burn) [00:33.38]I'm a post-teen monster bold and blind [00:38.12]From the top of my head to the shaking ground [00:40.38]Blame the billboards 'cause they've let me down [00:44.07]I'm a symphony of the world gone wild [00:48.53](What a pretty sight) [00:49.59]And I spit and I cry for the dirty mind [00:51.37]Never really got it baby [00:53.24](You'll make them all burn) [00:54.96]But I think about it all the time [00:57.68]Tough luck when oh will the days come around [01:01.14]Boy I am thinking 'bout it all the time [01:03.64](You'll make them all burn) [01:06.14]All my life I've stepped to the rhythm of the drums inside my head [01:11.27]Longing for the sweet sound of my mama [01:14.17]Make them all walk this way [01:17.18]There's a light for you burning for you [01:19.33]Oh my mama said: “It is burning for you [01:21.27]Oh don't let it go oh don't let it go [01:24.84]You'll find a way baby make them all burn ” [01:27.41]I'm a bug in your eardrum that's my luck [01:43.00](That's my luck) [01:44.02]And I won't won't stop 'til the day I die [01:46.72]You'll never get my posse and I [01:50.47]We're a symphony of the world gone wild [01:53.65](What a pretty sight) [01:54.87]And we long for the place where we can be found [01:57.63]Burning like a star in our minds [01:59.57](You'll make them all burn) [02:01.03]But I think about it all the time [02:03.70]Tough luck when oh will the days come around [02:06.13]Boy I am thinking 'bout it all the time [02:09.32](You'll make them all burn) [02:11.65]Sun rises beyond the sea [02:19.52]The dead will see and we might stop living [02:22.64]All my life I've stepped to the rhythm of the drums inside my head [02:36.81]Longing for the sweet sound of my mama [02:41.06]Make them all walk this way [02:43.02]All my life I've stepped to the rhythm of the drums inside my head [02:47.70]Longing for the sweet sound of my mama [02:51.76]Make them all walk this way [02:53.81]There's a light for you burning for you [02:57.00]Oh my mama said: “It is burning for you [02:59.72]Oh don't let it go oh don't let it go [03:02.97]You'll find a way baby make them all burn ”[03:22.56]Sunshine is beyond the sea [03:25.05]You'll find a way baby [03:26.12]Make them all burn [03:26.97]Sunshine is beyond the sea [03:34.62]You'll find a way baby [03:36.77]Make them all burn"
	},
	{
		"name":"Final Song",
		"singer":"MØ",
		"img":"https://v1.itooi.cn/tencent/pic?id=002XW17e1TSPeq",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=002XW17e1TSPeq",
		"lrc":"[ti:Final Song] [ar:MØ] [al:Final Song] [by:] [offset:0] [00:01.54]Final Song (最后的歌) - MØ [00:02.41]Written by：Karen Marie Ørsted/Noonie Bao/Uzoechi Emenike [00:03.85] [00:10.37]Please won't you wait won't you stay [00:12.81] [00:13.47]At least until the sun goes down [00:15.08] [00:15.61]When you're gone I lose faith [00:17.39] [00:17.91]I lose everything I have found [00:20.11]Heart strings violins [00:22.33]That's what I hear when you're by my side [00:24.24] [00:26.60]Yeah that's what I hear when you're by my side [00:28.85] [00:31.26]But when you're gone the music goes [00:33.15] [00:35.69]I lose the rhythm lose my soul [00:37.94] [00:40.25]So hear me out before you say the night is over [00:43.72] [00:44.30]I want you to know that we gotta gotta carry on [00:48.68] [00:49.41]So don't let this be our final song [00:51.65] [00:54.11]So don't let this be our final song [00:56.23] [00:58.65]So hear me out before you say the night is over [01:02.08] [01:02.76]I want you to know that we gotta gotta carry on [01:07.03] [01:07.73]So don't let this be our final song [01:09.89] [01:10.66]Baby when we were young [01:12.88]There was nothing to make believe [01:14.51] [01:15.10]And the songs that we sang [01:16.86] [01:17.38]They were written for you and me [01:19.07] [01:19.77]Melodies on repeat [01:21.81]That's what I hear when you're by my side [01:23.69] [01:26.16]Yeah that's what I hear when you're by my side [01:28.55] [01:30.80]But when you're gone the music goes [01:32.81] [01:35.08]I lose the rhythm lose my soul [01:37.34] [01:39.62]So hear me out before you say the night is over [01:43.75]I want you to know that we gotta gotta carry on [01:48.01] [01:48.77]So don't let this be our final song [01:50.91] [01:53.45]So don't let this be our final song [01:55.60] [01:58.05]So hear me out before you say the night is over [02:01.53] [02:02.15]I want you to know that we gotta gotta carry on [02:06.39] [02:07.21]So don't let this be our final song [02:09.35] [02:10.72]Woo-ooo take us to a higher ground [02:14.78]Here and now whatever you do just don't look down [02:17.95] [02:19.65]Woo-ooo underneath the disco light it's alright [02:25.03]We could make the perfect sound [02:27.15] [02:29.80]We could make the perfect sound [02:31.75] [02:34.65]But when you're gone the music goes [02:36.75] [02:39.04]I lose the rhythm lose my soul [02:41.32] [02:43.56]So hear me out before you say the night is over [02:47.71]I want you to know that we gotta gotta carry on [02:52.06] [02:52.77]So don't let this be our final song [02:54.99] [02:57.51]So don't let this be our final song [02:59.64] [03:02.02]So hear me out before you say the night is over [03:05.52] [03:06.10]I want you to know that we gotta gotta carry on [03:10.38] [03:11.16]So don't let this be our final song [03:13.27] [03:14.59]Woo-ooo take us to a higher ground [03:18.75]Here and now whatever you do just don't look down [03:21.98] [03:23.68]Woo-ooo underneath the disco light it's alright [03:29.01]We could make the perfect sound [03:30.94] [03:32.66]Woo-ooo take us to a higher ground [03:37.03]Here and now whatever you do just don't look down [03:40.22] [03:41.93]Woo-ooo underneath the disco light it's alright [03:47.03] [03:47.81]Don't let this be our final song"
	},
	{
		"name":"The Girl From Paris",
		"singer":"Alex Schulz",
		"img":"https://v1.itooi.cn/tencent/pic?id=004EoUMs0NgDOK",
		"src":"https://v1.itooi.cn/tencent/url?quality=320&id=004EoUMs0NgDOK",
		"lrc":"[00:17.000] i am here for you [00:21.490] i can't let you go [00:26.490] get me close to you [00:30.490] cause i let you sure [00:46.490] cause i let you sure [01:27.490] i always on you side [01:27.490] i'll let you know to make things right [01:31.490] you belong to me [01:33.490] you're the only one for me [02:09.490] cause i let you sure [02:26.490] you're the only one for me [03:00.490] i am here for you [03:04.490] i can't let you go [03:09.490] get me close to you [03:11.490] cause i let you sure [03:29.490] cause i let you sure"
	},
	{





	}
],
[
	{
		"basic":true,
		"name":"歌單3",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
		}
],
[
	{
		"basic":true,
		"name":"歌單4",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
	}
],
[
	{
		"basic":true,
		"name":"歌單5",
		"singer":"",
		"img":""
	},
	{

		"name":"",
		"src":"",
		"lrc":""
	}	
	
]];
