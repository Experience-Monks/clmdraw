var clearCanvas = require( './clearCanvas' );
var drawJaw = require( './drawJaw' );
var drawLeftEye = require( './drawLeftEye' );
var drawLeftEyeBrow = require( './drawLeftEyeBrow' );
var drawLips = require( './drawLips' );
var drawNose = require( './drawNose' );
var drawRightEye = require( './drawRightEye' );
var drawRightEyeBrow = require( './drawRightEyeBrow' );
var drawForeHead = require( './drawForeHead' );

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
module.exports = function draw( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	drawJaw( clmPositions, canvas, strokeStyle, doClear );
	drawLeftEye( clmPositions, canvas, strokeStyle );
	drawLeftEyeBrow( clmPositions, canvas, strokeStyle );
	drawLips( clmPositions, canvas, strokeStyle );
	drawNose( clmPositions, canvas, strokeStyle );
	drawRightEye( clmPositions, canvas, strokeStyle );
	drawRightEyeBrow( clmPositions, canvas, strokeStyle );
	drawForeHead( clmPositions, canvas, strokeStyle );
};