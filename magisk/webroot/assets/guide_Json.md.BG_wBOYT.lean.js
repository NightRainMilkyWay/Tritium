import{_ as t,c as i,a4 as a,o as n}from"./chunks/framework.BXE2pAXj.js";const c=JSON.parse('{"title":"基本信息","titleTemplate":"Tritium_docs","description":"","frontmatter":{"title":"基本信息","layout":"doc","titleTemplate":"Tritium_docs"},"headers":[],"relativePath":"guide/Json.md","filePath":"guide/Json.md","lastUpdated":1729565666000}'),e={name:"guide/Json.md"};function l(p,s,h,d,r,o){return n(),i("div",null,s[0]||(s[0]=[a(`<h3 id="json信息" tabindex="-1">Json信息 <a class="header-anchor" href="#json信息" aria-label="Permalink to &quot;Json信息&quot;">​</a></h3><p>在这里你可以定义配置文件的名称和作者信息, 请注意不要修改配置文件版本, 此字段将会用于验证调度与该配置是否兼容.</p><table tabindex="0"><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">string</td><td style="text-align:left;">配置文件的名称</td></tr><tr><td style="text-align:left;">author</td><td style="text-align:left;">string</td><td style="text-align:left;">配置文件的作者信息</td></tr><tr><td style="text-align:left;">configVersion</td><td style="text-align:left;">int</td><td style="text-align:left;">配置文件版本</td></tr></tbody></table><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Dimensity1100/1200/1300&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//名称</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;chenzyadb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//作者</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;configVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//版本</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FF938A;--shiki-dark-font-style:italic;">   ...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">   //其他模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>configVersion</code> 字段会验证调度版本，请确定版本对应，使用最新发布版本时，应与开发者仓库中的保持一致</p></div>`,5)]))}const g=t(e,[["render",l]]);export{c as __pageData,g as default};