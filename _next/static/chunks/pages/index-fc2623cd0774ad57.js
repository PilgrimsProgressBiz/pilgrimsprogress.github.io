(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4613)}])},7606:function(e,t,i){"use strict";var s=i(5893);i(7294);var n=i(7357),r=i(9417),a=i(1775),c=i(1163);t.Z=e=>{let{text:t,width:i}=e,l=(0,c.useRouter)();return(0,s.jsx)(n.Z,{children:(0,s.jsx)(r.Z,{fullWidth:i,variant:"contained",endIcon:(0,s.jsx)(a.Z,{}),className:"contact-us-button",onClick:()=>l.push("/contact-us"),children:t})})}},4613:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return w},default:function(){return Home}});var s=i(5893),n=i(5582),r=i(7357),a=i(5861),c=i(6886),l=i(1233),o=i(9417),m=i(1211),d=i(6454),h=i(9008),x=i.n(h),j=i(1163),p=i(7294),u=i(5675),g=i.n(u),f=i(1664),v=i.n(f),Service_Service=e=>{let{img:t,title:i,mini_description:n,path:l,href:o}=e;return(0,s.jsx)(c.ZP,{item:!0,sm:12,md:3,className:"service",children:(0,s.jsx)(v(),{href:null!=o?o:l,children:(0,s.jsxs)(r.Z,{marginBottom:"10px",children:[(0,s.jsx)(r.Z,{className:"service-image-container",children:(0,s.jsx)(g(),{width:"/images/services/odoo.png"===t?32:22,height:"/images/services/devops.png"===t?14:"/images/services/odoo.png"===t?32:20,src:t,alt:"service-image"})}),(0,s.jsx)(a.Z,{sx:{fontSize:15,fontWeight:600},mt:"18px",children:i}),(0,s.jsx)(a.Z,{className:"service-description",children:n&&n.length>200?"".concat(n.substring(0,200),"..."):n})]})})})},Z=i(7720),MeetTheTeam_MeetTheTeam=e=>{let{header:t,heading:i,description:n}=e;return(0,s.jsxs)(r.Z,{p:"4rem 3rem",id:"meet-the-team-section",className:"about-us",children:[(0,s.jsx)(a.Z,{fontSize:30,fontWeight:600,children:(0,s.jsx)("span",{style:{color:"#63AC45"},children:t})}),(0,s.jsx)(a.Z,{fontWeight:500,children:i}),(0,s.jsx)(Z.Z,{className:"about-us-divider"}),(0,s.jsx)(a.Z,{className:"description",children:n}),(0,s.jsx)("div",{className:"images-main-container",children:m.Sf.teamMembers.map(e=>(0,s.jsx)(v(),{href:"/",children:(0,s.jsxs)("div",{className:"image-container",children:[(0,s.jsx)(g(),{className:"image",alt:"emp-image",height:150,width:150,src:e.image}),(0,s.jsx)(a.Z,{fontWeight:500,fontSize:14,children:e.name}),(0,s.jsx)(a.Z,{fontWeight:500,fontSize:14,className:"color-primary",children:e.title}),(0,s.jsx)(a.Z,{fontWeight:300,fontSize:11})]})},e.id))})]})},SectionHeader_SectionHeader=e=>{let{heading:t}=e;return(0,s.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[t.slice(0,3),(0,s.jsx)("span",{style:{color:"var(--primary-green"},children:t.slice(3,12)})]})},N=i(6066);i(4949),i(6451);var _=i(9661),TestimonialCard_TestimonialCard=e=>{let{img:t,text:i,name:r,designation:c,company:l,website:o}=e;return(0,s.jsxs)(n.Z,{maxWidth:"xl",className:"testimonial-card",children:[(0,s.jsx)(_.Z,{imgProps:{style:{borderRadius:"50%"}},src:t,className:"testimonial-image"}),(0,s.jsx)(a.Z,{className:"testimonial-text",children:i}),(0,s.jsx)(a.Z,{className:"testimonial-name",children:r}),(0,s.jsxs)(a.Z,{className:"testimonial-designation",children:[c&&l&&o&&c+" ",c&&l&&o&&(0,s.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"product-link",children:l}),c&&l&&!o&&c+" "+l,!c&&l&&!o&&l]})]})};let PreviousBtn=e=>{let{className:t,onClick:i}=e;return(0,s.jsx)("div",{className:t,onClick:i,children:(0,s.jsx)(g(),{src:m.testimonialsData.leftImg,alt:"left"})})},NextBtn=e=>{let{className:t,onClick:i}=e;return(0,s.jsx)("div",{className:t,onClick:i,children:(0,s.jsx)(g(),{src:m.testimonialsData.rightImg,alt:"right"})})};var Testimonials_Testimonials=e=>{let{testimonials:t}=e,{heading:i}=m.testimonialsData;return(0,s.jsxs)(n.Z,{maxWidth:"xl",className:"testimonials-container",children:[(0,s.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[i.slice(0,3),(0,s.jsx)("span",{style:{color:"var(--primary-green)"},children:i.slice(3,16)})]}),(0,s.jsx)("div",{className:"testimonial",children:(0,s.jsx)(N.Z,{prevArrow:(0,s.jsx)(PreviousBtn,{}),nextArrow:(0,s.jsx)(NextBtn,{}),children:null==t?void 0:t.map((e,t)=>(0,s.jsx)(TestimonialCard_TestimonialCard,{img:e.frontmatter.image,text:e.frontmatter.description,name:e.frontmatter.name,designation:e.frontmatter.designation,company:e.frontmatter.company,website:e.frontmatter.website},t))})})]})},S=i(4456),b=i(7606),HomeContainer_HomeContainer=()=>{let{header:e,headerImages:t,heading:i,homeAim:n,contactUsButtonText:c,videoButtonText:o,youtubeIcon:d}=m.homeData,[h,x]=p.useState(0),[j,u]=(0,p.useState)(1);return(0,p.useEffect)(()=>{let e=setInterval(()=>{u(0),setTimeout(()=>{x(e=>(e+1)%t.length),u(1)},1e3)},3e3);return()=>clearInterval(e)},[t.length]),(0,s.jsxs)(l.Z,{pt:{xs:"20px",md:"60px",lg:"30px"},pb:{xs:"100px",lg:"60px"},direction:{xs:"column-reverse",md:"row"},spacing:5,alignItems:"center",children:[(0,s.jsxs)(r.Z,{className:"home-container",children:[(0,s.jsx)(a.Z,{variant:"h6",className:"home-main-heading-1",children:e}),(0,s.jsx)(a.Z,{variant:"h4",className:"home-main-heading-2",children:i}),(0,s.jsx)(a.Z,{children:n}),(0,s.jsx)(r.Z,{display:"flex",gap:"25px",alignItems:"center",mt:6,children:(0,s.jsx)(b.Z,{text:c})})]}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(g(),{src:t[h],alt:"service-image",layout:"responsive",className:"headerImageSlideShow",style:{transition:"opacity 1s ease-in-out",opacity:j}})})]})};let T={testimonials:!0,product:!1};var w=!0;function Home(e){let{services:t,testimonials:i,aboutUs:h,product:p}=e,{title:u}=m.homeData,{servicesHeading:g,servicesAim:f}=m.servicesData,Z=(0,j.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(x(),{children:[(0,s.jsx)("title",{children:u}),(0,s.jsx)("meta",{name:"prixite",content:"Prixte"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)(d.Z,{})]}),(0,s.jsxs)("div",{className:"home-page-container",children:[(0,s.jsx)(n.Z,{maxWidth:"xl",children:(0,s.jsx)(HomeContainer_HomeContainer,{})}),(0,s.jsx)(n.Z,{maxWidth:"xl",children:(0,s.jsx)(MeetTheTeam_MeetTheTeam,{header:h.frontmatter.title,heading:h.frontmatter.header,description:h.frontmatter.description})}),(0,s.jsx)(n.Z,{maxWidth:"xl",children:(0,s.jsxs)(r.Z,{pb:"5rem",id:"services-section",pt:{xs:"0rem",md:"5rem"},children:[(0,s.jsx)(SectionHeader_SectionHeader,{heading:g}),(0,s.jsx)(a.Z,{mt:2,mb:6,children:f}),(0,s.jsx)(c.ZP,{container:!0,spacing:{xs:2,md:7},columnSpacing:3,className:"services-grid",children:null==t?void 0:t.map(e=>(0,s.jsx)(Service_Service,{img:e.frontmatter.logo_image,title:e.frontmatter.header,mini_description:e.frontmatter.mini_description,description:e.frontmatter.description,path:"/services/".concat(e.slug),href:e.frontmatter.href},e.frontmatter.index))}),(0,s.jsx)(N.Z,{className:"services-carousel",arrows:!1,children:null==t?void 0:t.map(e=>(0,s.jsx)(Service_Service,{img:e.frontmatter.logo_image,title:e.frontmatter.header,description:e.frontmatter.description,mini_description:e.frontmatter.mini_description,path:"/services/".concat(e.slug)},e.frontmatter.index))})]})}),T.product&&(0,s.jsx)(n.Z,{maxWidth:"xl",children:(0,s.jsxs)(r.Z,{pb:"5rem",pt:"5rem",children:[(0,s.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",className:"blogs-header-section",children:[(0,s.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[m.BU.header.slice(0,4),(0,s.jsx)("span",{style:{color:"var(--primary-green)"},children:m.BU.header.slice(4,12)})]}),(0,s.jsx)(o.Z,{className:"view-all-btn",variant:"outlined",endIcon:(0,s.jsx)(S.Z,{}),onClick:()=>Z.push("/product")})]}),(0,s.jsx)(a.Z,{my:3,children:m.BU.heading}),(0,s.jsx)(n.Z,{maxWidth:"xl",className:"posts",disableGutters:!0,children:null==p?void 0:p.slice(0,2).map((e,t)=>(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h1",{children:e.frontmatter.header}),(0,s.jsx)("p",{children:e.frontmatter.description}),(0,s.jsx)(v(),{href:"/product/".concat(e.slug),children:(0,s.jsx)(o.Z,{variant:"contained",className:"read-button",children:"Read More"})})]},t))})]})}),T.testimonials&&(0,s.jsx)(Testimonials_Testimonials,{testimonials:i})]})]})}}},function(e){e.O(0,[379,3,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);