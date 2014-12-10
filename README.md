<a name="module_clmdraw"></a>
#clmdraw
**Members**

* [clmdraw](#module_clmdraw)
  * [module.exports](#exp_module_clmdraw)
    * [clmdraw.draw](#module_clmdraw.draw)
    * [clmdraw.drawForehead](#module_clmdraw.drawForehead)
    * [clmdraw.drawJaw](#module_clmdraw.drawJaw)
    * [clmdraw.drawLeftEye](#module_clmdraw.drawLeftEye)
    * [clmdraw.drawLeftEyeBrow](#module_clmdraw.drawLeftEyeBrow)
    * [clmdraw.drawLips](#module_clmdraw.drawLips)
    * [clmdraw.drawNose](#module_clmdraw.drawNose)
    * [clmdraw.drawRightEye](#module_clmdraw.drawRightEye)
    * [clmdraw.drawRightEyeBrow](#module_clmdraw.drawRightEyeBrow)

<a name="module_clmdraw.draw"></a>
##clmdraw.draw
Draw is equivalent to the draw built into clm (draw the entire face) 
with the exceptions of drawing in a forehead which can be calculated 
using the module clmutils and having the ability to define a stroke 
style. When drawing if the forehead points don't exist then they 
wont be drawn.

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawForehead"></a>
##clmdraw.drawForehead
This method will draw just the forehead points if they exist to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawJaw"></a>
##clmdraw.drawJaw
This method will draw just the jaw points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLeftEye"></a>
##clmdraw.drawLeftEye
This method will draw just the left eye points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLeftEyeBrow"></a>
##clmdraw.drawLeftEyeBrow
This method will draw just the left eyebrow points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLips"></a>
##clmdraw.drawLips
This method will draw just the lip points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawNose"></a>
##clmdraw.drawNose
This method will draw just the nose points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawRightEye"></a>
##clmdraw.drawRightEye
This method will draw just the right eye points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawRightEyeBrow"></a>
##clmdraw.drawRightEyeBrow
This method will draw just the right eyebrow points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- The `HTMLCanvasElement` - canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

