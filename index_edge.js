/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'name',
            type:'rect',
            rect:['23.8%','39.7%','auto','auto','auto','auto'],
            userClass:"logo"
         },
         {
            id:'start',
            type:'rect',
            rect:['160','310','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"start"
         }],
         symbolInstances: [
         {
            id:'name',
            symbolName:'name'
         },
         {
            id:'start',
            symbolName:'start'
         }
         ]
      },
   states: {
      "Base State": {
         "${_start}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '252px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '101px'],
            ["style", "font-size", '31px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_name}": [
            ["style", "top", '50%'],
            ["style", "right", 'auto'],
            ["style", "left", '50%'],
            ["style", "bottom", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 4500, duration: 1000 }         ]
      }
   }
},
"name": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'remote',
      type: 'image',
      rect: ['0px','0px','128px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/remote.png','0px','0px']
   },
   {
      rect: ['33px','7px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',31,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'Text3',
      opacity: 1,
      text: 'Vipulism',
      type: 'text'
   },
   {
      rect: ['104px','36px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text4',
      text: 'Games',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_remote}": [
            ["style", "top", '-10px'],
            ["style", "height", '128px'],
            ["style", "opacity", '0'],
            ["style", "left", '19px'],
            ["style", "width", '128px']
         ],
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '167px']
         ],
         "${_Text3}": [
            ["style", "top", '7px'],
            ["style", "opacity", '0'],
            ["style", "left", '49px']
         ],
         "${_Text4}": [
            ["style", "top", '36px'],
            ["style", "opacity", '0'],
            ["style", "left", '142px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: true,
         timeline: [
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '49px', { fromValue: '49px'}], position: 2500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_remote}", "top", '0px', { fromValue: '-10px'}], position: 1500, duration: 1000 },
            { id: "eid12", tween: [ "style", "${_remote}", "height", '49px', { fromValue: '128px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000 },
            { id: "eid30", tween: [ "style", "${_Text4}", "left", '117px', { fromValue: '142px'}], position: 1500, duration: 1000 },
            { id: "eid31", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
            { id: "eid32", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000 },
            { id: "eid1", tween: [ "style", "${_remote}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid34", tween: [ "style", "${_remote}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid35", tween: [ "style", "${_remote}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000 },
            { id: "eid13", tween: [ "style", "${_remote}", "width", '49px', { fromValue: '128px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid22", tween: [ "style", "${_remote}", "left", '0px', { fromValue: '19px'}], position: 1500, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
},
"start": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','150px','67px','auto','auto'],
      borderRadius: ['17px 17px','17px 17px','17px 17px','17px 17px'],
      boxShadow: ['',0,3,3,0,'rgba(0,0,0,0.34)'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(233,0,21,1.00)',[270,[['rgba(255,255,255,0.48)',0],['rgba(255,255,255,0.00)',100]]]]
   },
   {
      rect: ['-50%','-100.1%','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',31,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'START',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(233,0,21,1.00)'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.inset", ''],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.48)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '150px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '68px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.34)']
         ],
         "${_Text5}": [
            ["style", "top", '22.39%'],
            ["style", "height", '36px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '16%'],
            ["style", "width", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '150px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid41", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500 },
            { id: "eid90", tween: [ "style", "${_RoundRect2}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-602450017");
