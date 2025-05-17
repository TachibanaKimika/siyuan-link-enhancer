[English](./README.md)
# 思源笔记 URL 标题增强插件

> Created by Claude 3.7 Sonnet

## 简介
URL标题增强插件可以将您粘贴的URL转换为带有页面标题的有意义链接。当您直接将URL粘贴到思源笔记中时，该插件会自动获取页面标题，并将纯文本URL转换为正确格式的链接，显示标题而非原始URL。

## 功能特点
- 自动检测粘贴的URL
- 实时获取网页标题
- 将纯文本URL转换为带有适当标题文本的格式化链接
- 如果无法获取标题，则回退到显示原始URL
- 适用于任何有效的URL格式

## 使用方法
只需复制任何URL并将其粘贴到您的思源笔记中。插件会自动将其转换为带有页面标题的链接。

例如：
1. 复制一个URL，如 `https://github.com/siyuan-note/siyuan`
2. 将其粘贴到思源笔记中
3. 插件会自动将其转换为显示"SiYuan - A privacy-first, self-hosted personal knowledge management software"（或该页面当前的标题）的链接

## 安装方法
* 从思源笔记集市下载插件
* 在下载选项卡中启用它
* 无需配置 - 开箱即用

## 开发
* 将此仓库克隆到本地开发文件夹
* 安装 [NodeJS](https://nodejs.org/en/download) 和 [pnpm](https://pnpm.io/installation)
* 在仓库文件夹下运行 `pnpm i` 命令
* 执行 `pnpm run dev` 进行实时编译
* 在思源中打开集市并在下载选项卡中启用插件

### 开发文件
* i18n/*
* icon.png (160*160)
* index.css
* index.js
* plugin.json
* preview.png (1024*768)
* README*.md
* [前端 API](https://github.com/siyuan-note/petal)
* [后端 API](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md)

## 国际化和语言支持
本插件支持英文和简体中文两种语言。
