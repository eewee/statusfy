(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{190:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return s});const n=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let i;t&&(i=e.reduce((e,i)=>(e[i]=t(`statuses.${i}`),e),{}));return{keys:e,i18nKeys:i,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},s=(t,e)=>{const i=n(t);return{title:i.i18nKeys[e],icon:i.icons[e]}}},192:function(t,e,i){"use strict";var n={props:{date:{type:String,required:!0},format:{default:"short",validator:function(t){return-1!==["short","long","month"].indexOf(t)}}},computed:{label:function(){var t=this.$t.bind(this);return this.$statusfy.dayjs(this.date).locale(this.$i18n.locale).format(t("dates.formats.".concat(this.format)))}}},s=i(4),a=Object(s.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])},[],!1,null,null,null);a.options.__file="NiceDate.vue";e.a=a.exports},193:function(t,e,i){"use strict";var n=i(75);i.n(n).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},194:function(t,e,i){"use strict";var n=i(75);i.n(n).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},195:function(t,e,i){"use strict";var n=i(75);i.n(n).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},196:function(t,e,i){"use strict";var n=i(75);i.n(n).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},197:function(t,e,i){"use strict";var n=i(75);i.n(n).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},203:function(t,e,i){"use strict";i.d(e,"a",function(){return n});class n{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(t,e={}){const i=Object.keys(e);let n,s=`${this.basePath}${t}`;if(this.isStatic)s="/static/content"+s,s+=(n=i.map(t=>`${t}-${e[t]}`).join("."))?`.${n}`:"",s+=`.${this.lang}.json`;else{let t=i.map(t=>`${t}=${e[t]}`).join("&");s+=t?`?${t}`:""}return s}async getSystems(){return this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return this.axios.$get(this.buildUrl("/incidents/timeline"))}}},205:function(t,e,i){var n=i(238);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(36).default)("0cd17a7e",n,!0,{sourceMap:!1})},206:function(t,e,i){var n=i(240);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(36).default)("5d93d434",n,!0,{sourceMap:!1})},207:function(t,e,i){"use strict";i(208);var n=i(222),s=i.n(n),a=(i(223),i(190)),r=(i(193),i(194),i(195),i(196),i(197),i(75));i.n(r).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var c={components:{NiceDate:i(192).a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return-1!==[0,3,4].indexOf(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(a.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return s()({value:this.incident.resolved},Object(a.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var i=this.$refs.content.querySelectorAll(".update-block"),n=this.$refs.content.querySelectorAll("a.external"),s=this.$refs["external-link-icon"].$el;i.forEach(function(i,n){var s=i.querySelectorAll(".update-block-date")[0],a=t.$statusfy.dayjs(s.innerHTML);s.innerHTML=a.locale(t.$i18n.locale).format(e("dates.formats.long"))}),n.forEach(function(t,e){t.appendChild(s)})}}},o=i(4),l=Object(o.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"incident",class:t.incident.severity+" "+(t.resolved.value?"resolved":"unresolved")},[i("div",{staticClass:"incident-header",class:"level-"+t.level},[i("div",{staticClass:"incident-title"},[i("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?i("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[i("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),i("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,function(e){return i("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])}))]),t._v(" "),i("div",{staticClass:"incident-subtitle"},[i("div",{staticClass:"status"},[i("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),i("div",[i("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),i("div",{staticClass:"incident-body"},[t.summary?i("div",[t.incident.description?i("div",[t._v(t._s(t.incident.description))]):t._e()]):i("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),i("div",{staticClass:"hidden"},[i("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])},[],!1,null,null,null);l.options.__file="Incident.vue";e.a=l.exports},237:function(t,e,i){"use strict";var n=i(205);i.n(n).a},238:function(t,e,i){(t.exports=i(35)(!1)).push([t.i,"\n.collapse li[data-v-7108c084]:nth-child(n+4){display:none\n}\n.btn[data-v-7108c084]{margin-top:1rem;margin-bottom:1rem;text-align:center;cursor:pointer;width:100%\n}",""])},239:function(t,e,i){"use strict";var n=i(206);i.n(n).a},240:function(t,e,i){(t.exports=i(35)(!1)).push([t.i,"\n.incidents-container[data-v-5e9b802a]{margin-top:1rem;margin-bottom:1rem\n}\n.incidents-period[data-v-5e9b802a]{padding-top:1rem;padding-bottom:1rem;position:relative\n}\n.incidents-period-title[data-v-5e9b802a]{font-size:1.25rem;padding-top:.25rem;font-weight:500;margin-bottom:1rem\n}\n.incidents-message[data-v-5e9b802a]{color:var(--grey-darker)\n}",""])},241:function(t,e,i){"use strict";var n={components:{Incident:i(207).a},props:{incidents:{type:Array,required:!0}},data:function(){return{collapsed:!0}}},s=(i(237),i(4)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"list-reset",class:{collapse:t.collapsed&&t.incidents.length>3}},[t._l(t.incidents,function(t){return i("li",{key:t.id},[i("incident",{attrs:{incident:t,summary:!0,level:3}})],1)}),t._v(" "),t.incidents.length>3?i("div",{staticClass:"btn",on:{click:function(e){t.collapsed=!t.collapsed}}},[t.collapsed?[t._v("+ "+t._s(t.$t("incidents.collapse.show",{count:t.incidents.length})))]:[t._v("- "+t._s(t.$t("incidents.collapse.hide")))]],2):t._e()],2)])},[],!1,null,"7108c084",null);a.options.__file="IncidentsCollapse.vue";var r={components:{IncidentsCollapse:a.exports,NiceDate:i(192).a},props:{periods:{type:Array,required:!0}}},c=(i(239),Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"incidents-container"},t._l(t.periods,function(e){return i("div",{key:e.date,staticClass:"incidents-period"},[i("div",[i("h2",{staticClass:"incidents-period-title"},[i("nice-date",{attrs:{date:e.id,format:"month"}})],1),t._v(" "),0===e.incidents.length?i("div",{staticClass:"incidents-message"},[t._v("\n        "+t._s(t.$t("incidents.no-incidents"))+"\n      ")]):t._e(),t._v(" "),i("incidents-collapse",{attrs:{incidents:e.incidents}})],1)])}))},[],!1,null,"5e9b802a",null));c.options.__file="IncidentsHistory.vue";e.a=c.exports},242:function(t,e,i){"use strict";var n=i(75),s=i.n(n);s.a.register({"fortawesome/chevron-right-solid":{width:16,height:16,viewBox:"0 0 320 512",data:'<path pid="0" _fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>'}}),s.a.register({"fortawesome/chevron-left-solid":{width:16,height:16,viewBox:"0 0 320 512",data:'<path pid="0" _fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>'}});var a={props:{info:{type:Object,required:!0,default:function(){return{page:1,pageSize:10,totalPages:1}}}},computed:{previousLink:function(){return 2===this.info.page?this.localePath("history"):this.localePath({name:"history-page",params:{page:this.info.page-1}})}}},r=i(4),c=Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.info.totalPages>1?i("div",{staticClass:"text-center pb-4 mb-2"},[1!==t.info.page?i("nuxt-link",{staticClass:"btn mx-2",attrs:{to:t.previousLink}},[i("svgicon",{staticClass:"svg-inline--fa fa-w-16 mr-1",attrs:{name:"fortawesome/chevron-left-solid"}}),t._v("\n    "+t._s(t.$t("incidents.paginator.previous"))+"\n  ")],1):t._e(),t._v(" "),t.info.page!==t.info.totalPages?i("nuxt-link",{staticClass:"btn mx-2",attrs:{to:t.localePath({name:"history-page",params:{page:t.info.page+1}})}},[t._v("\n    "+t._s(t.$t("incidents.paginator.next"))+"\n    "),i("svgicon",{staticClass:"svg-inline--fa fa-w-16 mr-1",attrs:{name:"fortawesome/chevron-right-solid"}})],1):t._e()],1):t._e()},[],!1,null,null,null);c.options.__file="IncidentsPaginator.vue";e.a=c.exports},285:function(t,e,i){"use strict";i.r(e);i(214);var n,s=i(215),a=i.n(s),r=i(203),c=i(242),o={layout:"incidents",components:{IncidentsHistory:i(241).a,IncidentsPaginator:c.a},asyncData:(n=a()(regeneratorRuntime.mark(function t(e){var i,n,s,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.app,n=e.params,s=new r.a(i.$axios,i.i18n.locale),t.next=4,s.getIncidentsHistory(n.page);case 4:return a=t.sent,t.abrupt("return",{periods:a.periods,pageInfo:{page:a.page,pageSize:a.page_size,totalPages:a.total_pages}});case 6:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)}),head:function(){var t=this.$t.bind(this);return{title:"".concat(t("incidents.incidents-history")," - ").concat(t("incidents.paginator.page")," ").concat(this.pageInfo.page),meta:[{hid:"description",name:"description",content:t("incidents.incidents-history-description")}]}},validate:function(t){var e=t.params;return/^\d+$/.test(e.page)}},l=i(4),d=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("incidents-history",{attrs:{periods:this.periods}}),this._v(" "),e("incidents-paginator",{attrs:{info:this.pageInfo}})],1)},[],!1,null,null,null);d.options.__file="_page.vue";e.default=d.exports}}]);