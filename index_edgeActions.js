/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
            $(".logo").css({"position":"absolute", "top":"50%", "left":"50%", "margin-left":"-83px", "margin-top":"-28px"}); 
            $(".start").css({"position":"absolute", "top":"50%", "left":"50%", "margin-left":"-75px", "margin-top":"-34px"}); 

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'name'
   (function(symbolName) {   
   
   })("name");
   //Edge symbol end:'name'

   //=========================================================
   
   //Edge symbol: 'start'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Text5}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("game/index.html", "_self");
         

      });
         //Edge binding end

   })("start");
   //Edge symbol end:'start'

})(jQuery, AdobeEdge, "EDGE-602450017");