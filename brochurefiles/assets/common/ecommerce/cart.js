var shopId = '';
var publicationId = 'e41848ecce1994f2a95cee8381073504';
"undefined"==typeof BACKEND_SERVICE&&(BACKEND_SERVICE="http://backend.cld.mobi/services/publicapi.asmx"),"undefined"==typeof CLOUD_ID&&"undefined"!=typeof browserDetector&&(CLOUD_ID=browserDetector.bookInfo.Id),String.prototype.reverse=function(){return this.split("").reverse().join("")},"object"!=typeof JSON&&(JSON={}),function(){function m(a){return 10>a?"0"+a:a}function r(a){return s.lastIndex=0,s.test(a)?'"'+a.replace(s,function(a){var b=u[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function p(a,b){var c,d,f,g,h,i=e,j=b[a];switch(j&&"object"==typeof j&&"function"==typeof j.toJSON&&(j=j.toJSON(a)),"function"==typeof k&&(j=k.call(b,a,j)),typeof j){case"string":return r(j);case"number":return isFinite(j)?String(j):"null";case"boolean":case"null":return String(j);case"object":if(!j)return"null";if(e+=n,h=[],"[object Array]"===Object.prototype.toString.apply(j)){for(g=j.length,c=0;c<g;c+=1)h[c]=p(c,j)||"null";return f=0===h.length?"[]":e?"[\n"+e+h.join(",\n"+e)+"\n"+i+"]":"["+h.join(",")+"]",e=i,f}if(k&&"object"==typeof k)for(g=k.length,c=0;c<g;c+=1)"string"==typeof k[c]&&(d=k[c],(f=p(d,j))&&h.push(r(d)+(e?": ":":")+f));else for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(f=p(d,j))&&h.push(r(d)+(e?": ":":")+f);return f=0===h.length?"{}":e?"{\n"+e+h.join(",\n"+e)+"\n"+i+"}":"{"+h.join(",")+"}",e=i,f}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var t=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(n=e="","number"==typeof c)for(d=0;d<c;d+=1)n+=" ";else"string"==typeof c&&(n=c);if((k=b)&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw Error("JSON.stringify");return p("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,b){var d,f,g=a[b];if(g&&"object"==typeof g)for(d in g)Object.prototype.hasOwnProperty.call(g,d)&&(f=c(g,d),void 0!==f?g[d]=f:delete g[d]);return e.call(a,b,g)}var d;if(a=String(a),t.lastIndex=0,t.test(a)&&(a=a.replace(t,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"==typeof e?c({"":d},""):d;throw new SyntaxError("JSON.parse")})}(),!function(){try{if(!this.localStorage)if(this.globalStorage)try{this.localStorageWIN=this.globalStorage}catch(a){}else{var a=document.createElement("div");if(a.style.display="none",document.getElementsByTagName("head")[0].appendChild(a),a.addBehavior){a.addBehavior("#default#userdata");var b=this.localStorageWIN={length:0,setItem:function(b,d){a.load("localStorageWIN"),b=c(b),a.getAttribute(b)||this.length++,a.setAttribute(b,d),a.save("localStorageWIN")},getItem:function(b){return a.load("localStorageWIN"),b=c(b),a.getAttribute(b)},removeItem:function(b){a.load("localStorageWIN"),b=c(b),a.removeAttribute(b),a.save("localStorageWIN"),this.length=0},clear:function(){a.load("localStorageWIN");for(var b=0;attr=a.XMLDocument.documentElement.attributes[b++];)a.removeAttribute(attr.name);a.save("localStorageWIN"),this.length=0},key:function(b){return a.load("localStorageWIN"),a.XMLDocument.documentElement.attributes[b]}},c=function(a){return a.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-")};a.load("localStorageWIN"),b.length=a.XMLDocument.documentElement.attributes.length}}}catch(a){}}(),!function(){window.$={},window.$.ajax=function(a){a=a||{};var b=a.type||"GET",c=a.url,d=void 0===a.processData||!!a.processData,e=a.data;if(d&&"object"==typeof e){var f=Object.keys(e).map(function(a){return encodeURIComponent(a)+"="+encodeURIComponent(e[a])});e=f.join("&")}!e||"GET"!==b&&"HEAD"!==b||(c+=(c.indexOf("?")===-1?"?":"&")+e,e=void 0);var g=new XMLHttpRequest;return g.open(b,c,!0),a.contentType&&g.setRequestHeader("Content-Type",a.contentType),a.beforeSend&&a.beforeSend(g),g.onload=function(){var b=!1,c=g.responseText;if("json"===a.dataType)try{c=JSON.parse(c)}catch(a){b=!0}!b&&g.status>=200&&g.status<300?a.success&&a.success(c,g.statusText,g):a.error&&a.error(g)}.bind(this),g.onerror=g.onabort=function(){a.error&&a.error(g)},g.send(e),g}}(),!function(){function a(){this.shopID="undefined"==typeof shopId?"":shopId,this.publicationID=publicationId,this.cartStore=this._load(),this.cartStore[this.shopID]?this.cartStore[this.shopID][this.publicationID]||(this.cartStore[this.shopID][this.publicationID]={}):(this.cartStore[this.shopID]={},this.cartStore[this.shopID][this.publicationID]={}),this.currentCartStore=this.cartStore[this.shopID][this.publicationID];var a=window.location.pathname.split("/");this.subpath=a[a.length-4],this._cartServiceCheck()}a.prototype={setCurrency:function(a){this.currencyCode=a||"USD","undefined"!=typeof universalAnalytics&&universalAnalytics.setCurrency(this.currencyCode)},getItems:function(a,b,c){var d=[],e=function(){if("[object Array]"!==Object.prototype.toString.call(c)){if(!productsBD[c])return b.call(b,{error:"item id not found"}),!1;productsBD[c].id=c,d.push(productsBD[c])}else for(var e=0,f=c.length;e<f;e++)productsBD[c[e]]&&(productsBD[c[e]].id=c[e],d.push(productsBD[c[e]]));a.call(a,d)},f=function(){void 0!==productsBD?e():setTimeout(f,100)};f()},hashCode:function(a,b){var c=a+"";for(var d in b)c+=d+""+b[d];return c},addItem:function(a,b,c){c=c||{};var d=this.hashCode(a,c),e=void 0!==this.currentCartStore[d];return this.currentCartStore[d]={itemID:a,qty:e?1*this.currentCartStore[d].qty+1*b:b,options:c},this.currentCartStore[d][a]=!0,this._save(),this._trigger("change",{type:e?"changeQuantity":"addItem",target:{cartItemID:d,publicationID:this.publicationID},cart:this.cartStore[this.shopID]}),d},changeQuantity:function(a,b){if(!this.currentCartStore[a])return-1;this.currentCartStore[a].itemID;return this.currentCartStore[a].qty=b,this._save(),this._trigger("change",{type:"changeQuantity",target:{cartItemID:a,publicationID:this.publicationID},cart:this.cartStore[this.shopID]}),a},delItem:function(a){if(!this.currentCartStore[a])return-1;this.currentCartStore[a].itemID;return delete this.currentCartStore[a],this._save(),this._trigger("change",{type:"delItem",target:{cartItemID:a},cart:this.cartStore[this.shopID]}),a},hasItem:function(a,b){if("undefined"!=typeof b)return{}.hasOwnProperty.call(this.cartStore[this.shopID][b],a);for(var c in this.cartStore[this.shopID])if({}.hasOwnProperty.call(this.cartStore[this.shopID][c],a))return!0;return!1},getCartItemsByItemID:function(a,b){var c=[],d=this.shopID;if("undefined"!=typeof b)for(var e in this.cartStore[d][b])({}).hasOwnProperty.call(this.cartStore[d][b][e],a)&&c.push(e);else for(b in this.cartStore[this.shopID])for(var e in this.cartStore[d][b])({}).hasOwnProperty.call(this.cartStore[d][b][e],a)&&c.push(e);return c},getItemQuantity:function(a,b){var c=0;if("undefined"!=typeof b)for(var d in this.cartStore[this.shopID][b])({}).hasOwnProperty.call(this.cartStore[this.shopID][b],a)&&(c+=1*this.cartStore[this.shopID][b][d].qty);else for(var e in this.cartStore[this.shopID])for(var d in this.cartStore[this.shopID][e])({}).hasOwnProperty.call(this.cartStore[this.shopID][e][d],a)&&(c+=1*this.cartStore[this.shopID][e][d].qty);return c},getCart:function(a){return"undefined"!=typeof a?[this.cartStore[this.shopID][a]]:this.cartStore[this.shopID]},length:function(a){if(a){var b,c=0;for(b in this.cartStore[this.shopID][a])this.cartStore[this.shopID][a].hasOwnProperty(b)&&c++;return c}var b,a,c=0;for(a in this.cartStore[this.shopID])if(this.cartStore[this.shopID].hasOwnProperty(a))for(b in this.cartStore[this.shopID][a])this.cartStore[this.shopID][a].hasOwnProperty(b)&&c++;return c},checkout:function(a,b,c,d){if("undefined"!=typeof d&&d!=this.publicationID)throw"publicationID is not supported";var e=this;a=this.extend({},a);var f=[];this.each(this,this.cartStore[this.shopID][this.publicationID],function(a){this._indexOf(f,a.itemID)==-1&&f.push(a.itemID)});var g="string",h=function(a,b){return typeof a===b},i=function(a){return h(a,g)};this.extend(a,{utils:{checkQuantity:function(b){return i(b)&&(b=parseInt(b.replace(a.currency.thousandsDelimiter,""),10)),isNaN(b)&&(b=1),b<=0&&(b=0),b},checkPrice:function(b,c){return i(b)&&(b=parseFloat(b.replace(a.currency.decimalSeparator,".").replace(/[^0-9\.\-]+/gi,""))),isNaN(b)&&(b=0),b<0&&!c&&(b=0),b}},productsInfo:{}}),a.type&&a.providers[a.type]&&this.extend(a,a.providers[a.type]),this.getItems(function(d){e.each(e,d,function(b){a.productsInfo[b.id]=b}),e.each(e,e.cartStore[e.shopID][e.publicationID],function(b){var c=a.productsInfo[b.itemID],d=a.utils.checkPrice(c.price),f={};e.each(e,b.options,function(b,e,g){var h=c.options[g].values[b];d+=a.utils.checkPrice(h.price,!0),f[c.options[g].name]=h.name}),b.checkout={price:a.utils.checkPrice(d),quantity:a.utils.checkQuantity(b.qty),name:c.name,namedOptions:f}}),"mail"===a.type&&"undefined"!=typeof a.mail&&"undefined"!=typeof a.name?e._sendMail.call(e,a,b,c):e._checkout(a,b,c)},c,f)},getTotal:function(){var a=0,b=this.getCart()[this.publicationID];for(var c in b){var d=b[c];a+=d.qty*productsBD[d.itemID].price}return a},_checkout:function(a,b,c){function d(a){if("undefined"!=typeof universalAnalytics){var c=this.getTotal();universalAnalytics.addTransaction(c);var d=this.getCart()[this.publicationID];for(var e in d){var f=d[e];universalAnalytics.addItem(productsBD[f.itemID].name,productsBD[f.itemID].sku,productsBD[f.itemID].price,f.qty)}universalAnalytics.purchase(c)}this._trigger("change",{type:"checkout",target:null,cart:this.cartStore[this.shopID][this.publicationID]}),b(a)}if("function"==typeof this.checkoutMethods[a.type]){var e=this.checkoutMethods[a.type].call(this,a);e.data&&e.action&&e.method?(d.call(this,e),this.generateAndSendForm(e)):e.url?(d.call(this,e),setTimeout(function(){window.location.href=e.url},10)):c(e)}else c()},extend:function(a,b){var c;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);return a},_indexOf:function(a,b,c){for(var d=c||0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1},each:function(a,b,c){var d,e,f=0;if("function"==typeof c)for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)){if(e=c.call(a,b[d],f,d),e===!1)return;f+=1}},generateAndSendForm:function(a){var b=document.createElement("form");b.setAttribute("style","display:none"),b.setAttribute("action",a.action),b.setAttribute("target","_top"),b.setAttribute("method",a.method),this.each(this,a.data,function(a,c,d){var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name",d),e.setAttribute("value",a),b.appendChild(e)}),document.body.appendChild(b),b.submit(),document.body.removeChild(b)},checkoutMethods:{PayPal:function(a){if(!a.email)return{error:"No email provided for PayPal checkout"};var b={cmd:"_cart",upload:"1",currency_code:a.currency.code,business:a.email,rm:"GET"===a.method?"0":"2",charset:"utf-8"},c=a.sandbox?"https://www.sandbox.paypal.com/cgi-bin/webscr":"https://www.paypal.com/cgi-bin/webscr",d="GET"===a.method?"GET":"POST";a.success&&(b.return=a.success),a.cancel&&(b.cancel_return=a.cancel),a.notify&&(b.notify_url=a.notify);var e=this;return this.each(this,this.cartStore[this.shopID][this.publicationID],function(a,c){var d,f=c+1,g=a.checkout.namedOptions,h=0;b["item_name_"+f]=a.checkout.name,b["quantity_"+f]=a.checkout.quantity,b["amount_"+f]=(1*a.checkout.price).toFixed(2),b["item_number_"+f]=f,e.each(e,g,function(a,c,e){c<10&&(d=!0,d&&(h+=1,b["on"+c+"_"+f]=e,b["os"+c+"_"+f]=a))}),b["option_index_"+c]=Math.min(10,h)}),{action:c,method:d,data:b}},AmazonPayments:function(a){if(!a.merchant_signature)return{error:"No merchant signature provided for Amazon Payments"};if(!a.merchant_id)return{error:"No merchant id provided for Amazon Payments"};if(!a.aws_access_key_id)return{error:"No AWS access key id provided for Amazon Payments"};var b={aws_access_key_id:a.aws_access_key_id,merchant_signature:a.merchant_signature,currency_code:a.currency.code,weight_unit:a.weight_unit||"lb"},c="https://payments"+(a.sandbox?"-sandbox":"")+".amazon.com/checkout/"+a.merchant_id,d="GET"===a.method?"GET":"POST",e=this;return this.each(this,this.cartStore[this.shopID][this.publicationID],function(c,d){var f=d+1,g=[];b["item_title_"+f]=c.checkout.name,b["item_quantity_"+f]=c.checkout.quantity,b["item_price_"+f]=c.checkout.price,b["item_sku_ "+f]=a.productsInfo[c.itemID].sku||c.itemID,b["item_merchant_id_"+f]=a.merchant_id,a.shippingQuantityRate&&(b["shipping_method_price_per_unit_rate_"+f]=a.shippingQuantityRate),e.each(e,c.checkout.namedOptions,function(a,b,c){var d=!0;d&&"weight"!==c&&"tax"!==c&&g.push(c+": "+a)}),b["item_description_"+f]=g.join(", ")}),{action:c,method:d,data:b}},mail:function(a){if(!a.mailTo)return{error:"No mailTo provided"};var b=new this.Currency(a.currency.formatString,a.currency.accuracy,a.currency.accuracySeparator,[3],a.currency.exponentialSeparator,a.hideZeroDecimals),c=0,d=this,e="";return this.each(this,this.cartStore[this.shopID][this.publicationID],function(f,g){var h=g+1,i="";e=e+"\n"+h.toString()+". "+f.checkout.name,e=e+" ("+(a.productsInfo[f.itemID].sku||f.itemID),e=e+", "+f.checkout.quantity.toString()+" x "+b.Format(f.checkout.price)+" = ";var j=f.checkout.price*f.checkout.quantity;e=e+b.Format(j)+");",c+=j,d.each(d,f.checkout.namedOptions,function(a,b,c){var d=!0;d&&"weight"!==c&&"tax"!==c&&(i=i+"\n\t\t"+c+": "+a)}),""!=i&&(e=e+"\n\toptions:"+i)}),e=e+"\n"+b.Format(c),e+="\n\n- type in your contacts here -",{url:"mailto:"+a.mailTo+"?subject="+encodeURIComponent(a.subject||"ordered items")+"&body="+encodeURIComponent(e)}}},chunk:function(a,b){"undefined"==typeof b&&(b=2);var c=a.match(new RegExp(".{1,"+b+"}","g"));return c||[]},_sendMail:function(a,b,c){var d=[],e=this.getCart()[this.publicationID];for(var f in e)f=e[f],d.push({SKU:productsBD[f.itemID].sku,Name:productsBD[f.itemID].name,Quantity:f.qty,UnitPrice:productsBD[f.itemID].price});$.ajax({type:"POST",url:BACKEND_SERVICE+"/SendECommerceOrder",data:JSON.stringify({request:{BookId:CLOUD_ID,BuyerName:a.name,BuyerEmail:a.mail,BuyerPhone:a.phone,BuyerAddress:a.address,Items:d,CurrencyCode:this.currencyCode,Notes:""}}),contentType:"application/json; charset=UTF-8",processData:!1,success:b,error:c})},clear:function(a){return"undefined"!=typeof a?(this.currentCartStore={},this._save(),this._trigger("change",{type:"clear",target:{publicationID:a||null},cart:this.cartStore[this.shopID]}),!0):(this.cartStore[this.shopID]={},this._save(),this._trigger("change",{type:"clear",target:{publicationID:a||null},cart:this.cartStore[this.shopID]}),!0)},_save:function(){try{return this.cartStore[this.shopID][this.publicationID]=this.currentCartStore,"undefined"==typeof window.localStorage?window.localStorageWIN.setItem("fbCart",JSON.stringify(this.cartStore)):window.localStorage.setItem("fbCart",JSON.stringify(this.cartStore)),"undefined"==typeof window.localStorage?window.localStorageWIN.setItem("fbCartService",JSON.stringify(this.cartService)):window.localStorage.setItem("fbCartService",JSON.stringify(this.cartService)),!0}catch(a){return!1}},_load:function(){try{return"undefined"==typeof window.localStorage?("undefined"!=typeof window.localStorageWIN.getItem("fbCartService")&&null!==window.localStorageWIN.getItem("fbCartService")?this._cartServiceInit(JSON.parse(window.localStorageWIN.getItem("fbCartService"))):this._cartServiceInit(),"undefined"!=typeof window.localStorageWIN.getItem("fbCart")&&null!==window.localStorageWIN.getItem("fbCart")?JSON.parse(window.localStorageWIN.getItem("fbCart")):{}):("undefined"!=typeof window.localStorage.getItem("fbCartService")&&null!==window.localStorage.getItem("fbCartService")?this._cartServiceInit(JSON.parse(window.localStorage.getItem("fbCartService"))):this._cartServiceInit(),"undefined"!=typeof window.localStorage.getItem("fbCart")&&null!==window.localStorage.getItem("fbCart")?JSON.parse(window.localStorage.getItem("fbCart")):{})}catch(a){return{}}},on:function(a,b,c){return this._events||(this._events={}),(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this}),this},off:function(a,b,c){var d,e,f,g,h,i,j,k;if(!this._events||!eventsApi(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;for(g=a?[a]:_.keys(this._events),h=0,i=g.length;h<i;h++)if(a=g[h],f=this._events[a]){if(this._events[a]=d=[],b||c)for(j=0,k=f.length;j<k;j++)e=f[j],(b&&b!==e.callback&&b!==e.callback._callback||c&&c!==e.context)&&d.push(e);d.length||delete this._events[a]}return this},_trigger:function(a){var b=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);break;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);break;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);break;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);break;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}};if(!this._events)return this;var c=[].slice.call(arguments,1),d=this._events[a],e=this._events.all;return d&&b(d,c),e&&b(e,arguments),this},_cartServiceInit:function(a){this.cartService=a||{};var b=(new Date).getTime();this.cartService[this.shopID]?this.cartService[this.shopID][this.publicationID]||(this.cartService[this.shopID][this.publicationID]={lastUpdated:b,checkoutProgress:!1}):(this.cartService[this.shopID]={},this.cartService[this.shopID][this.publicationID]={lastUpdated:b,checkoutProgress:!1}),this.on("change",this._cartServiceChange,this)},_cartServiceCheck:function(){var a=1296e6,b=(new Date).getTime();try{this.cartService[this.shopID][this.publicationID].lastUpdated<b-a?(this.cartStore[this.shopID][this.publicationID]={},this.cartService[this.shopID][this.publicationID].lastUpdated=b):this.cartService[this.shopID][this.publicationID].checkoutProgress&&this._trigger("checkoutCleanRequest",{target:{publicationID:this.publicationID,shopID:this.shopID}})}catch(a){}this._save()},_cartServiceChange:function(a){var b=null!==a.target&&"undefined"!=typeof a.target.publicationID?a.target.publicationID:this.publicationID;this.cartService[this.shopID][b].lastUpdated=(new Date).getTime(),"checkout"===a.type?this.cartService[this.shopID][b].checkoutProgress=!0:this.cartService[this.shopID][b].checkoutProgress=!1,this._save()},getCheckoutStatus:function(a,b){b=b||this.publicationID,this.cartService[this.shopID][b].checkoutProgress&&(this.cartService[this.shopID][b].checkoutProgress=!1,this._save(),a.call(a))},Currency:function(a,b,c,d,e,f){var g=function(a,b){return void 0===a?b:a},h=function(a,b){return void 0===a||null===a?b:a},i=" ";this.FormatString=g(a,"~"),this.DecimalPlaces=h(b,2),this.ExponentialSeparator=g(e,i),this.DecimalSeparator=g(c,"."),this.ExponentPlaces=h(d,[3]),this.hideZeroDecimals=f;var j=this;this.Format=function(a){if(isNaN(a))return j.FormatString.replace("~","?");var b="",c=Math.floor(a),d=Math.round(Math.abs(a*Math.pow(10,j.DecimalPlaces)-c*Math.pow(10,j.DecimalPlaces))),e=j.ExponentPlaces||[3],f=0;for(0==c&&(b+="0");0!=c;){var g=e[f];0==g&&(b=""+Math.floor(c)+b),f<e.Length-1&&f++;var h=c%Math.pow(10,g);c=Math.floor(c/Math.pow(10,g));for(var i=0;i<g&&(0!=c||0==c&&0!=h);i++)b=""+Math.floor(h%10)+b,h=Math.floor(h/10);c>0&&(b=j.ExponentialSeparator+b)}if(d>0){if(j.DecimalPlaces>0){b+=j.DecimalSeparator;for(var k="",i=0;i<j.DecimalPlaces;i++)k=""+Math.floor(d%10)+k,d/=10;b+=k}}else if(!j.hideZeroDecimals&&j.DecimalPlaces>0){var k="";b+=j.DecimalSeparator;for(var i=0;i<j.DecimalPlaces;i++)k+="0";b+=k}return j.FormatString.replace("{0}",b)}}},window.Cart=a}();