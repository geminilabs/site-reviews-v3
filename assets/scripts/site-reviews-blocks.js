!function(e,t,i,n,o){"use strict";var s=window.wp.i18n.__,a=GLSR.nameprefix+"/form",l=n.createElement,r=i.InspectorControls,c=i.InspectorAdvancedControls,u=t.PanelBody,p=t.ServerSideRender,v=t.TextControl,h=t.SelectControl,w={label:"- "+s("Select","site-reviews")+" -",value:""},d=[];wp.apiFetch({path:"/site-reviews/v1/categories"}).then(function(e){d.push(w),$.each(e,function(e,t){d.push({label:t.name,value:t.id})})});var g=function(e,s,t,a){return l("div",{className:"components-base-control__field"},l("input",{checked:-1<a.attributes.hide.split(",").indexOf(s),className:"components-checkbox-control__input",id:"inspector-checkbox-control-hide-"+e,type:"checkbox",value:1,onChange:function(e){var t,i,n,o;t=s,i=e.target.checked,n=a,o=_.without(n.attributes.hide.split(","),""),i?o.push(t):o=_.without(o,t),n.setAttributes({hide:o.toString()})}}),l("label",{className:"components-checkbox-control__label",htmlFor:"inspector-checkbox-control-hide-"+e},t))};e.registerBlockType(a,{attributes:{assign_to:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"}},category:GLSR.nameprefix,description:s("Display a review submission form.","site-reviews"),edit:function(t){return[l(r,{key:"inspector"},l(u,{title:s("Settings","site-reviews")},l(v,{help:s('Assign reviews to a post ID. You can also enter "post_id" to use the ID of the current page, or "parent_id" to use the ID of the parent page.',"site-reviews"),label:s("Assign To","site-reviews"),onChange:function(e){t.setAttributes({assign_to:e})},type:"text",value:t.attributes.assign_to}),l(h,{help:s("Assign reviews to a category.","site-reviews"),label:s("Category","site-reviews"),onChange:function(e){t.setAttributes({category:e})},options:d,value:t.attributes.category}),function(e,t){var i=0,n=["div",{className:"components-base-control"}];for(var o in e)e.hasOwnProperty(o)&&(n.push(g(i,o,e[o],t)),i++);return l.apply(null,n)}.apply(null,[GLSR.hideoptions.site_reviews_form,t]))),l(c,null,l(v,{label:s("Custom ID","site-reviews"),onChange:function(e){t.setAttributes({id:e})},type:"text",value:t.attributes.id})),l(p,{block:a,attributes:t.attributes})]},icon:l(t.SVG,{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},l(t.Path,{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.28-.894v.963h-3.272v2.691h-1.017v-6.3h4.496v.963h-3.479v1.683h3.272z"})),save:function(){return null},title:"Submit a Review"})}(window.wp.blocks,window.wp.components,window.wp.editor,window.wp.element),function(e,t,i,n,o){"use strict";var s=window.wp.i18n.__,a=GLSR.nameprefix+"/reviews",l=n.createElement,r=i.InspectorControls,c=i.InspectorAdvancedControls,u=t.PanelBody,p=t.ServerSideRender,v=t.TextControl,h=t.ToggleControl,w=t.RangeControl,d=t.SelectControl,g={label:"- "+s("Select","site-reviews")+" -",value:""},m=[];wp.apiFetch({path:"/site-reviews/v1/categories"}).then(function(e){m.push(g),$.each(e,function(e,t){m.push({label:t.name,value:t.id})})});var f=[];wp.apiFetch({path:"/site-reviews/v1/types"}).then(function(e){e.length<2||(f.push(g),$.each(e,function(e,t){f.push({label:t.name,value:t.slug})}))});var b=function(e,s,t,a){return l("div",{className:"components-base-control__field"},l("input",{checked:-1<a.attributes.hide.split(",").indexOf(s),className:"components-checkbox-control__input",id:"inspector-checkbox-control-hide-"+e,type:"checkbox",value:1,onChange:function(e){var t,i,n,o;t=s,i=e.target.checked,n=a,o=_.without(n.attributes.hide.split(","),""),i?o.push(t):o=_.without(o,t),n.setAttributes({hide:o.toString()})}}),l("label",{className:"components-checkbox-control__label",htmlFor:"inspector-checkbox-control-hide-"+e},t))};e.registerBlockType(a,{attributes:{assigned_to:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},count:{default:5,type:"number"},hide:{default:"",type:"string"},id:{default:"",type:"string"},pagination:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:1,type:"number"},schema:{default:!1,type:"boolean"},type:{default:"local",type:"string"}},category:GLSR.nameprefix,description:s("Display your most recent reviews.","site-reviews"),edit:function(t){return t.attributes.post_id=$("#post_ID").val(),[l(r,{key:"inspector"},l(u,{title:s("Settings","site-reviews")},l(v,{help:s('Limit reviews to those assigned to this post ID. You can also enter "post_id" to use the ID of the current page, or "parent_id" to use the ID of the parent page.',"site-reviews"),label:s("Assigned To","site-reviews"),onChange:function(e){t.setAttributes({assigned_to:e})},type:"text",value:t.attributes.assigned_to}),l(d,{help:s("Limit reviews to a specific category.","site-reviews"),label:s("Category","site-reviews"),onChange:function(e){t.setAttributes({category:e})},options:m,value:t.attributes.category}),l(d,{help:s("Pagination should only be enabled once per page.","site-reviews"),label:s("Pagination","site-reviews"),onChange:function(e){t.setAttributes({pagination:e})},options:[g,{label:s("Enabled","site-reviews"),value:"true"},{label:s("Enabled (using ajax)","site-reviews"),value:"ajax"}],value:t.attributes.pagination}),l(d,{help:s("Limit reviews to a specific type.","site-reviews"),label:s("Type","site-reviews"),onChange:function(e){t.setAttributes({type:e})},options:f,value:t.attributes.type}),l(w,{help:s("Limit reviews to a minimum rating.","site-reviews"),label:s("Minimum Rating","site-reviews"),onChange:function(e){t.setAttributes({rating:e})},min:0,max:5,value:t.attributes.rating}),l(w,{help:s("The number of reviews to show.","site-reviews"),label:s("Review Count","site-reviews"),onChange:function(e){t.setAttributes({count:e})},min:1,max:50,value:t.attributes.count}),l(h,{help:s("The schema should only be enabled once per page.","site-reviews"),label:s("Enable the schema?","site-reviews"),checked:t.attributes.schema,onChange:function(e){t.setAttributes({schema:e})}}),function(e,t){var i=0,n=["div",{className:"components-base-control"}];for(var o in e)e.hasOwnProperty(o)&&(n.push(b(i,o,e[o],t)),i++);return l.apply(null,n)}.apply(null,[GLSR.hideoptions.site_reviews,t]))),l(c,null,l(v,{label:s("Custom ID","site-reviews"),onChange:function(e){t.setAttributes({id:e})},type:"text",value:t.attributes.id})),l(p,{block:a,attributes:t.attributes})]},icon:l(t.SVG,{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},l(t.Path,{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm3.681-3.54h2.592c1.449 0 2.232.648 2.232 1.823 0 1.071-.819 1.782-2.102 1.827l2.075 2.651h-1.26l-2.007-2.651h-.513v2.651h-1.017v-6.3zm2.565.954h-1.548v1.773h1.548c.819 0 1.202-.297 1.202-.905 0-.599-.405-.869-1.202-.869z"})),save:function(){return null},title:"Latest Reviews"})}(window.wp.blocks,window.wp.components,window.wp.editor,window.wp.element),function(e,t,i,n,o){"use strict";var s=window.wp.i18n.__,l=n.createElement,a=i.InspectorControls,r=t.PanelBody,c=t.ServerSideRender,u=t.TextControl,p=t.ToggleControl,v=t.RangeControl,h=t.SelectControl,w={label:"- "+s("Select","site-reviews")+" -",value:""},d=[];wp.apiFetch({path:"/site-reviews/v1/categories"}).then(function(e){d.push(w),$.each(e,function(e,t){d.push({label:t.name,value:t.id})})});var g=[];wp.apiFetch({path:"/site-reviews/v1/types"}).then(function(e){e.length<2||(g.push(w),$.each(e,function(e,t){g.push({label:t.name,value:t.slug})}))});var m=function(e,s,t,a){return l("div",{className:"components-base-control__field"},l("input",{checked:-1<a.attributes.hide.split(",").indexOf(s),className:"components-checkbox-control__input",id:"inspector-checkbox-control-hide-"+e,type:"checkbox",value:1,onChange:function(e){var t,i,n,o;t=s,i=e.target.checked,n=a,o=_.without(n.attributes.hide.split(","),""),i?o.push(t):o=_.without(o,t),n.setAttributes({hide:o.toString()})}}),l("label",{className:"components-checkbox-control__label",htmlFor:"inspector-checkbox-control-hide-"+e},t))};e.registerBlockType(GLSR.nameprefix+"/summary",{attributes:{assigned_to:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:1,type:"number"},schema:{default:!1,type:"boolean"},type:{default:"local",type:"string"}},category:GLSR.nameprefix,description:s("Display a summary of your reviews.","site-reviews"),edit:function(t){return t.attributes.post_id=$("#post_ID").val(),[l(a,{key:"inspector"},l(r,{title:s("Settings","site-reviews")},l(u,{help:s('Limit reviews to those assigned to this post ID. You can also enter "post_id" to use the ID of the current page, or "parent_id" to use the ID of the parent page.',"site-reviews"),label:s("Assigned To","site-reviews"),onChange:function(e){t.setAttributes({assigned_to:e})},type:"text",value:t.attributes.assigned_to}),l(h,{help:s("Limit reviews to a specific category.","site-reviews"),label:s("Category","site-reviews"),onChange:function(e){t.setAttributes({category:e})},options:d,value:t.attributes.category}),l(h,{help:s("Limit reviews to a specific type.","site-reviews"),label:s("Type","site-reviews"),onChange:function(e){t.setAttributes({type:e})},options:g,value:t.attributes.type}),l(v,{help:s("Limit reviews to a minimum rating.","site-reviews"),label:s("Minimum Rating","site-reviews"),onChange:function(e){t.setAttributes({rating:e})},min:0,max:5,value:t.attributes.rating}),l(p,{help:s("The schema should only be enabled once per page.","site-reviews"),label:s("Enable the schema?","site-reviews"),checked:t.attributes.schema,onChange:function(e){t.setAttributes({schema:e})}}),function(e,t){var i=0,n=["div",{className:"components-base-control"}];for(var o in e)e.hasOwnProperty(o)&&(n.push(m(i,o,e[o],t)),i++);return l.apply(null,n)}.apply(null,[GLSR.hideoptions.site_reviews_summary,t]))),l(c,{block:GLSR.nameprefix+"/summary",attributes:t.attributes})]},icon:l(t.SVG,{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},l(t.Path,{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.415-2.969l-.518.824c-.536-.342-1.13-.54-1.769-.54-.842 0-1.418.365-1.418.941 0 .522.491.725 1.31.842l.437.059c1.022.14 2.03.563 2.03 1.733 0 1.283-1.161 1.985-2.525 1.985-.855 0-1.881-.284-2.534-.846l.554-.81c.432.396 1.247.693 1.976.693.824 0 1.472-.351 1.472-.932 0-.495-.495-.725-1.418-.851l-.491-.068c-.936-.131-1.868-.572-1.868-1.742 0-1.265 1.121-1.967 2.484-1.967.918 0 1.643.257 2.277.68z"})),save:function(){return null},title:"Summary"})}(window.wp.blocks,window.wp.components,window.wp.editor,window.wp.element);