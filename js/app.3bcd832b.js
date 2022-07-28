(function(){"use strict";var e={7721:function(e,t,o){var i=o(9242),r=o(3396),l=o(2268),a=o(7718),d=o(8796),c=o(9156),n=o(6372),s=o(6119),u=o(3289),p=o(5351),m=o(1392),g=o(2127),h=o(8649),f=o(3140),y=o(7033),k=o(5030);const j=(0,r.Uk)("Agile Board App"),b=(0,r.Uk)("mdi-weather-night"),w=(0,r.Uk)("mdi-weather-sunny");function v(e,t,o,v,C,D){const I=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a.q,{theme:e.theme},{default:(0,r.w5)((()=>[(0,r.Wm)(d.L,{color:"primary",prominent:""},{append:(0,r.w5)((()=>[(0,r.Wm)(s.f,{mandatory:"",modelValue:e.theme,"onUpdate:modelValue":t[1]||(t[1]=t=>e.theme=t),class:"mr-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(n.T,{value:"dark",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(u.t,null,{default:(0,r.w5)((()=>[b])),_:1})])),_:1}),(0,r.Wm)(n.T,{value:"light",size:"small"},{default:(0,r.w5)((()=>[(0,r.Wm)(u.t,null,{default:(0,r.w5)((()=>[w])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(n.T,{icon:"mdi-github",href:"https://github.com/techws-dev/agile-board-app",target:"_blank"})])),default:(0,r.w5)((()=>[(0,r.Wm)(c.g,{variant:"text",onClick:t[0]||(t[0]=(0,i.iM)((t=>e.drawer=!e.drawer),["stop"]))}),(0,r.Wm)(k.q,null,{default:(0,r.w5)((()=>[j])),_:1})])),_:1}),(0,r.Wm)(y.V,{modelValue:e.drawer,"onUpdate:modelValue":t[2]||(t[2]=t=>e.drawer=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(p.l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m.R,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g.V,null,{default:(0,r.w5)((()=>[(0,r.Uk)("v"+(0,l.zw)(e.appVersion),1)])),_:1})])),_:1})])),_:1}),(0,r.Wm)(h.i,{nav:""},{default:(0,r.w5)((()=>[(0,r.Wm)(p.l,{title:"Home",to:"/"}),(0,r.Wm)(p.l,{title:"About",to:"/about"})])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(f.O,{style:{"min-height":"100vh"}},{default:(0,r.w5)((()=>[(0,r.Wm)(I)])),_:1})])),_:1},8,["theme"])}var C=o(7139),D={name:"App",data:()=>({drawer:!0,theme:"light"}),mounted(){"0.2.4"!==this.$store.state.settings.appVersion&&(console.log("update app version"),this["settings/updateAppVersion"]("0.2.4")),this.theme=this.$store.state.settings.theme},watch:{theme(e,t){this["settings/updateTheme"](e)}},methods:{...(0,C.nv)(["settings/updateAppVersion","settings/updateTheme"])},computed:{...(0,C.Se)({appVersion:"settings/appVersion"})}},I=o(89);const V=(0,I.Z)(D,[["render",v]]);var _=V,T=o(678),W=o(11),P=o(6572),U=o(1888),x=o(1334),F=o(9234),O=o(3369),$=o(6824),A=o(8521),S=o(7471);const E=(0,r.Uk)("Projects"),Z=(0,r.Uk)(" New project "),q=(0,r._)("div",{class:"pa-15 text-grey text-center"}," No project created yet. ",-1),B=(0,r.Uk)(" Edit "),z=(0,r.Uk)(" Delete ");function N(e,t,o,a,d,c){const s=(0,r.up)("project-dialog"),u=(0,r.up)("delete-project-dialog"),p=(0,r.up)("notification-component");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(S.iv,{dark:"",prominent:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k.q,null,{default:(0,r.w5)((()=>[E])),_:1}),(0,r.Wm)(F.C),(0,r.Wm)(n.T,{color:"primary",onClick:t[0]||(t[0]=e=>c.openProjectDialog(null))},{default:(0,r.w5)((()=>[Z])),_:1})])),_:1}),(0,r.Wm)(O.K,{fluid:""},{default:(0,r.w5)((()=>[(0,r.Wm)($.o,null,{default:(0,r.w5)((()=>[e.projects.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(A.D,{key:0},{default:(0,r.w5)((()=>[q])),_:1})),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.projects,(t=>((0,r.wg)(),(0,r.j4)(A.D,{cols:"12",sm:"6",lg:"4",key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,{href:e.baseUrl+"#/project/"+t.id},{default:(0,r.w5)((()=>[(0,r.Wm)(P.E,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(t.name),1)])),_:2},1024),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Created: "+(0,l.zw)(new Date(t.creationDate).toLocaleString()),1)])),_:2},1024),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{color:"primary",text:"",onClick:(0,i.iM)((e=>c.openProjectDialog(t.id)),["prevent"])},{default:(0,r.w5)((()=>[B])),_:2},1032,["onClick"]),(0,r.Wm)(n.T,{color:"red",text:"",onClick:(0,i.iM)((e=>c.openDeleteProjectDialog(t.id)),["prevent"])},{default:(0,r.w5)((()=>[z])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["href"])])),_:2},1024)))),128))])),_:1}),(0,r.Wm)(s,{visible:e.projectDialogVisible,project:e.currentProject,onCloseProjectDialog:c.closeProjectDialog,onProjectAdded:c.handleProjectAdded,onProjectUpdated:c.handleProjectUpdated},null,8,["visible","project","onCloseProjectDialog","onProjectAdded","onProjectUpdated"]),(0,r.Wm)(u,{visible:e.deleteProjectDialogVisible,projectId:e.deleteProjectId,onCloseDeleteProjectDialog:c.closeDeleteProjectDialog,onProjectDeleted:c.handleProjectDeleted},null,8,["visible","projectId","onCloseDeleteProjectDialog","onProjectDeleted"]),(0,r.Wm)(p,{ref:"notification"},null,512)])),_:1})],64)}var L=o(3601),K=o(6422),M=o(2902);const R=(0,r.Uk)(" Create a project "),H=(0,r.Uk)(" Update project "),Y=(0,r.Uk)(" Cancel "),G=(0,r.Uk)(" Save ");function J(e,t,o,i,l,a){return(0,r.wg)(),(0,r.j4)(L.B,{modelValue:a.dialogVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>a.dialogVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,{id:"project-dialog-card"},{default:(0,r.w5)((()=>[null===e.projectId?((0,r.wg)(),(0,r.j4)(P.E,{key:0},{default:(0,r.w5)((()=>[R])),_:1})):((0,r.wg)(),(0,r.j4)(P.E,{key:1},{default:(0,r.w5)((()=>[H])),_:1})),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(K.O,{ref:"projectForm",modelValue:e.projectFormValid,"onUpdate:modelValue":t[2]||(t[2]=t=>e.projectFormValid=t),"validation-lazy":"",onSubmit:a.saveProject},{default:(0,r.w5)((()=>[(0,r.Wm)(M.h,{modelValue:e.projectName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.projectName=t),counter:50,rules:e.nameRules,label:"Project name",required:"",onInput:t[1]||(t[1]=e=>a.validateProjectForm())},null,8,["modelValue","rules"])])),_:1},8,["modelValue","onSubmit"])])),_:1}),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{class:"mr-2",color:"normal",text:"",onClick:t[3]||(t[3]=t=>e.$emit("closeProjectDialog"))},{default:(0,r.w5)((()=>[Y])),_:1}),(0,r.Wm)(n.T,{color:"primary",text:"",disabled:!e.projectFormValid,onClick:a.saveProject},{default:(0,r.w5)((()=>[G])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var Q={props:{visible:{type:Boolean,required:!0},project:{type:Object,required:!0}},data:()=>({projectId:null,projectName:"",nameRules:[e=>!!e||"Name is required",e=>e&&e.length<=50||"Name must be less than 50 characters"],projectFormValid:!1}),watch:{visible(e,t){!0===e&&!1===t&&(this.projectId=this.project.id,this.projectName=this.project.name,this.projectFormValid=!1,null!==this.projectId&&(this.projectFormValid=!0))}},computed:{dialogVisible(){return this.visible}},methods:{async saveProject(e){if(e.preventDefault(),await this.validateProjectForm(),!this.projectFormValid)return;let t={name:this.projectName};null===this.projectId?(await this["projects/add"](t.name),this.$emit("projectAdded")):(t.id=this.projectId,await this["projects/update"](t),this.$emit("projectUpdated")),this.$emit("closeProjectDialog")},async validateProjectForm(){await this.$refs.projectForm.validate()},...(0,C.nv)(["projects/add","projects/update"])}};const X=(0,I.Z)(Q,[["render",J],["__scopeId","data-v-18cd76be"]]);var ee=X;function te(e,t,o,i,l,a){const d=(0,r.up)("confirm-dialog");return(0,r.wg)(),(0,r.j4)(d,{title:"Confirm",body:"Are you sure to delete this project ?",visible:a.dialogVisible,onCloseConfirmDialog:t[0]||(t[0]=t=>e.$emit("closeDeleteProjectDialog")),onConfirmAction:a.deleteProject},null,8,["visible","onConfirmAction"])}const oe=(0,r.Uk)(" Cancel "),ie=(0,r.Uk)(" Confirm ");function re(e,t,o,i,a,d){return(0,r.wg)(),(0,r.j4)(L.B,{modelValue:d.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>d.dialogVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P.E,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(o.title),1)])),_:1}),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(o.body),1)])),_:1}),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{class:"mr-2",color:"normal",text:"",onClick:t[0]||(t[0]=t=>e.$emit("closeConfirmDialog"))},{default:(0,r.w5)((()=>[oe])),_:1}),(0,r.Wm)(n.T,{color:"primary",text:"",onClick:t[1]||(t[1]=t=>e.$emit("confirmAction"))},{default:(0,r.w5)((()=>[ie])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var le={props:{visible:{type:Boolean,required:!0},title:{type:String,required:!0},body:{type:String,required:!0}},computed:{dialogVisible(){return this.visible}}};const ae=(0,I.Z)(le,[["render",re]]);var de=ae,ce={components:{ConfirmDialog:de},props:{visible:{type:Boolean,required:!0},projectId:{type:String,required:!0}},methods:{async deleteProject(){let e=this.projectId;null!==e&&(await this["projects/delete"](e),this.$emit("projectDeleted"),this.$emit("closeDeleteProjectDialog"))},...(0,C.nv)(["projects/delete"])},computed:{dialogVisible(){return this.visible}}};const ne=(0,I.Z)(ce,[["render",te]]);var se=ne,ue=o(9671);const pe={class:"text-subtitle-1"},me=(0,r.Uk)(" Close ");function ge(e,t,o,i,a,d){return(0,r.wg)(),(0,r.j4)(ue.v,{modelValue:e.display,"onUpdate:modelValue":t[1]||(t[1]=t=>e.display=t),vertical:""},{actions:(0,r.w5)((()=>[(0,r.Wm)(n.T,{color:"pink",variant:"text",onClick:t[0]||(t[0]=t=>e.display=!1)},{default:(0,r.w5)((()=>[me])),_:1})])),default:(0,r.w5)((()=>[(0,r._)("div",pe,(0,l.zw)(e.text),1)])),_:1},8,["modelValue"])}var he={data:()=>({display:!1,text:"blabla"}),methods:{show(e){this.display=!0,this.text=e}}};const fe=(0,I.Z)(he,[["render",ge]]);var ye=fe,ke={components:{ProjectDialog:ee,DeleteProjectDialog:se,NotificationComponent:ye},data:()=>({baseUrl:"/agile-board-app/",projectDialogVisible:!1,currentProject:{},deleteProjectDialogVisible:!1,deleteProjectId:""}),methods:{openProjectDialog(e){if(this.resetCurrentProject(),null!==e){let t=this.projects.find((t=>t.id===e));this.currentProject={...t}}this.projectDialogVisible=!0},closeProjectDialog(){this.projectDialogVisible=!1,this.resetCurrentProject()},handleProjectAdded(){this.$refs.notification.show("Project has been created")},handleProjectUpdated(){this.$refs.notification.show("Project has been updated")},resetCurrentProject(){this.currentProject={id:null,name:null}},openDeleteProjectDialog(e){this.deleteProjectId=e,this.deleteProjectDialogVisible=!0},closeDeleteProjectDialog(){this.deleteProjectId="",this.deleteProjectDialogVisible=!1},handleProjectDeleted(){this.$refs.notification.show("Project has been deleted")}},computed:{...(0,C.rn)("projects",["projects"])}};const je=(0,I.Z)(ke,[["render",N]]);var be=je;const we=(0,r.Uk)(" New ticket "),ve=(0,r.Uk)(" New category "),Ce=["id"],De={class:"text-truncate flex-grow-1"},Ie=["id"],Ve=(0,r.Uk)(" no description ");function _e(e,t,o,a,d,c){const s=(0,r.up)("category-dialog"),u=(0,r.up)("delete-category-dialog"),p=(0,r.up)("ticket-dialog"),m=(0,r.up)("delete-ticket-dialog"),g=(0,r.up)("notification-component");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(S.iv,{dark:"",prominent:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k.q,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.project.name),1)])),_:1}),(0,r.Wm)(F.C),(0,r.Wm)(n.T,{color:"primary",onClick:t[0]||(t[0]=e=>c.openTicketDialog(null))},{default:(0,r.w5)((()=>[we])),_:1}),(0,r.Wm)(n.T,{color:"primary",onClick:t[1]||(t[1]=e=>c.openCategoryDialog(null))},{default:(0,r.w5)((()=>[ve])),_:1})])),_:1}),(0,r.Wm)(O.K,{fluid:""},{default:(0,r.w5)((()=>[(0,r.Wm)($.o,{id:"categories",dense:"",style:{overflow:"auto"},class:"align-start"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.sortedCategories,(t=>((0,r.wg)(),(0,r.j4)(A.D,{style:{"min-width":"250px","max-width":"250px"},key:t.id,id:"category-"+t.id},{default:(0,r.w5)((()=>[(0,r._)("div",{class:"d-flex category-header pa-2 mb-2 select-none",id:t.key},[(0,r._)("h3",De,(0,l.zw)(t.label),1),(0,r.Wm)(F.C),(0,r.Wm)(n.T,{variant:"plain",class:"mr-2",color:"primary",icon:"mdi-pencil",size:"x-small",onClick:e=>c.openCategoryDialog(t.id)},null,8,["onClick"]),(0,r.Wm)(n.T,{variant:"plain",color:"red",icon:"mdi-delete",size:"x-small",onClick:e=>c.openDeleteCategoryDialog(t.id)},null,8,["onClick"])],8,Ce),(0,r._)("div",{id:"category-items-"+t.key},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.filteredTicketsByCategory(t.key),(t=>((0,r.wg)(),(0,r.j4)(W._,{key:t.id,class:"ticket mb-2 select-none",id:"ticket-"+t.id,style:(0,l.j5)("background-color: "+e.colors[t.color].lighten1+";")},{default:(0,r.w5)((()=>[(0,r.Wm)(P.E,{class:"text-black"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(t.title),1)])),_:2},1024),t.description.length?((0,r.wg)(),(0,r.j4)(U.Z,{key:0,class:"text-black"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(t.description),1)])),_:2},1024)):((0,r.wg)(),(0,r.j4)(U.Z,{key:1,class:"font-italic text-black"},{default:(0,r.w5)((()=>[Ve])),_:1})),(0,r.Wm)(U.Z,{class:"text-black"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Created: "+(0,l.zw)(new Date(t.creationDate).toLocaleString()),1)])),_:2},1024),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{color:"primary",icon:"mdi-pencil",size:"x-small",onClick:(0,i.iM)((e=>c.openTicketDialog(t.id)),["prevent"]),class:"bg-white"},null,8,["onClick"]),(0,r.Wm)(n.T,{color:"red",icon:"mdi-delete",size:"x-small",onClick:(0,i.iM)((e=>c.openDeleteTicketDialog(t.id)),["prevent"]),class:"bg-white"},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["id","style"])))),128))],8,Ie)])),_:2},1032,["id"])))),128))])),_:1}),(0,r.Wm)(s,{visible:e.categoryDialogVisible,category:e.currentCategory,onCloseCategoryDialog:c.closeCategoryDialog,onCategoryAdded:c.handleCategoryAdded,onCategoryUpdated:c.handleCategoryUpdated},null,8,["visible","category","onCloseCategoryDialog","onCategoryAdded","onCategoryUpdated"]),(0,r.Wm)(u,{visible:e.deleteCategoryDialogVisible,categoryId:e.deleteCategoryId,onCloseDeleteCategoryDialog:c.closeDeleteCategoryDialog,onCategoryDeleted:c.handleCategoryDeleted},null,8,["visible","categoryId","onCloseDeleteCategoryDialog","onCategoryDeleted"]),(0,r.Wm)(p,{visible:e.ticketDialogVisible,ticket:e.currentTicket,onCloseTicketDialog:c.closeTicketDialog,onTicketAdded:c.handleTicketAdded,onTicketUpdated:c.handleTicketUpdated},null,8,["visible","ticket","onCloseTicketDialog","onTicketAdded","onTicketUpdated"]),(0,r.Wm)(m,{visible:e.deleteTicketDialogVisible,ticketId:e.deleteTicketId,onCloseDeleteTicketDialog:c.closeDeleteTicketDialog,onTicketDeleted:c.handleTicketDeleted},null,8,["visible","ticketId","onCloseDeleteTicketDialog","onTicketDeleted"]),(0,r.Wm)(g,{ref:"notification"},null,512)])),_:1})],64)}o(6699);const Te=(0,r.Uk)(" New Category "),We=(0,r.Uk)(" Update Category "),Pe=(0,r.Uk)(" Cancel "),Ue=(0,r.Uk)(" Save ");function xe(e,t,o,i,l,a){return(0,r.wg)(),(0,r.j4)(L.B,{modelValue:a.dialogVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>a.dialogVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,{id:"category-dialog-card"},{default:(0,r.w5)((()=>[null===e.categoryId?((0,r.wg)(),(0,r.j4)(P.E,{key:0},{default:(0,r.w5)((()=>[Te])),_:1})):((0,r.wg)(),(0,r.j4)(P.E,{key:1},{default:(0,r.w5)((()=>[We])),_:1})),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(K.O,{ref:"categoryForm",modelValue:e.categoryFormValid,"onUpdate:modelValue":t[2]||(t[2]=t=>e.categoryFormValid=t),"validation-lazy":"",onSubmit:a.saveCategory},{default:(0,r.w5)((()=>[(0,r.Wm)(M.h,{modelValue:e.categoryLabel,"onUpdate:modelValue":t[0]||(t[0]=t=>e.categoryLabel=t),counter:50,rules:e.labelRules,label:"Name",required:"",onInput:t[1]||(t[1]=e=>a.validateCategoryForm())},null,8,["modelValue","rules"])])),_:1},8,["modelValue","onSubmit"])])),_:1}),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{class:"mr-2",color:"normal",text:"",onClick:t[3]||(t[3]=t=>e.$emit("closeCategoryDialog"))},{default:(0,r.w5)((()=>[Pe])),_:1}),(0,r.Wm)(n.T,{color:"primary",text:"",disabled:!e.categoryFormValid,onClick:a.saveCategory},{default:(0,r.w5)((()=>[Ue])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var Fe={props:{visible:{type:Boolean,required:!0},category:{type:Object,required:!0}},data:()=>({projectId:null,categoryId:null,categoryLabel:null,categoryFormValid:!1,labelRules:[e=>!!e||"Name is required",e=>e&&e.length<=50||"Name must be less than 50 characters"]}),watch:{visible(e,t){!0===e&&!1===t&&(this.projectId=this.category.projectId,this.categoryId=this.category.id,this.categoryLabel=this.category.label,this.categoryFormValid=!1,null!==this.categoryId&&(this.categoryFormValid=!0))}},computed:{dialogVisible(){return this.visible}},methods:{async saveCategory(e){if(e.preventDefault(),await this.validateCategoryForm(),!this.categoryFormValid)return;let t={projectId:this.category.projectId,key:this.categoryLabel.toLowerCase().replaceAll(" ","-"),label:this.categoryLabel};null===this.categoryId?(await this["categories/add"](t),this.$emit("categoryAdded")):(t.id=this.categoryId,await this["categories/update"](t),this.$emit("categoryUpdated")),this.$emit("closeCategoryDialog")},async validateCategoryForm(){await this.$refs.categoryForm.validate()},...(0,C.nv)(["categories/add","categories/update"])}};const Oe=(0,I.Z)(Fe,[["render",xe],["__scopeId","data-v-c1eb77b2"]]);var $e=Oe;function Ae(e,t,o,i,l,a){const d=(0,r.up)("confirm-dialog");return(0,r.wg)(),(0,r.j4)(d,{title:"Confirm",body:"Are you sure to delete this category ?",visible:a.dialogVisible,onCloseConfirmDialog:t[0]||(t[0]=t=>e.$emit("closeDeleteCategoryDialog")),onConfirmAction:a.deleteCategory},null,8,["visible","onConfirmAction"])}var Se={components:{ConfirmDialog:de},props:{visible:{type:Boolean,required:!0},categoryId:{type:String,required:!0}},methods:{async deleteCategory(){let e=this.categoryId;null!==e&&(await this["categories/delete"](e),this.$emit("categoryDeleted"),this.$emit("closeDeleteCategoryDialog"))},...(0,C.nv)(["categories/delete"])},computed:{dialogVisible(){return this.visible}}};const Ee=(0,I.Z)(Se,[["render",Ae]]);var Ze=Ee;function qe(e,t,o,i,l,a){const d=(0,r.up)("confirm-dialog");return(0,r.wg)(),(0,r.j4)(d,{title:"Confirm",body:"Are you sure to delete this ticket ?",visible:a.dialogVisible,onCloseConfirmDialog:t[0]||(t[0]=t=>e.$emit("closeDeleteTicketDialog")),onConfirmAction:a.deleteTicket},null,8,["visible","onConfirmAction"])}var Be={components:{ConfirmDialog:de},props:{visible:{type:Boolean,required:!0},ticketId:{type:String,required:!0}},methods:{async deleteTicket(){let e=this.ticketId;null!==e&&(await this["tickets/delete"](e),this.$emit("ticketDeleted"),this.$emit("closeDeleteTicketDialog"))},...(0,C.nv)(["tickets/delete"])},computed:{dialogVisible(){return this.visible}}};const ze=(0,I.Z)(Be,[["render",qe]]);var Ne=ze,Le=o(6836),Ke=o(4842);const Me=(0,r.Uk)(" New Ticket "),Re=(0,r.Uk)(" Update Ticket "),He=(0,r.Uk)(" Cancel "),Ye=(0,r.Uk)(" Save ");function Ge(e,t,o,a,d,c){return(0,r.wg)(),(0,r.j4)(L.B,{modelValue:c.dialogVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>c.dialogVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(W._,{id:"ticket-dialog-card"},{default:(0,r.w5)((()=>[null===e.ticketId?((0,r.wg)(),(0,r.j4)(P.E,{key:0},{default:(0,r.w5)((()=>[Me])),_:1})):((0,r.wg)(),(0,r.j4)(P.E,{key:1},{default:(0,r.w5)((()=>[Re])),_:1})),(0,r.Wm)(U.Z,null,{default:(0,r.w5)((()=>[(0,r.Wm)(K.O,{ref:"ticketForm",modelValue:e.ticketFormValid,"onUpdate:modelValue":t[5]||(t[5]=t=>e.ticketFormValid=t),"validation-lazy":"",onSubmit:c.saveTicket},{default:(0,r.w5)((()=>[(0,r.Wm)(s.f,{class:"flex-wrap mb-8",modelValue:e.ticketColor,"onUpdate:modelValue":t[0]||(t[0]=t=>e.ticketColor=t),style:{height:"auto"},mandatory:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.colorsSelect,(e=>((0,r.wg)(),(0,r.j4)(n.T,{key:e,value:e[0],class:"pa-2",size:"small",style:(0,l.j5)("background-color: "+e[1].lighten1+";")},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e[0]),1)])),_:2},1032,["value","style"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(Le.r,{modelValue:e.ticketCategory,"onUpdate:modelValue":t[1]||(t[1]=t=>e.ticketCategory=t),items:c.categoriesSelect,label:"Category",required:""},null,8,["modelValue","items"]),(0,r.Wm)(M.h,{modelValue:e.ticketTitle,"onUpdate:modelValue":t[2]||(t[2]=t=>e.ticketTitle=t),counter:50,rules:e.titleRules,label:"Title",required:"",onInput:t[3]||(t[3]=e=>c.validateTicketForm()),onKeyup:(0,i.D2)(c.saveTicket,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,r.Wm)(Ke.z,{modelValue:e.ticketDescription,"onUpdate:modelValue":t[4]||(t[4]=t=>e.ticketDescription=t),label:"Description"},null,8,["modelValue"])])),_:1},8,["modelValue","onSubmit"])])),_:1}),(0,r.Wm)(x.h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(F.C),(0,r.Wm)(n.T,{class:"mr-2",color:"normal",text:"",onClick:t[6]||(t[6]=t=>e.$emit("closeTicketDialog"))},{default:(0,r.w5)((()=>[He])),_:1}),(0,r.Wm)(n.T,{color:"primary",text:"",disabled:!e.ticketFormValid,onClick:c.saveTicket},{default:(0,r.w5)((()=>[Ye])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var Je=o(6064),Qe={props:{visible:{type:Boolean,required:!0},ticket:{type:Object,required:!0}},data:()=>({categories:[],colors:Object.fromEntries(Object.entries(Je.Z).filter((([e,t])=>["green","blue","yellow","orange","red","purple"].includes(e)))),projectId:null,ticketId:null,ticketCategory:null,ticketColor:null,ticketTitle:"",ticketDescription:"",ticketFormValid:!1,titleRules:[e=>!!e||"Title is required",e=>e&&e.length<=50||"Title must be less than 50 characters"]}),watch:{visible(e,t){!0===e&&!1===t&&(this.projectId=this.ticket.projectId,this.ticketId=this.ticket.id,this.ticketCategory=this.ticket.category,this.ticketColor=this.ticket.color,this.ticketTitle=this.ticket.title,this.ticketDescription=this.ticket.description,this.categories=this["categories/getByProjectId"](this.projectId),this.ticketFormValid=!1,null!==this.ticketId&&(this.ticketFormValid=!0))}},computed:{dialogVisible(){return this.visible},categoriesSelect(){return[...this.categories].sort(((e,t)=>e.order-t.order)).map((e=>e.key))},colorsSelect(){return Object.entries(this.colors).filter((([e,t])=>"shades"!==e))},...(0,C.Se)(["categories/getByProjectId"])},methods:{async saveTicket(e){if(e.preventDefault(),await this.validateTicketForm(),!this.ticketFormValid)return;let t={projectId:this.projectId,title:this.ticketTitle,description:this.ticketDescription,category:this.ticketCategory,color:this.ticketColor};null===this.ticketId?(await this["tickets/add"](t),this.$emit("ticketAdded")):(t.id=this.ticketId,await this["tickets/update"](t),this.$emit("ticketUpdated")),this.$emit("closeTicketDialog")},async validateTicketForm(){await this.$refs.ticketForm.validate()},...(0,C.nv)(["tickets/add","tickets/update"])}};const Xe=(0,I.Z)(Qe,[["render",Ge],["__scopeId","data-v-5168d594"]]);var et=Xe,tt=o(330),ot={components:{CategoryDialog:$e,DeleteCategoryDialog:Ze,DeleteTicketDialog:Ne,TicketDialog:et,NotificationComponent:ye},data:()=>({colors:Object.fromEntries(Object.entries(Je.Z).filter((([e,t])=>["green","blue","yellow","orange","red","purple"].includes(e)))),categories:[],project:{id:null,name:null},tickets:[],ticketDialogVisible:!1,currentTicket:{},categoryDialogVisible:!1,currentCategory:{},deleteTicketDialogVisible:!1,deleteTicketId:"",deleteCategoryDialogVisible:!1,deleteCategoryId:""}),async mounted(){let e=this.$route.params.id,t=await this["projects/getById"](e);t?(this.project=t,await this.loadData()):this.$router.push({path:"/"})},methods:{async loadData(){this.tickets=await this["tickets/getByProjectId"](this.project.id),this.categories=await this["categories/getByProjectId"](this.project.id),this.loadSortable()},loadSortable(){this.$nextTick((()=>{this.categories.forEach((e=>{tt.Z.create(document.getElementById("categories"),{group:"categories",animation:150,swapThreshold:.1,handle:".category-header",filter:"button",onEnd:e=>{let t=e.item.id.replace("category-",""),o=this.project.id,i=e.newIndex,r=e.oldIndex;i!==r&&this["categories/move"]({id:t,projectId:o,oldIndex:r,newIndex:i})}}),tt.Z.create(document.getElementById(`category-items-${e.key}`),{group:"items",animation:150,swapThreshold:1,filter:"button",onEnd:e=>{let t=e.item.id.replace("ticket-",""),o=this.project.id,i=e.from.id.replace("category-items-",""),r=e.to.id.replace("category-items-",""),l=e.newIndex,a=e.oldIndex;i===r&&l===a||this["tickets/move"]({id:t,projectId:o,categoryFrom:i,categoryTo:r,oldIndex:a,newIndex:l}),console.log(`${t} moved from ${i} to ${r} and from index ${a} to ${l}`)}})}))}))},openCategoryDialog(e){if(this.resetCurrentCategory(),null!==e){let t=this.categories.find((t=>t.id===e));this.currentCategory={...t}}this.categoryDialogVisible=!0},closeCategoryDialog(){this.categoryDialogVisible=!1,this.resetCurrentCategory()},handleCategoryAdded(){this.$refs.notification.show("Category has been created"),this.loadData()},handleCategoryUpdated(){this.$refs.notification.show("Category has been updated"),this.loadData()},resetCurrentCategory(){this.currentCategory={id:null,projectId:this.project.id,key:null,label:null,order:null}},openDeleteCategoryDialog(e){this.deleteCategoryId=e,this.deleteCategoryDialogVisible=!0},closeDeleteCategoryDialog(){this.deleteCategoryId="",this.deleteCategoryDialogVisible=!1},handleCategoryDeleted(){this.$refs.notification.show("Category has been deleted"),this.loadData()},openTicketDialog(e){if(this.resetCurrentTicket(),null!==e){let t=this.tickets.find((t=>t.id===e));this.currentTicket={...t}}this.ticketDialogVisible=!0},closeTicketDialog(){this.ticketDialogVisible=!1,this.resetCurrentTicket()},handleTicketAdded(){this.$refs.notification.show("Ticket has been created"),this.loadData()},handleTicketUpdated(){this.$refs.notification.show("Ticket has been updated"),this.loadData()},resetCurrentTicket(){this.currentTicket={id:null,projectId:this.project.id,color:"yellow",category:[...this.categories].sort(((e,t)=>e.order-t.order)).map((e=>e.key))[0],title:"",description:""}},openDeleteTicketDialog(e){this.deleteTicketId=e,this.deleteTicketDialogVisible=!0},closeDeleteTicketDialog(){this.deleteTicketId="",this.deleteTicketDialogVisible=!1},handleTicketDeleted(){this.$refs.notification.show("Ticket has been deleted"),this.loadData()},filteredTicketsByCategory(e){return this.tickets.filter((t=>t.category===e)).sort(((e,t)=>e.order-t.order))},...(0,C.nv)(["tickets/move","categories/move"])},computed:{sortedCategories(){return[...this.categories].sort(((e,t)=>e.order-t.order))},...(0,C.Se)(["projects/getById","tickets/getByProjectId","categories/getByProjectId"])}};const it=(0,I.Z)(ot,[["render",_e],["__scopeId","data-v-14e5bfb8"]]);var rt=it;const lt=(0,r._)("h1",{class:"mb-5"},"About",-1),at=(0,r._)("p",{class:"mb-2"},[(0,r.Uk)(" This web app helps organize your work on your projects with an "),(0,r._)("strong",null,"agile board"),(0,r.Uk)(", used in methodologies like "),(0,r._)("strong",null,"Kanban"),(0,r.Uk)(" or "),(0,r._)("strong",null,"Scrum"),(0,r.Uk)(". ")],-1),dt=(0,r._)("p",{class:"mb-2"}," All datas are saved in the locale storage of the browser. ",-1),ct=(0,r._)("p",{class:"mb-2"},[(0,r.Uk)(" This open source project is developped with "),(0,r._)("strong",null,"Vue 3"),(0,r.Uk)(" and "),(0,r._)("strong",null,"Vuetify"),(0,r.Uk)(". ")],-1),nt=(0,r._)("p",{class:"mb-2"},[(0,r.Uk)(" You can look at the code on "),(0,r._)("a",{href:"https://github.com/techws-dev/agile-board-app",target:"_blank",class:"text-decoration-none text-blue"},"github"),(0,r.Uk)(" (If you like it, please consider leaving a star). ")],-1);function st(e,t){return(0,r.wg)(),(0,r.j4)(O.K,{fluid:""},{default:(0,r.w5)((()=>[lt,at,dt,ct,nt])),_:1})}const ut={},pt=(0,I.Z)(ut,[["render",st]]);var mt=pt;const gt=[{path:"/",name:"home",component:be},{path:"/project/:id",name:"project",component:rt},{path:"/about",name:"about",component:mt}],ht=(0,T.p7)({history:(0,T.r5)("/agile-board-app/"),routes:gt});var ft=ht,yt=o(2415),kt={namespaced:!0,state:{appVersion:"0.2.4",theme:"light"},getters:{appVersion:e=>e.appVersion},mutations:{updateAppVersion(e,t){e.appVersion=t},updateTheme(e,t){e.theme=t}},actions:{updateAppVersion(e,t){e.commit("updateAppVersion",t)},updateTheme(e,t){e.commit("updateTheme",t)}}},jt=o(536);const bt=[{key:"todo",label:"TODO",order:0},{key:"progress",label:"Progress",order:1},{key:"to-verify",label:"To verify",order:2},{key:"done",label:"Done",order:3}];var wt={namespaced:!0,state:{categories:[]},getters:{getByProjectId:e=>t=>e.categories.filter((e=>e.projectId===t))},mutations:{add(e,{projectId:t,key:o,label:i}){let r=(0,jt.Z)(),l=e.categories.filter((e=>e.projectId==t)).length;e.categories.push({id:r,projectId:t,key:o,label:i,order:l})},update(e,{id:t,projectId:o,key:i,label:r}){let l=e.categories.map((e=>e.id)).indexOf(t);e.categories[l].projectId=o,e.categories[l].key=i,e.categories[l].label=r},delete(e,{id:t}){let o=e.categories.map((e=>e.id)).indexOf(t);e.categories.splice(o,1)},createDefaultCategoriesForProject(e,t){bt.forEach((o=>{let i=(0,jt.Z)();e.categories.push({id:i,projectId:t,key:o.key,label:o.label,order:o.order})}))},move(e,{id:t,projectId:o,oldIndex:i,newIndex:r}){console.log("category move"),e.categories.filter((e=>e.projectId===o&&e.id!==t)).forEach((e=>{e.order>i&&(e.order-=1)})),e.categories.filter((e=>e.projectId===o&&e.id!==t)).forEach((e=>{e.order>=r&&(e.order+=1)}));let l=e.categories.map((e=>e.id)).indexOf(t);e.categories[l].order=r},deleteFromProject(e,t){e.categories=e.categories.filter((e=>e.projectId!==t))}},actions:{add(e,{projectId:t,key:o,label:i}){e.commit("add",{projectId:t,key:o,label:i})},update(e,{id:t,projectId:o,key:i,label:r}){e.commit("update",{id:t,projectId:o,key:i,label:r})},delete(e,t){let o=e.state.categories.map((e=>e.id)).indexOf(t),i=e.state.categories[o].key,r=e.state.categories[o].projectId;e.commit("delete",{id:t}),e.dispatch("tickets/deleteFromCategory",{category:i,projectId:r},{root:!0})},createDefaultCategoriesForProject(e,t){e.commit("createDefaultCategoriesForProject",t)},move(e,{id:t,projectId:o,oldIndex:i,newIndex:r}){e.commit("move",{id:t,projectId:o,oldIndex:i,newIndex:r})},deleteFromProject(e,t){e.commit("deleteFromProject",t)}}},vt={namespaced:!0,state:{projects:[]},getters:{getById:e=>t=>e.projects.find((e=>e.id===t))},mutations:{add(e,{id:t,name:o}){let i=(new Date).toISOString();e.projects.push({id:t,name:o,creationDate:i})},update(e,{id:t,name:o}){let i=e.projects.map((e=>e.id)).indexOf(t);e.projects[i].name=o},delete(e,{id:t}){let o=e.projects.map((e=>e.id)).indexOf(t);e.projects.splice(o,1)}},actions:{add(e,t){let o=(0,jt.Z)();e.commit("add",{id:o,name:t}),e.dispatch("categories/createDefaultCategoriesForProject",o,{root:!0})},update(e,{id:t,name:o}){e.commit("update",{id:t,name:o})},delete(e,t){e.commit("delete",{id:t}),e.dispatch("categories/deleteFromProject",t,{root:!0}),e.dispatch("tickets/deleteFromProject",t,{root:!0})}}},Ct={namespaced:!0,state:{tickets:[]},getters:{getByProjectId:e=>t=>e.tickets.filter((e=>e.projectId===t))},mutations:{add(e,{id:t,projectId:o,title:i,description:r,category:l,color:a}){let d=(new Date).toISOString(),c=e.tickets.filter((e=>e.projectId==o&&e.category==l));e.tickets.push({id:t,projectId:o,title:i,description:r,category:l,color:a,order:c.length,creationDate:d})},update(e,{id:t,projectId:o,title:i,description:r,category:l,color:a}){let d=e.tickets.map((e=>e.id)).indexOf(t);e.tickets[d].projectId=o,e.tickets[d].title=i,e.tickets[d].description=r,e.tickets[d].category=l,e.tickets[d].color=a},delete(e,{id:t}){let o=e.tickets.map((e=>e.id)).indexOf(t);e.tickets.splice(o,1)},move(e,{id:t,projectId:o,categoryFrom:i,categoryTo:r,oldIndex:l,newIndex:a}){e.tickets.filter((e=>e.projectId===o&&e.category===i&&e.id!==t)).forEach((e=>{e.order>l&&(e.order-=1)})),e.tickets.filter((e=>e.projectId===o&&e.category===r&&e.id!==t)).forEach((e=>{e.order>=a&&(e.order+=1)}));let d=e.tickets.map((e=>e.id)).indexOf(t);e.tickets[d].projectId=o,e.tickets[d].category=r,e.tickets[d].order=a},deleteFromProject(e,t){e.tickets=e.tickets.filter((e=>e.projectId!==t))},deleteFromCategory(e,{category:t,projectId:o}){e.tickets=e.tickets.filter((e=>e.category!==t||e.projectId!==o))}},actions:{add(e,{projectId:t,title:o,description:i,category:r,color:l}){let a=(0,jt.Z)();e.commit("add",{id:a,projectId:t,title:o,description:i,category:r,color:l})},update(e,{id:t,projectId:o,title:i,description:r,category:l,color:a}){e.commit("update",{id:t,projectId:o,title:i,description:r,category:l,color:a})},delete(e,t){e.commit("delete",{id:t})},move(e,{id:t,projectId:o,categoryFrom:i,categoryTo:r,oldIndex:l,newIndex:a}){e.commit("move",{id:t,projectId:o,categoryFrom:i,categoryTo:r,oldIndex:l,newIndex:a})},deleteFromProject(e,t){e.commit("deleteFromProject",t)},deleteFromCategory(e,{category:t,projectId:o}){e.commit("deleteFromCategory",{category:t,projectId:o})}}},Dt=(0,C.MT)({modules:{settings:kt,categories:wt,projects:vt,tickets:Ct},plugins:[(0,yt.Z)({key:"agile-board-app",paths:["projects","tickets","categories","settings"]})]}),It=(o(9773),o(8957)),Vt=(0,It.Rd)();async function _t(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}_t(),(0,i.ri)(_).use(ft).use(Dt).use(Vt).mount("#app")}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,i,r,l){if(!i){var a=1/0;for(s=0;s<e.length;s++){i=e[s][0],r=e[s][1],l=e[s][2];for(var d=!0,c=0;c<i.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(d=!1,l<a&&(a=l));if(d){e.splice(s--,1);var n=r();void 0!==n&&(t=n)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[i,r,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var l=Object.create(null);o.r(l);var a={};e=e||[null,t({}),t([]),t(t)];for(var d=2&r&&i;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(e){a[e]=function(){return i[e]}}));return a["default"]=function(){return i},o.d(l,a),l}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.247e1dc6.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="agile-board-app:";o.l=function(i,r,l,a){if(e[i])e[i].push(r);else{var d,c;if(void 0!==l)for(var n=document.getElementsByTagName("script"),s=0;s<n.length;s++){var u=n[s];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+l){d=u;break}}d||(c=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+l),d.src=i),e[i]=[r];var p=function(t,o){d.onerror=d.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),c&&document.head.appendChild(d)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/agile-board-app/"}(),function(){var e={143:0};o.f.j=function(t,i){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var l=new Promise((function(o,i){r=e[t]=[o,i]}));i.push(r[2]=l);var a=o.p+o.u(t),d=new Error,c=function(i){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var l=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;d.message="Loading chunk "+t+" failed.\n("+l+": "+a+")",d.name="ChunkLoadError",d.type=l,d.request=a,r[1](d)}};o.l(a,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,l,a=i[0],d=i[1],c=i[2],n=0;if(a.some((function(t){return 0!==e[t]}))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(c)var s=c(o)}for(t&&t(i);n<a.length;n++)l=a[n],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(s)},i=self["webpackChunkagile_board_app"]=self["webpackChunkagile_board_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(7721)}));i=o.O(i)})();
//# sourceMappingURL=app.3bcd832b.js.map