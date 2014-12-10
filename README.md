<a name="module_clmdraw"></a>
#clmdraw

## Example
```javascript
 // pointsFromCLM are points that were detected by clm of a persons face
 // canvas is a HTMLCanvasElement
 // last property is a colour you'd like to draw with
 clmdraw.draw( pointsFromCLM, canvas, '#OOCAFE' );
 clmdraw.drawLeftEye( pointsFromCLM, canvas, '#FF00FF' );
 ```

**Members**

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
####clmdraw.draw( clmPositions, canvas, [strokeStyle, doClear ] )
Draw is equivalent to the draw built into clm (draw the entire face) 
with the exceptions of drawing in a forehead which can be calculated 
using the module clmutils and having the ability to define a stroke 
style. When drawing if the forehead points don't exist then they 
wont be drawn.

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawForehead"></a>
####clmdraw.drawForehead( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the forehead points if they exist to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawJaw"></a>
####clmdraw.drawJaw( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the jaw points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLeftEye"></a>
####clmdraw.drawLeftEye( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the left eye points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLeftEyeBrow"></a>
####clmdraw.drawLeftEyeBrow( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the left eyebrow points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawLips"></a>
####clmdraw.drawLips( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the lip points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawNose"></a>
####clmdraw.drawNose( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the nose points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawRightEye"></a>
####clmdraw.drawRightEye( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the right eye points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

<a name="module_clmdraw.drawRightEyeBrow"></a>
####clmdraw.drawRightEyeBrow( clmPositions, canvas, [strokeStyle, doClear ] )
This method will draw just the right eyebrow points to the supplied canvas

**Params**

- clmPositions `Array` - The points returned from clm for the detected face  
- canvas `HTMLCanvasElement` - The canvas which you want to draw the clm face feature on  
- \[strokeStyle\] `String` - How thick and what colour you'd like to draw your lines
                               default is the strokestyle defined by the canvas  
- \[doClear\] `Boolean` - Should the canvas context be cleared before draw default is true  

