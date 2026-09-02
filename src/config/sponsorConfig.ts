import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "支持页已关闭",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "当前网站不提供资金支持、结算或自动交付入口。",

	// 支持用途说明
	usage:
		"当前阶段只展示作品与研究，不接入资金支持、结算或商业入口。",

	// 是否显示支持者列表
	showSponsorsList: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: false,

	// 是否在文章详情页底部显示支持按钮
	showButtonInPost: false,

	// 支持方式列表。当前保持为空，避免任何资金入口或外部入口被展示。
	methods: [],

	// 支持者列表（可选）
	sponsors: [],
};
