import type { ImageMetadata } from "astro";
import frierenMeteor from "@/assets/images/fanworks/frieren-meteor.webp";
import gojoLimitless from "@/assets/images/fanworks/gojo-limitless.webp";
import lelouchChess from "@/assets/images/fanworks/lelouch-chess.webp";
import nezukoWisteria from "@/assets/images/fanworks/nezuko-wisteria.webp";
import reimuShrine from "@/assets/images/fanworks/reimu-shrine.webp";
import rengokuDawn from "@/assets/images/fanworks/rengoku-dawn.webp";
import sasukeRainShrine from "@/assets/images/fanworks/sasuke-rain-shrine.webp";
import sungjinwooShadow from "@/assets/images/fanworks/sungjinwoo-shadow.webp";
import tanjiroSunrise from "@/assets/images/fanworks/tanjiro-sunrise.webp";

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
		title: "紫藤雨夜",
		character: "成年灶门祢豆子",
		franchise: "鬼灭之刃",
		image: nezukoWisteria,
		groups: ["demon-slayer"],
		focus: "50% 35%",
	},
	{
		title: "无下限夜景",
		character: "成年五条悟",
		franchise: "咒术回战",
		image: gojoLimitless,
		groups: ["classic"],
		focus: "50% 36%",
	},
	{
		title: "黎明列车站",
		character: "炼狱杏寿郎",
		franchise: "鬼灭之刃",
		image: rengokuDawn,
		groups: ["demon-slayer"],
		focus: "50% 35%",
	},
	{
		title: "雨后神社",
		character: "成年宇智波佐助",
		franchise: "火影忍者",
		image: sasukeRainShrine,
		groups: ["classic"],
		focus: "52% 34%",
	},
	{
		title: "流星之路",
		character: "芙莉莲",
		franchise: "葬送的芙莉莲",
		image: frierenMeteor,
		groups: ["current"],
		focus: "50% 65%",
	},
	{
		title: "雨夜棋局",
		character: "成年鲁路修",
		franchise: "Code Geass",
		image: lelouchChess,
		groups: ["classic"],
		focus: "50% 36%",
	},
	{
		title: "暗影之门",
		character: "成振宇",
		franchise: "我独自升级",
		image: sungjinwooShadow,
		groups: ["current"],
		focus: "50% 42%",
	},
	{
		title: "日轮初晓",
		character: "成年灶门炭治郎",
		franchise: "鬼灭之刃",
		image: tanjiroSunrise,
		groups: ["demon-slayer"],
		focus: "52% 35%",
	},
	{
		title: "雨后神社祭",
		character: "博丽灵梦",
		franchise: "东方 Project",
		image: reimuShrine,
		groups: ["classic"],
		focus: "50% 38%",
	},
];

export const featuredFanworks = fanworks.slice(0, 3);

export const fanworkFilters = [
	{ id: "all", label: "全部" },
	{ id: "demon-slayer", label: "鬼灭之刃" },
	{ id: "classic", label: "经典 IP" },
	{ id: "current", label: "年度热门" },
] as const;
