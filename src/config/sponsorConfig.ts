import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 赞助用途说明
	usage:
		"你的支持让我有动力继续分享真实的AI搞钱经验。每一分钱都会用来买更好的AI工具做测试，然后把结果写给你看。",

	// 是否显示赞助者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: false,

	// 是否在文章详情页底部显示赞助按钮
	showButtonInPost: true,

	// 赞助方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/alipay.png",
			link: "",
			description: "使用 支付宝 扫码赞助",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.png",
			link: "",
			description: "使用 微信 扫码赞助",
			enabled: true,
		},
	],

	// 赞助者列表（可选）
	sponsors: [],
};
