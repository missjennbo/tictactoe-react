(this["webpackJsonptictactoe-react"]=this["webpackJsonptictactoe-react"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),i=n.n(a),o=n(35),s=n.n(o),l=(n(96),n(13)),u=n(48),d=n.n(u),j="SET_MARKER",b="RESET_GAME",m=n(78),f=n(79),O=n(91),h=n(89),p=n(80),x=n.n(p);!function(e){e[e.heart=0]="heart",e[e.cross=1]="cross",e[e.unmarked=2]="unmarked"}(r||(r={})),function(e){e.heart="Herz",e.cross="Kreuz"}(c||(c={}));var g=n(34),v=n.n(g),w=n.p+"static/media/heart.c31d61db.svg",y=n.p+"static/media/cross.7c1a7ad3.svg",_=n(4),k=Object(_.jsx)("div",{className:v.a["image-border"],children:Object(_.jsx)("img",{className:v.a.image,src:w,alt:"https://www.freepik.com"})}),W=Object(_.jsx)("div",{className:v.a["image-border"],children:Object(_.jsx)("img",{className:v.a.image,src:y,alt:"https://www.freepik.com"})}),S=Object(_.jsx)("div",{className:v.a["image-border"]}),C=function(e){var t,n=Object(l.b)(),c=e.cellInfo.filledWith===r.unmarked;return Object(_.jsx)("div",{onClick:function(){return c?n({type:j,row:e.cellInfo.row,cell:e.cellInfo.column}):""},children:(t=e.cellInfo.filledWith,t===r.heart?k:t===r.cross?W:S)})},N=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{children:this.props.boardData.map((function(t){return Object(_.jsxs)("div",{className:x.a.row,children:[Object(_.jsx)(C,{cellInfo:t[0]},"".concat(e.props.boardData.indexOf(t),"0")),Object(_.jsx)(C,{cellInfo:t[1]},"".concat(e.props.boardData.indexOf(t),"1")),Object(_.jsx)(C,{cellInfo:t[2]},"".concat(e.props.boardData.indexOf(t),"2"))]},e.props.boardData.indexOf(t))}))})}}]),n}(a.Component),P=n(81),D=n.n(P),E=function(e){return Object(_.jsx)("button",{className:D.a["button-style"],onClick:e.onClickHandler,children:e.text})},I=n(29),H=n(90),R=n(82),T=n.n(R),A=n(58),F=n.n(A);F.a.setAppElement("body");var M,V,q=function(e){return Object(_.jsx)("div",{children:Object(_.jsx)(F.a,{isOpen:!0,className:T.a["modal-container"],children:e.content})})},G=n(83),U=n.n(G),z="SET_USERNAME",B=function(){var e=Object(H.a)(),t=e.handleSubmit,n=e.register,r=Object(l.b)(),c=Object(_.jsxs)("form",{className:U.a["form-container"],onSubmit:t((function(e){var t;r((t=e.username,{type:z,username:t}))})),children:["Please type in your username:",Object(_.jsx)("input",{name:"username",ref:n,defaultValue:""}),Object(_.jsx)("input",{type:"submit",value:"OK"})]});return Object(_.jsx)(q,{content:c})},K=n(84),Q=n.n(K),X=n(11),J=n(85),Z=function(e){var t=e.columns,n=e.data,r=Object(J.useTable)({columns:t,data:n,initialState:{defaultSorted:[{id:"score",desc:!0}]}}),c=r.getTableProps,a=r.getTableBodyProps,i=r.headerGroups,o=r.rows,s=r.prepareRow;return Object(_.jsxs)("table",Object(X.a)(Object(X.a)({style:{width:"100%",margin:50,padding:10,alignSelf:"center"}},c()),{},{children:[Object(_.jsx)("thead",{children:i.map((function(e){return Object(_.jsx)("tr",Object(X.a)(Object(X.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(_.jsx)("th",Object(X.a)(Object(X.a)({style:{textAlign:"left"}},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(_.jsx)("tbody",Object(X.a)(Object(X.a)({},a()),{},{children:o.map((function(e){return s(e),Object(_.jsx)("tr",Object(X.a)(Object(X.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(_.jsx)("td",Object(X.a)(Object(X.a)({style:{textAlign:"left"}},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))},$=n(118),L=n(123),Y=n(121),ee=function(e){var t=Object(l.b)(),n=Object($.a)([Object(L.a)(Object(Y.a)("score"))]),r=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:Q.a["header-text"],children:"Gewonnen!"}),Object(_.jsx)(Z,{columns:[{Header:"Username",accessor:"username"},{Header:"Score",accessor:"score"}],data:n(e.user)}),Object(_.jsx)("div",{style:{alignSelf:"center"},children:Object(_.jsx)(E,{text:"Close",onClickHandler:function(){return t({type:b})}})})]});return Object(_.jsx)("div",{children:Object(_.jsx)(q,{content:r})})},te=n(24),ne=n(59),re=new te.ApolloClient({uri:"http://ec2-18-156-118-208.eu-central-1.compute.amazonaws.com/graphql",cache:new te.InMemoryCache}),ce=Object(te.gql)(M||(M=Object(ne.a)(["\n    query GetUser {\n        users {\n            id\n            username\n            score\n        }\n    }\n"]))),ae=Object(te.gql)(V||(V=Object(ne.a)(["\n    mutation IncreaseScore($username: String!) {\n        increaseScore(username: $username) {\n            id\n            username\n            score\n        }\n    }\n"]))),ie=function(){var e=Object(te.useQuery)(ce),t=e.loading,n=e.error,r=e.data,c=Object(te.useMutation)(ae,{refetchQueries:[{query:ce}]}),i=Object(I.a)(c,1)[0],o=Object(l.c)((function(e){return e.game.gameFinished})),s=Object(l.c)((function(e){return e.user.username})),u=r?r.users:[];return Object(a.useEffect)((function(){o&&s&&i({variables:{username:s}}).then((function(){})).catch((function(e){return console.log("Error increasing score for user ".concat(s,": ").concat(e))}))}),[o,s,i]),t||n?Object(_.jsx)("div",{}):Object(_.jsx)("div",{children:s?Object(_.jsx)(ee,{user:u}):Object(_.jsx)(B,{})})},oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.game.boardData})),n=Object(l.c)((function(e){return e.game.currentPlayer})),r=Object(l.c)((function(e){return e.game.gameFinished}));return Object(_.jsxs)("div",{className:d.a.container,children:[Object(_.jsx)("p",{className:d.a["header-text"],children:"Tic Tac Toe"}),Object(_.jsxs)("p",{className:d.a["header-text"],children:[n," ist dran!"]}),Object(_.jsx)(N,{boardData:t}),r&&Object(_.jsx)(ie,{}),Object(_.jsx)(E,{text:"Reset",onClickHandler:function(){return e({type:b})}})]})},se=n(30),le=n(88),ue=n.n(le),de={username:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(X.a)(Object(X.a)({},e),{},{username:t.username});default:return e}},be=n(122),me=n(20),fe=n(120),Oe=n(119),he=function(e){return e===c.cross?r.cross:r.heart},pe=function(e,t){var n=he(t);return function(e,t){var n,r=Object(me.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value.map((function(e){return e.filledWith}));if(Object(fe.a)(Object(Oe.a)(t))(c))return!0}}catch(a){r.e(a)}finally{r.f()}return!1}(e,n)||function(e,t){var n,r=e[0].map((function(t){return[e[0][t.column],e[1][t.column],e[2][t.column]]})),c=Object(me.a)(r);try{for(c.s();!(n=c.n()).done;){var a=n.value.map((function(e){return e.filledWith}));if(Object(fe.a)(Object(Oe.a)(t))(a))return!0}}catch(i){c.e(i)}finally{c.f()}return!1}(e,n)||function(e,t){var n=[e[0][0].filledWith,e[1][1].filledWith,e[2][2].filledWith],r=[e[2][0].filledWith,e[1][1].filledWith,e[0][2].filledWith],c=Object(fe.a)(Object(Oe.a)(t))(n),a=Object(fe.a)(Object(Oe.a)(t))(r);return c||a}(e,n)},xe={gameFinished:!1,currentPlayer:c.heart,boardData:[[{filledWith:r.unmarked,row:0,column:0},{filledWith:r.unmarked,row:0,column:1},{filledWith:r.unmarked,row:0,column:2}],[{filledWith:r.unmarked,row:1,column:0},{filledWith:r.unmarked,row:1,column:1},{filledWith:r.unmarked,row:1,column:2}],[{filledWith:r.unmarked,row:2,column:0},{filledWith:r.unmarked,row:2,column:1},{filledWith:r.unmarked,row:2,column:2}]]},ge=function(e,t){return e.gameFinished||(function(e){return e.filledWith===r.unmarked}(e.boardData[t.row][t.cell])&&(e.boardData[t.row][t.cell].filledWith=he(e.currentPlayer)),e.gameFinished=pe(e.boardData,e.currentPlayer),e.currentPlayer=e.currentPlayer===c.heart?c.cross:c.heart),e},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=Object(be.a)(e);switch(t.type){case j:return Object(X.a)({},ge(n,t));case b:return Object(X.a)({},xe);default:return e}},we=Object(se.c)({user:je,game:ve}),ye=function(){var e=Object(se.d)(we,Object(se.a)(ue.a));return Object(_.jsx)(te.ApolloProvider,{client:re,children:Object(_.jsx)(l.a,{store:e,children:Object(_.jsx)(oe,{})})})};s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(ye,{})}),document.getElementById("root"))},34:function(e,t,n){e.exports={"image-border":"CellView_image-border__1bqXZ",image:"CellView_image__f2DX-"}},48:function(e,t,n){e.exports={container:"GameView_container__woVdK"}},80:function(e,t,n){e.exports={row:"BoardView_row__2SrdR"}},81:function(e,t,n){e.exports={"button-style":"Button_button-style__2ipQU"}},82:function(e,t,n){e.exports={"modal-container":"CenteredModal_modal-container__1XRH3"}},83:function(e,t,n){e.exports={"form-container":"UsernameInput_form-container__zZFUa"}},84:function(e,t,n){e.exports={"header-text":"ScoreListView_header-text__2nnlx"}},96:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.1e108115.chunk.js.map