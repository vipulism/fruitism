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
            id:'remote',
            type:'image',
            rect:['96px','246px','128px','128px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"remote.png",'0px','0px']
         },
         {
            id:'Text3',
            type:'text',
            rect:['129px','253px','auto','auto','auto','auto'],
            opacity:1,
            text:"Vipulism",
            align:"left",
            font:['Arial, Helvetica, sans-serif',31,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['200px','282px','auto','auto','auto','auto'],
            text:"Games",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text5',
            type:'text',
            rect:['109px','274px','auto','auto','auto','auto'],
            opacity:0,
            text:"START",
            align:"left",
            font:['Arial, Helvetica, sans-serif',31,"rgba(0,0,0,1.00)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_remote}": [
            ["style", "top", '246px'],
            ["style", "height", '128px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px'],
            ["style", "width", '128px']
         ],
         "${_Text}": [
            ["style", "top", '252px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '101px'],
            ["style", "font-size", '31px']
         ],
         "${_Text3}": [
            ["style", "top", '253px'],
            ["style", "opacity", '0'],
            ["style", "left", '129px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '320px'],
            ["style", "height", '620px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text5}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '109px'],
            ["style", "top", '274px']
         ],
         "${_Text4}": [
            ["style", "top", '282px'],
            ["style", "opacity", '0'],
            ["style", "left", '238px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_remote}", "left", '78px', { fromValue: '96px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid37", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 3500, duration: 1000 },
            { id: "eid12", tween: [ "style", "${_remote}", "height", '49px', { fromValue: '128px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid26", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Text4}", "top", '282px', { fromValue: '282px'}], position: 2500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Text4}", "left", '200px', { fromValue: '238px'}], position: 1500, duration: 1000 },
            { id: "eid31", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
            { id: "eid32", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 1000 },
            { id: "eid41", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid13", tween: [ "style", "${_remote}", "width", '49px', { fromValue: '128px'}], position: 1500, duration: 1000, easing: "easeOutBack" },
            { id: "eid1", tween: [ "style", "${_remote}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid34", tween: [ "style", "${_remote}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid35", tween: [ "style", "${_remote}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 1000 }         ]
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
