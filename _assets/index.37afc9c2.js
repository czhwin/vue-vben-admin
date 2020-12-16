import{a as e,i as r,o,j as i,k as s,w as t,p as a}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./index.e028f2ec.js";import{A as n}from"./index.b797736d.js";import"./colors.11c2fe2a.js";import"./RightOutlined.346767f2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.ced671f3.js";import"./index.03e0e622.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import{u as p}from"./index.f85b5e36.js";import m from"./Drawer1.f0ff89a4.js";import c from"./Drawer2.0ff75a73.js";import f from"./Drawer3.cf9981af.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import"./useForm.8e6b95f4.js";import l from"./Drawer4.03ae4241.js";import w from"./Drawer5.0fe834cb.js";var d=e({components:{Alert:n,Drawer1:m,Drawer2:c,Drawer3:f,Drawer4:l,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[t,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[c,{openDrawer:f}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:c,openDrawer5:f,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const D={class:"px-10 py-4"},j=a("打开Drawer"),g=a("打开Drawer"),u=a("打开Drawer"),b=a("打开Drawer并传递数据"),x=a("打开详情Drawer");d.render=function(e,a,n,p,m,c){const f=r("Alert"),l=r("a-button"),w=r("Drawer1"),d=r("Drawer2"),y=r("Drawer3"),k=r("Drawer4"),R=r("Drawer5");return o(),i("div",D,[s(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[j])),_:1},8,["onClick"]),s(f,{message:"内外同时同时显示隐藏","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer2},{default:t((()=>[g])),_:1},8,["onClick"]),s(f,{message:"自适应高度/显示footer","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer3},{default:t((()=>[u])),_:1},8,["onClick"]),s(f,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(f,{message:"详情页模式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer5},{default:t((()=>[x])),_:1},8,["onClick"]),s(w,{onRegister:e.register1},null,8,["onRegister"]),s(d,{onRegister:e.register2},null,8,["onRegister"]),s(y,{onRegister:e.register3},null,8,["onRegister"]),s(k,{onRegister:e.register4},null,8,["onRegister"]),s(R,{onRegister:e.register5},null,8,["onRegister"])])};export default d;