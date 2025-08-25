(()=>{var a={};a.id=953,a.ids=[953],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},25799:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=c(82831),e=c(43740),f=c(29305),g=c(61981),h=c(26906),i=c(69168);("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29088:(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unauthorized",{enumerable:!0,get:function(){return d}}),c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41379:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,65169,23))},47614:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{getRedirectError:function(){return g},getRedirectStatusCodeFromError:function(){return l},getRedirectTypeFromError:function(){return k},getURLFromRedirectError:function(){return j},permanentRedirect:function(){return i},redirect:function(){return h}});let d=c(91203),e=c(92781),f=c(19121).actionAsyncStorage;function g(a,b,c){void 0===c&&(c=d.RedirectStatusCode.TemporaryRedirect);let f=Object.defineProperty(Error(e.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return f.digest=e.REDIRECT_ERROR_CODE+";"+b+";"+a+";"+c+";",f}function h(a,b){var c;throw null!=b||(b=(null==f||null==(c=f.getStore())?void 0:c.isAction)?e.RedirectType.push:e.RedirectType.replace),g(a,b,d.RedirectStatusCode.TemporaryRedirect)}function i(a,b){throw void 0===b&&(b=e.RedirectType.replace),g(a,b,d.RedirectStatusCode.PermanentRedirect)}function j(a){return(0,e.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function k(a){if(!(0,e.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function l(a){if(!(0,e.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},55451:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,3991,23))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64363:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(49754),e=c(9117),f=c(46595),g=c(32324),h=c(39326),i=c(38928),j=c(20175),k=c(12),l=c(54290),m=c(12696),n=c(82802),o=c(77533),p=c(45229),q=c(32822),r=c(261),s=c(26453),t=c(52474),u=c(26713),v=c(51356),w=c(62685),x=c(36225),y=c(63446),z=c(2762),A=c(45742),B=c(86439),C=c(81170),D=c.n(C),E=c(62506),F=c(91203),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,65777)),"/Users/prestoneaton/Downloads/READY-FOR-A/app/blog/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,16953)),"/Users/prestoneaton/Downloads/READY-FOR-A/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,81170,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,87028,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,90461,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,32768,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/Users/prestoneaton/Downloads/READY-FOR-A/app/blog/[slug]/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/blog/[slug]/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw aF||b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},64404:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"notFound",{enumerable:!0,get:function(){return e}});let d=""+c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function e(){let a=Object.defineProperty(Error(d),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=d,a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},64712:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=c(25799).unstable_rethrow;("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},65169:(a,b,c)=>{let{createProxy:d}=c(39893);a.exports=d("/Users/prestoneaton/Downloads/READY-FOR-A/node_modules/next/dist/client/app-dir/link.js")},65777:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>ak});var d=c(75338),e=c(74515),f=c(93045);function g(){for(var a,b,c=0,d="",e=arguments.length;c<e;c++)(a=arguments[c])&&(b=function a(b){var c,d,e="";if("string"==typeof b||"number"==typeof b)e+=b;else if("object"==typeof b)if(Array.isArray(b)){var f=b.length;for(c=0;c<f;c++)b[c]&&(d=a(b[c]))&&(e&&(e+=" "),e+=d)}else for(d in b)b[d]&&(e&&(e+=" "),e+=d);return e}(a))&&(d&&(d+=" "),d+=b);return d}let h=(a,b)=>{if(0===a.length)return b.classGroupId;let c=a[0],d=b.nextPart.get(c),e=d?h(a.slice(1),d):void 0;if(e)return e;if(0===b.validators.length)return;let f=a.join("-");return b.validators.find(({validator:a})=>a(f))?.classGroupId},i=/^\[(.+)\]$/,j=(a,b,c,d)=>{a.forEach(a=>{if("string"==typeof a){(""===a?b:k(b,a)).classGroupId=c;return}if("function"==typeof a)return l(a)?void j(a(d),b,c,d):void b.validators.push({validator:a,classGroupId:c});Object.entries(a).forEach(([a,e])=>{j(e,k(b,a),c,d)})})},k=(a,b)=>{let c=a;return b.split("-").forEach(a=>{c.nextPart.has(a)||c.nextPart.set(a,{nextPart:new Map,validators:[]}),c=c.nextPart.get(a)}),c},l=a=>a.isThemeGetter,m=(a,b)=>b?a.map(([a,c])=>[a,c.map(a=>"string"==typeof a?b+a:"object"==typeof a?Object.fromEntries(Object.entries(a).map(([a,c])=>[b+a,c])):a)]):a,n=a=>{if(a.length<=1)return a;let b=[],c=[];return a.forEach(a=>{"["===a[0]?(b.push(...c.sort(),a),c=[]):c.push(a)}),b.push(...c.sort()),b},o=/\s+/;function p(){let a,b,c=0,d="";for(;c<arguments.length;)(a=arguments[c++])&&(b=q(a))&&(d&&(d+=" "),d+=b);return d}let q=a=>{let b;if("string"==typeof a)return a;let c="";for(let d=0;d<a.length;d++)a[d]&&(b=q(a[d]))&&(c&&(c+=" "),c+=b);return c},r=a=>{let b=b=>b[a]||[];return b.isThemeGetter=!0,b},s=/^\[(?:([a-z-]+):)?(.+)\]$/i,t=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),v=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,w=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,x=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,y=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,z=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=a=>C(a)||u.has(a)||t.test(a),B=a=>P(a,"length",Q),C=a=>!!a&&!Number.isNaN(Number(a)),D=a=>P(a,"number",C),E=a=>!!a&&Number.isInteger(Number(a)),F=a=>a.endsWith("%")&&C(a.slice(0,-1)),G=a=>s.test(a),H=a=>v.test(a),I=new Set(["length","size","percentage"]),J=a=>P(a,I,R),K=a=>P(a,"position",R),L=new Set(["image","url"]),M=a=>P(a,L,T),N=a=>P(a,"",S),O=()=>!0,P=(a,b,c)=>{let d=s.exec(a);return!!d&&(d[1]?"string"==typeof b?d[1]===b:b.has(d[1]):c(d[2]))},Q=a=>w.test(a)&&!x.test(a),R=()=>!1,S=a=>y.test(a),T=a=>z.test(a);Symbol.toStringTag;let U=function(a,...b){let c,d,e,f=function(k){let l;return d=(c={cache:(a=>{if(a<1)return{get:()=>void 0,set:()=>{}};let b=0,c=new Map,d=new Map,e=(e,f)=>{c.set(e,f),++b>a&&(b=0,d=c,c=new Map)};return{get(a){let b=c.get(a);return void 0!==b?b:void 0!==(b=d.get(a))?(e(a,b),b):void 0},set(a,b){c.has(a)?c.set(a,b):e(a,b)}}})((l=b.reduce((a,b)=>b(a),a())).cacheSize),parseClassName:(a=>{let{separator:b,experimentalParseClassName:c}=a,d=1===b.length,e=b[0],f=b.length,g=a=>{let c,g=[],h=0,i=0;for(let j=0;j<a.length;j++){let k=a[j];if(0===h){if(k===e&&(d||a.slice(j,j+f)===b)){g.push(a.slice(i,j)),i=j+f;continue}if("/"===k){c=j;continue}}"["===k?h++:"]"===k&&h--}let j=0===g.length?a:a.substring(i),k=j.startsWith("!"),l=k?j.substring(1):j;return{modifiers:g,hasImportantModifier:k,baseClassName:l,maybePostfixModifierPosition:c&&c>i?c-i:void 0}};return c?a=>c({className:a,parseClassName:g}):g})(l),...(a=>{let b=(a=>{let{theme:b,prefix:c}=a,d={nextPart:new Map,validators:[]};return m(Object.entries(a.classGroups),c).forEach(([a,c])=>{j(c,d,a,b)}),d})(a),{conflictingClassGroups:c,conflictingClassGroupModifiers:d}=a;return{getClassGroupId:a=>{let c=a.split("-");return""===c[0]&&1!==c.length&&c.shift(),h(c,b)||(a=>{if(i.test(a)){let b=i.exec(a)[1],c=b?.substring(0,b.indexOf(":"));if(c)return"arbitrary.."+c}})(a)},getConflictingClassGroupIds:(a,b)=>{let e=c[a]||[];return b&&d[a]?[...e,...d[a]]:e}}})(l)}).cache.get,e=c.cache.set,f=g,g(k)};function g(a){let b=d(a);if(b)return b;let f=((a,b)=>{let{parseClassName:c,getClassGroupId:d,getConflictingClassGroupIds:e}=b,f=[],g=a.trim().split(o),h="";for(let a=g.length-1;a>=0;a-=1){let b=g[a],{modifiers:i,hasImportantModifier:j,baseClassName:k,maybePostfixModifierPosition:l}=c(b),m=!!l,o=d(m?k.substring(0,l):k);if(!o){if(!m||!(o=d(k))){h=b+(h.length>0?" "+h:h);continue}m=!1}let p=n(i).join(":"),q=j?p+"!":p,r=q+o;if(f.includes(r))continue;f.push(r);let s=e(o,m);for(let a=0;a<s.length;++a){let b=s[a];f.push(q+b)}h=b+(h.length>0?" "+h:h)}return h})(a,c);return e(a,f),f}return function(){return f(p.apply(null,arguments))}}(()=>{let a=r("colors"),b=r("spacing"),c=r("blur"),d=r("brightness"),e=r("borderColor"),f=r("borderRadius"),g=r("borderSpacing"),h=r("borderWidth"),i=r("contrast"),j=r("grayscale"),k=r("hueRotate"),l=r("invert"),m=r("gap"),n=r("gradientColorStops"),o=r("gradientColorStopPositions"),p=r("inset"),q=r("margin"),s=r("opacity"),t=r("padding"),u=r("saturate"),v=r("scale"),w=r("sepia"),x=r("skew"),y=r("space"),z=r("translate"),I=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",G,b],Q=()=>[G,b],R=()=>["",A,B],S=()=>["auto",C,G],T=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",G],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[C,G];return{cacheSize:500,separator:":",theme:{colors:[O],spacing:[A,B],blur:["none","",H,G],brightness:Z(),borderColor:[a],borderRadius:["none","","full",H,G],borderSpacing:Q(),borderWidth:R(),contrast:Z(),grayscale:X(),hueRotate:Z(),invert:X(),gap:Q(),gradientColorStops:[a],gradientColorStopPositions:[F,B],inset:P(),margin:P(),opacity:Z(),padding:Q(),saturate:Z(),scale:Z(),sepia:X(),skew:Z(),space:Q(),translate:Q()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[H]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...T(),G]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E,G]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",E,G]}],"grid-cols":[{"grid-cols":[O]}],"col-start-end":[{col:["auto",{span:["full",E,G]},G]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[O]}],"row-start-end":[{row:["auto",{span:[E,G]},G]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[t]}],px:[{px:[t]}],py:[{py:[t]}],ps:[{ps:[t]}],pe:[{pe:[t]}],pt:[{pt:[t]}],pr:[{pr:[t]}],pb:[{pb:[t]}],pl:[{pl:[t]}],m:[{m:[q]}],mx:[{mx:[q]}],my:[{my:[q]}],ms:[{ms:[q]}],me:[{me:[q]}],mt:[{mt:[q]}],mr:[{mr:[q]}],mb:[{mb:[q]}],ml:[{ml:[q]}],"space-x":[{"space-x":[y]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[y]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,b]}],"min-w":[{"min-w":[G,b,"min","max","fit"]}],"max-w":[{"max-w":[G,b,"none","full","min","max","fit","prose",{screen:[H]},H]}],h:[{h:[G,b,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,b,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,b,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,b,"auto","min","max","fit"]}],"font-size":[{text:["base",H,B]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",D]}],"font-family":[{font:[O]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",C,D]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[s]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[s]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,B]}],"underline-offset":[{"underline-offset":["auto",A,G]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[s]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...T(),K]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",J]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[o]}],"gradient-via-pos":[{via:[o]}],"gradient-to-pos":[{to:[o]}],"gradient-from":[{from:[n]}],"gradient-via":[{via:[n]}],"gradient-to":[{to:[n]}],rounded:[{rounded:[f]}],"rounded-s":[{"rounded-s":[f]}],"rounded-e":[{"rounded-e":[f]}],"rounded-t":[{"rounded-t":[f]}],"rounded-r":[{"rounded-r":[f]}],"rounded-b":[{"rounded-b":[f]}],"rounded-l":[{"rounded-l":[f]}],"rounded-ss":[{"rounded-ss":[f]}],"rounded-se":[{"rounded-se":[f]}],"rounded-ee":[{"rounded-ee":[f]}],"rounded-es":[{"rounded-es":[f]}],"rounded-tl":[{"rounded-tl":[f]}],"rounded-tr":[{"rounded-tr":[f]}],"rounded-br":[{"rounded-br":[f]}],"rounded-bl":[{"rounded-bl":[f]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[s]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[s]}],"divide-style":[{divide:U()}],"border-color":[{border:[e]}],"border-color-x":[{"border-x":[e]}],"border-color-y":[{"border-y":[e]}],"border-color-s":[{"border-s":[e]}],"border-color-e":[{"border-e":[e]}],"border-color-t":[{"border-t":[e]}],"border-color-r":[{"border-r":[e]}],"border-color-b":[{"border-b":[e]}],"border-color-l":[{"border-l":[e]}],"divide-color":[{divide:[e]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[A,G]}],"outline-w":[{outline:[A,B]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[s]}],"ring-offset-w":[{"ring-offset":[A,B]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",H,N]}],"shadow-color":[{shadow:[O]}],opacity:[{opacity:[s]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[c]}],brightness:[{brightness:[d]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",H,G]}],grayscale:[{grayscale:[j]}],"hue-rotate":[{"hue-rotate":[k]}],invert:[{invert:[l]}],saturate:[{saturate:[u]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[c]}],"backdrop-brightness":[{"backdrop-brightness":[d]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[k]}],"backdrop-invert":[{"backdrop-invert":[l]}],"backdrop-opacity":[{"backdrop-opacity":[s]}],"backdrop-saturate":[{"backdrop-saturate":[u]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[g]}],"border-spacing-x":[{"border-spacing-x":[g]}],"border-spacing-y":[{"border-spacing-y":[g]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[E,G]}],"translate-x":[{"translate-x":[z]}],"translate-y":[{"translate-y":[z]}],"skew-x":[{"skew-x":[x]}],"skew-y":[{"skew-y":[x]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Q()}],"scroll-mx":[{"scroll-mx":Q()}],"scroll-my":[{"scroll-my":Q()}],"scroll-ms":[{"scroll-ms":Q()}],"scroll-me":[{"scroll-me":Q()}],"scroll-mt":[{"scroll-mt":Q()}],"scroll-mr":[{"scroll-mr":Q()}],"scroll-mb":[{"scroll-mb":Q()}],"scroll-ml":[{"scroll-ml":Q()}],"scroll-p":[{"scroll-p":Q()}],"scroll-px":[{"scroll-px":Q()}],"scroll-py":[{"scroll-py":Q()}],"scroll-ps":[{"scroll-ps":Q()}],"scroll-pe":[{"scroll-pe":Q()}],"scroll-pt":[{"scroll-pt":Q()}],"scroll-pr":[{"scroll-pr":Q()}],"scroll-pb":[{"scroll-pb":Q()}],"scroll-pl":[{"scroll-pl":Q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[A,B,D]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function V(...a){return U(g(a))}let W=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("rounded-lg border bg-card text-card-foreground shadow-sm",a),...b}));W.displayName="Card",e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("flex flex-col space-y-1.5 p-6",a),...b})).displayName="CardHeader",e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("text-2xl font-semibold leading-none tracking-tight",a),...b})).displayName="CardTitle",e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("text-sm text-muted-foreground",a),...b})).displayName="CardDescription";let X=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("p-6 pt-0",a),...b}));function Y(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}X.displayName="CardContent",e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:V("flex items-center p-6 pt-0",a),...b})).displayName="CardFooter";var Z=function(a){let b=function(a){let b=e.forwardRef((a,b)=>{let{children:c,...d}=a;if(e.isValidElement(c)){var f;let a,g,h=(f=c,(g=(a=Object.getOwnPropertyDescriptor(f.props,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?f.ref:(g=(a=Object.getOwnPropertyDescriptor(f,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?f.props.ref:f.props.ref||f.ref),i=function(a,b){let c={...b};for(let d in b){let e=a[d],f=b[d];/^on[A-Z]/.test(d)?e&&f?c[d]=(...a)=>{let b=f(...a);return e(...a),b}:e&&(c[d]=e):"style"===d?c[d]={...e,...f}:"className"===d&&(c[d]=[e,f].filter(Boolean).join(" "))}return{...a,...c}}(d,c.props);return c.type!==e.Fragment&&(i.ref=b?function(...a){return b=>{let c=!1,d=a.map(a=>{let d=Y(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():Y(a[b],null)}}}}(b,h):h),e.cloneElement(c,i)}return e.Children.count(c)>1?e.Children.only(null):null});return b.displayName=`${a}.SlotClone`,b}(a),c=e.forwardRef((a,c)=>{let{children:f,...g}=a,h=e.Children.toArray(f),i=h.find(_);if(i){let a=i.props.children,f=h.map(b=>b!==i?b:e.Children.count(a)>1?e.Children.only(null):e.isValidElement(a)?a.props.children:null);return(0,d.jsx)(b,{...g,ref:c,children:e.isValidElement(a)?e.cloneElement(a,void 0,f):null})}return(0,d.jsx)(b,{...g,ref:c,children:f})});return c.displayName=`${a}.Slot`,c}("Slot"),$=Symbol("radix.slottable");function _(a){return e.isValidElement(a)&&"function"==typeof a.type&&"__radixId"in a.type&&a.type.__radixId===$}let aa=a=>"boolean"==typeof a?`${a}`:0===a?"0":a,ab=((a,b)=>c=>{var d;if((null==b?void 0:b.variants)==null)return g(a,null==c?void 0:c.class,null==c?void 0:c.className);let{variants:e,defaultVariants:f}=b,h=Object.keys(e).map(a=>{let b=null==c?void 0:c[a],d=null==f?void 0:f[a];if(null===b)return null;let g=aa(b)||aa(d);return e[a][g]}),i=c&&Object.entries(c).reduce((a,b)=>{let[c,d]=b;return void 0===d||(a[c]=d),a},{});return g(a,h,null==b||null==(d=b.compoundVariants)?void 0:d.reduce((a,b)=>{let{class:c,className:d,...e}=b;return Object.entries(e).every(a=>{let[b,c]=a;return Array.isArray(c)?c.includes({...f,...i}[b]):({...f,...i})[b]===c})?[...a,c,d]:a},[]),null==c?void 0:c.class,null==c?void 0:c.className)})("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ac=e.forwardRef(({className:a,variant:b,size:c,asChild:e=!1,...f},g)=>(0,d.jsx)(e?Z:"button",{className:V(ab({variant:b,size:c,className:a})),ref:g,...f}));ac.displayName="Button";let ad=(...a)=>a.filter((a,b,c)=>!!a&&c.indexOf(a)===b).join(" ");var ae={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let af=(0,e.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:f="",children:g,iconNode:h,...i},j)=>(0,e.createElement)("svg",{ref:j,...ae,width:b,height:b,stroke:a,strokeWidth:d?24*Number(c)/Number(b):c,className:ad("lucide",f),...i},[...h.map(([a,b])=>(0,e.createElement)(a,b)),...Array.isArray(g)?g:[g]])),ag=((a,b)=>{let c=(0,e.forwardRef)(({className:c,...d},f)=>(0,e.createElement)(af,{ref:f,iconNode:b,className:ad(`lucide-${a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,c),...d}));return c.displayName=`${a}`,c})("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var ah=c(65169),ai=c.n(ah);async function aj(){try{return[{title:"The Top 5 Health Benefits of Cycling: Why Riding is Great for Your Body and Mind",slug:"cycling-health-benefits",date:"2024-01-20",excerpt:"Discover the science-backed health benefits of cycling, from cardiovascular fitness to mental well-being. Learn why riding a bike is one of the best exercises for overall health.",tags:["health","fitness","cycling","exercise","wellness","e-bikes"],content:`Cycling is more than just a fun way to get around—it's one of the most effective forms of exercise for improving your overall health. Whether you're riding a traditional bicycle or an electric bike, the benefits are numerous and well-documented.

## Cardiovascular Health
Regular cycling strengthens your heart, lungs, and circulation, reducing your risk of cardiovascular diseases. It's a low-impact exercise that gets your heart rate up without putting stress on your joints.

## Weight Management
Cycling burns calories efficiently, helping you maintain a healthy weight. An hour of moderate cycling can burn between 400-600 calories, depending on your intensity and body weight.

## Mental Well-being
Riding a bike releases endorphins, reducing stress and anxiety. The combination of physical activity, fresh air, and the meditative rhythm of pedaling creates a natural mood booster.

## Joint Health
Unlike high-impact exercises, cycling is gentle on your joints while still providing excellent cardiovascular benefits. This makes it perfect for people of all ages, including seniors.

## Environmental Benefits
Choosing to cycle instead of drive reduces your carbon footprint and contributes to cleaner air in your community.

## Social Connection
Cycling can be a social activity, whether you're joining group rides, cycling with family, or participating in community events.`,imageUrl:"/images/Blog/TOP 5 Health.jpg"},{title:"Michigan Bike Safety Rules: What Every Rider Needs to Know",slug:"michigan-bike-safety-rules",date:"2024-01-15",excerpt:"Essential Michigan bike safety rules and regulations to keep you safe on the road. Learn the laws, best practices, and safety tips for cyclists of all ages.",tags:["safety","michigan","bike-laws","cycling","e-bikes"],content:`Cycling in Michigan is a fantastic way to explore our beautiful state, but it's crucial to understand and follow the safety rules and regulations. Whether you're a seasoned cyclist or just starting out, knowing the laws helps keep everyone safe.

## Michigan Bike Laws You Need to Know

### Right to the Road
Bicycles are considered vehicles in Michigan and have the same rights and responsibilities as motor vehicles. This means you can ride on most roads, but you must follow traffic laws.

### Helmet Requirements
While helmets are not legally required for adults in Michigan, they are strongly recommended for all cyclists. Children under 18 must wear helmets when riding on public roads.

### Riding Position
Cyclists should ride as far to the right as practicable, except when:
- Passing another vehicle
- Preparing for a left turn
- Avoiding hazards
- Riding on a one-way street with multiple lanes

### Hand Signals
Always use hand signals to communicate your intentions:
- Left turn: Extend left arm straight out
- Right turn: Extend left arm up at 90 degrees OR right arm straight out
- Stop: Extend left arm down at 90 degrees

### Lighting Requirements
When riding at night, your bike must have:
- A white headlight visible from 500 feet
- A red rear reflector visible from 100-600 feet
- Reflective material on your pedals, shoes, or ankles

## E-Bike Specific Rules

### Class 1 E-Bikes
- Maximum speed: 20 mph with motor assistance
- Can be ridden on bike paths and trails
- No license required

### Class 2 E-Bikes  
- Maximum speed: 20 mph with throttle
- Can be ridden on bike paths and trails
- No license required

### Class 3 E-Bikes
- Maximum speed: 28 mph with motor assistance
- Cannot be ridden on bike paths or trails
- Must be ridden on roads
- No license required

## Safety Tips
- Always wear bright, visible clothing
- Use lights and reflectors at night
- Stay alert and avoid distractions
- Maintain your bike regularly
- Ride defensively and predictably`,imageUrl:"/images/Blog/Michihan Safety.png",externalUrl:"https://www.michigan.gov/msp/divisions/ohsp/safety-programs/bicyclist-safety"},{title:"Bike Safety Tips for Older Adults: Stay Safe and Confident on Your Rides",slug:"bike-safety-seniors",date:"2024-01-25",excerpt:"Essential bike safety tips specifically designed for older adults. Learn how to ride safely, build confidence, and enjoy cycling at any age with proper preparation and equipment.",tags:["safety","seniors","cycling","e-bikes","health","confidence"],content:`Cycling is an excellent activity for older adults, offering numerous health benefits while being gentle on joints. With the advent of electric bicycles, seniors can now enjoy cycling regardless of their fitness level or physical limitations.

## Why Cycling is Perfect for Seniors

### Low-Impact Exercise
Cycling provides excellent cardiovascular exercise without putting stress on your joints. Unlike running or high-impact sports, cycling is gentle on your knees, hips, and back while still providing a great workout.

### Improved Balance and Coordination
Riding a bike helps maintain and improve balance, which is crucial for preventing falls as we age. The coordination required for cycling also helps keep your mind sharp.

### Social Activity
Cycling can be a wonderful social activity. Many communities have senior cycling groups that offer companionship and support while riding.

## Safety Tips for Senior Cyclists

### Choose the Right Bike
- Consider an e-bike for easier pedaling
- Ensure the bike fits your height and reach
- Test ride before purchasing
- Look for step-through frames for easier mounting

### Start Slowly
- Begin with short rides on familiar routes
- Gradually increase distance and difficulty
- Listen to your body and rest when needed
- Consider taking a cycling class for seniors

### Safety Equipment
- Always wear a properly fitted helmet
- Use bright, visible clothing
- Install lights and reflectors
- Consider a rear-view mirror

### Route Planning
- Choose routes with bike lanes or low traffic
- Avoid busy roads during peak hours
- Plan rest stops along your route
- Let someone know your route and expected return time

## E-Bike Benefits for Seniors

### Assisted Pedaling
E-bikes provide motor assistance, making it easier to tackle hills and longer distances. You can still get exercise while having help when needed.

### Extended Range
With motor assistance, you can travel further without getting tired, opening up new routes and destinations.

### Confidence Building
E-bikes help build confidence for seniors who might be hesitant about cycling due to physical limitations.

## Getting Started
1. Consult with your doctor before starting
2. Take a cycling safety course
3. Start with short, easy rides
4. Join a senior cycling group
5. Consider an e-bike for easier riding

Remember, it's never too late to start cycling! Many seniors discover a new passion for riding and enjoy the freedom and health benefits it provides.`,imageUrl:"/images/Blog/Are_Electric_Bikes_Safe_for_Senior.png",externalUrl:"https://crazylennysebikes.com/why-an-e-bike-is-perfect-for-seniors/?srsltid=AfmBOooeSd0OZP0lEHj_yGo0S_WEApTlZ35FDfn-97NPqlIuECRK0r6C"},{title:"Why E-Bikes Are Great for Seniors' Health",slug:"ebikes-seniors-health",date:"2024-08-24",excerpt:"Discover how electric bicycles can improve seniors' health through low-impact cardio, joint mobility, and mental well-being.",tags:["health","seniors","e-bikes","fitness"],content:`Electric bicycles are revolutionizing how seniors stay active and healthy. These innovative vehicles combine the benefits of traditional cycling with motor assistance, making exercise accessible to people of all fitness levels.

## Health Benefits of E-Bikes for Seniors

### Cardiovascular Health
E-bikes provide excellent cardiovascular exercise while being gentle on the heart. The motor assistance allows seniors to maintain a consistent heart rate without overexertion, making it perfect for those with heart conditions or limited stamina.

### Joint-Friendly Exercise
Unlike high-impact activities, e-biking is gentle on joints while still providing a full-body workout. This makes it ideal for seniors with arthritis, knee problems, or other joint issues.

### Mental Health Benefits
Regular e-bike riding releases endorphins, reducing stress and anxiety. The combination of physical activity, fresh air, and the joy of movement creates a natural mood booster.

### Improved Balance and Coordination
Riding an e-bike helps maintain and improve balance, which is crucial for preventing falls as we age. The coordination required for cycling also helps keep the mind sharp.

## Why E-Bikes Are Perfect for Seniors

### Assisted Pedaling
The motor assistance helps with hills and longer distances, making cycling accessible regardless of fitness level. You can still get exercise while having help when needed.

### Extended Range
With motor assistance, seniors can travel further without getting tired, opening up new routes and destinations that might have been out of reach before.

### Confidence Building
E-bikes help build confidence for seniors who might be hesitant about cycling due to physical limitations or concerns about keeping up with traffic.

### Social Connection
E-bikes enable seniors to join group rides and cycling clubs, providing social interaction and community connection.

## Getting Started with E-Bikes

### Choosing the Right E-Bike
- **Step-through frames** for easier mounting and dismounting
- **Comfortable seating** with proper support
- **Easy-to-use controls** and displays
- **Appropriate motor power** for your needs
- **Good lighting and safety features**

### Safety Considerations
- Always wear a helmet
- Use lights and reflectors
- Choose safe routes
- Start with shorter rides
- Consider taking an e-bike safety course

### Building Endurance
- Start with 15-30 minute rides
- Gradually increase distance and time
- Listen to your body
- Rest when needed
- Set realistic goals

## Success Stories
Many seniors have discovered new freedom and joy through e-biking. From daily errands to weekend adventures, e-bikes are helping seniors stay active, independent, and connected to their communities.

The key is to start slowly and build confidence. With the right e-bike and proper preparation, cycling can become a lifelong passion that keeps you healthy and happy.`,imageUrl:"/images/Blog/Senior Health.png",externalUrl:"https://www.aarp.org/health/healthy-living/bike-safety/"},{title:"Building Endurance: Your First Month with an E-Bike",slug:"building-endurance-first-ebike",date:"2024-08-24",excerpt:"A comprehensive guide to building your cycling endurance and confidence with your new electric bicycle.",tags:["fitness","endurance","training","e-bikes"],content:`Starting your e-bike journey can be both exciting and challenging. Whether you're new to cycling or transitioning from a traditional bike, building endurance with an e-bike requires a thoughtful approach and gradual progression.

## Your First Week: Getting Comfortable

### Day 1-3: Familiarization
- **Short rides** (15-20 minutes) around your neighborhood
- **Practice mounting and dismounting** your e-bike
- **Test different assist levels** to find your comfort zone
- **Learn your bike's controls** and display functions
- **Choose flat, quiet routes** to build confidence

### Day 4-7: Building Confidence
- **Increase ride time** to 25-30 minutes
- **Try slightly longer routes** with gentle hills
- **Practice using different assist levels** for varying terrain
- **Focus on smooth pedaling** and good posture

## Week 2-3: Building Foundation

### Gradual Progression
- **Extend rides** to 30-45 minutes
- **Introduce moderate hills** using appropriate assist levels
- **Practice gear shifting** in combination with motor assist
- **Work on maintaining consistent cadence**

### Endurance Building
- **Aim for 3-4 rides per week**
- **Mix easy and moderate intensity** rides
- **Focus on breathing** and relaxed riding
- **Listen to your body** and rest when needed

## Month 1: Establishing Routine

### Weekly Goals
- **Week 1:** 3 rides of 20-30 minutes each
- **Week 2:** 3-4 rides of 30-40 minutes each  
- **Week 3:** 4 rides of 40-50 minutes each
- **Week 4:** 4-5 rides of 45-60 minutes each

### Intensity Progression
- **Start with higher assist levels** and gradually reduce
- **Include some rides with minimal assist** to build strength
- **Add short intervals** of higher intensity
- **Practice climbing hills** with appropriate assist

## Training Tips for Success

### Pacing Strategy
- **Start each ride slowly** and warm up properly
- **Use assist levels strategically** - higher for hills, lower for flats
- **Maintain a conversational pace** where you can talk comfortably
- **Finish rides feeling energized**, not exhausted

### Recovery and Rest
- **Take rest days** between longer or harder rides
- **Stay hydrated** before, during, and after rides
- **Eat properly** to fuel your rides and recovery
- **Get adequate sleep** to support your training

### Mental Preparation
- **Set realistic goals** for each week
- **Track your progress** with a simple log
- **Celebrate small victories** and improvements
- **Stay patient** - endurance builds gradually

## Common Challenges and Solutions

### Fatigue
- **Reduce ride intensity** or duration
- **Increase rest days**
- **Check your nutrition** and hydration
- **Ensure adequate sleep**

### Soreness
- **Stretch before and after rides**
- **Adjust your bike fit** if needed
- **Use appropriate assist levels**
- **Gradually increase intensity**

### Motivation
- **Vary your routes** to keep things interesting
- **Ride with friends** or join group rides
- **Set specific goals** for each week
- **Track your progress** to see improvements

## Advanced Training (Month 2+)

### Building Strength
- **Reduce assist levels** on flat terrain
- **Add hill repeats** with appropriate assist
- **Include longer rides** (1-2 hours) once per week
- **Practice interval training** with varying assist levels

### Skill Development
- **Work on bike handling** skills
- **Practice emergency stops** and maneuvers
- **Learn to read terrain** and adjust assist accordingly
- **Develop efficient pedaling** technique

## Measuring Progress

### Physical Indicators
- **Increased ride duration** without fatigue
- **Improved hill climbing** ability
- **Better recovery** between rides
- **Increased average speed** on familiar routes

### Mental Indicators
- **Greater confidence** on the bike
- **Reduced anxiety** about longer rides
- **Improved route planning** skills
- **Better understanding** of your e-bike's capabilities

Remember, everyone progresses at their own pace. Focus on consistency and gradual improvement rather than comparing yourself to others. With patience and persistence, you'll build the endurance and confidence to enjoy longer, more challenging rides on your e-bike.`,imageUrl:"/images/Blog/Building Endurance- Your First Month with an E-Bike .jpg",externalUrl:"https://www.moveelectric.com/e-bikes/can-you-get-fit-using-electric-bike"},{title:"Spring Maintenance Tips for Your E-Bike",slug:"bike-maintenance-spring",date:"2024-08-24",excerpt:"Essential maintenance tasks to keep your electric bicycle running smoothly through the spring season.",tags:["maintenance","spring","care","e-bikes"],content:`Spring is the perfect time to give your e-bike some TLC. After a long winter, your electric bicycle deserves attention to ensure it's ready for the riding season ahead. Regular maintenance not only keeps your e-bike running smoothly but also extends its lifespan and ensures your safety.

## Pre-Ride Inspection Checklist

### Before Every Ride
- **Tire pressure** - Check and inflate to recommended PSI
- **Brake function** - Test both front and rear brakes
- **Light operation** - Ensure headlight and taillight work
- **Battery charge** - Verify adequate charge for your planned ride
- **Tire condition** - Look for cuts, bulges, or excessive wear
- **Chain lubrication** - Ensure smooth operation

### Weekly Checks
- **Bolt tightness** - Check all visible bolts and fasteners
- **Cable condition** - Inspect brake and gear cables for fraying
- **Wheel trueness** - Spin wheels to check for wobbles
- **Battery connections** - Ensure clean, secure connections
- **Display function** - Test all buttons and readouts

## Spring Cleaning and Maintenance

### Thorough Cleaning
1. **Wash your e-bike** with mild soap and water
2. **Clean the chain** with a degreaser and re-lubricate
3. **Wipe down the battery** and electrical connections
4. **Clean brake surfaces** and rims
5. **Inspect and clean** the motor area

### Electrical System Care
- **Check battery health** - Look for any swelling or damage
- **Test charging system** - Ensure proper charging
- **Inspect wiring** - Look for loose or damaged connections
- **Clean electrical contacts** - Use contact cleaner if needed
- **Update firmware** - Check for any available updates

### Mechanical Maintenance
- **Adjust brakes** - Ensure proper pad alignment and tension
- **Check gear shifting** - Adjust derailleurs if needed
- **Inspect bearings** - Check headset, bottom bracket, and wheel bearings
- **Tighten spokes** - Check wheel tension
- **Lubricate moving parts** - Apply appropriate lubricants

## Battery Care and Optimization

### Storage and Charging
- **Store at 40-60% charge** when not in use for extended periods
- **Avoid extreme temperatures** - Don't leave in hot cars or cold garages
- **Use manufacturer charger** - Avoid third-party chargers
- **Charge regularly** - Don't let battery fully discharge
- **Monitor battery health** - Check for capacity loss over time

### Performance Tips
- **Keep battery clean** - Wipe terminals regularly
- **Check connections** - Ensure tight, clean connections
- **Monitor temperature** - Avoid charging in extreme heat
- **Plan charging** - Charge when convenient, not just when empty

## Tire and Wheel Maintenance

### Tire Care
- **Check pressure regularly** - Use a quality gauge
- **Inspect for damage** - Look for cuts, bulges, or wear
- **Rotate tires** - If applicable for your e-bike
- **Replace when needed** - Don't ride on worn tires
- **Choose appropriate tires** - Consider your riding conditions

### Wheel Maintenance
- **Check spoke tension** - Loose spokes can cause wheel damage
- **Inspect rims** - Look for dents or damage
- **Clean brake surfaces** - Remove any debris or oil
- **Check bearings** - Ensure smooth wheel rotation

## Professional Service

### When to Visit a Shop
- **Annual tune-up** - Professional inspection and adjustment
- **Electrical issues** - Don't attempt repairs yourself
- **Major component replacement** - Brakes, drivetrain, etc.
- **Warranty work** - Use authorized service centers
- **Complex adjustments** - If you're unsure about procedures

### What to Expect
- **Complete inspection** of all systems
- **Adjustment** of brakes, gears, and bearings
- **Cleaning** and lubrication of components
- **Electrical system** testing and updates
- **Safety check** of all critical components

## Seasonal Preparation

### Spring Preparation
- **Remove winter storage** protection
- **Check all systems** after storage
- **Update seasonal** accessories (lights, fenders)
- **Plan routes** for the new season
- **Review safety** equipment and procedures

### Summer Maintenance
- **Regular cleaning** to remove road grime
- **Monitor battery** performance in heat
- **Check tire pressure** more frequently
- **Inspect for wear** from increased riding

## Safety Considerations

### Regular Safety Checks
- **Brake function** - Test before every ride
- **Light operation** - Essential for visibility
- **Tire condition** - Critical for traction and safety
- **Battery security** - Ensure proper mounting
- **Electrical connections** - Check for loose wires

### Emergency Preparedness
- **Carry basic tools** - Multi-tool, tire levers, pump
- **Know your bike** - Understand basic maintenance
- **Have backup plans** - Know how to get home if needed
- **Emergency contacts** - Keep important numbers handy

## Maintenance Schedule

### Daily
- Quick visual inspection
- Tire pressure check
- Battery charge level

### Weekly
- Thorough cleaning
- Detailed inspection
- Lubrication as needed

### Monthly
- Professional inspection (if needed)
- Deep cleaning
- Component adjustment

### Annually
- Complete tune-up
- Professional service
- Component replacement as needed

By following this maintenance schedule and paying attention to your e-bike's needs, you'll enjoy reliable performance and extended lifespan from your electric bicycle. Regular care not only saves money in the long run but also ensures your safety and riding enjoyment.`,imageUrl:"/images/Blog/spring-e-bike-maintenance-tips.png",externalUrl:"https://www.radpowerbikes.com/blogs/the-scenic-route/ebike-spring-maintenance-guide?srsltid=AfmBOopEVmG6tW0Ejtig9DeTS8HbWteAWaFgAZpKR78Vu5nwHf0GTXbR"},{title:"How to Clean Your E-Bike: A Complete Guide",slug:"how-to-clean-your-ebike",date:"2024-08-25",excerpt:"Learn the proper techniques for cleaning your electric bicycle to keep it looking great and running smoothly. From basic washing to detailed component care.",tags:["maintenance","cleaning","care","e-bikes","tips"],content:`Keeping your e-bike clean is essential for both appearance and performance. Regular cleaning prevents dirt buildup, protects components, and helps identify potential issues before they become problems. Here's your complete guide to e-bike cleaning.

## Why Clean Your E-Bike?

### Performance Benefits
- **Smoother operation** - Clean components work better
- **Extended lifespan** - Dirt and grime accelerate wear
- **Better efficiency** - Clean drivetrain requires less effort
- **Improved safety** - Clean brakes and lights work properly

### Maintenance Benefits
- **Easier inspection** - Clean bikes reveal issues more clearly
- **Simpler repairs** - Clean components are easier to work on
- **Better resale value** - Well-maintained bikes fetch higher prices
- **Professional appearance** - Clean bikes look more appealing

## Essential Cleaning Supplies

### Basic Supplies
- **Mild soap** - Dish soap or bike-specific cleaner
- **Soft brushes** - Various sizes for different components
- **Microfiber cloths** - For drying and polishing
- **Water source** - Hose or bucket
- **Degreaser** - For chain and drivetrain
- **Lubricant** - Chain lube and other lubricants

### Optional Supplies
- **Pressure washer** - Use carefully and avoid electrical components
- **Bike stand** - Makes cleaning easier
- **Compressed air** - For drying hard-to-reach areas
- **Polish** - For frame and components
- **Protective spray** - For electrical connections

## Step-by-Step Cleaning Process

### 1. Preparation
- **Remove battery** - Always remove before cleaning
- **Secure bike** - Use a stand or lean against a wall
- **Gather supplies** - Have everything ready before starting
- **Choose location** - Well-ventilated area with good drainage

### 2. Initial Rinse
- **Remove loose dirt** - Use low-pressure water
- **Avoid electrical components** - Keep water away from motor and connections
- **Use gentle spray** - Don't use high-pressure water
- **Cover sensitive areas** - Use plastic bags if needed

### 3. Frame Cleaning
- **Apply soap** - Use mild soap and water
- **Scrub gently** - Use soft brushes for stubborn dirt
- **Rinse thoroughly** - Remove all soap residue
- **Dry completely** - Use microfiber cloths

### 4. Drivetrain Cleaning
- **Apply degreaser** - Spray on chain and cassette
- **Scrub chain** - Use chain cleaning tool or brush
- **Clean cassette** - Remove built-up grime
- **Rinse carefully** - Avoid getting degreaser on other parts
- **Dry completely** - Before applying lubricant

### 5. Component Cleaning
- **Brakes** - Clean brake surfaces and pads
- **Wheels** - Clean rims and spokes
- **Tires** - Remove embedded debris
- **Lights** - Clean lenses and housings
- **Display** - Wipe with damp cloth

## Electrical Component Care

### Battery Cleaning
- **Wipe with damp cloth** - No direct water contact
- **Clean terminals** - Use contact cleaner if needed
- **Check connections** - Ensure tight and clean
- **Inspect for damage** - Look for cracks or swelling

### Motor Care
- **Wipe exterior** - Remove dirt and grime
- **Check connections** - Ensure all wires are secure
- **Inspect for damage** - Look for cracks or loose parts
- **Avoid water contact** - Keep motor dry

### Display and Controls
- **Wipe with damp cloth** - No harsh chemicals
- **Check button function** - Ensure all buttons work
- **Clean screen** - Remove fingerprints and smudges
- **Test all functions** - After cleaning

## Drying and Lubrication

### Proper Drying
- **Use microfiber cloths** - Absorb water quickly
- **Air dry** - Let bike sit in sun or warm area
- **Check all areas** - Ensure no water remains
- **Wait before riding** - Ensure complete dryness

### Lubrication
- **Chain lubrication** - Apply appropriate chain lube
- **Cable lubrication** - If needed for smooth operation
- **Pivot points** - Lubricate brake and gear pivots
- **Avoid over-lubrication** - Excess lube attracts dirt

## Special Cleaning Situations

### After Rainy Rides
- **Clean immediately** - Don't let mud dry
- **Focus on drivetrain** - Mud can damage components
- **Check electrical connections** - Ensure they're dry
- **Lubricate chain** - Rain washes away lube

### After Off-Road Riding
- **Thorough cleaning** - Remove all dirt and debris
- **Check for damage** - Look for scratches or dents
- **Clean suspension** - If applicable
- **Inspect tires** - Remove embedded objects

### Winter Cleaning
- **Remove salt** - Salt can corrode components
- **Clean more frequently** - Winter conditions are harsh
- **Check electrical connections** - Salt can cause corrosion
- **Store properly** - Keep in dry, warm location

## Maintenance After Cleaning

### Post-Cleaning Inspection
- **Check all bolts** - Ensure they're tight
- **Test brakes** - Ensure proper function
- **Check tire pressure** - Adjust as needed
- **Test electrical systems** - Ensure everything works

### Regular Maintenance
- **Weekly cleaning** - For regular riders
- **Monthly deep cleaning** - More thorough process
- **Seasonal cleaning** - Prepare for weather changes
- **Professional cleaning** - Annual deep service

## Common Cleaning Mistakes

### What to Avoid
- **High-pressure water** - Can damage bearings and electrical components
- **Harsh chemicals** - Can damage paint and components
- **Direct water on electrical parts** - Can cause damage
- **Over-lubrication** - Attracts dirt and grime
- **Neglecting to dry** - Can cause rust and corrosion

### Best Practices
- **Use appropriate cleaners** - Bike-specific products
- **Clean regularly** - Don't let dirt build up
- **Inspect while cleaning** - Look for issues
- **Document maintenance** - Keep cleaning records
- **Ask for help** - When unsure about procedures

## Professional Cleaning Services

### When to Consider Professional Cleaning
- **Annual deep cleaning** - Professional service
- **After major repairs** - Ensure everything is clean
- **Before selling** - Maximize resale value
- **Complex electrical issues** - Professional expertise needed
- **Time constraints** - When you can't clean yourself

### What Professionals Provide
- **Complete disassembly** - If needed
- **Ultrasonic cleaning** - For small components
- **Professional products** - High-quality cleaners
- **Expert inspection** - Identify potential issues
- **Warranty protection** - Professional service records

By following this comprehensive cleaning guide, you'll keep your e-bike looking great and running smoothly for years to come. Regular cleaning is an investment in your bike's performance and longevity.`,imageUrl:"/images/Blog/How_to_Clean_Your_E-Bike_1024x1024.png"}]}catch(a){return console.warn("Failed to load markdown posts:",a),[]}}async function ak({params:a}){let{slug:b}=await a,c=null,e=!1;try{let a=(await aj()).find(a=>a.slug===b);if(a)c=a,e=!0;else{let a=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000"}/api/blog`);if(a.ok){let d=(await a.json()).find(a=>a.slug===b);d&&(c=d)}}c||(0,f.notFound)()}catch(a){console.error("Error loading blog post:",a),(0,f.notFound)()}return(0,d.jsx)("div",{className:"min-h-screen bg-gray-50",children:(0,d.jsxs)("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[(0,d.jsx)("div",{className:"mb-8",children:(0,d.jsx)(ai(),{href:"/blog",children:(0,d.jsxs)(ac,{variant:"ghost",className:"text-accent hover:text-accent/80",children:[(0,d.jsx)(ag,{className:"w-4 h-4 mr-2"}),"Back to Blog"]})})}),(0,d.jsxs)(W,{className:"overflow-hidden",children:[(0,d.jsxs)("div",{className:"relative h-96 overflow-hidden",children:[(0,d.jsx)("img",{src:c.imageUrl||"/images/Blog/TOP 5 Health.jpg",alt:c.title,className:"w-full h-full object-cover bg-gray-50"}),(0,d.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-30"})]}),(0,d.jsxs)(X,{className:"p-8",children:[(0,d.jsxs)("div",{className:"mb-6",children:[e&&c.tags&&c.tags.length>0&&(0,d.jsx)("div",{className:"text-sm font-semibold text-accent mb-2",children:c.tags.join(", ")}),!e&&c.category&&(0,d.jsx)("div",{className:"text-sm font-semibold text-accent mb-2",children:c.category}),(0,d.jsx)("h1",{className:"text-3xl lg:text-4xl font-bold text-primary mb-4",children:c.title}),(0,d.jsx)("div",{className:"text-sm text-muted",children:e?new Date(c.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):c.publishedAt?new Date(c.publishedAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""})]}),(0,d.jsx)("div",{className:"prose prose-lg max-w-none",children:e?(0,d.jsx)("div",{className:"text-muted leading-relaxed",dangerouslySetInnerHTML:{__html:c.content.split("\n").map(a=>{if(a.startsWith("## "))return`<h2 class="text-2xl font-bold text-primary mt-8 mb-4">${a.replace("## ","")}</h2>`;if(a.startsWith("### "))return`<h3 class="text-xl font-semibold text-primary mt-6 mb-3">${a.replace("### ","")}</h3>`;if(a.startsWith("- **"))return`<li class="mb-2"><strong>${a.replace("- **","").replace("** -",":</strong> ")}</li>`;if(a.startsWith("- "))return`<li class="mb-2">${a.replace("- ","")}</li>`;if(a.startsWith("1. "))return`<li class="mb-2">${a.replace(/^\d+\.\s/,"")}</li>`;else if(""===a.trim())return"<br>";else return`<p class="mb-4">${a}</p>`}).join("")}}):(0,d.jsxs)("div",{className:"text-muted leading-relaxed",children:[c.excerpt,(0,d.jsx)("p",{className:"mt-4",children:"This is a preview of the blog post. The full content would be displayed here."})]})})]})]})]})})}},67837:(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"forbidden",{enumerable:!0,get:function(){return d}}),c(98541).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},93045:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{ReadonlyURLSearchParams:function(){return k},RedirectType:function(){return e.RedirectType},forbidden:function(){return g.forbidden},notFound:function(){return f.notFound},permanentRedirect:function(){return d.permanentRedirect},redirect:function(){return d.redirect},unauthorized:function(){return h.unauthorized},unstable_isUnrecognizedActionError:function(){return l},unstable_rethrow:function(){return i.unstable_rethrow}});let d=c(47614),e=c(92781),f=c(64404),g=c(67837),h=c(29088),i=c(64712);class j extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class k extends URLSearchParams{append(){throw new j}delete(){throw new j}set(){throw new j}sort(){throw new j}}function l(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,405,285],()=>b(b.s=64363));module.exports=c})();