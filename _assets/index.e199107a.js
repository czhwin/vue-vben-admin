let e=document.createElement("style");e.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(e);import{a as t,r as i,b as n,a7 as r,cR as o,cS as s,i as a,o as p,j as d,k as c,aI as m,aJ as f,m as l,aR as u,p as j}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import"./useForm.8e6b95f4.js";import"./data.98b65402.js";import x from"./Step1.34f1746f.js";import S from"./Step2.a08228c5.js";import b from"./Step3.9ac875b3.js";var v=t({components:{Step1:x,Step2:S,Step3:b},setup(){const e=i(0),t=n({initSetp2:!1,initSetp3:!1});return{current:e,handleStep1Next:function(i){e.value++,t.initSetp2=!0},handleStep2Next:function(i){e.value++,t.initSetp3=!0},handleRedo:function(){e.value=0,t.initSetp2=!1,t.initSetp3=!1},handleStepPrev:function(){e.value--},...r(t)}}});const h=u("data-v-234603f7");o("data-v-234603f7");const g=j(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),N={class:"m-5 step-form-content"},R={class:"step-form-form"},k={class:"mt-5"};s();const _=h(((e,t,i,n,r,o)=>{const s=a("a-page-header"),u=a("a-step"),j=a("a-steps"),x=a("Step1"),S=a("Step2"),b=a("Step3");return p(),d("div",null,[c(s,{title:"分步表单",ghost:!1},{default:h((()=>[g])),_:1}),c("div",N,[c("div",R,[c(j,{current:e.current},{default:h((()=>[c(u,{title:"填写转账信息"}),c(u,{title:"确认转账信息"}),c(u,{title:"完成"})])),_:1},8,["current"])]),c("div",k,[m(c(x,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?m((p(),d(S,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?m((p(),d(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])])}));v.render=_,v.__scopeId="data-v-234603f7";export default v;