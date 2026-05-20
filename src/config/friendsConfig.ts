import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "清遥",
		imgurl: "https://upyun.askrabbit.net/avatar.png",
		desc: "遥夜泛清瑟，西风生翠萝。",
		siteurl: "https://blog.askrabbit.net/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "许家大院",
		imgurl: "https://blog.hesuisui.top/upload/ok-logo.png",
		desc: "经常更新一些故事很有趣",
		siteurl: "https://blog.hesuisui.top/",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "椰汁の小站",
		imgurl: "https://free.picui.cn/free/2026/03/23/69c12fe83f7a4.jpg",
		desc: "一个热爱编程的学生",
		siteurl: "https://home.132614.xyz/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "番茄主理人",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
		desc: "坐而言不如起而行.",
		siteurl: "https://fqzlr.com/",
		tags: ["Blog"],
		weight: 7,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
