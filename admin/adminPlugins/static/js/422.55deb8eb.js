"use strict";(self["webpackChunkadmin_layout"]=self["webpackChunkadmin_layout"]||[]).push([[422],{72422:(a,e,t)=>{t.r(e),t.d(e,{default:()=>m});var n=t(94016),r={class:"home"},l=(0,n.createElementVNode)("div",{class:"flex-column"},[(0,n.createElementVNode)("pre",{style:{"text-align":"start"}},'        // vue.config.js \n        module.export = {\n          ...\n          configureWebpack: (config) => {\n            config.plugins.push(\n              new ModuleFederationPlugin({\n                name: "ryback",\n                remotes: {\n                  "admin-plugins": "adminPlugins@http://192.168.0.53/admin-plugins/adminPlugins.js",\n                },\n                shared: {\n                  vue: {\n                    eager: true,\n                  },\n                  pinia:{\n                    eager: true\n                  },\n                  \'vue-router\':{\n                    eager: true\n                  }\n                },\n              })\n           );\n          },\n        }\n        // 下载 admin.plugins.d.ts 放入工程中\n        // main.ts 同级创建 bootstrap.ts 文件 \n        // main.ts 文件内容复制到 bootstrap.ts \n        // main.ts 中  \n         import("admin-plugins")\n         import("./bootstrap")\n      '),(0,n.createElementVNode)("a",{href:"http://192.168.0.53/admin-plugins/admin.plugins.d.ts"},"admin.plugins.d.ts文件")],-1),o=[l];function i(a,e,t,l,i,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,o)}var s={class:"hello"},c=(0,n.createStaticVNode)('<p data-v-135aacaf> For a guide and recipes on how to configure / customize this project,<br data-v-135aacaf> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>vue-cli documentation</a>. </p><h3 data-v-135aacaf>Installed CLI Plugins</h3><ul data-v-135aacaf><li data-v-135aacaf><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-135aacaf>babel</a></li><li data-v-135aacaf><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-135aacaf>router</a></li><li data-v-135aacaf><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-135aacaf>eslint</a></li><li data-v-135aacaf><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-135aacaf>typescript</a></li></ul><h3 data-v-135aacaf>Essential Links</h3><ul data-v-135aacaf><li data-v-135aacaf><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>Core Docs</a></li><li data-v-135aacaf><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>Forum</a></li><li data-v-135aacaf><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>Community Chat</a></li><li data-v-135aacaf><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-135aacaf>Twitter</a></li><li data-v-135aacaf><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>News</a></li></ul><h3 data-v-135aacaf>Ecosystem</h3><ul data-v-135aacaf><li data-v-135aacaf><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>vue-router</a></li><li data-v-135aacaf><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>vuex</a></li><li data-v-135aacaf><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-135aacaf>vue-devtools</a></li><li data-v-135aacaf><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-135aacaf>vue-loader</a></li><li data-v-135aacaf><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-135aacaf>awesome-vue</a></li></ul>',7);function u(a,e,t,r,l,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",s,[(0,n.createElementVNode)("h1",null,(0,n.toDisplayString)(a.msg),1),c])}const v=(0,n.defineComponent)({name:"HelloWorld",props:{msg:String}});var d=t(71241);const p=(0,d.A)(v,[["render",u],["__scopeId","data-v-135aacaf"]]),f=p,g=(0,n.defineComponent)({name:"HomeView",components:{HelloWorld:f}}),h=(0,d.A)(g,[["render",i]]),m=h}}]);