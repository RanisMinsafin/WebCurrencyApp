import{_ as l,h as _,c as e,F as p,r as h,o as t,a as n,e as d,d as f,t as c}from"./index-CtvjVp6e.js";const g={inject:["axios"],data(){return{transactions:null,moment:_}},methods:{getUser(){this.axios.get("auth/me").then(o=>{this.getTransactions(o.data)}).catch(o=>{})},getTransactions(o){this.axios.get(`transactions/${o}`).then(a=>{this.transactions=a.data}).catch(a=>{})}},mounted(){this.getUser()}},m={class:"reviews flex flex-col gap-6"},u={key:0,class:"flex flex-col gap-6"},x={class:"font-bold text-3xl flex items-center gap-2"},y={key:0},k={key:1},b={class:"flex justify-between items-end"},v={class:"text-lg opacity-50"},T={key:0,class:"p-4 font-bold mt-4 bg-light-red rounded-lg"},L={key:1,class:"p-4 font-bold mt-4 bg-green rounded-lg"},B={key:1,class:"flex justify-center mt-72"},U=n("p",{class:"font-bold"},"Нет транзакции",-1),j=[U];function E(o,a,N,S,r,V){var i;return t(),e("div",m,[(i=r.transactions)!=null&&i.length?(t(),e("div",u,[(t(!0),e(p,null,h(r.transactions,s=>(t(),e("div",{class:"bg-dark-gray flex flex-col rounded-lg p-4",key:s},[n("p",x,[s.operationType==="SELL"?(t(),e("span",y,"-")):s.operationType==="BUY"?(t(),e("span",k,"+")):d("",!0),f(" "+c(s.amount)+" "+c(s.currencyType),1)]),n("div",b,[n("span",v,c(r.moment(s.date).format("LL")),1),s.operationType==="SELL"?(t(),e("div",T," Продажа ")):s.operationType==="BUY"?(t(),e("div",L," Покупка ")):d("",!0)])]))),128))])):(t(),e("div",B,j))])}const F=l(g,[["render",E]]);export{F as default};