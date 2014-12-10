var clearCanvas = require( './clearCanvas' );

/**
 * This method will draw just the right eye points to the supplied canvas
 * 
 * @param  {Array} clmPositions The points returned from clm for the detected face
 * @param  {HTMLCanvasElement} The canvas which you want to draw the clm face feature on
 * @param  {String} [strokeStyle] How thick and what colour you'd like to draw your lines
 *                                default is the strokestyle defined by the canvas
 * @param  {Boolean} [doClear] Should the canvas context be cleared before draw default is true
 */
module.exports = function( clmPositions, canvas, strokeStyle, doClear ) {

	var ctx = canvas.getContext( '2d' );

	clearCanvas( ctx, doClear );

	ctx.strokeStyle = strokeStyle || ctx.strokeStyle;

	ctx.beginPath();

	//draw bottom
	ctx.moveTo( clmPositions[ 30 ][ 0 ], clmPositions[ 30 ][ 1 ] );
	ctx.lineTo( clmPositions[ 68 ][ 0 ], clmPositions[ 68 ][ 1 ] );
	ctx.lineTo( clmPositions[ 29 ][ 0 ], clmPositions[ 29 ][ 1 ] );
	ctx.lineTo( clmPositions[ 67 ][ 0 ], clmPositions[ 67 ][ 1 ] );
	ctx.lineTo( clmPositions[ 28 ][ 0 ], clmPositions[ 28 ][ 1 ] );
	ctx.lineTo( clmPositions[ 70 ][ 0 ], clmPositions[ 70 ][ 1 ] );
	ctx.lineTo( clmPositions[ 31 ][ 0 ], clmPositions[ 31 ][ 1 ] );
	ctx.lineTo( clmPositions[ 69 ][ 0 ], clmPositions[ 69 ][ 1 ] );
	ctx.lineTo( clmPositions[ 30 ][ 0 ], clmPositions[ 30 ][ 1 ] );

	ctx.stroke();
};