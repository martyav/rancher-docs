"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18165],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return r?n.createElement(p,s(s({ref:t},u),{},{components:r})):n.createElement(p,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97276:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Rancher is No Longer Needed"},c=void 0,l={unversionedId:"faq/rancher-is-no-longer-needed",id:"version-2.0-2.4/faq/rancher-is-no-longer-needed",title:"Rancher is No Longer Needed",description:"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted.",source:"@site/versioned_docs/version-2.0-2.4/faq/rancher-is-no-longer-needed.md",sourceDirName:"faq",slug:"/faq/rancher-is-no-longer-needed",permalink:"/v2.0-v2.4/faq/rancher-is-no-longer-needed",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/faq/rancher-is-no-longer-needed.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Rancher is No Longer Needed"},sidebar:"tutorialSidebar",previous:{title:"Container Network Interface (CNI) Providers",permalink:"/v2.0-v2.4/faq/container-network-interface-providers"},next:{title:"Troubleshooting",permalink:"/v2.0-v2.4/troubleshooting"}},u={},d=[{value:"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?",id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters",level:3},{value:"If the Rancher server is deleted, how do I access my downstream clusters?",id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters",level:3},{value:"What if I don&#39;t want Rancher anymore?",id:"what-if-i-dont-want-rancher-anymore",level:3},{value:"What if I don&#39;t want my imported cluster managed by Rancher?",id:"what-if-i-dont-want-my-imported-cluster-managed-by-rancher",level:3},{value:"What if I don&#39;t want my RKE cluster or hosted Kubernetes cluster managed by Rancher?",id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher",level:3}],h={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page is intended to answer questions about what happens if you don't want Rancher anymore, if you don't want a cluster to be managed by Rancher anymore, or if the Rancher server is deleted."),(0,o.kt)("h3",{id:"if-the-rancher-server-is-deleted-what-happens-to-the-workloads-in-my-downstream-clusters"},"If the Rancher server is deleted, what happens to the workloads in my downstream clusters?"),(0,o.kt)("p",null,"If Rancher is ever deleted or unrecoverable, all workloads in the downstream Kubernetes clusters managed by Rancher will continue to function as normal."),(0,o.kt)("h3",{id:"if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"If the Rancher server is deleted, how do I access my downstream clusters?"),(0,o.kt)("p",null,"The capability to access a downstream cluster without Rancher depends on the type of cluster and the way that the cluster was created. To summarize:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Imported clusters:")," The cluster will be unaffected and you can access the cluster using the same methods that you did before the cluster was imported into Rancher."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosted Kubernetes clusters:")," If you created the cluster in a cloud-hosted Kubernetes provider such as EKS, GKE, or AKS, you can continue to manage the cluster using your provider's cloud credentials."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RKE clusters:")," To access an ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster,")," the cluster must have the ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," enabled, and you must have already downloaded the cluster's kubeconfig file from the Rancher UI. (The authorized cluster endpoint is enabled by default for RKE clusters.) With this endpoint, you can access your cluster with kubectl directly instead of communicating through the Rancher server's ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#1-the-authentication-proxy"},"authentication proxy.")," For instructions on how to configure kubectl to use the authorized cluster endpoint, refer to the section about directly accessing clusters with ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"kubectl and the kubeconfig file.")," These clusters will use a snapshot of the authentication as it was configured when Rancher was removed.")),(0,o.kt)("h3",{id:"what-if-i-dont-want-rancher-anymore"},"What if I don't want Rancher anymore?"),(0,o.kt)("p",null,"If you ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installed Rancher on a Kubernetes cluster,")," remove Rancher by using the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/system-tools"},"System Tools")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," subcommand."),(0,o.kt)("p",null,"If you installed Rancher with Docker, you can uninstall Rancher by removing the single Docker container that it runs in."),(0,o.kt)("p",null,"Imported clusters will not be affected by Rancher being removed. For other types of clusters, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"accessing downstream clusters when Rancher is removed.")),(0,o.kt)("h3",{id:"what-if-i-dont-want-my-imported-cluster-managed-by-rancher"},"What if I don't want my imported cluster managed by Rancher?"),(0,o.kt)("p",null,"If an imported cluster is deleted from the Rancher UI, the cluster is detached from Rancher, leaving it intact and accessible by the same methods that were used to access it before it was imported into Rancher."),(0,o.kt)("p",null,"To detach the cluster,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view in Rancher, go to the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the imported cluster that should be detached from Rancher and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Delete.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The imported cluster is detached from Rancher and functions normally outside of Rancher."),(0,o.kt)("h3",{id:"what-if-i-dont-want-my-rke-cluster-or-hosted-kubernetes-cluster-managed-by-rancher"},"What if I don't want my RKE cluster or hosted Kubernetes cluster managed by Rancher?"),(0,o.kt)("p",null,'At this time, there is no functionality to detach these clusters from Rancher. In this context, "detach" is defined as the ability to remove Rancher components from the cluster and manage access to the cluster independently of Rancher.'),(0,o.kt)("p",null,"The capability to manage these clusters without Rancher is being tracked in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25234"},"issue.")),(0,o.kt)("p",null,"For information about how to access clusters if the Rancher server is deleted, refer to ",(0,o.kt)("a",{parentName:"p",href:"#if-the-rancher-server-is-deleted-how-do-i-access-my-downstream-clusters"},"this section.")))}m.isMDXComponent=!0}}]);