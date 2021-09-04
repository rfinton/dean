/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.p,(()=>{var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var n=function(){return(n=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function i(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,a=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(i=a.next()).done;)o.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return o}function a(t,e,n){if(n||2===arguments.length)for(var i,r=0,a=e.length;r<a;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}Object.create,Object.create;var o=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),s=function(){function t(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];this.root=t,this.initialize.apply(this,a([],r(n))),this.foundation=void 0===e?this.getDefaultFoundation():e,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new o({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var i;void 0===n&&(n=!1),"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:n,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root.dispatchEvent(i)},t}();function c(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch(t){e=!1}return e}(t)&&{passive:!0}}function u(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}var d,l={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},p={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},f={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},h=["touchstart","pointerdown","mousedown","keydown"],v=["touchend","pointerup","mouseup","contextmenu"],m=[],A=function(t){function r(e){var i=t.call(this,n(n({},r.defaultAdapter),e))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(t){i.activateImpl(t)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var n=r.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(i),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())}))}},r.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));var e=r.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(n),t.adapter.removeClass(i),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},r.prototype.activate=function(t){this.activateImpl(t)},r.prototype.deactivate=function(){this.deactivateImpl()},r.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},r.prototype.setUnbounded=function(t){var e=r.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},r.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},r.prototype.registerRootHandlers=function(t){var e,n;if(t){try{for(var r=i(h),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},r.prototype.registerDeactivationHandlers=function(t){var e,n;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=i(v),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r.prototype.deregisterRootHandlers=function(){var t,e;try{for(var n=i(h),r=n.next();!r.done;r=n.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},r.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=i(v),r=n.next();!r.done;r=n.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},r.prototype.removeCssVars=function(){var t=this,e=r.strings;Object.keys(e).forEach((function(n){0===n.indexOf("VAR_")&&t.adapter.updateCssVariable(e[n],null)}))},r.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var i=this.previousActivationEvent;i&&void 0!==t&&i.type!==t.type||(n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&m.length>0&&m.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(m.push(t.target),this.registerDeactivationHandlers(t)),n.wasElementMadeActive=this.checkElementMadeActive(t),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){m=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive(t),n.wasElementMadeActive&&e.animateActivation()),n.wasElementMadeActive||(e.activationState=e.defaultActivationState())}))))}}},r.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},r.prototype.animateActivation=function(){var t=this,e=r.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,a=r.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,c=r.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",d="";if(!this.adapter.isUnbounded()){var l=this.getFgTranslationCoordinates(),p=l.startPoint,f=l.endPoint;u=p.x+"px, "+p.y+"px",d=f.x+"px, "+f.y+"px"}this.adapter.updateCssVariable(n,u),this.adapter.updateCssVariable(i,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),c)},r.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var i,r,a=e.x,o=e.y,s=a+n.left,c=o+n.top;if("touchstart"===t.type){var u=t;i=u.changedTouches[0].pageX-s,r=u.changedTouches[0].pageY-c}else{var d=t;i=d.pageX-s,r=d.pageY-c}return{x:i,y:r}}(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},r.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=r.cssClasses.FG_DEACTIVATION,n=this.activationState,i=n.hasDeactivationUXRun,a=n.isActivated;(i||!a)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(e)}),f.FG_DEACTIVATION_MS))},r.prototype.rmBoundedActivationClasses=function(){var t=r.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},r.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),r.numbers.TAP_DELAY_MS)},r.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var i=n({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(i)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()})))}},r.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady()},r.prototype.layoutInternal=function(){this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(this.frame.width,2)+Math.pow(this.frame.height,2))+r.numbers.PADDING;var e=Math.floor(t*r.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&e%2!=0?this.initialSize=e-1:this.initialSize=e,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},r.prototype.updateLayoutCssVars=function(){var t=r.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(n,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords.top+"px"))},r}(o),E=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return e(n,t),n.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var i=new n(t);return void 0!==e.isUnbounded&&(i.unbounded=e.isUnbounded),i},n.createAdapter=function(t){return{addClass:function(e){return t.root.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var n,i=window.CSS;if("boolean"==typeof d&&!e)return d;if(!i||"function"!=typeof i.supports)return!1;var r=i.supports("--css-vars","yes"),a=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return n=r||a,e||(d=n),n}()},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(e){return t.root.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,c())},deregisterInteractionHandler:function(e,n){return t.root.removeEventListener(e,n,c())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return u(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,c())},registerInteractionHandler:function(e,n){return t.root.addEventListener(e,n,c())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root.classList.remove(e)},updateCssVariable:function(e,n){return t.root.style.setProperty(e,n)}}},Object.defineProperty(n.prototype,"unbounded",{get:function(){return Boolean(this.isUnbounded)},set:function(t){this.isUnbounded=Boolean(t),this.setUnbounded()},enumerable:!1,configurable:!0}),n.prototype.activate=function(){this.foundation.activate()},n.prototype.deactivate=function(){this.foundation.deactivate()},n.prototype.layout=function(){this.foundation.layout()},n.prototype.getDefaultFoundation=function(){return new A(n.createAdapter(this))},n.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},n.prototype.setUnbounded=function(){this.foundation.setUnbounded(Boolean(this.isUnbounded))},n}(s),y={ROOT:"mdc-form-field"},C={LABEL_SELECTOR:".mdc-form-field > label"},g=function(t){function i(e){var r=t.call(this,n(n({},i.defaultAdapter),e))||this;return r.click=function(){r.handleClick()},r}return e(i,t),Object.defineProperty(i,"cssClasses",{get:function(){return y},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},i.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},i.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){t.adapter.deactivateInputRipple()}))},i}(o),b=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.attachTo=function(t){return new n(t)},n.prototype.labelEl=function(){var t=g.strings.LABEL_SELECTOR;return this.root.querySelector(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new g({activateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.activate()},deactivateInputRipple:function(){t.input&&t.input.ripple&&t.input.ripple.deactivate()},deregisterInteractionHandler:function(e,n){var i=t.labelEl();i&&i.removeEventListener(e,n)},registerInteractionHandler:function(e,n){var i=t.labelEl();i&&i.addEventListener(e,n)}})},n}(s),T={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function I(t,e){if(function(t){return Boolean(t.document)&&"function"==typeof t.document.createElement}(t)&&e in T){var n=t.document.createElement("div"),i=T[e],r=i.standard,a=i.prefixed;return i.cssProperty in n.style?r:a}return e}var N={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},_={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},D={ANIM_END_LATCH_MS:250},S=function(t){function i(e){var r=t.call(this,n(n({},i.defaultAdapter),e))||this;return r.currentCheckState=_.TRANSITION_STATE_INIT,r.currentAnimationClass="",r.animEndLatchTimer=0,r.enableAnimationEndHandler=!1,r}return e(i,t),Object.defineProperty(i,"cssClasses",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(N.UPGRADED)},i.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},i.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(N.DISABLED):this.adapter.removeClass(N.DISABLED)},i.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout((function(){t.adapter.removeClass(t.currentAnimationClass),t.enableAnimationEndHandler=!1}),D.ANIM_END_LATCH_MS))},i.prototype.handleChange=function(){this.transitionCheckState()},i.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var t=this.currentCheckState,e=this.determineCheckState();if(t!==e){this.updateAriaChecked();var n=N.SELECTED;e===_.TRANSITION_STATE_UNCHECKED?this.adapter.removeClass(n):this.adapter.addClass(n),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(t,e),this.currentCheckState=e,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},i.prototype.determineCheckState=function(){var t=_.TRANSITION_STATE_INDETERMINATE,e=_.TRANSITION_STATE_CHECKED,n=_.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?t:this.adapter.isChecked()?e:n},i.prototype.getTransitionAnimationClass=function(t,e){var n=_.TRANSITION_STATE_INIT,r=_.TRANSITION_STATE_CHECKED,a=_.TRANSITION_STATE_UNCHECKED,o=i.cssClasses,s=o.ANIM_UNCHECKED_CHECKED,c=o.ANIM_UNCHECKED_INDETERMINATE,u=o.ANIM_CHECKED_UNCHECKED,d=o.ANIM_CHECKED_INDETERMINATE,l=o.ANIM_INDETERMINATE_CHECKED,p=o.ANIM_INDETERMINATE_UNCHECKED;switch(t){case n:return e===a?"":e===r?l:p;case a:return e===r?s:c;case r:return e===a?u:d;default:return e===r?l:p}},i.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(_.ARIA_CHECKED_ATTR,_.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(_.ARIA_CHECKED_ATTR)},i}(o),R=["checked","indeterminate"],O=function(t){function r(){var e=null!==t&&t.apply(this,arguments)||this;return e.rippleSurface=e.createRipple(),e}return e(r,t),r.attachTo=function(t){return new r(t)},Object.defineProperty(r.prototype,"ripple",{get:function(){return this.rippleSurface},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"checked",{get:function(){return this.getNativeControl().checked},set:function(t){this.getNativeControl().checked=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"indeterminate",{get:function(){return this.getNativeControl().indeterminate},set:function(t){this.getNativeControl().indeterminate=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"disabled",{get:function(){return this.getNativeControl().disabled},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"value",{get:function(){return this.getNativeControl().value},set:function(t){this.getNativeControl().value=t},enumerable:!1,configurable:!0}),r.prototype.initialize=function(){var t=_.DATA_INDETERMINATE_ATTR;this.getNativeControl().indeterminate="true"===this.getNativeControl().getAttribute(t),this.getNativeControl().removeAttribute(t)},r.prototype.initialSyncWithDOM=function(){var t=this;this.handleChange=function(){t.foundation.handleChange()},this.handleAnimationEnd=function(){t.foundation.handleAnimationEnd()},this.getNativeControl().addEventListener("change",this.handleChange),this.listen(I(window,"animationend"),this.handleAnimationEnd),this.installPropertyChangeHooks()},r.prototype.destroy=function(){this.rippleSurface.destroy(),this.getNativeControl().removeEventListener("change",this.handleChange),this.unlisten(I(window,"animationend"),this.handleAnimationEnd),this.uninstallPropertyChangeHooks(),t.prototype.destroy.call(this)},r.prototype.getDefaultFoundation=function(){var t=this;return new S({addClass:function(e){return t.root.classList.add(e)},forceLayout:function(){return t.root.offsetWidth},hasNativeControl:function(){return!!t.getNativeControl()},isAttachedToDOM:function(){return Boolean(t.root.parentNode)},isChecked:function(){return t.checked},isIndeterminate:function(){return t.indeterminate},removeClass:function(e){t.root.classList.remove(e)},removeNativeControlAttr:function(e){t.getNativeControl().removeAttribute(e)},setNativeControlAttr:function(e,n){t.getNativeControl().setAttribute(e,n)},setNativeControlDisabled:function(e){t.getNativeControl().disabled=e}})},r.prototype.createRipple=function(){var t=this,e=n(n({},E.createAdapter(this)),{deregisterInteractionHandler:function(e,n){t.getNativeControl().removeEventListener(e,n,c())},isSurfaceActive:function(){return u(t.getNativeControl(),":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(e,n){t.getNativeControl().addEventListener(e,n,c())}});return new E(this.root,new A(e))},r.prototype.installPropertyChangeHooks=function(){var t,e,n=this,r=this.getNativeControl(),a=Object.getPrototypeOf(r),o=function(t){var e=Object.getOwnPropertyDescriptor(a,t);if(!H(e))return{value:void 0};var i=e.get,o={configurable:e.configurable,enumerable:e.enumerable,get:i,set:function(t){e.set.call(r,t),n.foundation.handleChange()}};Object.defineProperty(r,t,o)};try{for(var s=i(R),c=s.next();!c.done;c=s.next()){var u=o(c.value);if("object"==typeof u)return u.value}}catch(e){t={error:e}}finally{try{c&&!c.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}},r.prototype.uninstallPropertyChangeHooks=function(){var t,e,n=this.getNativeControl(),r=Object.getPrototypeOf(n);try{for(var a=i(R),o=a.next();!o.done;o=a.next()){var s=o.value,c=Object.getOwnPropertyDescriptor(r,s);if(!H(c))return;Object.defineProperty(n,s,c)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}},r.prototype.getNativeControl=function(){var t=_.NATIVE_CONTROL_SELECTOR,e=this.root.querySelector(t);if(!e)throw new Error("Checkbox component requires a "+t+" element");return e},r}(s);function H(t){return!!t&&"function"==typeof t.set}var w=Array.from(document.querySelectorAll(".mdc-checkbox"));w.forEach((function(t){t=new O(t)})),Array.from(document.querySelectorAll("mdc-form-field")).forEach((function(t,e){(t=new b(t)).input=w[e]})),document.querySelector("#check-all").addEventListener("change",(function(){this.checked?Array.from(document.querySelectorAll("section input[type=checkbox]")).forEach((function(t){t.checked=!0})):Array.from(document.querySelectorAll("section input[type=checkbox]")).forEach((function(t){t.checked=!1}))}));var k=document.querySelectorAll(".mdc-button");Array.from(k).forEach((function(t){new E(t)})),document.forms[0].addEventListener("submit",(function(t){t.preventDefault(),document.querySelector("#efcid").value="FUEL-DA"+Math.floor(899999*Math.random()+1e5),document.querySelector("#seed").value=!0,this.submit()}))})()})();