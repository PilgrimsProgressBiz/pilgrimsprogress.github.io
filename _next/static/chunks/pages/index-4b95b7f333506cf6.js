(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4613)}])},7606:function(e,s,i){"use strict";var t=i(5893);i(7294);var n=i(7357),r=i(9417),a=i(1775),c=i(1163);s.Z=e=>{let{text:s,width:i}=e,l=(0,c.useRouter)();return(0,t.jsx)(n.Z,{children:(0,t.jsx)(r.Z,{fullWidth:i,variant:"contained",endIcon:(0,t.jsx)(a.Z,{}),className:"contact-us-button",onClick:()=>l.push("/contact-us"),children:s})})}},4613:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSG:function(){return b},default:function(){return Home}});var t=i(5893),n=i(5582),r=i(7357),a=i(5861),c=i(6886),l=i(1233),o=i(9417),m=i(8873),d=i(9008),h=i.n(d),x=i(1163);i(7294);var j=i(5675),p=i.n(j),g=i(1664),u=i.n(g),Service_Service=e=>{let{img:s,title:i,description:n,path:l}=e;return(0,t.jsx)(c.ZP,{item:!0,sm:12,md:3,className:"service",children:(0,t.jsx)(u(),{href:l,children:(0,t.jsxs)(r.Z,{marginBottom:"10px",children:[(0,t.jsx)(r.Z,{className:"service-image-container",children:(0,t.jsx)(p(),{width:"/images/services/odoo.png"===s?32:22,height:"/images/services/devops.png"===s?14:"/images/services/odoo.png"===s?32:20,src:s,alt:"service-image"})}),(0,t.jsx)(a.Z,{sx:{fontSize:15,fontWeight:600},mt:"18px",children:i}),(0,t.jsx)(a.Z,{className:"service-description",children:n})]})})})},f=i(7720),MeetTheTeam_MeetTheTeam=e=>{let{header:s,heading:i,description:n,images:c}=e;return(0,t.jsxs)(r.Z,{p:"4rem 3rem",id:"meet-the-team-section",className:"about-us",children:[c.map((e,s)=>(0,t.jsx)(r.Z,{className:"".concat(e.className," img"),children:(0,t.jsx)(p(),{src:e.img,alt:"aboutus",layout:"responsive"})},s)),(0,t.jsx)(a.Z,{fontSize:30,fontWeight:600,children:(0,t.jsx)("span",{style:{color:"#63AC45"},children:s})}),(0,t.jsx)(a.Z,{fontWeight:500,children:i}),(0,t.jsx)(f.Z,{className:"about-us-divider"}),(0,t.jsx)(a.Z,{className:"description",children:n}),(0,t.jsx)("div",{className:"images-main-container",children:m.Sf.teamMembers.map(e=>(0,t.jsx)(u(),{href:"/",children:(0,t.jsxs)("div",{className:"image-container",children:[(0,t.jsx)(p(),{className:"image",alt:"emp-image",height:150,width:150,src:e.image}),(0,t.jsx)(a.Z,{fontWeight:500,fontSize:14,children:e.name}),(0,t.jsx)(a.Z,{fontWeight:500,fontSize:14,className:"color-primary",children:e.title}),(0,t.jsx)(a.Z,{fontWeight:300,fontSize:11,children:e.description})]})},e.id))})]})},SectionHeader_SectionHeader=e=>{let{heading:s}=e;return(0,t.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[s.slice(0,3),(0,t.jsx)("span",{style:{color:"var(--primary-green"},children:s.slice(3,12)})]})},v=i(6066);i(4949),i(6451);var Z=i(9661),TestimonialCard_TestimonialCard=e=>{let{img:s,text:i,name:r,designation:c,company:l,website:o}=e;return(0,t.jsxs)(n.Z,{maxWidth:"xl",className:"testimonial-card",children:[(0,t.jsx)(Z.Z,{imgProps:{style:{borderRadius:"50%"}},src:s,className:"testimonial-image"}),(0,t.jsx)(a.Z,{className:"testimonial-text",children:i}),(0,t.jsx)(a.Z,{className:"testimonial-name",children:r}),(0,t.jsxs)(a.Z,{className:"testimonial-designation",children:[c&&l&&o&&c+" ",c&&l&&o&&(0,t.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"product-link",children:l}),c&&l&&!o&&c+" "+l,!c&&l&&!o&&l]})]})};let PreviousBtn=e=>{let{className:s,onClick:i}=e;return(0,t.jsx)("div",{className:s,onClick:i,children:(0,t.jsx)(p(),{src:m.testimonialsData.leftImg,alt:"left"})})},NextBtn=e=>{let{className:s,onClick:i}=e;return(0,t.jsx)("div",{className:s,onClick:i,children:(0,t.jsx)(p(),{src:m.testimonialsData.rightImg,alt:"right"})})};var Testimonials_Testimonials=e=>{let{testimonials:s}=e,{heading:i}=m.testimonialsData;return(0,t.jsxs)(n.Z,{maxWidth:"xl",className:"testimonials-container",children:[(0,t.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[i.slice(0,3),(0,t.jsx)("span",{style:{color:"var(--primary-green)"},children:i.slice(3,16)})]}),(0,t.jsx)("div",{className:"testimonial",children:(0,t.jsx)(v.Z,{prevArrow:(0,t.jsx)(PreviousBtn,{}),nextArrow:(0,t.jsx)(NextBtn,{}),children:null==s?void 0:s.map((e,s)=>(0,t.jsx)(TestimonialCard_TestimonialCard,{img:e.frontmatter.image,text:e.frontmatter.description,name:e.frontmatter.name,designation:e.frontmatter.designation,company:e.frontmatter.company,website:e.frontmatter.website},s))})})]})},N=i(4456),_=i(7606),HomeContainer_HomeContainer=()=>{let{header:e,headerImage:s,heading:i,homeAim:n,contactUsButtonText:c,videoButtonText:o,youtubeIcon:d}=m.homeData;return(0,t.jsxs)(l.Z,{pt:{xs:"20px",md:"60px",lg:"30px"},pb:{xs:"100px",lg:"60px"},direction:{xs:"column-reverse",md:"row"},spacing:5,alignItems:"center",children:[(0,t.jsxs)(r.Z,{className:"home-container",children:[(0,t.jsx)(a.Z,{variant:"h6",className:"home-main-heading-1",children:e}),(0,t.jsx)(a.Z,{variant:"h4",className:"home-main-heading-2",children:i}),(0,t.jsx)(a.Z,{children:n}),(0,t.jsx)(r.Z,{display:"flex",gap:"25px",alignItems:"center",mt:6,children:(0,t.jsx)(_.Z,{text:c})})]}),(0,t.jsx)(r.Z,{children:(0,t.jsx)(p(),{src:s,alt:"service-image",layout:"responsive"})})]})};let S={testimonials:!0,product:!1};var b=!0;function Home(e){let{services:s,testimonials:i,aboutUs:d,product:j}=e,{title:p}=m.homeData,{servicesHeading:g,servicesAim:f}=m.servicesData,Z=(0,x.useRouter)(),_=m.Sf.images;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(h(),{children:[(0,t.jsx)("title",{children:p}),(0,t.jsx)("meta",{name:"prixite",content:"Prixte"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"home-page-container",children:[(0,t.jsx)(n.Z,{maxWidth:"xl",children:(0,t.jsx)(HomeContainer_HomeContainer,{})}),(0,t.jsx)(n.Z,{maxWidth:"xl",children:(0,t.jsx)(MeetTheTeam_MeetTheTeam,{header:d.frontmatter.title,heading:d.frontmatter.header,description:d.frontmatter.description,images:_})}),(0,t.jsx)(n.Z,{maxWidth:"xl",children:(0,t.jsxs)(r.Z,{pb:"5rem",id:"services-section",pt:{xs:"0rem",md:"5rem"},children:[(0,t.jsx)(SectionHeader_SectionHeader,{heading:g}),(0,t.jsx)(a.Z,{mt:2,mb:6,children:f}),(0,t.jsx)(c.ZP,{container:!0,spacing:{xs:2,md:7},columnSpacing:3,className:"services-grid",children:null==s?void 0:s.map(e=>(0,t.jsx)(Service_Service,{img:e.frontmatter.logo_image,title:e.frontmatter.header,description:e.frontmatter.description,path:"/services/".concat(e.slug)},e.frontmatter.index))}),(0,t.jsx)(v.Z,{className:"services-carousel",arrows:!1,children:null==s?void 0:s.map(e=>(0,t.jsx)(Service_Service,{img:e.frontmatter.logo_image,title:e.frontmatter.header,description:e.frontmatter.description,path:"/services/".concat(e.slug)},e.frontmatter.index))})]})}),S.product&&(0,t.jsx)(n.Z,{maxWidth:"xl",children:(0,t.jsxs)(r.Z,{pb:"5rem",pt:"5rem",children:[(0,t.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",className:"blogs-header-section",children:[(0,t.jsxs)(a.Z,{sx:{fontSize:30,fontWeight:600},children:[m.BU.header.slice(0,4),(0,t.jsx)("span",{style:{color:"var(--primary-green)"},children:m.BU.header.slice(4,12)})]}),(0,t.jsx)(o.Z,{className:"view-all-btn",variant:"outlined",endIcon:(0,t.jsx)(N.Z,{}),onClick:()=>Z.push("/product")})]}),(0,t.jsx)(a.Z,{my:3,children:m.BU.heading}),(0,t.jsx)(n.Z,{maxWidth:"xl",className:"posts",disableGutters:!0,children:null==j?void 0:j.slice(0,2).map((e,s)=>(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("h1",{children:e.frontmatter.header}),(0,t.jsx)("p",{children:e.frontmatter.description}),(0,t.jsx)(u(),{href:"/product/".concat(e.slug),children:(0,t.jsx)(o.Z,{variant:"contained",className:"read-button",children:"Read More"})})]},s))})]})}),S.testimonials&&(0,t.jsx)(Testimonials_Testimonials,{testimonials:i})]})]})}}},function(e){e.O(0,[379,3,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);