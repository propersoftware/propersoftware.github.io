var shopId = '';
var publicationId = 'a04e4b9a4177609d7832d7b619eb5186';
"undefined"==typeof BACKEND_SERVICE&&(BACKEND_SERVICE="http://backend.cld.mobi/services/publicapi.asmx"),"undefined"==typeof CLOUD_ID&&"undefined"!=typeof browserDetector&&(CLOUD_ID=browserDetector.bookInfo.Id),String.prototype.reverse=function(){return this.split("").reverse().join("")},"object"!=typeof JSON&&(JSON={}),function(){function m(t){return 10>t?"0"+t:t}function r(t){return s.lastIndex=0,s.test(t)?'"'+t.replace(s,function(t){var e=u[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function p(t,i){var o,a,c,s,h,u=e,l=i[t];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(t)),"function"==typeof k&&(l=k.call(i,t,l)),typeof l){case"string":return r(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(e+=n,h=[],"[object Array]"===Object.prototype.toString.apply(l)){for(s=l.length,o=0;o<s;o+=1)h[o]=p(o,l)||"null";return c=0===h.length?"[]":e?"[\n"+e+h.join(",\n"+e)+"\n"+u+"]":"["+h.join(",")+"]",e=u,c}if(k&&"object"==typeof k)for(s=k.length,o=0;o<s;o+=1)"string"==typeof k[o]&&(a=k[o],(c=p(a,l))&&h.push(r(a)+(e?": ":":")+c));else for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(c=p(a,l))&&h.push(r(a)+(e?": ":":")+c);return c=0===h.length?"{}":e?"{\n"+e+h.join(",\n"+e)+"\n"+u+"}":"{"+h.join(",")+"}",e=u,c}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var t=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,r,i){var o;if(n=e="","number"==typeof i)for(o=0;o<i;o+=1)n+=" ";else"string"==typeof i&&(n=i);if((k=r)&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw Error("JSON.stringify");return p("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(a,e){function c(t,r){var i,o,n=t[r];if(n&&"object"==typeof n)for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o=c(n,i),void 0!==o?n[i]=o:delete n[i]);return e.call(t,r,n)}var d;if(a=String(a),t.lastIndex=0,t.test(a)&&(a=a.replace(t,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"==typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse")})}(),!function(){try{if(!this.localStorage)if(this.globalStorage)try{this.localStorageWIN=this.globalStorage}catch(t){}else{var e=document.createElement("div");if(e.style.display="none",document.getElementsByTagName("head")[0].appendChild(e),e.addBehavior){e.addBehavior("#default#userdata");var r=this.localStorageWIN={length:0,setItem:function(t,r){e.load("localStorageWIN"),t=i(t),e.getAttribute(t)||this.length++,e.setAttribute(t,r),e.save("localStorageWIN")},getItem:function(t){return e.load("localStorageWIN"),t=i(t),e.getAttribute(t)},removeItem:function(t){e.load("localStorageWIN"),t=i(t),e.removeAttribute(t),e.save("localStorageWIN"),this.length=0},clear:function(){e.load("localStorageWIN");for(var t=0;attr=e.XMLDocument.documentElement.attributes[t++];)e.removeAttribute(attr.name);e.save("localStorageWIN"),this.length=0},key:function(t){return e.load("localStorageWIN"),e.XMLDocument.documentElement.attributes[t]}},i=function(t){return t.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-")};e.load("localStorageWIN"),r.length=e.XMLDocument.documentElement.attributes.length}}}catch(t){}}(),!function(){window.$={},window.$.ajax=function(t){t=t||{};var e=t.type||"GET",r=t.url,i=void 0===t.processData||!!t.processData,o=t.data;if(i&&"object"==typeof o){var n=Object.keys(o).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(o[t])});o=n.join("&")}!o||"GET"!==e&&"HEAD"!==e||(r+=(r.indexOf("?")===-1?"?":"&")+o,o=void 0);var a=new XMLHttpRequest;return a.open(e,r,!0),t.contentType&&a.setRequestHeader("Content-Type",t.contentType),t.beforeSend&&t.beforeSend(a),a.onload=function(){var e=!1,r=a.responseText;if("json"===t.dataType)try{r=JSON.parse(r)}catch(i){e=!0}!e&&a.status>=200&&a.status<300?t.success&&t.success(r,a.statusText,a):t.error&&t.error(a)}.bind(this),a.onerror=a.onabort=function(){t.error&&t.error(a)},a.send(o),a}}(),!function(){function t(){this.shopID="undefined"==typeof shopId?"":shopId,this.publicationID=publicationId,this.cartStore=this._load(),this.cartStore[this.shopID]?this.cartStore[this.shopID][this.publicationID]||(this.cartStore[this.shopID][this.publicationID]={}):(this.cartStore[this.shopID]={},this.cartStore[this.shopID][this.publicationID]={}),this.currentCartStore=this.cartStore[this.shopID][this.publicationID];var t=window.location.pathname.split("/");this.subpath=t[t.length-4],this._cartServiceCheck()}t.prototype={setCurrency:function(t){this.currencyCode=t||"USD","undefined"!=typeof universalAnalytics&&universalAnalytics.setCurrency(this.currencyCode)},getItems:function(t,e,r){var i=[],o=function(){if("[object Array]"!==Object.prototype.toString.call(r)){if(!productsBD[r])return e.call(e,{error:"item id not found"}),!1;productsBD[r].id=r,i.push(productsBD[r])}else for(var o=0,n=r.length;o<n;o++)productsBD[r[o]]&&(productsBD[r[o]].id=r[o],i.push(productsBD[r[o]]));t.call(t,i)},n=function(){void 0!==productsBD?o():setTimeout(n,100)};n()},hashCode:function(t,e){var r=t+"";for(var i in e)r+=i+""+e[i];return r},addItem:function(t,e,r){r=r||{};var i=this.hashCode(t,r),o=void 0!==this.currentCartStore[i];return this.currentCartStore[i]={itemID:t,qty:o?1*this.currentCartStore[i].qty+1*e:e,options:r},this.currentCartStore[i][t]=!0,this._save(),this._trigger("change",{type:o?"changeQuantity":"addItem",target:{cartItemID:i,publicationID:this.publicationID},cart:this.cartStore[this.shopID]}),i},changeQuantity:function(t,e){if(!this.currentCartStore[t])return-1;this.currentCartStore[t].itemID;return this.currentCartStore[t].qty=e,this._save(),this._trigger("change",{type:"changeQuantity",target:{cartItemID:t,publicationID:this.publicationID},cart:this.cartStore[this.shopID]}),t},delItem:function(t){if(!this.currentCartStore[t])return-1;this.currentCartStore[t].itemID;return delete this.currentCartStore[t],this._save(),this._trigger("change",{type:"delItem",target:{cartItemID:t},cart:this.cartStore[this.shopID]}),t},hasItem:function(t,e){if("undefined"!=typeof e)return{}.hasOwnProperty.call(this.cartStore[this.shopID][e],t);for(var r in this.cartStore[this.shopID])if({}.hasOwnProperty.call(this.cartStore[this.shopID][r],t))return!0;return!1},getCartItemsByItemID:function(t,e){var r=[],i=this.shopID;if("undefined"!=typeof e)for(var o in this.cartStore[i][e])({}).hasOwnProperty.call(this.cartStore[i][e][o],t)&&r.push(o);else for(e in this.cartStore[this.shopID])for(var o in this.cartStore[i][e])({}).hasOwnProperty.call(this.cartStore[i][e][o],t)&&r.push(o);return r},getItemQuantity:function(t,e){var r=0;if("undefined"!=typeof e)for(var i in this.cartStore[this.shopID][e])({}).hasOwnProperty.call(this.cartStore[this.shopID][e],t)&&(r+=1*this.cartStore[this.shopID][e][i].qty);else for(var o in this.cartStore[this.shopID])for(var i in this.cartStore[this.shopID][o])({}).hasOwnProperty.call(this.cartStore[this.shopID][o][i],t)&&(r+=1*this.cartStore[this.shopID][o][i].qty);return r},getCart:function(t){return"undefined"!=typeof t?[this.cartStore[this.shopID][t]]:this.cartStore[this.shopID]},length:function(t){if(t){var e,r=0;for(e in this.cartStore[this.shopID][t])this.cartStore[this.shopID][t].hasOwnProperty(e)&&r++;return r}var e,t,r=0;for(t in this.cartStore[this.shopID])if(this.cartStore[this.shopID].hasOwnProperty(t))for(e in this.cartStore[this.shopID][t])this.cartStore[this.shopID][t].hasOwnProperty(e)&&r++;return r},checkout:function(t,e,r,i){if("undefined"!=typeof i&&i!=this.publicationID)throw"publicationID is not supported";var o=this;t=this.extend({},t);var n=[];this.each(this,this.cartStore[this.shopID][this.publicationID],function(t){this._indexOf(n,t.itemID)==-1&&n.push(t.itemID)});var a="string",c=function(t,e){return typeof t===e},s=function(t){return c(t,a)};this.extend(t,{utils:{checkQuantity:function(e){return s(e)&&(e=parseInt(e.replace(t.currency.thousandsDelimiter,""),10)),isNaN(e)&&(e=1),e<=0&&(e=0),e},checkPrice:function(e,r){return s(e)&&(e=parseFloat(e.replace(t.currency.decimalSeparator,".").replace(/[^0-9\.\-]+/gi,""))),isNaN(e)&&(e=0),e<0&&!r&&(e=0),e}},productsInfo:{}}),t.type&&t.providers[t.type]&&this.extend(t,t.providers[t.type]),this.getItems(function(i){o.each(o,i,function(e){t.productsInfo[e.id]=e}),o.each(o,o.cartStore[o.shopID][o.publicationID],function(e){var r=t.productsInfo[e.itemID],i=t.utils.checkPrice(r.price),n={};o.each(o,e.options,function(e,o,a){var c=r.options[a].values[e];i+=t.utils.checkPrice(c.price,!0),n[r.options[a].name]=c.name}),e.checkout={price:t.utils.checkPrice(i),quantity:t.utils.checkQuantity(e.qty),name:r.name,namedOptions:n}}),"mail"===t.type&&"undefined"!=typeof t.mail&&"undefined"!=typeof t.name?o._sendMail.call(o,t,e,r):o._checkout(t,e,r)},r,n)},getTotal:function(){var t=0,e=this.getCart()[this.publicationID];for(var r in e){var i=e[r];t+=i.qty*productsBD[i.itemID].price}return t},_checkout:function(t,e,r){function i(t){if("undefined"!=typeof universalAnalytics){var r=this.getTotal();universalAnalytics.addTransaction(r);var i=this.getCart()[this.publicationID];for(var o in i){var n=i[o];universalAnalytics.addItem(productsBD[n.itemID].name,productsBD[n.itemID].sku,productsBD[n.itemID].price,n.qty)}universalAnalytics.purchase(r)}this._trigger("change",{type:"checkout",target:null,cart:this.cartStore[this.shopID][this.publicationID]}),e(t)}if("function"==typeof this.checkoutMethods[t.type]){var o=this.checkoutMethods[t.type].call(this,t);o.data&&o.action&&o.method?(i.call(this,o),this.generateAndSendForm(o)):o.url?(i.call(this,o),setTimeout(function(){window.location.href=o.url},10)):r(o)}else r()},extend:function(t,e){var r;for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},_indexOf:function(t,e,r){for(var i=r||0,o=t.length;i<o;i++)if(t[i]===e)return i;return-1},each:function(t,e,r){var i,o,n=0;if("function"==typeof r)for(i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(o=r.call(t,e[i],n,i),o===!1)return;n+=1}},generateAndSendForm:function(t){var e=document.createElement("form");e.setAttribute("style","display:none"),e.setAttribute("action",t.action),e.setAttribute("target","_top"),e.setAttribute("method",t.method),this.each(this,t.data,function(t,r,i){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",i),o.setAttribute("value",t),e.appendChild(o)}),document.body.appendChild(e),e.submit(),document.body.removeChild(e)},checkoutMethods:{PayPal:function(t){if(!t.email)return{error:"No email provided for PayPal checkout"};var e={cmd:"_cart",upload:"1",currency_code:t.currency.code,business:t.email,rm:"GET"===t.method?"0":"2",charset:"utf-8"},r=t.sandbox?"https://www.sandbox.paypal.com/cgi-bin/webscr":"https://www.paypal.com/cgi-bin/webscr",i="GET"===t.method?"GET":"POST";t.success&&(e["return"]=t.success),t.cancel&&(e.cancel_return=t.cancel),t.notify&&(e.notify_url=t.notify);var o=this;return this.each(this,this.cartStore[this.shopID][this.publicationID],function(t,r){var i,n=r+1,a=t.checkout.namedOptions,c=0;e["item_name_"+n]=t.checkout.name,e["quantity_"+n]=t.checkout.quantity,e["amount_"+n]=(1*t.checkout.price).toFixed(2),e["item_number_"+n]=n,o.each(o,a,function(t,r,o){r<10&&(i=!0,i&&(c+=1,e["on"+r+"_"+n]=o,e["os"+r+"_"+n]=t))}),e["option_index_"+r]=Math.min(10,c)}),{action:r,method:i,data:e}},AmazonPayments:function(t){if(!t.merchant_signature)return{error:"No merchant signature provided for Amazon Payments"};if(!t.merchant_id)return{error:"No merchant id provided for Amazon Payments"};if(!t.aws_access_key_id)return{error:"No AWS access key id provided for Amazon Payments"};var e={aws_access_key_id:t.aws_access_key_id,merchant_signature:t.merchant_signature,currency_code:t.currency.code,weight_unit:t.weight_unit||"lb"},r="https://payments"+(t.sandbox?"-sandbox":"")+".amazon.com/checkout/"+t.merchant_id,i="GET"===t.method?"GET":"POST",o=this;return this.each(this,this.cartStore[this.shopID][this.publicationID],function(r,i){var n=i+1,a=[];e["item_title_"+n]=r.checkout.name,e["item_quantity_"+n]=r.checkout.quantity,e["item_price_"+n]=r.checkout.price,e["item_sku_ "+n]=t.productsInfo[r.itemID].sku||r.itemID,e["item_merchant_id_"+n]=t.merchant_id,t.shippingQuantityRate&&(e["shipping_method_price_per_unit_rate_"+n]=t.shippingQuantityRate),o.each(o,r.checkout.namedOptions,function(t,e,r){var i=!0;i&&"weight"!==r&&"tax"!==r&&a.push(r+": "+t)}),e["item_description_"+n]=a.join(", ")}),{action:r,method:i,data:e}},mail:function(t){if(!t.mailTo)return{error:"No mailTo provided"};var e=new this.Currency(t.currency.formatString,t.currency.accuracy,t.currency.accuracySeparator,[3],t.currency.exponentialSeparator,t.hideZeroDecimals),r=0,i=this,o="";return this.each(this,this.cartStore[this.shopID][this.publicationID],function(n,a){var c=a+1,s="";o=o+"\n"+c.toString()+". "+n.checkout.name,o=o+" ("+(t.productsInfo[n.itemID].sku||n.itemID),o=o+", "+n.checkout.quantity.toString()+" x "+e.Format(n.checkout.price)+" = ";var h=n.checkout.price*n.checkout.quantity;o=o+e.Format(h)+");",r+=h,i.each(i,n.checkout.namedOptions,function(t,e,r){var i=!0;i&&"weight"!==r&&"tax"!==r&&(s=s+"\n\t\t"+r+": "+t)}),""!=s&&(o=o+"\n\toptions:"+s)}),o=o+"\n"+e.Format(r),o+="\n\n- type in your contacts here -",{url:"mailto:"+t.mailTo+"?subject="+encodeURIComponent(t.subject||"ordered items")+"&body="+encodeURIComponent(o)}}},chunk:function(t,e){"undefined"==typeof e&&(e=2);var r=t.match(new RegExp(".{1,"+e+"}","g"));return r||[]},_sendMail:function(t,e,r){var i=[],o=this.getCart()[this.publicationID];for(var n in o)n=o[n],i.push({SKU:productsBD[n.itemID].sku,Name:productsBD[n.itemID].name,Quantity:n.qty,UnitPrice:productsBD[n.itemID].price});$.ajax({type:"POST",url:BACKEND_SERVICE+"/SendECommerceOrder",data:JSON.stringify({request:{BookId:CLOUD_ID,BuyerName:t.name,BuyerEmail:t.mail,BuyerPhone:t.phone,BuyerAddress:t.address,Items:i,CurrencyCode:this.currencyCode,Notes:""}}),contentType:"application/json; charset=UTF-8",processData:!1,success:e,error:r})},clear:function(t){return"undefined"!=typeof t?(this.currentCartStore={},this._save(),this._trigger("change",{type:"clear",target:{publicationID:t||null},cart:this.cartStore[this.shopID]}),!0):(this.cartStore[this.shopID]={},this._save(),this._trigger("change",{type:"clear",target:{publicationID:t||null},cart:this.cartStore[this.shopID]}),!0)},_save:function(){try{return this.cartStore[this.shopID][this.publicationID]=this.currentCartStore,"undefined"==typeof window.localStorage?window.localStorageWIN.setItem("fbCart",JSON.stringify(this.cartStore)):window.localStorage.setItem("fbCart",JSON.stringify(this.cartStore)),"undefined"==typeof window.localStorage?window.localStorageWIN.setItem("fbCartService",JSON.stringify(this.cartService)):window.localStorage.setItem("fbCartService",JSON.stringify(this.cartService)),!0}catch(t){return!1}},_load:function(){try{return"undefined"==typeof window.localStorage?("undefined"!=typeof window.localStorageWIN.getItem("fbCartService")&&null!==window.localStorageWIN.getItem("fbCartService")?this._cartServiceInit(JSON.parse(window.localStorageWIN.getItem("fbCartService"))):this._cartServiceInit(),"undefined"!=typeof window.localStorageWIN.getItem("fbCart")&&null!==window.localStorageWIN.getItem("fbCart")?JSON.parse(window.localStorageWIN.getItem("fbCart")):{}):("undefined"!=typeof window.localStorage.getItem("fbCartService")&&null!==window.localStorage.getItem("fbCartService")?this._cartServiceInit(JSON.parse(window.localStorage.getItem("fbCartService"))):this._cartServiceInit(),"undefined"!=typeof window.localStorage.getItem("fbCart")&&null!==window.localStorage.getItem("fbCart")?JSON.parse(window.localStorage.getItem("fbCart")):{})}catch(t){return{}}},on:function(t,e,r){return this._events||(this._events={}),(this._events[t]||(this._events[t]=[])).push({callback:e,context:r,ctx:r||this}),this},off:function(t,e,r){var i,o,n,a,c,s,h,u;if(!this._events||!eventsApi(this,"off",t,[e,r]))return this;if(!t&&!e&&!r)return this._events={},this;for(a=t?[t]:_.keys(this._events),c=0,s=a.length;c<s;c++)if(t=a[c],n=this._events[t]){if(this._events[t]=i=[],e||r)for(h=0,u=n.length;h<u;h++)o=n[h],(e&&e!==o.callback&&e!==o.callback._callback||r&&r!==o.context)&&i.push(o);i.length||delete this._events[t]}return this},_trigger:function(t){var e=function(t,e){var r,i=-1,o=t.length,n=e[0],a=e[1],c=e[2];switch(e.length){case 0:for(;++i<o;)(r=t[i]).callback.call(r.ctx);break;case 1:for(;++i<o;)(r=t[i]).callback.call(r.ctx,n);break;case 2:for(;++i<o;)(r=t[i]).callback.call(r.ctx,n,a);break;case 3:for(;++i<o;)(r=t[i]).callback.call(r.ctx,n,a,c);break;default:for(;++i<o;)(r=t[i]).callback.apply(r.ctx,e)}};if(!this._events)return this;var r=[].slice.call(arguments,1),i=this._events[t],o=this._events.all;return i&&e(i,r),o&&e(o,arguments),this},_cartServiceInit:function(t){this.cartService=t||{};var e=(new Date).getTime();this.cartService[this.shopID]?this.cartService[this.shopID][this.publicationID]||(this.cartService[this.shopID][this.publicationID]={lastUpdated:e,checkoutProgress:!1}):(this.cartService[this.shopID]={},this.cartService[this.shopID][this.publicationID]={lastUpdated:e,checkoutProgress:!1}),this.on("change",this._cartServiceChange,this)},_cartServiceCheck:function(){var t=1296e6,e=(new Date).getTime();try{this.cartService[this.shopID][this.publicationID].lastUpdated<e-t?(this.cartStore[this.shopID][this.publicationID]={},this.cartService[this.shopID][this.publicationID].lastUpdated=e):this.cartService[this.shopID][this.publicationID].checkoutProgress&&this._trigger("checkoutCleanRequest",{target:{publicationID:this.publicationID,shopID:this.shopID}})}catch(r){}this._save()},_cartServiceChange:function(t){var e=null!==t.target&&"undefined"!=typeof t.target.publicationID?t.target.publicationID:this.publicationID;this.cartService[this.shopID][e].lastUpdated=(new Date).getTime(),"checkout"===t.type?this.cartService[this.shopID][e].checkoutProgress=!0:this.cartService[this.shopID][e].checkoutProgress=!1,this._save()},getCheckoutStatus:function(t,e){e=e||this.publicationID,this.cartService[this.shopID][e].checkoutProgress&&(this.cartService[this.shopID][e].checkoutProgress=!1,this._save(),t.call(t))},Currency:function(t,e,r,i,o,n){var a=function(t,e){return void 0===t?e:t},c=function(t,e){return void 0===t||null===t?e:t},s=" ";this.FormatString=a(t,"~"),this.DecimalPlaces=c(e,2),this.ExponentialSeparator=a(o,s),this.DecimalSeparator=a(r,"."),this.ExponentPlaces=c(i,[3]),this.hideZeroDecimals=n;var h=this;this.Format=function(t){if(isNaN(t))return h.FormatString.replace("~","?");var e="",r=Math.floor(t),i=Math.round(Math.abs(t*Math.pow(10,h.DecimalPlaces)-r*Math.pow(10,h.DecimalPlaces))),o=h.ExponentPlaces||[3],n=0;for(0==r&&(e+="0");0!=r;){var a=o[n];0==a&&(e=""+Math.floor(r)+e),n<o.Length-1&&n++;var c=r%Math.pow(10,a);r=Math.floor(r/Math.pow(10,a));for(var s=0;s<a&&(0!=r||0==r&&0!=c);s++)e=""+Math.floor(c%10)+e,c=Math.floor(c/10);r>0&&(e=h.ExponentialSeparator+e)}if(i>0){if(h.DecimalPlaces>0){e+=h.DecimalSeparator;for(var u="",s=0;s<h.DecimalPlaces;s++)u=""+Math.floor(i%10)+u,i/=10;e+=u}}else if(!h.hideZeroDecimals&&h.DecimalPlaces>0){var u="";e+=h.DecimalSeparator;for(var s=0;s<h.DecimalPlaces;s++)u+="0";e+=u}return h.FormatString.replace("{0}",e)}}},window.Cart=t}();