(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(8),c=n.n(s),o=(n(15),n(6)),i=n(1),l=n(2),u=n(4),m=n(3),h=n(5),p=(n(16),function(e){var t=e.timerStarted,n=e.startTimer,r=e.stopTimer;return a.a.createElement("button",{className:"btn btn-light btn-lg mb-5",onClick:t?r:n},t?"Pause":"Start")}),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("h4",null,this.formatTime(this.props.secondsPassed))}},{key:"formatTime",value:function(e){var t=parseInt(e,10),n=Math.floor(t/3600),r=Math.floor((t-3600*n)/60),a=t-3600*n-60*r;return this.formatDigit(n)+":"+this.formatDigit(r)+":"+this.formatDigit(a)}},{key:"formatDigit",value:function(e){return e<10?"0"+e:e}}]),t}(a.a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).focus=function(){n.textInput.current.focus()},n.textInput=a.a.createRef(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target);e.target.reset(),this.props.addPerson(t.get("name"),t.get("salary"))}},{key:"render",value:function(){return console.log("Render called in form"),a.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},a.a.createElement("input",{className:"form-control col-5 d-inline",autoFocus:!0,ref:this.textInput,type:"text",name:"name",required:!0,placeholder:"Name"}),a.a.createElement("input",{className:"form-control col-5 d-inline",type:"number",name:"salary",required:!0,placeholder:"Monthly salary"}),a.a.createElement("button",{className:"btn",type:"submit"},a.a.createElement("i",{className:"fas fa-plus-circle"})))}}]),t}(a.a.Component),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={name:n.props.name,salary:n.props.salary},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{className:"form-control col-5 d-inline",type:"text",placeholder:"Name",value:this.state.name,onChange:this.handleNameChange.bind(this)}),a.a.createElement("input",{className:"form-control col-5 d-inline",type:"number",placeholder:"Salary",value:this.state.salary,onChange:this.handleSalaryChange.bind(this)}),a.a.createElement("button",{className:"btn",onClick:this.removePerson.bind(this)},a.a.createElement("i",{className:"fas fa-times-circle"})))}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSalaryChange",value:function(e){var t=e.target.value?parseInt(e.target.value):0;this.setState({salary:t}),this.props.salaryChange(t,this.props.personIdx)}},{key:"removePerson",value:function(){this.props.removePerson(this.props.personIdx)}}]),t}(a.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"persons-list"},this.props.personsPresent.map(function(t,n){return a.a.createElement(y,{key:"".concat(t.name).concat(n),salary:t.salary,name:t.name,removePerson:e.props.removePerson,salaryChange:e.props.salaryChange,personIdx:n})}))}}]),t}(a.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h5",{className:"mb-4"},"Add all present people"),a.a.createElement(f,{addPerson:this.props.addPerson}),a.a.createElement(b,{personsPresent:this.props.personsPresent,removePerson:this.props.removePerson,salaryChange:this.props.salaryChange}))}}]),t}(a.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("h1",null,a.a.createElement("strong",null,this.props.totalPrice," ",this.props.currency))}}]),t}(a.a.Component),j=function(e){var t=e.currency,n=e.hourPrice;return a.a.createElement("h3",null,a.a.createElement("strong",null,Math.round(100*n)/100," ",t," / 1h"))},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(){n.props.changeCurrency(n.props.currency)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{className:"btn btn-outline-secondary btn-lg ".concat(this.props.currentCurrency===this.props.currency?"active":""),onClick:this.handleClick},this.props.currency)}}]),t}(a.a.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"mt-4 mr-4"},this.props.availableCurrencies.map(function(t,n){return a.a.createElement(O,{key:n,currency:t,currentCurrency:e.props.currency,changeCurrency:e.props.changeCurrency})}))}}]),t}(a.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{className:"btn btn-light mt-4 mr-4",onClick:this.props.onReset},"Reset time")}}]),t}(a.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"row float-right"},a.a.createElement(P,{currency:this.props.currency,availableCurrencies:this.props.availableCurrencies,changeCurrency:this.props.changeCurrency}),a.a.createElement(C,{onReset:this.props.onReset}))}}]),t}(a.a.Component),k=576e3,w=160,S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={timerStarted:!1,meetingPrice:0,secondsPassed:0,currency:"PLN",personsPresent:[{name:"Jon",salary:2e4},{name:"Johan",salary:2e4}]},n.timerInterval=null,n.AVAILABLE_CURRENCIES=["PLN","USD","EUR"],n.startTimer=function(){clearInterval(n.timerInterval),n.setState({timerStarted:!0}),n.timerInterval=setInterval(function(){var e=n.state.secondsPassed+1;n.setState({secondsPassed:e,meetingPrice:parseFloat((parseFloat(n.state.meetingPrice)+n.countSecPrice()).toFixed(2))})},1e3)},n.stopTimer=function(){n.setState({timerStarted:!1}),clearInterval(n.timerInterval)},n.resetTimer=function(){n.setState({timerStarted:!1,secondsPassed:0,meetingPrice:0}),clearInterval(n.timerInterval)},n.getMonthlyPrice=function(){var e=0;for(var t in n.state.personsPresent)e+=parseFloat(n.state.personsPresent[t].salary);return e},n.countSecPrice=function(){return n.getMonthlyPrice()/k},n.countHourPrice=function(){return n.getMonthlyPrice()/w},n.addPerson=function(e,t){n.setState({personsPresent:[{name:e,salary:parseFloat(t)}].concat(Object(o.a)(n.state.personsPresent))})},n.salaryChange=function(e,t){var r=Object(o.a)(n.state.personsPresent);r[t]={name:r[t].name,salary:e},n.setState({personsPresent:r})},n.removePerson=function(e){var t=Object(o.a)(n.state.personsPresent);t.splice(e,1),n.setState({personsPresent:t})},n.changeCurrency=function(e){n.setState({currency:e})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"row app"},a.a.createElement("h1",{className:"col-12 text-center mt-5 pt-xl-5 mb-3"},"How much does your meeting cost?"),a.a.createElement("div",{className:"app-header col-12 col-xl-7"},a.a.createElement("div",null,a.a.createElement(p,{timerStarted:this.state.timerStarted,stopTimer:this.stopTimer,startTimer:this.startTimer}),a.a.createElement(d,{secondsPassed:this.state.secondsPassed}),a.a.createElement(g,{totalPrice:this.state.meetingPrice,currency:this.state.currency}),a.a.createElement(j,{hourPrice:this.countHourPrice(),currency:this.state.currency}))),a.a.createElement("div",{className:"side-form col-12 col-xl-5"},a.a.createElement(v,{personsPresent:this.state.personsPresent,addPerson:this.addPerson,removePerson:this.removePerson,salaryChange:this.salaryChange}))),a.a.createElement(E,{onReset:this.resetTimer,currency:this.state.currency,availableCurrencies:this.AVAILABLE_CURRENCIES,changeCurrency:this.changeCurrency}))}}]),t}(r.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meeting-price",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meeting-price","/service-worker.js");N?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):I(t,e)})}}()},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.2e04ff45.chunk.js.map