import type { Live2DWidgetConfig, SpineModelConfig } from "../types/pioConfig";

// 网站不加载看板娘或第三方角色模型；保留最小禁用配置以兼容主题组件。
export const spineModelConfig: SpineModelConfig = {
	enable: false,
	model: { path: "" },
	position: { corner: "bottom-left" },
	size: { width: 0, height: 0 },
	interactive: { enabled: false, clickAnimations: [], clickMessages: [], idleAnimations: [] },
};

export const live2dWidgetConfig: Live2DWidgetConfig = {
	enable: false,
	model: [],
};
