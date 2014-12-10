var clearCanvas = require( './clearCanvas' );

/**
 * This method will draw just the left eye points to the supplied canvas
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

	//draw left eye
	ctx.moveTo( clmPositions[ 23 ][ 0 ], clmPositions[ 23 ][ 1 ] );
	ctx.lineTo( clmPositions[ 63 ][ 0 ], clmPositions[ 63 ][ 1 ] );
	ctx.lineTo( clmPositions[ 24 ][ 0 ], clmPositions[ 24 ][ 1 ] );
	ctx.lineTo( clmPositions[ 64 ][ 0 ], clmPositions[ 64 ][ 1 ] );
	ctx.lineTo( clmPositions[ 25 ][ 0 ], clmPositions[ 25 ][ 1 ] );
	ctx.lineTo( clmPositions[ 65 ][ 0 ], clmPositions[ 65 ][ 1 ] );
	ctx.lineTo( clmPositions[ 26 ][ 0 ], clmPositions[ 26 ][ 1 ] );
	ctx.lineTo( clmPositions[ 66 ][ 0 ], clmPositions[ 66 ][ 1 ] );
	ctx.lineTo( clmPositions[ 23 ][ 0 ], clmPositions[ 23 ][ 1 ] );

	//draw left eyebrow
	ctx.moveTo( clmPositions[ 19 ][ 0 ], clmPositions[ 19 ][ 1 ] );

	for( var i = 20; i <= 22; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );		
	}


	ctx.stroke();
};