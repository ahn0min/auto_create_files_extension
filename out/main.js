"use strict";var l=Object.create;var a=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var w=(t,s)=>{for(var e in s)a(t,e,{get:s[e],enumerable:!0})},m=(t,s,e,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of h(s))!v.call(t,i)&&i!==e&&a(t,i,{get:()=>s[i],enumerable:!(n=y(s,i))||n.enumerable});return t};var r=(t,s,e)=>(e=t!=null?l(x(t)):{},m(s||!t||!t.__esModule?a(e,"default",{value:t,enumerable:!0}):e,t)),S=t=>m(a({},"__esModule",{value:!0}),t);var U={};w(U,{activate:()=>u,deactivate:()=>F});module.exports=S(U);var o=r(require("vscode")),f=r(require("path")),c=r(require("fs"));function u(t){let s=o.workspace.createFileSystemWatcher("**/");s.onDidCreate(e=>{if(/components/g.test(e.path)){let n=o.Uri.file(e.path);o.workspace.fs.stat(n).then(({type:i})=>{if(i===o.FileType.Directory){let p=f.join(e.fsPath,"index.tsx"),d=f.join(e.fsPath,"style.ts");c.existsSync(p)||(c.writeFileSync(p,"// i'm component"),o.window.setStatusBarMessage("index.tsx \uD30C\uC77C\uC774 \uC0DD\uC131\uB418\uC5C8\uC5B4\uC694",5e3)),c.existsSync(d)||(c.writeFileSync(d,"// i'm style"),o.window.setStatusBarMessage("style.ts \uD30C\uC77C\uC774 \uC0DD\uC131\uB418\uC5C8\uC5B4\uC694",5e3));return}})}}),t.subscriptions.push(s)}function F(){}0&&(module.exports={activate,deactivate});
