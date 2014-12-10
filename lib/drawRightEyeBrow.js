var clearCanvas = require( './clearCanvas' );

/**
 * This method will draw just the right eyebrow points to the supplied canvas
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
	ctx.moveTo( clmPositions[ 15 ][ 0 ], clmPositions[ 15 ][ 1 ] );

	for( var i = 16; i <= 18; i++ ) {

		ctx.lineTo( clmPositions[ i ][ 0 ], clmPositions[ i ][ 1 ] );
	}

	ctx.stroke();
};