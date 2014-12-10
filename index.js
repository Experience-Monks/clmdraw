/** @module clmdraw */

/**
 * with clmdraw you can draw [clmtrackr](https://github.com/auduno/clmtrackr) captures.
 *
 * There is a built in method for drawing a capture however with it you cannot define the
 * style or customize the ability to only draw certain parts of the face.
 *
 * @example
 * ```javascript
 * // pointsFromCLM are points that were detected by clm of a persons face
 * // canvas is a HTMLCanvasElement
 * // last property is a colour you'd like to draw with
 * clmdraw.draw( pointsFromCLM, canvas, '#OOCAFE' );
 * ```
 * 
 * @type {Object}
 */
module.exports = {
	
	/**
	 * Draw is equivalent to the draw built into clm (draw the entire face) 
	 * with the exceptions of drawing in a forehead which can be calculated 
	 * using the module clmutils and having the ability to define a stroke 
	 * style. When drawing if the forehead points don't exist then they 
	 * wont be drawn.
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	draw: require( './lib/draw' ),

	/**
	 * This method will draw just the forehead points if they exist to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawForehead: require( './lib/drawForehead' ),

	/**
	 * This method will draw just the jaw points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawJaw: require( './lib/drawJaw' ),

	/**
	 * This method will draw just the left eye points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawLeftEye: require( './lib/drawLeftEye' ),

	/**
	 * This method will draw just the left eyebrow points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawLeftEyeBrow: require( './lib/drawLeftEyeBrow' ),

	/**
	 * This method will draw just the lip points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawLips: require( './lib/drawLips' ),

	/**
	 * This method will draw just the nose points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawNose: require( './lib/drawNose' ),

	/**
	 * This method will draw just the right eye points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawRightEye: require( './lib/drawRightEye' ),

	/**
	 * This method will draw just the right eyebrow points to the supplied canvas
	 * 
	 * @param  {Array} clmPositions The points returned from clm for the detected face
	 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
	 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
	 *                                default is the strokestyle defined by the canvas
	 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
	 */
	drawRightEyeBrow: require( './lib/drawRightEyeBrow' )
};