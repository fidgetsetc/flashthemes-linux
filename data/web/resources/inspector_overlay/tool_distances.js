(function(){'use strict';class Overlay{constructor(window,style){this.viewportSize={width:800,height:600};this.deviceScaleFactor=1;this.emulationScaleFactor=1;this.pageScaleFactor=1;this.pageZoomFactor=1;this.scrollX=0;this.scrollY=0;this.window=window;this.document=window.document;this.style=style;}
setCanvas(canvas){this.canvas=canvas;this.context=canvas.getContext('2d');}
reset(resetData){if(resetData){this.viewportSize=resetData.viewportSize;this.deviceScaleFactor=resetData.deviceScaleFactor;this.pageScaleFactor=resetData.pageScaleFactor;this.pageZoomFactor=resetData.pageZoomFactor;this.emulationScaleFactor=resetData.emulationScaleFactor;this.window.scrollX=this.scrollX=Math.round(resetData.scrollX);this.window.scrollY=this.scrollY=Math.round(resetData.scrollY);}
this.resetCanvas();}
resetCanvas(){if(!this.canvas){return;}
this.canvas.width=this.deviceScaleFactor*this.viewportSize.width;this.canvas.height=this.deviceScaleFactor*this.viewportSize.height;this.canvas.style.width=this.viewportSize.width+'px';this.canvas.style.height=this.viewportSize.height+'px';this.context.scale(this.deviceScaleFactor,this.deviceScaleFactor);this.canvasWidth=this.viewportSize.width;this.canvasHeight=this.viewportSize.height;}
setPlatform(platform){if(this.style){adoptStyleSheet(this.style);}
this.platform=platform;this.document.body.classList.add('platform-'+platform);}
dispatch(message){const functionName=message.shift();this[functionName].apply(this,message);}
eventHasCtrlOrMeta(event){return this.window.platform==='mac'?(event.metaKey&&!event.ctrlKey):(event.ctrlKey&&!event.metaKey);}}
window.viewportSize={width:800,height:600};window.deviceScaleFactor=1;window.emulationScaleFactor=1;window.pageScaleFactor=1;window.pageZoomFactor=1;window.scrollX=0;window.scrollY=0;Element.prototype.createChild=function(tagName,className){const element=createElement(tagName,className);element.addEventListener('click',function(e){e.stopPropagation();},false);this.appendChild(element);return element;};Element.prototype.createTextChild=function(text){const element=document.createTextNode(text);this.appendChild(element);return element;};Element.prototype.removeChildren=function(){if(this.firstChild){this.textContent='';}};function createElement(tagName,className){const element=document.createElement(tagName);if(className){element.className=className;}
return element;}
String.prototype.trimEnd=function(maxLength){if(this.length<=maxLength){return String(this);}
return this.substr(0,maxLength-1)+'\u2026';};Number.constrain=function(num,min,max){if(num<min){num=min;}
else if(num>max){num=max;}
return num;};function adoptStyleSheet(styleSheet){document.adoptedStyleSheets=[...document.adoptedStyleSheets,styleSheet];}
class DistancesOverlay extends Overlay{drawDistances({distanceInfo}){if(!distanceInfo){return;}
const rect=quadToRect(getVisualQuad(distanceInfo));const context=this.context;context.save();context.strokeStyle='#ccc';for(const box of distanceInfo.boxes){context.strokeRect(box[0],box[1],box[2],box[3]);}
context.strokeStyle='#f00';context.lineWidth=1;context.rect(rect.x-0.5,rect.y-0.5,rect.w+1,rect.h+1);context.stroke();context.restore();}
setPlatform(platform){super.setPlatform(platform);this.document.body.classList.add('fill');const canvas=this.document.createElement('canvas');canvas.id='canvas';canvas.classList.add('fill');this.document.body.append(canvas);this.setCanvas(canvas);}}
function getVisualQuad(data){const style=data['style'];if(shouldUseVisualBorder(style)){return data['border'];}
if(ShouldUseVisualPadding(style)){return data['padding'];}
return data['content'];function shouldUseVisualBorder(style){const sides=['top','right','bottom','left'];for(const side of sides){const border_width=style[`border-${side}-width`];const border_style=style[`border-${side}-style`];const border_color=style[`border-${side}-color`];if(border_width!=='0px'&&border_style!=='none'&&!border_color.endsWith('00')){return true;}}
const outline_width=style['outline-width'];const outline_style=style['outline-style'];const outline_color=style['outline-color'];if(outline_width!=='0px'&&outline_style!=='none'&&!outline_color.endsWith('00')){return true;}
const box_shadow=style['box-shadow'];if(box_shadow!=='none'){return true;}
return false;}
function ShouldUseVisualPadding(style){const bg_color=style['background-color'];const bg_image=style['background-image'];if(!bg_color.startsWith('#FFFFFF')&&!bg_color.endsWith('00')){return true;}
if(bg_image!=='none'){return true;}
return false;}}
function quadToRect(quad){return{x:quad[0],y:quad[1],w:quad[4]-quad[0],h:quad[5]-quad[1]};}
const overlay=new DistancesOverlay(window);window.dispatch=message=>{overlay.dispatch(message);};}());