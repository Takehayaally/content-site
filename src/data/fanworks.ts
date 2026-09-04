import type { ImageMetadata } from "astro";
import fanwork001 from "@/assets/images/fanworks/archive-001.webp";
import fanwork002 from "@/assets/images/fanworks/archive-002.webp";
import fanwork003 from "@/assets/images/fanworks/archive-003.webp";
import fanwork004 from "@/assets/images/fanworks/archive-004.webp";
import fanwork005 from "@/assets/images/fanworks/archive-005.webp";
import fanwork006 from "@/assets/images/fanworks/archive-006.webp";
import fanwork007 from "@/assets/images/fanworks/archive-007.webp";
import fanwork009 from "@/assets/images/fanworks/archive-009.webp";
import fanwork010 from "@/assets/images/fanworks/archive-010.webp";
import fanwork011 from "@/assets/images/fanworks/archive-011.webp";
import fanwork012 from "@/assets/images/fanworks/archive-012.webp";
import fanwork013 from "@/assets/images/fanworks/archive-013.webp";
import fanwork014 from "@/assets/images/fanworks/archive-014.webp";
import fanwork015 from "@/assets/images/fanworks/archive-015.webp";
import fanwork018 from "@/assets/images/fanworks/archive-018.webp";
import fanwork019 from "@/assets/images/fanworks/archive-019.webp";
import fanwork020 from "@/assets/images/fanworks/archive-020.webp";
import fanwork021 from "@/assets/images/fanworks/archive-021.webp";
import fanwork023 from "@/assets/images/fanworks/archive-023.webp";
import fanwork024 from "@/assets/images/fanworks/archive-024.webp";
import fanwork026 from "@/assets/images/fanworks/archive-026.webp";
import fanwork027 from "@/assets/images/fanworks/archive-027.webp";
import fanwork028 from "@/assets/images/fanworks/archive-028.webp";
import fanwork029 from "@/assets/images/fanworks/archive-029.webp";
import fanwork030 from "@/assets/images/fanworks/archive-030.webp";
import fanwork031 from "@/assets/images/fanworks/archive-031.webp";
import fanwork032 from "@/assets/images/fanworks/archive-032.webp";
import fanwork033 from "@/assets/images/fanworks/archive-033.webp";
import fanwork034 from "@/assets/images/fanworks/archive-034.webp";
import fanwork035 from "@/assets/images/fanworks/archive-035.webp";
import fanwork036 from "@/assets/images/fanworks/archive-036.webp";
import fanwork037 from "@/assets/images/fanworks/archive-037.webp";
import fanwork038 from "@/assets/images/fanworks/archive-038.webp";
import fanwork039 from "@/assets/images/fanworks/archive-039.webp";
import fanwork040 from "@/assets/images/fanworks/archive-040.webp";
import fanwork041 from "@/assets/images/fanworks/archive-041.webp";
import fanwork042 from "@/assets/images/fanworks/archive-042.webp";
import fanwork043 from "@/assets/images/fanworks/archive-043.webp";
import fanwork044 from "@/assets/images/fanworks/archive-044.webp";
import fanwork045 from "@/assets/images/fanworks/archive-045.webp";
import fanwork046 from "@/assets/images/fanworks/archive-046.webp";
import fanwork047 from "@/assets/images/fanworks/archive-047.webp";
import fanwork049 from "@/assets/images/fanworks/archive-049.webp";
import fanwork050 from "@/assets/images/fanworks/archive-050.webp";
import fanwork051 from "@/assets/images/fanworks/archive-051.webp";
import fanwork052 from "@/assets/images/fanworks/archive-052.webp";
import fanwork053 from "@/assets/images/fanworks/archive-053.webp";
import fanwork054 from "@/assets/images/fanworks/archive-054.webp";
import fanwork055 from "@/assets/images/fanworks/archive-055.webp";
import fanwork056 from "@/assets/images/fanworks/archive-056.webp";
import fanwork057 from "@/assets/images/fanworks/archive-057.webp";
import fanwork058 from "@/assets/images/fanworks/archive-058.webp";
import fanwork059 from "@/assets/images/fanworks/archive-059.webp";
import fanwork060 from "@/assets/images/fanworks/archive-060.webp";
import fanwork061 from "@/assets/images/fanworks/archive-061.webp";
import fanwork063 from "@/assets/images/fanworks/archive-063.webp";
import fanwork064 from "@/assets/images/fanworks/archive-064.webp";
import fanwork066 from "@/assets/images/fanworks/archive-066.webp";
import fanwork067 from "@/assets/images/fanworks/archive-067.webp";
import fanwork068 from "@/assets/images/fanworks/archive-068.webp";
import fanwork070 from "@/assets/images/fanworks/archive-070.webp";
import fanwork071 from "@/assets/images/fanworks/archive-071.webp";
import fanwork072 from "@/assets/images/fanworks/archive-072.webp";
import fanwork073 from "@/assets/images/fanworks/archive-073.webp";
import fanwork074 from "@/assets/images/fanworks/archive-074.webp";
import fanwork075 from "@/assets/images/fanworks/archive-075.webp";
import fanwork076 from "@/assets/images/fanworks/archive-076.webp";
import fanwork077 from "@/assets/images/fanworks/archive-077.webp";
import fanwork062 from "@/assets/images/fanworks/frieren-meteor.webp";
import fanwork065 from "@/assets/images/fanworks/gojo-limitless.webp";
import fanwork069 from "@/assets/images/fanworks/lelouch-chess.webp";
import fanwork016 from "@/assets/images/fanworks/nezuko-wisteria.webp";
import fanwork008 from "@/assets/images/fanworks/reimu-shrine.webp";
import fanwork022 from "@/assets/images/fanworks/rengoku-dawn.webp";
import fanwork025 from "@/assets/images/fanworks/sasuke-rain-shrine.webp";
import fanwork048 from "@/assets/images/fanworks/sungjinwoo-shadow.webp";
import fanwork017 from "@/assets/images/fanworks/tanjiro-sunrise.webp";

export interface Fanwork {
	title: string;
	character: string;
	franchise: string;
	image: ImageMetadata;
	groups: ("demon-slayer" | "classic" | "current")[];
	focus: string;
}

export const fanworks: Fanwork[] = [
	{
		title: "战时纪实肖像",
		character: "弗拉蒂蕾娜·米丽洁",
		franchise: "86 不存在的战区",
		image: fanwork001,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "彩色胶片乐社",
		character: "黄前久美子",
		franchise: "吹响 悠风号",
		image: fanwork002,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "超自然杂志",
		character: "绫濑桃",
		franchise: "胆大党",
		image: fanwork003,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "雾桥丝绸画",
		character: "结城明日奈",
		franchise: "刀剑神域",
		image: fanwork004,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "雨夜间谍海报",
		character: "蕾塞",
		franchise: "电锯人",
		image: fanwork005,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "雨窗黑色电影",
		character: "玛奇玛",
		franchise: "电锯人",
		image: fanwork006,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "朋克孔版",
		character: "帕瓦",
		franchise: "电锯人",
		image: fanwork007,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "雨后神社祭",
		character: "博丽灵梦",
		franchise: "东方Project",
		image: fanwork008,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "停时茶室",
		character: "十六夜咲夜",
		franchise: "东方Project",
		image: fanwork009,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "星仪工房",
		character: "雾雨魔理沙",
		franchise: "东方Project",
		image: fanwork010,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "哥特彩窗夜庭",
		character: "雾岛董香",
		franchise: "东京喰种",
		image: fanwork011,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "时装摄影",
		character: "喜多川海梦",
		franchise: "更衣人偶坠入爱河",
		image: fanwork012,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "焦虑拼贴",
		character: "后藤一里",
		franchise: "孤独摇滚！",
		image: fanwork013,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "晴日喫茶店",
		character: "成年祢豆子",
		franchise: "鬼灭之刃",
		image: fanwork014,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "雨夜通勤线",
		character: "成年祢豆子",
		franchise: "鬼灭之刃",
		image: fanwork015,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "紫藤雨夜",
		character: "成年祢豆子",
		franchise: "鬼灭之刃",
		image: fanwork016,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "日轮初晓",
		character: "成年炭治郎",
		franchise: "鬼灭之刃",
		image: fanwork017,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "雨夜水环",
		character: "富冈义勇",
		franchise: "鬼灭之刃",
		image: fanwork018,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "朝樱守护",
		character: "甘露寺蜜璃",
		franchise: "鬼灭之刃",
		image: fanwork019,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "赤雨东京",
		character: "鬼舞辻无惨",
		franchise: "鬼灭之刃",
		image: fanwork020,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "紫藤夜庭",
		character: "蝴蝶忍",
		franchise: "鬼灭之刃",
		image: fanwork021,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "黎明列车站",
		character: "炼狱杏寿郎",
		franchise: "鬼灭之刃",
		image: fanwork022,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "烟火夜屋顶",
		character: "宇髄天元",
		franchise: "鬼灭之刃",
		image: fanwork023,
		groups: ["demon-slayer"],
		focus: "50% 36%",
	},
	{
		title: "平安漆器屏风",
		character: "四宫辉夜",
		franchise: "辉夜大小姐想让我告白",
		image: fanwork024,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "雨后神社",
		character: "成年佐助",
		franchise: "火影忍者",
		image: fanwork025,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "构成主义轨道",
		character: "斯莱塔·墨丘利",
		franchise: "机动战士高达 水星的魔女",
		image: fanwork026,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "包豪斯驾驶舱",
		character: "天城莎莉",
		franchise: "机动战士高达 GQuuuuuuX",
		image: fanwork027,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "装饰艺术夜宴",
		character: "约尔 福杰",
		franchise: "间谍过家家",
		image: fanwork028,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "银尖笔冰场素描",
		character: "结束祈",
		franchise: "金牌得主",
		image: fanwork029,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "水墨残垣",
		character: "三笠",
		franchise: "进击的巨人",
		image: fanwork030,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "巴洛克赌桌",
		character: "蛇喰梦子",
		franchise: "狂赌之渊",
		image: fanwork031,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "自然学野外手册",
		character: "莉可",
		franchise: "来自深渊",
		image: fanwork032,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "波普间谍海报",
		character: "锦木千束",
		franchise: "莉可丽丝",
		image: fanwork033,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "复古丝网印刷",
		character: "凉宫春日",
		franchise: "凉宫春日的忧郁",
		image: fanwork034,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "冬日玩偶屋",
		character: "逢坂大河",
		franchise: "龙与虎",
		image: fanwork035,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "佛兰德魔法厨房",
		character: "玛露希尔",
		franchise: "迷宫饭",
		image: fanwork036,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "蒸汽波实验室",
		character: "牧濑红莉栖",
		franchise: "命运石之门",
		image: fanwork037,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "装饰艺术时钟",
		character: "晓美焰",
		franchise: "魔法少女小圆",
		image: fanwork038,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "都市电光蓝图",
		character: "御坂美琴",
		franchise: "某科学的超电磁炮",
		image: fanwork039,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "午夜车站油画",
		character: "樱岛麻衣",
		franchise: "青春猪头少年系列",
		image: fanwork040,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "清晨体育纪实",
		character: "鹿野千夏",
		franchise: "青之箱",
		image: fanwork041,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "黑胶乐队摄影",
		character: "秋山澪",
		franchise: "轻音少女",
		image: fanwork042,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "科幻平装喷绘",
		character: "露西",
		franchise: "赛博朋克 边缘行者",
		image: fanwork043,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "哥特银版摄影",
		character: "弥海砂",
		franchise: "死亡笔记",
		image: fanwork044,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "印象派樱花演奏",
		character: "宫园薰",
		franchise: "四月是你的谎言",
		image: fanwork045,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "纸浆科幻冒险",
		character: "优子",
		franchise: "天元突破 红莲螺岩",
		image: fanwork046,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "重建之晨",
		character: "成年职业英雄绿谷",
		franchise: "我的英雄学院",
		image: fanwork047,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "暗影之门",
		character: "成振宇",
		franchise: "我独自升级",
		image: fanwork048,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "流行艺术丝印",
		character: "星野爱",
		franchise: "我推的孩子",
		image: fanwork049,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "剪纸蒙太奇",
		character: "战场原黑仪",
		franchise: "物语系列",
		image: fanwork050,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "霓虹黑色电影",
		character: "常守朱",
		franchise: "心理测量者",
		image: fanwork051,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "模拟胶片心理片",
		character: "碇真嗣",
		franchise: "新世纪福音战士",
		image: fanwork052,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "间谍惊悚电影",
		character: "葛城美里",
		franchise: "新世纪福音战士",
		image: fanwork053,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "浮世绘月夜",
		character: "绫波丽",
		franchise: "新世纪福音战士",
		image: fanwork054,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "蓝晒深海植物",
		character: "绫波丽",
		franchise: "新世纪福音战士",
		image: fanwork055,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "摩登时装摄影",
		character: "真希波·玛丽·伊拉丝蒂亚斯",
		franchise: "新世纪福音战士",
		image: fanwork056,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "大理石超现实",
		character: "渚薰",
		franchise: "新世纪福音战士",
		image: fanwork057,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "巴洛克机械花园",
		character: "惣流·明日香·兰格雷",
		franchise: "新世纪福音战士",
		image: fanwork058,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "复古未来车站",
		character: "惣流·明日香·兰格雷",
		franchise: "新世纪福音战士",
		image: fanwork059,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "博物药草谱",
		character: "猫猫",
		franchise: "药屋少女的呢喃",
		image: fanwork060,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "太阳朋克温室",
		character: "艾玛",
		franchise: "约定的梦幻岛",
		image: fanwork061,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "流星之路",
		character: "芙莉莲",
		franchise: "葬送的芙莉莲",
		image: fanwork062,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "前拉斐尔派药草园",
		character: "菲伦",
		franchise: "葬送的芙莉莲",
		image: fanwork063,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "表现主义木刻",
		character: "缠流子",
		franchise: "斩服少女",
		image: fanwork064,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "无下限夜景",
		character: "成年五条悟",
		franchise: "咒术回战",
		image: fanwork065,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "壁画铁钉光环",
		character: "钉崎野蔷薇",
		franchise: "咒术回战",
		image: fanwork066,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "瓷器水彩花园",
		character: "薇尔莉特",
		franchise: "紫罗兰永恒花园",
		image: fanwork067,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "彩窗乐章",
		character: "立华奏",
		franchise: "Angel Beats!",
		image: fanwork068,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "雨夜棋局",
		character: "成年鲁路修",
		franchise: "Code Geass",
		image: fanwork069,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "新艺术彩窗",
		character: "C.C.",
		franchise: "Code Geass",
		image: fanwork070,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "粗野主义栖居地",
		character: "02",
		franchise: "DARLING in the FRANXX",
		image: fanwork071,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "彩饰手抄本",
		character: "Saber",
		franchise: "Fate stay night",
		image: fanwork072,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "朋克地下杂志",
		character: "井芹仁菜",
		franchise: "Girls Band Cry",
		image: fanwork073,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "至上主义棋盘",
		character: "白",
		franchise: "NO GAME NO LIFE",
		image: fanwork074,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "荷兰月光静物",
		character: "蕾姆",
		franchise: "Re 从零开始的异世界生活",
		image: fanwork075,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "全息彩窗舞台",
		character: "Vivy",
		franchise: "Vivy Fluorite Eye Song",
		image: fanwork076,
		groups: ["classic"],
		focus: "50% 42%",
	},
	{
		title: "孟菲斯魔法工作室",
		character: "若月妮可",
		franchise: "WITCH WATCH",
		image: fanwork077,
		groups: ["current"],
		focus: "50% 42%",
	},
];

const featuredTitles = ["紫藤雨夜", "无下限夜景", "黎明列车站"];
export const featuredFanworks = featuredTitles
	.map((title) => fanworks.find((artwork) => artwork.title === title))
	.filter((artwork): artwork is Fanwork => Boolean(artwork));

export const fanworkFilters = [
	{ id: "all", label: "全部" },
	{ id: "demon-slayer", label: "鬼灭之刃" },
	{ id: "classic", label: "经典 IP" },
	{ id: "current", label: "近年作品" },
] as const;
